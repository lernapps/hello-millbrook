# Regenerates the audio files whose tail has a faint extra sound, through the skill's own make_one (tags, check), with the
# faint tail after the last dip cut off and faded out before the wav is encoded.
import importlib.util, sys, json, numpy as np, soundfile
spec = importlib.util.spec_from_file_location("la", ".agents/skills/lernapps-audio/scripts/lernapps_audio.py")
la = importlib.util.module_from_spec(spec); sys.modules["la"] = la; spec.loader.exec_module(la)
W = 240  # 10 ms
def env(a): return np.array([np.sqrt(np.mean(a[i:i + W] ** 2)) for i in range(0, len(a) - W + 1, W)])
def trimmed(a, sr):
    """Cut the faint run-out after the last real sound: everything after the last 10 ms frame that is still at 8 % of
    the loudest frame, with a 30 ms fade. A cut that would take more than 0.3 % of the energy is not made."""
    e = env(a); n = e / e.max(); last = int(np.where(n >= 0.08)[0][-1]); cut = (last + 1) * W
    if len(a) - cut < int(0.06 * sr): return a, 0.0
    frac = float(np.sum(a[cut:] ** 2) / np.sum(a ** 2))
    if frac > 0.003: return a, frac
    fade = int(0.03 * sr); out = a[:cut].copy(); out[-fade:] *= np.linspace(1, 0, fade)
    return out, frac
def valley_cut(a, sr, max_energy=0.02, max_after_ms=130, max_bump=0.30, margin_ms=40, max_removed_ms=100, min_removed_ms=20):
    """A stray sound after the last real word shows as a dip (at most 15 % of the loudest frame) followed by a small
    rise (at least 1.4 times the dip) that is short (at most max_after_ms to the end), low (at most max_bump of the loudest
    frame: a real syllable is louder) and carries little energy (at most max_energy of the whole file). Cut at the last
    such dip plus a safety margin of margin_ms (so that the end of a real sound is not cut), fade 30 ms.
    Never remove more than max_removed_ms (measured from the end of the tail cut), and no cut for less than min_removed_ms. Returns (audio, ms_cut) or (a, 0)."""
    e = env(a); n = e / e.max(); last = int(np.where(n >= 0.08)[0][-1]); best = None
    for v in range(max(1, last - 40), last - 2):
        if n[v] <= 0.15 and n[v] <= n[v - 1] and n[v] <= n[v + 1] and n[v + 1:last + 1].max() >= 1.4 * n[v]: best = v
    if best is None or (last - best) * 10 > max_after_ms or n[best + 1:last + 1].max() > max_bump: return a, 0
    cut = best * W + W // 2 + margin_ms * sr // 1000
    if float(np.sum(a[cut:] ** 2) / np.sum(a ** 2)) > max_energy: return a, 0
    removed = (last + 1) * W - cut
    if removed > max_removed_ms * sr / 1000 or removed < min_removed_ms * sr / 1000: return a, 0
    fade = int(0.03 * sr); out = a[:cut].copy(); out[-fade:] *= np.linspace(1, 0, fade)
    return out, int(1000 * (len(a) - cut) / sr)
import os
DRY = bool(os.environ.get("DRY"))
NO_DIP = "--no-dip-cut" in sys.argv          # default: the dip cut is on
sys.argv = [x for x in sys.argv if x != "--no-dip-cut"]
orig = la.synthesize
def patched(voice, lang_code, text, speed, wav, cache):
    orig(voice, lang_code, text, speed, wav, cache)
    a, sr = soundfile.read(str(wav)); a = a.astype(np.float32)
    b, frac = trimmed(a, sr)                                   # the tail cut as before (8 % threshold)
    v, ms = (a, 0) if NO_DIP else valley_cut(a, sr)
    if ms:
        removed = len(b) - len(v)
        print("   dip cut: %r at %d ms, %d ms removed (%.1f %% of the duration)" % (text, 1000 * len(v) // sr, 1000 * removed // sr, 100 * removed / len(b)))
        b = v
    else:
        print("   tail: %.0f ms cut, %.2f%% energy%s" % (1000 * (len(a) - len(b)) / sr, 100 * frac, " (dip cut off)" if NO_DIP else ""))
    if not DRY: soundfile.write(str(wav), b, sr)
la.synthesize = patched
texts = json.load(open(sys.argv[1])); only = set(sys.argv[2:])
ff = la.find_ffmpeg(); cache = {}
for out, text in texts.items():
    if only and text not in only: continue
    item = {"voice": "bf_emma", "text": text, "out": out, "lang": "en", "accent": "gb", "speed": float(__import__("os").environ.get("SPEED","1.0")), "force": True}
    print(la.make_one(item, ff, cache))

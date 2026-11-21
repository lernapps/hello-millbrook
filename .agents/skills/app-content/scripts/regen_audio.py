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
orig = la.synthesize
def patched(voice, lang_code, text, speed, wav, cache):
    orig(voice, lang_code, text, speed, wav, cache)
    a, sr = soundfile.read(str(wav))
    b, frac = trimmed(a.astype(np.float32), sr)
    soundfile.write(str(wav), b, sr)
    print("   tail: %.0f ms cut, %.2f%% energy" % (1000 * (len(a) - len(b)) / sr, 100 * frac))
la.synthesize = patched
texts = json.load(open(sys.argv[1])); only = set(sys.argv[2:])
ff = la.find_ffmpeg(); cache = {}
for out, text in texts.items():
    if only and text not in only: continue
    item = {"voice": "bf_emma", "text": text, "out": out, "lang": "en", "accent": "gb", "speed": float(__import__("os").environ.get("SPEED","1.0")), "force": True}
    print(la.make_one(item, ff, cache))

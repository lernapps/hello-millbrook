## Gemeinsame Konventionen für alle Explainer (Stand nach #470)

Referenz: [`lernapps/hello-millbrook`](https://github.com/lernapps/hello-millbrook), live unter <http://lernapps.net/hello-millbrook/>. Der **Inhaltsführer** `.agents/skills/app-content/SKILL.md` dort ist das Muster für jeden eigenen Inhaltsführer (Abschnitte, Übungsmuster, „Rules learned from mistakes“). Das Vorgehen selbst steht in den Skills; hier stehen nur die Dinge, die für alle Explainer gleich sein müssen.

### 1. Zuschnitt und Reihenfolge

- Ein Repository je Explainer: `lernapps/<name>`, App unter `https://lernapps.net/<name>/`.
- **Die erste Version baut nur die Kapitel der niedrigsten Stufe des Explainers.** Spätere Stufen kommen als Inkremente (`increment/<NN>-<name>`) in dasselbe Repository, nachdem die Lernenden älter geworden sind (siehe 2).
- Welle 1 sind die Kapitel der Stufe **5-6**. Aus den `requires` der Karte ergibt sich diese Schichtung (ein Baustein eines anderen Explainers wird als Wiederholungsseite `recap` am Kapitelanfang wiederholt, nicht neu geübt):

| Schicht | Explainer | braucht (Stufe 5-6) |
|---|---|---|
| 0 | #470 Hello, Millbrook! (fertig) | |
| 1 | #471 Pronomen · #472 Zeiten · #480 Verbketten | #472: `personalpronomen` aus #471 |
| 2 | #473 Sätze bauen · #475 Dinge, Mengen, Orte · #476 Adjektive, Adverbien · #481 Sätze verbinden | #472, #470 |
| 3 | #477 Alltag · #478 Großbritannien · #479 Geschichten · #482 Klang und Schrift | #472, #473, #475, #476 |

- Danach Welle 2 (Stufe 7-8: Inkremente zu #471, #472, #475, #476, #478, #479, #480, #481, #482 und die ersten Versionen von #484, #485, #486, #487) und Welle 3 (9-10: Inkremente zu #472, #473, #481, #484, #485, #486, #487 und die erste Version von #483).
- Eine Session baut ihre Schicht erst, wenn die vorige als Vorschau-Pull-Request vorliegt, damit Wiederholungsseiten auf echte Seiten verweisen können.

### 2. Die Figuren werden mit den Lernenden älter

| Stufe | Sophie ist | Form der Geschichte | Ton |
|---|---|---|---|
| 5-6 | 11 bis 12, erstes Schuljahr in Millbrook | gezeichnete Kinder, eine Szene je Seite (Vorlage in #470) | kurze Sätze, Dinge aus dem Alltag der Kinder |
| 7-8 | 13 bis 14, sie bleibt in England | Nachrichten, Chats und kurze Dialoge, ein Bild nur wo es etwas zeigt | längere Texte, eigene Meinung, erste Sachthemen |
| 9-10 | 15 bis 16 | ein realer oder realistischer Fall mit Daten, Quellen und einer Entscheidung; **keine erfundenen Kinder mehr** (`explainer-age-appropriate`) | sachlich, kein Kleinreden |

Der Inhalt entwickelt sich mit: Aus „Ich stelle mich vor“ wird erst „Ich erzähle von gestern“, dann „Ich begründe meine Meinung“, dann „Ich schreibe eine Bewerbung“.

### 3. Figuren und Orte (nicht ändern)

- **Sophie** (blond, Zöpfe, grüne Jacke, aus Deutschland, wohnt bei den Parkers), **Ellie Parker** (11, roter Pferdeschwanz, rote Jacke), **Peter Parker** (9, kurze braune Haare, gelbe Jacke, Ellies Bruder), **Amir** (11, schwarze Locken, Brille, blaue Jacke), **Mr Hill** (Englischlehrer, graue Haare, braune Jacke), **Mrs Parker** (Ellies Mutter, Sophies Gastmutter). Die Zeichnungen der Figuren stehen als `<g id="…">` in `src/images/millbrook-klassenzimmer.svg` von #470: von dort kopieren und gleich lassen.
- **Millbrook School**, erfundene Schule in einer englischen Kleinstadt. Schultag beginnt 8:45. Geburtstage: Peter 5. Mai, Ellie 10. Juli, Amir 12. Oktober, Sophie 14. Oktober.
- **Lagerraum und Schulfest** (#475): Der Lagerraum der Millbrook School liegt im Erdgeschoss neben dem Klassenzimmer. Mr Hill ordnet dort im Herbst mit Sophie, Ellie, Peter und Amir Dinge fürs Schulfest (Zählbares in Kisten, Nicht-Zählbares in Gläser, alles auf Regalen); Mrs Parker backt Kuchen. Das Schulfest ist am ersten Samstag im Dezember um 10 Uhr, der Schulkalender hängt neben der Lagerraumtür.
- **Ausstellung „Our Millbrook“** (#476): Im Flur der Millbrook School baut Mr Hills Klasse im Herbstquartal, einige Wochen nach Sophies Ankunft und vor den Elternabenden, eine Ausstellung mit Fotos und Zeichnungen von Orten, Dingen und Leuten der Stadt auf und beschriftet sie mit Anhängern. Kein Datum, kein Schulfest, kein Lagerraum.
- **Neue Orte und Personen** nur einführen, wenn der Explainer sie braucht, und hier als Kommentar eintragen, bevor ein zweiter Explainer sie benutzt.

### 4. Begriffe, Sprache und Aussprache

- „**Ausdruck**“ (fester Ausdruck), nie „Wendung“. Die Tabellen heißen „Klassenzimmer-Poster · …“ und „Schulkalender · …“ und wachsen von Explainer zu Explainer.
- Deutsche Erklärtexte, englische Beispiele, **britisches Englisch** (favourite, colour), Anrede „du“ (ab 9-10 nach Absprache).
- Keine englischen Sätze mit deutschen Wörtern darin. Die Fachbegriffe noun, verb, adjective, sentence, tense gelten ab #470.
- Aussprache: Lesehilfe in deutscher Annäherung (`gud-BAI`, `aim`, `FENK ju`), betonte Silbe in Großbuchstaben, keine Lautschrift. Lautschrift (IPA) gehört nur in #482.

### 5. Übungen und Audio

- Übungen von leicht zu schwer, mindestens vier je Seite, nicht überwiegend Raten, eigene Rückmeldung je typischem Fehler.
- Gelernte Regeln aus #470 (im Inhaltsführer): Übungen fragen nur Wörter ab, die vorher auf der Seite stehen. Eine Tabelle, die eine Übung beantwortet, steht nicht direkt darüber. Auswahlaufgaben zur Großschreibung zeigen alle Optionen gleich geschrieben. Gleichwertige richtige Antworten mit `(a|b)` zulassen.
- **Audio:** Stimme `bf_emma` (britisch). Nur ganze Sätze, keine Einzelwörter. Die Stimme hängt an kurzen Sätzen ein leises Ausklingen an („Lena…s“): Nach dem Erzeugen wird es abgeschnitten, das Skript `.agents/skills/app-content/scripts/regen_audio.py` aus #470 macht das. **Namen am Satzende zweisilbig wählen** (Sophie, Peter gehen, Tom und Mark nicht).
- Die Audio-Umgebung lädt etwa 0,6 GB (Netz: `pypi.org`, `github.com`, `huggingface.co`).

### 6. Vor dem Veröffentlichen

- Ein Lerner-Check der Musterseite und **ein Gesamtcheck** der fertigen App mit einem Sub-Agenten (Kind der jeweiligen Stufe), dazu eine Prüfung der englischen und deutschen Sprache. Die Funde werden behoben, bevor die App gezeigt wird.
- In dieser Reihe **stoppen die Sessions vor dem Veröffentlichen**: Der Vorschau-Pull-Request bleibt offen. Der Ersteller prüft die fertigen Pull-Requests und veröffentlicht.
- Befunde zur Karte gehören in das Issue „Lernlandkarte: offene Prüfpunkte“ (Label `map-review`). Fehler der Vorlage (zum Beispiel die Standardmeldung „Deine Fassung kann trotzdem richtig sein“, kleine Auswahlfelder) in `lernapps/app-templates`.

---

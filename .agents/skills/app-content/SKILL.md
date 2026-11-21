---
name: app-content
description: Use for any content work in this app - researching, writing, extending, correcting or reviewing its competencies, chapters, pages, rounds, questions, exercises, figures, terms or sources. This app's own content decisions; they take precedence over the generic lernapps content skills. Load it before you change any content.
---

# Content guide of this app

Hello, Millbrook! Explainer (Einheit `subject: englisch`, Stufe 5-6, Sprache Deutsch) für die ersten Englischstunden. Auftrag: Issue lernapps/apps#470.

## Curriculum

Englisch als erste Fremdsprache am Gymnasium, Klasse 5-6 (erstes und zweites Lernjahr), ohne Unterrichtsvorwissen. Kein Lehrplan: Reihenfolge und Bausteine kommen aus der Lernlandkarte `https://lernapps.net/apps/map/englisch.json` (Fokus `competency`). Alles ist als fester Ausdruck (chunk) gelernt, die Regeln folgen in den System-Explainern (Imperativ #473, Präpositionen der Zeit #475). Nicht hier: Familie und Freizeit (#477), Stadt (#478), USA (#484).

## Competencies

Alle zehn sind Lücken der Karte. Kapitel `hello`, `zahlen-uhr-kalender`, `schuljahr`; eine Seite je Baustein.

1. Kapitel `hello`
   - `gruss-hoeflichkeit`: Ich kann Menschen auf Englisch angemessen begrüßen, anreden und mich höflich bedanken und entschuldigen. → `hello/begruessung`
   - `classroom-phrases`: Ich kann im Unterricht auf Englisch um Hilfe bitten, nachfragen und Anweisungen verstehen. → `hello/classroom`
   - `grammatik-fachbegriffe`: Ich kann grundlegende Fachbegriffe wie noun, verb, adjective, tense und sentence verstehen und verwenden. → `hello/fachbegriffe`
2. Kapitel `zahlen-uhr-kalender`
   - `zahlen`: Ich kann Grund- und Ordnungszahlen sagen und schreiben, auch große Zahlen und Preise. → `zahlen-uhr-kalender/zahlen`
   - `uhrzeit`: Ich kann die Uhrzeit sagen und nach ihr fragen (half past seven, a quarter to eight). → `…/uhrzeit`
   - `datum`: Ich kann Wochentage, Monate, Datum und Jahreszahlen sagen und schreiben. → `…/datum`
   - `grossschreibung`: Ich kann die englischen Regeln der Großschreibung anwenden (I, Monday, English, Nomen klein). → `…/grossschreibung`
3. Kapitel `schuljahr`
   - `schule`: Ich kann über meine Schule sprechen: Fächer, Stundenplan, Klassenzimmer und Schultag. → `schuljahr/schule`
   - `feste-uk`: Ich kann wichtige Feste und Bräuche in Großbritannien beschreiben, zum Beispiel Christmas, Bonfire Night und Halloween. → `schuljahr/feste`
   - `schule-uk`: Ich kann den Schulalltag in Großbritannien beschreiben, zum Beispiel Schuluniform und Schultag, und mit meiner Schule vergleichen. → `schuljahr/schule-uk`

Alle Voraussetzungen stehen auf früheren Seiten; kein `ahead`, keine Wiederholungsseite. Die Übungs-IDs je Seite stehen in den Seitendateien, Präfix = Seite (`begruessung-…`, `classroom-…`, `fachbegriffe-…`, `zahlen-…`, `uhrzeit-…`, `datum-…`, `grossschreibung-…`, `schule-…`, `feste-…`, `schule-uk-…`). Die Ordnungszahlen (Teil von `zahlen`) übt die Seite `datum`; `zahlen` geht von 0 bis 100 und Preise in Pfund und Pence. Die Seite `grossschreibung` hat keine Sprechaufgabe (Großschreibung ist nicht hörbar).

## Content structure

- Pfad: `src/<kapitel>/chapter.yaml`, Seiten `src/<kapitel>/<seite>.yaml`.
- Jede Seite hat dieselben Abschnitts-IDs in dieser Reihenfolge: `einstieg` (Lenas Szene, erste leichte Aufgabe, „Das kannst du danach“), `neu` (Ausdrücke mit Bedeutung, Merke-Kasten), `uebung` (mindestens vier Übungen, leicht → schwer), `anwenden` (`open-task` oder `speaking-task`), `weiter` (nächster Schritt der Geschichte; am Kapitelende ein Rückblick). Titel sagen, was der Abschnitt tut.
- Länge: höchstens 350 Wörter Text, höchstens 4 Textblöcke hintereinander, Bild oder Übung in den ersten vier Blöcken.
- Geschichte: Lena (11, aus Deutschland, ein Schuljahr an der Millbrook School, einer erfundenen Schule in einer englischen Kleinstadt, wohnt bei den Parkers), Ellie Parker (11), ihr Bruder Josh (9), Freund Amir (11). Lehrer: Mr Hill (Englisch). Mrs Parker ist Ellies Mutter und Lenas Gastmutter. Fest vorgegeben: Poster-Tabellen heißen „Klassenzimmer-Poster · <Thema>“, Kalender-Tabellen „Schulkalender · <Thema>“. Aussehen und Namen einmal in `src/images/` (Figuren-SVG) festgelegt und überall gleich. Zwei wachsende Bilder: Klassenzimmer-Poster (Tabelle Ausdruck · Bedeutung) und Schulkalender (Tabelle).

## Terminology

- Anrede „du“. Wörter: „Ausdruck“ (fester Ausdruck), „Poster“, „Kalender“, „Millbrook School“.
- Englische Ausdrücke und Wörter immer mit deutscher Bedeutung. Fachbegriffe noun, verb, adjective erst auf `hello/fachbegriffe` als Etiketten an Beispielwörtern. Britisches Englisch (Schreibweise und Stimme).
- Aussprache: Nur die Seite `hello/begruessung` hat eine Lesehilfe („So sprichst du es“, Tabelle und Kasten „So liest du es laut“): deutsche Annäherung in Kleinbuchstaben, betonte Silbe in Großbuchstaben, ii für ein langes i (`gud-BAI`, `aim`, `FENK ju`). Keine Lautschrift (IPA): sie gehört in den Explainer #482 „Klang und Schrift“ (Baustein `lautschrift`). Wichtige Muster: oo in good kurz, I und bye wie „ai“, th wie ein F mit der Zunge zwischen den Zähnen („fenk ju“). Übung `begruessung-aussprache`.
- Keine Grammatikregel erklären: nur chunks (Regeln stehen in #471–#475).

## Exercise patterns

Aufbau: leicht → schwer: wählen (`single-choice`, `matching`) → Lücken (`language-task` mode `gap`/`choice` mit `distractors`) → schreiben (`write`, Deutsch → Englisch, `mistakes` nennen die Regel) → übersetzen in beide Richtungen → freie Aufgabe.

- Ausdruck zuordnen: Situation → passenden Ausdruck; `matching`, `language-task` choice/write (Begrüßung, Classroom phrases).
- Beschriften: `labelled-figure` mit `legend: false`, `language-task` mit `marker`. Die Wörter stehen vorher auf dem Poster („Dinge im Klassenzimmer“).
- Begriffe sortieren: `matching` Wort ↔ Fachbegriff.
- Hören und schreiben: `language-task` mit `audio` (Diktat); Nachsprechen: `speaking-task`. Gesprochener Text ist ein ganzer Satz mit ausgeschriebenen Zahlen.
- Reihenfolge: `ordering` (Zahlen, Wochentage, Monate, Stundenplan, Jahreslauf).
- Ableiten: Zahlen -teen/-ty, Ordnungszahlen: `language-task` mode `table`.
- Uhr zum Drehen: Übungskomponente `Uhr` (`src/components/Uhr.vue`, `Uhr.ts`, `Uhr.test.ts`), Block `uhr-stellen` auf `zahlen-uhr-kalender/uhrzeit`. Aufgabe „Stelle die Uhr auf: {zeit}“; Antwort = Minuten seit 12:00; Fehlermeldungen für past/to vertauscht und half past = halb. Neue Zeiten kommen aus `generate(seed)` in `Uhr.ts`.
- Korrigieren: `language-task` write mit `form: case wrong`.
- Vergleichen: `matching` in zwei Spalten, `true-false` mit Begründung.
- Beispiel (Musterseite): `src/hello/begruessung.yaml`, Übungs-ID `begruessung-tageszeit` (`language-task` mode `choice`).
- Audio: `src/audio/<satz-in-kleinbuchstaben>.mp3`, Stimme `bf_emma` (englisch, britisch), erzeugt mit `.agents/skills/lernapps-audio/scripts/lernapps_audio.py generate --lang en --accent gb --voice bf_emma`. Der gesprochene Text ist ein ganzer Satz und eine richtige Antwort der Aufgabe. Jede Seite hat ein Diktat (`<seite>-hoeren`) und eine Sprechaufgabe (`<seite>-nachsprechen`).
- Keine Datendateien: jede Tatsache steht einmal in den Items ihrer Seite.

## Figures

- Poster und Kalender sind `table`-Blöcke mit Beschriftung und wachsen von Seite zu Seite um die Zeilen der Seite; Kinder lesen sie ab.
- Szenen und Figuren: eigene SVG-Zeichnungen in `src/images/` (`millbrook-klassenzimmer.svg` mit allen vier Kindern, je Seite eine `szene-<thema>.svg`, `uhren-sieben.svg`, `klassenzimmer-dinge.svg`; Quelle „eigene Zeichnung“, Lizenz `CC-BY-4.0`), nach `story-characters.svg` der Skills; keine Fotos, keine Figuren aus Büchern, Filmen oder Marken. `alt` sagt, was die Szene zeigt, nicht die Lösung.
- Uhr: Komponente für die Übung; Erklärfiguren als feste SVG-Uhren. Kein Zeiger zeigt die Lösung vor „Prüfen“.
- Jede Figur funktioniert bei 360 px.

## Sources

Karte `https://lernapps.net/apps/map/englisch.json`, Grundwortschatz `https://lernapps.net/apps/map/englisch/grundwortschatz/`. Landeskunde: geprüft sind nur diese Fakten aus Wikipedia (nur Fakten, keine Sätze): Halloween am 31. Oktober (Artikel „Halloween“), Bonfire Night am 5. November mit Lagerfeuer und Feuerwerk, Erinnerung an 1605 (Artikel „Guy Fawkes Night“), house system als Einteilung der Schule in Gruppen, die im Sport gegeneinander antreten können (Artikel „House system“). Ungeprüft, weil die Wikipedia-Abfrage auf 429 antwortete: Schuluniform an britischen Schulen („viele“ Schulen) und Christmas am 25. Dezember; deshalb vorsichtig formuliert. Millbrook School ist erfunden; was dort gilt, ist Teil der Geschichte. Audio: KI-Stimme britisch weiblich, erzeugt mit Skill `lernapps-audio`, als KI-generiert markiert. Material der Erstellerin oder des Erstellers: keines.

## Adding a chapter or round

1. Baustein auf der Karte wählen (Voraussetzungen müssen auf früheren Seiten stehen).
2. Seite `src/<kapitel>/<seite>.yaml` mit Abschnitten `einstieg`, `neu`, `uebung`, `anwenden`, `weiter` anlegen und in `chapter.yaml` eintragen; Competency-ID eintragen.
3. Poster oder Kalender um die Zeilen der Seite erweitern.
4. Übungen aus den Mustern oben, je mit `mistakes` und `hint`.
5. Hörtexte mit Skill `lernapps-audio` erzeugen und anhören lassen.
6. `npx --no -- lernapps check`, committen.

## Rules learned from mistakes

- Jede Übung fragt nur Wörter ab, die vorher auf der Seite (Poster-Tabelle) stehen (Klassenzimmer-Dinge, £ und p, die Minuten-Tabelle): der Gesamtcheck fand Aufgaben mit unbekannten Wörtern.
- Eine Tabelle, die eine Übung beantwortet, steht nicht direkt über ihr: der Stundenplan steht auf `schuljahr/schule` unter dem Abschnitt `weiter`, nicht vor der Übung `schule-stundenplan`.
- Englische Aufgaben enthalten kein deutsches Wort (statt „What's Tafel in English?“ steht „What's this in English?“).
- Mit `(a|b)` gleichwertige richtige Antworten zulassen (You're/You are, favourite/favorite, a/a school uniform); `case: wrong` nur dort, wo die Seite die Großschreibung unterrichtet (`grossschreibung`, `schule-schreiben`).
- Schreibe die Uhrzeit nicht „halb acht = half eight“: half past seven ist 7:30, das deutsche „halb acht“ ebenso, es zählt nur von der nächsten Stunde aus.
- Begriff: „Ausdruck“ (fester Ausdruck, Mehrzahl Ausdrücke), nie „Wendung“ (Wunsch der Erstellerin oder des Erstellers); überall derselbe Begriff, auch in Tabellenköpfen (`Ausdruck · Bedeutung`).
- Auswahlaufgaben zur Großschreibung zeigen alle Optionen gleich geschrieben (klein), sonst verrät die Schreibung die Lösung.
- Audio: Die Stimme hängt an kurzen Sätzen ein leises Ausklingen von etwa 100 bis 250 ms an, das als Störlaut („Lena…s“) zu hören ist. Darum entstehen alle Dateien mit `.agents/skills/app-content/scripts/regen_audio.py` (im Ordner der App ausführen, mit dem Python der Audio-Umgebung `~/.cache/lernapps/audio/venv/bin/python`). Es nutzt das Skript `lernapps-audio` mit Tags und Prüfung und schneidet vor dem Kodieren alles hinter dem letzten Laut ab (unter 8 % der lautesten Stelle in 10-ms-Fenstern), blendet 30 ms aus und schneidet nur, wenn weniger als 0,3 % der Energie wegfallen. Aufruf: `python regen_audio.py <texte.json> [Satz …]`, die JSON-Datei ordnet je Datei `src/audio/<name>.mp3` ihren Satz zu. Neue Sätze so erzeugen und anhören.
- Bilder: Beschriftungen innerhalb des `viewBox` halten (die Uhren-Zeichnung war unten abgeschnitten).

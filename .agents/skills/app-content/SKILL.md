---
name: app-content
description: Use for any content work in this app - researching, writing, extending, correcting or reviewing its competencies, chapters, pages, rounds, questions, exercises, figures, terms or sources. This app's own content decisions; they take precedence over the generic lernapps content skills. Load it before you change any content.
---

# Content guide of this app

Hello, Millbrook! Explainer (Einheit `subject: englisch`, Stufe 5-6, Sprache Deutsch) für die ersten Englischstunden. Auftrag: Issue lernapps/apps#470.

## Curriculum

Englisch als erste Fremdsprache am Gymnasium, Klasse 5-6 (erstes und zweites Lernjahr), ohne Unterrichtsvorwissen. Kein Lehrplan: Reihenfolge und Bausteine kommen aus der Lernlandkarte `https://lernapps.net/apps/map/englisch.json` (Fokus `competency`). Alles ist als feste Wendung (chunk) gelernt, die Regeln folgen in den System-Explainern (Imperativ #473, Präpositionen der Zeit #475). Nicht hier: Familie und Freizeit (#477), Stadt (#478), USA (#484).

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

Alle Voraussetzungen stehen auf früheren Seiten; kein `ahead`, keine Wiederholungsseite. Die Übungs-IDs je Seite stehen in den Seitendateien (`<seitenkürzel>-<art>`, z. B. `begruessung-wahl`).

## Content structure

- Pfad: `src/<kapitel>/chapter.yaml`, Seiten `src/<kapitel>/<seite>.yaml`.
- Jede Seite hat dieselben Abschnitts-IDs in dieser Reihenfolge: `einstieg` (Lenas Szene, erste leichte Aufgabe, „Das kannst du danach“), `neu` (Wendungen mit Bedeutung, Merke-Kasten), `uebung` (mindestens vier Übungen, leicht → schwer), `anwenden` (`open-task` oder `speaking-task`), `weiter` (nächster Schritt der Geschichte; am Kapitelende ein Rückblick). Titel sagen, was der Abschnitt tut.
- Länge: höchstens 350 Wörter Text, höchstens 4 Textblöcke hintereinander, Bild oder Übung in den ersten vier Blöcken.
- Geschichte: Lena (11, aus Deutschland, ein Schuljahr an der Millbrook School, einer erfundenen Schule in einer englischen Kleinstadt, wohnt bei den Parkers), Ellie Parker (11), ihr Bruder Josh (9), Freund Amir (11). Lehrer: Mr Hill (Englisch). Mrs Parker ist Ellies Mutter und Lenas Gastmutter. Aussehen und Namen einmal in `src/images/` (Figuren-SVG) festgelegt und überall gleich. Zwei wachsende Bilder: Klassenzimmer-Poster (Tabelle Wendung · Bedeutung) und Schulkalender (Tabelle).

## Terminology

- Anrede „du“. Wörter: „Wendung“ (feste Wendung), „Poster“, „Kalender“, „Millbrook School“.
- Englische Wendungen und Wörter immer mit deutscher Bedeutung. Fachbegriffe noun, verb, adjective erst auf `hello/fachbegriffe` als Etiketten an Beispielwörtern. Britisches Englisch (Schreibweise und Stimme).
- Keine Grammatikregel erklären: nur chunks (Regeln stehen in #471–#475).

## Exercise patterns

Aufbau: leicht → schwer: wählen (`single-choice`, `matching`) → Lücken (`language-task` mode `gap`/`choice` mit `distractors`) → schreiben (`write`, Deutsch → Englisch, `mistakes` nennen die Regel) → übersetzen in beide Richtungen → freie Aufgabe.

- Wendung zuordnen: Situation → passende Wendung; `matching`, `language-task` choice/write (Begrüßung, Classroom phrases).
- Beschriften: `labelled-figure` mit `legend: false`, `language-task` mit `marker`.
- Begriffe sortieren: `matching` Wort ↔ Fachbegriff.
- Hören und schreiben: `language-task` mit `audio` (Diktat); Nachsprechen: `speaking-task`. Gesprochener Text ist ein ganzer Satz mit ausgeschriebenen Zahlen.
- Reihenfolge: `ordering` (Zahlen, Wochentage, Monate, Stundenplan, Jahreslauf).
- Ableiten: Zahlen -teen/-ty, Ordnungszahlen: `language-task` mode `table`.
- Uhr zum Drehen: Übungskomponente `Uhr` (`src/components/Uhr.vue`, `Uhr.ts`, `Uhr.test.ts`).
- Korrigieren: `language-task` write mit `form: case wrong`.
- Vergleichen: `matching` in zwei Spalten, `true-false` mit Begründung.
- Beispiel: sobald die Musterseite steht, `src/hello/begruessung.yaml`, Übungs-ID `begruessung-wahl`.
- Keine Datendateien: jede Tatsache steht einmal in den Items ihrer Seite.

## Figures

- Poster und Kalender sind `table`-Blöcke mit Beschriftung und wachsen von Seite zu Seite um die Zeilen der Seite; Kinder lesen sie ab.
- Szenen und Figuren: eigene SVG-Zeichnungen in `src/images/` (Quelle „eigene Zeichnung“, Lizenz `CC-BY-4.0`), nach `story-characters.svg` der Skills; keine Fotos, keine Figuren aus Büchern, Filmen oder Marken. `alt` sagt, was die Szene zeigt, nicht die Lösung.
- Uhr: Komponente für die Übung; Erklärfiguren als feste SVG-Uhren. Kein Zeiger zeigt die Lösung vor „Prüfen“.
- Jede Figur funktioniert bei 360 px.

## Sources

Karte `https://lernapps.net/apps/map/englisch.json`, Grundwortschatz `https://lernapps.net/apps/map/englisch/grundwortschatz/`. Landeskunde (Schuluniform, house system, Bonfire Night, Halloween): Fakten aus Wikipedia („House system“, „Education in England“, „Halloween“, „Bonfire Night“), nur Fakten, keine Sätze; Daten und Ablauf vor dem Schreiben nochmals prüfen, Ungeprüftes weglassen. Audio: KI-Stimme britisch weiblich, erzeugt mit Skill `lernapps-audio`, als KI-generiert markiert. Material der Erstellerin oder des Erstellers: keines.

## Adding a chapter or round

1. Baustein auf der Karte wählen (Voraussetzungen müssen auf früheren Seiten stehen).
2. Seite `src/<kapitel>/<seite>.yaml` mit Abschnitten `einstieg`, `neu`, `uebung`, `anwenden`, `weiter` anlegen und in `chapter.yaml` eintragen; Competency-ID eintragen.
3. Poster oder Kalender um die Zeilen der Seite erweitern.
4. Übungen aus den Mustern oben, je mit `mistakes` und `hint`.
5. Hörtexte mit Skill `lernapps-audio` erzeugen und anhören lassen.
6. `npx --no -- lernapps check`, committen.

## Rules learned from mistakes

None yet.

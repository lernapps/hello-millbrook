---
# Read by the hooks, the review, the evals. Schema: @lernapps/tooling/guidance/plan-front-matter.v1.schema.json
# Written by `lernapps plan` and the hooks. Never change a key or a value by hand.
# Archetype, null until chosen in Explore. Allowed values: explainer, interactive, quiz.
archetype: explainer
# Current phase. Allowed values: explore, plan, code, commit.
phase: code
# prePushFailures: failed pre-push runs, written by the hook.
prePushFailures: 0
# failedChecks: failed rules and runs, written by lernapps check and the hooks.
failedChecks: {}
---

# Plan: hello-millbrook, first version

<!--
For you, the assistant. The process is in AGENTS.md; this plan holds the method.
- `npx --no -- lernapps plan next` prints the task to do now, `plan done` ticks it and prints the next one.
- You write only below Goal, Key decisions, Notes, Answers, Entry draft, Content method and Retrospective, in the
  creator's language. Delete the comment of a section once the section is filled.
- Work on the branch `work`, locally: push nothing before Commit.
-->

*Started 2026-11-20. Explore, Plan, Code, Commit.*

## Goal

Kinder der Klassen 5–6 erleben Lenas ersten Tage an der Millbrook School und üben dabei feste englische Wendungen, Zahlen, Uhrzeit, Datum und das Sprechen über ihre Schule.

## Key decisions

- Archetyp `explainer` (Einheit, `subject: englisch`): Kinder brauchen Seiten, die Wendungen einführen, mit Übungen dazwischen; `quiz` hätte keine Erklärseiten, `interactive` (Spiel/Zeitdruck) ist nicht gefragt. Hören/Sprechen mit KI-Stimmen ist im Explainer möglich. Er kann nicht: Sprechen bewerten, Timer/Spiel, eigene Farben; Uhr und Kalender nur als Vue-Komponenten.
- Inhalt, Kapitel und Seiten aus Issue #470 (Auftrag der Erstellerin/des Erstellers: „Inhalte aus dem Issue nehmen“); App auf Deutsch (Sprache der Lernenden), Beispiele Englisch.
- Stimme: britisch weiblich (guess: Ersteller antwortete „Passt beides“ ohne Wahl); Download für Audio ist erlaubt.
- Worktree `/home/user/hello-millbrook`, später eigenes Repository (Wunsch des Erstellers).

## Notes

Strang: Einheit (Karte `englisch`, Fokus `competency`), Stufe 5-6, Inhalt aus Issue lernapps/apps#470 (Karte gelesen, alle 10 Bausteine sind Lücken ohne `practisedBy`).

Kapitel und Bausteine (Schritt, öffnet):
1. Hello! – `gruss-hoeflichkeit` (1, 5), `classroom-phrases` (1, 3), `grammatik-fachbegriffe` (1, 1)
2. Zahlen, Uhr und Kalender – `zahlen` (1, 20), `uhrzeit` (2, 4), `datum` (2, 13), `grossschreibung` (3, 0)
3. Ein Schuljahr in Millbrook – `schule` (3, 3), `feste-uk` (3, 1), `schule-uk` (4, 2)

Alle Voraussetzungen liegen im Schnitt (zahlen → uhrzeit, datum → schule, grossschreibung, feste-uk; schule → schule-uk): keine Sammel-Wiederholung nötig. Kapitel 3 setzt `datum` aus Kapitel 2 voraus; Seitenreihenfolge im Kapitel nach Schritt.
Geschichte (fix aus Issue): Lena (aus Deutschland, Schuljahr an der erfundenen Millbrook School, wohnt bei den Parkers), Ellie Parker, ihr Bruder Josh, Freund Amir. Zwei wachsende Bilder: Klassenzimmer-Poster mit Wendungen, Schulkalender (Uhrzeiten, Daten, Stundenplan, Feste).
Didaktik: feste Wendungen (chunks) ohne Regel; Regeln folgen in #471–#475. Abgrenzung: Imperativ-Regel #473, Präpositionen der Zeit #475, Familie/Freizeit #477, Stadt #478, High School USA #484.
Nicht ändern: die Lernlandkarte; Auffälligkeiten ins Issue „Lernlandkarte: offene Prüfpunkte“ (Label `map-review`).

Üben (Muster der Fremdsprachen): Wendungen und Wörter immer mit Bedeutung eingeführt, dann leicht → schwer: wählen (`choice`) → Lücken (`gap`) → schreiben (`write`) → Übersetzen in beide Richtungen → `open-task` aus der Situation. Wortschatz mit Artikel, Quelle: Grundwortschatz der Karte (Stufe A1). Beschriften am Bild (`labelled-figure`) für Klassenzimmer und Tafel; Reihenfolge (`ordering`) für Uhrzeit, Datum, Stundenplan; Zuordnen für Fachbegriffe (noun, verb, adjective), Begrüßung je nach Tageszeit und Schule hier/dort (zwei Spalten). Hören und Sprechen: ja, mit englischen Stimmen (Skill `lernapps-audio`): Diktate, Hör-Aufgaben (Zahlen, Uhrzeit), Sprechaufgaben zum Nachsprechen; nichts bewertet, wie Kinder sprechen. Interaktive Elemente: Uhr zum Drehen, Schulkalender zum Eintragen (Komponenten des Explainers, falls sie das Muster tragen). Typische Fehler: dreizehn/dreißig (thirteen/thirty), half past (halb = half to), quarter to/past, Datum „the 5th“ statt „5.“, Wochentage/Monate klein geschrieben, I klein.

Quellen (geöffnet, Fakten, keine Sätze; Lizenz CC BY-SA, nur Fakten übernommen): Wikipedia „House system“, „Education in England“, „Halloween“, „Bonfire Night“ (Seite lädt, Zusammenfassung nicht abgerufen: Fakten vor dem Schreiben in Code nochmals prüfen). Karte: https://lernapps.net/apps/map/englisch.json (gelesen). Kein Lehrplan nötig (Karte gibt die Reihenfolge). Ungeprüft: Schuluniform und Ablauf des britischen Schultags, Datum von Bonfire Night (5. November) und Christmas: in Code mit Quelle prüfen.

Seiten (eine Kompetenz je Seite, Reihenfolge nach `requires`; Kapitel `hello`, `zahlen-uhr-kalender`, `schuljahr`):
1. hello/begruessung → `gruss-hoeflichkeit`; hello/classroom → `classroom-phrases`; hello/fachbegriffe → `grammatik-fachbegriffe`
2. zahlen-uhr-kalender/zahlen → `zahlen`; /uhrzeit → `uhrzeit`; /datum → `datum`; /grossschreibung → `grossschreibung`
3. schuljahr/schule → `schule`; /feste → `feste-uk`; /schule-uk → `schule-uk` (nach `schule`)
Voraussetzungen außerhalb der App: keine (alle `requires` stehen auf früheren Seiten). `ahead`: nicht nötig. Recap-Seiten: keine. Je Strang eine Seite: Wortschatz (1.1–2.3, 3.1), Aussprache/Rechtschreibung (2.4), Landeskunde (3.2, 3.3).

Wie Kinder dahin kommen und welcher Fehler die Rückmeldung fängt:
- `gruss-hoeflichkeit`: Situation wählen (Tageszeit, Person) und die passende Wendung ableiten; Fehler: Good night als Begrüßung, du/Sie-Denken.
- `classroom-phrases`: Poster füllen, Wendung zur Situation wählen/schreiben; Fehler: wörtliches Übersetzen (How say you …).
- `grammatik-fachbegriffe`: Wörter an der Tafel als noun/verb/adjective zuordnen; Fehler: Adjektiv mit Verb vertauscht.
- `zahlen`: hören, schreiben, Preise; Fehler: thirteen/thirty, Zehnerzahlen mit -teen/-ty.
- `uhrzeit`: Uhr zum Drehen, Zeit sagen; Fehler: half past seven = 7:30 (nicht 6:30), quarter to/past vertauscht.
- `datum`: Kalender, Datum sagen/schreiben (the fifth of May/May the 5th), Ordnungszahlen; Fehler: five statt fifth.
- `grossschreibung`: Sätze korrigieren; Fehler: monday, english, i; Nomen klein.
- `schule`: Stundenplan im Kalender lesen/ergänzen, Fächer und Räume benennen; Fehler: false friends (Gymnasium/gymnasium).
- `feste-uk`: Feste ins Jahr einordnen; Fehler: Bonfire Night mit Silvester/Halloween verwechselt.
- `schule-uk`: zwei Spalten (Millbrook / zu Hause) zuordnen; Fehler: Klischee „alle tragen immer Uniform“ ohne Hinweis auf Schulen.

Umfang: drin: 3 Kapitel, 10 Seiten, feste Wendungen ohne Regel; Hören/Sprechen mit englischen KI-Stimmen (britisch); Datenbereich Zahlen 0–1000 und Preise (guess), Wochentage, 12 Monate, Ordnungszahlen bis 31. Draußen: Regeln zu Imperativ (#473), Präpositionen der Zeit (#475), Familie/Freizeit (#477), Stadt (#478), USA (#484); keine Bewertung der Aussprache. Sprachen: Deutsch.

## Explore

<!--
- Find out what the app teaches, for whom, how much and how it looks. Ask; write no code, run no `create`.
- An answer counts only in the creator's words under "Answers". At most 2 questions per message, one topic each.
-->

### Tasks

- [x] Check the start: the folder `.agents/skills/lernapps-app` exists (else stop and tell the creator that the folder
      was not started with `init`), and `git branch --show-current` prints `work` (else `git switch -c work`).
- [x] Load skill `lernapps-app`. Tell the creator in two sentences what a lernapps app is and where it will live: at
      their own address, free and public, and once listed as a copy on lernapps.net. Say that the technical part
      (GitHub) comes at the end and that you do it.
- [x] Interview: ask the topics "Goal" and "Learners" of "Answers".
- [x] Load skill `lernapps-map-assignment` and read the learning map of the subject as it says. The creator brings
      the content themselves (material, a word list, the pages): note under "Notes" which competencies of the map it
      covers. Else write the skill's assignment, with its story; the creator's yes answers the topics Content and
      Amount. A subject without a map: skip this task and say so.
- [x] Load skill `lernapps-exercise-patterns` and read its reference for the subject. Note under "Notes" how learners
      will practise what the goal names.
- [x] Choose the archetype as skill `lernapps-app` says: read the README of each archetype in question, then tell the
      creator in plain words what the chosen one can and cannot do. Write the archetype and its reason under "Key
      decisions".
- [x] Run `npx --no -- lernapps skills --archetype <name>` with the chosen archetype. It installs the archetype's
      skills and adds the archetype's tasks to this plan.
- [x] Load skill `lernapps-explainer-design`. An explainer has the look of the runtime: write "fixed by the
      archetype" under the topic "Look and feel" of "Answers".
- [x] Interview: ask every other topic of "Answers", in order. Leave out only a topic that an answer of the creator
      already covers, and note which answer. A topic nobody answered is asked once before you write an assumption
      with "(guess)".
- [x] Load skill `lernapps-content-research` and research as it says. Write under "Notes": the strand or subject, the
      competencies by chapter with their ids, the sources you opened.
- [x] Write under "Notes" which competency goes on which page and which pages form a chapter, as "Map the content" of
      skill `lernapps-explainer-design` says. Per page, name the prerequisites the app does not practise.
- [x] Write under "Notes", one line per competency: how learners get there (they derive it, they do not only read it
      off), and which misconception the feedback catches.
- [x] Write under "Notes" the scope: what is in, what is out and why, the data range (for example "all main-group
      elements", never a silent "1–20"), the languages.
- [x] **Checkpoint:** research. Show in plain words: the strand or why none, the competencies by chapter, the didactic
      approach, the scope, every "(guess)", the sources and what is unchecked, the archetype and its reason. Stop and
      wait. Changes: change them, then ask again.
      Creator: Ja

### Answers

<!-- The interview: per topic the creator's answer, in their words. Keep the topics. -->

- Goal: what learners do in the app, what they learn. → „Passt.“ zu: Die Kinder erleben Lenas erste Tage an der Millbrook School mit und üben feste Wendungen (Begrüßen, Höflichkeit, Nachfragen im Unterricht), Zahlen, Uhrzeit, Datum und das Sprechen über die Schule; Regeln kommen erst in den System-Explainern.
- Learners: subject, school year, prior knowledge. → „Passt.“ zu: Englisch, Klasse 5–6 am Gymnasium, ohne Unterrichtsvorwissen, aber mit Englisch aus Liedern, Spielen und Medien; App auf Deutsch.
- Content (creator's words): „Inhalte aus dem Issue nehmen. Leg los“ (Issue lernapps/apps#470).
- Model and focus: (guess) Modell: Beispiel-Explainer `franzoesisch` der Vorlage; Schwerpunkt: Übungen und die zwei wachsenden Bilder (Poster, Kalender); kein Spiel.
- Hurdles: (guess) typische Fehler aus der Praxis: thirteen/thirty, half past/quarter to, Datum mit Punkt statt „the 5th“, kleine Wochentage und Monate, kleines „I“.
- Content: who writes it (creator, you, from sources); own material (worksheets, tests). → Ich schreibe es nach dem Auftrag aus dem Issue #470 (Kapitel, Figuren, Bilder fest vorgegeben); kein eigenes Material.
- Amount: aus dem Issue: 3 Kapitel, 10 Bausteine, je eine Seite pro Baustein; Familie, Freizeit, Stadt, USA kommen in anderen Explainern.
- Languages: (guess) nur Deutsch (Erklärungen) mit englischen Beispielen und Stimmen; Englische Seitenversion später möglich.
- Look and feel: calm like a worksheet, or like a game (colours, praise, effects); dark mode. → fixed by the archetype (Explainer: Look der Runtime, ruhig wie ein Arbeitsblatt, Dunkelmodus folgt dem Gerät).
- Terms: aus dem Issue: „Klassenzimmer-Poster“, „Schulkalender“, „Wendung“ (feste Wendung), Figuren Lena, Ellie, Josh, Amir; Millbrook School.
- Finding the app: (guess) „Englisch Klasse 5 Anfang“, „Begrüßung Classroom phrases Uhrzeit Datum Schule Großbritannien“, „Englisch Klasse 5 Übungen“.

## Plan

<!--
- Map the confirmed content onto the archetype. No new content questions: a gap in the content goes back to Explore.
- The creator confirms the plan in one read. After the yes you work on your own.
-->

### Tasks

- [x] Map the content as "Map the content" of skill `lernapps-explainer-design` says, and write the result under
      "Content method".
- [x] Choose a pattern per competency as skill `lernapps-exercise-patterns` says, and add it to "Content method".
- [x] Add to "Content method" one line per page, as "Engagement" of skill `lernapps-explainer-design` says: the
      opening task, the change of activity, the reward, the story.
- [x] Add the tasks of Code, each one a piece of work that ends in a commit. First the pattern: one complete page or
      screen, `npx --no -- lernapps plan add --at pattern "<task>"`. Then the others, one call each:
      `npx --no -- lernapps plan add --at pages "<task>"`. Each task says what it builds and what it shows.
- [x] Draw a sketch of each screen, component or interactive exercise: a static SVG or image, or the steps with what
      learners see after each. Keep the files in `.vibe/sketches/`.
- [x] Show the creator, short: goal, competencies by chapter, the Code tasks, the sketches, and the content method in
      plain words (what learners see and do, what the app cannot do). At most 2 questions.
- [x] **Checkpoint:** confirm the plan and the content method. Stop and wait for an explicit yes. Changes: change
      them, then ask again.
      Creator: Passt beides

### Content method

<!-- One line each: the patterns and where; the figures and how they are made; the data files; each component, what it
checks and what it cannot; how a later agent adds a chapter. It becomes the content guide in Code. -->
<!-- An explainer: per figure, model and component its learning action in two to four sentences
(`explainer-representation-explained`); per page its prerequisites the app does not practise, and which get a recap
page, which a link. -->

**Grundlagen.** Einheit `subject: englisch`, Stufe 5-6, Sprache `[de]`, Anrede „du“. Wörter immer mit Bedeutung eingeführt; Quelle der Wörter: Grundwortschatz der Karte, A1 (https://lernapps.net/apps/map/englisch/grundwortschatz/, vor dem Schreiben öffnen); Wörter außerhalb der Liste, die die Situation braucht (z. B. assembly, uniform), werden hier gelistet. Kapitel-IDs `hello`, `zahlen-uhr-kalender`, `schuljahr`, Seiten-IDs wie unter „Notes“.

**Abschnitte jeder Seite (gleiche IDs):** `einstieg` (Lenas Szene und „Das kannst du danach“), `neu` (Wendungen mit Bedeutung, Merke-Kasten), `uebung` (mindestens 4 Übungen, leicht → schwer, nicht überwiegend Raten), `anwenden` (`open-task` oder Sprechaufgabe aus der Situation), `weiter` (nächster Schritt der Geschichte; am Kapitelende ein Rückblick).

**Muster je Baustein (Kind der Fremdsprachen-Muster):**

| Baustein | Muster | Ausdruck | Typische Fehler (Rückmeldung nennt die Regel) |
|---|---|---|---|
| `gruss-hoeflichkeit` | Wendung zur Situation wählen, dann schreiben, dann nachsprechen | `matching`, `language-task` choice/write, `speaking-task` | Good night als Begrüßung; Sie/du-Denken |
| `classroom-phrases` | Poster füllen: Wendung zur Situation, Deutsch → Englisch | `table` (Poster), `language-task` write/gap | wörtliches Übersetzen („How say you …“) |
| `grammatik-fachbegriffe` | Wörter an der Tafel als noun/verb/adjective zuordnen | `matching`, `single-choice` | Adjektiv/Verb vertauscht |
| `zahlen` | -teen/-ty ableiten, hören und schreiben, Preise | `language-task` table + audio, `ordering` | thirteen/thirty; fifty/fifteen |
| `uhrzeit` | Uhr zum Drehen: past bis 30, dann to; hören | Komponente `Uhr`, `language-task` audio | half past seven = 7:30; quarter to/past vertauscht |
| `datum` | Ordnungszahlen aus den Grundzahlen ableiten, Datum sagen und schreiben | `language-task` table/write, `ordering` | five statt fifth; „5.“ statt the fifth |
| `grossschreibung` | Sätze korrigieren, Merkkasten | `language-task` write (`form: case wrong`) | monday, english, i; Nomen klein |
| `schule` | Stundenplan im Kalender lesen und ergänzen | `table`, `language-task` table/gap, `ordering` | Fächer falsch übersetzt (false friends) |
| `feste-uk` | Feste in den Kalender einordnen, Brauch zuordnen | `ordering`, `matching`, `true-false` | Bonfire Night mit Silvester oder Halloween verwechselt |
| `schule-uk` | zwei Spalten: Millbrook / bei mir vergleichen | `matching`, `true-false` mit Begründung, `open-task` | Verallgemeinern („alle tragen Uniform“) |

**Figuren und Bilder (je zwei bis vier Sätze, `explainer-representation-explained`):**
- *Klassenzimmer-Poster:* eine Tabelle „Wendung · Bedeutung“, die von Seite zu Seite um die Wendungen der Seite wächst. Kinder sehen: das ist mein Spickzettel; die Spalte rechts ist Deutsch. Danach schreiben sie Wendungen selbst.
- *Schulkalender:* Tabelle mit Wochentagen, Stunden und Daten; Kapitel 2 füllt Uhrzeiten und Geburtstage, Kapitel 3 den Stundenplan und die Feste. Kein Komponentenbedarf.
- *Uhr:* Komponente `Uhr` (Übungskomponente, Logik in `Uhr.ts`, Test, `nojs`/`describe` mit der Uhrzeit in Worten): Aufgabe „Stell die Uhr auf half past seven“, Knöpfe ± 5 Minuten und ± 1 Stunde; die Uhr zeigt nie das Ergebnis, `check` prüft die Zeit, `reason` benennt halb/half und quarter to/past. Nur eine Komponente, weil kein Block Zeiger stellen und prüfen kann (`prefer-built-in-block`). Zum Erklären eine feste Uhr je Zeit als `figure`-Bild (eigene SVG).
- *Szenen und Figuren:* eigene SVG-Zeichnungen nach `story-characters.svg`, keine Fotos, keine Figuren aus Büchern, Filmen, Spielen. Lena 11, Ellie 11, Josh 9, Amir 11; Millbrook School in einer englischen Kleinstadt; Aussehen einmal im Inhaltsführer festgelegt.

**Daten:** keine Datendateien (kein `generated`, keine `timeline`): Zahlen und Daten stehen in `language-task`-Items. Jede Tatsache einmal an ihrer Stelle.

**Hören und Sprechen:** mit englischen KI-Stimmen (britisch, Skill `lernapps-audio`); Stimme und Download wählt und erlaubt der Ersteller vor dem Erzeugen; MP3 in `src/audio/`, Zahlen im gesprochenen Text ausgeschrieben, Sätze statt Einzelwörter. Nichts bewertet die Aussprache.

**Engagement je Seite:** Opening: eine erste leichte Aufgabe vor der Erklärung (Lena fragt etwas, Kinder wählen die Antwort); Wechsel: Szene → Poster oder Kalender → Übung; Belohnung: das Poster oder der Kalender wächst sichtbar, Kapitelende „Das steht jetzt auf deinem Poster“; Story: Lenas Tag, jede Seite endet mit dem nächsten Schritt.

**Engagement je Seite** (Opening · Wechsel · Belohnung · Geschichte):
- hello/begruessung: Ellie sagt „Hi, I'm Ellie.“, Kinder wählen die Antwort · Szene → Poster-Zeile → Wahl/Schreiben → Nachsprechen · Poster hat die ersten Zeilen · Lena trifft Ellie, Josh, Amir; weiter: im Klassenzimmer.
- hello/classroom: Lena versteht die Lehrerin nicht, Kinder wählen „Can you say that again?“ · Tafel-Bild → Poster → Lücken/Schreiben · Poster wächst um Fragen und Bitten · Lenas erste Stunde; weiter: die Lehrerin schreibt Wörter an.
- hello/fachbegriffe: Lehrerin zeigt drei Wörter, Kinder raten ihre Art · Tafel → Etiketten → Zuordnen · Tafel mit Etiketten · Ende Kapitel 1: Rückblick auf das Poster; weiter: Pause, Amir fragt nach der Uhrzeit.
- zahlen-uhr-kalender/zahlen: Amir nennt seine Hausnummer, Kinder wählen die Zahl · Tabelle -teen/-ty → Hören → Preise im Schulkiosk · Zahlenreihe vervollständigt · Lena kauft ein Getränk; weiter: Wie spät ist es?
- …/uhrzeit: Lena fragt „What time is it?“, Kinder stellen die Uhr · Uhr → Wendung → Hören · eigene Uhrzeiten im Kalender · Stundenplan beginnt; weiter: An welchem Tag?
- …/datum: Joshs Geburtstag, Kinder lesen das Datum · Kalender → Ordnungszahlen ableiten → Schreiben · Geburtstage im Kalender · die Klasse trägt Geburtstage ein; weiter: Wie schreibt man das?
- …/grossschreibung: Lenas Eintrag im Kalender hat Fehler, Kinder finden sie · Merkkasten → Korrigieren · fehlerfreier Kalender · Ende Kapitel 2: Rückblick; weiter: der Schultag in Millbrook.
- schuljahr/schule: Lena liest ihren Stundenplan · Stundenplan → Fächer → Lücken · vollständiger Stundenplan im Kalender · Ellie zeigt die Schule; weiter: Feste.
- …/feste: Ellie erzählt von Halloween, Kinder ordnen · Kalender → Jahreslauf → Zuordnen · Feste im Kalender · Lena im Herbst; weiter: Schule hier und dort.
- …/schule-uk: Lena schreibt nach Hause, Kinder vergleichen · zwei Spalten → Vergleichen → freier Text · Kalender und Poster fertig, Rückblick auf die ganze App · Schlussszene mit Ausblick auf die nächsten Explainer.

**Später ergänzen:** ein neuer Baustein der Karte wird eine Seite `<kapitel>/<seite>.yaml` nach diesem Muster (Szene, Wendungen, Übungen), das Poster oder der Kalender bekommt eine Zeile.

## Code

<!--
- Build the app, locally on `work`, on your own. After each task: `plan done`, then one commit with the work and this
  plan. The hooks check each commit; a failing check is fixed from its message, as skill `lernapps-cli` says.
- What you cannot decide: choose, write it under "Key decisions" with "(guess)", go on.
- The creator asks for a change: say your reading in one sentence first, then change every place it holds for
  (`feedback-applied-everywhere`).
-->

### Tasks

- [ ] Load skill `lernapps-cli`. Create the app as its section "Create" says:
      `npx --no -- lernapps create --archetype explainer`.
- [ ] Fill the content guide `.agents/skills/app-content/SKILL.md` from "Notes" and "Content method": every heading,
      no "FILL IN" left. Commit it before any content.
- [ ] Load skill `lernapps-explainer`.
- [ ] Load skill `lernapps-content-questions`. Read whole, with your file tool:
      `.agents/skills/lernapps-explainer/references/blocks.md` and
      `.agents/skills/lernapps-explainer/references/exercises.md`. A foreign language: also
      `references/language-tasks.md` in the same folder. A component in the plan: also `references/components.md`.
- [ ] Decide whether the app needs `scope`, as "`scope`" in
      `.agents/skills/lernapps-explainer/references/structure.md` says. Write the choice under "Key decisions".
- [ ] Seite hello/begruessung (gruss-hoeflichkeit) fertig bauen: Figuren-SVG, Szene, Poster-Tabelle, Übungen leicht → schwer, Sprechaufgabe; zeigt das Muster für alle Seiten
<!-- tasks: pattern (1 added): the one page or screen that is the pattern for the others -->
- [ ] **Checkpoint:** the pattern page. Load skill `lernapps-learner-check` and do its learner check on the page. Fix
      what it finds. Then show the creator the page and ask whether the others may follow it. Stop and wait. A
      change: change the pattern first.
- [ ] hello/classroom (classroom-phrases): Poster wächst um Fragen und Bitten, Beschriften der Tafel, Lücken und Schreiben
- [ ] hello/fachbegriffe (grammatik-fachbegriffe): Tafel mit Etiketten noun, verb, adjective, Zuordnen; Rückblick Kapitel 1
- [ ] Komponente Uhr (UhrStellen) mit Logik, Test, nojs und describe; eigene SVG-Uhren als Erklärfiguren
- [ ] zahlen-uhr-kalender/zahlen: -teen/-ty ableiten, Hören und Schreiben, Preise im Schulkiosk, Zahlen bis 1000
- [ ] zahlen-uhr-kalender/uhrzeit: Uhr zum Drehen, past/to, half past, Hören; Stundenplan-Anfang im Kalender
- [ ] zahlen-uhr-kalender/datum: Wochentage, Monate, Ordnungszahlen, Datum sagen und schreiben; Geburtstage im Kalender
- [ ] zahlen-uhr-kalender/grossschreibung: Merkkasten und Sätze korrigieren; Rückblick Kapitel 2
- [ ] schuljahr/schule: Stundenplan lesen und ergänzen, Fächer und Räume; Fakten mit Quelle prüfen
- [ ] schuljahr/feste: Halloween, Bonfire Night, Christmas im Kalender; Daten und Bräuche mit Quelle prüfen
- [ ] schuljahr/schule-uk: Schule hier und dort vergleichen, Uniform und house system, freier Text, Schlussszene
- [ ] Hörtexte und Sprechmodelle mit Skill lernapps-audio erzeugen (nach Ja zu Stimme und Download), einbinden und anhören lassen
- [ ] Startseite, Kapitelseiten, Medienübersicht und Glossar prüfen; Quellen und Lizenzen aller Bilder eintragen
<!-- tasks: pages (12 added): the other pages or screens, after the pattern -->
- [ ] Update the content guide so that it describes the app as built (`app-content-matches`).
- [ ] Run `npx --no -- lernapps check` until it passes.
- [ ] Look at every screen and state, at 360 px and on a desktop, as "Look at the app" of skill `lernapps-cli` says.
      Compare each with its sketch.
- [ ] Do the whole-app check of skill `lernapps-learner-check`. Fix what it finds and write under "Notes" what you
      fixed.

## Commit

<!--
- Put the app on GitHub, publish it with the creator's yes, then list it. A push to `main` publishes.
- Open the pull requests (to `main`, to the catalog) without asking: they publish nothing.
- The creator asked to stop before publishing (a trial): stop here and say so.
-->

### Tasks

- [ ] Load skill `lernapps-explainer-self-assessment`. Add the self-assessment as it says, or write under "Key
      decisions" why the app has none. Commit.
- [ ] Load skill `lernapps-github`. Set up the repository and Pages as it says. Ask for the repository's name and
      every click only the creator can make, in one message.
- [ ] Push `work`, open the preview pull request and see its checks to green, as skill `lernapps-github` says.
- [ ] **Checkpoint:** publish. Show what the app does and the preview link from the comment "Vorschau der App". Ask
      whether it may go online. Stop and wait for the yes.
- [ ] Load skill `lernapps-commit`. Publish as skill `lernapps-github` says: `work` into `main` as one squash commit,
      the run of `Pages` watched to its end.
- [ ] Open the address the job `deploy` printed and confirm that the app shows. Never use a derived address.
- [ ] Load skill `lernapps-listing`. Write the entry under "Entry draft" as it says, with the creator's answer to
      "Finding the app".
- [ ] Fill the retrospective.
- [ ] Commit this plan on `main` and push it: the listing check and the review read it there.
- [ ] **Checkpoint:** list. Open the listing pull request as skill `lernapps-listing` says, without asking first: the
      pull request is the review. See it to "bestanden", then show the creator the pull request and its result.
- [ ] If the plan changed since its last push, commit it on `main` and push again.

### Entry draft

<!-- YAML valid against the entry schema the listing skill names. Only known values, never invented. -->

```yaml
```

## Retrospective

<!-- At the end of Commit, before the listing pull request. Facts, short, no names. Read by review and evals. -->

### Phases reached

<!-- Last phase completed, checkpoints passed. E.g. "commit; confirmed, published". -->

### Creator turns after the plan

<!-- Number of creator messages after the confirmation, topic of each. Target: at most 3. -->

### Where I had to guess

<!-- Each gap in plan, skills, messages or answers, and your choice. "None" if none. -->

# Retrospektive: Englisch-Lernlandkarte (Epic lernapps/apps#489)

Für alle, die ein weiteres Fach nach demselben Verfahren aufsetzen (z. B. Mathe). Nur Fakten aus dem Verlauf; Vorschläge für Mathe sind als solche markiert.

## 1. Was wir gebaut haben

- 17 Explainer als Issues #470 bis #487 (ohne #474) zu einem Epic gebündelt (#489). Je Explainer ein eigenes Repo (`englisch-<thema>`, plus `hello-millbrook` als Startapp).
- Welle 1 (Stufe 5-6): `hello-millbrook` und elf Themen-Apps (Pronomen, Zeiten, Sätze bauen, Dinge/Mengen/Orte, Adjektive/Adverbien, Alltag, Großbritannien, Geschichten, Verbketten, Sätze verbinden, Klang und Schrift). Alle geprüft, gemergt, online unter `lernapps.net/<repo>/`.
- Welle 2 (Stufe 7-8): Inkremente in den bestehenden Repos, je auf einem Branch `increment/02-<name>` mit Vorschau-PR. Zum Stand dieser Retro sind sieben Vorschau-PRs offen und warten auf die Prüfung der Ersteller:in; zwei Sessions sind blockiert oder haben sich noch nicht gemeldet.
- Welle 3 (Stufe 9-10) und vier weitere Explainer (#484–#487, #483) sind noch nicht begonnen.
- Katalog: zwölf Einträge `entries/<repo>.yaml` in `lernapps/apps` (PR #752–#763, gemergt).

## 2. Wie wir organisiert waren

- **Orchestrator-Session** (diese): hält die Konventionen, beantwortet Rückfragen der Sessions, verteilt Aufträge, fasst für die Ersteller:in zusammen. Sie spricht mit den Sessions über `send_message`.
- **Eine Session je App-Repo.** Jede Session folgt dem Plan des Werkzeugs (`lernapps plan`: Explore, Plan, Code, Commit) und stoppt an den Checkpoints (Recherche, Plan, Musterseite, Veröffentlichen). Die Sessions arbeiten mit eigenen Sub-Agenten (Seiten schreiben, Lerner-Check als Kind der Klassenstufe, Sprachprüfung Deutsch/Englisch).
- **Ersteller:in (Mensch)** entscheidet nur, was ihr gehört: Freigabe zum Veröffentlichen, Push-Erlaubnis, Hörurteile (später an den Orchestrator übertragen), Stil. Der Orchestrator durfte Checkpoints in ihrer Rolle beantworten, ausdrücklich erlaubt und in den Retrospektiven der Sessions als „Orchestrator in der Rolle der Ersteller:in“ von menschlichen Rückmeldungen getrennt.
- **Gemeinsame Regeln** stehen in `orchestrierung/konventionen.md` (Abschnitte 1–8: Zuschnitt, Altern der Figuren, Figuren und Orte, Begriffe, Übungen und Audio, vor dem Veröffentlichen, gelernte Regeln, höhere Stufen/Lesestücke). Neue Erkenntnisse kommen dort hinein, damit alle Sessions sie lesen.
- **Skripte** liegen ebenfalls im Start-Repo (`orchestrierung/audio/regen_audio.py`).

## 3. Was gut funktioniert hat

- **Musterseite zuerst.** Eine Seite komplett bauen, als Lernender prüfen, erst dann die anderen nach diesem Muster. Fast jede Session fand dabei Dutzende Funde, die sonst auf alle Seiten gewirkt hätten.
- **Unabhängige Prüfer.** Ein Sub-Agent als Kind der Klassenstufe (360 px und Desktop) plus eine Sprachprüfung. Typische Funde: Lösung steht im Text über der Aufgabe, gleichwertige Antworten fehlen, Distraktoren verraten die Lösung, unerklärte Begriffe.
- **Wenige, klare Regeln** statt langer Anweisungen. Beispiele: keine Lösung im Text über der Übung, nur echte Lernerfehler als Distraktoren, eigene Meldung je Fehler, Hörsätze nur als ganze Sätze, Retrospektive nur mit Fakten.
- **Audio über ein Skript** (`regen_audio.py`): Stimme `bf_emma` (Kokoro), automatisches Abschneiden von Fehllauten am Satzende (Senken-Erkennung). Das Skript lief in allen Sessions gleich; Hörlisten im Inhaltsführer machen sichtbar, was noch kein Mensch gehört hat.
- **Wenig Nachrichten an die Ersteller:in.** Die Sessions klären Fachfragen untereinander und mit dem Orchestrator; die Ersteller:in bekommt nur Entscheidungen und Hörproben.

## 4. Was uns Zeit gekostet hat

- **Berechtigungen:** Push- und Merge-Erlaubnis lagen anfangs nicht vor; das hat Sessions bis zu mehreren Stunden blockiert. Ein Auto-Mode-Classifier lehnt Pushes ab, wenn die Erlaubnis nur als Nachricht einer anderen Session ankommt (so bei #472). Dann muss der Mensch den Push in der betroffenen Session selbst freigeben. **Für Mathe: Push-/Merge-Regeln am Anfang im Berechtigungsmodus der Sessions hinterlegen.**
- **Fork des Katalog-Repos** war über die Proxy-Umgebung nicht möglich (403). Gelöst, indem `lernapps/apps` direkt an die Session angehängt wurde.
- **Pre-Push-Hook** baut und testet jedes Mal (mehrere Minuten je Push). Zwölf Katalogzweige nacheinander dauerten deshalb lange; Pushes mit `push.negotiate=true` hingen einmal.
- **`lernapps plan`:** `plan skip` kollidierte mit dem Plan-Datei-Hook; eine Session hakte vier Aufgaben zu früh ab und trug sie wieder nach. `plan done --answer` mit dem Wortlaut der Ersteller:in wurde vom Berechtigungsmodus abgelehnt (für den Orchestrator-Wortlaut musste die Session ihn per Nachricht bekommen).
- **Update-Verwirrung:** `lernapps update` meldete „unchanged“, obwohl app-templates 0.14 mit dem Vokabelblock existierte. Erst `npx --yes @lernapps/tooling@latest update` holte es. Der Explainer-Skill beschrieb den Block nicht; die Sessions lasen ihn aus dem Quelltext der Templates.
- **Wikipedia HTTP 429** bei vielen Seiten: Fakten wurden nur aus geöffneten Seiten übernommen.
- **Veraltete Merge-Texte:** Ein Agent übersprang ein PR wegen eines alten PR-Textes; geprüft wurde dann am Check-Status, nicht am Text.
- **Stop-Hook** meldete „untracked files“, solange ein Hintergrundskript noch Dateien nacheinander committete.

## 5. Gelernte inhaltliche Regeln (Auszug aus den Konventionen)

- Figuren altern mit der Stufe (Sophie 11 → 13/14); Nebenfiguren mit festen Merkmalen definieren, damit sie nicht verwechselt werden.
- Vokabeln als `vocabulary`-Block statt Tabelle (Felder `caption`, `languages`, `entries` mit `target`/`source`, optional `example`, `note`, `forms`, `falseFriend`). Poster mit Regeln und Beispielen bleiben Tabellen. Nachteil: jedes Wort eine Karte, Seiten werden bei 360 px länger.
- Höhere Stufen: **Lesestücke** (Chat, Blog, Interview, Zeitungsartikel; 120–300 Wörter) mit nummerierten Zeilen, Randglossar, drei Aufgabenstufen (Verstehen, Belegen mit Zeilenangabe, Meinung als Schreibauftrag). Eigene Texte nach geprüften Fakten; fremde Texte nur aus ausdrücklich nutzbaren Quellen (siehe Konventionen Abschnitt 8).
- Hörsätze: kurze ganze Sätze, keine Beinahe-Dubletten, nichts als „geprüft“ ausgeben, was kein Mensch gehört hat.
- Katalogeintrag: `fitness.storage: device`, wenn die App im Browser speichert (Selbsteinschätzung); die Listing-Prüfung `npm run listing -- entries/<id>.yaml` zeigt Abweichungen.

## 6. Empfehlungen für Mathe (Vorschläge, nicht erprobt)

1. **Konventionen vor der ersten Session schreiben:** Zuschnitt der Explainer, Figuren (falls nötig), Begriffe und Schreibweisen (z. B. Dezimalkomma, Einheiten), Regeln für Aufgaben und Rückmeldungen. In Englisch kamen die meisten Regeln erst nach den ersten Reviews; das kostete Korrekturrunden in elf Repos.
2. **Audio entfällt vermutlich** und damit Hörlisten, Fehllaut-Schnitt und die Frage, was ein Mensch gehört hat. Dafür braucht Mathe eigene Prüfregeln: Rechenwege und Ergebnisse maschinell nachrechnen (Skript wie bei den Hörsätzen), Rundung und Einheit in jeder Aufgabe festlegen, mehrere gültige Schreibweisen zulassen.
3. **Eine Session je Repo und einen Orchestrator beibehalten.** Der Orchestrator sollte früh mit der Ersteller:in klären, was er in deren Namen beantworten darf (in Englisch: Checkpoints, später Hörurteile).
4. **Berechtigungen am Anfang klären** (Push, Vorschau-PR, Merge, Katalogeintrag) und im Berechtigungsmodus jeder Session eintragen, nicht nur per Nachricht.
5. **Welle für Welle** (Startklasse, höhere Stufen) mit Inkrement-Branches; nach jeder Welle eine Retro in die Konventionen übernehmen.
6. **Prüfer-Agenten behalten**, aber gezielt: Lerner-Check an der Musterseite, Gesamtcheck je Kapitel, fachliche Prüfung (bei Mathe: Rechnung und Didaktik statt Sprache).
7. **Template-Funde zentral sammeln** und nicht in jeder Session einzeln beheben (Standardmeldung „Deine Fassung kann trotzdem richtig sein“, `choice` ohne Fehlerhinweis, `ordering` ohne Karten, Vergleichen-Knopf ohne Eingabe, KI-Tutor-Hinweis, Player-Beschriftung, Kürzel als Linktext in Wiederholungsseiten, `explainer-text-load` zählt Lesestücke mit).

## 7. Offene Punkte (Stand dieser Retro)

- Prüfung der sieben Vorschau-PRs durch die Ersteller:in; Mergen erst danach.
- #472: Push muss in der Session freigegeben werden; #481 und #473/#477 (Vokabelumstellung auf `work`) offen.
- Kein Audio wurde von einem Menschen vollständig angehört; Hörlisten im jeweiligen Inhaltsführer.
- Katalogeinträge nennen weiter Stufen 5–6; nach Veröffentlichung der Inkremente anpassen. Zusammenfassungen von neun Apps sind agentengeschrieben; bei vier Apps fehlt das Themenfeld.
- Vorlagen- und Skill-Funde (Abschnitt 6, Punkt 7) sind noch nicht als Issues erfasst.

# Eine Lernapp für lernapps.net bauen

Mit dieser Vorlage baust du eine kleine Lernapp, ohne etwas auf deinem Rechner zu installieren. Ein KI-Agent hilft dir
im Browser. Du beschreibst, was du brauchst, er baut und prüft die App.

## Was du brauchst

- Ein kostenloses GitHub-Konto.
- Ein Abo oder einen Schlüssel für einen KI-Agenten: **Claude** (Claude Pro oder höher) oder **ChatGPT** (Codex). Die
  Kosten trägst du selbst. lernapps.net bezahlt keine KI-Nutzung.

## So geht es

1. Klicke oben auf **Use this template** und dann auf **Create a new repository**. Gib einen kurzen Namen für deine
   App ein, zum Beispiel `bruchrechnen`. Das Repository gehört dir.
2. Öffne dein neues Repository. Klicke auf **Code**, dann auf **Codespaces** und auf **Create codespace on main**.
   GitHub startet eine fertige Arbeitsumgebung im Browser. Das dauert einige Minuten. Diese Anleitung öffnet sich
   dort von selbst.
3. Melde dich bei deinem Agenten an (siehe unten).
4. Sage dem Agenten, welche App du bauen möchtest. Er fragt nach Thema, Klassenstufe und dem, was Lernende tun sollen.
   Er legt die App in diesem Ordner an, nicht in einem Unterordner.
5. Der Agent zeigt dir Zwischenstände. Du bestätigst oder bittest um Änderungen. Am Ende prüft er die App und hilft dir,
   sie bei lernapps.net einzureichen.

## Anmelden

**Claude:** Klicke links in der Seitenleiste auf das Funken-Symbol (Claude Code) und öffne eine neue Unterhaltung. Klicke
auf **Sign in** und melde dich im Browser an. Meldet der Browser danach „Diese Seite ist nicht erreichbar“ (Adresse
`localhost`), ist das im Codespace normal. Öffne den Link noch einmal: Claude zeigt jetzt einen Code. Kopiere ihn und
füge ihn dort ein, wo Claude danach fragt. Siehst du das Symbol nicht, öffne das Terminal (unten, Menü **Terminal**,
**Neues Terminal**) und tippe `claude`.

**ChatGPT (Codex):** Öffne das Terminal (Menü **Terminal**, **Neues Terminal**) und tippe `codex`. Klappt das
Anmelden im Browser nicht, tippe `codex login --device-auth`. Die Anmeldung per Gerätecode muss in den
ChatGPT-Sicherheitseinstellungen erlaubt sein.

Bei der Anmeldung fragt der Editor manchmal nach: Bestätige **Ordner vertrauen und fortfahren** und **Öffnen**. Das sind
Rückfragen des Editors, keine Warnungen vor deiner App.

## Pausieren und später weitermachen

- Ein Codespace hält nach 30 Minuten ohne Eingabe von selbst an. Deine Dateien bleiben erhalten, auch Änderungen, die
  noch nicht gespeichert sind. Laufende Arbeit des Agenten und die Vorschau werden beendet.
- Zum Weitermachen öffne [github.com/codespaces](https://github.com/codespaces) und klicke bei deinem Codespace auf
  **Open**. Das dauert eine Minute.
- Ein Codespace, den du 30 Tage lang nicht öffnest, wird gelöscht. Bitte den Agenten deshalb am Ende einer Sitzung, deine
  Arbeit auf GitHub zu sichern.
- Ein angehaltener Codespace kostet keine Rechenzeit, nur ein wenig Speicher. Die Einstellungen für die Wartezeit und die
  Aufbewahrung findest du bei GitHub unter **Settings**, **Codespaces**.

## Gut zu wissen

- GitHub gibt kostenlosen Konten jeden Monat etwa 60 Stunden Codespace-Zeit. Beende den Codespace, wenn du fertig bist.
- Der Agent darf in deinem Codespace alles tun und sieht das ganze Internet. Gib dort keine Passwörter und keine Daten
  von Schülerinnen und Schülern ein.
- Deine Texte gehen an den Anbieter des Agenten (Anthropic oder OpenAI). Schreibe keine Namen von Lernenden hinein.
- Die fertige App sammelt keine Daten und läuft ohne Konto im Browser. Das prüft lernapps.net, bevor sie erscheint.

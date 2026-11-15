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
   GitHub startet eine fertige Arbeitsumgebung im Browser. Das dauert einige Minuten.
3. Unten im Fenster ist ein Terminal. Tippe `claude` (für Claude) oder `codex` (für ChatGPT) und melde dich an. Folge
   den Hinweisen auf dem Bildschirm. Bei Codex tippe `codex login --device-auth`, falls das Anmelden im Browser nicht
   klappt.
4. Sage dem Agenten, welche App du bauen möchtest. Er fragt nach Thema, Klassenstufe und dem, was Lernende tun sollen.
5. Der Agent zeigt dir Zwischenstände. Du bestätigst oder bittest um Änderungen. Am Ende prüft er die App und hilft dir,
   sie bei lernapps.net einzureichen.

## Gut zu wissen

- GitHub gibt kostenlosen Konten jeden Monat etwa 60 Stunden Codespace-Zeit. Beende den Codespace, wenn du fertig bist.
- Der Agent darf in deinem Codespace alles tun und sieht das ganze Internet. Gib dort keine Passwörter und keine Daten
  von Schülerinnen und Schülern ein.
- Deine Texte gehen an den Anbieter des Agenten (Anthropic oder OpenAI). Schreibe keine Namen von Lernenden hinein.
- Die fertige App sammelt keine Daten und läuft ohne Konto im Browser. Das prüft lernapps.net, bevor sie erscheint.

# Medikamenten-Check

Ein kleines, mobiles Lernspiel zur selbstständigen Wissensüberprüfung.

## Auf GitHub Pages veröffentlichen

1. Neues Repository auf GitHub erstellen.
2. Die Dateien `index.html`, `style.css` und `script.js` hochladen.
3. Im Repository unter **Settings → Pages** gehen.
4. Unter **Build and deployment** die Quelle **Deploy from a branch** auswählen.
5. Branch **main** und Ordner **/(root)** wählen und speichern.
6. Nach kurzer Zeit erscheint dort die öffentliche Webadresse.
7. Diese Adresse kannst du in einen QR-Code umwandeln.

## Anpassungen

Die Fragen stehen oben in `script.js` im Array `questions`.
Du kannst Frage, Antworten, richtige Lösung und Erklärung direkt dort ändern.

- `type: "single"` = eine Antwort richtig
- `type: "multi"` = mehrere Antworten richtig
- `answer: 1` = zweite Antwort ist richtig
- `answer: [0,2]` = erste und dritte Antwort sind richtig

Das Spiel benötigt keine Datenbank und speichert keine personenbezogenen Daten.

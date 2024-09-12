# Faker User Sample

Dies ist ein Webprojekt, das mithilfe von SCSS und einem JavaScript-Bundler wie Webpack (oder Vite/Parcel) erstellt wurde. Es verwendet Faker.js, um zufällige Benutzerdaten zu generieren und darzustellen.

## Voraussetzungen

Stelle sicher, dass Node.js und npm (oder Yarn) auf deinem System installiert sind. Du kannst Node.js von [nodejs.org](https://nodejs.org/) herunterladen.

## Installation

1. Klone das Repository:

   ```bash
   git clone https://github.com/username/dein-projekt.git
   ```

2. Wechsle in das Projektverzeichnis:

   ```bash
   cd dein-projekt
   ```

3. Installiere die Abhängigkeiten:

   ```bash
   npm install
   ```

   oder, falls du Yarn verwendest:

   ```bash
   yarn install
   ```

## Entwicklung

Für die Entwicklung kannst du einen Entwicklungsserver starten, der Hot-Reloading unterstützt, sodass Änderungen sofort im Browser sichtbar sind.

### Mit Webpack

1. Starte den Entwicklungsserver:

   ```bash
   npm run start
   ```

2. Öffne den Browser und gehe zu `http://localhost:8080`.

### Mit Vite (falls du Vite verwendest)

1. Starte den Entwicklungsserver:

   ```bash
   npm run dev
   ```

2. Öffne den Browser und gehe zu `http://localhost:3000`.

## Produktion

Um eine Produktionsversion des Projekts zu erstellen:

### Mit Webpack

```bash
npm run build
```

Die gebündelten Dateien befinden sich im `dist/`-Verzeichnis.

### Mit Vite

```bash
npm run build
```

Die gebündelten Dateien befinden sich im `dist/`-Verzeichnis.

## Ordnerstruktur

```bash
├── dist/                # Produktions-Build (nach `npm run build`)
├── src/                 # Quellcode des Projekts
│   ├── index.js         # Einstiegspunkt für die App
│   ├── index.scss       # Haupt-SCSS Datei
├── .gitignore           # Git Ignore-Dateien
├── package.json         # Projektinformationen und Abhängigkeiten
├── webpack.config.js    # Webpack Konfigurationsdatei (falls Webpack verwendet wird)
└── README.md            # Diese Datei
```

## Verwendete Technologien

- **SCSS**: Für erweiterte Stylesheet-Funktionalität.
- **Webpack / Vite / Parcel**: Für das Bündeln und Ausliefern des Codes.
- **Faker.js**: Zum Generieren von zufälligen Benutzerdaten.
- **Node.js**: Für die Installation von Abhängigkeiten und als Entwicklungsumgebung.

## Mitwirkende

- Dein Name (oder Benutzername)

## Lizenz

Dieses Projekt ist lizenziert unter der MIT-Lizenz – siehe die [LICENSE](LICENSE) Datei für Details.

### Anpassungen:

- **Projektname und URL**: Ersetze `https://github.com/username/dein-projekt.git` durch die tatsächliche URL deines Projekts.
- **Befehle anpassen**: Passe die npm-Skripte an, falls du Vite oder Parcel statt Webpack verwendest.
- **Mitwirkende**: Wenn mehrere Personen an deinem Projekt arbeiten, kannst du sie hier erwähnen.
- **Lizenz**: Achte darauf, dass du eine Lizenz einfügst (z. B. MIT, GPL), wenn du das Projekt veröffentlichst.

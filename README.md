# 07.11.2026 - Digitechnikum: React Workshop

Eine kleine aber feine Aufgaben-App zum Experimentieren. </br>
Das Projekt zeigt grundlegende React-Konzepte (sieh Präsentation)

## Voraussetzungen
- Node.js 20 oder neuer
- npm

## Projekt starten
Abhängigkeiten installieren:
```bash
npm install
```

Entwicklungsserver starten:
```bash
npm run dev
```

Danach ist die App normalerweise unter [http://localhost:5173](http://localhost:5173) erreichbar.

## Verfügbare Befehle

| Befehl | Zweck |
| --- | --- |
| `npm run dev` | Startet den Vite-Entwicklungsserver mit Hot Module Replacement. |
| `npm run build` | Prüft TypeScript und erstellt den Produktionsbuild. |
| `npm run lint` | Prüft den Code mit ESLint. |
| `npm run preview` | Startet eine lokale Vorschau des Produktionsbuilds. |

## Funktionen der App

- Dashboard mit einer Zusammenfassung der Aufgaben
- Aufgaben mit Titel und einer Priorität anlegen
- Aufgaben als erledigt markieren
- Aufgaben löschen
- Übersicht aller Aufgaben unter `/tasks`
- "Projektdokumentation" unter `/docs`
- Helles und dunkles Theme über einen React Context
- Pfadbasierte Navigation ohne zusätzliche Router-Bibliothek
  - Don't do this at home: React Router / eine Fullstack-Framework dazu gelieferte Variante ist die bessere Wahl für größere Apps

## Projektstruktur

```text
src/
├── components/       Nach Verantwortung gruppierte React-Komponenten
│   ├── common/       Allgemein wiederverwendbare UI
│   ├── docs/         Komponenten für die Projektdokumentation
│   ├── layout/       App-Rahmen und Navigation
│   └── tasks/        Aufgabenformular, Liste und Aufgabenanzeige
├── data/             Beispieldaten für den Start
├── functions/        Kleine, testbare Funktionen für Aufgaben und Navigation
├── hooks/             Wiederverwendbare React-Logik
├── models/           Zentrale Fachmodelle und Hilfsfunktionen
├── context/          Gemeinsamer Zustand für das Theme
├── pages/            Dashboard-, Aufgaben- und Docs-Seite
├── styles/           Nach Verantwortungsbereichen aufgeteilte CSS-Dateien
├── App.tsx           Einstiegspunkt und Theme-Provider
├── routes.ts         Pfade und einfache Navigation
└── main.tsx          React-Einstiegspunkt
```

## Wichtige React-Konzepte

### Komponenten und Props

Komponenten wie `TaskItem` und `DocsCard` können Daten über Props erhalten. Dadurch bleiben sie unabhängig und können an mehreren Stellen verwendet werden. Ereignisse wie `onToggle` und `onDelete` werden ebenfalls als Props nach unten weitergegeben.

### Task-Modell

Das Modell in `src/models/task.ts` ist die zentrale Stelle für `Task`, `Priority`, verfügbare Prioritäten und `createTask`. Komponenten importieren diese Definitionen, anstatt eigene Varianten zu erstellen. Neue Felder wie `category` oder `dueDate` werden zuerst im Modell ergänzt und können danach gezielt in Formular und Darstellung verwendet werden.

### State und Aufgabenfunktionen

Der Aufgaben-State und die Aktionen liegen im Hook `src/hooks/useTasks.ts`. Die reinen Änderungen an einem Aufgaben-Array liegen in `src/functions/taskFunctions.ts`. So bleiben UI, React-State und Fachlogik getrennt und können unabhängig erweitert oder getestet werden.

Die gemeinsamen Callback-Typen liegen als `TaskActions` im Task-Modell. Wenn eine neue Aktion wie „Aufgabe bearbeiten“ dazukommt, kann ihr Typ dort ergänzt und anschließend gezielt an die betroffenen Komponenten weitergegeben werden.

### Context

Der `ThemeProvider` stellt das aktuelle Theme und die Funktion zum Wechseln über den `ThemeContext` bereit. Mit `useTheme` kann der Header auf diesen gemeinsamen Zustand zugreifen, ohne Props durch alle Zwischenkomponenten weiterzugeben.

### Navigation

`AppLink` verwendet die Browser-History-API. Ein Klick auf einen internen Link ändert den Pfad und löst ein `popstate`-Event aus. `App` liest den aktuellen Pfad und zeigt die passende Seite an.

## Eigene Erweiterungen

Die Datei [Challenges.md](./Challenges.md) enthält Aufgaben für den Workshop. Die Challenges sind in Stufen aufgeteilt und reichen von kleinen UI-Erweiterungen bis zu shadcn/ui.

Die Datei [react-concepts.md](./react-concepts.md) erklärt 18 wichtige React-Konzepte anhand konkreter Dateien und Beispiele aus dieser App.

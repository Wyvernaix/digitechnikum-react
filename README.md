# Meine Aufgaben – React Workshop

Eine kleine deutschsprachige Aufgaben-App als Ausgangspunkt für einen React-Workshop. Das Projekt zeigt grundlegende React-Konzepte in einer überschaubaren Anwendung und kann Schritt für Schritt erweitert werden.

## Voraussetzungen

- Node.js 20 oder neuer
- npm
- Grundkenntnisse in JavaScript oder TypeScript

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
- Aufgaben mit Titel und Priorität anlegen
- Aufgaben als erledigt markieren
- Aufgaben löschen
- Übersicht aller Aufgaben unter `/tasks`
- Projektdokumentation unter `/docs`
- Helles und dunkles Theme über einen React Context
- Pfadbasierte Navigation ohne zusätzliche Router-Bibliothek

## Projektstruktur

```text
src/
├── components/       Wiederverwendbare React-Komponenten
│   ├── AppLink.tsx
│   ├── DocsCard.tsx
│   ├── Header.tsx
│   ├── PageHeader.tsx
│   ├── TaskForm.tsx
│   ├── TaskItem.tsx
│   ├── TaskList.tsx
│   ├── TaskSection.tsx
│   └── TaskSummary.tsx
├── data/             Beispieldaten für den Start
├── models/           Zentrale Fachmodelle und Hilfsfunktionen
├── context/          Gemeinsamer Zustand für das Theme
├── pages/            Dashboard-, Aufgaben- und Docs-Seite
├── styles/           Nach Verantwortungsbereichen aufgeteilte CSS-Dateien
├── App.tsx           App-Zustand und Zusammensetzen der Seiten
├── routes.ts         Pfade und einfache Navigation
└── main.tsx          React-Einstiegspunkt
```

## Wichtige React-Konzepte

### Komponenten und Props

Komponenten wie `TaskItem` und `DocsCard` können Daten über Props erhalten. Dadurch bleiben sie unabhängig und können an mehreren Stellen verwendet werden. Ereignisse wie `onToggle` und `onDelete` werden ebenfalls als Props nach unten weitergegeben.

### Task-Modell

Das Modell in `src/models/task.ts` ist die zentrale Stelle für `Task`, `Priority`, verfügbare Prioritäten und `createTask`. Komponenten importieren diese Definitionen, anstatt eigene Varianten zu erstellen. Neue Felder wie `category` oder `dueDate` werden zuerst im Modell ergänzt und können danach gezielt in Formular und Darstellung verwendet werden.

### State

Der Aufgaben-State liegt in `App.tsx`. Die Seiten lösen Aktionen aus, während `App` die Aufgaben tatsächlich hinzufügt, ändert oder entfernt. So gibt es eine zentrale Quelle für die Daten.

### Context

Der `ThemeProvider` stellt das aktuelle Theme und die Funktion zum Wechseln über den `ThemeContext` bereit. Mit `useTheme` kann der Header auf diesen gemeinsamen Zustand zugreifen, ohne Props durch alle Zwischenkomponenten weiterzugeben.

### Navigation

`AppLink` verwendet die Browser-History-API. Ein Klick auf einen internen Link ändert den Pfad und löst ein `popstate`-Event aus. `App` liest den aktuellen Pfad und zeigt die passende Seite an.

## Eigene Erweiterungen

Die Datei [Challenges.md](./Challenges.md) enthält Aufgaben für den Workshop. Die Challenges sind in Stufen aufgeteilt und reichen von kleinen UI-Erweiterungen bis zu shadcn/ui, Animationen und einer Three.js-Szene.

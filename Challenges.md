# Workshop-Ideen

Sind mehr Ideen als Challenges, kann man so und so sehen.

## Vor jeder Änderung

1. Starte die App mit `npm run dev`.
2. Lies zuerst die betroffenen Dateien und suche nach ähnlichen bestehenden Komponenten.
3. Ändere das zentrale Modell in `src/models/task.ts`, wenn du neue Aufgabendaten brauchst.
4. Teile die UI in kleine Komponenten auf, statt eine große Seite weiter wachsen zu lassen.
5. Prüfe danach mit `npm run lint` und `npm run build`.

## Stufe 1 – Grundlagen

### 1. Aufgaben bearbeiten

**Ziel:** Eine bestehende Aufgabe soll Titel und Priorität direkt in der Liste bearbeiten können.

**Erste Schritte:**

1. Ergänze in `TaskItem` einen Bearbeiten-Button.
2. Erzeuge für den Bearbeitungsmodus lokale States für Titel und Priorität.
3. Ergänze in `App.tsx` eine Funktion wie `updateTask(id, changes)`.
4. Reiche diese Funktion über `TaskSection` und `TaskList` bis zu `TaskItem` weiter.
5. Verwende für die Prioritätsauswahl `priorities` aus `src/models/task.ts`.

**Achte darauf:** Die Anzeige und das Bearbeitungsformular sollten nicht gleichzeitig für dieselbe Aufgabe sichtbar sein.

**Lernziel:** Controlled Inputs, Props und State-Updates mit `map`.

### 2. Aufgaben filtern

**Ziel:** Die Aufgabenliste soll zwischen „Alle“, „Offen“ und „Erledigt“ wechseln können.

**Erste Schritte:**

1. Erstelle eine kleine `TaskFilter`-Komponente mit drei Buttons.
2. Lege den ausgewählten Filter zunächst in `TasksPage` ab.
3. Berechne mit `filter` eine sichtbare Liste, ohne den eigentlichen Task-State zu verändern.
4. Übergib nur die gefilterte Liste an `TaskList`.
5. Zeige bei einer leeren Ergebnisliste einen passenden Text an.

**Achte darauf:** Der Dashboard-Abschnitt kann weiterhin nur die ersten drei Aufgaben anzeigen; die Filter müssen nicht global sein.

**Lernziel:** Abgeleiteten State und Komponenten-Kommunikation verstehen.

### 3. Prioritäten sichtbar machen

**Ziel:** Hoch, Mittel und Niedrig sollen visuell unterscheidbar sein.

**Erste Schritte:**

1. Ergänze in `TaskItem` eine Klasse aus dem Priority-Wert, zum Beispiel `priority-high`.
2. Lege die Farben als Variablen in `src/styles/tasks.css` oder der Theme-Datei an.
3. Füge eine kleine `PriorityLegend`-Komponente hinzu.
4. Prüfe die Farben im hellen und dunklen Theme.

**Achte darauf:** Nutze keine englischen Sonderwerte neben den zentralen Werten aus dem Modell.

**Lernziel:** Dynamische Klassen und Theme-kompatibles CSS.

### 4. Aufgaben speichern

**Ziel:** Aufgaben sollen nach einem Neuladen erhalten bleiben.

**Erste Schritte:**

1. Lege einen Hook `src/hooks/useLocalStorage.ts` an.
2. Starte den Hook mit `initialTasks` aus `src/data/initialTasks.ts`.
3. Lies den gespeicherten Wert im Initializer des `useState`-Aufrufs.
4. Speichere Änderungen in einem `useEffect`.
5. Verwende einen festen Schlüssel wie `simple-tasks`.

**Achte darauf:** Ungültiges JSON darf die Anwendung nicht zum Absturz bringen. Eine kleine Prüf- oder Fallback-Funktion ist sinnvoll.

**Lernziel:** `useState`, `useEffect` und Browser-Speicher.

## Stufe 2 – React und UI

### 5. Kategorien ergänzen

**Ziel:** Aufgaben bekommen eine Kategorie wie „Arbeit“, „Privat“ oder „Lernen“.

**Erste Schritte:**

1. Ergänze `Category` und `categories` in `src/models/task.ts`.
2. Füge `category` zu `Task` und `NewTask` hinzu.
3. Ergänze die Auswahl in `TaskForm`.
4. Erweitere `createTask`, damit neue Aufgaben die Kategorie erhalten.
5. Zeige die Kategorie in `TaskItem` an und ergänze danach einen Kategorienfilter.

**Lernziel:** Ein Modell zentral erweitern und die betroffenen Props systematisch finden.

### 6. Aufgabenlogik auslagern

**Ziel:** `App.tsx` soll vor allem Seiten zusammensetzen und nicht jede State-Operation selbst enthalten.

**Erste Schritte:**

1. Erstelle `src/hooks/useTasks.ts`.
2. Verschiebe dort den State und die Funktionen für Hinzufügen, Umschalten und Löschen.
3. Gib aus dem Hook `tasks`, `completedCount` und die Aktionen zurück.
4. Ersetze in `App.tsx` den bisherigen Aufgaben-State durch den Hook.
5. Halte die Rückgabewerte des Hooks klein und eindeutig.

**Lernziel:** Custom Hooks und Trennung von UI und Fachlogik.

### 7. Tastaturbedienung und Accessibility

**Ziel:** Die App soll ohne Maus und mit Screenreader verständlich bedienbar sein.

**Erste Schritte:**

1. Prüfe jedes interaktive Element mit der Tab-Taste.
2. Ergänze sichtbare `:focus-visible`-Styles in `src/styles`.
3. Verbinde Eingabefelder mit sichtbaren Labels oder passenden `aria-label`s.
4. Füge für Statusmeldungen eine `aria-live="polite"`-Region hinzu.
5. Teste eine leere Liste und eine lange Aufgabenbezeichnung.

**Lernziel:** Semantisches HTML und zugängliche Zustandsänderungen.

### 8. Formularvalidierung

**Ziel:** Leere und zu lange Titel sollen verständlich abgelehnt werden.

**Erste Schritte:**

1. Definiere im Modell oder in `TaskForm` eine maximale Länge.
2. Erstelle `validateTaskTitle(title)` als kleine Funktion.
3. Halte die Fehlermeldung im Formular-State.
4. Verbinde die Meldung über `aria-describedby` mit dem Input.
5. Lass das Formular nur bei gültigen Werten `onAddTask` aufrufen.

**Lernziel:** Validierungslogik, Fehlermeldungen und Formulare.

## Stufe 3 – Libraries und UI-Werkzeuge

### 9. Eine neue Library hinzufügen

**Ziel:** Eine kleine Library kontrolliert in das Projekt integrieren.

**Erste Schritte:**

1. Wähle eine konkrete Aufgabe für die Library, zum Beispiel Datumsformatierung.
2. Installiere sie mit `npm install paket-name`.
3. Prüfe, ob die Library TypeScript-Typen mitbringt oder ein `@types/...`-Paket benötigt.
4. Kapsle die Nutzung in einer kleinen Hilfsfunktion oder Komponente.
5. Dokumentiere in der README, warum sie verwendet wird.

Beispiel mit `date-fns`:

```bash
npm install date-fns
```

Danach kannst du zum Beispiel `formatDistanceToNow` in einer `TaskDate`-Komponente verwenden. Importiere nur die benötigte Funktion.

**Lernziel:** Abhängigkeiten installieren, prüfen und isoliert einsetzen.

### 10. Animationen mit Anime.js

**Ziel:** Neue Aufgaben sollen einblenden und gelöschte Aufgaben ausblenden. Dafür verwendest du Anime.js direkt mit React-Refs und Effects.

**Erste Schritte:**

1. Installiere Anime.js: `npm install animejs`.
2. Ergänze in `TaskItem` einen `useRef<HTMLLIElement>(null)` für das Listenelement.
3. Starte in einem `useEffect` eine Animation auf `element.current`, sobald die Komponente erscheint.
4. Verwende für das Einblenden zum Beispiel `opacity`, `translateY` und `duration`.
5. Für das Löschen brauchst du zuerst einen Ablauf, der die Animation abwartet und danach `onDelete` aufruft.
6. Prüfe mit React Strict Mode, ob deine Animation sauber aufgeräumt wird.

```tsx
import { animate } from 'animejs'
import { useEffect, useRef } from 'react'

function AnimatedTaskItem() {
  const itemRef = useRef<HTMLLIElement>(null)

  useEffect(() => {
    if (!itemRef.current) return

    const animation = animate(itemRef.current, {
      opacity: [0, 1],
      translateY: [-8, 0],
      duration: 300,
      ease: 'out(3)',
    })

    return () => animation.pause()
  }, [])

  return <li ref={itemRef}>Eine Aufgabe</li>
}
```

Anime.js 4 wird aus dem Paket `animejs` importiert. Für komplexere React-Komponenten kannst du `createScope` verwenden, damit Animationen auf einen Container begrenzt und beim Unmount mit `scope.revert()` aufgeräumt werden.

**Achte darauf:** Animationen sind Zusatzverhalten. Die Liste muss ohne Animation weiterhin funktionieren. Prüfe außerdem `prefers-reduced-motion`, damit Nutzer reduzierte Bewegung aktivieren können.

**Lernziel:** Eine Library anhand ihrer Dokumentation integrieren, DOM-Elemente über Refs animieren und Animationen in React sauber aufräumen.

### 11. shadcn/ui einrichten

**Ziel:** Eine einzelne bestehende UI-Stelle durch eine anpassbare shadcn/ui-Komponente ersetzen.

**Erste Schritte:**

1. Lies die Installationshinweise für Vite und prüfe die aktuelle CLI-Version.
2. Installiere die CLI: `npm install -D shadcn`.
3. Initialisiere die Konfiguration: `npx shadcn@latest init`.
4. Füge zunächst nur eine Komponente hinzu: `npx shadcn@latest add button`.
5. Verwende sie zuerst für den Button „Aufgabe hinzufügen“.
6. Prüfe danach die erzeugten Dateien und passe sie an die bestehenden CSS-Variablen an.

`shadcn/ui` kopiert Komponenten in dein Projekt. Du lernst dadurch nicht nur eine API kennen, sondern kannst den erzeugten Code selbst verändern.

**Lernziel:** Eine UI-Lösung konfigurieren, schrittweise einführen und an das Projekt anpassen.

### 12. Dialog zum Bearbeiten

**Ziel:** Das Bearbeitungsformular aus Challenge 1 soll in einem Dialog erscheinen.

**Erste Schritte:**

1. Installiere mit `npx shadcn@latest add dialog`.
2. Erstelle `EditTaskDialog` als eigene Komponente.
3. Übergib `task`, `open` und `onSave` über Props.
4. Lass `TaskItem` nur das Öffnen des Dialogs auslösen.
5. Halte die eigentliche Aktualisierung weiterhin im Aufgaben-Hook.

**Lernziel:** Zusammengesetzte Komponenten und State-Grenzen.

## Stufe 4 – Fortgeschrittene Features

### 13. React Router

**Ziel:** Die selbst gebaute Navigation durch einen Router ersetzen.

**Erste Schritte:**

1. Installiere `npm install react-router`.
2. Lies `src/routes.ts` und übertrage die drei vorhandenen Pfade.
3. Erstelle eine Router-Konfiguration mit Layout, Seiten und einer 404-Seite.
4. Ersetze `AppLink` schrittweise durch `Link` oder `NavLink`.
5. Entferne die alte `popstate`-Logik erst, wenn alle Links umgestellt sind.

**Lernziel:** Routing, Layouts und aktive Navigationspunkte.

### 14. Backend oder API

**Ziel:** Aufgaben sollen von einer externen Datenquelle geladen und gespeichert werden.

**Erste Schritte:**

1. Entscheide dich zuerst zwischen einem Mock-Service und einer eigenen API.
2. Erstelle eine kleine `taskApi.ts` mit `getTasks`, `createTask` und `deleteTask`.
3. Ergänze im Hook `isLoading` und `error`.
4. Zeige Lade- und Fehlerzustände in einer eigenen Komponente an.
5. Aktualisiere die lokale Liste erst nach erfolgreicher Antwort.

**Lernziel:** Async-Code, Fehlerzustände und eine klare API-Grenze.

### 15. Tests

**Ziel:** Die wichtigsten Interaktionen sollen automatisch überprüft werden.

**Erste Schritte:**

1. Installiere Vitest, `jsdom` und Testing Library.
2. Teste zuerst `TaskForm`: gültige Eingabe, leere Eingabe und Priorität.
3. Teste `TaskItem`: Checkbox und Löschbutton.
4. Verschiebe wiederverwendbare State-Logik in `useTasks`, bevor du den Hook testest.
5. Ergänze ein `test`-Script in `package.json`.

```bash
npm install -D vitest jsdom @testing-library/react @testing-library/jest-dom
```

**Lernziel:** Verhalten aus Sicht der Nutzer testen.

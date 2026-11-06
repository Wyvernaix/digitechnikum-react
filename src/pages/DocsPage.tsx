import { DocsCard } from '../components/DocsCard'
import { PageHeader } from '../components/PageHeader'

export function DocsPage() {
  return (
    <>
      <PageHeader
        description="Eine kompakte Übersicht über Aufbau, React-Muster und Funktionen dieses Projekts."
        title="Projektdokumentation"
      />
      <div className="docs-grid">
        <DocsCard
          description="Die Anwendung ist in kleine Bereiche aufgeteilt, damit jede Datei eine klare Aufgabe hat."
          title="Projektaufbau"
        >
          <ul>
            <li><code>components/</code> enthält wiederverwendbare UI-Bausteine.</li>
            <li><code>models/task.ts</code> ist die zentrale Definition für Aufgaben und Prioritäten.</li>
            <li><code>data/</code> enthält die Startdaten getrennt von der App-Logik.</li>
            <li><code>functions/</code> enthält reine Funktionen für Aufgabenänderungen und Navigation.</li>
            <li><code>hooks/</code> enthält React-Logik wie Aufgaben-State und Seitenwechsel.</li>
            <li><code>TaskActions</code> bündelt die gemeinsamen Callback-Typen für die UI.</li>
            <li><code>pages/</code> enthält die drei Seiten der Anwendung.</li>
            <li><code>context/</code> stellt den Theme Context bereit.</li>
            <li><code>styles/</code> enthält die nach Bereichen aufgeteilten CSS-Dateien.</li>
          </ul>
        </DocsCard>

        <DocsCard
          description="Der Aufgaben-State und seine Aktionen sind in einem Hook gebündelt und werden als Props an die UI weitergegeben."
          title="Aufgabenverwaltung"
        >
          <ul>
            <li><code>useTasks</code> verwaltet Aufgaben und die verfügbaren Aktionen.</li>
            <li>Neue Aufgaben können mit Titel und Priorität angelegt werden.</li>
            <li>Checkboxen ändern den Erledigt-Status einer Aufgabe.</li>
            <li>Mit „Löschen“ wird eine Aufgabe aus der Liste entfernt.</li>
            <li>Die Übersicht zeigt die Gesamtzahl, erledigte und offene Aufgaben.</li>
          </ul>
        </DocsCard>

        <DocsCard
          description="Props verbinden die Komponenten miteinander und machen sie unabhängig voneinander wiederverwendbar."
          title="Komponenten und Props"
        >
          <p>
            <code>TaskSection</code> erhält Aufgaben und Ereignisfunktionen von der
            Seite. Diese gibt sie an <code>TaskForm</code> und <code>TaskList</code>
            weiter. <code>TaskItem</code> stellt anschließend eine einzelne Aufgabe
            dar. Die Seiten müssen die Aufgabenlogik nicht selbst implementieren.
          </p>
        </DocsCard>

        <DocsCard
          description="Der Context macht das Theme verfügbar, ohne es durch jede einzelne Komponente reichen zu müssen."
          title="Theme Context"
        >
          <p>
            <code>ThemeProvider</code> verwaltet den aktuellen Modus. Der Header
            verwendet den Hook <code>useTheme</code>, um zwischen hellem und dunklem
            Theme umzuschalten. Das Theme wird als Datenattribut am HTML-Element
            gesetzt und von den CSS-Variablen verwendet.
          </p>
        </DocsCard>

        <DocsCard
          description="Die Anwendung verwendet einfache Pfade und benötigt für die Navigation keine zusätzliche Bibliothek."
          title="Navigation"
        >
          <ul>
            <li><code>/</code> öffnet die Übersichtsseite.</li>
            <li><code>/tasks</code> zeigt alle Aufgaben.</li>
            <li><code>/docs</code> öffnet diese Dokumentation.</li>
            <li><code>AppLink</code> nutzt die History API ohne vollständiges Neuladen.</li>
          </ul>
        </DocsCard>

        <DocsCard
          description="Die Anwendung ist bewusst klein gehalten und eignet sich als Ausgangspunkt für weitere Übungen."
          title="Mögliche Erweiterungen"
        >
          <ul>
            <li>Aufgaben im Browser mit <code>localStorage</code> speichern.</li>
            <li>Aufgaben nach Priorität oder Status filtern.</li>
            <li>Aufgaben bearbeiten und mit einem Fälligkeitsdatum versehen.</li>
            <li>Eine Backend-API für mehrere Nutzer anbinden.</li>
          </ul>
        </DocsCard>
      </div>
    </>
  )
}

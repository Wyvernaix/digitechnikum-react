import { Header } from './Header'
import { usePageNavigation } from '../hooks/usePageNavigation'
import { useTasks } from '../hooks/useTasks'
import { DocsPage } from '../pages/DocsPage'
import { DashboardPage } from '../pages/DashboardPage'
import { TasksPage } from '../pages/TasksPage'

export function AppContent() {
  const page = usePageNavigation()
  const taskState = useTasks()

  return (
    <div className="app-shell">
      <Header currentPage={page} />
      <main className="main-content">
        {page === 'dashboard' && (
          <DashboardPage
            completedCount={taskState.completedCount}
            onAddTask={taskState.addTask}
            onDeleteTask={taskState.deleteTask}
            onToggleTask={taskState.toggleTask}
            tasks={taskState.tasks}
          />
        )}
        {page === 'tasks' && (
          <TasksPage
            onAddTask={taskState.addTask}
            onDeleteTask={taskState.deleteTask}
            onToggleTask={taskState.toggleTask}
            tasks={taskState.tasks}
          />
        )}
        {page === 'docs' && <DocsPage />}
      </main>
    </div>
  )
}

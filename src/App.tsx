import { useEffect, useMemo, useState } from 'react'
import './styles/index.css'
import { Header } from './components/Header'
import { ThemeProvider } from './context/ThemeContext'
import { initialTasks } from './data/initialTasks'
import { DocsPage } from './pages/DocsPage'
import { DashboardPage } from './pages/DashboardPage'
import { TasksPage } from './pages/TasksPage'
import { createTask, type Priority, type Task } from './models/task'
import { getPageFromPath, type Page } from './routes'

function App() {
  const [page, setPage] = useState<Page>(() => getPageFromPath(window.location.pathname))
  const [tasks, setTasks] = useState<Task[]>(initialTasks)

  useEffect(() => {
    const handlePopState = () => setPage(getPageFromPath(window.location.pathname))
    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  const completedCount = useMemo(
    () => tasks.filter((task) => task.completed).length,
    [tasks],
  )

  const addTask = (title: string, priority: Priority) => {
    setTasks((currentTasks) => [
      ...currentTasks,
      createTask({ title, priority }),
    ])
  }

  const toggleTask = (id: number) => {
    setTasks((currentTasks) =>
      currentTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    )
  }

  const deleteTask = (id: number) => {
    setTasks((currentTasks) => currentTasks.filter((task) => task.id !== id))
  }

  return (
    <ThemeProvider>
      <div className="app-shell">
        <Header currentPage={page} />
        <main className="main-content">
          {page === 'dashboard' && (
            <DashboardPage
              tasks={tasks}
              completedCount={completedCount}
              onToggleTask={toggleTask}
              onDeleteTask={deleteTask}
              onAddTask={addTask}
            />
          )}
          {page === 'tasks' && (
            <TasksPage
              tasks={tasks}
              onToggleTask={toggleTask}
              onDeleteTask={deleteTask}
              onAddTask={addTask}
            />
          )}
          {page === 'docs' && <DocsPage />}
        </main>
      </div>
    </ThemeProvider>
  )
}

export default App

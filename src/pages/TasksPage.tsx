import { PageHeader } from '../components/PageHeader'
import { TaskSection } from '../components/TaskSection'
import type { Priority, Task } from '../models/task'

type TasksPageProps = {
  tasks: Task[]
  onToggleTask: (id: number) => void
  onDeleteTask: (id: number) => void
  onAddTask: (title: string, priority: Priority) => void
}

export function TasksPage({ tasks, onToggleTask, onDeleteTask, onAddTask }: TasksPageProps) {
  return (
    <>
      <PageHeader
        description="Überprüfe und aktualisiere alle Aufgaben auf deiner Liste."
        title="Alle Aufgaben"
      />
      <TaskSection
        onAddTask={onAddTask}
        onDeleteTask={onDeleteTask}
        onToggleTask={onToggleTask}
        tasks={tasks}
      />
    </>
  )
}

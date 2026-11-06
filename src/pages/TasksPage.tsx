import { PageHeader } from '../components/common/PageHeader'
import { TaskSection } from '../components/tasks/TaskSection'
import type { Task, TaskActions } from '../models/task'

type TasksPageProps = TaskActions & {
  tasks: Task[]
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

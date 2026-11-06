import { AppLink } from './AppLink'
import { TaskForm } from './TaskForm'
import { TaskList } from './TaskList'
import type { Priority, Task } from '../models/task'

type TaskSectionProps = {
  tasks: Task[]
  showAllLink?: boolean
  onToggleTask: (id: number) => void
  onDeleteTask: (id: number) => void
  onAddTask: (title: string, priority: Priority) => void
}

export function TaskSection({
  tasks,
  showAllLink = false,
  onToggleTask,
  onDeleteTask,
  onAddTask,
}: TaskSectionProps) {
  return (
    <section>
      <div className="section-heading">
        <h2>{showAllLink ? 'Heutige Aufgaben' : 'Aufgabenliste'}</h2>
        {showAllLink && (
          <AppLink className="text-link" href="/tasks">
            Alle anzeigen
          </AppLink>
        )}
      </div>
      <TaskForm onAddTask={onAddTask} />
      <TaskList
        onDeleteTask={onDeleteTask}
        onToggleTask={onToggleTask}
        tasks={tasks}
      />
    </section>
  )
}

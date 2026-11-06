import { AppLink } from '../common/AppLink'
import { TaskForm } from './TaskForm'
import { TaskList } from './TaskList'
import type { Task, TaskActions } from '../../models/task'

type TaskSectionProps = TaskActions & {
  tasks: Task[]
  showAllLink?: boolean
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

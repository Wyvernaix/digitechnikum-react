import type { Task } from '../models/task'
import { TaskItem } from './TaskItem'

type TaskListProps = {
  tasks: Task[]
  onToggleTask: (id: number) => void
  onDeleteTask: (id: number) => void
}

export function TaskList({ tasks, onToggleTask, onDeleteTask }: TaskListProps) {
  if (tasks.length === 0) {
    return <p className="empty-state">Noch keine Aufgaben vorhanden. Füge oben eine Aufgabe hinzu.</p>
  }

  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          onDelete={onDeleteTask}
          onToggle={onToggleTask}
          task={task}
        />
      ))}
    </ul>
  )
}

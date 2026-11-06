import type { Task } from '../models/task'

type TaskItemProps = {
  task: Task
  onToggle: (id: number) => void
  onDelete: (id: number) => void
}

export function TaskItem({ task, onToggle, onDelete }: TaskItemProps) {
  return (
    <li className={`task-card ${task.completed ? 'completed' : ''}`}>
      <input
        aria-label={`${task.title} als erledigt markieren`}
        checked={task.completed}
        className="task-check"
        onChange={() => onToggle(task.id)}
        type="checkbox"
      />
      <div className="task-details">
        <div className="task-title">{task.title}</div>
        <span className="priority">Priorität: {task.priority}</span>
      </div>
      <button
        aria-label={`${task.title} löschen`}
        className="delete-button"
        onClick={() => onDelete(task.id)}
        type="button"
      >
        Löschen
      </button>
    </li>
  )
}

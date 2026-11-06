import { useState, type FormEvent } from 'react'
import { defaultPriority, priorities, type Priority } from '../models/task'

type TaskFormProps = {
  onAddTask: (title: string, priority: Priority) => void
}

export function TaskForm({ onAddTask }: TaskFormProps) {
  const [title, setTitle] = useState('')
  const [priority, setPriority] = useState<Priority>(defaultPriority)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const trimmedTitle = title.trim()
    if (!trimmedTitle) return
    onAddTask(trimmedTitle, priority)
    setTitle('')
    setPriority(defaultPriority)
  }

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        aria-label="Aufgabentitel"
        onChange={(event) => setTitle(event.target.value)}
        placeholder="Was muss erledigt werden?"
        value={title}
      />
      <select
        aria-label="Aufgabenpriorität"
        onChange={(event) => {
          const nextPriority = priorities.find((item) => item === event.target.value)
          if (nextPriority) setPriority(nextPriority)
        }}
        value={priority}
      >
        {priorities.map((item) => (
          <option key={item}>{item}</option>
        ))}
      </select>
      <button className="primary-button" type="submit">
        Aufgabe hinzufügen
      </button>
    </form>
  )
}

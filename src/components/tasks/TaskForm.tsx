import { useState, type FormEvent } from 'react'
import {
  defaultPriority,
  priorities,
  type NewTask,
  type Priority,
} from '../../models/task'

type TaskFormProps = {
  onAddTask: (taskData: NewTask) => void
}

export function TaskForm({ onAddTask }: TaskFormProps) {
  const [title, setTitle] = useState('')
  const [priority, setPriority] = useState<Priority>(defaultPriority)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const trimmedTitle = title.trim()

    // - Leere Aufgaben werden nicht an den State weitergegeben.
    if (!trimmedTitle) return

    onAddTask({ title: trimmedTitle, priority })
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

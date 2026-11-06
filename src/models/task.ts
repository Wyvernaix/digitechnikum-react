export const priorities = ['Hoch', 'Mittel', 'Niedrig'] as const

export type Priority = (typeof priorities)[number]

export type Task = {
  id: number
  title: string
  completed: boolean
  priority: Priority
}

export type NewTask = Pick<Task, 'title' | 'priority'>

export const defaultPriority: Priority = 'Mittel'

export function createTask({ title, priority }: NewTask): Task {
  return {
    id: Date.now(),
    title,
    completed: false,
    priority,
  }
}

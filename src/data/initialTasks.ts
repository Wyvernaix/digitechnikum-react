import type { Task } from '../models/task'

export const initialTasks: Task[] = [
  { id: 1, title: 'Die Woche planen', completed: true, priority: 'Hoch' },
  { id: 2, title: 'React-Übung abschließen', completed: false, priority: 'Mittel' },
  { id: 3, title: 'Ein Kapitel lesen', completed: false, priority: 'Niedrig' },
]

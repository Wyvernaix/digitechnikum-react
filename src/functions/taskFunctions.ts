import { createTask, type NewTask, type Task } from '../models/task'

export function addTask(tasks: Task[], taskData: NewTask): Task[] {
  // - Neue Arrays halten den State unverändert und vorhersehbar.
  return [...tasks, createTask(taskData)]
}

export function toggleTask(tasks: Task[], taskId: number): Task[] {
  // - Nur die ausgewählte Aufgabe wird kopiert und geändert.
  return tasks.map((task) =>
    task.id === taskId ? { ...task, completed: !task.completed } : task,
  )
}

export function deleteTask(tasks: Task[], taskId: number): Task[] {
  // - Die Aufgabe mit der passenden ID bleibt nicht in der Liste.
  return tasks.filter((task) => task.id !== taskId)
}

export function getCompletedTaskCount(tasks: Task[]): number {
  return tasks.filter((task) => task.completed).length
}

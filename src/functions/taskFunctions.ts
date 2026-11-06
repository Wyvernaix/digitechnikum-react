import { createTask, type NewTask, type Task } from '../models/task'

export function addTask(tasks: Task[], taskData: NewTask): Task[] {
  return [...tasks, createTask(taskData)]
}

export function toggleTask(tasks: Task[], taskId: number): Task[] {
  return tasks.map((task) =>
    task.id === taskId ? { ...task, completed: !task.completed } : task,
  )
}

export function deleteTask(tasks: Task[], taskId: number): Task[] {
  return tasks.filter((task) => task.id !== taskId)
}

export function getCompletedTaskCount(tasks: Task[]): number {
  return tasks.filter((task) => task.completed).length
}

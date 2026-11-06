import { useMemo, useState } from 'react'
import { initialTasks } from '../data/initialTasks'
import {
  addTask,
  deleteTask,
  getCompletedTaskCount,
  toggleTask,
} from '../functions/taskFunctions'
import type { NewTask } from '../models/task'

export function useTasks() {
  // - Der Hook bündelt State und Aktionen für alle Aufgaben-Seiten.
  const [tasks, setTasks] = useState(initialTasks)

  const completedCount = useMemo(() => getCompletedTaskCount(tasks), [tasks])

  const handleAddTask = (taskData: NewTask) => {
    // - Die eigentliche Änderung liegt in einer separaten, testbaren Funktion.
    setTasks((currentTasks) => addTask(currentTasks, taskData))
  }

  const handleToggleTask = (taskId: number) => {
    setTasks((currentTasks) => toggleTask(currentTasks, taskId))
  }

  const handleDeleteTask = (taskId: number) => {
    setTasks((currentTasks) => deleteTask(currentTasks, taskId))
  }

  return {
    tasks,
    completedCount,
    addTask: handleAddTask,
    toggleTask: handleToggleTask,
    deleteTask: handleDeleteTask,
  }
}

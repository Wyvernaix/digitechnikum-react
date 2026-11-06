import { PageHeader } from '../components/common/PageHeader'
import { TaskSection } from '../components/tasks/TaskSection'
import { TaskSummary } from '../components/tasks/TaskSummary'
import type { Task, TaskActions } from '../models/task'

type DashboardPageProps = TaskActions & {
  tasks: Task[]
  completedCount: number
}

export function DashboardPage({
  tasks,
  completedCount,
  onToggleTask,
  onDeleteTask,
  onAddTask,
}: DashboardPageProps) {
  return (
    <>
      <PageHeader
        description="Behalte den Überblick mit einer kurzen Liste fokussierter Aufgaben."
        title="Guten Morgen!"
      />
      <TaskSummary completed={completedCount} total={tasks.length} />
      <TaskSection
        onAddTask={onAddTask}
        onDeleteTask={onDeleteTask}
        onToggleTask={onToggleTask}
        showAllLink
        tasks={tasks.slice(0, 3)}
      />
    </>
  )
}

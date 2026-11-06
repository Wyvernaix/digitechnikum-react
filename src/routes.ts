export type Page = 'dashboard' | 'tasks' | 'docs'

export const routes: Record<Page, string> = {
  dashboard: '/',
  tasks: '/tasks',
  docs: '/docs',
}

export function getPageFromPath(pathname: string): Page {
  if (pathname === routes.tasks) return 'tasks'
  if (pathname === routes.docs) return 'docs'
  return 'dashboard'
}

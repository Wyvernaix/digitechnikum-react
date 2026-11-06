export type Page = 'dashboard' | 'tasks' | 'docs'

export const routes: Record<Page, string> = {
  dashboard: '/',
  tasks: '/tasks',
  docs: '/docs',
}

export function getPageFromPath(pathname: string): Page {
  // - Unbekannte Pfade landen bewusst auf der Übersicht.
  if (pathname === routes.tasks) return 'tasks'
  if (pathname === routes.docs) return 'docs'
  return 'dashboard'
}

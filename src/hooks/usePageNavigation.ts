import { useEffect, useState } from 'react'
import { getPageFromPath, type Page } from '../routes'

export function usePageNavigation() {
  const [page, setPage] = useState<Page>(() =>
    getPageFromPath(window.location.pathname),
  )

  useEffect(() => {
    const handlePopState = () => {
      setPage(getPageFromPath(window.location.pathname))
    }

    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  return page
}

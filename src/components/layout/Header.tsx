import { useTheme } from '../../context/useTheme'
import { routes, type Page } from '../../routes'
import { AppLink } from '../common/AppLink'

type HeaderProps = {
  currentPage: Page
}

const links = [
  { label: 'Übersicht', page: 'dashboard' as const },
  { label: 'Alle Aufgaben', page: 'tasks' as const },
  { label: 'Docs', page: 'docs' as const },
]

export function Header({ currentPage }: HeaderProps) {
  const { theme, toggleTheme } = useTheme()

  return (
    <header className="site-header">
      <AppLink className="brand" href={routes.dashboard}>
        Meine Aufgaben
      </AppLink>
      <nav className="nav" aria-label="Hauptnavigation">
        {links.map((link) => (
          <AppLink
            className={`nav-link ${currentPage === link.page ? 'active' : ''}`}
            href={routes[link.page]}
            key={link.page}
          >
            {link.label}
          </AppLink>
        ))}
        <button className="theme-button" onClick={toggleTheme} type="button">
          {theme === 'light' ? 'Dunkler Modus' : 'Heller Modus'}
        </button>
      </nav>
    </header>
  )
}

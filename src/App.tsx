import './styles/index.css'
import { AppContent } from './components/layout/AppContent'
import { ThemeProvider } from './context/ThemeContext'

function App() {
  return (
    <ThemeProvider>
      {/* - Der Provider stellt das Theme für die gesamte App bereit. */}
      <AppContent />
    </ThemeProvider>
  )
}

export default App

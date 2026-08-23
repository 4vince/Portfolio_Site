import { useState } from 'react'

export default function Nav() {
  const [theme, setTheme] = useState(() =>
    document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light',
  )

  function toggleTheme() {
    const next = theme === 'dark' ? 'light' : 'dark'
    document.documentElement.dataset.theme = next
    localStorage.setItem('theme', next)
    setTheme(next)
  }

  return (
    <header className="nav">
      <div className="container nav-inner">
        <a href="#top" className="nav-brand" aria-label="Back to top">
          <span className="nav-mark">VF</span>
          Vincent Fajardo
        </a>
        <div className="nav-right">
          <nav className="nav-links" aria-label="Primary">
            <a href="#work">Achievements</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="/resume.pdf" className="nav-cta" target="_blank" rel="noopener">R&eacute;sum&eacute;</a>
          </nav>
          <button
            type="button"
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            <svg className="icon-moon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M20 14.5A8 8 0 0 1 9.5 4 8 8 0 1 0 20 14.5Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
            </svg>
            <svg className="icon-sun" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" />
              <path d="M12 2v2.5M12 19.5V22M2 12h2.5M19.5 12H22M4.9 4.9l1.8 1.8M17.3 17.3l1.8 1.8M4.9 19.1l1.8-1.8M17.3 6.7l1.8-1.8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}

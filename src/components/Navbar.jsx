import { useEffect, useState } from 'react'

function initialTheme() {
  try {
    const saved = localStorage.getItem('theme')
    if (saved) return saved
  } catch {}
  return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'
}

export default function Navbar({ nav, labels }) {
  const [theme, setTheme] = useState(initialTheme)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    try {
      localStorage.setItem('theme', theme)
    } catch {}
  }, [theme])

  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark')

  return (
    <header className="nav">
      <a href="#inicio" className="nav__logo" aria-label="Inicio">SQ</a>
      <button
        className="nav__burger"
        aria-label="Abrir menú"
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        <span /><span /><span />
      </button>
      <nav className={`nav__links ${open ? 'is-open' : ''}`}>
        {nav.map((item) => (
          <a key={item.id} href={`#${item.id}`} onClick={() => setOpen(false)}>
            {item.label}
          </a>
        ))}
        <button className="nav__theme" onClick={toggleTheme}>
          {theme === 'dark' ? `☀ ${labels.themeLight}` : `☾ ${labels.themeDark}`}
        </button>
      </nav>
    </header>
  )
}

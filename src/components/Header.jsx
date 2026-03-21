import { Link } from 'react-router-dom'

const navItems = [
  { label: 'home', to: '/' },
  { label: 'about me', to: '/about' },
  { label: 'projects', to: '/#projects' },
  { label: 'blog', to: '/blog' },
]

export default function Header({ rainbow, onToggleRainbow, dark, onToggleDark }) {
  const linkColor = dark ? '#a0d4a0' : '#333'
  const linkHover = dark ? '#3fb950' : '#E07A96'

  return (
    <header style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '1rem 2rem',
      backgroundColor: 'transparent',
      position: 'relative',
    }}>
      <nav style={{ display: 'flex', gap: '2rem' }}>
        {navItems.map(({ label, to }) => (
          <Link
            key={label}
            to={to}
            style={{
              textDecoration: 'none',
              color: linkColor,
              fontSize: '0.95rem',
              fontWeight: '500',
              transition: 'color 0.2s',
            }}
            onMouseEnter={e => e.target.style.color = linkHover}
            onMouseLeave={e => e.target.style.color = linkColor}
          >
            {label}
          </Link>
        ))}
      </nav>
      <div style={{ position: 'absolute', right: '2rem', display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
        <button
          onClick={onToggleDark}
          title={dark ? 'Disable dark theme' : 'Enable dark theme'}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            fontSize: '1.2rem',
            padding: '0.2rem 0.4rem',
            borderRadius: '4px',
            opacity: dark ? 1 : 0.4,
            transition: 'opacity 0.2s',
          }}
          onMouseEnter={e => e.currentTarget.style.opacity = '1'}
          onMouseLeave={e => e.currentTarget.style.opacity = dark ? '1' : '0.4'}
        >
          {dark ? '☀️' : '🌑'}
        </button>
        <button
          onClick={onToggleRainbow}
          title={rainbow ? 'Disable rainbow' : 'Enable rainbow'}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            fontSize: '1.2rem',
            padding: '0.2rem 0.4rem',
            borderRadius: '4px',
            opacity: rainbow ? 1 : 0.4,
            transition: 'opacity 0.2s',
          }}
          onMouseEnter={e => e.currentTarget.style.opacity = '1'}
          onMouseLeave={e => e.currentTarget.style.opacity = rainbow ? '1' : '0.4'}
        >
          🌈
        </button>
      </div>
    </header>
  )
}

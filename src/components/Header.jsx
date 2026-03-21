import { useState } from 'react'
import { Link } from 'react-router-dom'

const navItems = [
  { label: 'home', to: '/' },
  { label: 'about me', to: '/about' },
  { label: 'projects', to: '/projects' },
  { label: 'blog', to: '/blog' },
]

export default function Header({ rainbow, onToggleRainbow, dark, onToggleDark }) {
  const [adPopup, setAdPopup] = useState(false)
  const linkColor = dark ? '#a0d4a0' : '#333'
  const linkHover = dark ? '#3fb950' : '#E07A96'

  return (
    <>
      <header className="site-header">
        <nav className="site-nav">
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
        <div className="header-actions">
          <button
            onClick={() => setAdPopup(true)}
            title="Show advertisements"
            className="show-ads-btn"
            style={{
              background: 'none',
              border: '1px solid',
              borderColor: dark ? '#30363d' : '#ddd',
              borderRadius: '20px',
              cursor: 'pointer',
              fontSize: '0.7rem',
              fontWeight: '500',
              padding: '0.2rem 0.6rem',
              color: dark ? '#8b949e' : '#888',
              transition: 'all 0.2s',
              whiteSpace: 'nowrap',
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = dark ? '#3fb950' : '#E07A96'; e.currentTarget.style.color = dark ? '#3fb950' : '#E07A96' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = dark ? '#30363d' : '#ddd'; e.currentTarget.style.color = dark ? '#8b949e' : '#888' }}
          >
            show ads
          </button>
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

      {adPopup && (
        <div
          onClick={() => setAdPopup(false)}
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(0,0,0,0.35)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 2000,
          }}
        >
          <div
            onClick={e => e.stopPropagation()}
            style={{
              background: dark ? '#161b22' : '#fff',
              borderRadius: '16px',
              padding: '2rem 1.5rem',
              maxWidth: '360px',
              textAlign: 'center',
              boxShadow: '0 8px 32px rgba(0,0,0,0.18)',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              position: 'relative',
            }}
          >
            <button
              onClick={() => setAdPopup(false)}
              style={{
                position: 'absolute',
                top: '0.75rem',
                right: '0.75rem',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                fontSize: '1.1rem',
                color: dark ? '#8b949e' : '#aaa',
                lineHeight: 1,
                padding: '0.2rem',
              }}
            >
              ✕
            </button>
            <p style={{ margin: 0, fontSize: '1rem', color: dark ? '#e6edf3' : '#333', lineHeight: '1.6' }}>
              Just kidding! I don't have ads.<br />Thanks for the support though!
            </p>
          </div>
        </div>
      )}
    </>
  )
}

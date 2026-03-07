import { Link } from 'react-router-dom'

const navItems = [
  { label: 'home', to: '/' },
  { label: 'about me', to: '/about' },
  { label: 'projects', to: '/#projects' },
  { label: 'blog', to: '/blog' },
]

export default function Header() {
  return (
    <header style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '1rem 2rem',
      backgroundColor: 'transparent',
    }}>
      <nav style={{ display: 'flex', gap: '2rem' }}>
        {navItems.map(({ label, to }) => (
          <Link
            key={label}
            to={to}
            style={{
              textDecoration: 'none',
              color: '#333',
              fontSize: '0.95rem',
              fontWeight: '500',
              transition: 'color 0.2s',
            }}
            onMouseEnter={e => e.target.style.color = '#E07A96'}
            onMouseLeave={e => e.target.style.color = '#333'}
          >
            {label}
          </Link>
        ))}
      </nav>
    </header>
  )
}

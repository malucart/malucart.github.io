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
        {['home', 'about me', 'projects', 'blog'].map((item) => (
          <a
            key={item}
            href={item === 'home' ? '/' : `#${item.toLowerCase().replace(' ', '-')}`}
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
            {item}
          </a>
        ))}
      </nav>
    </header>
  )
}

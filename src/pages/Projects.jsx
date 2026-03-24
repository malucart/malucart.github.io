const projects = [
  {
    name: 'Rocket Telemetry',
    description: 'A slide presentation about my rocket telemetry for when I was part of the rocket club during school, built with Reveal.js.',
    link: '/slides_rocket/index.html',
    cover: '/images/rocket-image.jpg',
  },
  {
    name: 'TimingAttack: A Burp Suite Extension',
    description: 'It allows pentesters to verify whether a website is susceptible to timing attacks.',
    link: 'https://github.com/malucart/TimingAttack',
    cover: '/images/timingattack.png',
  },
  {
    name: 'My Favorite Crypto',
    description: 'App that tracks cryptocurrency in real time, using CoinMarketCap API.',
    link: 'https://github.com/malucart/MyFavoriteCrypto',
    cover: '/images/wireframes_crypto.png',
  },
  {
    name: 'pwnable-dot-kr',
    description: 'Solved a few pwn challenges regarding system exploitation.',
    link: 'https://github.com/malucart/pwanble-dot-kr',
    cover: '/images/pwn.png',
  },
  {
    name: 'Black Hole',
    description: 'A physics-based simulation of a black hole built in Python and Pygame library',
    link: 'https://github.com/malucart/BlackHole',
    cover: '/images/blackhole.png',
  },
  {
    name: 'Flixster',
    description: 'App that shows the latest movies currently playing in theaters. It uses the Movie Database API to display images and basic information about these movies to the user.',
    link: 'https://github.com/malucart/Flixster',
    cover: '/images/flixter3.png',
  },
  {
    name: 'Twitter App',
    description: 'App that allows a user to view their Twitter timeline and post a new tweet. The app utilizes Twitter REST API.',
    link: 'https://github.com/malucart/SimpleTwitterApp',
    cover: '/images/twitter.png',
  },
  {
    name: 'Weather App',
    description: 'Simple app that shows temperature, sensation ("feels like"), and humidity of a city that was chosen by the user.',
    link: 'https://github.com/malucart/MyWeatherApp/tree/main',
    cover: '/images/weatherapp.png',
  },
]

export default function Projects({ dark }) {
  const t = dark ? darkTheme : lightTheme

  return (
    <>
      <div className="projects-page">
        <div style={{ width: '100%', maxWidth: '900px', flex: 1 }}>
          <h1 style={{ fontSize: '1.8rem', color: t.textPrimary, marginBottom: '0.3rem' }}>Projects</h1>
          <p style={{ color: t.textSecondary, fontSize: '0.95rem', marginBottom: '2.5rem' }}>
            Things I've designed and built, from wireframes and prototypes to code.
          </p>

          <div className="projects-grid">
            {projects.map((p) => (
              <a
                key={p.name}
                href={p.link}
                target={p.link.startsWith('http') ? '_blank' : '_self'}
                rel="noreferrer"
                style={{ textDecoration: 'none', display: 'block', height: '100%' }}
              >
                <div style={{
                  borderRadius: '14px',
                  overflow: 'hidden',
                  backgroundColor: t.cardBg,
                  boxShadow: dark ? '0 2px 12px rgba(0,0,0,0.3)' : '0 2px 12px rgba(0,0,0,0.08)',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                  cursor: 'pointer',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                }}
                  onMouseEnter={e => {
                    e.currentTarget.style.transform = 'translateY(-4px)'
                    e.currentTarget.style.boxShadow = dark ? '0 8px 24px rgba(0,0,0,0.4)' : '0 8px 24px rgba(0,0,0,0.14)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.transform = 'translateY(0)'
                    e.currentTarget.style.boxShadow = dark ? '0 2px 12px rgba(0,0,0,0.3)' : '0 2px 12px rgba(0,0,0,0.08)'
                  }}
                >
                  {/* Cover image */}
                  <div style={{
                    width: '100%',
                    aspectRatio: '16/9',
                    backgroundColor: t.coverPlaceholder,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    overflow: 'hidden',
                  }}>
                    {p.cover
                      ? <img src={p.cover} alt={p.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                      : <span style={{ fontSize: '2.5rem', opacity: 0.3 }}>🖼️</span>
                    }
                  </div>

                  {/* Info */}
                  <div style={{ padding: '1rem 1.2rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <h3 style={{ margin: '0 0 0.4rem', fontSize: '1rem', color: t.textPrimary, fontWeight: '600' }}>
                      {p.name}
                    </h3>
                    <p style={{ margin: 0, fontSize: '0.875rem', color: t.textSecondary, lineHeight: '1.5', flex: 1 }}>
                      {p.description}
                    </p>
                    <span style={{ display: 'inline-block', marginTop: '0.8rem', fontSize: '0.8rem', color: t.accent, fontWeight: '500' }}>
                      View Project →
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      <footer style={{
        width: '100%',
        padding: '0.8rem',
        textAlign: 'center',
        borderTop: `1px solid ${t.border}`,
        marginTop: '3rem',
        background: dark ? '#0d1117' : 'linear-gradient(135deg, #ffffff 0%, #F4A7B9 100%)',
      }}>
        <p style={{ margin: 0, fontSize: '0.75rem', color: dark ? '#a0d4a0' : '#888' }}>
          louisa's ⚡
        </p>
      </footer>
    </>
  )
}

const lightTheme = {
  textPrimary: '#222',
  textSecondary: '#666',
  cardBg: '#ffffff',
  coverPlaceholder: '#f5f5f5',
  accent: '#c0607a',
  border: 'rgba(0,0,0,0.08)',
}

const darkTheme = {
  textPrimary: '#e6edf3',
  textSecondary: '#8b949e',
  cardBg: '#1c2128',
  coverPlaceholder: '#2d333b',
  accent: '#3fb950',
  border: '#30363d',
}

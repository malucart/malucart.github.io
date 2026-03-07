const projects = [
  {
    name: 'Rocket Telemetry',
    description: 'A slide presentation about my rocket telemetry , built with Reveal.js.',
    link: '/slides_rocket/index.html',
  },
  {
    name: 'Project Two',
    description: 'A short description of what this project does and what you learned building it.',
    link: '#',
  },
  {
    name: 'Project Three',
    description: 'A short description of what this project does and what you learned building it.',
    link: '#',
  },
]

const exploring = [
  'React Router for multi-page navigation',
  'Component-driven design with reusable UI',
  'ESLint rules and clean code habits',
  'Deploying with GitHub Actions',
]

export default function Home() {
  return (
    <div style={{
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      fontFamily: 'system-ui, sans-serif',
    }}>

      {/* Hero / Profile */}
      <section style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        padding: '3rem 2rem 4rem',
        gap: '1.2rem',
        maxWidth: '600px',
        width: '100%',
      }}>
        <div style={{
          width: '140px',
          height: '140px',
          borderRadius: '50%',
          overflow: 'hidden',
          border: '4px solid #fff',
          boxShadow: '0 4px 20px rgba(0,0,0,0.12)',
          backgroundColor: '#f0f0f0',
          flexShrink: 0,
        }}>
          <img
            src="/images/profile_picture.png"
            alt="Louisa"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>

        <h1 style={{ margin: 0, fontSize: '1.4rem', color: '#222', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
          louisa
          <img src="/images/sunflower.png" alt="sunflower" style={{ width: '2.1rem', height: '2rem' }} />
        </h1>

        <p style={{ margin: 0, fontSize: '1.05rem', color: '#555', lineHeight: '1.7', whiteSpace: 'nowrap' }}>
          This is my space to build, experiment, and share some stuff.
        </p>

        {/* Social links */}
        <div style={{ display: 'flex', gap: '1.2rem', marginTop: '0.5rem' }}>
          <a href="https://github.com/malucart" target="_blank" rel="noreferrer" title="GitHub" style={iconStyle}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z"/>
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/lucart/" target="_blank" rel="noreferrer" title="LinkedIn" style={iconStyle}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
          <a href="mailto:louisa0x01@gmail.com" title="Email" style={iconStyle}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"/>
            </svg>
          </a>
        </div>
      </section>

      {/* Wave divider */}
      <div style={{ width: '100%', lineHeight: 0 }}>
        <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ display: 'block', width: '100%' }}>
          <path d="M0,0 C360,80 1080,80 1440,0 L1440,80 L0,80 Z" fill="white" />
        </svg>
      </div>

      <div style={{ backgroundColor: 'white', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {/* Featured Projects */}
        <section id="projects" style={sectionStyle}>
          <h2 style={sectionHeading}>Featured Projects</h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '1.2rem',
            width: '100%',
          }}>
            {projects.map((p) => (
              <div key={p.name} style={cardStyle}>
                <h3 style={{ margin: '0 0 0.5rem', fontSize: '1rem', color: '#222' }}>{p.name}</h3>
                <p style={{ margin: '0 0 1rem', fontSize: '0.9rem', color: '#555', lineHeight: '1.6', flex: 1 }}>{p.description}</p>
                <a href={p.link} style={linkStyle}>View Project →</a>
              </div>
            ))}
          </div>
        </section>

        {/* Currently Exploring */}
        <section id="about-me" style={sectionStyle}>
          <h2 style={sectionHeading}>Currently Exploring</h2>
          <ul style={{ margin: 0, padding: '0 0 0 1.2rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {exploring.map((item) => (
              <li key={item} style={{ fontSize: '0.95rem', color: '#444', lineHeight: '1.6' }}>{item}</li>
            ))}
          </ul>
        </section>
      </div>

      {/* Footer */}
      <footer id="blog" style={{
        width: '100%',
        padding: '2rem',
        textAlign: 'center',
        borderTop: '1px solid rgba(0,0,0,0.08)',
        marginTop: 'auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '0.8rem',
      }}>
        <p style={{ margin: 0, fontSize: '0.8rem', color: '#777' }}>
          built with React + Vite ⚡
        </p>
      </footer>
    </div>
  )
}

const iconStyle = {
  color: '#555',
  textDecoration: 'none',
  transition: 'color 0.2s',
  display: 'flex',
  alignItems: 'center',
}

const sectionStyle = {
  width: '100%',
  maxWidth: '760px',
  padding: '3rem 2rem',
}

const sectionHeading = {
  margin: '0 0 1.5rem',
  fontSize: '1.3rem',
  color: '#222',
  fontWeight: '600',
}

const cardStyle = {
  backgroundColor: 'rgba(255,255,255,0.6)',
  borderRadius: '12px',
  padding: '1.2rem',
  display: 'flex',
  flexDirection: 'column',
  boxShadow: '0 2px 12px rgba(0,0,0,0.07)',
}

const linkStyle = {
  fontSize: '0.85rem',
  color: '#c0607a',
  textDecoration: 'none',
  fontWeight: '500',
}

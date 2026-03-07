export default function Home() {
  return (
    <div style={{
      flex: 1,
      background: 'linear-gradient(135deg, #ffffff 0%, #F4A7B9 100%)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '2rem',
    }}>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '1.5rem',
        maxWidth: '480px',
        textAlign: 'center',
      }}>
        <div style={{
          width: '150px',
          height: '150px',
          borderRadius: '50%',
          overflow: 'hidden',
          border: '4px solid #fff',
          boxShadow: '0 4px 20px rgba(0,0,0,0.12)',
          backgroundColor: '#f0f0f0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#aaa',
          fontSize: '0.85rem',
        }}>
          <img 
            src="/images/profile_pic.png" 
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
        <div>
          <h1 style={{ margin: '0 0 0.5rem', fontSize: '2rem', color: '#222', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem' }}>
            Louisa
            <img src="/images/sunflower.png" alt="sunflower" style={{ width: '2rem', height: '2rem' }} />
          </h1>
          <p style={{ margin: 0, fontSize: '1rem', color: '#555', lineHeight: '1.6' }}>
            This is my space to build, experiment, and share what I discover along the way. 
          </p>
        </div>
      </div>
    </div>
  )
}

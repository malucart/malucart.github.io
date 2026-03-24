const posts = [
  /*{
   category: 'DSA Concepts',
    items: [
      { title: 'Arrays & Sliding Window', description: 'Notes on array traversal techniques and the sliding window pattern.', link: '#' },
      { title: 'Linked Lists', description: 'How linked lists work, common operations, and when to use them.', link: '#' },
      { title: 'Binary Search', description: 'Breaking down binary search and its variations.', link: '#' },
      { title: 'Recursion & Backtracking', description: 'Understanding the call stack and how backtracking explores solutions.', link: '#' },
    ], 
  },*/
  { 
    category: 'CTF Writeup',
    items: [
      { title: 'smlt', description: 'One of my beginner friendly CTF writeups.', link: '/smlt/hsctf_a_byte.html' },
    ],
  },
]

export default function Blog({ dark }) {
  return (
    <>
    <div className="blog-page">
      <div style={{ width: '100%', maxWidth: '680px', flex: 1 }}>
        <h1 style={{ fontSize: '1.8rem', color: '#222', marginBottom: '0.3rem' }}>Blog</h1>
        <p style={{ color: '#888', fontSize: '0.95rem', marginBottom: '3rem' }}>
          Notes and writeups, for easy lookup.
        </p>

        {posts.map((section) => (
          <div key={section.category} style={{ marginBottom: '3rem' }}>
            <h2 style={{
              fontSize: '1rem',
              fontWeight: '600',
              color: '#c0607a',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              marginBottom: '1rem',
              borderBottom: '1px solid #f0d0d8',
              paddingBottom: '0.5rem',
            }}>
              {section.category}
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {section.items.map((post) => (
                <a
                  key={post.title}
                  href={post.link}
                  style={{
                    textDecoration: 'none',
                    padding: '1rem 1.2rem',
                    borderRadius: '10px',
                    backgroundColor: 'rgba(255,255,255,0.7)',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
                    display: 'block',
                    transition: 'box-shadow 0.2s',
                  }}
                  onMouseEnter={e => e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.1)'}
                  onMouseLeave={e => e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.06)'}
                >
                  <div style={{ fontWeight: '500', color: '#222', marginBottom: '0.25rem' }}>{post.title}</div>
                  <div style={{ fontSize: '0.875rem', color: '#777' }}>{post.description}</div>
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>

    <footer style={{
      width: '100%',
      padding: '0.8rem',
      textAlign: 'center',
      borderTop: dark ? '1px solid #30363d' : '1px solid rgba(0,0,0,0.08)',
      marginTop: 'auto',
      background: dark ? '#0d1117' : 'linear-gradient(135deg, #ffffff 0%, #F4A7B9 100%)',
    }}>
      <p style={{ margin: 0, fontSize: '0.75rem', color: dark ? '#a0d4a0' : '#888' }}>
        louisa's
      </p>
    </footer>
    </>
  )
}

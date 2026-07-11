import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Blog from './pages/Blog'
// import About from './pages/About'
import Projects from './pages/Projects'
import Header from './components/Header'

function App() {
  const [rainbow, setRainbow] = useState(false)
  const [dark, setDark] = useState(false)

  const bg = dark
    ? '#0d1117'
    : 'linear-gradient(135deg, #ffffff 0%, #F4A7B9 100%)'

  return (
    <BrowserRouter>
      {rainbow && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: '8px',
          background: 'linear-gradient(to right, #ffb3b3, #ffd9b3, #fffdb3, #b3f0b3, #b3d9ff, #d9b3ff)',
          zIndex: 1000,
        }} />
      )}
      <div style={{ minHeight: '100vh', background: bg, display: 'flex', flexDirection: 'column', paddingTop: rainbow ? '6px' : '0' }}>
        <Header
          rainbow={rainbow}
          onToggleRainbow={() => setRainbow(r => !r)}
          dark={dark}
          onToggleDark={() => setDark(d => !d)}
        />
        <Routes>
          <Route path="/" element={<Home dark={dark} />} />
          {/* <Route path="/blog" element={<Blog dark={dark} />} /> */} 
          {/* <Route path="/about" element={<About dark={dark} />} /> */}
          <Route path="/projects" element={<Projects dark={dark} />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App

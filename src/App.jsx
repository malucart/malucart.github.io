import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Blog from './pages/Blog'
import About from './pages/About'
import Header from './components/Header'

function App() {
  return (
    <BrowserRouter>
      <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #ffffff 0%, #F4A7B9 100%)', display: 'flex', flexDirection: 'column' }}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App

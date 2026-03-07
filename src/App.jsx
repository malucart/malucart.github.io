import Home from './pages/Home'
import Header from './components/Header'

function App() {
  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #ffffff 0%, #F4A7B9 100%)', display: 'flex', flexDirection: 'column' }}>
      <Header />
      <Home />
    </div>
  )
}

export default App

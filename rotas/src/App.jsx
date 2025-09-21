import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Contato from './pages/Contato'
import Home from './pages/Home'
import Sobre from './pages/Sobre'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/sobre">Sobre</Link></li>
          <li><Link to="/contato">Contato</Link></li>
        </ul>
      </nav>
    </Router>
  )
}

export default App
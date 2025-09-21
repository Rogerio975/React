import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css'; // Importe o arquivo CSS
import Contato from './pages/Contato';
import Home from './pages/Home';
import Sobre from './pages/Sobre';

function App() {
  return (
    <Router>
      <div className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
        <nav>
          <ul>
            <Link to="/">Home</Link>
            <Link to="/sobre">Sobre</Link>
            <Link to="/contato">Contato</Link>
          </ul>
        </nav>
      </div>
    </Router>
  );
}

export default App;
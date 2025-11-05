// App.jsx
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <header className="header">
        <h1 className="title">Página Inicial</h1>
        <nav className="nav">
          <Link to="/">Home</Link>
          <Link to="/sobre">Sobre</Link>
          <Link to="/contato">Contato</Link>
        </nav>
      </header>

      <main className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
      </main>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <h2>Bem-vindo à Home!</h2>
      <p>Esta é a página principal do site.</p>
    </div>
  );
}

function Sobre() {
  return <h2>Sobre nós</h2>;
}

function Contato() {
  return <h2>Entre em contato</h2>;
}

export default App;
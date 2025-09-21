import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Alimentos from "./pages/Alimentos";
import Eletronicos from "./pages/Eletronicos";
import Produtos from "./pages/Produtos";
import Roupas from "./pages/Roupas";

function App() {
  return (
    <Router>
      <div>
        <h1>Loja Virtual</h1>
        <nav>
          <Link to="/">Eletrônicos</Link> |{' '}
          <Link to="/produtos">Roupas</Link> |{' '}
          <Link to="/sobre">Alimentos</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Eletronicos />} />
          <Route path="/produtos" element={<Produtos />}>
            <Route path="roupas" element={<Roupas />} />
            <Route path="alimentos" element={<Alimentos />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
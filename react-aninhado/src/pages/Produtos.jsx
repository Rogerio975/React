import { Link, Outlet } from 'react-router-dom';

function Produtos() {
  return (
    <div>
      <h1>Produtos</h1>
      <nav>
        <Link to="/">Eletrônicos</Link> |{' '}
        <Link to="/produtos">Roupas</Link> |{' '}
        <Link to="/sobre">Alimentos</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default Produtos;
import { NavLink, Outlet } from "react-router-dom";
import { useAuth } from "../auth";

export default function Layout() {
  const { user, logout } = useAuth();

  return (
    <div className="app">
      <header className="topbar">
        <span className="brand">Meu App</span>
        <nav className="nav">
          <NavLink to="/" end>
            Home
          </NavLink>
          <NavLink to="/usuarios">Usuários</NavLink>
          <NavLink to="/dashboard">Dashboard</NavLink>
        </nav>
        <div className="session">
          {user ? (
            <>
              <span className="muted">{user}</span>
              <button className="btn btn-ghost" onClick={logout}>
                Sair
              </button>
            </>
          ) : (
            <NavLink to="/login" className="btn">
              Entrar
            </NavLink>
          )}
        </div>
      </header>
      <main className="content">
        <Outlet />
      </main>
    </div>
  );
}

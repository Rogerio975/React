import { Link } from "react-router-dom";
import { users } from "../data";

export default function Users() {
  return (
    <section className="card">
      <div className="heading-row">
        <h1>Usuários</h1>
        <Link to="/usuarios/novo" className="btn">
          Adicionar usuário
        </Link>
      </div>
      <ul className="list">
        {users.map((u) => (
          <li key={u.id}>
            <Link to={`/usuarios/${u.id}`}>{u.name}</Link>
            <span className="muted"> — {u.role}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

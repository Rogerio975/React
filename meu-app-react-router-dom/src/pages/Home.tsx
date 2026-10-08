import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="card">
      <h1>Página inicial</h1>
      <p className="muted">
        Exemplo de React Router DOM com layout aninhado, rotas dinâmicas, loader,
        rota protegida e página 404.
      </p>
      <p>
        <Link to="/usuarios">Ver usuários</Link> ·{" "}
        <Link to="/dashboard">Abrir dashboard (protegido)</Link>
      </p>
    </section>
  );
}

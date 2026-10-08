import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="card">
      <h1>404 — Página não encontrada</h1>
      <p className="muted">O endereço acessado não existe.</p>
      <Link to="/">Voltar para a home</Link>
    </section>
  );
}

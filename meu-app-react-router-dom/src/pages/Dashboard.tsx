import { useAuth } from "../auth";

export default function Dashboard() {
  const { user } = useAuth();
  return (
    <section className="card">
      <h1>Dashboard</h1>
      <p>
        Bem-vindo, <strong>{user}</strong>. Esta página só é acessível autenticado.
      </p>
    </section>
  );
}

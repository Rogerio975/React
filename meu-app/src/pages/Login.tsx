import { FormEvent, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../auth";

type LocationState = { from?: { pathname: string } } | null;

export default function Login() {
  const [name, setName] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = (location.state as LocationState)?.from?.pathname ?? "/dashboard";

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const trimmed = name.trim();
    if (!trimmed) return;
    login(trimmed);
    navigate(from, { replace: true });
  }

  return (
    <section className="card narrow">
      <h1>Login</h1>
      <form onSubmit={handleSubmit} className="form">
        <label htmlFor="name">Nome</label>
        <input
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Seu nome"
          autoFocus
        />
        <button type="submit" className="btn">
          Entrar
        </button>
      </form>
    </section>
  );
}

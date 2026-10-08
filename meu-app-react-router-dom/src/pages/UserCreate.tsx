import { FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUser } from "../data";

export default function UserCreate() {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const newUser = {
      name: name.trim(),
      role: role.trim(),
      email: email.trim(),
    };

    if (!newUser.name || !newUser.role || !newUser.email) {
      setError("Preencha todos os campos.");
      return;
    }

    createUser(newUser);
    navigate("/usuarios");
  }

  return (
    <section className="card narrow">
      <h1>Adicionar usuário</h1>
      <form onSubmit={handleSubmit} className="form">
        <label htmlFor="name">Nome</label>
        <input
          id="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
          autoFocus
        />

        <label htmlFor="role">Cargo</label>
        <input
          id="role"
          value={role}
          onChange={(event) => setRole(event.target.value)}
          required
        />

        <label htmlFor="email">E-mail</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />

        {error && <p role="alert">{error}</p>}
        <button type="submit" className="btn">
          Salvar usuário
        </button>
        <Link to="/usuarios" className="btn btn-ghost">
          Cancelar
        </Link>
      </form>
    </section>
  );
}

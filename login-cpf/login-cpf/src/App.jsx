import { useState } from "react";
import { maskCpf, isValidCpf, onlyDigits } from "./cpf.js";

const today = new Date().toISOString().slice(0, 10);

function validate({ nome, cpf, nascimento }) {
  const errors = {};
  if (nome.trim().split(/\s+/).length < 2) errors.nome = "Informe nome e sobrenome.";
  if (!isValidCpf(cpf)) errors.cpf = "CPF inválido. Confira os 11 dígitos.";
  if (!nascimento) errors.nascimento = "Informe a data de nascimento.";
  else if (nascimento > today) errors.nascimento = "A data não pode estar no futuro.";
  else if (nascimento < "1900-01-01") errors.nascimento = "Data de nascimento inválida.";
  return errors;
}

export default function App() {
  const [form, setForm] = useState({ nome: "", cpf: "", nascimento: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ type: "idle", message: "" });

  const set = (field) => (e) => {
    const value = field === "cpf" ? maskCpf(e.target.value) : e.target.value;
    setForm((f) => ({ ...f, [field]: value }));
    if (errors[field]) setErrors((er) => ({ ...er, [field]: undefined }));
  };

  async function handleSubmit(e) {
    e.preventDefault();
    const found = validate(form);
    setErrors(found);
    if (Object.keys(found).length) return;

    setStatus({ type: "loading", message: "" });
    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nome: form.nome.trim(),
          cpf: onlyDigits(form.cpf),
          nascimento: form.nascimento,
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || "Não foi possível concluir o acesso.");
      setStatus({ type: "success", message: data.message });
    } catch (err) {
      setStatus({ type: "error", message: err.message });
    }
  }

  const loading = status.type === "loading";

  return (
    <main className="shell">
      <section className="panel" aria-labelledby="titulo">
        <header>
          <h1 id="titulo">Acessar o sistema</h1>
          <p className="lead">Confirme seus dados para continuar.</p>
        </header>

        <form onSubmit={handleSubmit} noValidate>
          <Field id="nome" label="Nome completo" error={errors.nome}>
            <input id="nome" autoComplete="name" value={form.nome} onChange={set("nome")}
              aria-invalid={!!errors.nome} aria-describedby={errors.nome ? "nome-erro" : undefined} />
          </Field>

          <Field id="cpf" label="CPF" error={errors.cpf}>
            <input id="cpf" inputMode="numeric" placeholder="000.000.000-00" value={form.cpf}
              onChange={set("cpf")} aria-invalid={!!errors.cpf}
              aria-describedby={errors.cpf ? "cpf-erro" : undefined} />
          </Field>

          <Field id="nascimento" label="Data de nascimento" error={errors.nascimento}>
            <input id="nascimento" type="date" min="1900-01-01" max={today} value={form.nascimento}
              onChange={set("nascimento")} aria-invalid={!!errors.nascimento}
              aria-describedby={errors.nascimento ? "nascimento-erro" : undefined} />
          </Field>

          <button type="submit" disabled={loading}>{loading ? "Entrando…" : "Entrar"}</button>

          <p className={`feedback ${status.type}`} role="status" aria-live="polite">
            {status.message}
          </p>
        </form>
      </section>
    </main>
  );
}

function Field({ id, label, error, children }) {
  return (
    <div className="field">
      <label htmlFor={id}>{label}</label>
      {children}
      {error && <span id={`${id}-erro`} className="error">{error}</span>}
    </div>
  );
}

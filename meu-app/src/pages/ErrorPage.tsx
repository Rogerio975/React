import { isRouteErrorResponse, Link, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();

  let title = "Algo deu errado";
  let message = "Ocorreu um erro inesperado.";

  if (isRouteErrorResponse(error)) {
    title = `Erro ${error.status}`;
    message = typeof error.data === "string" ? error.data : error.statusText;
  } else if (error instanceof Error) {
    message = error.message;
  }

  return (
    <section className="card">
      <h1>{title}</h1>
      <p className="muted">{message}</p>
      <Link to="/">Voltar para a home</Link>
    </section>
  );
}

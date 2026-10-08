import { LoaderFunctionArgs, useLoaderData, useNavigate } from "react-router-dom";
import { fetchUser, User } from "../data";

export async function userLoader({ params }: LoaderFunctionArgs): Promise<User> {
  const user = await fetchUser(Number(params.id));
  if (!user) {
    throw new Response("Usuário não encontrado", { status: 404 });
  }
  return user;
}

export default function UserDetail() {
  const user = useLoaderData() as User;
  const navigate = useNavigate();

  return (
    <section className="card">
      <h1>{user.name}</h1>
      <p className="muted">ID #{user.id}</p>
      <dl className="details">
        <dt>Cargo</dt>
        <dd>{user.role}</dd>
        <dt>E-mail</dt>
        <dd>{user.email}</dd>
      </dl>
      <button className="btn btn-ghost" onClick={() => navigate(-1)}>
        Voltar
      </button>
    </section>
  );
}

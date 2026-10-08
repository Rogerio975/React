export type User = {
  id: number;
  name: string;
  role: string;
  email: string;
};

export const users: User[] = [
  { id: 1, name: "Ana Souza", role: "Analista de Sistemas", email: "ana.souza@exemplo.com" },
  { id: 2, name: "Carlos Lima", role: "Administrador de Redes", email: "carlos.lima@exemplo.com" },
  { id: 3, name: "Marina Alves", role: "Desenvolvedora", email: "marina.alves@exemplo.com" },
];

export function createUser(user: Omit<User, "id">): User {
  const newUser = {
    ...user,
    id: Math.max(0, ...users.map(({ id }) => id)) + 1,
  };
  users.push(newUser);
  return newUser;
}

// Simula uma chamada de API
export function fetchUser(id: number): Promise<User | undefined> {
  return new Promise((resolve) =>
    setTimeout(() => resolve(users.find((u) => u.id === id)), 150)
  );
}

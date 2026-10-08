# Meu App

Exemplo de **React + TypeScript + Vite** com **React Router DOM v6**.

## Recursos demonstrados

- `createBrowserRouter` + `RouterProvider`
- Layout aninhado com `Outlet` e `NavLink`
- Rota dinâmica (`/usuarios/:id`) com `loader` e `useLoaderData`
- Rota protegida (`/dashboard`) com redirecionamento para `/login` e retorno à página de origem
- Navegação programática (`useNavigate`)
- Páginas de erro (`errorElement`) e 404 (`path: "*"`)

## Como rodar

```bash
npm install
npm run dev
```

Acesse http://localhost:5173

## Build de produção

```bash
npm run build
npm run preview
```

## Estrutura

```
src/
├── main.tsx
├── router.tsx
├── auth.tsx
├── ProtectedRoute.tsx
├── data.ts
├── index.css
└── pages/
    ├── Layout.tsx
    ├── Home.tsx
    ├── Users.tsx
    ├── UserDetail.tsx
    ├── Login.tsx
    ├── Dashboard.tsx
    ├── NotFound.tsx
    └── ErrorPage.tsx
```

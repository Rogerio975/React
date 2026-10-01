# Login por Nome, CPF e Data de Nascimento (React + Node + MySQL)

## 1. Banco de dados
    mysql -u root -p < server/schema.sql
Crie o usuário `login_app` (comentado no final do schema.sql).

## 2. API
    cd server
    cp .env.example .env     # ajuste as credenciais
    npm install
    npm run dev              # http://localhost:3001

## 3. Front-end
    npm install
    npm run dev              # http://localhost:5173 (proxy /api -> 3001)

## Produção
`npm run build` gera `dist/`. Sirva com Nginx/IIS e encaminhe `/api` para a API, sob HTTPS.

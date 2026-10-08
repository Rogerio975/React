## Objetivo rápido

Este repositório é uma aplicação SPA React construída com Vite. O ponto de entrada da aplicação está em `src/main.jsx` e as views principais ficam em `src/pages/`. O arquivo `src/App.jsx` monta as rotas usando `react-router-dom` (v7) e contém a navegação principal.

### Comandos principais (descobertos em `package.json`)

- Instalar dependências: use o gerenciador de pacotes que preferir (ex.: npm, pnpm, yarn).
- Desenvolvimento (HMR via Vite): `npm run dev`
- Build para produção: `npm run build`
- Servir build localmente (preview): `npm run preview`
- Linter: `npm run lint` (usa o `eslint .` configurado em `eslint.config.js`)

Execute comandos no PowerShell (Windows) ou em terminais POSIX; os scripts usam Vite padrão (porta 5173 por omissão).

## Arquitetura e fluxo (pontos que um agente deve conhecer)

- Estrutura simples de SPA: `src/main.jsx` monta a aplicação React; `src/App.jsx` define rotas e navegação.
- Páginas estão em `src/pages/` (ex.: `Home.jsx`, `Sobre.jsx`, `Contato.jsx`, `Produtos.jsx`). Cada arquivo exporta um componente funcional padrão usado como `element` em `Route`.
- Roteamento: usa `react-router-dom` versão 7 — padrão atual é `<Routes>` + `<Route path="..." element={<Componente/>} />` (veja `src/App.jsx`). Links de navegação usam `<Link to="/..." />`.
- Assets: imagens e ícones ficam em `src/assets/`; arquivos estáticos simples podem estar em `public/` (ex.: `public/vite.svg`).

## Padrões e convenções do projeto

- Arquivos JSX usam extensão `.jsx` e export default para componentes de página.
- Estilos: `src/index.css` e `src/App.css` são importados globalmente (ver `src/App.jsx` e `src/main.jsx`). Prefira importação de CSS no topo do componente de nível superior quando for global.
- Não há API backend configurada no repositório — alterações que adicionem integrações externas devem documentar variáveis de ambiente e rotas.

## Como estender o projeto (exemplos concretos)

- Para adicionar uma nova página "Contato2":
  1. Criar `src/pages/Contato2.jsx` e exportar um componente funcional padrão.
  2. Importar e registrar em `src/App.jsx` adicionando: `<Route path="/contato2" element={<Contato2 />} />` e adicionar um `<Link to="/contato2">Contato2</Link>` no `<nav>`.

- Para alterar build/vite: editar `vite.config.js` na raiz. Para regras de lint, editar `eslint.config.js`.

## Arquivos-chave para inspecionar rapidamente

- `package.json` — scripts e dependências (Vite, React, react-router-dom)
- `vite.config.js` — configurações específicas do bundler/transform
- `eslint.config.js` — regras de lint aplicadas pelo script `lint`
- `src/main.jsx` — montagem da árvore React
- `src/App.jsx` — rotas e navegação (ponto de partida para mudanças de UX/rota)
- `src/pages/*.jsx` — implementações das páginas
- `public/` e `src/assets/` — arquivos estáticos e imagens

## Restrições e observações detectadas

- Projeto usa React 19 e react-router-dom 7 (APIs compatíveis com essa versão). Evitar sugerir sintaxe de versões muito antigas ou pré-6 sem checar.
- Não há testes automatizados no repositório; não presuma um framework de testes existente.
- ESLint está presente; mudanças de estilo de código devem manter a configuração atual para evitar que `npm run lint` quebre.

## Se você (agente) for fazer alterações de código

- Modifique somente os arquivos sob `src/` a menos que esteja claramente ajustando build/lint (nesse caso atualize `package.json`, `vite.config.js` ou `eslint.config.js`).
- Ao adicionar rotas, atualize `src/App.jsx` e a navegação no mesmo arquivo para manter a UI consistente.
- Para mudanças de dependência, atualize `package.json` e documente por que a dependência é necessária.

---

Se algo aqui estiver incompleto ou você quiser que eu inclua exemplos adicionais (como o conteúdo exato de `src/main.jsx` ou um checklist para PRs), diga o que falta e eu atualizo este arquivo.

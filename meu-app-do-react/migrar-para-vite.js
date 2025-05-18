const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

function log(msg) {
  console.log('[+] ' + msg);
}

function removeCraScripts(packageJson) {
  const scripts = packageJson.scripts || {};
  scripts.dev = 'vite';
  scripts.build = 'vite build';
  scripts.preview = 'vite preview';

  delete scripts.start;
  delete scripts.test;
  delete scripts.eject;

  packageJson.scripts = scripts;
  return packageJson;
}

function removeCraDeps(packageJson) {
  delete packageJson.dependencies['react-scripts'];
  delete packageJson.devDependencies?.['react-scripts'];
  return packageJson;
}

function writeViteConfig() {
  const viteConfig = `
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
});
`.trim();

  fs.writeFileSync('vite.config.js', viteConfig);
  log('Arquivo vite.config.js criado.');
}

function writeIndexHtml() {
  const indexHtml = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>React com Vite</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
`.trim();

  fs.writeFileSync('index.html', indexHtml);
  log('Arquivo index.html criado.');
}

function writeMainJsx() {
  const mainPath = path.join('src', 'main.jsx');
  if (!fs.existsSync(mainPath)) {
    const mainJsx = `
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
`.trim();
    fs.writeFileSync(mainPath, mainJsx);
    log('Arquivo src/main.jsx criado.');
  }
}

function main() {
  if (!fs.existsSync('package.json')) {
    console.error('Este diretório não contém um package.json!');
    return;
  }

  let packageJson = JSON.parse(fs.readFileSync('package.json'));

  log('Removendo dependências do CRA...');
  packageJson = removeCraScripts(packageJson);
  packageJson = removeCraDeps(packageJson);

  fs.writeFileSync('package.json', JSON.stringify(packageJson, null, 2));

  log('Instalando dependências do Vite...');
  execSync('npm install --save-dev vite @vitejs/plugin-react', { stdio: 'inherit' });

  log('Garantindo dependências principais...');
  execSync('npm install react react-dom', { stdio: 'inherit' });

  writeViteConfig();
  writeIndexHtml();
  writeMainJsx();

  log('Migração concluída. Use `npm run dev` para iniciar com Vite.');
}

main();
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Meu Blog</h1>
      <h2>Seja bem-vindo ao meu blog!</h2>
      <h3>Espero que você goste dos meus posts.</h3>
      
      <SecondContainer />
      <ThirdContainer />
    </div>
  );
}

function SecondContainer() {
  return (
    <div className="SecondContainer">
      <h2>Segundo Contêiner</h2>
      <p>Este é o conteúdo do segundo contêiner.</p>
    </div>
  );
}

function ThirdContainer() {
  return (
    <div className="ThirdContainer">
      <h2>Terceiro Contêiner</h2>
      <p>Este é o conteúdo do terceiro contêiner.</p>
    </div>
  );
}

export default App;

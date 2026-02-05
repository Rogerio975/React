import './App.css';
import Saudacao from './components/Saudacao'; // Importando o arquivo

function App() {
  return (
    <div>
      <Saudacao nome="Alice" />
      <Saudacao nome="Bruno" />
      <Saudacao nome="Júlia" />
    </div>
  );
}

export default App;
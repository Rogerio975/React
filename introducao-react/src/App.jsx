import './App.css';
import logo from './assets/react.svg';
import Header from './Header';
 
function App() {
  return (
    <div className="App">
      <Header title="Header Param" />
      <Header title="Header Param2" />
      <img src={logo} className="App-logo" alt="logo" />
    </div>
  );
}

export default App;
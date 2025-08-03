import './App.css';
import logo from './assets/react.svg';
import Header from './Header';
 
function App() {
  return (
    <div className="App">
      <Header />
      <img src={logo} className="App-logo" alt="logo" />
    </div>
  );
}

export default App;
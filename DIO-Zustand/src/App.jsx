import useCountStore from "./store/useCountStore";
import Counter from "./components/Counter";
import "./App.css";

function App() {
const increment = useCountStore((state) => state.increment);
const decrement = useCountStore((state) => state.decrement);

return (
  <div className="card">
    <button onClick={decrement}>Decrement</button>
    <Counter />
    <button onClick={increment}>Increment</button>
  </div>
);
}

export default App;
import { useDispatch, useSelector } from 'react-redux';
import { decrementar, incrementar } from './features/contadorSlice';

function App() {
  const valor = useSelector((state: { contador: { valor: number } }) => state.contador.valor);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Contador: {valor} vez(es).</h1>
      <button onClick={() => dispatch(incrementar())}>+</button>
      <button onClick={() => dispatch(decrementar())}>-</button>
    </div>
  );
}

export default App;
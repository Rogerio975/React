
import { useState } from 'react';

import logo from '../assets/react.svg';
import Header from '../Header.jsx';

function Home() {
    const [contador, setContador] = useState(0);
    
    function increment() {
        setContador(contador + 1);
        console.log(contador);
    }
    
    return (
        <div className="App">
        <Header title="Home Page" />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
            <input type="button" value="Clique" onClick={increment} />
        </p>
        <p>{contador}</p> cliques!
        </div>
    );
    }

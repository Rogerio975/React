import React from 'react';
import './App.css';

function BemVindo({ nome }) { 
  return <h1>Bem-vindo, {nome}!</h1>; 
} 

function App() { 
  return <BemVindo nome="Rogério" />; 
} 

export default App;

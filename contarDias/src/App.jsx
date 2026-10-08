import { useState } from 'react';

function App() {
  const [inicio, setInicio] = useState('');
  const [fim, setFim] = useState('');
  const [resultado, setResultado] = useState(null);

  const calcular = () => {
    if (!inicio || !fim) {
      alert('Preencha ambas as datas');
      return;
    }

    const dataInicio = new Date(inicio);
    const dataFim = new Date(fim);

    // Dias corridos
    const diffTempo = dataFim - dataInicio;
    const diasCorridos = Math.ceil(diffTempo / (1000 * 60 * 60 * 24));

    // Dias úteis (simplificado - conta apenas dias de semana)
    let diasUteis = 0;
    let dataAtual = new Date(dataInicio);

    while (dataAtual <= dataFim) {
      const diaSemana = dataAtual.getDay();
      if (diaSemana !== 0 && diaSemana !== 6) { // 0 = domingo, 6 = sábado
        diasUteis++;
      }
      dataAtual.setDate(dataAtual.getDate() + 1);
    }

    setResultado({ diasCorridos, diasUteis });
  };

  return (
    <div style={{ padding: 20, backgroundColor: '#F0E68C', minHeight: '100vh' }}>
      <h2>Cálculo de Dias</h2>

      <input
        type="date"
        value={inicio}
        onChange={(e) => setInicio(e.target.value)}
      />

      <input
        type="date"
        value={fim}
        onChange={(e) => setFim(e.target.value)}
      />

      <br /><br />

      <button onClick={calcular}>Calcular</button>

      {resultado && (
        <div>
          <p>Dias corridos: {resultado.diasCorridos}</p>
          <p>Dias úteis: {resultado.diasUteis}</p>
        </div>
      )}
    </div>
  );
}

export default App;
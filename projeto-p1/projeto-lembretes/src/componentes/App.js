import React, { useState } from 'react'
import LembreteEntrada from './LembreteEntrada'
import LembreteLista from './LembreteLista'

function App() {

  // Hook useState incia um vetor de lembretes vazio.
  const [lembretes, setLembretes] = useState([]);

  // Adicionar um novo lembrete. 
  const adicionarLembrete = (novoLembrete) => {
    setLembretes((prevLembretes) => [...prevLembretes, novoLembrete]);
  };

  return (
    <div className="container d-flex justify-content-center">
      <div className="row">
        <div className="col text-center">
          <LembreteLista lembretes={lembretes} />
          <LembreteEntrada adicionarLembrete={adicionarLembrete} />
        </div>
      </div>
    </div>
  )
}

export default App
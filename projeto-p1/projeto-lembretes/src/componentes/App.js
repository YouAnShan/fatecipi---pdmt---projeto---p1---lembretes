import React from 'react'
import LembreteEntrada from './LembreteEntrada'
import LembreteLista from './LembreteLista'

function App() {
  return (
    <div className="container d-flex justify-content-center">
      <div className="row">
        <div className="col text-center">
          <LembreteLista />
          <LembreteEntrada/>
        </div>
      </div>
    </div>
  )
}

export default App
import React from 'react'
import "./LembreteLista.css"


const LembreteLista = ({lembretes}) => {

  return (
  <div className="background">
     {lembretes.map((lembrete, index) => (
        <div className="lembrete" key={index}>
          <p className='text' >{lembrete}</p>
        </div>
     ))}
  </div>
  )
}

export default LembreteLista
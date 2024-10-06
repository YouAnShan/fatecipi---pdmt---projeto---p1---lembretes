import React, { useState } from 'react'
import "./LembreteEntrada.css"

const LembreteEntrada = ({adicionarLembrete}) => {

  // Hook useState
  const [lembrete, setLembrete] = useState("");

  // quando o usuário digita um lembrete, o valor do texto é salvo na função setLembrete que muda a variável de estado Lembrete.
  const handleLembrete = (event) => {
    setLembrete(event.target.value);
  };

  // quando o formulário é submetido, a página não é recarregada e o lembrete criado é exibido na lista. 
  const handleSubmit = (event) => {
    
    event.preventDefault();

    // aqui ficará a lógica para enviar o lembrete para uma lista de lembrentes. 
    adicionarLembrete(lembrete);

    // limpando o formulário após o envio
    setLembrete("");

  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input className='input' type="text" name="lembrete" placeholder="Digite seu novo lembrete" value={lembrete} onChange={handleLembrete} />
        <input className='button' type="submit" value="OK" />
      </form>
    </div>
  )
}

export default LembreteEntrada
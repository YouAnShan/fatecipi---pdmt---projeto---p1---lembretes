import React, { useState } from 'react'

const LembreteEntrada = () => {

  // Hook useState
  const [lembrete, setLembrete] = useState("");

  // quando o usuário digita um lembrete, o valor do texto é salvo na função setLembrete que muda a variável de estado Lembrete.
  const handleLembrete = (event) => {
    setLembrete(event.target.value);
  };

  // quando o formulário é submetido, a página não é recarregada e o lembrete criado é exibido no console. 
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(lembrete);

    // limpando o formulário após o envio
    setLembrete("");

    // aqui ficará a lógica para enviar o lembrete para uma lista de lembrentes. 
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="lembrete" placeholder="Digite seu novo lembrete" value={lembrete} onChange={handleLembrete} />
        <input type="submit" value="OK" />
      </form>
    </div>
  )
}

export default LembreteEntrada
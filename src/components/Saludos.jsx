import { useState } from 'preact/hooks';

export default function Saludos({mensajes}) {

  const randomMessage = () => mensajes[(Math.floor(Math.random() * mensajes.length))];

  const [saludo, setSaludo] = useState(mensajes[0]);

  return (
    <div>
      <h3>{saludo}</h3>
      <h4> ¡Gracias por tu visita!</h4>
      <button onClick={() => setSaludo(randomMessage())}>
        Nuevo saludo
      </button>
    </div>
  );
}
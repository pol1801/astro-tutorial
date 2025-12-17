import { useState } from 'preact/hooks';
import '../styles/global.css';

export default function Saludos({mensajes}) {

  const randomMessage = () => mensajes[(Math.floor(Math.random() * mensajes.length))];

  const [saludo, setSaludo] = useState(mensajes[0]);

  return (
    <div className="saludo-container">
      <h3 className="saludo-titulo">{saludo}</h3>
      <h4 className="saludo-gracias"> ¡Gracias por tu visita!</h4>
      <button className="saludo-btn" onClick={() => setSaludo(randomMessage())}>
        Nuevo saludo
      </button>
    </div>
  );
}
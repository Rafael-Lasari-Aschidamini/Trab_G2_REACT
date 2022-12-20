import React, { useContext } from 'react';
import { ContadorContext } from '../contexts/ContadorContext';

export default function Cabecalho() {
  const { contador } = useContext(ContadorContext);

  return (
    <div className="cabecalho">
      <h1 style={{ color: '#66CDAA', fontSize: 80 }}>STAR WARS</h1>
      <span className="contador">Contador: {contador}</span>
    </div>
  );
}

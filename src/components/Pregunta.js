import React, { useState } from "react";

const Pregunta = () => {
  // definir el state
  // se inicia en cero el presupuesto
  const [cantidad, guardarCantidad] = useState(0);

  // funcion que lee el presupuesto
  // e para acceder a losd valores .target .value
  const definirPresupuesto = (e) => {
    // con esto lo volvemos a entero y sale azul
    guardarCantidad(parseInt(e.target.value, 10));
  };

  return (
    <>
      <h2>Coloca tu presupuesto</h2>
      <form action="">
        <input
          type="number"
          className="u-full-width"
          placeholder="Coloca tu presupuesto"
          onChange={definirPresupuesto}
        />
        <input
          type="submit"
          className="button-primary u-full-width"
          value="Definir Presupuesto"
        />
      </form>
    </>
  );
};

export default Pregunta;

function Resultado({ puntos, setPantalla }) {
  return (
    <div className="container">
      <h1>🏁 Fin del juego</h1>

      <h2>Tu puntaje: {puntos} puntos</h2>

      <button onClick={() => setPantalla("juego")}>
        🔄 Reiniciar
      </button>

      <button onClick={() => setPantalla("inicio")}>
        ❌ Salir
      </button>
    </div>
  );
}

export default Resultado;
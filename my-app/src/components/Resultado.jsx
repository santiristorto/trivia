function Resultado({ puntos, setPantalla, setPuntos }) {
  return (
    <div className="container fade-screen">
      <h1>🏁 Fin del juego</h1>

      <h2>Tu puntaje: {puntos} puntos</h2>

      <button onClick={() => {
        setPuntos(0);
        setPantalla("juego");
      }}>
        🔄 Reiniciar
      </button>

      <button onClick={() => setPantalla("inicio")}>
        ❌ Salir
      </button>
    </div>
  );
}

export default Resultado;
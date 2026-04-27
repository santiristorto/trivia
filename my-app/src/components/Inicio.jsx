function Inicio({ setPantalla, setPuntos, categoria, setCategoria, dificultad, setDificultad }) {
  return (
    <div className="container">
      <h1>🎯 Jueguito piola para lab de computacion</h1>

      <label>Categoría</label>
      <select value={categoria} onChange={(e) => setCategoria(e.target.value)}>
        <option value="">🌍 Cualquiera</option>
        <option value="9">📚 General</option>
        <option value="21">⚽ Deportes</option>
        <option value="23">🏛 Historia</option>
        <option value="17">🔬 Ciencia</option>
      </select>

      <label>Dificultad</label>
      <select value={dificultad} onChange={(e) => setDificultad(e.target.value)}>
        <option value="">🎲 Cualquiera</option>
        <option value="easy">🟢 Fácil</option>
        <option value="medium">🟡 Media</option>
        <option value="hard">🔴 Difícil</option>
      </select>

      <button onClick={() => {
        setPuntos(0);
        setPantalla("juego");
      }}>
        🚀 Jugar
      </button>
    </div>
  );
}

export default Inicio;
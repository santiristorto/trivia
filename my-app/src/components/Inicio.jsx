function Inicio({ setPantalla, setPuntos, categoria, setCategoria, dificultad, setDificultad }) {
  return (
    <div className="container fade-screen">
      <h1>Trivia</h1>
      <div className="section">
  <label>Categoría</label>

  <div className="card-grid">
    <div
      className={`card ${categoria === "" ? "active" : ""}`}
      onClick={() => setCategoria("")}
    >
      Todas
    </div>

    <div
      className={`card ${categoria === "9" ? "active" : ""}`}
      onClick={() => setCategoria("9")}
    >
      General
    </div>

    <div
      className={`card ${categoria === "17" ? "active" : ""}`}
      onClick={() => setCategoria("17")}
    >
      Ciencia
    </div>

    <div
      className={`card ${categoria === "21" ? "active" : ""}`}
      onClick={() => setCategoria("21")}
    >
      Deportes
    </div>
  </div>
</div>
      <div className="section">
  <label>Dificultad</label>

  <div className="card-grid">
    <div
      className={`card ${dificultad === "" ? "active" : ""}`}
      onClick={() => setDificultad("")}
    >
      Libre
    </div>

    <div
      className={`card ${dificultad === "easy" ? "active" : ""}`}
      onClick={() => setDificultad("easy")}
    >
      Fácil
    </div>

    <div
      className={`card ${dificultad === "medium" ? "active" : ""}`}
      onClick={() => setDificultad("medium")}
    >
      Media
    </div>

    <div
      className={`card ${dificultad === "hard" ? "active" : ""}`}
      onClick={() => setDificultad("hard")}
    >
      Difícil
    </div>
  </div>
</div>

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
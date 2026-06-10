import { useState } from "react";

function Inicio({ setPantalla, setPuntos, categoria, setCategoria, dificultad, setDificultad }) {
  const categorias = [
    { valor: "", nombre: "Todas" },
    { valor: "9", nombre: "General" },
    { valor: "17", nombre: "Ciencia" },
    { valor: "21", nombre: "Deportes" },
  ];
  
  const dificultades = [
    { valor: "", nombre: "Libre" },
    { valor: "easy", nombre: "Fácil" },
    { valor: "medium", nombre: "Media" },
    { valor: "hard", nombre: "Difícil" },
  ];

  return (
    <div className="container fade-screen">
      <h1>Trivia</h1>
      
      <div className="section">
        <label>Categoría</label>
        <div className="card-grid">
          {categorias.map((cat) => (
            <div
              key={cat.valor}
              className={`card ${categoria === cat.valor ? "active" : ""}`}
              onClick={() => setCategoria(cat.valor)}
            >
              {cat.nombre}
            </div>
          ))}
        </div>
      </div>

      <div className="section">
        <label>Dificultad</label>
        <div className="card-grid">
          {dificultades.map((dif) => (
            <div
              key={dif.valor}
              className={`card ${dificultad === dif.valor ? "active" : ""}`}
              onClick={() => setDificultad(dif.valor)}
            >
              {dif.nombre}
            </div>
          ))}
        </div>
      </div>

      <button 
        className="jugar-btn"
        onClick={() => {
          setPuntos(0);
          setPantalla("juego");
        }}
      >
        🚀 Jugar
      </button>
    </div>
  );
}

export default Inicio;
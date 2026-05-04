import { useEffect, useState } from "react";

const categoriasNombres = {
  "9": "General",
  "17": "Ciencia",
  "21": "Deportes",
  "23": "Historia"
};

function Juego({ setPantalla, puntos, setPuntos, categoria, dificultad }) {
  const [preguntas, setPreguntas] = useState([]);
  const [indice, setIndice] = useState(0);
  const [seleccionada, setSeleccionada] = useState(null);
  const [mostrarRespuesta, setMostrarRespuesta] = useState(false);

useEffect(() => {
  const fetchData = async () => {
    try {
      let url = "https://opentdb.com/api.php?amount=5&type=multiple";

      if (categoria) {
        url += `&category=${categoria}`;
      }

      if (dificultad) {
        url += `&difficulty=${dificultad}`;
      }

      const res = await fetch(url);
      const data = await res.json();
      setPreguntas(data.results);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  fetchData();
}, []);

  //  mientras carga
  if (preguntas.length === 0) {
    return <h2>Cargando preguntas...</h2>;
  }

  const preguntaActual = preguntas[indice];
  const nombreCategoria = categoria === "" ? "Todas las categorías" : categoriasNombres[categoria];

  const nombreDificultad = 
  dificultad === "" ? "Libre" :
  dificultad === "easy" ? "Fácil" :
  dificultad === "medium" ? "Media" :
  "Difícil";
  // mezclar respuestas
  const respuestas = [
    ...preguntaActual.incorrect_answers,
    preguntaActual.correct_answer,
  ].sort(() => Math.random() - 0.5);

 const manejarRespuesta = (resp) => {
  if (mostrarRespuesta) return;

  setSeleccionada(resp);
  setMostrarRespuesta(true);

  if (resp === preguntaActual.correct_answer) {
    setPuntos(prev => prev + 10);
  }

  // 👇 SOLO si es la última
  if (indice === preguntas.length - 1) {
    setTimeout(() => {
      setPantalla("resultado");
    }, 1000);
  }
};
const siguiente = () => {
  setIndice(prev => prev + 1);
  setSeleccionada(null);
  setMostrarRespuesta(false);
};

return (
  <div className="container fade-screen" key={indice}>

    <div className="top-bar">
      <span>Pregunta {indice + 1} / {preguntas.length}</span>
      <span>{puntos} pts</span>
    </div>

    <div className="progress-bar">
      <div
        className="progress"
        style={{ width: `${((indice + 1) / preguntas.length) * 100}%` }}
      ></div>
    </div>

    <div className="question-card">
      <h2 dangerouslySetInnerHTML={{ __html: preguntaActual.question }} />
    </div>

    <div className="answers">
      {respuestas.map((resp, i) => {
        let clase = "answer-card";

        if (mostrarRespuesta) {
          if (resp === preguntaActual.correct_answer) {
            clase += " correcta";
          } else if (resp === seleccionada) {
            clase += " incorrecta";
          }
        }

        return (
          <div
            key={i}
            className={clase}
            onClick={() => manejarRespuesta(resp)}
            dangerouslySetInnerHTML={{ __html: resp }}
          />
        );
      })}
    </div>
      {mostrarRespuesta && indice < preguntas.length - 1 && (
      <button className="siguiente-btn" onClick={siguiente}>
        Siguiente
      </button>
    )}
      </div>
);
}

export default Juego;
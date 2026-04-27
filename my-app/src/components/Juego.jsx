import { useEffect, useState } from "react";

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

  if (indice === preguntas.length - 1) {
    setTimeout(() => {
      setPantalla("resultado");
    }, 1000); // delay para ver colores
  }
};
 const siguiente = () => {
  if (indice + 1 < preguntas.length) {
    setIndice(indice + 1);
    setSeleccionada(null);
    setMostrarRespuesta(false);
  } else {
    // AUTOMÁTICO
    setTimeout(() => {
      setPantalla("resultado");
    }, 1000); // pequeño delay para ver colores
  }
};

return (
  <div className="container">

    <p>
      <strong>Modo:</strong> {nombreCategoria} – {nombreDificultad}
    </p>

    <h2>Pregunta {indice + 1} / {preguntas.length}</h2>
      <p dangerouslySetInnerHTML={{ __html: preguntaActual.question }} />

{respuestas.map((resp, i) => {
  let clase = "neutra";

  if (mostrarRespuesta) {
    if (resp === preguntaActual.correct_answer) {
      clase = "correcta";
    } else if (resp === seleccionada) {
      clase = "incorrecta";
    }
  }

  return (
<button
  className={`respuesta ${clase}`}
  onClick={() => manejarRespuesta(resp)}
  dangerouslySetInnerHTML={{ __html: resp }}
/>
  );
})}

{mostrarRespuesta && indice < preguntas.length - 1 && (
  <button onClick={siguiente}>
    Siguiente
  </button>
)}
      <h3>Puntaje: {puntos}</h3>
    </div>
  );
}

export default Juego;
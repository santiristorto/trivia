import { useState } from "react";
import Inicio from "./components/Inicio";
import Juego from "./components/Juego";
import Resultado from "./components/Resultado";

function App() {
  const [pantalla, setPantalla] = useState("inicio");
  const [puntos, setPuntos] = useState(0);
  const [categoria, setCategoria] = useState("");
  const [dificultad, setDificultad] = useState("");

  return (
    <>
{pantalla === "inicio" && 
  <Inicio 
    setPantalla={setPantalla} 
    setPuntos={setPuntos}
    categoria={categoria}
    setCategoria={setCategoria}
    dificultad={dificultad}
    setDificultad={setDificultad}
  />
}

{pantalla === "juego" && (
  <Juego 
    setPantalla={setPantalla} 
    puntos={puntos} 
    setPuntos={setPuntos}
    categoria={categoria}
    dificultad={dificultad}
  />
)}
      {pantalla === "resultado" && (
        <Resultado puntos={puntos} setPantalla={setPantalla} />
      )}
    </>
  );
}

export default App;
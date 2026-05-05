# Instrucciones Trivia
Pasos para poder ejecutar nuestra trivia:

1) Requisitos previos: Necesitas tener instalado Node.js, (recomendadamente version 18 o superior) y npm con sus dependencias.

Para verificar si ya los tenés instalados abrí una terminal (cmd, PowerShell o bash) y ejecuta estos comandos:

node -v
npm -v

Si ves números de versión (por ejemplo v18...), ya los tenés instalados
Si no, segui estos pasos:

Para Instalar Node.js:
Ir a la página oficial: https://nodejs.org
Descargar la versión recomendada o mas nueva y ejecutar el instalador, despues seguir los pasos que te diga el instalador. (npm se instala automáticamente junto con Node.js pero luego debes instalar sus dependencias en un paso siguiente)

2) Clonar el repositorio en tu computadora en una terminal git bash con:
git clone https://github.com/santiristorto/trivia.git
3) Entrar a la carpeta del proyecto con estos comandos:
cd trivia
luego:
cd my-app
Y ya estarias dentro de la carpeta correcta.
4) Instalar las dependencias de npm:
npm install
5) Incializa la aplicacion con:
npm run dev
Una vez iniciado, abrí el link que aparece en la consola.
Generalmente es:
http://localhost:5173
6) Una vez dentro de la pagina, para jugar debes seleccionar la categoria clickeando encima de la que quieras elegir(Todas,General,Ciencia,Deportes) y tambien la dificultad(Libre,Facil,Media,Dificil), cuando hayas seleccionado eso simplemente toca jugar y comenzara la trivia.
7) Instrucciones del juego:
    -Son 5 preguntas, luego de contestar cada pregunta se te mostrara con verde la respuesta correcta, y si respondiste de manera incorrecta se remarcara con rojo tu respuesta y se te revelara la correcta con verde, toca siguiente para continuar a la siguiente pregunta.

    -Cada respuesta correcta te sumara 10 puntos, y al finalizar las 5 preguntas se te redirigira para mostrarte tus resultados y dos opciones:

    -Si seleccionas la opcion "Reiniciar" se reiniciara la trivia con las mismas configuraciones de tematica y dificultad, si seleccionas "Salir" volveras al menu principal donde podras seleccionar de vuelta las configuraciones de tu trivia.
8) Disfrutar :) 
#include <DigiUSB.h> // La librería oficial y nativa por excelencia

#define PINES_VERDES 0  // Controla los dos LEDs verdes (Fila 5)
#define PINES_ROJOS  1  // Controla los dos LEDs rojos (Fila 15)

void setup() {
  DigiUSB.begin(); // Inicializa el canal USB de datos nativo
  
  pinMode(PINES_VERDES, OUTPUT);
  pinMode(PINES_ROJOS, OUTPUT);

  apagarTodo();
}

void loop() {
  // Mantiene vivo el canal USB en cada vuelta
  DigiUSB.refresh();
  
  // Escuchamos si llega alguna letra desde React/Node.js
  if (DigiUSB.available() > 0) {
    char comando = DigiUSB.read(); // Lee la letra que viene del USB
    
    if (comando == 'V') {       // 'V' de Verde (Acierto)
      encenderVerdes();
      
      // Hacemos una pausa de 2 segundos manteniendo vivo el USB
      for (int i = 0; i < 200; i++) {
        DigiUSB.refresh();
        delay(10);
      }
      
      apagarTodo();
    } 
    else if (comando == 'R') {  // 'R' de Rojo (Error)
      encenderRojos();
      
      // Hacemos una pausa de 2 segundos manteniendo vivo el USB
      for (int i = 0; i < 200; i++) {
        DigiUSB.refresh();
        delay(10);
      }
      
      apagarTodo();
    }
    else if (comando == 'O') {  // 'O' de Off
      apagarTodo();
    }
  }
}

// Tus funciones de control de luces impecables:
void encenderVerdes() {
  digitalWrite(PINES_VERDES, HIGH);
  digitalWrite(PINES_ROJOS, LOW);
}

void encenderRojos() {
  digitalWrite(PINES_VERDES, LOW);
  digitalWrite(PINES_ROJOS, HIGH);
}

void apagarTodo() {
  digitalWrite(PINES_VERDES, LOW);
  digitalWrite(PINES_ROJOS, LOW);
}
#define VERDE1 0
#define VERDE2 1

#define ROJO1 2
#define ROJO2 3

void setup() {

  pinMode(VERDE1, OUTPUT);
  pinMode(VERDE2, OUTPUT);

  pinMode(ROJO1, OUTPUT);
  pinMode(ROJO2, OUTPUT);

  apagarTodo();
}

void loop() {

  // Comunicación futura con React
  // VERDE
  // ROJO
  // OFF

}

void encenderVerdes() {

  digitalWrite(VERDE1, HIGH);
  digitalWrite(VERDE2, HIGH);

  digitalWrite(ROJO1, LOW);
  digitalWrite(ROJO2, LOW);
}

void encenderRojos() {

  digitalWrite(VERDE1, LOW);
  digitalWrite(VERDE2, LOW);

  digitalWrite(ROJO1, HIGH);
  digitalWrite(ROJO2, HIGH);
}

void apagarTodo() {

  digitalWrite(VERDE1, LOW);
  digitalWrite(VERDE2, LOW);

  digitalWrite(ROJO1, LOW);
  digitalWrite(ROJO2, LOW);
}
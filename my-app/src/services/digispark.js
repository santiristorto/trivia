let port;
let writer;

export async function conectarDigispark() {
  try {
    port = await navigator.serial.requestPort();

    await port.open({
      baudRate: 9600,
    });

    writer = port.writable.getWriter();

    return true;
  } catch {
    return false;
  }
}

export async function enviarComando(comando) {
  if (!writer) {
    console.log("Digispark no conectado");
    return;
  }

  const data = new TextEncoder().encode(comando + "\n");

  await writer.write(data);
}

export async function encenderVerde() {
  await enviarComando("VERDE");
}

export async function encenderRojo() {
  await enviarComando("ROJO");
}

export async function apagarTodo() {
  await enviarComando("OFF");
}
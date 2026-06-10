const API_URL = "http://localhost:5000/api";

export async function encenderVerde() {
  try {
    await fetch(`${API_URL}/acierto`, { method: 'POST' });
  } catch (error) {
    console.error("Error al enviar comando VERDE:", error);
  }
}

export async function encenderRojo() {
  try {
    await fetch(`${API_URL}/error`, { method: 'POST' });
  } catch (error) {
    console.error("Error al enviar comando ROJO:", error);
  }
}

export async function apagarTodo() {
  try {
    await fetch(`${API_URL}/apagar`, { method: 'POST' });
  } catch (error) {
    console.error("Error al enviar comando APAGAR:", error);
  }
}
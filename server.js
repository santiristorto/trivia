const express = require('express');
const cors = require('cors');
const HID = require('node-hid');

const app = express();
app.use(cors());
app.use(express.json());

// Identificadores universales del Digispark USB
const DIGISPARK_VENDOR_ID = 0x16c0; 
const DIGISPARK_PRODUCT_ID = 0x05df; 

function enviarAlDigispark(letra) {
  try {
    const dispositivos = HID.devices();
    const infoDigi = dispositivos.find(d => d.vendorId === DIGISPARK_VENDOR_ID && d.productId === DIGISPARK_PRODUCT_ID);

    if (!infoDigi) {
      console.log("⚠️ Digispark no detectado en el puerto USB.");
      return false;
    }

    const dispositivo = new HID.HID(infoDigi.path);

    // Formato requerido por DigiUSB: Report ID (0) + Letra en ASCII ('V', 'R' u 'O')
    const buffer = Buffer.alloc(2);
    buffer[0] = 0; 
    buffer[1] = letra.charCodeAt(0); 

    dispositivo.write(buffer);
    dispositivo.close(); 
    console.log(`[USB] Comando '${letra}' enviado con éxito al Digispark.`);
    return true;
  } catch (error) {
    console.error("❌ Error de comunicación USB:", error.message);
    return false;
  }
}

// Ruta para Acierto (Verde)
app.post('/api/acierto', (req, res) => {
  enviarAlDigispark('V');
  res.json({ status: "ok" });
});

// Ruta para Error (Rojo)
app.post('/api/error', (req, res) => {
  enviarAlDigispark('R');
  res.json({ status: "ok" });
});

// Ruta para Apagar (Cuando tocan 'Siguiente')
app.post('/api/apagar', (req, res) => {
  enviarAlDigispark('O'); // Mandamos la 'O' de Off
  res.json({ status: "ok" });
});

app.listen(5000, () => {
  console.log("🚀 Servidor Puente de Hardware corriendo en http://localhost:5000");
});
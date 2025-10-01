const express = require('express');
const dotenv = require('dotenv');
const statusRoutes = require('./routes/statusRoutes');

// Cargar variables de entorno
dotenv.config();

const app = express();
app.use(express.json());

// Ruta principal
app.use('/api/status', statusRoutes);

// ⚠️ Error: puerto fijo, no usa process.env.PORT
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
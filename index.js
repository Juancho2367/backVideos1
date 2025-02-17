const express = require('express');
const { urlencoded, json } = require('express');
const cors = require('cors');
require('dotenv').config();
const router = require('./routes/yourvideos.routes.js'); // Asegúrate de que la ruta sea correcta

const app = express();

// Middleware para analizar datos codificados y JSON con un límite ampliado
app.use(json({ limit: '50mb' })); // Aumenta el límite para JSON
app.use(urlencoded({ limit: '50mb', extended: true })); // Aumenta el límite para datos codificados

// Configuración de CORS
const allowedOrigins = ['https://videos-front1.vercel.app'];
app.use(cors({
    origin: "*", // Permite solicitudes desde cualquier origen
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"]
  }));
// Manejador para la ruta raíz
app.get('/', (req, res) => {
    res.send('Bienvenido al backend de yourvideos!');
});

// Utiliza las rutas del sistema
app.use('/v1/yourvideos', router);

// Iniciar el servidor
const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
});

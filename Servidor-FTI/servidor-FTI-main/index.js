const express = require('express');
const path = require('path');

const app = express();
const PORT = 8080;

// Middleware para servir solo los archivos dentro de ./html/
app.use(express.static(path.join(__dirname, 'html')));

// Middleware para registrar cada conexión
app.use((req, res, next) => {
    console.log(`📡 Conexión recibida: ${req.method} ${req.url}`);
    next();
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});
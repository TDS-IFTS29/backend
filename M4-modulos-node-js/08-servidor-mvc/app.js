const http = require('http'); // Importa el módulo HTTP de Node.js
const tareasController = require('./controllers/tareasController'); // Importa el controlador

const servidor = http.createServer((req, res) => {
  tareasController.manejarRuta(req, res); // Todas las rutas se manejan en el controlador
});

servidor.listen(3000, () => {
    console.log('Servidor escuchando en http://localhost:3000');
});

// Importamos el módulo 'http' para crear el servidor
const http = require('http');

// Datos simulados (como si fueran de una base de datos)
const usuarios = [
  { id: 1, nombre: 'Juan', email: 'juan@example.com' },
  { id: 2, nombre: 'Ana', email: 'ana@example.com' },
];

// Creamos el servidor
const server = http.createServer((req, res) => {
  // Usamos el objeto URL para analizar correctamente la ruta
  const url = new URL(req.url, `http://${req.headers.host}`);

  // Ruta principal ("/") - mensaje informativo
  if (url.pathname === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('Servidor activo. Usá /api/usuarios para obtener los datos.');
  }

  // Ruta para devolver los usuarios
  else if (url.pathname === '/api/usuarios') {
    // Leemos la cabecera personalizada enviada por el cliente
    console.log('Cabecera X-Cliente-ID recibida:', req.headers['x-cliente-id']);

    // Respondemos con cabeceras
    res.writeHead(200, {
      'Content-Type': 'application/json; charset=utf-8',
      'Access-Control-Allow-Origin': '*', // Permite peticiones desde cualquier origen (CORS)
      'X-Powered-By': 'Node.js',
      'X-App-Version': '1.0.0'
    });

    // Enviamos los datos simulados como JSON
    res.end(JSON.stringify(usuarios));
  }

  // Si no coincide ninguna ruta, devolvemos error 404
  else {
    res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('Ruta no encontrada');
  }
});

// Iniciamos el servidor en el puerto 3000
server.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000');
});

// Importamos el módulo 'http' para crear el servidor
const http = require('http');

// Creamos el servidor
const server = http.createServer((req, res) => {

  // Configuramos la cabecera CORS para permitir peticiones desde cualquier origen
  // Esto es necesario si accedemos desde un archivo HTML que corre en el navegador
  res.setHeader('Access-Control-Allow-Origin', '*');

  // Mostramos en la consola todas las cabeceras que llegan con la petición
  console.log('Cabeceras recibidas:');
  console.log(req.headers);

  // Respondemos al cliente con una cabecera HTTP 200 (OK) y tipo de contenido texto plano
  res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });

  // Enviamos una respuesta de texto
  res.end('¡Cabeceras recibidas!');
});

// Indicamos en qué puerto escuchar (3000) y mostramos un mensaje cuando está listo
server.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000');
});

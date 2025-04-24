// server.js
const http = require('http');
const fs = require('fs');
const path = require('path');

// Crear servidor
const server = http.createServer((req, res) => {
  if (req.url === '/' || req.url === '/index.html') {
    // Leemos el archivo HTML
    fs.readFile(path.join(__dirname, 'index.html'), (err, content) => {
      if (err) {
        res.writeHead(500);
        res.end('Error al cargar el archivo');
      } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(content);
      }
    });
  } else {
    res.writeHead(404);
    res.end('No encontrado');
  }
});

// Escuchar en el puerto 3000
server.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000');
});

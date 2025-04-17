const http = require('http');
const tareasController = require('./controllers/tareasController');

const server = http.createServer((req, res) => {
  if (req.method === 'POST' && req.url === '/agregar') {
    let body = '';
    req.on('data', chunk => body += chunk.toString());
    req.on('end', () => {
      const params = new URLSearchParams(body);
      const texto = params.get('texto');
      tareasController.agregarTarea(texto, res);
    });
  } else if (req.method === 'POST' && req.url.startsWith('/eliminar')) {
    const url = new URL(req.url, `http://${req.headers.host}`);
    const index = parseInt(url.searchParams.get('index'));
    tareasController.eliminarTarea(index, res);
  } else if (req.method === 'POST' && req.url.startsWith('/completar')) {
    const url = new URL(req.url, `http://${req.headers.host}`);
    const index = parseInt(url.searchParams.get('index'));
    tareasController.completarTarea(index, res);
  } else {
    tareasController.manejarRuta(req, res);
  }
});

server.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000');
});

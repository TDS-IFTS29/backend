const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/hola') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('¡Hola mundo!\n');
    } else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Página no encontrada\n');
    }
});

server.listen(8000, '127.0.0.1', () => {
    console.log('Servidor corriendo en http://127.0.0.1:8000/');
});

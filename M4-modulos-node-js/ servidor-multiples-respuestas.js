// Importamos el módulo 'http' nativo de Node.js
const http = require('http');

// Creamos el servidor
const server = http.createServer((req, res) => {
    // Obtenemos la URL solicitada por el cliente
    const { url } = req;

    // Ruta principal: muestra un mensaje de bienvenida
    if (url === '/') {
        res.statusCode = 200; // Código de éxito
        res.setHeader('Content-Type', 'text/plain; charset=utf-8'); // Tipo de contenido: texto plano en UTF-8
        res.end('Bienvenido al servidor Node.js'); // Respuesta al cliente
    }

    // Ruta /html: devuelve contenido en formato HTML
    else if (url === '/html') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html; charset=utf-8'); // Tipo de contenido: HTML en UTF-8
        res.end(`
            <html>
                <head>
                    <meta charset="utf-8">
                    <title>Página HTML</title>
                </head>
                <body>
                    <h1>¡Hola desde Node.js!</h1>
                    <p>Esta es una respuesta con HTML.</p>
                </body>
            </html>
        `);
    }

    // Ruta /json: devuelve datos en formato JSON
    else if (url === '/json') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json; charset=utf-8'); // Tipo de contenido: JSON en UTF-8
        const data = {
            mensaje: 'Hola desde JSON',
            fecha: new Date(),
            servidor: 'Node.js'
        };
        res.end(JSON.stringify(data)); // Convertimos el objeto a JSON
    }

    // Cualquier otra ruta: error 404 (no encontrado)
    else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/plain; charset=utf-8');
        res.end('Error 404: Recurso no encontrado');
    }
});

// Indicamos en qué puerto e IP escuchar
server.listen(8000, '127.0.0.1', () => {
    console.log('Servidor corriendo en http://127.0.0.1:8000/');
});

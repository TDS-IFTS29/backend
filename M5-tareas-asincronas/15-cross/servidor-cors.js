const http = require('http');

const PORT = 4000;
const ORIGENES_PERMITIDOS = ['http://localhost:5500'];

const server = http.createServer((req, res) => {
    const origen = req.headers.origin;

    // 👉 Validar y aplicar CORS solo si el origen está permitido
    if (ORIGENES_PERMITIDOS.includes(origen)) {
        res.setHeader('Access-Control-Allow-Origin', origen);
    }

    // 👉 Manejo de preflight (OPTIONS)
    if (req.method === 'OPTIONS') {
        if (ORIGENES_PERMITIDOS.includes(origen)) {
            res.writeHead(204, {
                'Access-Control-Allow-Origin': origen,
                'Access-Control-Allow-Methods': 'GET, POST',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400'
            });
            return res.end();
        } else {
            res.writeHead(403);
            return res.end('CORS no permitido');
        }
    }

    // ✅ Ruta válida: /api/datos
    if (req.url === '/api/datos' && req.method === 'GET') {
        res.writeHead(200, {
            'Content-Type': 'application/json; charset=utf-8'
        });
        res.end(JSON.stringify({
            mensaje: 'Hola desde el servidor con CORS permitido 👋'
        }));
        return;
    }

    // ❌ Ruta no encontrada
    res.writeHead(404, {
        'Content-Type': 'text/html; charset=utf-8'
    });
    res.end('<h1>🚫 404 - Página no encontrada</h1>');
});

server.listen(PORT, () => {
    console.log(`🚀 Servidor escuchando en http://localhost:${PORT}`);
});

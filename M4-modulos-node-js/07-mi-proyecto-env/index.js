const http = require('http');
const entorno = require('./config.js').config();

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  res.end(`
    <h1>🌐 Entorno: ${process.env.NODE_ENV || 'development'}</h1>
    <p>Servidor corriendo en: ${entorno.SERVERURL}</p>
    <p>Puerto configurado: ${entorno.PORT}</p>
  `);
});

server.listen(entorno.PORT, () => {
  console.log(`✅ Servidor escuchando en ${entorno.SERVERURL}`);
});

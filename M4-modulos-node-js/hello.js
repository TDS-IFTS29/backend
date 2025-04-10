
const http = require('http'); //Esta línea importa el módulo http nativo de Node.js.
/*
Ese módulo nos da herramientas para crear un servidor web.
require('http') carga el módulo y lo guarda en la constante http.
*/




const server = http.createServer((req, res) => { //Esta línea crea un servidor HTTP.
  res.statusCode = 200; //Esta línea establece el código de estado de la respuesta a 200 (OK).
  res.setHeader('Content-Type', 'text/plain'); //Esta línea establece el encabezado Content-Type de la respuesta a text/plain.
  res.end('Hello World\n'); //Esta línea finaliza la respuesta con el texto "Hello World".
}
); //Esta línea cierra la función de creación del servidor.


//// Indicar el puerto y la IP en la que el servidor escucha

server.listen(8000, '127.0.0.1', () => {
console.log('Server running at http://127.0.0.1:8000/');
});

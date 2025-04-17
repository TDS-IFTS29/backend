//El controller decide qué hacer según la URL

const modelo = require('../models/tareasModel'); // Importa el modelo (datos)
const vista = require('../views/tareasView'); // Importa la vista (HTML)

function manejarRuta(req, res) {
    const url = new URL(req.url, `http://${req.headers.host}`);
    const pathname = url.pathname;  // ej: "/", "/agregar", "/json"

    if (pathname === '/') {
        const tareas = modelo.obtenerTareas();  // Pide las tareas al modelo
        const html = vista.mostrarHTML(tareas); // Genera HTML con la vista
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(html); // Manda el HTML al navegador

    } else if (pathname === '/agregar') { //si la reuta es "/agregar"
        const texto = url.searchParams.get('texto');
        if (texto) {
        modelo.agregarTarea(texto); // Le dice al modelo que agregue esa tarea
        }
        res.writeHead(302, { Location: '/' }); // Redirige a la página principal.  El 302 es un código de estado HTTP que significa: "Found" o "Redirección Temporal". "No te voy a dar una respuesta acá, andá a otra URL."
        res.end();

    } else if (pathname === '/json') {
        const tareas = modelo.obtenerTareas(); // Pide la lista de tareas
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(tareas)); // Manda las tareas como JSON
        
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Página no encontrada');
    }
}

module.exports = { manejarRuta };

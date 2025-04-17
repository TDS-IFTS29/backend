const modelo = require('../models/tareasModel');
const vista = require('../views/tareasView');

function manejarRuta(req, res) {
  const url = new URL(req.url, `http://${req.headers.host}`);
  const pathname = url.pathname;

  if (pathname === '/' && req.method === 'GET') {
    const tareas = modelo.leerTareas();
    const html = vista.mostrarHTML(tareas);
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(html);
  } else if (pathname === '/json' && req.method === 'GET') {
    const tareas = modelo.leerTareas();
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(tareas));
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Página no encontrada');
  }
}

function agregarTarea(texto, res) {
  if (texto) {
    modelo.agregarTarea(texto);
  }
  res.writeHead(302, { Location: '/' });
  res.end();
}

function eliminarTarea(index, res) {
  if (!isNaN(index)) {
    modelo.eliminarTarea(index);
  }
  res.writeHead(302, { Location: '/' });
  res.end();
}

function completarTarea(index, res) {
  if (!isNaN(index)) {
    modelo.completarTarea(index);
  }
  res.writeHead(302, { Location: '/' });
  res.end();
}

module.exports = { manejarRuta, agregarTarea, eliminarTarea, completarTarea };

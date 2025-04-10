// Importar la clase 'EventEmitter' del módulo 'events' integrado en NodeJS
const EventEmitter = require('events');

// Crear un nuevo objeto emisor de eventos que llamamos 'ee'
const ee = new EventEmitter();

// Escuchar (asociar) un evento llamado 'datos' con una función callback
// Esta función se ejecutará cada vez que ocurra el evento 'datos'
ee.on('datos', (fecha) => {
  // Mostrar en consola la fecha en la que ocurrió el evento
  console.log('Evento "datos" activado en:', fecha);
});

// Usamos 'setInterval()' para emitir el evento 'datos' automáticamente cada 500 ms
setInterval(() => {
  // Lanzamos (emitimos) el evento 'datos' con la fecha/hora actual en formato ISO
  ee.emit('datos', new Date().toISOString());
}, 500);

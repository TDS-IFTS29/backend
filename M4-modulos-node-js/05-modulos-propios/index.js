// Importa el módulo propio 'operaciones_basicas.js' desde la misma carpeta
const operaciones_basicas = require('./operaciones-basicas');

// Usa la función 'producto' del módulo importado y muestra el resultado
console.log('El producto de 4 x 10 es ' + operaciones_basicas.producto(4, 10));

// Usa la función 'suma' del módulo importado y muestra el resultado
console.log('La suma de 4 + 10 es ' + operaciones_basicas.suma(4, 10));

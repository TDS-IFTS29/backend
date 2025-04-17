// Importamos el módulo 'fs' (file system) de Node.js
let fs = require('fs');

// Usamos fs.readFile para leer el archivo 'archivo.txt'
// - El primer parámetro es el nombre del archivo
// - El segundo es la codificación (en este caso 'utf-8' para que no nos devuelva un buffer)
// - El tercero es una función callback que maneja el resultado
fs.readFile('archivo.txt', 'utf-8', (err, data) => {
    if (err) {
        // Si hay un error (por ejemplo, el archivo no existe), lo mostramos
        console.log('Error al leer el archivo:', err);
    } else {
        // Si todo va bien, mostramos el contenido del archivo
        console.log('Contenido del archivo:');
        console.log(data);
    }
});

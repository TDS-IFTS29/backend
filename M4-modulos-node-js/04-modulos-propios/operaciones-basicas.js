/*
En este caso, exports es un objeto vacío por defecto proporcionado por Node.js.
Cuando asignas propiedades o funciones directamente a exports,
estas funciones o propiedades se pueden importar desde otro archivo.
*/


// Exporta la función 'producto' que recibe dos números y retorna su multiplicación
exports.producto = function (a, b) {
    return a * b; // devuelve la multiplicación de a por b
};

// Exporta la función 'suma' que recibe dos números y retorna su suma
exports.suma = function (a, b) {
    return a + b; // devuelve la suma de a y b
};

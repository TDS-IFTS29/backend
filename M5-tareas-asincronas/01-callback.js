// Función asincrónica simulada que lanza un dado varias veces
const doTask = (iterations, callback) => {
    const numbers = []; // Array para guardar los resultados de los dados

    // Repetimos la cantidad de tiradas indicadas
    for (let i = 0; i < iterations; i++) {
      const number = 1 + Math.floor(Math.random() * 6); // número entre 1 y 6
      numbers.push(number); // Guardamos el resultado

      // Si sacamos un 6, consideramos que es un error
        if (number === 6) {
            callback({
                error: true,
                message: 'Se ha sacado un 6'
            });
            return; // Cancelamos la ejecución
        }
    }
    // Si no se sacó un 6, devolvemos los resultados como "correctos"
    callback(null, {
        error: false,
        value: numbers
    });
};

// Llamamos a la función con 10 tiradas
doTask(10, function (err, result) {
    if (err) {
        console.error('Se ha sacado un ', err.message);
        return;
    }
    console.log('Tiradas correctas: ', result.value);
});
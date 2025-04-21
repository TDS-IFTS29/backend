// Creamos una función que devuelve una promesa
function tareaAsincronica(dato) {
    return new Promise((resolve, reject) => {
        console.log('⏳ Procesando...');

        // Simulamos una tarea que tarda 2 segundos
        setTimeout(() => {
            if (dato === 'ok') {
                // Si el dato es "ok", resolvemos la promesa
                resolve('✅ Tarea completada correctamente.');
            } else {
                // Si el dato no es "ok", rechazamos la promesa
                reject('❌ Error: dato incorrecto.');
            }
        }, 2000);
    });
}

// Consumimos la promesa con .then(), .catch() y .finally()
tareaAsincronica('ok')
    .then((mensaje) => {
        console.log(mensaje); // Se ejecuta si todo sale bien
    })
    .catch((error) => {
        console.error(error); // Se ejecuta si hay un error
    })
    .finally(() => {
        console.log('🔚 Proceso finalizado.');
    });

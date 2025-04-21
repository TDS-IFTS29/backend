// Archivo: promise-resolve-reject.js

function doTask() {
    const number = 1 + Math.floor(Math.random() * 6);
    console.log('Número generado:', number);

    return number % 2 === 0
        ? Promise.resolve(number)
        : Promise.reject(number);
}

doTask()
    .then((valor) => {
        console.log('✅ La promesa se resolvió con:', valor);
    })
    .catch((error) => {
        console.error('❌ La promesa fue rechazada con:', error);
    });

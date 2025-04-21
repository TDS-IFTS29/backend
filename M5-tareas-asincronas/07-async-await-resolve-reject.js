// Archivo: async-await-resolve-reject.js

// Función que devuelve una promesa resuelta o rechazada según el número
function doTask() {
    const number = 1 + Math.floor(Math.random() * 6);
    console.log('🎲 Número generado:', number);

    return number % 2 === 0
        ? Promise.resolve(number)
        : Promise.reject(number);
}

// Función asincrónica que consume la promesa usando async/await
async function ejecutarTarea() {
    try {
        const resultado = await doTask();
        console.log('✅ Número par:', resultado);
    } catch (error) {
        console.error('❌ Número impar:', error);
    } finally {
        console.log('🔚 Tarea finalizada.');
    }
}

// Llamamos a la función principal
ejecutarTarea();

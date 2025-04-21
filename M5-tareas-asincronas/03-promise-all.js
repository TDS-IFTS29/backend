// Simulamos tareas asincrónicas con setTimeout
function tarea(ms, resultado) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (resultado === 'error') {
                reject(`❌ Error en ${ms}ms`);
            } else {
                resolve(`✅ Terminó en ${ms}ms`);
            }
        }, ms);
    });
}

const p1 = tarea(1000, 'ok');
const p2 = tarea(2000, 'ok');
const p3 = tarea(1500, 'error'); // Proba con 'error' para ver el catch

Promise.all([p1, p2, p3])
    .then((resultados) => {
        console.log('✅ Todas las tareas completadas:');
        console.log(resultados);
    })
    .catch((error) => {
        console.error('🚫 Alguna tarea falló:', error);
    });

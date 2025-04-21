// Simulador de tareas asincrónicas con distintos tiempos y resultados
function tarea(ms, resultado) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (resultado === 'error') {
                reject(`❌ Error en tarea de ${ms}ms`);
            } else {
                resolve(`✅ Tarea exitosa en ${ms}ms`);
            }
        }, ms);
    });
}

console.log('\n🔹 Promise.all (todo o nada):');
Promise.all([
    tarea(1000, 'ok'),
    tarea(1500, 'ok'),
    tarea(2000, 'ok') // Probar con 'error' para ver el catch
])
    .then((res) => {
        console.log('✅ Todas las promesas se resolvieron:', res);
    })
    .catch((err) => {
        console.error('❌ Al menos una promesa falló:', err);
    });

setTimeout(() => {
    console.log('\n🔹 Promise.allSettled (resultados mixtos):');
    Promise.allSettled([
        tarea(500, 'ok'),
        tarea(800, 'error'),
        tarea(600, 'ok')
    ])
        .then((resultados) => {
            resultados.forEach((res, i) => {
                console.log(`Promesa ${i + 1}:`, res);
            });
        });
}, 2500);

setTimeout(() => {
    console.log('\n🔹 Promise.race (la primera que termina):');
    Promise.race([
        tarea(1200, 'ok'),
        tarea(700, 'ok'),
        tarea(1000, 'error') // Esta no llega a ejecutarse si otra se resuelve antes
    ])
        .then((resultado) => {
            console.log('🏁 Ganó:', resultado);
        })
        .catch((error) => {
            console.error('🚨 Primer error:', error);
        });
}, 5000);

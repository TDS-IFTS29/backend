const p1 = Promise.reject('❌ Falló 1');
const p2 = new Promise(resolve => setTimeout(() => resolve('✅ P2 ok'), 1000));
const p3 = new Promise(resolve => setTimeout(() => resolve('✅ P3 ok'), 2000));

Promise.any([p1, p2, p3])
    .then((resultado) => {
        console.log('🎉 Primera promesa exitosa:', resultado);
    })
    .catch((err) => {
        console.error('🚨 Todas las promesas fallaron:', err);
    });

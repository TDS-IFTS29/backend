// Importamos readline para leer desde consola
const readline = require('node:readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Función para analizar la URL ingresada
function analizarURL(urlTexto) {
    try {
        const url = new URL(urlTexto);

        console.log('\n🧠 Análisis de la URL:\n');
        console.log('🌐 href:', url.href);
        console.log('🔐 protocolo:', url.protocol);
        console.log('🧩 host:', url.host);
        console.log('📛 hostname:', url.hostname);
        console.log('🔢 puerto:', url.port || '(puerto por defecto)');
        console.log('📁 ruta (pathname):', url.pathname);
        console.log('🔍 parámetros (search):', url.search);
        console.log('🎯 hash:', url.hash || '(sin ancla)');
        console.log('📦 parámetros individuales:');
        for (const [clave, valor] of url.searchParams) {
            console.log(`   • ${clave} = ${valor}`);
        }
        console.log('📄 origen:', url.origin);

    } catch (err) {
        console.error('❌ URL inválida:', err.message);
    } finally {
        rl.close();
    }
}

// Pedimos la URL al usuario
rl.question('🔗 Ingresá una URL para analizar: ', (respuesta) => {
    analizarURL(respuesta);
});

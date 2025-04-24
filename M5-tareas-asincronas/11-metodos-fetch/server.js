async function procesarRespuesta() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');

        // Clonamos la respuesta para usarla en dos formatos
        const responseClone = response.clone();

        // Procesamos como JSON
        const dataJson = await response.json();
        console.log('\n📦 Datos procesados como JSON:\n', dataJson);

        // Procesamos como texto plano
        const responseText = await responseClone.text();
        console.log('\n📄 Datos procesados como texto plano:\n', responseText);

    } catch (error) {
        console.error('🚨 Error al procesar la respuesta:', error.message);
    }
}

procesarRespuesta();

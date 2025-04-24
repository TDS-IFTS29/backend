// Definimos una función async para hacer la petición
const request = async (url) => {
    // Esperamos la respuesta del servidor
    const response = await fetch(url);

    // Verificamos si la respuesta fue exitosa
    if (!response.ok) {
        // Si no lo fue, lanzamos un error con el código
        throw new Error(`WARN ${response.status}`);
    }

    // Procesamos el cuerpo de la respuesta como texto
    const data = await response.text();

    // Devolvemos el contenido
    return data;
};

// Ejecutamos la función dentro de un entorno controlado
const main = async () => {
    try {
        const resultOk = await request('https://www.w3.org/TR/PNG/iso_8859-1.txt');
        console.log('✅ Resultado OK:\n', resultOk.slice(0, 300), '...');

        const resultError = await request('https://www.w3.org/TR/PNG/nonexistent.txt');
        console.log('✅ Resultado ERROR:\n', resultError);
    } catch (err) {
        console.error('❌ Error capturado:', err.message);
    }
};

// Llamamos a la función principal
main();

// Hacemos una petición HTTP a un recurso de texto (válido en servidores reales)
fetch('https://www.w3.org/TR/PNG/iso_8859-1.txt')
    .then((response) => {
        // Verificamos si la respuesta fue exitosa
        if (response.ok) {
            // Si está todo bien, devolvemos el texto plano
            return response.text();
        } else {
            // Si hubo un error (404, 500, etc), lanzamos una excepción
            throw new Error(response.status);
        }
    })
    .then((data) => {
        // Procesamos los datos recibidos
        console.log('✅ Datos recibidos:\n', data.slice(0, 300), '...');
    })
    .catch((err) => {
        // Capturamos cualquier error que se haya producido
        console.error('❌ ERROR en la petición:', err.message);
    });

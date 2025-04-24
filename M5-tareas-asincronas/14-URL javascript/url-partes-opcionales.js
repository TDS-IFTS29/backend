// Creamos una URL con todas las partes opcionales
const url = new URL('https://es.wikipedia.org/wiki/Google_Drive?section=historia&lang=es#Almacenamiento');

console.log('🔍 Análisis de partes opcionales:\n');

// 📄 Fichero (documento al final de la ruta)
console.log('📁 Pathname (ruta completa):', url.pathname);
// (No indica explícitamente un archivo, pero apunta a /wiki/Google_Drive)

// ❓ Query strings
console.log('🔸 Query string completa:', url.search); // ?section=historia&lang=es
console.log('🔸 Parámetros individuales:');
for (const [clave, valor] of url.searchParams) {
    console.log(`   • ${clave} = ${valor}`);
}

// 🧷 Ancla
console.log('📌 Ancla (hash):', url.hash); // #Almacenamiento

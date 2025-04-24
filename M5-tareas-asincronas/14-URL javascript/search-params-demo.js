const url = new URL('https://una-url.com/path/?color=red&sound=enabled');
const params = url.searchParams;

// 1️⃣ Agregamos una nueva variable
params.append('fullscreen', 'true');
console.log('➕ append:', url.search); // ?color=red&sound=enabled&fullscreen=true

// 2️⃣ Eliminamos una variable
params.delete('fullscreen');
console.log('🗑️ delete:', url.search); // ?color=red&sound=enabled

// 3️⃣ Comprobamos si existe una variable
console.log('❓ has "color"?', params.has('color')); // true

// 4️⃣ Añadimos otra variable con el mismo nombre
params.append('color', 'blue');
console.log('🎨 múltiples color:', url.search); // ?color=red&sound=enabled&color=blue

// 5️⃣ Obtener el primer valor de una variable repetida
console.log('🎯 get color:', params.get('color')); // red

// 6️⃣ Obtener todos los valores con ese nombre
console.log('📦 getAll color:', params.getAll('color')); // ["red", "blue"]

// 7️⃣ Sobrescribir el primer valor de "color"
params.set('color', 'pink');
console.log('✏️ set color:', url.search); // ?color=pink&sound=enabled

// 8️⃣ Ordenar las variables por nombre
params.sort();
console.log('🔤 sort:', url.search); // ?color=pink&sound=enabled

// 9️⃣ Obtener solo nombres, valores o entradas
console.log('🧷 keys:', [...params.keys()]); // ["color", "sound"]
console.log('🎁 values:', [...params.values()]); // ["pink", "enabled"]
console.log('📊 entries:', [...params.entries()]); // [["color", "pink"], ["sound", "enabled"]]

// 🔁 Recorremos con forEach
params.forEach((value, name) => {
    console.log(`🔍 La variable "${name}" tiene el valor "${value}"`);
});

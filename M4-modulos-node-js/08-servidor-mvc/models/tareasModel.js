let tareas = []; // Base de datos en memoria (array de tareas)

function agregarTarea(texto) {
  tareas.push({ texto });  // Agrega un objeto {texto: 'algo'}
}

function obtenerTareas() {
  return tareas; // Devuelve el array de tareas
}

module.exports = { agregarTarea, obtenerTareas };

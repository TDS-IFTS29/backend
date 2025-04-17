const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'tareas.json');

function leerTareas() {
  if (!fs.existsSync(filePath)) return [];
  const data = fs.readFileSync(filePath);
  return JSON.parse(data);
}

function guardarTareas(tareas) {
  fs.writeFileSync(filePath, JSON.stringify(tareas, null, 2));
}

function agregarTarea(texto) {
  const tareas = leerTareas();
  tareas.push({ texto, completada: false });
  guardarTareas(tareas);
}

function eliminarTarea(index) {
  const tareas = leerTareas();
  if (index >= 0 && index < tareas.length) {
    tareas.splice(index, 1);
    guardarTareas(tareas);
  }
}

function completarTarea(index) {
  const tareas = leerTareas();
  if (index >= 0 && index < tareas.length) {
    tareas[index].completada = true;
    guardarTareas(tareas);
  }
}

module.exports = { leerTareas, agregarTarea, eliminarTarea, completarTarea };

function mostrarHTML(tareas) {
    let html = '<h1>Lista de tareas</h1><ul>';
    
    tareas.forEach(t => {
        html += `<li>${t.texto}</li>`; // Muestra cada tarea como <li>
    });
    
    html += '</ul>';
    
    return html; // Devuelve todo el HTML armado
}

module.exports = { mostrarHTML };  
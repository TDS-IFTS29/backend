function mostrarHTML(tareas) {
  let html = `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Lista de Tareas</title>
</head>
<body>
  <h1>📋 Lista de Tareas</h1>
  <ul>`;

  tareas.forEach((t, index) => {
    html += `<li>
      ${t.completada ? `<s>${t.texto}</s>` : t.texto}
      ${!t.completada ? `
      <form method="POST" action="/completar?index=${index}" style="display:inline;">
        <button>Completar</button>
      </form>` : ''}
      <form method="POST" action="/eliminar?index=${index}" style="display:inline;">
        <button>Eliminar</button>
      </form>
    </li>`;
  });

  html += `</ul>
  <form method="POST" action="/agregar">
    <input type="text" name="texto" placeholder="Nueva tarea" required>
    <button>Agregar</button>
  </form>
</body>
</html>`;

  return html;
}

module.exports = { mostrarHTML };

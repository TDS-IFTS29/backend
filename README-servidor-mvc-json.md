# ✅ Proyecto MVC con Node.js + JSON (Agregar, Eliminar, Completar)

Este proyecto es una app de tareas desarrollada en **Node.js**, con las siguientes funcionalidades:

- ✔ Agregar tareas
- 🗑 Eliminar tareas
- ✅ Marcar tareas como completadas
- 📁 Guardado persistente en `tareas.json`
- 👁 Interfaz simple en HTML

---

## 📂 Estructura

```
servidor-mvc-json-con-completar/
├── app.js
├── controllers/
│   └── tareasController.js
├── models/
│   ├── tareasModel.js
│   └── tareas.json
├── views/
│   └── tareasView.js
```

---

## 🧪 Cómo ejecutar

```bash
node app.js
```

Abrí tu navegador en:

```
http://localhost:3000
```

---

## 📌 Rutas disponibles

| Ruta | Método | Acción |
|------|--------|--------|
| `/` | GET | Ver la lista de tareas |
| `/agregar` | POST | Agregar nueva tarea |
| `/eliminar?index=N` | POST | Eliminar tarea |
| `/completar?index=N` | POST | Marcar tarea como completada |
| `/json` | GET | Ver datos en formato JSON |

---

## 💡

- Patrones como MVC con Node.js
- Formularios HTML y manejo de POST
- Archivos `.json` como base de datos simple
- Separación de responsabilidades

---

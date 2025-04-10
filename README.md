# Prácticas de la materia Desarrollo de Sistemas Web BackEnd  
# Servidor básico en Node.js - MÓDULO 4

Este proyecto muestra cómo crear un servidor HTTP básico con Node.js, que responde con distintos tipos de contenido según la ruta:

## 📌 Rutas disponibles

- `/` → Texto plano  
- `/html` → HTML con acentos y tildes correctamente codificados  
- `/json` → Objeto JSON con mensaje y fecha  
- Cualquier otra ruta → Error 404  

## 🚀 Cómo ejecutar

1. Clonar el repositorio  
2. Ejecutar el archivo con Node.js:

```bash
node servidor-multiples-respuestas.js

# Prácticas de la materia Desarrollo de Sistemas Web BackEnd  

## Servidor básico en Node.js - MÓDULO 4

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
```


## 📂 Lectura de archivos locales con `fs` – MÓDULO 4

Este ejemplo muestra cómo leer un archivo de texto local utilizando el módulo `fs` (File System) de Node.js. Permite extraer y mostrar el contenido del archivo desde la consola de forma asíncrona.

### 📄 Descripción del archivo `leerArchivo.js`

El archivo utiliza `fs.readFile` para leer un archivo de texto llamado `archivo.txt` en la misma carpeta. Si el archivo existe, su contenido se muestra en consola. Si no existe, se captura y muestra el error.

#### 📜 Código utilizado

```javascript
let fs = require('fs');

fs.readFile('archivo.txt', 'utf-8', (err, data) => {
    if (err) {
        console.log('Error al leer el archivo:', err);
    } else {
        console.log('Contenido del archivo:');
        console.log(data);
    }
});


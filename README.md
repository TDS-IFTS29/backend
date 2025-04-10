# Prácticas de la materia Desarrollo de Sistemas Web BackEnd  

# MÓDULO 4

## 🌐Servidor básico en Node.js

Este proyecto muestra cómo crear un servidor HTTP básico con Node.js, que responde con distintos tipos de contenido según la ruta:

### 📌 Rutas disponibles

- `/` → Texto plano  
- `/html` → HTML con acentos y tildes correctamente codificados  
- `/json` → Objeto JSON con mensaje y fecha  
- Cualquier otra ruta → Error 404  

### 📌 Rutas disponibles
 🚀 Cómo ejecutar

1. Clonar el repositorio  
2. Ejecutar el archivo con Node.js:

```bash
node servidor-multiples-respuestas.js
```


## 📂 Lectura de archivos locales con `fs`

Este ejemplo muestra cómo leer un archivo de texto local utilizando el módulo `fs` (File System) de Node.js. Permite extraer y mostrar el contenido del archivo desde la consola de forma asíncrona.

### 📄 Descripción del archivo `leerArchivo.js`

El archivo utiliza `fs.readFile` para leer un archivo de texto llamado `archivo.txt` en la misma carpeta. Si el archivo existe, su contenido se muestra en consola. Si no existe, se captura y muestra el error.

## 🧩 Creación y uso de módulos propios

Este ejemplo demuestra cómo crear módulos personalizados en Node.js para organizar mejor nuestro código, permitiendo la reutilización de funciones en distintos archivos del proyecto.

### 📌 Contenido del ejemplo

- **`operaciones_basicas.js`**: módulo que exporta funciones básicas (`suma` y `producto`).
- **`index.js`**: archivo principal que importa y utiliza el módulo anterior.

### 🚀 Cómo ejecutar

1. Clonar el repositorio.
2. Ejecutar el archivo principal con Node.js:

```bash
node index.js

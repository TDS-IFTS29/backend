# Prácticas de la materia Desarrollo de Sistemas Web BackEnd  
# MEETS
Resúmenes de los google meets.

# MÓDULO 2: Introducción a Javascript

Ejercicios básicos de la guía

# MÓDULO 4: Introducción a Node JS

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
```

## ⚡️ Manejo de eventos con Node.js (EventEmitter)

Este proyecto muestra cómo definir y utilizar eventos personalizados en Node.js mediante el módulo `events`, permitiendo ejecutar código específico cuando ocurre un determinado evento.

### 📌 Descripción del archivo `eventos.js`

- Importa el módulo `events` e instancia un objeto `EventEmitter`.
- Define un evento llamado `'datos'`.
- Asocia este evento con una función manejadora que imprime la fecha en consola.
- Utiliza `setInterval()` para emitir automáticamente el evento `'datos'` cada 500 milisegundos.

### 🚀 Cómo ejecutar

1. Clonar o descargar el repositorio.
2. Ubicarse en la carpeta del proyecto desde la terminal.
3. Ejecutar el archivo con Node.js:

```bash
node eventos.js
```
Salida Esperada
```bash
Evento "datos" activado en: 2025-04-10T14:20:30.123Z
Evento "datos" activado en: 2025-04-10T14:20:30.623Z
Evento "datos" activado en: 2025-04-10T14:20:31.123Z
```

## 📄 Entornos de ejecución

- [Guía de configuración por entorno](README.entornos.md)

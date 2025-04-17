# 🌐 Proyecto Node.js con Variables de Entorno por Entorno (Development / Production)

Este proyecto muestra cómo estructurar y acceder a **variables de entorno** en Node.js utilizando un archivo JSON con diferentes configuraciones según el entorno (`development` o `production`). También incluye un módulo para centralizar el acceso a estas variables y un servidor web básico para visualizar la configuración activa.

---

## 📁 Estructura del Proyecto

```
mi-proyecto-env/
├── config.js                 # Módulo que gestiona las variables de entorno
├── env.variables.json       # Archivo con variables por entorno
├── index.js                 # Archivo principal que levanta un servidor web
```

---

## 🧠 ¿Qué es una Variable de Entorno?

Una **variable de entorno** es un valor externo al código que define parámetros de configuración. Permite que una aplicación se ejecute en diferentes entornos sin modificar el código.

Ejemplos comunes:
- Puerto del servidor (`PORT`)
- URL base del backend (`SERVERURL`)
- Claves secretas o tokens (`API_KEY`, etc.)

---

## 📄 Archivos Clave

### `env.variables.json`

Contiene los conjuntos de variables agrupadas por entorno:

```json
{
  "development": {
    "SERVERURL": "http://localhost:3001/",
    "PORT": 3001
  },
  "production": {
    "SERVERURL": "https://app.enproduccion.com/",
    "PORT": 5000
  }
}
```

---

### `config.js`

Módulo que centraliza el acceso a la configuración:

```js
exports.config = function () {
  const envJSON = require('./env.variables.json');
  const node_env = process.env.NODE_ENV || 'development';
  return envJSON[node_env];
};
```

---

### `index.js`

Archivo principal que levanta un servidor web básico:

```js
const http = require('http');
const entorno = require('./config.js').config();

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  res.end(\`
    <h1>🌐 Entorno: \${process.env.NODE_ENV || 'development'}</h1>
    <p>Servidor corriendo en: \${entorno.SERVERURL}</p>
    <p>Puerto configurado: \${entorno.PORT}</p>
  \`);
});

server.listen(entorno.PORT, () => {
  console.log(\`✅ Servidor escuchando en \${entorno.SERVERURL}\`);
});
```

---

## ▶️ Cómo Ejecutar

### ✅ Modo desarrollo (por defecto)

```bash
node index.js
```

📍 Luego, abrí tu navegador en [http://localhost:3001](http://localhost:3001)

---

### ✅ Modo producción

```bash
NODE_ENV=production node index.js
```

📍 Luego, abrí tu navegador en [https://app.enproduccion.com/](https://app.enproduccion.com/) o el puerto definido en tu configuración.

---

## ✅ Ventajas de esta estructura

- 🔒 Separación entre código y configuración.
- ⚙️ Permite múltiples entornos sin duplicar código.
- 📦 Configuración fácil de mantener y versionar.
- 🧩 Escalable para proyectos más grandes.

---

# 🌐 CORS con Node.js sin Express

Este proyecto demuestra cómo configurar un servidor HTTP en Node.js **sin usar Express** para permitir peticiones **cross-origin** (CORS) desde un origen específico usando `fetch()` desde el navegador.

## 📦 Estructura del proyecto

```
cors-node-sin-express/
│
├── cliente.html           # Interfaz cliente con botón para probar fetch
├── servidor-cross.js      # Servidor Node con configuración CORS
└── README.md              # Este archivo
```

## ✅ ¿Qué es CORS?

**CORS (Cross-Origin Resource Sharing)** es una política de seguridad que impide que tu navegador haga peticiones AJAX (fetch, axios, etc.) hacia dominios distintos al del origen de la página actual **a menos que el servidor lo permita explícitamente**.

## 🚀 ¿Cómo funciona este proyecto?

- El **cliente** (`cliente.html`) se abre con Live Server desde `http://localhost:5500`
- El **servidor** (`servidor-cross.js`) corre en `http://localhost:4000`
- El cliente hace un `fetch()` a `http://localhost:4000/api/datos`
- Si el servidor permite el origen (`http://localhost:5500`), responde con un mensaje JSON
- Si no está permitido, el navegador bloquea la petición por CORS

## ▶️ Pasos para probar

### 1. Ejecutá el servidor:

```bash
node servidor-cross.js
```

Debe mostrar:

```
🚀 Servidor escuchando en http://localhost:4000
```

### 2. Abrí `cliente.html` con Live Server (VS Code)

- Clic derecho → `Open with Live Server`
- Se abrirá en: `http://localhost:5500/cliente.html`

### 3. Hacé clic en el botón `Obtener datos`

Debería aparecer un `alert()` con el mensaje:

```
✅ Respuesta: Hola desde el servidor con CORS permitido 👋
```

## ⚙️ Configuración de CORS en el servidor

```js
const ORIGENES_PERMITIDOS = ['http://localhost:5500'];
res.setHeader('Access-Control-Allow-Origin', origen);
```

## ❌ ¿Qué pasa si accedo a una ruta no válida?

Ejemplo: `http://localhost:4000/otra-cosa`

🔁 El servidor responderá con:

```html
🚫 404 - Página no encontrada
```

## ✨ Extras

- El servidor maneja preflight (`OPTIONS`) correctamente.
- El HTML del cliente es simple y directo para testear `fetch()`.
- No se requiere Express ni librerías externas.

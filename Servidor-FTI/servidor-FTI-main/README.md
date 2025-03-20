# 🚀 Servidor Web para la asignatura FTI con Node.js y Express  

Este proyecto es un servidor web básico desarrollado con **Node.js** y **Express**, diseñado para servir archivos estáticos desde el directorio `html/`.  

## 📌 Características  

- 📂 Sirve archivos solo desde `html/` y sus subdirectorios (`css/`, `js/`, `img/`).  
- 📡 Registra cada conexión en la consola.  
- 🚀 Fácil de ejecutar y configurar.  


## 🛠️ Instalación  

1. **Clonar el repositorio**  
   ```sh
   git clone https://github.com/DiegoMartindeAndres/servidor-FTI
   ```

2. **Acceder al directorio**  
   ```sh
   cd servidor-FTI/
   ```

3. **Instalar dependencias**  
   ```sh
   npm install
   ```

4. **Ejecutar el servidor**  
   ```sh
   node index.js
   ```

## 📁 Estructura del Proyecto  

```
app/
│── index.js          # Archivo principal del servidor
│── package.json      # Configuración del proyecto
│── html/             # Carpeta pública
│   │── index.html    # Página principal
│   │── css/         # Hojas de estilo
│   │── js/          # Scripts
│   │── img/         # Imágenes
```

## 🌐 Acceso al Servidor

El servidor estará disponible en `http://virtual.infor.uva.es:PUERTO_HTTP/`.

No olvides cmabiar:

- **PUERTO_HTTP** por el puerto que te hemos asignado.

## 🔧 Personalización  

Puedes agregar más archivos dentro de `html/` y sus subdirectorios (`css/`, `js/`, `img/`), y el servidor los servirá automáticamente.

## 📜 Licencia  

Este proyecto está bajo la licencia [MIT](LICENSE).  



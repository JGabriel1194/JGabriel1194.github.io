# Portafolio — Gabriel Soto

Sitio web estático (HTML + CSS + JS puro, sin dependencias) listo para GitHub Pages.

## Estructura

| Archivo | Para qué sirve |
|---|---|
| `data.js` | **Todo el contenido editable**: textos, proyectos, experiencia, certificados, contacto… |
| `index.html` | Estructura de la página (rara vez necesitarás tocarlo) |
| `styles.css` | Estilos y colores (variables al inicio del archivo) |
| `main.js` | Lógica: tema, filtros, animaciones (no necesitas editarlo) |
| `assets/` | Imágenes (`foto-gabriel.png` y `assets/proyectos/` para capturas) |

## Cómo editar el contenido

- **Añadir un proyecto**: copia un bloque `{ ... },` dentro de `proyectos` y cambia los valores. La `categoria` debe coincidir con un `id` de `filtros`.
- **Imagen de un proyecto**: guarda la captura en `assets/proyectos/` y pon la ruta en `imagen`, por ejemplo `imagen: 'assets/proyectos/istah.png'`. Si queda vacío se muestra un recuadro con el texto de `placeholder`.
- **Añadir experiencia / certificado / publicación**: mismo patrón, copia un bloque en la lista correspondiente.
- **Cambiar tu foto**: reemplaza `assets/foto-gabriel.png` (idealmente formato vertical 4:5).
- **WhatsApp / email**: en `config.whatsapp` y en la lista `contacto`.
- **Tema por defecto**: `config.temaInicial` (`'light'` o `'dark'`).
- **Colores**: variables `--accent`, `--bg`, etc. al inicio de `styles.css`.

Guardar el archivo y recarga el navegador para ver los cambios.

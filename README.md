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

Abre `data.js` con cualquier editor. Cada sección está comentada:

- **Añadir un proyecto**: copia un bloque `{ ... },` dentro de `proyectos` y cambia los valores. La `categoria` debe coincidir con un `id` de `filtros`.
- **Imagen de un proyecto**: guarda la captura en `assets/proyectos/` y pon la ruta en `imagen`, por ejemplo `imagen: 'assets/proyectos/istah.png'`. Si queda vacío se muestra un recuadro con el texto de `placeholder`.
- **Añadir experiencia / certificado / publicación**: mismo patrón, copia un bloque en la lista correspondiente.
- **Cambiar tu foto**: reemplaza `assets/foto-gabriel.png` (idealmente formato vertical 4:5).
- **WhatsApp / email**: en `config.whatsapp` y en la lista `contacto`.
- **Tema por defecto**: `config.temaInicial` (`'light'` o `'dark'`).
- **Colores**: variables `--accent`, `--bg`, etc. al inicio de `styles.css`.

Guarda el archivo y recarga el navegador para ver los cambios.

## Ver el sitio en tu computadora

Basta con abrir `index.html` en el navegador (doble clic).

## Publicar en GitHub Pages

1. Crea un repositorio en GitHub (por ejemplo `portafolio`). Si lo llamas `TUUSUARIO.github.io`, la web quedará en la raíz de tu dominio.
2. Sube **el contenido de esta carpeta** (no la carpeta en sí):
   ```bash
   cd sitio
   git init
   git add .
   git commit -m "Portafolio inicial"
   git branch -M main
   git remote add origin https://github.com/TUUSUARIO/portafolio.git
   git push -u origin main
   ```
3. En GitHub: **Settings → Pages → Source: Deploy from a branch → Branch: `main` / `(root)` → Save**.
4. En 1–2 minutos tu sitio estará en `https://TUUSUARIO.github.io/portafolio/`.

Para actualizar: edita `data.js`, luego `git add . && git commit -m "Actualizar contenido" && git push`.

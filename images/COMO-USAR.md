# Cómo poner fotos propias en la galería

La galería de la demo está preparada para 8 fotos. Ahora mismo muestra placeholders genéricos de Unsplash; en cuanto pongas las fotos del salón con los nombres correctos en esta carpeta, **se sustituirán automáticamente** sin tocar nada de código.

## Pasos (5 minutos)

### 1. Consigue 8 fotos del salón

Si las fotos están en el Instagram del negocio, para cada una:
- Click en la foto para abrirla en grande
- Click derecho sobre la imagen → **"Guardar imagen como…"**
- Guárdala en esta misma carpeta (`images/`)

> 💡 **Truco si no te deja**: usa la extensión "Downloader for Instagram" de Chrome (gratis) o el atajo F12 → pestaña Network → recarga → busca el archivo `.jpg` más grande y lo guardas.

### 2. Renombra las fotos así

| Nombre del archivo | Dónde aparece en la galería | Tipo de foto ideal |
|---|---|---|
| `trabajo-1.jpg` | **Foto grande (2×2) protagonista** | Tu mejor trabajo. Balayage o color llamativo. Vertical o cuadrada |
| `trabajo-2.jpg` | Pequeña arriba derecha | Tratamiento/cabello brillante |
| `trabajo-3.jpg` | Pequeña arriba derecha | Corte mujer u hombre |
| `trabajo-4.jpg` | Pequeña centro | Peinado de fiesta/recogido |
| `trabajo-5.jpg` | Pequeña centro | Maquillaje |
| `trabajo-6.jpg` | Pequeña abajo izquierda | Manicura o pedicura |
| `trabajo-7.jpg` | Pequeña abajo centro | Color creativo / mechas |
| `trabajo-8.jpg` | **Foto ancha (2×1) abajo** | Cabello largo o detalle bonito. Mejor horizontal |

### 3. Sube los cambios

Abre PowerShell en la carpeta del proyecto y ejecuta:

```powershell
git add images/
git commit -m "Añadir fotos del salón a la galería"
git push
```

En 1-2 minutos la web pública se actualiza:
👉 https://sheisdigitalab.github.io/alma-salinas-web/#galeria

## Importante

- **Formato**: JPG mejor que PNG (más ligero)
- **Tamaño ideal**: entre 800 y 1500 px de ancho. Si pesan más de 1 MB, conviene optimizarlas en [tinypng.com](https://tinypng.com/) (gratis, drag & drop)
- **Si te falta alguna foto**: borra la línea correspondiente en el HTML o deja el placeholder
- **Atribución**: usa solo fotos del propio negocio o con licencia libre, y quítalas del repo público si el cliente no contrata el proyecto.

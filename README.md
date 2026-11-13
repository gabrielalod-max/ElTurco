# Hunter & Angler

Sitio web estático de equipamiento de pesca y caza. Se puede abrir `E-Commerce Pesca y Caza.html` directamente en el navegador; requiere conexión a Internet para cargar Tailwind CSS, Google Fonts, Font Awesome y las fotos alojadas en Unsplash.

## Estructura

- `E-Commerce Pesca y Caza.html`: contenido y estructura de la página.
- `css/styles.css`: estilos propios, fondo principal y barra de desplazamiento.
- `js/tailwind-config.js`: colores y tipografías de Tailwind.
- `js/main.js`: productos, filtros, ficha de producto, carrito y menú móvil.

## Cambios comunes

### Nombre y logo

En el HTML, busca `HUNTER & ANGLER` para cambiar el nombre y `Outdoor & Technical Gear` para cambiar el texto secundario. El icono de brújula aparece en el encabezado y en el pie; puedes reemplazar cada `<i class="fa-solid fa-compass"></i>` por una imagen, por ejemplo `<img src="img/logo.png" alt="Nombre de la tienda">`. Guarda el archivo de imagen en una carpeta `img` junto al HTML.

### Fotos

- Foto de fondo del inicio: cambia la URL `url(...)` de `.bg-hero` en `css/styles.css`.
- Fotos de las categorías y de la sección “Sobre nosotros”: cambia el atributo `src` de cada `<img>` en el HTML.
- Fotos de los productos: cambia la propiedad `image` del producto correspondiente en `js/main.js`.

Puedes usar una URL completa o una ruta local, como `img/caña.jpg`.

### WhatsApp

Reemplaza `5491100000000` por el número real en formato internacional, sin `+`, espacios ni guiones. Actualiza los enlaces de WhatsApp del HTML (botón de asesoramiento, botón flotante) y el enlace que se genera para consultar un producto en `js/main.js`. El número visible en el pie de página también se modifica en el HTML.

### Productos, precios y stock

En `js/main.js`, cada objeto dentro de `products` contiene `title`, `category`, `subcat`, `price`, `oldPrice`, `rating`, `image`, `stock` y `specs`. Edita esos valores para actualizar o agregar productos. Si el precio o el stock todavía no están confirmados, puedes usar `null`: se mostrará “Consultar precio” o “Consultar disponibilidad” y el artículo no podrá añadirse al carrito hasta tener precio. Las categorías válidas usadas por los filtros son `pesca`, `caza`, `cuchillos` e `indumentaria`; las modalidades son `spinning`, `optica` y `supervivencia`.

### Colores y tipografías

Edita los colores y las fuentes de Tailwind en `js/tailwind-config.js`. Las fuentes cargadas desde Google Fonts se seleccionan en el HTML, dentro de los enlaces de Google Fonts.

## Nota sobre compras

El carrito es una demostración del lado del navegador. El botón “Finalizar compra” no procesa pagos ni envía pedidos a un sistema externo; para vender en producción hace falta integrar una pasarela de pago o un backend.

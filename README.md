# Portfolio — Martina Castellani

Sitio personal de una sola página para mostrar proyectos como estudiante de Ingeniería en Sistemas.

## Stack

- React + TypeScript + Vite
- Tailwind CSS v4
- Framer Motion (animaciones de scroll)

## Desarrollo

```bash
npm install
npm run dev
```

## Agregar un proyecto nuevo

Editar `src/data/projects.ts` y copiar un objeto existente del array `projects`, respetando la interfaz `Project`. No hace falta tocar ningún componente.

```ts
{
  id: "slug-unico",
  title: "Nombre del proyecto",
  category: "Plataforma Web" | "Prototipo Académico" | ...,
  year: "2026",
  description: "Qué problema resuelve y tu rol real.",
  role: "Tu rol concreto en el proyecto.",
  status: "Opcional: estado actual del proyecto.",
  stack: ["Tecnología 1", "Tecnología 2"],
  liveUrl: "https://...", // opcional
  repoUrl: "https://...", // opcional
  images: [], // rutas a capturas, opcional
  featured: false,
}
```

Solo un proyecto debería tener `featured: true` a la vez (va primero y más grande).

## Datos personales

Editar `src/data/profile.ts` para actualizar nombre, tagline, texto de "sobre mí" (no se renderiza actualmente, ver abajo), contacto y el stack agrupado por categoría.

Campos del objeto `profile`:

- `email`: se usa para armar el link de Gmail en Contacto (`https://mail.google.com/mail/?view=cm&fs=1&to=...`), no un `mailto:`.
- `phone`: solo dígitos, sin `0` ni `15` (ej. `"2344504300"`). Se usa para armar el link de WhatsApp (`https://wa.me/549<phone>`) y se muestra formateado como `+54 9 XXXX XXXXXX`. Asume número argentino; si cambia el país hay que ajustar el prefijo en `Contact.tsx`.
- `linkedinUrl`, `githubUrl`: opcionales — si están vacíos, el link correspondiente no se renderiza ni en el Hero ni en Contacto.
- `cvUrl`: ruta al PDF (ej. `"/cv.pdf"`, sirviéndose desde `public/cv.pdf`). El botón "Descargar CV" solo aparece si este campo no está vacío.
- `languages`: array de `{ name, level, value }`, donde `value` es de 0 a 4 y controla cuántos segmentos de la barra de nivel se rellenan en la sección Idiomas (dentro de Stack).

## Sección "Sobre mí"

El componente `About.tsx` sigue existiendo pero no se renderiza en `App.tsx` (se sacó del sitio y del `Nav`). Si se vuelve a agregar, mantener el copy genérico: no nombrar proyectos puntuales (ej. "MUV") fuera de sus propias project cards.

## Cursor personalizado

`src/components/Cursor.tsx` reemplaza el cursor del sistema en desktop por un anillo punteado con leve delay (spring) y un punto central, que se agranda y cambia de color al pasar sobre links, botones o project cards (`data-cursor-hover`). Se desactiva automáticamente en dispositivos táctiles vía `matchMedia("(pointer: coarse)")`.

## CV

El botón "Descargar CV" apunta a `public/cv.pdf`. Para reemplazarlo, pisar ese archivo con el PDF actualizado (mismo nombre y ruta).

## Deploy

Pensado para Vercel: framework preset "Vite", build command `npm run build`, output directory `dist`.

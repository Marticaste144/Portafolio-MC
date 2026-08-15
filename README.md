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

Editar `src/data/profile.ts` para actualizar nombre, tagline, texto de "sobre mí", email, links (LinkedIn/GitHub/CV) y el stack agrupado por categoría. `linkedinUrl`, `githubUrl` y `cvUrl` están vacíos por defecto — al completarlos aparecen automáticamente en el Hero y en Contacto.

## Deploy

Pensado para Vercel: framework preset "Vite", build command `npm run build`, output directory `dist`.

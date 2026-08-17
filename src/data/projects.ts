export interface Project {
  id: string;
  title: string;
  category: string;
  year: string;
  description: string;
  role: string;
  status?: string;
  stack: string[];
  liveUrl?: string;
  repoUrl?: string;
  images: string[];
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: "muv-gimnasia-postural",
    title: "MUV Gimnasia Postural",
    category: "Plataforma Web / Producción",
    year: "2025–2026",
    description:
      "Plataforma web para la gestión de turnos de clases de gimnasia postural, con pagos integrados vía Mercado Pago —webhook funcionando en producción, con pagos reales confirmados— y notificaciones automáticas por email a través de Resend. Incluye generación de reportes en PDF, exportación de datos en CSV y un panel de administración para gestionar alumnos y clases. Desplegada en producción con dominio propio, sobre Vercel y con Supabase como backend.",
    role: "Diseño, desarrollo full-stack, deploy y mantenimiento en producción.",
    status: "En producción, con dominio propio y pagos reales confirmados.",
    stack: ["Next.js", "TypeScript", "Supabase", "Mercado Pago API", "Resend", "Vercel"],
    liveUrl: undefined,
    repoUrl: undefined,
    images: [
      "/projects/muv/01-login.png",
      "/projects/muv/02-registro.png",
      "/projects/muv/03-inicio.png",
      "/projects/muv/04-mis-clases.png",
      "/projects/muv/05-mi-cuota.png",
      "/projects/muv/06-panel-profesor.png",
      "/projects/muv/07-profesor-mis-clases.png",
      "/projects/muv/08-admin-dashboard.png",
      "/projects/muv/09-admin-profesores.png",
      "/projects/muv/10-admin-clases.png",
    ],
    featured: true,
  },
  {
    id: "clinica-veterinaria-la-plata",
    title: "Clínica Veterinaria La Plata",
    category: "Prototipo Académico",
    year: "2026",
    description:
      "Prototipo navegable de sitio web para una veterinaria, desarrollado como proyecto académico siguiendo una metodología propia de documentación completa antes de programar. Sistema de diseño propio con paleta violeta/blanco/teal y tipografías Quicksand + Nunito.",
    role: "Diseño del sistema visual, arquitectura de componentes y desarrollo del sitio público.",
    stack: ["React", "TypeScript", "Vite", "React Router"],
    liveUrl: undefined,
    repoUrl: undefined,
    images: [],
    featured: false,
  },
];

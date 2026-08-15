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
      "Plataforma full-stack que diseñé y desarrollé por iniciativa propia, y que le ofrecí a una profesora de gimnasia postural real. Incluye gestión de turnos, pagos con Mercado Pago (webhook funcionando en producción), notificaciones por email, reportes en PDF, exportación CSV y panel de administración.",
    role: "Diseño, desarrollo full-stack, deploy y mantenimiento en producción — proyecto propio de punta a punta.",
    status: "En producción, con dominio propio y pagos reales confirmados.",
    stack: ["Next.js", "TypeScript", "Supabase", "Mercado Pago API", "Resend", "Vercel"],
    liveUrl: undefined,
    repoUrl: undefined,
    images: [],
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

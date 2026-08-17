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
    category: "Plataforma Web",
    year: "2026",
    description:
      "Sitio web para una clínica veterinaria, con sistema de diseño propio en paleta violeta/blanco/teal y tipografías Quicksand + Nunito. Incluye reserva de turnos, catálogo de servicios con precio y duración, y un pet shop con filtros y carrito. El panel de cliente permite gestionar fichas de mascotas —con evolución de peso, vacunas e historia clínica— y hacer seguimiento de turnos y pedidos, mientras que el panel de veterinario/a permite ver la agenda y cargar cada consulta con diagnóstico, receta y próximos controles.",
    role: "Diseño del sistema visual, arquitectura de componentes y desarrollo del sitio.",
    stack: ["React", "TypeScript", "Vite", "React Router"],
    liveUrl: undefined,
    repoUrl: undefined,
    images: [
      "/projects/veterinaria/01-inicio.png",
      "/projects/veterinaria/02-servicios.png",
      "/projects/veterinaria/03-pet-shop.png",
      "/projects/veterinaria/04-login.png",
      "/projects/veterinaria/05-dashboard-cliente.png",
      "/projects/veterinaria/06-mis-mascotas.png",
      "/projects/veterinaria/07-ficha-mascota.png",
      "/projects/veterinaria/08-mis-pedidos.png",
      "/projects/veterinaria/09-consulta-veterinario.png",
      "/projects/veterinaria/10-historia-clinica.png",
    ],
    featured: false,
  },
];

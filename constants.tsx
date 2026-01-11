
import { Service } from './types';

export const SERVICES_DATA: Service[] = [
  {
    id: 'whatsapp-agents',
    title: 'Agentes Personalizados en WhatsApp',
    shortDescription: 'Crea agentes inteligentes disponibles las 24 horas para atender a tus clientes y resolver sus dudas de forma automática.',
    fullDescription: 'Nuestros agentes personalizados en WhatsApp utilizan inteligencia artificial avanzada para atender a tus clientes las 24 horas del día, los 7 días de la semana. Automatiza respuestas, gestiona consultas frecuentes y mejora la experiencia del cliente sin intervención manual.',
    icon: 'WA',
    imageUrl: 'https://images.unsplash.com/photo-1611746872915-64382b5c76da?auto=format&fit=crop&q=80&w=1200',
    features: [
      'Atención al cliente 24/7 sin intervención humana',
      'Integración con ChatGPT y modelos LLM',
      'Automatización de flujos de venta',
      'Reportes de interacciones detallados'
    ]
  },
  {
    id: 'web-development',
    title: 'Creación de Páginas Web',
    shortDescription: 'Diseñamos y desarrollamos páginas web modernas, responsivas y optimizadas para tu negocio o proyecto personal.',
    fullDescription: 'Creamos experiencias digitales que no solo se ven increíbles, sino que están diseñadas para convertir visitantes en clientes. Utilizamos las últimas tecnologías como React, Tailwind CSS y Next.js para asegurar velocidad, seguridad y un SEO impecable.',
    icon: 'WEB',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200',
    features: [
      'Diseño UX/UI personalizado',
      'Optimización para dispositivos móviles',
      'Integración de pasarelas de pago',
      'Panel de administración intuitivo'
    ]
  },
  {
    id: 'process-automation',
    title: 'Automatización de Procesos',
    shortDescription: 'Optimiza tus operaciones eliminando tareas repetitivas y automatizando flujos de trabajo para aumentar la productividad.',
    fullDescription: 'Identificamos las tareas manuales y repetitivas que consumen el tiempo de tu equipo y las transformamos en flujos digitales automatizados. Desde la gestión de correos electrónicos hasta la sincronización de datos entre plataformas CRM e industriales.',
    icon: 'AUTO',
    imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1200',
    features: [
      'Automatización de flujos con IA',
      'Integración entre herramientas (Zapier, Make, APIs)',
      'Digitalización de documentos y reportes',
      'Reducción drástica de errores humanos'
    ]
  },
  {
    id: 'calendar-automation',
    title: 'Manejo de Calendarios Automatizados',
    shortDescription: 'Sistema inteligente que gestiona tus citas, reuniones y recordatorios sin intervención manual.',
    fullDescription: 'Sincronizamos tus calendarios con herramientas de IA para que la gestión de agendas sea autónoma. El sistema puede detectar conflictos, proponer horarios y enviar confirmaciones automáticas a tus clientes o equipo de trabajo.',
    icon: 'CAL',
    imageUrl: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&q=80&w=1200',
    features: [
      'Sincronización multi-plataforma',
      'Detección inteligente de disponibilidad',
      'Envío de recordatorios vía WhatsApp/Email',
      'Gestión de zonas horarias automática'
    ]
  }
];

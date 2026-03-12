// Definimos los tipos de tecnologías para tener autocompletado
export type TechStack = 'React' | 'TypeScript' | 'Tailwind' | 'Node.js' | 'Stripe' | 'PostgreSQL' | 'Python' | 'FastAPI';

export interface Project {
  id: string;
  title: string;
  slug: string;           // Para una posible ruta detallada: /project/yoin-travel
  description: string;     // Resumen corto (el "pitch")
  longDescription?: string; // Por si queremos un modal con más info
  tags: TechStack[];       // Lista de tecnologías usadas
  imageUrl: string;        // Ruta a la imagen en /assets
  githubUrl?: string;      // Opcional si es privado
  liveDemoUrl?: string;    // El link a Vercel/Netlify
  isFeatured: boolean;     // Para resaltar "Yoin-Travel" en el Hero
}

export interface SocialLink {
  platform: 'GitHub' | 'LinkedIn' | 'WhatsApp' | 'Email';
  url: string;
  iconName: string; // Nombre del icono de Lucide para renderizado dinámico
}
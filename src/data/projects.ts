import type { Project } from '../types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'Yoin-Travel',
    slug: 'yoin-travel',
    description: 'Plataforma full-stack de reserva de tours con pasarela de pagos integrada y panel de administración.',
    tags: ['React', 'TypeScript', 'Node.js', 'Stripe', 'PostgreSQL'],
    imageUrl: '/assets/yoin-travel-preview.png',
    githubUrl: 'https://github.com/RamonMartinez01',
    liveDemoUrl: 'https://yointravel.com',
    isFeatured: true,
  }
];
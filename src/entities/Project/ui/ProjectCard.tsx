// src/entities/Project/ui/ProjectCard.tsx
import { Link } from 'react-router-dom';
import { ArrowUpRight, Lock, Github } from 'lucide-react';
import type { Project } from '../model/types';
import { useDictionary } from '../../../shared/i18n/api/useDictionary'

interface ProjectCardProps {
    project: Project;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
    const {
        id,
        title,
        description,
        tags,
        imageUrl,
        repositories,
        isFeatured
    } = project;

    const { data: dictionary } = useDictionary();
    const texts = dictionary?.projectCard;

    // Ruta dinámica hacia la página de detalles
    const detailsUrl = `/projects/${id}`;

    return (
        // Tactilidad Web: Esquinas redondeadas (rounded-2xl), sombra base sutil, y elevación profunda en hover.
        <article className="group w-full max-w-110 flex flex-col bg-white rounded-2xl border border-[#EAEAE7] shadow-sm overflow-hidden transition-all duration-500 hover:shadow-xl hover:border-[#EAEAE7]">
            
            {/* Cabecera visual (Ahora envuelta en un Link interno) */}
            {imageUrl && (
                <Link
                    to={detailsUrl}
                    className="relative block w-full h-48 overflow-hidden bg-[#EAEAE7] group/image cursor-pointer"
                    aria-label={`Ver detalles arquitectónicos de ${title}`}
                >
                    <img
                        src={imageUrl}
                        alt={`Captura de pantalla del proyecto ${title}`}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover/image:scale-105"
                        loading="lazy"
                    />
                    
                    {/* Overlay: Etiqueta central y fondo oscurecido */}
                    <div className="absolute inset-0 bg-[#111111]/10 backdrop-blur-[1px] opacity-0 transition-opacity duration-300 group-hover/image:opacity-100 flex items-center justify-center">
                        <span className="bg-white text-[#111111] px-4 py-2 rounded-full font-sans font-bold text-[10px] md:text-xs uppercase tracking-widest translate-y-4 group-hover/image:translate-y-0 transition-all duration-300 shadow-sm">
                            {texts?.details}
                        </span>
                    </div>

                    {/* Overlay: Círculo con flecha en la esquina superior derecha */}
                    <div className="absolute top-4 right-4 bg-white text-[#111111] p-2 rounded-full shadow-md opacity-0 translate-y-2 group-hover/image:opacity-100 group-hover/image:translate-y-0 transition-all duration-300 delay-75">
                        <ArrowUpRight size={18} strokeWidth={2.5} />
                    </div>
                </Link>
            )}

            {/* Cuerpo del contenido - Padding ajustado: p-5 (móvil) / md:p-8 (escritorio) */}
            <div className="flex flex-col grow p-5 md:p-8">
                <header className="mb-4">
                    <div className="flex items-start justify-between gap-3">
                        {/* Título responsivo: text-xl (móvil) / md:text-2xl (escritorio) */}
                        <h3 className="text-xl md:text-2xl font-serif font-bold text-[#111111] leading-snug">
                            {title}
                        </h3>
                        {/* Sello de destacado: más compacto y con bordes suavizados */}
                        {isFeatured && texts && (
                            <span className="shrink-0 px-2 py-0.5 mt-1 rounded-md text-[9px] md:text-[10px] font-sans font-bold uppercase tracking-widest text-[#111111] bg-[#F7F7F5] border border-[#EAEAE7]">
                                {texts.featured}
                            </span>
                        )}
                    </div>
                </header>

                <p className="font-serif text-[#3A3835] text-sm md:text-base leading-relaxed mb-8 grow">
                    {description}
                </p>

                {/* Etiquetas de tecnologías (Radios suavizados) */}
                {tags && tags.length > 0 && (
                    <ul className="flex flex-wrap gap-2 mb-8" aria-label="Tecnologías utilizadas">
                        {tags.map((tag) => (
                            <li
                                key={tag}
                                className="px-2.5 py-1 text-[11px] md:text-xs rounded-md font-sans font-medium text-[#5A5855] bg-[#F7F7F5] border border-[#EAEAE7]"
                            >
                                {tag}
                            </li>
                        ))}
                    </ul>
                )}

                {/* Pie del componente: Enlaces */}
                <footer className="flex flex-wrap items-center gap-4 mt-auto pt-5 border-t border-[#EAEAE7]">
                    {repositories && repositories.length > 0 && repositories.map((repo, index) => {
                        
                        // Estado: Repositorio Privado
                        if (repo.isPrivate) {
                            return (
                                <span
                                    key={index}
                                    // Letra más pequeña (text-[10px]), color atenuado (/60), sin cursor de clic y sin hover
                                    className="text-[10px] md:text-[11px] font-sans font-semibold uppercase tracking-widest text-[#5A5855]/60 flex items-center gap-1.5 cursor-not-allowed select-none"
                                    title={dictionary?.projectDetailsPage?.privateRepoNotice || 'Repositorio Privado'}
                                >
                                    <Lock size={14} strokeWidth={2.5} />
                                    {repo.label}
                                </span>
                            );
                        }

                        // Estado: Repositorio Público (Normal)
                        return (
                            <a
                                key={index}
                                href={repo.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[11px] md:text-xs font-sans font-semibold uppercase tracking-widest text-[#5A5855] transition-colors hover:text-[#111111] flex items-center gap-1.5"
                            >
                                <Github size={14} strokeWidth={2.5} />
                                {repo.label}
                            </a>
                        );
                    })}
                    
                   {/* Botón Detalles */}
                    <Link
                        to={detailsUrl}
                        className="text-[11px] md:text-xs font-sans font-bold uppercase tracking-widest text-[#111111] transition-colors hover:text-[#5A5855] flex items-center gap-1 ml-auto group/demo"
                    >
                        {texts?.details}
                        <svg className="w-3.5 h-3.5 transition-transform group-hover/demo:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                    </Link>
                </footer>
            </div>
        </article>
    );
};
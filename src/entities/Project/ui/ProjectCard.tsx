// src/entities/Project/ui/ProjectCard.tsx

import type { Project } from '../model/types';
import { useDictionary } from '../../../shared/i18n/api/useDictionary'

interface ProjectCardProps {
    project: Project;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
    const {
        title,
        description,
        tags,
        imageUrl,
        repositories,
        liveDemoUrl,
        isFeatured
    } = project;

    const { data: dictionary } = useDictionary();
    const texts = dictionary?.projectCard;

    return (
        // Tactilidad Web: Esquinas redondeadas (rounded-2xl), sombra base sutil, y elevación profunda en hover.
        <article className="group w-full max-w-110 flex flex-col bg-white rounded-2xl border border-[#EAEAE7] shadow-sm overflow-hidden transition-all duration-500 hover:shadow-xl hover:border-[#EAEAE7]">
            
            {/* Cabecera visual */}
            {imageUrl && (
                liveDemoUrl ? (
                    <a
                        href={liveDemoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full h-48 overflow-hidden bg-[#EAEAE7] group/image"
                        aria-label={`Visitar demo de ${title}`}
                    >
                        <img
                            src={imageUrl}
                            alt={`Captura de pantalla del proyecto ${title}`}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover/image:scale-105"
                            loading="lazy"
                        />
                    </a>
                ) : (
                    <div className="w-full h-48 overflow-hidden bg-[#EAEAE7]">
                        <img
                            src={imageUrl}
                            alt={`Captura de pantalla del proyecto ${title}`}
                            className="w-full h-full object-cover"
                            loading="lazy"
                        />
                    </div>
                )
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
                    {repositories && repositories.length > 0 && repositories.map((repo, index) => (
                        <a
                            key={index}
                            href={repo.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[11px] md:text-xs font-sans font-semibold uppercase tracking-widest text-[#5A5855] transition-colors hover:text-[#111111] flex items-center gap-1.5"
                        >
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
                            {repo.label}
                        </a>
                    ))}
                    
                    {liveDemoUrl && texts && (
                        <a
                            href={liveDemoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[11px] md:text-xs font-sans font-bold uppercase tracking-widest text-[#111111] transition-colors hover:text-[#5A5855] flex items-center gap-1 ml-auto group/demo"
                        >
                            {texts.demo}
                            <svg className="w-3.5 h-3.5 transition-transform group-hover/demo:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                        </a>
                    )}
                </footer>
            </div>
        </article>
    );
};
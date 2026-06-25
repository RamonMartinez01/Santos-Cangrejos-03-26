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
        githubUrl, 
        liveDemoUrl, 
        isFeatured 
    } = project;

    // Consumimos el diccionario. 
    // Como la tarjeta se renderiza dentro del ProjectsBoard (que ya maneja el loading general),
    // podemos usar un optional chaining seguro (dictionary?)
    const { data: dictionary } = useDictionary();
    const texts = dictionary?.projectCard;

    return (
        <article className="flex flex-col h-full rounded-xl border border-slate-700/50 bg-slate-800/20 overflow-hidden transition-all duration-300 hover:border-slate-500/50 hover:bg-slate-800/40">
            {/* Cabecera visual (Opcional: solo si hay imagen) */}
            {imageUrl && (
                <div className="w-full h-48 overflow-hidden bg-slate-900/50">
                    <img 
                        src={imageUrl} 
                        alt={`Captura de pantalla del proyecto ${title}`} 
                        className="w-full h-full object-cover opacity-90 transition-opacity hover:opacity-100"
                        loading="lazy"
                    />
                </div>
            )}

            {/* Cuerpo del contenido */}
            <div className="flex flex-col flex-grow p-6">
                <header className="mb-4">
                    <div className="flex items-start justify-between gap-4">
                        <h3 className="text-xl font-semibold text-slate-100 leading-tight">
                            {title}
                        </h3>
                        {isFeatured && texts && (
                            <span className="shrink-0 px-2.5 py-1 text-xs font-medium text-[#9191E6] bg-[#9191E6]/10 rounded-full border border-[#9191E6]/20">
                                {/* Texto dinámico desde DB*/}
                                {texts.featured}
                            </span>
                        )}
                    </div>
                </header>

                <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
                    {description}
                </p>

                {/* Etiquetas de tecnologías */}
                {tags && tags.length > 0 && (
                    <ul className="flex flex-wrap gap-2 mb-6" aria-label="Tecnologías utilizadas">
                        {tags.map((tag) => (
                            <li 
                                key={tag} 
                                className="px-2.5 py-1 text-xs font-medium text-slate-300 bg-slate-700/50 rounded-md"
                            >
                                {tag}
                            </li>
                        ))}
                    </ul>
                )}

                {/* Pie del componente: Enlaces */}
                <footer className="flex items-center gap-4 mt-auto pt-4 border-t border-slate-700/50">
                    {githubUrl && texts && (
                        <a 
                            href={githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm font-medium text-slate-300 transition-colors hover:text-white flex items-center gap-1.5"
                        >
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
                            {/* Texto dinámico */}
                            {texts.code}
                        </a>
                    )}
                    {liveDemoUrl && texts && (
                        <a 
                            href={liveDemoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm font-medium text-[#9191E6] transition-colors hover:text-white flex items-center gap-1.5 ml-auto"
                        >
                            {/* Texto dinámico */}
                            {texts.demo}
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                        </a>
                    )}
                </footer>
            </div>
        </article>
    );
};
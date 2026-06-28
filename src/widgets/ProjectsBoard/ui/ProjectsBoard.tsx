// src/widgets/ProjectsBoard/ui/ProjectsBoard.tsx
import { useProjects } from '../../../entities/Project/api/useProjects';
import { ProjectCard } from '../../../entities/Project/ui/ProjectCard';
import { useDictionary } from '../../../shared/i18n/api/useDictionary';

export const ProjectsBoard = () => {
    // Invoca el hook 
    const { data: projects = [], isLoading, error } = useProjects();

    // Extrae el diccionario y localizamos nuestra sección
    const { data: dictionary } = useDictionary();
    const texts = dictionary?.projectsBoard;

    // Extrae el mensaje de error si existe
    const errorMessage = error instanceof Error ? error.message : null;

    return (
        <section id="projects" className="relative flex min-h-screen flex-col justify-center px-6 pt-20">
            {/* Encabezado del Widget */}
            <div className="mb-12">
                <h2 className="text-3xl font-bold text-slate-100 sm:text-4xl">
                    {texts?.title} <span className="text-[#9191E6]">{texts?.highlight}</span>
                </h2>
                <div className="mt-2 h-1 w-20 rounded-full bg-gradient-to-r from-[#9191E6] to-[#603C75]" />
                <p className="mt-4 max-w-2xl text-slate-400">
                   {texts?.description}
                </p>
            </div>

            {/* Manejo de Estados: Carga y Error */}
            {isLoading && (
                <div className="py-12 text-center text-slate-400 animate-pulse">
                    <p>{texts?.loading}</p>
                </div>
            )}

            {errorMessage && (
                <div className="py-8 px-6 rounded-xl border border-red-900/50 bg-red-900/20 text-red-200">
                    <p>{texts?.error} {errorMessage}</p>
                </div>
            )}

            {/* Grid Responsivo (Ensamblaje de Entidades) */}
            {!isLoading && !error && projects.length > 0 && (
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8 auto-rows-fr">
                    {projects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            )}

            {/* grid responsivo */}
            {!isLoading && !error && projects.length === 0 && (
                <div className="mt-8 rounded-xl border border-dashed border-slate-700 p-8 text-center bg-slate-800/10">
                    <p className="text-slate-400">
                        {texts?.emptyMessage} <br className="sm:hidden" />
                        <a href="#contact" className="font-semibold text-[#9191E6] hover:text-white transition-colors">
                            {texts?.availableCta}
                        </a>
                    </p>
                </div>
            )}
        </section>
    );
};
// src/widgets/ProjectsBoard/ui/ProjectsBoard.tsx
import { useProjects } from '../../../entities/Project/api/useProjects';
import { ProjectCard } from '../../../entities/Project/ui/ProjectCard';

export const ProjectsBoard = () => {
    // Invoca el hook 
    const { data: projects = [], isLoading, error } = useProjects();

    // Extrae el mensaje de error si existe
    const errorMessage = error instanceof Error ? error.message : null;


    return (
        <section id="projects" className="py-20">
            {/* Encabezado del Widget */}
            <div className="mb-12">
                <h2 className="text-3xl font-bold text-slate-100 sm:text-4xl">
                    Proyectos <span className="text-[#9191E6]">Destacados</span>
                </h2>
                <div className="mt-2 h-1 w-20 rounded-full bg-gradient-to-r from-[#9191E6] to-[#603C75]" />
                <p className="mt-4 max-w-2xl text-slate-400">
                    Una selección de mis trabajos más recientes, enfocados en resolver problemas 
                    reales con tecnologías modernas y arquitectura limpia.
                </p>
            </div>

            {/* Manejo de Estados: Carga y Error */}
            {isLoading && (
                <div className="py-12 text-center text-slate-400 animate-pulse">
                    <p>Cargando proyectos desde el servidor...</p>
                </div>
            )}

            {errorMessage && (
                <div className="py-8 px-6 rounded-xl border border-red-900/50 bg-red-900/20 text-red-200">
                    <p>Error al cargar el portafolio: {errorMessage}</p>
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

            {/* Manejo de Estado Vacío (nuestro famoso array vacío del backend) */}
            {!isLoading && !error && projects.length === 0 && (
                <div className="mt-8 rounded-xl border border-dashed border-slate-700 p-8 text-center bg-slate-800/10">
                    <p className="text-slate-400">
                        Aún no hay proyectos publicados en este idioma. <br className="sm:hidden" />
                        <a href="#contact" className="font-semibold text-[#9191E6] hover:text-white transition-colors">
                            Estoy disponible para nuevos desarrollos.
                        </a>
                    </p>
                </div>
            )}
        </section>
    );
};
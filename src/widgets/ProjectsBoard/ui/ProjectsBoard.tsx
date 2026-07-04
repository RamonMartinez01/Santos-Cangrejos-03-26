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
        // COMPRESIÓN LATERAL: px-4 en móvil para dar más aire a las tarjetas, md:px-8 en escritorio
        <section id="projects" className="relative flex min-h-screen flex-col justify-center px-4 md:px-8 pt-20">
            
            <div className="mx-auto w-full max-w-5xl">
            
                {/* Encabezado del Widget */}
                <div className="mb-10 md:mb-12 min-[800px]:ml-[15%]">
                    {/* Título en Serif, color tinta. El 'highlight' lo volvemos un acento sutil (itálico) */}
                    <h2 className="text-3xl font-serif font-bold text-[#111111] sm:text-4xl">
                        {texts?.title} <span className="italic font-normal text-[#5A5855]">{texts?.highlight}</span>
                    </h2>
                    {/* Línea divisoria estilo imprenta (Reemplaza al gradiente) */}
                    <div className="mt-4 h-[2px] w-12 bg-[#111111]" />
                    
                    <p className="mt-6 max-w-2xl font-serif text-[#3A3835] text-base md:text-lg leading-relaxed">
                        {texts?.description}
                    </p>
                </div>

                {/* Manejo de Estados: Carga (Estilo metadatos) */}
                {
                    isLoading && (
                        <div className="py-12 text-center animate-pulse">
                            <p className="font-sans text-xs font-bold uppercase tracking-widest text-[#5A5855]">{texts?.loading}</p>
                        </div>
                    )
                }

                {/* Manejo de Estados: Error (Estilo nota de corrección) */}
                {
                    errorMessage && (
                        <div className="py-6 px-6 border-l-4 border-[#111111] bg-[#EAEAE7]/50 text-[#111111]">
                            <p className="font-sans text-sm font-medium">{texts?.error} {errorMessage}</p>
                        </div>
                    )
                }

                {/* Grid Responsivo (Ensamblaje de Entidades) */}
                {!isLoading && !error && projects.length > 0 && (
                    // Ajuste de compresión: gap-6 en móviles, gap-10 en monitores grandes
                    <div className="flex flex-wrap justify-center items-stretch gap-6 md:gap-8 lg:gap-10">
                        {projects.map((project) => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </div>
                )}

                {/* Estado Vacío (Empty State estilo bloque de cita) */}
                {
                    !isLoading && !error && projects.length === 0 && (
                        <div className="mt-8 border border-[#EAEAE7] bg-white p-8 text-center shadow-sm">
                            <p className="font-serif text-[#3A3835]">
                                {texts?.emptyMessage} <br className="sm:hidden" />
                                <a href="#contact" className="mt-4 inline-block font-sans text-xs font-bold uppercase tracking-widest text-[#111111] transition-colors hover:text-[#5A5855] underline decoration-[#EAEAE7] underline-offset-4">
                                    {texts?.availableCta}
                                </a>
                            </p>
                        </div>
                    )
                }
            </div >
        </section >
    );
};
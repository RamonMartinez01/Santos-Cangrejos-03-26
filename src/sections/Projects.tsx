import { ProjectCard } from '../components/ui/ProjectCard';
import { projects } from '../data/projects'; // Aquí es donde vive Yoin-Travel

export const Projects = () => {
  return (
    <section id="projects" className="py-20">
      {/* Encabezado de la sección */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">
          Proyectos <span className="text-[#9191E6]">Destacados</span>
        </h2>
        <div className="mt-2 h-1 w-20 rounded-full bg-gradient-to-r from-[#9191E6] to-[#603C75]" />
        <p className="mt-4 max-w-2xl text-slate-400">
          Una selección de mis trabajos más recientes, enfocados en resolver problemas 
          reales con tecnologías modernas.
        </p>
      </div>

      {/* Grid Responsivo */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {/* Mensaje sutil si tienes pocos proyectos por ahora */}
      <div className="mt-16 rounded-xl border border-dashed border-[#555990]/30 p-8 text-center">
        <p className="text-sm text-slate-500">
          ¿Tienes una idea en mente? <br className="sm:hidden" />
          <a href="#contact" className="font-semibold text-[#9191E6] hover:underline">
            Estoy disponible para nuevos proyectos.
          </a>
        </p>
      </div>
    </section>
  );
};
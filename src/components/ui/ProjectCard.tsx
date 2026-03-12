import type { Project } from '../../types';
import { Github, ExternalLink, Zap } from 'lucide-react'; 

interface Props {
  project: Project;
}

export const ProjectCard = ({ project }: Props) => {
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-xl border border-[#555990]/30 bg-[#555990]/10 p-4 transition-all hover:border-[#9191E6]/50 hover:bg-[#555990]/20 sm:p-6">
      
      {/* Badge de "Destacado" si es Yoin-Travel */}
      {project.isFeatured && (
        <div className="absolute top-4 right-4 flex items-center gap-1 rounded-full bg-[#9191E6] px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
          <Zap size={12} fill="currentColor" />
          Featured
        </div>
      )}

      {/* Contenido de Texto */}
      <div className="flex flex-col gap-3">
        <h3 className="text-xl font-bold text-slate-100 group-hover:text-[#9191E6] transition-colors">
          {project.title}
        </h3>
        
        <p className="text-sm leading-relaxed text-slate-400">
          {project.description}
        </p>

        {/* Tags / Stack */}
        <div className="flex flex-wrap gap-2 pt-2">
          {project.tags.map((tag) => (
            <span 
              key={tag} 
              className="rounded-md border border-[#603C75] bg-[#603C75]/20 px-2 py-1 text-[11px] font-medium text-[#9191E6]"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Enlaces / Footer de la Card */}
      <div className="mt-6 flex items-center gap-4 border-t border-[#555990]/20 pt-4">
        {project.githubUrl && (
          <a 
            href={project.githubUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors"
          >
            <Github size={18} />
            <span>Mi GitHub</span>
          </a>
        )}
        
        {project.liveDemoUrl && (
          <a 
            href={project.liveDemoUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-semibold text-[#9191E6] hover:brightness-125 transition-all"
          >
            <ExternalLink size={18} />
            <span>Live Demo</span>
          </a>
        )}
      </div>
    </article>
  );
};
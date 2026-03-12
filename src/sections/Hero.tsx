import { ArrowRight, Terminal } from 'lucide-react';

export const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col justify-center px-6 pt-20"
    >
      {/* Decoración de fondo sutil (Opcional, para dar profundidad) */}
      <div className="absolute top-1/4 left-1/4 -z-10 h-64 w-64 rounded-full bg-[#603C75]/20 blur-[100px]" />
      <div className="absolute bottom-1/4 right-1/4 -z-10 h-64 w-64 rounded-full bg-[#9191E6]/10 blur-[100px]" />

      <div className="mx-auto max-w-5xl">
        {/* Badge de disponibilidad o rol */}
        <div className="mb-6 flex items-center gap-2 w-fit rounded-full border border-[#555990]/30 bg-[#555990]/10 px-4 py-1.5 text-xs font-medium text-[#9191E6]">
          <Terminal size={14} />
          <span>Full-Stack Web Developer</span>
        </div>

        {/* Título Principal con Gradiente */}
        <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-7xl">
          Construyo aplicaciones <br />
          <span className="bg-gradient-to-r from-[#9191E6] via-[#555990] to-[#603C75] bg-clip-text text-transparent">
            despliego soluciones.
          </span>
        </h1>

        {/* Descripción corta (Pitch) */}
        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-slate-400 sm:text-xl">
          En crecimiento para ser especialista en crear experiencias digitales fluidas con <span className="text-slate-200 font-medium">React.js y Next.js</span>. Y llevar las soluciones rapido a producción.<br/>
          Entusiasta en proyectos full-stack, con ecosistemas backedn ya sea con <span className="text-slate-200 font-medium">FastAPI + SQLAlchemy</span> o <span className="text-slate-200 font-medium">Node.js + Express + Sequelize</span>.
        </p>

        {/* Botones de Acción (CTAs) */}
        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
          <a
            href="#projects"
            className="group flex items-center justify-center gap-2 rounded-lg bg-[#9191E6] px-6 py-3 font-semibold text-white transition-all hover:bg-[#9191E6]/90 hover:shadow-[0_0_20px_rgba(145,145,230,0.3)]"
          >
            Ver mis proyectos
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </a>

          <a
            href="#contact"
            className="flex items-center justify-center rounded-lg border border-[#555990]/40 px-6 py-3 font-medium text-slate-300 transition-colors hover:bg-[#555990]/10 hover:text-white"
          >
            Hablemos
          </a>
        </div>
      </div>
    </section>
  );
};
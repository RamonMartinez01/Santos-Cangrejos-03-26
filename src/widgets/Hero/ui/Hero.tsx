// src/widgets/Hero/ui/Hero.tsx
import { ArrowRight, FileText, Terminal } from 'lucide-react';
import { useDictionary } from '../../../shared/i18n/api/useDictionary';
import { Link } from 'react-router-dom';

export const Hero = () => {
    const { data: dictionary } = useDictionary();
    const texts = dictionary?.hero;

    return (
        // Compresión lateral unificada: px-4 en móvil, md:px-8 en escritorio
        <section id="home" className="relative flex min-h-screen flex-col justify-center px-4 md:px-8 pt-20">
            <div className="mx-auto max-w-4xl w-full">
                
                {/* Badge / Eyebrow - Responsivo */}
                <div className="mb-6 flex w-fit items-center gap-2 font-sans text-[10px] md:text-xs font-bold uppercase tracking-widest text-[#5A5855]">
                    <Terminal size={14} strokeWidth={1.5} />
                    <span>{texts?.roleBadge}</span>
                </div>

                {/* Título Principal - Escala fluida desde text-4xl hasta text-7xl */}
                <h1 className="mb-6 md:mb-8 block font-serif text-4xl sm:text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight text-[#111111]">
                    {texts?.titleLine1} <br />
                    <span className="text-[#111111]">
                        {texts?.titleLine2}
                    </span>
                </h1>

                {/* Pitch / Descripción - Ajuste de lectura móvil */}
                <p className="mb-10 md:mb-12 max-w-2xl font-serif text-base sm:text-lg md:text-xl leading-relaxed text-[#3A3835]">
                    {texts?.description}
                </p>

                {/* Botones de Acción - Tactilidad con rounded-xl y sombras */}
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                    <a
                        href="#projects"
                        className="group flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-[#111111] px-6 py-3.5 font-sans text-xs md:text-sm font-bold uppercase tracking-widest text-[#F7F7F5] shadow-sm transition-all hover:bg-[#3A3835] hover:shadow-md active:scale-[0.98]"
                    >
                        {texts?.ctaProjects}
                        <ArrowRight size={16} strokeWidth={2} className="transition-transform group-hover:translate-x-1" />
                    </a>

                    <a
                        href="#contact"
                        className="flex w-full sm:w-auto items-center justify-center rounded-xl border border-[#EAEAE7] bg-white px-6 py-3.5 font-sans text-xs md:text-sm font-bold uppercase tracking-widest text-[#111111] shadow-sm transition-all hover:border-[#111111]/20 hover:bg-[#F7F7F5] active:scale-[0.98]"
                    >
                        {texts?.ctaContact}
                    </a>
                </div>

                {/* Sección CV */}
                <div className="mt-12 flex flex-col gap-4">
                    <p className="font-sans text-[10px] font-bold uppercase tracking-widest text-[#5A5855]">
                        {texts?.downloadText}
                    </p>

                    <div className="flex flex-wrap gap-3">
                        <Link
                            to="/curriculum"
                            className="group flex items-center gap-2 rounded-lg border border-[#EAEAE7] bg-white px-5 py-2.5 font-sans text-[10px] md:text-xs font-bold uppercase tracking-widest text-[#111111] shadow-sm transition-all hover:border-[#111111]/20 hover:bg-[#F7F7F5]"
                        >
                            <FileText size={16} strokeWidth={1.5} className="text-[#5A5855] transition-colors group-hover:text-[#111111]" />
                            {texts?.viewCv}
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};
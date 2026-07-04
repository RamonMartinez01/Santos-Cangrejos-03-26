// src/widgets/Hero/ui/Hero.tsx

import { ArrowRight, FileText, Terminal } from 'lucide-react';
import { useDictionary } from '../../../shared/i18n/api/useDictionary';
import { Link } from 'react-router-dom';

export const Hero = () => {
    const { data: dictionary } = useDictionary();
    const texts = dictionary?.hero;


    return (
        <section id="home" className="relative flex min-h-screen flex-col justify-center px-6 pt-20">
            {/* Decoración de fondo 
            <div className="absolute top-1/4 left-1/4 -z-10 h-64 w-64 rounded-full bg-[#603C75]/20 blur-[100px]" />
            <div className="absolute bottom-1/4 right-1/4 -z-10 h-64 w-64 rounded-full bg-[#9191E6]/10 blur-[100px]" />
*/}
            <div className="mx-auto max-w-4xl w-full">
                {/* Badge */}
                <div className="mb-6 flex items-center gap-2 w-fit text-xs md:text-sm font-sans font-semibold tracking-widest uppercase text-[#5A5855]">
                    <Terminal size={14} />
                    <span>{texts?.roleBadge}</span>
                </div>

                {/* Título Principal */}
                <h1 className="mb-8 block text-5xl md:text-7xl font-serif font-bold tracking-tight leading-[1.1] text-[#111111]">
                    {texts?.titleLine1} <br />
                    <span className="text-[#111111]">
                        {texts?.titleLine2}
                    </span>
                </h1>

                {/* Pitch */}
                <p className="max-w-2xl text-lg md:text-xl font-serif leading-relaxed text-[#3A3835] mb-12">
                    {texts?.description}
                </p>

                {/* Botones de Acción */}
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                    <a
                        href="#projects"
                        className="group flex items-center justify-center gap-2 bg-[#111111] px-6 py-3 font-sans font-semibold text-[#F7F7F5] transition-colors hover:bg-[#3A3835]"
                    >
                        {texts?.ctaProjects}
                        <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                    </a>

                    <a
                        href="#contact"
                        className="flex items-center justify-center border border-[#111111] px-6 py-3 font-sans font-medium text-[#111111] transition-colors hover:bg-[#EAEAE7]"
                    >
                        {texts?.ctaContact}
                    </a>
                </div>

                {/* Sección CV */}
                <div className="mt-8 flex flex-col gap-4">
                    <p className="text-sm font-sans font-semibold uppercase tracking-wider text-[#5A5855]">
                        {texts?.downloadText}
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <Link
                            to="/curriculum"
                            className="flex items-center gap-2 border border-[#EAEAE7] bg-[#EAEAE7]/50 px-6 py-2.5 text-sm font-sans font-medium text-[#1C1A1A] transition-colors hover:border-[#111111] hover:bg-transparent"
                        >
                            <FileText size={18} />
                            {texts?.viewCv}
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};
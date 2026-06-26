// src/widgets/Hero/ui/Hero.tsx

import { ArrowRight, Download, FileText, Terminal } from 'lucide-react';
import { useDictionary } from '../../../shared/i18n/api/useDictionary';

export const Hero = () => {
    const { data: dictionary } = useDictionary();
    const texts = dictionary?.hero;

    return (
        <section id="home" className="relative flex min-h-screen flex-col justify-center px-6 pt-20">
            {/* Decoración de fondo */}
            <div className="absolute top-1/4 left-1/4 -z-10 h-64 w-64 rounded-full bg-[#603C75]/20 blur-[100px]" />
            <div className="absolute bottom-1/4 right-1/4 -z-10 h-64 w-64 rounded-full bg-[#9191E6]/10 blur-[100px]" />

            <div className="mx-auto max-w-5xl">
                {/* Badge */}
                <div className="mb-6 flex items-center gap-2 w-fit rounded-full border border-[#555990]/30 bg-[#555990]/10 px-4 py-1.5 text-xs font-medium text-[#9191E6]">
                    <Terminal size={14} />
                    <span>{texts?.roleBadge}</span>
                </div>

                {/* Título Principal */}
                <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-7xl">
                    {texts?.titleLine1} <br />
                    <span className="bg-gradient-to-r from-[#9191E6] via-[#555990] to-[#603C75] bg-clip-text text-transparent">
                        {texts?.titleLine2}
                    </span>
                </h1>

                {/* Pitch */}
                <p className="mt-8 max-w-2xl text-lg leading-relaxed text-slate-400 sm:text-xl">
                    {texts?.description}
                </p>

                {/* Botones de Acción */}
                <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
                    <a
                        href="#projects"
                        className="group flex items-center justify-center gap-2 rounded-lg bg-[#9191E6] px-6 py-3 font-semibold text-white transition-all hover:bg-[#9191E6]/90 hover:shadow-[0_0_20px_rgba(145,145,230,0.3)]"
                    >
                        {texts?.ctaProjects}
                        <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                    </a>

                    <a
                        href="#contact"
                        className="flex items-center justify-center rounded-lg border border-[#555990]/40 px-6 py-3 font-medium text-slate-300 transition-colors hover:bg-[#555990]/10 hover:text-white"
                    >
                        {texts?.ctaContact}
                    </a>
                </div>

                {/* Descarga de CV */}
                <div className="mt-8 flex flex-col gap-4">
                    <p className="text-sm font-semibold uppercase tracking-wider text-slate-500">
                        {texts?.downloadText}
                    </p>

                    <div className="flex flex-wrap gap-3">
                        <a
                            href="/Ramon-Martinez-CV26Esp.pdf"
                            download="CV_Ramon_Martinez_ES.pdf"
                            className="flex items-center gap-2 rounded-lg border border-[#555990]/40 bg-[#555990]/10 px-4 py-2 text-sm font-medium text-slate-200 transition-all hover:border-[#9191E6] hover:text-[#9191E6]"
                        >
                            <FileText size={18} />
                            {texts?.cvSpanish}
                            <Download size={14} className="opacity-50" />
                        </a>

                        <a
                            href="/Ramon-Martinez-CV26Eng.pdf"
                            download="CV_Ramon_Martinez_EN.pdf"
                            className="flex items-center gap-2 rounded-lg border border-[#555990]/40 bg-[#555990]/10 px-4 py-2 text-sm font-medium text-slate-200 transition-all hover:border-[#9191E6] hover:text-[#9191E6]"
                        >
                            <FileText size={18} />
                            {texts?.cvEnglish}
                            <Download size={14} className="opacity-50" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};
// src/widgets/ResumeExperience/ui/ResumeExperience.tsx
import { BookOpen, Briefcase, Code2, Globe, Microscope } from 'lucide-react';
import { useDictionary } from '../../../shared/i18n/api/useDictionary';

export const ResumeExperience = () => {
    const { data: dictionary } = useDictionary();
    const texts = dictionary?.resumeExperience;

    // Quitamos los colores hardcodeados de los íconos; el contenedor padre los teñirá.
    const experiences = [
        {
            id: 'freelance',
            title: texts?.job1Title,
            date: texts?.job1Date,
            description: texts?.job1Desc,
            icon: <Code2 size={16} strokeWidth={1.5} />
        },
        {
            id: 'tepozixtli',
            title: texts?.job2Title,
            date: texts?.job2Date,
            description: texts?.job2Desc,
            icon: <Globe size={16} strokeWidth={1.5} />
        },
        {
            id: 'stem',
            title: texts?.job3Title,
            date: texts?.job3Date,
            description: texts?.job3Desc,
            icon: <BookOpen size={16} strokeWidth={1.5} />
        },
        {
            id: 'biology',
            title: texts?.job4Title,
            date: texts?.job4Date,
            description: texts?.job4Desc,
            icon: <Microscope size={16} strokeWidth={1.5} />
        }
    ];

    return (
        <section className="mb-16">
            <h2 className="mb-10 flex items-center gap-3 text-2xl md:text-3xl font-serif font-bold text-[#111111]">
                <Briefcase className="text-[#111111]" size={24} strokeWidth={1.5} />
                {texts?.title}
            </h2>

            {/* Contenedor de la línea de tiempo: Línea fina y definida */}
            <div className="relative border-l border-[#111111]/20 ml-3 pl-8 space-y-12 md:space-y-16">
                
                {experiences.map((exp) => (
                    <div key={exp.id} className="relative group">
                        {/* Nodo de la línea de tiempo - Efecto de inversión de tinta al hacer hover */}
                        <div className="absolute left-[48.5px] flex h-8 w-8 items-center justify-center rounded-full border border-[#111111] bg-[#F7F7F5] text-[#111111] transition-colors duration-300 group-hover:bg-[#111111] group-hover:text-[#F7F7F5]">
                            {exp.icon}
                        </div>

                        {/* Contenido */}
                        <div className="mb-3 flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
                            <h3 className="text-xl md:text-2xl font-serif font-bold text-[#111111] leading-tight">
                                {exp.title}
                            </h3>
                            {/* Fecha estilo metadato tipográfico, sin fondos de colores */}
                            <span className="w-fit border-b border-[#111111] pb-0.5 text-[10px] md:text-xs font-sans font-bold uppercase tracking-widest text-[#5A5855]">
                                {exp.date}
                            </span>
                        </div>
                        
                        <p className="text-sm md:text-base font-serif leading-relaxed text-[#3A3835]">
                            {exp.description}
                        </p>
                    </div>
                ))}

            </div>
        </section>
    );
};
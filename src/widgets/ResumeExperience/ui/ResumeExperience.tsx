// src/widgets/ResumeExperience/ui/ResumeExperience.tsx
import { Briefcase, Code2, Globe, Microscope } from 'lucide-react';
import { useDictionary } from '../../../shared/i18n/api/useDictionary';

export const ResumeExperience = () => {
    const { data: dictionary } = useDictionary();
    const texts = dictionary?.resumeExperience;

    const experiences = [
        {
            id: 'freelance',
            title: texts?.job1Title,
            date: texts?.job1Date,
            description: texts?.job1Desc,
            icon: <Code2 size={16} className="text-[#9191E6]" />
        },
        {
            id: 'tepozixtli',
            title: texts?.job2Title,
            date: texts?.job2Date,
            description: texts?.job2Desc,
            icon: <Globe size={16} className="text-[#9191E6]" />
        },
        {
            id: 'biology',
            title: texts?.job3Title,
            date: texts?.job3Date,
            description: texts?.job3Desc,
            icon: <Microscope size={16} className="text-[#9191E6]" />
        }
    ];

    return (
        <section className="mb-16">
            <h2 className="mb-8 text-2xl font-bold text-white flex items-center gap-2">
                <Briefcase className="text-[#9191E6]" size={24} />
                {texts?.title}
            </h2>

            {/* Contenedor de la línea de tiempo */}
            <div className="relative border-l-2 border-[#555990]/30 ml-3 pl-8 space-y-12">
                
                {experiences.map((exp) => (
                    <div key={exp.id} className="relative">
                        {/* Nodo de la línea de tiempo */}
                        <div className="absolute -left-[41px] flex h-8 w-8 items-center justify-center rounded-full border-4 border-[#0F111A] bg-[#555990]/20">
                            {exp.icon}
                        </div>

                        {/* Contenido */}
                        <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                            <h3 className="text-xl font-bold text-slate-100">
                                {exp.title}
                            </h3>
                            <span className="w-fit rounded-full bg-[#555990]/20 px-3 py-1 text-xs font-semibold text-[#9191E6]">
                                {exp.date}
                            </span>
                        </div>
                        
                        <p className="mt-4 text-base leading-relaxed text-slate-400">
                            {exp.description}
                        </p>
                    </div>
                ))}

            </div>
        </section>
    );
};
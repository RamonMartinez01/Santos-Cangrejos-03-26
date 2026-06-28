// src/widgets/ResumeStack/ui/ResumeStack.tsx
import { Layout, Server, Database, Wrench } from 'lucide-react';
import { useDictionary } from '../../../shared/i18n/api/useDictionary';

export const ResumeStack = () => {
    const { data: dictionary } = useDictionary();
    const texts = dictionary?.resumeStack;

    // Las tecnologías son universales, no necesitan traducción
    const stackCategories = [
        {
            id: 'frontend',
            title: texts?.frontend,
            icon: <Layout className="text-[#9191E6]" size={20} />,
            skills: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Zustand']
        },
        {
            id: 'backend',
            title: texts?.backend,
            icon: <Server className="text-[#9191E6]" size={20} />,
            skills: ['Node.js', 'Express', 'FastAPI', 'Python', 'Go']
        },
        {
            id: 'database',
            title: texts?.database,
            icon: <Database className="text-[#9191E6]" size={20} />,
            skills: ['PostgreSQL', 'PostGIS', 'Docker', 'DigitalOcean', 'Linux (WSL2)']
        },
        {
            id: 'tools',
            title: texts?.tools,
            icon: <Wrench className="text-[#9191E6]" size={20} />,
            skills: ['Git & GitHub', 'REST APIs', 'Cloudinary', 'Stripe', 'FSD Architecture']
        }
    ];

    return (
        <section className="mb-16">
            <h2 className="mb-8 text-2xl font-bold text-white flex items-center gap-2">
                <span className="h-6 w-1 rounded-full bg-[#9191E6]"></span>
                {texts?.title}
            </h2>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                {stackCategories.map((category) => (
                    <div 
                        key={category.id} 
                        className="rounded-xl border border-[#555990]/20 bg-[#555990]/5 p-6 transition-all hover:border-[#9191E6]/30 hover:bg-[#555990]/10"
                    >
                        <div className="mb-4 flex items-center gap-3">
                            <div className="rounded-lg bg-[#555990]/20 p-2">
                                {category.icon}
                            </div>
                            <h3 className="text-lg font-semibold text-slate-200">
                                {category.title}
                            </h3>
                        </div>
                        
                        <div className="flex flex-wrap gap-2">
                            {category.skills.map((skill) => (
                                <span 
                                    key={skill} 
                                    className="rounded-md border border-[#555990]/40 bg-[#0F111A] px-3 py-1 text-sm font-medium text-slate-400"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};
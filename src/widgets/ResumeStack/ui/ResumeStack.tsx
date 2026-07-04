// src/widgets/ResumeStack/ui/ResumeStack.tsx
import { Layout, Server, Database, Wrench } from 'lucide-react';
import { useDictionary } from '../../../shared/i18n/api/useDictionary';

export const ResumeStack = () => {
    const { data: dictionary } = useDictionary();
    const texts = dictionary?.resumeStack;

    const stackCategories = [
        {
            id: 'frontend',
            title: texts?.frontend,
            icon: <Layout className="text-[#111111]" size={20} strokeWidth={1.5} />,
            skills: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Zustand']
        },
        {
            id: 'backend',
            title: texts?.backend,
            icon: <Server className="text-[#111111]" size={20} strokeWidth={1.5} />,
            skills: ['Node.js', 'Express', 'FastAPI', 'Python', 'Go']
        },
        {
            id: 'database',
            title: texts?.database,
            icon: <Database className="text-[#111111]" size={20} strokeWidth={1.5} />,
            skills: ['PostgreSQL', 'PostGIS', 'Docker', 'DigitalOcean', 'Linux (WSL2)']
        },
        {
            id: 'tools',
            title: texts?.tools,
            icon: <Wrench className="text-[#111111]" size={20} strokeWidth={1.5} />,
            skills: ['Git & GitHub', 'REST APIs', 'Cloudinary', 'Stripe', 'FSD Architecture']
        }
    ];

    return (
        <section className="mb-16">
            <h2 className="mb-10 flex items-center gap-3 text-2xl md:text-3xl font-serif font-bold text-[#111111]">
                <Wrench className="text-[#111111]" size={24} strokeWidth={1.5} />
                {texts?.title}
            </h2>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-8">
                {stackCategories.map((category) => (
                    <div 
                        key={category.id} 
                        className="rounded-2xl border border-[#EAEAE7] bg-white p-6 md:p-8 shadow-sm transition-all duration-300 hover:shadow-md hover:border-[#111111]/20"
                    >
                        <div className="mb-6 flex items-center gap-3 border-b border-[#EAEAE7] pb-4">
                            <div>
                                {category.icon}
                            </div>
                            <h3 className="font-sans text-sm md:text-base font-bold uppercase tracking-widest text-[#111111]">
                                {category.title}
                            </h3>
                        </div>
                        
                        <div className="flex flex-wrap gap-2 md:gap-2.5">
                            {category.skills.map((skill) => (
                                <span 
                                    key={skill} 
                                    className="rounded-md border border-[#EAEAE7] bg-[#F7F7F5] px-3 py-1.5 font-sans text-xs font-medium text-[#5A5855]"
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
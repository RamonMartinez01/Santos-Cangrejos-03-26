// src/pages/ProjectDetails/ui/ProjectDetailsPage.tsx

import { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Github, Server, Container, Database } from 'lucide-react';
import { useDictionary } from '../../../shared/i18n/api/useDictionary';
import { useProject } from '../../../entities/Project/api/useProject';
import { MermaidDiagram } from '../../../shared/ui/MermaidDiagram';


export const ProjectDetailsPage = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();

    // 1. Consumo estricto de textos estáticos
    const { data: dictionary } = useDictionary();
    const texts = dictionary?.projectDetailsPage;

    // 2. Consumimos nuestro nuevo custom hook
    const { data: project, isLoading, error } = useProject(id);

    // Scroll to top al montar o cambiar de proyecto
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    // Renderizado del estado de carga (Delegado a TanStack Query)
    if (isLoading) {
        return (
            <div className="flex min-h-screen items-center justify-center bg-[#F7F7F5]">
                <p className="text-[#5A5855] font-sans font-semibold uppercase tracking-widest animate-pulse">
                    {texts?.loading || 'Cargando...'}
                </p>
            </div>
        );
    }

    // Renderizado del estado de error (Delegado a TanStack Query)
    if (error || !project) {
        return (
            <div className="flex min-h-screen flex-col items-center justify-center bg-[#F7F7F5] gap-4">
                <p className="text-[#111111] font-serif text-lg">
                    {error ? (texts?.serverError || 'Error de servidor') : (texts?.notFound || 'No encontrado')}
                </p>
                <button onClick={() => navigate('/')} className="text-sm font-sans font-bold uppercase tracking-widest text-[#5A5855] underline hover:text-[#111111]">
                    {texts?.backToHome || 'Volver al inicio'}
                </button>
            </div>
        );
    }

    // Renderizado exitoso
    return (
        <main className="min-h-screen bg-[#F7F7F5] pb-20 pt-24 md:pt-32">
            <div className="mx-auto max-w-5xl px-4 md:px-8">

                <Link
                    to="/#projects"
                    className="inline-flex items-center gap-2 mb-8 md:mb-12 text-sm font-sans font-bold uppercase tracking-widest text-[#5A5855] transition-colors hover:text-[#111111] group"
                >
                    <ArrowLeft size={16} strokeWidth={2.5} className="transition-transform group-hover:-translate-x-1" />
                    {texts?.backToPortfolio || 'Volver al portafolio'}
                </Link>

                <header className="mb-16">
                    <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#111111] leading-tight mb-6">
                        {project.title}
                    </h1>
                    <p className="text-lg md:text-xl font-serif text-[#3A3835] leading-relaxed max-w-3xl mb-8">
                        {project.description}
                    </p>

                    <div className="flex flex-wrap items-center gap-4">
                        {project.liveDemoUrl && (
                            <a
                                href={project.liveDemoUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 rounded-xl bg-[#111111] px-6 py-3.5 font-sans text-sm font-bold uppercase tracking-widest text-[#F7F7F5] transition-all hover:bg-[#3A3835] active:scale-[0.98]"
                            >
                                {texts?.liveDemo || 'Live Demo'}
                                <ExternalLink size={16} strokeWidth={2} />
                            </a>
                        )}
                        {/* Mapeo dinámico de TODOS los repositorios */}
                        {project.repositories && project.repositories.map((repo, index) => {
                            // Si es privado, mostramos el mensaje amable del diccionario
                            if (repo.isPrivate) {
                                return (
                                    <div
                                        key={index}
                                        className="inline-flex items-center gap-2 rounded-xl bg-[#F7F7F5] border border-[#EAEAE7] px-6 py-3.5 font-sans text-sm font-bold uppercase tracking-widest text-[#5A5855] cursor-not-allowed opacity-80"
                                        title="Código fuente no disponible públicamente"
                                    >
                                        {/* Renderiza el label (ej: "Backend") y luego el aviso */}
                                        {repo.label}: {texts?.privateRepoNotice || 'Privado'}
                                    </div>
                                );
                            }

                            // Si es público, renderizamos el botón funcional
                            return (
                                <a
                                    key={index}
                                    href={repo.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 rounded-xl bg-white border border-[#EAEAE7] px-6 py-3.5 font-sans text-sm font-bold uppercase tracking-widest text-[#111111] transition-all hover:bg-[#F7F7F5] hover:border-[#111111] active:scale-[0.98]"
                                >
                                    {/* Usamos el label del dominio, no el estático del diccionario */}
                                    {repo.label}
                                    <Github size={16} strokeWidth={2} />
                                </a>
                            );
                        })}
                    </div>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-12">

                    <div className="lg:col-span-2 space-y-12">
                        <section className="bg-white p-6 md:p-8 rounded-2xl border border-[#EAEAE7] shadow-sm">
                            <h2 className="text-xl font-serif font-bold text-[#111111] mb-4 flex items-center gap-2">
                                <Server size={20} className="text-[#5A5855]" />
                                {texts?.architectureTitle || 'Arquitectura'}
                            </h2>
                            <p className="font-serif text-[#3A3835] leading-relaxed mb-6 whitespace-pre-wrap">
                                {project.architecture || texts?.architectureEmpty}
                            </p>

                            {/* Inyección del Sandbox Mermaid */}
                            {project.mermaidDiagram && (
                                <div className="mt-8">
                                    <MermaidDiagram chart={project.mermaidDiagram} />
                                </div>
                            )}
                        </section>

                        <section className="bg-white p-6 md:p-8 rounded-2xl border border-[#EAEAE7] shadow-sm">
                            <h2 className="text-xl font-serif font-bold text-[#111111] mb-4 flex items-center gap-2">
                                <Container size={20} className="text-[#5A5855]" />
                                {texts?.devopsTitle || 'DevOps'}
                            </h2>
                            <p className="font-serif text-[#3A3835] leading-relaxed whitespace-pre-wrap">
                                {project.devops || texts?.devopsEmpty}
                            </p>
                        </section>
                    </div>

                    <aside className="space-y-8">
                        <div className="bg-white p-6 md:p-8 rounded-2xl border border-[#EAEAE7] shadow-sm">
                            <h3 className="text-sm font-sans font-bold uppercase tracking-widest text-[#111111] mb-6 flex items-center gap-2">
                                <Database size={16} />
                                {texts?.stackTitle || 'Stack'}
                            </h3>
                            <ul className="flex flex-wrap gap-2">
                                {project.tags && project.tags.map((tag) => (
                                    <li
                                        key={tag}
                                        className="px-3 py-1.5 text-xs rounded-md font-sans font-medium text-[#5A5855] bg-[#F7F7F5] border border-[#EAEAE7]"
                                    >
                                        {tag}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </aside>

                </div>
            </div>
        </main>
    );
};
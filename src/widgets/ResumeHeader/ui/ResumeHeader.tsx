// src/widgets/ResumeHeader/ui/ResumeHeader.tsx
import { Download, Terminal } from 'lucide-react';
import { useDictionary } from '../../../shared/i18n/api/useDictionary';
import { useLocaleStore } from '../../../shared/store/useLocaleStore';

export const ResumeHeader = () => {
    const { data: dictionary } = useDictionary();
    const texts = dictionary?.resumeHeader;
    const locale = useLocaleStore((state) => state.locale);

    // Ruta dinámica para el archivo estático
    const pdfPath = locale === 'es' 
        ? '/Ramon-Martinez-CV26Esp.pdf' 
        : '/Ramon-Martinez-CV26Eng.pdf';

    return (
        // Línea base ancha (border-b-2) para sostener el peso tipográfico
        <header className="mb-12 border-b-2 border-[#111111] pb-8 md:pb-10">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
                
                {/* Información Principal */}
                <div>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold tracking-tight text-[#111111]">
                        Ramón <span className="font-normal italic text-[#3A3835]">Martínez</span>
                    </h1>
                    <div className="mt-4 flex items-center gap-2 text-[#5A5855]">
                        <Terminal size={16} strokeWidth={1.5} />
                        <span className="text-xs md:text-sm font-sans font-bold uppercase tracking-widest">
                            {texts?.role}
                        </span>
                    </div>
                </div>

                {/* Botón de Descarga Estática (Estilo contorno editorial) */}
                <div>
                    <a
                        href={pdfPath}
                        download
                        className="group flex w-fit items-center gap-2 border border-[#111111] bg-transparent px-5 py-2.5 text-xs font-sans font-bold uppercase tracking-widest text-[#111111] transition-colors hover:bg-[#111111] hover:text-[#F7F7F5]"
                    >
                        <Download size={16} strokeWidth={1.5} className="transition-transform group-hover:-translate-y-0.5" />
                        {texts?.downloadPdf}
                    </a>
                </div>

            </div>
        </header>
    );
};
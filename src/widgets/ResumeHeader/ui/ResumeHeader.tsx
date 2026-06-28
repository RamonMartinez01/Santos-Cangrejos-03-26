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
        <header className="mb-12 border-b border-[#555990]/20 pb-8">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
                
                {/* Información Principal */}
                <div>
                    <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
                        Ramón <span className="text-[#9191E6]">Martínez</span>
                    </h1>
                    <div className="mt-4 flex items-center gap-2 text-[#9191E6]">
                        <Terminal size={18} />
                        <span className="text-lg font-medium tracking-wide">
                            {texts?.role}
                        </span>
                    </div>
                </div>

                {/* Botón de Descarga Estática */}
                <div>
                    <a
                        href={pdfPath}
                        download
                        className="group flex items-center gap-2 rounded-lg border border-[#555990]/40 bg-[#555990]/10 px-4 py-2.5 text-sm font-medium text-slate-300 transition-all hover:border-[#9191E6] hover:bg-[#9191E6]/10 hover:text-[#9191E6]"
                    >
                        <Download size={16} className="transition-transform group-hover:-translate-y-0.5" />
                        {texts?.downloadPdf}
                    </a>
                </div>

            </div>
        </header>
    );
};
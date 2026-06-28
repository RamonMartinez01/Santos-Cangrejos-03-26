// src/features/LocaleSwitcher/ui/LocaleSwitcher.tsx
import { useLocaleStore } from '../../../shared/store/useLocaleStore'

export const LocaleSwitcher = () => {
    // Solo extraemos lo que necesitamos del store para evitar re-renders innecesarios
    const locale = useLocaleStore((state) => state.locale);
    const toggleLocale = useLocaleStore((state) => state.toggleLocale);

    return (
        <button
            onClick={toggleLocale}
            aria-label="Cambiar idioma / Change language"
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-slate-700/50 bg-slate-800/30 text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-700/50 hover:border-slate-600/50 transition-all duration-200"
        >
            <svg 
                className="w-4 h-4 text-[#9191E6]" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
            >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
            </svg>
            <span className="uppercase tracking-wider">
                {locale === 'es' ? 'ES' : 'EN'}
            </span>
        </button>
    );
};
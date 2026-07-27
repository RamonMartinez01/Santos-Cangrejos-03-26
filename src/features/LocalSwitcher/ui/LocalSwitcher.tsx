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
            className="group flex items-center gap-1.5 px-2 py-1 font-sans text-xs font-semibold uppercase tracking-widest text-[#5A5855] transition-colors hover:text-[#111111]"
        >
            <svg 
                className="w-4 h-4 transition-transform group-hover:scale-110" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
            >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
            </svg>
            <span className="mt-px">
                {locale === 'es' ? 'ES' : 'EN'}
            </span>
        </button>
    );
};
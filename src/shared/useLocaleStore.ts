// src/shared/store/useLocaleStore.ts

import { create } from 'zustand';
import { persist } from 'zustand/middleware';

// 1. Tipado estricto: Nuestro sistema solo entiende estos dos idiomas.
export type Locale = 'es' | 'en';

// 2. El contrato del estado
interface LocaleState {
    locale: Locale;
    setLocale: (newLocale: Locale) => void;
    toggleLocale: () => void; // Un helper muy útil para un botón de switch rápido
}

// 3. Creación del store con persistencia
export const useLocaleStore = create<LocaleState>()(
    persist(
        (set) => ({
            locale: 'es', // Estado inicial por defecto
            
            setLocale: (newLocale) => set({ locale: newLocale }),
            
            toggleLocale: () => set((state) => ({ 
                locale: state.locale === 'es' ? 'en' : 'es' 
            })),
        }),
        {
            // Este nombre es la llave con la que se guardará en el LocalStorage del navegador
            name: 'portfolio-locale-storage', 
        }
    )
);
// src/shared/i18n/api/useDictionary.ts

import { useQuery } from '@tanstack/react-query';
import { apiClient } from '../../api/apiClient';
import { useLocaleStore } from '../../useLocaleStore'

// 1. Tipado estricto del Payload que inyectamos en la base de datos
export interface UIDictionary {
    projectsBoard: {
        title: string;
        highlight: string;
        description: string;
        loading: string;
        error: string;
        emptyMessage: string;
        availableCta: string;
    };
    projectCard: {
        featured: string;
        code: string;
        demo: string;
    };
}

// El backend devuelve un objeto donde cada "section" es una llave
interface DictionaryResponse {
    'ui-dictionary'?: UIDictionary;
}

export const useDictionary = () => {
    const locale = useLocaleStore((state) => state.locale);

    return useQuery({
        queryKey: ['dictionary', locale],
        queryFn: async () => {
            const response = await apiClient.get<DictionaryResponse>(`/content/${locale}`);
            
            // Extrae directamente la sección de UI. 
            // Lanza un error si no viene, para que TanStack lo maneje.
            if (!response['ui-dictionary']) {
                throw new Error('Dictionary payload missing from server');
            }
            
            return response['ui-dictionary'];
        },
        // Optimización agresiva: El texto de la UI no cambia mientras el usuario navega.
        // Infinity le dice a TanStack Query que JAMÁS vuelva a hacer fetch 
        // a menos que cambie el idioma (la queryKey).
        staleTime: Infinity, 
    });
};
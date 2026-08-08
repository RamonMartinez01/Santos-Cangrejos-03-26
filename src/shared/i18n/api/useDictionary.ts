// src/shared/i18n/api/useDictionary.ts

import { useQuery } from '@tanstack/react-query';
import { apiClient } from '../../api/apiClient';
import { useLocaleStore } from '../../store/useLocaleStore'
import type { UIDictionary, DictionaryResponse } from '../model/types';


export const useDictionary = () => {
    const locale = useLocaleStore((state) => state.locale);

    return useQuery({
        queryKey: ['dictionary', locale],
        queryFn: async (): Promise<UIDictionary> => {
            const response = await apiClient.get<DictionaryResponse>(`/content/${locale}`);

            // Extrae directamente la sección de UI. 
            // Lanza un error si no viene, para que TanStack lo maneje.
            if (!response['ui-dictionary']) {
                throw new Error('Dictionary payload missing from server');
            }

            return response['ui-dictionary'];
        },
        

        staleTime: Infinity,
    });
};
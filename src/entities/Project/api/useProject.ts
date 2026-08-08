// src/entities/Project/api/useProject.ts

import { useQuery } from '@tanstack/react-query';
import { apiClient } from '../../../shared/api/apiClient';
import { useLocaleStore } from '../../../shared/store/useLocaleStore';
import type { ProjectDetails, ApiSingleResponse } from '../model/types';

/**
 * Función fetcher para un proyecto individual.
 */
const fetchProject = async (identifier: string, locale: string): Promise<ProjectDetails> => {
    const response = await apiClient.get<ApiSingleResponse>(`/projects/${identifier}?locale=${locale}`);
    return response.data;
};

/**
 * Custom Hook para consumir un proyecto específico por ID o Slug.
 */
export const useProject = (identifier: string | undefined) => {
    const locale = useLocaleStore((state) => state.locale);

    return useQuery({
        // Incluimos el 'identifier' en la llave para que TanStack cachee cada proyecto por separado
        queryKey: ['project', identifier, locale],
        queryFn: () => fetchProject(identifier!, locale),
        // Optimización: No ejecutar la petición si el identifier no existe (ej. error en el enrutador)
        enabled: !!identifier,
    });
};
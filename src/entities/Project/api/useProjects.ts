// src/entities/Project/api/useProjects.ts

import { useQuery } from '@tanstack/react-query';
import { apiClient } from '../../../shared/api/apiClient';
import type { Project } from '../model/types';

/**
 * Interfaz que refleja exactamente el envoltorio que nuestro 
 * backend de Node.js le pone a todas las respuestas exitosas.
 */
interface ApiResponse {
    status: string;
    results: number;
    data: Project[];
}

/**
 * Función fetcher (aislada para mantener el hook limpio).
 * Soporta la inyección del locale para nuestra arquitectura bilingüe.
 */
const fetchProjects = async (locale: string = 'es'): Promise<Project[]> => {
    // El apiClient lanza el error automáticamente si el status no es 2xx
    const response = await apiClient.get<ApiResponse>(`/api-resplandor/projects?locale=${locale}`);
    
    // Extraemos quirúrgicamente el array para que el frontend no tenga 
    // que lidiar con 'response.data.data'
    return response.data;
};

/**
 * Custom Hook principal para consumir los proyectos.
 */
export const useProjects = (locale: string = 'es') => {
    return useQuery({
        // La queryKey es el identificador único en la caché.
        // Al incluir 'locale', le decimos a TanStack que si el idioma cambia, 
        // debe tratarlo como una petición distinta y guardarla por separado.
        queryKey: ['projects', locale],
        queryFn: () => fetchProjects(locale),
    });
};
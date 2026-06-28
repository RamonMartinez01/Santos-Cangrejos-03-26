// src/shared/i18n/api/useDictionary.ts

import { useQuery } from '@tanstack/react-query';
import { apiClient } from '../../api/apiClient';
import { useLocaleStore } from '../../store/useLocaleStore'

// 1. Tipado estricto del Payload que inyectamos en la base de datos
export interface UIDictionary {
    hero: {
        roleBadge: string;
        titleLine1: string;
        titleLine2: string;
        description: string;
        ctaProjects: string;
        ctaContact: string;
        downloadText: string;
        cvSpanish: string;
        cvEnglish: string;
        viewCv: string;
    };
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
    navbar: {
        home: string;
        projects: string;
        contact: string;
        cvSpanish: string;
        cvEnglish: string;
    };
    contact: {
        titleStart: string;
        titleHighlight: string;
        titleEnd: string;
        description: string;
        whatsappLabel: string;
        whatsappText: string;
        whatsappMessage: string;
        emailLabel: string;
        emailCopied: string;
        emailFeedback: string;
        formNameLabel: string;
        formNamePlaceholder: string;
        formEmailLabel: string;
        formEmailPlaceholder: string;
        formMessageLabel: string;
        formMessagePlaceholder: string;
        formSubmit: string;
    };
    resumeHeader: {
        title: string;
        role: string;
        downloadPdf: string;
    };
    resumeStack: {
        title: string;
        frontend: string;
        backend: string;
        database: string;
        tools: string;
    };
    resumeExperience: {
        title: string;
        job1Title: string;
        job1Date: string;
        job1Desc: string;
        job2Title: string;
        job2Date: string;
        job2Desc: string;
        job3Title: string;
        job3Date: string;
        job3Desc: string;
        job4Title: string;
        job4Date: string;
        job4Desc: string;
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
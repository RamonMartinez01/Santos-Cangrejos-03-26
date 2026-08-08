// src/shared/i18n/model/types.ts

// src/shared/i18n/model/types.ts

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
        details: string;
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
    projectDetailsPage: {
        loading: string;
        serverError: string;
        notFound: string;
        backToHome: string;
        backToPortfolio: string;
        liveDemo: string;
        repository: string;
        architectureTitle: string;
        architectureEmpty: string;
        devopsTitle: string;
        devopsEmpty: string;
        stackTitle: string;
    };
}

export interface DictionaryResponse {
    'ui-dictionary'?: UIDictionary;
}
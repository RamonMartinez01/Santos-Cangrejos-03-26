// src/entities/Project/model/types.ts

export interface Project {
    id: string;
    title: string;
    slug: string;
    description: string;
    tags: string[];
    imageUrl: string | null;
    repositories?: {
        label: string;
        url: string;
        isPrivate?: boolean;
    }[];
    liveDemoUrl: string | null;
    isFeatured: boolean;
}

export interface ProjectDetails {
    id: string;
    title: string;
    slug: string;
    description: string;
    architecture: string;
    devops: string;
    mermaidDiagram: string;
    tags: string[];
    imageUrl: string;
    repositories: { label: string; url: string; isPrivate?: boolean }[];
    liveDemoUrl: string;
    isFeatured: boolean;
}

// Interfaz para la respuesta individual
export interface ApiSingleResponse {
    status: string;
    data: ProjectDetails;
}
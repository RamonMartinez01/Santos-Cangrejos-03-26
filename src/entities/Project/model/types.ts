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
    }[];
    liveDemoUrl: string | null;
    isFeatured: boolean;
}
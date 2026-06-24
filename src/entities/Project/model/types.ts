// src/entities/Project/model/types.ts

export interface Project {
    id: string;
    title: string;
    slug: string;
    description: string;
    tags: string[];
    imageUrl: string | null;
    githubUrl: string | null;
    liveDemoUrl: string | null;
    isFeatured: boolean;
}
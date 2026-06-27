// src/pages/Home/ui/Home.tsx
import { Hero } from '../../../widgets/Hero';
import { ProjectsBoard } from '../../../widgets/ProjectsBoard/ui/ProjectsBoard'; 
import { Contact } from '../../../widgets/Contact/ui/Contact';

export const Home = () => {
    return (
        <main>
            <Hero />
            <ProjectsBoard />
            <Contact />
        </main>
    );
};
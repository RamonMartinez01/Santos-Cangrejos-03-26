// src/pages/Curriculum/ui/Curriculum.tsx
import { ResumeExperience } from "../../../widgets/ResumeExperience";
import { ResumeHeader } from "../../../widgets/ResumeHeader";
import { ResumeStack } from "../../../widgets/ResumeStack";

export const Curriculum = () => {
    return (
        <main className="mx-auto max-w-4xl px-4 md:px-8 pt-32 pb-20">
            
            {/* COmponentes Widgets */}
            <ResumeHeader />
            <ResumeStack />
            <ResumeExperience />
        </main>
    );
};
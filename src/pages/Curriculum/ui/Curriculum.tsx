// src/pages/Curriculum/ui/Curriculum.tsx

export const Curriculum = () => {
    return (
        <div className="mx-auto max-w-4xl px-6 pt-32 pb-20">
            {/* Contenedor temporal para verificar visualmente que la ruta funciona */}
            <div className="rounded-2xl border border-dashed border-slate-700 p-12 text-center bg-slate-800/10">
                <h1 className="text-3xl font-bold text-slate-100 sm:text-4xl">
                    Curriculum <span className="text-[#9191E6]">Vitae</span>
                </h1>
                <p className="mt-4 text-slate-400 max-w-md mx-auto text-sm leading-relaxed">
                    Este espacio albergará los widgets modulares de nuestra trayectoria, 
                    experiencia y arsenal tecnológico bajo el estándar FSD.
                </p>
            </div>
        </div>
    );
};
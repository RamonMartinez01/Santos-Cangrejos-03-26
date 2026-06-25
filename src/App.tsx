// src/App.tsx
import { Navbar } from './components/layout/Navbar';
import { Hero } from './sections/Hero';
import { Contact } from './sections/Contact';
import { ProjectsBoard } from './widgets/ProjectsBoard';

function App() {
  return (
    /* Aplicamos el fondo oscuro y los colores base aquí */
    <div className="min-h-screen bg-[#0F111A] text-slate-200 selection:bg-[#9191E6]/30">
      <Navbar />
      
      <main>
        <Hero />
        
        {/* Un contenedor para dar aire a las secciones de contenido */}
        <div className="max-w-5xl mx-auto px-6 space-y-32 pb-20">
          <ProjectsBoard />
          <Contact />
        </div>
      </main>

      <footer className="py-10 text-center text-sm text-slate-500 border-t border-[#555990]/10">
        © {new Date().getFullYear()} — Built with React & Vite
      </footer>
    </div>
  )
}

export default App;
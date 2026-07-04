// src/App.tsx
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Navbar } from '././widgets/Navbar';
import { Home } from './pages/Home';
import { Curriculum } from './pages/Curriculum';
import { ScrollManager } from './shared/utils/ScrollManager';

function App() {
  return (
    <BrowserRouter>

      <ScrollManager />

       {/* 
        El Lienzo Maestro:
        bg-[#F7F7F5]: Papel mate
        text-[#1C1A1A]: Tinta base
        selection:*: Contraste invertido elegante al seleccionar texto
      */}
      <div className="min-h-screen bg-[#F7F7F5] text-[#1C1A1A] font-sans selection:bg-[#111111] selection:text-[#F7F7F5]">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/curriculum" element={<Curriculum />} />
        </Routes>

        {/* 
          Footer:
          text-[#5A5855]: Tinta atenuada (Meta)
          border-[#EAEAE7]: Borde sutil color 'surface'
        */}
        <footer className="py-10 text-center text-sm text-[#5A5855] border-t border-[#EAEAE7]">
          © {new Date().getFullYear()} — Built with React & Vite
        </footer>
      </div>
    </BrowserRouter>
  )
}

export default App;
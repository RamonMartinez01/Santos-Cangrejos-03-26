// src/App.tsx
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Navbar } from '././widgets/Navbar';
import { Home } from './pages/Home';
import { Curriculum } from './pages/Curriculum';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#0F111A] font-sans selection:bg-[#9191E6]/30 selection:text-white text-slate-200">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/curriculum" element={<Curriculum />} />
         </Routes>

        <footer className="py-10 text-center text-sm text-slate-500 border-t border-[#555990]/10">
          © {new Date().getFullYear()} — Built with React & Vite
        </footer>
      </div>
    </BrowserRouter>
  )
}

export default App;
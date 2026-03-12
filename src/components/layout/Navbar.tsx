import { useState } from 'react';
import { Menu, X, Github, Linkedin } from 'lucide-react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Inicio', href: '#home' },
    { name: 'Proyectos', href: '#projects' },
    { name: 'Contacto', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-[#555990]/20 bg-[#0F111A]/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">

        {/* Logo / Nombre */}
        <a href="#home" className="text-xl font-bold tracking-tighter text-[#9191E6] hover:brightness-110">
          Ramón<span className="text-slate-100">.</span>Martínez
        </a>

        {/* Iconos de Redes Sociales en Desktop */}
        <div className="hidden items-center gap-3 md:flex">
          {/* Botón GitHub */}
          <a
            href="https://github.com/RamonMartinez01"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-[#555990]/20 p-2 text-slate-300 hover:bg-[#9191E6]/20 hover:text-[#9191E6] transition-all"
            title="Visitar mi GitHub"
          >
            <Github size={20} />
          </a>

          {/* Botón LinkedIn */}
          <a
            href="https://www.linkedin.com/in/ramon-martinez-full-stack-developer/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-[#555990]/20 p-2 text-slate-300 hover:bg-[#9191E6]/20 hover:text-[#9191E6] transition-all"
            title="Visitar mi LinkedIn"
          >
            <Linkedin size={20} />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="text-slate-100 md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="absolute w-full border-b border-[#555990]/20 bg-[#0F111A] px-6 py-6 md:hidden">
          <div className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium text-slate-300"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};
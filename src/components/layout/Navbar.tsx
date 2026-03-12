import { useEffect, useRef, useState } from 'react';
import { Menu, X, Github, Linkedin, FileText, Download } from 'lucide-react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Crea referencia al elemento nav para saber si el clic fue "adentro" o "afuera"
  const navRef = useRef<HTMLElement>(null);

  const navLinks = [
    { name: 'Inicio', href: '#home' },
    { name: 'Proyectos', href: '#projects' },
    { name: 'Contacto', href: '#contact' },
  ];

  // El useEffect se encarga de los "efectos secundarios" (los Event Listeners)
  useEffect(() => {
    // Función para cerrar si se hace clic fuera del menú
    const handleClickOutside = (event: MouseEvent) => {
      // Si el menú ESTÁ abierto, Y el clic NO fue dentro del <nav>...
      if (isOpen && navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    // Función para cerrar si se hace scroll
    const handleScroll = () => {
      if (isOpen) {
        setIsOpen(false);
      }
    };

    // Añadimos los listeners solo si el menú está abierto
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      window.addEventListener('scroll', handleScroll);
    }

    // Función de limpieza (Cleanup): MUY IMPORTANTE
    // React ejecuta esto al desmontar el componente o antes de volver a correr el efecto
    // Evita fugas de memoria (memory leaks)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isOpen]); // El efecto se vuelve a ejecutar cada vez que isOpen cambia de estado


  return (
    <nav ref={navRef} className="fixed top-0 z-50 w-full border-b border-[#555990]/20 bg-[#0F111A]/80 backdrop-blur-md">
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

          <div className="flex flex-col flex-wrap gap-3 mt-3">
            {/* Botón Español */}
            <a
              href="/Ramon-Martinez-CV26Esp.pdf"
              download="CV_Ramon_Martinez_ES.pdf"
              className="flex items-center gap-2 rounded-lg border border-[#555990]/40 bg-[#555990]/10 px-4 py-2 text-sm font-medium text-slate-200 transition-all hover:border-[#9191E6] hover:text-[#9191E6]"
            >
              <FileText size={18} />
              CV-Español
              <Download size={14} className="opacity-50" />
            </a>

            {/* Botón Inglés */}
            <a
              href="/Ramon-Martinez-CV26Eng.pdf"
              download="CV_Ramon_Martinez_EN.pdf"
              className="flex items-center gap-2 rounded-lg border border-[#555990]/40 bg-[#555990]/10 px-4 py-2 text-sm font-medium text-slate-200 transition-all hover:border-[#9191E6] hover:text-[#9191E6]"
            >
              <FileText size={18} />
              CV-English
              <Download size={14} className="opacity-50" />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};
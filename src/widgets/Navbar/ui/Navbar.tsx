// src/widgets/Navbar/ui/Navbar.tsx

import { useEffect, useRef, useState } from 'react';
import { Menu, X, Github, Linkedin, FileText, Download } from 'lucide-react';
// Ajusta la ruta de importación de tu feature y diccionario según la nueva ubicación
import { LocaleSwitcher } from '../../../features/LocalSwitcher';
import { useDictionary } from '../../../shared/i18n/api/useDictionary';

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navRef = useRef<HTMLElement>(null);

    // Consumimos el diccionario global
    const { data: dictionary } = useDictionary();
    const texts = dictionary?.navbar;

    // Los links ahora son dinámicos. Usamos un fallback a cadena vacía 
    // mientras la red carga el diccionario para evitar parpadeos extraños.
    const navLinks = [
        { name: texts?.home || '', href: '#home' },
        { name: texts?.projects || '', href: '#projects' },
        { name: texts?.contact || '', href: '#contact' },
    ];

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (isOpen && navRef.current && !navRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        const handleScroll = () => {
            if (isOpen) setIsOpen(false);
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
            window.addEventListener('scroll', handleScroll);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isOpen]);

    return (
        <nav ref={navRef} className="fixed top-0 z-50 w-full border-b border-[#555990]/20 bg-[#0F111A]/80 backdrop-blur-md">
            <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
                <a href="#home" className="text-xl font-bold tracking-tighter text-[#9191E6] hover:brightness-110">
                    Ramón<span className="text-slate-100">.</span>Martínez
                </a>

                <div className="hidden items-center gap-3 md:flex">
                    <a href="https://github.com/RamonMartinez01" target="_blank" rel="noopener noreferrer" className="rounded-full bg-[#555990]/20 p-2 text-slate-300 hover:bg-[#9191E6]/20 hover:text-[#9191E6] transition-all">
                        <Github size={20} />
                    </a>
                    <a href="https://www.linkedin.com/in/ramon-martinez-full-stack-developer/" target="_blank" rel="noopener noreferrer" className="rounded-full bg-[#555990]/20 p-2 text-slate-300 hover:bg-[#9191E6]/20 hover:text-[#9191E6] transition-all">
                        <Linkedin size={20} />
                    </a>
                    <div>
                        <LocaleSwitcher />
                    </div>
                </div>

                <button className="text-slate-100 md:hidden" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {isOpen && (
                <div className="absolute w-full border-b border-[#555990]/20 bg-[#0F111A] px-6 py-6 md:hidden">
                    <div className="flex flex-col gap-6">
                        {navLinks.map((link) => (
                            <a key={link.href} href={link.href} onClick={() => setIsOpen(false)} className="text-lg font-medium text-slate-300">
                                {link.name}
                            </a>
                        ))}
                    </div>

                    <div className="flex flex-col flex-wrap gap-3 mt-3">
                        <a href="/Ramon-Martinez-CV26Esp.pdf" download="CV_Ramon_Martinez_ES.pdf" className="flex items-center gap-2 rounded-lg border border-[#555990]/40 bg-[#555990]/10 px-4 py-2 text-sm font-medium text-slate-200 transition-all hover:border-[#9191E6] hover:text-[#9191E6]">
                            <FileText size={18} />
                            {texts?.cvSpanish}
                            <Download size={14} className="opacity-50" />
                        </a>
                        <a href="/Ramon-Martinez-CV26Eng.pdf" download="CV_Ramon_Martinez_EN.pdf" className="flex items-center gap-2 rounded-lg border border-[#555990]/40 bg-[#555990]/10 px-4 py-2 text-sm font-medium text-slate-200 transition-all hover:border-[#9191E6] hover:text-[#9191E6]">
                            <FileText size={18} />
                            {texts?.cvEnglish}
                            <Download size={14} className="opacity-50" />
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
};
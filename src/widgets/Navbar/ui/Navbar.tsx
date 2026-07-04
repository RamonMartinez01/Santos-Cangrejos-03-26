// src/widgets/Navbar/ui/Navbar.tsx
import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { Menu, X, Github, Linkedin } from 'lucide-react';
import { LocaleSwitcher } from '../../../features/LocalSwitcher';
import { useDictionary } from '../../../shared/i18n/api/useDictionary';

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navRef = useRef<HTMLElement>(null);

    // Consumimos el diccionario global
    const { data: dictionary } = useDictionary();
    const texts = dictionary?.navbar;

    //  las rutas son absolutas desde la raíz
    const navLinks = [
        { name: texts?.home || '', path: '/#home' },
        { name: texts?.projects || '', path: '/#projects' },
        { name: texts?.contact || '', path: '/#contact' },
        { name: 'CV', path: '/curriculum' } 
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
        <nav ref={navRef} className="fixed top-0 z-50 w-full border-b border-[#EAEAE7] bg-[#F7F7F5]/95 backdrop-blur-sm transition-all">

            <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-2.7 md:px-6 md:py-4">
                <Link to="/#home" className="text-lg md:text-xl font-serif font-bold tracking-tight text-[#111111] transition-opacity hover:opacity-70">
                    Ramón<span className="text-slate-100">.</span>Martínez
                </Link>
                <div className='flex flex-row items-center gap-4'>
                    <div>
                        <LocaleSwitcher />
                    </div>
                    <div className="hidden items-center gap-2 md:flex">
                        <a 
                            href="https://github.com/RamonMartinez01" 
                            target="_blank" rel="noopener noreferrer" 
                            className="p-2 text-[#5A5855] transition-colors hover:text-[#111111]"
                            aria-label="GitHub"
                        >
                            <Github size={20} />
                        </a>
                        <a 
                            href="https://www.linkedin.com/in/ramon-martinez-full-stack-developer/" 
                            target="_blank" rel="noopener noreferrer" 
                            className="p-2 text-[#5A5855] transition-colors hover:text-[#111111]"
                            aria-label="LinkedIn"
                        >
                            <Linkedin size={20} />
                        </a>

                    </div>

                    {/* Botón menú móvil */}
                    <button className="p-1 text-[#111111] md:hidden" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
                        {isOpen ? <X size={24} /> : <Menu size={24} strokeWidth={1.5} />}
                    </button>
                </div>
            </div>

            {/* Menú Desplegable Móvil */}
            {isOpen && (
                <div className="absolute w-full border-b border-[#EAEAE7] bg-[#F7F7F5] px-6 py-6 shadow-xl shadow-black/5 md:hidden animate-in fade-in slide-in-from-top-2 duration-200">
                    <div className="flex flex-col gap-6">
                        {navLinks.map((link) => (
                            // 4. Los enlaces del menú ahora son <Link>
                            <Link
                                key={link.path}
                                to={link.path}
                                onClick={() => setIsOpen(false)}
                                className="text-sm font-sans font-semibold uppercase tracking-widest text-[#5A5855] transition-colors hover:text-[#111111]"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                </div>
            )}
        </nav>
    );
};
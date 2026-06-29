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
        <nav ref={navRef} className="fixed top-0 z-50 w-full border-b border-[#555990]/20 bg-[#0F111A]/80 backdrop-blur-md">
            <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
                <Link to="/#home" className="text-xl font-bold tracking-tighter text-[#9191E6] hover:brightness-110">
                    Ramón<span className="text-slate-100">.</span>Martínez
                </Link>
                <div className='items-center gap-3 flex flex-row'>
                    <div>
                        <LocaleSwitcher />
                    </div>
                    <div className="hidden items-center gap-3 md:flex">
                        <a href="https://github.com/RamonMartinez01" target="_blank" rel="noopener noreferrer" className="rounded-full bg-[#555990]/20 p-2 text-slate-300 hover:bg-[#9191E6]/20 hover:text-[#9191E6] transition-all">
                            <Github size={20} />
                        </a>
                        <a href="https://www.linkedin.com/in/ramon-martinez-full-stack-developer/" target="_blank" rel="noopener noreferrer" className="rounded-full bg-[#555990]/20 p-2 text-slate-300 hover:bg-[#9191E6]/20 hover:text-[#9191E6] transition-all">
                            <Linkedin size={20} />
                        </a>

                    </div>

                    <button className="text-slate-100 md:hidden" onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {isOpen && (
                <div className="absolute w-full border-b border-[#555990]/20 bg-[#161a36] shadow-2xl shadow-black/60 px-6 py-6 md:hidden animate-in fade-in slide-in-from-top-2 duration-200">
                    <div className="flex flex-col gap-6">
                        {navLinks.map((link) => (
                            // 4. Los enlaces del menú ahora son <Link>
                            <Link
                                key={link.path}
                                to={link.path}
                                onClick={() => setIsOpen(false)}
                                className="text-lg font-medium text-slate-300 hover:text-[#9191E6] transition-colors"
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
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

    // Redes sociales
    const socialLinks = [
        { name: 'GitHub', url: 'https://github.com/RamonMartinez01', Icon: Github },
        { name: 'LinkedIn', url: 'https://www.linkedin.com/in/ramon-martinez-full-stack-developer/', Icon: Linkedin }
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
                    {/** Toggle para idioma */}
                    <div>
                        <LocaleSwitcher />
                    </div>
                    
                    {/* SEPARADOR VISUAL: Para dividir navegación de redes/herramientas */}
                    <div className="hidden h-4 w-px bg-[#EAEAE7] md:block" />

                    <div className="hidden items-center gap-2 md:flex md:gap-6">

                        {/* ENLACES DESKTOP: Visibles a partir de md */}
                        <div className="hidden items-center gap-6 md:flex">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    className="text-xs font-sans font-bold uppercase tracking-widest text-[#5A5855] transition-colors hover:text-[#111111]"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>

                        {/* SEPARADOR VISUAL: Para dividir navegación de redes/herramientas */}
                        <div className="hidden h-4 w-px bg-[#EAEAE7] md:block" />

                        {/* SOCIALS DESKTOP */}
                        <div className="hidden items-center gap-1 md:flex">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 text-[#5A5855] transition-colors hover:text-[#111111]"
                                    aria-label={social.name}
                                >
                                    <social.Icon size={20} />
                                </a>
                            ))}
                        </div>

                    </div>

                    {/* Botón menú móvil */}
                    <button className="p-1 text-[#111111] md:hidden" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
                        {isOpen ? <X size={24} /> : <Menu size={24} strokeWidth={1.5} />}
                    </button>
                </div>
            </div>

            {/* MENÚ MÓVIL */}
            {isOpen && (
                <div className="absolute w-full border-b border-[#EAEAE7] bg-[#F7F7F5] px-6 py-6 shadow-xl shadow-black/5 md:hidden animate-in fade-in slide-in-from-top-2 duration-200">
                    <div className="flex flex-col gap-6">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                onClick={() => setIsOpen(false)}
                                className="text-sm font-sans font-semibold uppercase tracking-widest text-[#5A5855] transition-colors hover:text-[#111111]"
                            >
                                {link.name}
                            </Link>
                        ))}

                        {/* SOCIALS MÓVIL (Con separador) */}
                        <div className="mt-2 flex items-center gap-4 border-t border-[#EAEAE7] pt-6">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 text-[#5A5855] transition-colors hover:text-[#111111]"
                                    aria-label={social.name}
                                >
                                    <social.Icon size={24} />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};
// src/sections/Contact.tsx
import { useState } from 'react';
import { Check, Mail, MessageCircle, Send } from 'lucide-react';

export const Contact = () => {
    const [copied, setCopied] = useState(false);
    const email = "martinezcjr1@gmail.com";

    // =============================================================
    // Configuración botón WhatsApp
    //==============================================================
    const phoneNumber = "526671040980"; // Tu número sin símbolos
    const message = `Hola!
Vi tu portafolio y me gustaría que tuvieramos una charla.
¿Estás libre ahora, o agendamos algo?`;

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    // =============================================================
    // Función para copiar info del botón de correo
    //==============================================================
    const copyToClipboard = () => {
        navigator.clipboard.writeText(email);
        setCopied(true);

        // El mensaje desaparece después de 2 segundos
        setTimeout(() => setCopied(false), 2500);
    };
    // ===============================================================

    return (
        <section id="contact" className="py-20">
            <div className="grid grid-cols-1 gap-12 md:grid-cols-2">

                {/* Columna Izquierda: Info y RRSS */}
                <div>
                    <h2 className="text-3xl font-bold text-white sm:text-4xl">
                        ¿Tienes un <span className="text-[#9191E6]">proyecto</span> en mente?
                    </h2>
                    <p className="mt-4 text-slate-400">
                        Estoy abierto a nuevas oportunidades de colaboración, proyectos freelance
                        o simplemente para charlar sobre desarrollo web y MLOps.
                    </p>

                    <div className="mt-8 space-y-4">
                        {/* WhatsApp Directo */}
                        <a
                            href={whatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-4 rounded-lg border border-[#555990]/20 bg-[#555990]/10 p-4 transition-all hover:border-[#9191E6]/50 hover:bg-[#555990]/20"
                        >
                            <div className="rounded-full bg-green-500/20 p-2 text-green-500">
                                <MessageCircle size={24} />
                            </div>
                            <div>
                                <p className="text-xs text-slate-500 uppercase font-bold">WhatsApp</p>
                                <p className="text-sm font-medium text-slate-200 underline">Encuétrame por WhatsApp</p>
                            </div>
                        </a>

                        {/* Botón de Copiar Email */}
                        <button
                            onClick={copyToClipboard}
                            className="relative flex w-full items-center gap-4 rounded-lg border border-[#555990]/20 bg-[#555990]/10 p-4 transition-all hover:border-[#9191E6]/50 hover:bg-[#555990]/20"
                        >
                            <div className="rounded-full bg-[#9191E6]/20 p-2 text-[#9191E6]">
                                {/* Cambia el icono si ya se copió */}
                                {copied ? <Check size={24} /> : <Mail size={24} />}
                            </div>

                            <div className="text-left">
                                <p className="text-xs font-bold uppercase text-slate-500">
                                    {copied ? '¡Listo!' : 'Email'}
                                </p>
                                <p className="text-sm font-medium text-slate-200">
                                    {copied ? 'Correo copiado al portapapeles' : email}
                                </p>
                            </div>

                            {/* Pequeño indicador visual tipo Tooltip (Opcional) */}
                            {copied && (
                                <span className="absolute -top-2 right-4 rounded bg-[#9191E6] px-2 py-1 text-[10px] font-bold text-white animate-bounce">
                                    ¡COPIADO!
                                </span>
                            )}
                        </button>
                    </div>
                </div>

                {/* Columna Derecha: Formulario Real */}
                <form
                    action="https://formspree.io/f/mqeyqojk" // URL dada por Formspree
                    method="POST"
                    className="flex flex-col gap-4 rounded-2xl bg-[#555990]/5 p-6 border border-[#555990]/20"
                >
                    <div>
                        <label className="text-xs font-bold uppercase text-slate-500 px-1">Nombre</label>
                        <input
                            type="text"
                            name="name" // <--- Importante para Formspree
                            required
                            placeholder="Tu nombre"
                            className="mt-1 w-full rounded-lg border border-[#555990]/30 bg-[#0F111A] px-4 py-3 text-sm text-slate-200 outline-none focus:border-[#9191E6] focus:ring-1 focus:ring-[#9191E6]/50"
                        />
                    </div>

                    {/* campo: Email (Indispensable para responder) */}
                    <div>
                        <label className="text-xs font-bold uppercase text-slate-500 px-1">Tu Correo Electrónico</label>
                        <input
                            type="email"
                            name="email" // <--- Importante para Formspree
                            required
                            placeholder="nombre@ejemplo.com"
                            className="mt-1 w-full rounded-lg border border-[#555990]/30 bg-[#0F111A] px-4 py-3 text-sm text-slate-200 outline-none focus:border-[#9191E6] focus:ring-1 focus:ring-[#9191E6]/50"
                        />
                    </div>

                    <div>
                        <label className="text-xs font-bold uppercase text-slate-500 px-1">Mensaje</label>
                        <textarea
                            name="message" // <--- Importante para Formspree
                            required
                            rows={4}
                            placeholder="¿En qué puedo ayudarte?"
                            className="mt-1 w-full rounded-lg border border-[#555990]/30 bg-[#0F111A] px-4 py-3 text-sm text-slate-200 outline-none focus:border-[#9191E6] focus:ring-1 focus:ring-[#9191E6]/50"
                        />
                    </div>

                    <button
                        type="submit"
                        className="mt-2 flex items-center justify-center gap-2 rounded-lg bg-[#9191E6] py-3 font-bold text-white transition-all hover:brightness-110 active:scale-95"
                    >
                        Enviar Mensaje
                        <Send size={18} />
                    </button>
                </form>

            </div>
        </section>
    );
};
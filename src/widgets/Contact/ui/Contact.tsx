// src/widgets/Contact/ui/Contact.tsx

import { useState } from 'react';
import { Check, Mail, MessageCircle, Send } from 'lucide-react';
import { useDictionary } from '../../../shared/i18n/api/useDictionary';

export const Contact = () => {
    const [copied, setCopied] = useState(false);
    const email = "martinezcjr1@gmail.com";
    const phoneNumber = "526671040980";

    const { data: dictionary } = useDictionary();
    const texts = dictionary?.contact;

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(texts?.whatsappMessage || '')}`;

    const copyToClipboard = () => {
        navigator.clipboard.writeText(email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
    };

    return (
        <section id="contact" className="relative flex min-h-screen flex-col justify-center px-4 md:px-8 pt-20">
            <div className="mx-auto flex w-full max-w-5xl flex-wrap justify-center gap-10 lg:gap-12">

                {/* Columna Izquierda: Info y RRSS */}
                <div className="w-full max-w-[440px]">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#111111]">
                        {texts?.titleStart} <span className="italic font-normal text-[#5A5855]">{texts?.titleHighlight}</span> {texts?.titleEnd}
                    </h2>
                    {/* Línea divisoria estilo imprenta */}
                    <div className="mt-4 h-[2px] w-12 bg-[#111111]" />
                    
                    <p className="mt-6 font-serif text-base md:text-lg text-[#3A3835] leading-relaxed">
                        {texts?.description}
                    </p>

                    <div className="mt-10 space-y-4">
                        {/* Tarjeta WhatsApp */}
                        <a
                            href={whatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex w-full items-center gap-4 rounded-2xl border border-[#EAEAE7] bg-white p-4 shadow-sm transition-all duration-300 hover:shadow-md hover:border-[#111111]/20"
                        >
                            <div className="rounded-full bg-[#F7F7F5] p-3 text-[#111111] transition-transform group-hover:scale-110">
                                <MessageCircle size={22} strokeWidth={1.5} />
                            </div>
                            <div>
                                <p className="text-[10px] md:text-xs font-sans font-bold uppercase tracking-widest text-[#5A5855]">{texts?.whatsappLabel}</p>
                                <p className="text-sm font-sans font-semibold text-[#111111]">{texts?.whatsappText}</p>
                            </div>
                        </a>

                        {/* Tarjeta Email */}
                        <button
                            onClick={copyToClipboard}
                            className="group relative flex w-full items-center gap-4 rounded-2xl border border-[#EAEAE7] bg-white p-4 shadow-sm transition-all duration-300 hover:shadow-md hover:border-[#111111]/20"
                        >
                            <div className="rounded-full bg-[#F7F7F5] p-3 text-[#111111] transition-transform group-hover:scale-110">
                                {copied ? <Check size={22} strokeWidth={1.5} /> : <Mail size={22} strokeWidth={1.5} />}
                            </div>

                            <div className="text-left">
                                <p className="text-[10px] md:text-xs font-sans font-bold uppercase tracking-widest text-[#5A5855]">
                                    {copied ? texts?.emailCopied : texts?.emailLabel}
                                </p>
                                <p className="text-sm font-sans font-semibold text-[#111111]">
                                    {copied ? texts?.emailFeedback : email}
                                </p>
                            </div>

                            {/* Tooltip de copiado (Estilo etiqueta oscura) */}
                            {copied && (
                                <span className="absolute -top-3 right-4 rounded-md bg-[#111111] px-2 py-1 text-[10px] font-sans font-bold tracking-widest uppercase text-white animate-in fade-in slide-in-from-bottom-2">
                                    {texts?.emailCopied}
                                </span>
                            )}
                        </button>
                    </div>
                </div>

                {/* Columna Derecha: Formulario */}
                <form
                    action="https://formspree.io/f/mqeyqojk"
                    method="POST"
                    className="flex w-full max-w-[440px] flex-col gap-5 rounded-2xl border border-[#EAEAE7] bg-white p-6 md:p-8 shadow-sm"
                >
                    <div>
                        <label className="text-[10px] md:text-xs font-sans font-bold uppercase tracking-widest text-[#5A5855] px-1">{texts?.formNameLabel}</label>
                        <input
                            type="text"
                            name="name"
                            required
                            placeholder={texts?.formNamePlaceholder}
                            className="mt-1.5 w-full rounded-lg border border-[#EAEAE7] bg-[#F7F7F5] px-4 py-3 text-sm font-sans text-[#111111] outline-none transition-colors placeholder:text-[#5A5855]/50 focus:border-[#111111] focus:bg-white focus:ring-1 focus:ring-[#111111]"
                        />
                    </div>

                    <div>
                        <label className="text-[10px] md:text-xs font-sans font-bold uppercase tracking-widest text-[#5A5855] px-1">{texts?.formEmailLabel}</label>
                        <input
                            type="email"
                            name="email"
                            required
                            placeholder={texts?.formEmailPlaceholder}
                            className="mt-1.5 w-full rounded-lg border border-[#EAEAE7] bg-[#F7F7F5] px-4 py-3 text-sm font-sans text-[#111111] outline-none transition-colors placeholder:text-[#5A5855]/50 focus:border-[#111111] focus:bg-white focus:ring-1 focus:ring-[#111111]"
                        />
                    </div>

                    <div>
                        <label className="text-[10px] md:text-xs font-sans font-bold uppercase tracking-widest text-[#5A5855] px-1">{texts?.formMessageLabel}</label>
                        <textarea
                            name="message"
                            required
                            rows={4}
                            placeholder={texts?.formMessagePlaceholder}
                            className="mt-1.5 w-full resize-none rounded-lg border border-[#EAEAE7] bg-[#F7F7F5] px-4 py-3 text-sm font-sans text-[#111111] outline-none transition-colors placeholder:text-[#5A5855]/50 focus:border-[#111111] focus:bg-white focus:ring-1 focus:ring-[#111111]"
                        />
                    </div>

                    <button
                        type="submit"
                        className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-[#111111] py-3.5 font-sans text-sm font-bold uppercase tracking-widest text-[#F7F7F5] transition-all hover:bg-[#3A3835] active:scale-[0.98]"
                    >
                        {texts?.formSubmit}
                        <Send size={16} strokeWidth={2} />
                    </button>
                </form>

            </div>
        </section>
    );
};
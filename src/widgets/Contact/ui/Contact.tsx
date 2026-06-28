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

    // Codificamos el mensaje dinámico del diccionario
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(texts?.whatsappMessage || '')}`;

    const copyToClipboard = () => {
        navigator.clipboard.writeText(email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
    };

    return (
        <section id="contact" className="relative flex min-h-screen flex-col justify-center px-6 pt-20">
            <div className="grid grid-cols-1 gap-12 md:grid-cols-2">

                {/* Columna Izquierda: Info y RRSS */}
                <div>
                    <h2 className="text-3xl font-bold text-white sm:text-4xl">
                        {texts?.titleStart} <span className="text-[#9191E6]">{texts?.titleHighlight}</span> {texts?.titleEnd}
                    </h2>
                    <p className="mt-4 text-slate-400">
                        {texts?.description}
                    </p>

                    <div className="mt-8 space-y-4">
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
                                <p className="text-xs text-slate-500 uppercase font-bold">{texts?.whatsappLabel}</p>
                                <p className="text-sm font-medium text-slate-200 underline">{texts?.whatsappText}</p>
                            </div>
                        </a>

                        <button
                            onClick={copyToClipboard}
                            className="relative flex w-full items-center gap-4 rounded-lg border border-[#555990]/20 bg-[#555990]/10 p-4 transition-all hover:border-[#9191E6]/50 hover:bg-[#555990]/20"
                        >
                            <div className="rounded-full bg-[#9191E6]/20 p-2 text-[#9191E6]">
                                {copied ? <Check size={24} /> : <Mail size={24} />}
                            </div>

                            <div className="text-left">
                                <p className="text-xs font-bold uppercase text-slate-500">
                                    {copied ? texts?.emailCopied : texts?.emailLabel}
                                </p>
                                <p className="text-sm font-medium text-slate-200">
                                    {copied ? texts?.emailFeedback : email}
                                </p>
                            </div>

                            {copied && (
                                <span className="absolute -top-2 right-4 rounded bg-[#9191E6] px-2 py-1 text-[10px] font-bold text-white animate-bounce">
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
                    className="flex flex-col gap-4 rounded-2xl bg-[#555990]/5 p-6 border border-[#555990]/20"
                >
                    <div>
                        <label className="text-xs font-bold uppercase text-slate-500 px-1">{texts?.formNameLabel}</label>
                        <input
                            type="text"
                            name="name"
                            required
                            placeholder={texts?.formNamePlaceholder}
                            className="mt-1 w-full rounded-lg border border-[#555990]/30 bg-[#0F111A] px-4 py-3 text-sm text-slate-200 outline-none focus:border-[#9191E6] focus:ring-1 focus:ring-[#9191E6]/50"
                        />
                    </div>

                    <div>
                        <label className="text-xs font-bold uppercase text-slate-500 px-1">{texts?.formEmailLabel}</label>
                        <input
                            type="email"
                            name="email"
                            required
                            placeholder={texts?.formEmailPlaceholder}
                            className="mt-1 w-full rounded-lg border border-[#555990]/30 bg-[#0F111A] px-4 py-3 text-sm text-slate-200 outline-none focus:border-[#9191E6] focus:ring-1 focus:ring-[#9191E6]/50"
                        />
                    </div>

                    <div>
                        <label className="text-xs font-bold uppercase text-slate-500 px-1">{texts?.formMessageLabel}</label>
                        <textarea
                            name="message"
                            required
                            rows={4}
                            placeholder={texts?.formMessagePlaceholder}
                            className="mt-1 w-full rounded-lg border border-[#555990]/30 bg-[#0F111A] px-4 py-3 text-sm text-slate-200 outline-none focus:border-[#9191E6] focus:ring-1 focus:ring-[#9191E6]/50"
                        />
                    </div>

                    <button
                        type="submit"
                        className="mt-2 flex items-center justify-center gap-2 rounded-lg bg-[#9191E6] py-3 font-bold text-white transition-all hover:brightness-110 active:scale-95"
                    >
                        {texts?.formSubmit}
                        <Send size={18} />
                    </button>
                </form>

            </div>
        </section>
    );
};
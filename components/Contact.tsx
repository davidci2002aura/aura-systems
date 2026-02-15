import React, { useState } from 'react';
import { Send, Mail, Phone, MapPin } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export const Contact: React.FC = () => {
    const { elementRef, isVisible } = useIntersectionObserver();
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSent, setIsSent] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate API call
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSent(true);
            setFormState({ name: '', email: '', message: '' });
            setTimeout(() => setIsSent(false), 5000);
        }, 1500);
    };

    return (
        <section id="kontakt" className="py-24 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div ref={elementRef} className={`grid grid-cols-1 lg:grid-cols-2 gap-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>

                    {/* Info Side */}
                    <div className="flex flex-col justify-center">
                        <div className="mb-8">
                            <h2 className="italic font-black text-glow">Bereit für den <br />nächsten Schritt?</h2>
                            <p className="text-zinc-500 text-lg leading-relaxed mb-8">
                                Lassen Sie uns besprechen, wie AURA Ihre Geschäftsprozesse revolutionieren kann. Vereinbaren Sie ein unverbindliches Erstgespräch.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-center space-x-4 text-zinc-400">
                                <div className="h-10 w-10 rounded-xl bg-[#0077ff]/10 flex items-center justify-center border border-[#0077ff]/20">
                                    <Mail className="h-5 w-5 text-[#0ea5e9]" />
                                </div>
                                <span className="text-[10px] font-black uppercase tracking-widest italic">contact@aura-systems.tech</span>
                            </div>
                        </div>
                    </div>

                    {/* Form Side */}
                    <div className="glass p-10 rounded-[3rem] relative overflow-hidden">
                        <h3 className="text-xl font-black text-white mb-8 uppercase italic tracking-tighter">Projektanfrage</h3>

                        <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                            <div>
                                <label htmlFor="name" className="block text-[10px] font-black tracking-widest uppercase text-zinc-500 mb-3 italic">Identify</label>
                                <input
                                    type="text"
                                    id="name"
                                    required
                                    value={formState.name}
                                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                                    className="w-full bg-white/[0.02] border border-white/10 rounded-xl px-4 py-4 text-white placeholder-zinc-700 focus:outline-none focus:border-[#0077ff]/50 transition-all cursor-none"
                                    placeholder="Ihr Name"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-[10px] font-black tracking-widest uppercase text-zinc-500 mb-3 italic">Connect</label>
                                <input
                                    type="email"
                                    id="email"
                                    required
                                    value={formState.email}
                                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                                    className="w-full bg-white/[0.02] border border-white/10 rounded-xl px-4 py-4 text-white placeholder-zinc-700 focus:outline-none focus:border-[#0077ff]/50 transition-all cursor-none"
                                    placeholder="name@firma.de"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-[10px] font-black tracking-widest uppercase text-zinc-500 mb-3 italic">Mission</label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    required
                                    value={formState.message}
                                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                                    className="w-full bg-white/[0.02] border border-white/10 rounded-xl px-4 py-4 text-white placeholder-zinc-700 focus:outline-none focus:border-[#0077ff]/50 transition-all resize-none cursor-none"
                                    placeholder="Wie können wir helfen?"
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting || isSent}
                                className={`w-full flex items-center justify-center py-5 px-8 border-none rounded-2xl text-[10px] font-black tracking-[0.4em] uppercase italic text-white transition-all duration-300 cursor-none ${isSent ? 'bg-green-600 shadow-[0_0_20px_rgba(22,163,74,0.3)]' : 'bg-[#0077ff] shadow-[0_0_30px_rgba(0,119,255,0.3)] hover:shadow-[0_0_50px_rgba(0,119,255,0.5)] active:scale-95'}`}
                            >
                                {isSubmitting ? (
                                    <span className="animate-pulse">Analyzing...</span>
                                ) : isSent ? (
                                    <span>Transmitted.</span>
                                ) : (
                                    <>
                                        Execute Handshake <Send className="ml-3 h-4 w-4" />
                                    </>
                                )}
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
};
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
                            <h2 className="text-3xl md:text-5xl font-black text-white mb-6 text-glow">Bereit für den <br />nächsten Schritt?</h2>
                            <p className="text-gray-400 text-lg leading-relaxed mb-8">
                                Lassen Sie uns besprechen, wie AURA Ihre Geschäftsprozesse revolutionieren kann. Vereinbaren Sie ein unverbindliches Erstgespräch mit unseren Experten.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-center space-x-4 text-gray-300">
                                <div className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                                    <Mail className="h-5 w-5 text-indigo-400" />
                                </div>
                                <span>contact@aura-ai.tech</span>
                            </div>
                            <div className="flex items-center space-x-4 text-gray-300">
                                <div className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                                    <Phone className="h-5 w-5 text-indigo-400" />
                                </div>
                                <span>+49 (0) 30 1234 5678</span>
                            </div>
                            <div className="flex items-center space-x-4 text-gray-300">
                                <div className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                                    <MapPin className="h-5 w-5 text-indigo-400" />
                                </div>
                                <span>Torstraße 1, 10119 Berlin</span>
                            </div>
                        </div>
                    </div>

                    {/* Form Side */}
                    <div className="bg-[#0a0a0a] p-8 md:p-10 rounded-3xl border border-white/10 shadow-2xl relative">
                        {/* Glow effect behind form */}
                        <div className="absolute -top-10 -right-10 w-32 h-32 bg-indigo-600/20 rounded-full blur-[60px] pointer-events-none"></div>

                        <h3 className="text-2xl font-bold text-white mb-6">Projektanfrage</h3>

                        <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    required
                                    value={formState.name}
                                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 input-glow transition-all"
                                    placeholder="Ihr Name"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    required
                                    value={formState.email}
                                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 input-glow transition-all"
                                    placeholder="name@firma.de"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Nachricht</label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    required
                                    value={formState.message}
                                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 input-glow transition-all resize-none"
                                    placeholder="Wie können wir helfen?"
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting || isSent}
                                className={`w-full flex items-center justify-center py-4 px-6 border border-transparent rounded-lg text-lg font-bold text-white transition-all duration-300 ${isSent ? 'bg-green-600 hover:bg-green-700' : 'bg-indigo-600 hover:bg-indigo-700 hover:shadow-[0_0_20px_rgba(99,102,241,0.4)]'}`}
                            >
                                {isSubmitting ? (
                                    <span className="animate-pulse">Sende Anfrage...</span>
                                ) : isSent ? (
                                    <span>Anfrage Gesendet!</span>
                                ) : (
                                    <>
                                        Absenden <Send className="ml-2 h-5 w-5" />
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
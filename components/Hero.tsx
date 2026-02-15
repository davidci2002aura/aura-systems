import React from 'react';
import { ArrowRight } from 'lucide-react';
import { AuraCore } from './AuraCore';
import { motion } from 'framer-motion';

export const Hero: React.FC = () => {
    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 px-6 overflow-hidden">
            {/* Scroll-Synced GPU Sequence */}
            <AuraCore />

            <div className="relative z-10 max-w-7xl w-full mx-auto flex flex-col items-center text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="mb-8"
                >
                    <span className="mobile-one-liner text-[10px] font-black uppercase tracking-[0.5em] text-[#0077ff] italic">
                        AURA SYSTEMS: THE UNIFIED ARCHITECT PROMPT
                    </span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="mb-10 max-w-5xl"
                >
                    Engineering <span className="gradient-text">Digital Sovereignty.</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1 }}
                    className="max-w-2xl mx-auto text-lg sm:text-xl text-zinc-500 mb-12 font-light leading-relaxed"
                >
                    Wir transformieren starre Prozesse in adaptive Systeme. Mit autonomen Agenten und maßgeschneiderter Backend-Architektur schaffen wir den Wettbewerbsvorteil von morgen.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full"
                >
                    <a href="#kontakt" className="w-full sm:w-auto px-10 py-5 bg-[#0077ff] hover:bg-[#0066dd] text-white rounded-2xl font-bold text-xl tracking-widest uppercase transition-all duration-300 shadow-[0_0_30px_rgba(0,119,255,0.3)] hover:shadow-[0_0_50px_rgba(0,119,255,0.5)] flex items-center justify-center group">
                        Audit Starten
                        <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
                    </a>
                    <a href="#architecture" className="w-full sm:w-auto px-10 py-5 bg-transparent border border-white/10 hover:bg-white/5 text-white rounded-2xl font-bold text-xl tracking-widest uppercase transition-all duration-300 flex items-center justify-center">
                        Technologie
                    </a>
                </motion.div>
            </div>

            {/* Bottom Status Bar - Elite Aesthetic */}
            <div className="absolute bottom-10 left-10 hidden lg:flex items-center space-x-6 text-[10px] font-black tracking-[0.3em] text-zinc-600 uppercase italic">
                <div className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-[#0077ff] rounded-full mr-2 animate-pulse" />
                    System Active
                </div>
                <div>Lat: 12ms</div>
                <div>Enc: AES-256</div>
            </div>
        </section>
    );
};
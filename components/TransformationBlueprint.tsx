import React from 'react';
import { motion } from 'framer-motion';

const steps = [
    { id: '01', title: 'System Audit', color: '#0077ff' },
    { id: '02', title: 'Architect Prompt', color: '#0ea5e9' },
    { id: '03', title: 'Core Integration', color: '#0077ff' },
    { id: '04', title: 'Autonomous Flow', color: '#0ea5e9' }
];

export const TransformationBlueprint: React.FC = () => {
    return (
        <section id="blueprint" className="py-32 px-6">
            <div className="max-w-7xl mx-auto glass p-12 md:p-20 rounded-[4rem] relative overflow-hidden">
                <div className="absolute inset-0 blueprint-grid opacity-20 pointer-events-none" />

                <div className="relative z-10 text-center mb-20">
                    <span className="text-[#0077ff] font-black text-[10px] tracking-[0.5em] uppercase mb-4 block italic">
                        Process Architecture
                    </span>
                    <h2 className="italic font-black">Transformation Blueprint.</h2>
                </div>

                <div className="relative z-10 grid md:grid-cols-4 gap-8">
                    {steps.map((step, idx) => (
                        <motion.div
                            key={step.id}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.2 }}
                            className="relative text-center"
                        >
                            <div
                                className="w-20 h-20 mx-auto mb-8 rounded-full border border-white/10 flex items-center justify-center text-[10px] font-black italic tracking-widest relative"
                                style={{ borderColor: step.color }}
                            >
                                <div className="absolute inset-0 bg-current opacity-5 blur-xl rounded-full" style={{ color: step.color }} />
                                {step.id}
                            </div>
                            <h4 className="text-sm font-black uppercase tracking-widest mb-4">{step.title}</h4>
                            <p className="text-[10px] text-zinc-500 italic max-w-[150px] mx-auto uppercase">
                                System Ready. Handshake confirmed.
                            </p>

                            {idx < steps.length - 1 && (
                                <div className="hidden md:block absolute top-10 left-[calc(50%+40px)] w-[calc(100%-80px)] h-px bg-gradient-to-r from-white/10 via-[#0077ff]/30 to-white/10" />
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

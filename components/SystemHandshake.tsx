import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const SystemHandshake: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
    const [showLogo, setShowLogo] = useState(false);

    useEffect(() => {
        // Initial 0.8s Black Screen
        const timer = setTimeout(() => setShowLogo(true), 800);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="fixed inset-0 bg-[#050505] z-[100] flex items-center justify-center pointer-events-none">
            <AnimatePresence>
                {showLogo && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        onAnimationComplete={() => {
                            // Wait 2.5s for logo draw then complete
                            setTimeout(onComplete, 2500);
                        }}
                    >
                        <svg width="200" height="200" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                            {/* AURA Logo Laser Draw */}
                            <circle cx="50" cy="50" r="45" stroke="#0077ff" strokeWidth="0.5" className="logo-draw opacity-20" />
                            <path
                                d="M30 70L50 30L70 70M40 55H60"
                                stroke="#0077ff"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="logo-draw"
                            />
                            <path
                                d="M20 20L80 20M20 80L80 80"
                                stroke="#0ea5e9"
                                strokeWidth="0.5"
                                strokeDasharray="2 2"
                                className="logo-draw opacity-50"
                            />
                        </svg>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

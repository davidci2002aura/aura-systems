import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export const CustomCursor: React.FC = () => {
    const dotRef = useRef<HTMLDivElement>(null);
    const ringRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const dot = dotRef.current;
        const ring = ringRef.current;
        if (!dot || !ring) return;

        // Optimized tracking with GSAP quickTo
        const xToDot = gsap.quickTo(dot, "x", { duration: 0.1, ease: "power3" });
        const yToDot = gsap.quickTo(dot, "y", { duration: 0.1, ease: "power3" });

        const xToRing = gsap.quickTo(ring, "x", { duration: 0.4, ease: "power3" });
        const yToRing = gsap.quickTo(ring, "y", { duration: 0.4, ease: "power3" });

        const handleMouseMove = (e: MouseEvent) => {
            const { clientX, clientY, target } = e;

            // Check for magnetic targets
            const magneticTarget = (target as HTMLElement)?.closest('button, a, .interactive-card');

            if (magneticTarget) {
                const rect = magneticTarget.getBoundingClientRect();
                const centerX = rect.left + rect.width / 2;
                const centerY = rect.top + rect.height / 2;

                // Snap to center with slight offset based on mouse proximity
                const distanceX = clientX - centerX;
                const distanceY = clientY - centerY;

                xToDot(centerX + distanceX * 0.2 - 3);
                yToDot(centerY + distanceY * 0.2 - 3);

                xToRing(centerX - 15);
                yToRing(centerY - 15);

                ring.style.width = `${rect.width + 10}px`;
                ring.style.height = `${rect.height + 10}px`;
                ring.style.borderRadius = getComputedStyle(magneticTarget).borderRadius;
            } else {
                xToDot(clientX - 3);
                yToDot(clientY - 3);

                xToRing(clientX - 15);
                yToRing(clientY - 15);

                ring.style.width = '30px';
                ring.style.height = '30px';
                ring.style.borderRadius = '50%';
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <>
            <div
                ref={dotRef}
                className="fixed top-0 left-0 w-1.5 h-1.5 bg-[#0ea5e9] rounded-full z-[1000] pointer-events-none shadow-[0_0_10px_#0077ff]"
            />
            <div
                ref={ringRef}
                className="fixed top-0 left-0 w-[30px] h-[30px] border border-[#0077ff]/30 z-[1000] pointer-events-none transition-[width,height,border-radius] duration-300"
            />
        </>
    );
};

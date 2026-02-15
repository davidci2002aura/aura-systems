import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface AuraCoreProps {
    frameCount?: number;
    framePath?: string;
}

export const AuraCore: React.FC<AuraCoreProps> = ({
    frameCount = 240,
    framePath = '/assets/sequence/frame_[000].jpg'
}) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const imagesRef = useRef<HTMLImageElement[]>([]);
    const sectionRef = useRef<HTMLDivElement>(null);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const isMobile = window.innerWidth < 1024;
        const loadStep = isMobile ? 2 : 1;

        // Preload Logic
        let loaded = 0;
        const targets = Math.ceil(frameCount / loadStep);

        for (let i = 1; i <= frameCount; i += loadStep) {
            const img = new Image();
            const frameNum = String(i).padStart(3, '0');
            img.src = framePath.replace('[000]', frameNum);
            img.onload = () => {
                loaded++;
                imagesRef.current[i] = img;
                if (loaded === targets) {
                    setIsLoaded(true);
                    renderFrame(1);
                }
            };
        }

        const renderFrame = (index: number) => {
            // Find nearest loaded frame
            const frameIndex = Math.floor(index / loadStep) * loadStep + 1;
            const img = imagesRef.current[frameIndex] || imagesRef.current[1];

            if (img && img.complete) {
                const cw = canvas.width;
                const ch = canvas.height;
                const imgAspect = img.width / img.height;
                const canvasAspect = cw / ch;

                let drawW, drawH;
                const scale = isMobile ? 1.0 : 1.2;

                if (canvasAspect > imgAspect) {
                    drawH = ch * scale;
                    drawW = drawH * imgAspect;
                } else {
                    drawW = cw * scale;
                    drawH = drawW / imgAspect;
                }

                const x = (cw - drawW) / 2;
                const y = (ch - drawH) / 2;

                ctx.clearRect(0, 0, cw, ch);
                ctx.drawImage(img, x, y, drawW, drawH);
            }
        };

        const resize = () => {
            const parent = canvas.parentElement;
            if (parent) {
                canvas.width = parent.clientWidth;
                canvas.height = parent.clientHeight;
                renderFrame(1);
            }
        };

        window.addEventListener('resize', resize);
        resize();

        // Parallax logic
        const parallax = { x: 0, y: 0, targetX: 0, targetY: 0 };

        const handleMouseMove = (e: MouseEvent) => {
            const { innerWidth, innerHeight } = window;
            parallax.targetX = (e.clientX / innerWidth - 0.5) * 50;
            parallax.targetY = (e.clientY / innerHeight - 0.5) * 50;
        };

        const handleGyro = (e: DeviceOrientationEvent) => {
            if (e.beta && e.gamma) {
                parallax.targetX = e.gamma * 2;
                parallax.targetY = (e.beta - 45) * 2;
            }
        };

        const animateParallax = () => {
            parallax.x += (parallax.targetX - parallax.x) * 0.1;
            parallax.y += (parallax.targetY - parallax.y) * 0.1;

            if (canvas) {
                canvas.style.transform = `translate3d(${parallax.x}px, ${parallax.y}px, 0) scale(1.1)`;
            }
            requestAnimationFrame(animateParallax);
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('deviceorientation', handleGyro);
        animateParallax();

        // Scroll Sync Logic
        const airObject = { frame: 1 };
        gsap.to(airObject, {
            frame: frameCount - 1,
            snap: "frame",
            ease: "none",
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top center",
                end: "bottom center",
                scrub: 1,
            },
            onUpdate: () => renderFrame(airObject.frame)
        });

        return () => {
            window.removeEventListener('resize', resize);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('deviceorientation', handleGyro);
            ScrollTrigger.getAll().forEach(t => t.kill());
        };
    }, [frameCount, framePath]);

    return (
        <div ref={sectionRef} className="absolute inset-0 z-0 pointer-events-none overflow-hidden select-none">
            <canvas
                ref={canvasRef}
                className={`w-full h-full object-cover transition-opacity duration-1000 origin-center will-change-transform ${isLoaded ? 'opacity-40' : 'opacity-0'}`}
                style={{ transform: 'translate3d(0,0,0)' }}
            />
        </div>
    );
};

import React, { useRef, useState, useEffect, useCallback } from 'react';
import { motion, useInView } from 'motion/react';
import './AnimatedList.css';

interface AnimatedItemProps {
    children: React.ReactNode;
    delay?: number;
    index: number;
    onMouseEnter: () => void;
    onClick: () => void;
}

const AnimatedItem: React.FC<AnimatedItemProps> = ({ children, delay = 0, index, onMouseEnter, onClick }) => {
    const ref = useRef(null);
    const inView = useInView(ref, { amount: 0.5, triggerOnce: true });

    return (
        <motion.div
            ref={ref}
            data-index={index}
            onMouseEnter={onMouseEnter}
            onClick={onClick}
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={inView ? { scale: 1, opacity: 1, y: 0 } : { scale: 0.9, opacity: 0, y: 20 }}
            transition={{ duration: 0.4, delay, ease: [0.23, 1, 0.32, 1] }}
            className="animated-item"
        >
            {children}
        </motion.div>
    );
};

interface AnimatedListProps {
    items?: React.ReactNode[];
    onItemSelect?: (item: React.ReactNode, index: number) => void;
    showGradients?: boolean;
    enableArrowNavigation?: boolean;
    className?: string;
    displayScrollbar?: boolean;
    initialSelectedIndex?: number;
}

const AnimatedList: React.FC<AnimatedListProps> = ({
    items = [],
    onItemSelect,
    showGradients = true,
    enableArrowNavigation = true,
    className = "",
    displayScrollbar = false,
    initialSelectedIndex = -1
}) => {
    const [selectedIndex, setSelectedIndex] = useState(initialSelectedIndex);
    const listRef = useRef<HTMLDivElement>(null);

    const handleSelect = useCallback((index: number) => {
        setSelectedIndex(index);
        if (onItemSelect) {
            onItemSelect(items[index], index);
        }
    }, [items, onItemSelect]);

    useEffect(() => {
        if (!enableArrowNavigation) return;

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'ArrowDown') {
                e.preventDefault();
                setSelectedIndex((prev) => (prev < items.length - 1 ? prev + 1 : prev));
            } else if (e.key === 'ArrowUp') {
                e.preventDefault();
                setSelectedIndex((prev) => (prev > 0 ? prev - 1 : prev));
            } else if (e.key === 'Enter' && selectedIndex !== -1) {
                handleSelect(selectedIndex);
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [items.length, selectedIndex, handleSelect, enableArrowNavigation]);

    useEffect(() => {
        if (selectedIndex !== -1 && listRef.current) {
            const selectedElement = listRef.current.querySelector(`[data-index="${selectedIndex}"]`) as HTMLElement;
            if (selectedElement) {
                selectedElement.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }
        }
    }, [selectedIndex]);

    return (
        <div className={`animated-list-container ${className}`}>
            <div
                ref={listRef}
                className={`animated-list-content ${displayScrollbar ? 'scrollbar-visible' : 'scrollbar-hidden'}`}
            >
                {items.map((item, index) => (
                    <AnimatedItem
                        key={index}
                        index={index}
                        delay={index * 0.1}
                        onMouseEnter={() => setSelectedIndex(index)}
                        onClick={() => handleSelect(index)}
                    >
                        <div className={`item-wrapper ${selectedIndex === index ? 'selected' : ''}`}>
                            {item}
                        </div>
                    </AnimatedItem>
                ))}
            </div>
            {showGradients && (
                <>
                    <div className="gradient-top"></div>
                    <div className="gradient-bottom"></div>
                </>
            )}
        </div>
    );
};

export default AnimatedList;

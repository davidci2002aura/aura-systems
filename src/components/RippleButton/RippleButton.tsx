import { useState, useCallback, ReactNode } from 'react';
import styles from './RippleButton.module.css';

interface Ripple {
  x: number;
  y: number;
  id: number;
}

interface RippleButtonProps {
  children: ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

const RippleButton: React.FC<RippleButtonProps> = ({
  children,
  className = '',
  href,
  onClick,
  type = 'button',
}) => {
  const [ripples, setRipples] = useState<Ripple[]>([]);

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const newRipple = { x, y, id: Date.now() };
      setRipples(prev => [...prev, newRipple]);

      setTimeout(() => {
        setRipples(prev => prev.filter(r => r.id !== newRipple.id));
      }, 600);

      if (onClick) {
        onClick();
      }
    },
    [onClick]
  );

  const rippleElements = ripples.map(ripple => (
    <span
      key={ripple.id}
      className={styles.ripple}
      style={{ left: ripple.x, top: ripple.y }}
    />
  ));

  if (href) {
    return (
      <a href={href} className={className} onClick={handleClick}>
        {rippleElements}
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={className} onClick={handleClick}>
      {rippleElements}
      {children}
    </button>
  );
};

export default RippleButton;

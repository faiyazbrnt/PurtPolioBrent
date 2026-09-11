import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

export const CustomCursor: React.FC = () => {
  const [isEnabled, setIsEnabled] = useState<boolean>(false);
  const [cursorText, setCursorText] = useState<string>('');
  const [isHoveredInteractive, setIsHoveredInteractive] = useState<boolean>(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth springs for fluid latency-free tracking
  const springConfig = { damping: 28, stiffness: 350, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Only enable custom cursor on fine pointer devices (desktop mouse, not touch)
    if (typeof window !== 'undefined' && window.matchMedia('(pointer: fine)').matches) {
      setIsEnabled(true);
    } else {
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      // Check target element to detect interactive states
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const isInteractive = Boolean(
        target.closest('button') ||
          target.closest('a') ||
          target.closest('input') ||
          target.closest('[role="button"]')
      );
      setIsHoveredInteractive(isInteractive);

      // Check if hovering a project card or visual area
      const projectEl = target.closest('[id*="project-"]');
      if (projectEl && !isInteractive) {
        setCursorText('VIEW');
      } else {
        setCursorText('');
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  if (!isEnabled) return null;

  return (
    <motion.div
      style={{
        x: cursorX,
        y: cursorY,
        translateX: '-50%',
        translateY: '-50%',
      }}
      className={`fixed top-0 left-0 pointer-events-none z-[9999] flex items-center justify-center rounded-full transition-[width,height,background-color,border-color] duration-200 ${
        cursorText
          ? 'w-16 h-16 bg-[#FB8B24] text-[#11151A] font-editorial-mono text-[10px] font-bold tracking-widest'
          : isHoveredInteractive
            ? 'w-8 h-8 border-2 border-[#FB8B24] bg-transparent'
            : 'w-3.5 h-3.5 bg-[#F5F3ED] mix-blend-difference'
      }`}
    >
      {cursorText && <span>{cursorText}</span>}
    </motion.div>
  );
};

import React, { useEffect, useState, useRef, useCallback } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

export const CustomCursor: React.FC = () => {
  const [isEnabled, setIsEnabled] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isInteractive, setIsInteractive] = useState<boolean>(false);
  const [isMouseDown, setIsMouseDown] = useState<boolean>(false);
  const [cursorText, setCursorText] = useState<string>('');

  // Exact pointer coordinates for zero-latency point tracking
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Ultra-responsive, snappy spring for the trailing halo (low mass, high stiffness = zero lag)
  const springConfig = { damping: 28, stiffness: 750, mass: 0.1 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // Check if device supports hover and fine pointer, and has desktop viewport
  const checkCapability = useCallback(() => {
    if (typeof window === 'undefined') return false;
    const hasFinePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    const isDesktopWidth = window.innerWidth >= 768;
    return hasFinePointer && isDesktopWidth;
  }, []);

  useEffect(() => {
    const updateCapability = () => {
      const capable = checkCapability();
      setIsEnabled(capable);
      if (!capable) {
        setIsVisible(false);
      }
    };

    updateCapability();

    // Responsive listeners for screen resize and media query changes (e.g. rotating device, DevTools responsive mode)
    window.addEventListener('resize', updateCapability);
    const mediaQuery = window.matchMedia('(hover: hover) and (pointer: fine)');
    mediaQuery.addEventListener?.('change', updateCapability);

    // Disable if touch event is fired (e.g. hybrid touchscreen laptop or mobile tap)
    const handleTouch = () => {
      setIsVisible(false);
      setIsEnabled(false);
    };
    window.addEventListener('touchstart', handleTouch, { passive: true });

    return () => {
      window.removeEventListener('resize', updateCapability);
      mediaQuery.removeEventListener?.('change', updateCapability);
      window.removeEventListener('touchstart', handleTouch);
    };
  }, [checkCapability]);

  useEffect(() => {
    if (!isEnabled) return;

    const handlePointerMove = (e: PointerEvent) => {
      // Ignore touch pointers
      if (e.pointerType === 'touch') {
        setIsVisible(false);
        return;
      }

      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (!target) {
        setIsInteractive(false);
        setCursorText('');
        return;
      }

      // Check if target or ancestor is interactive
      const interactiveEl = target.closest(
        'button, a, input, textarea, select, [role="button"], [role="link"], label, summary'
      );
      setIsInteractive(Boolean(interactiveEl));

      // Subtle contextual tag only on project banner/preview headers, not blocking text
      const projectCardHeader = target.closest('[data-cursor="view"]');
      if (projectCardHeader && !interactiveEl) {
        setCursorText('VIEW');
      } else {
        setCursorText('');
      }
    };

    const handlePointerDown = () => setIsMouseDown(true);
    const handlePointerUp = () => setIsMouseDown(false);

    const handleMouseLeave = (e: MouseEvent) => {
      if (!e.relatedTarget) {
        setIsVisible(false);
      }
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    window.addEventListener('pointerdown', handlePointerDown);
    window.addEventListener('pointerup', handlePointerUp);
    document.documentElement.addEventListener('mouseleave', handleMouseLeave);
    document.documentElement.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerdown', handlePointerDown);
      window.removeEventListener('pointerup', handlePointerUp);
      document.documentElement.removeEventListener('mouseleave', handleMouseLeave);
      document.documentElement.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isEnabled, isVisible, mouseX, mouseY]);

  if (!isEnabled || !isVisible) return null;

  return (
    <>
      {/* 1. Instant Precision Center Dot (Follows exact mouse coordinates with 0ms lag) */}
      <motion.div
        aria-hidden="true"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        className="custom-cursor fixed top-0 left-0 pointer-events-none z-[9999] no-print"
      >
        <div
          className={`w-1.5 h-1.5 rounded-full transition-transform duration-150 ${
            isInteractive ? 'bg-[#FB8B24] scale-150' : 'bg-[#FB8B24]'
          }`}
        />
      </motion.div>

      {/* 2. Responsive Halo / Ring (Ultra-fast spring physics, tactile click feedback) */}
      <motion.div
        aria-hidden="true"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isMouseDown ? 0.8 : isInteractive ? 1.35 : 1,
        }}
        transition={{ duration: 0.15, ease: 'easeOut' }}
        className={`custom-cursor fixed top-0 left-0 pointer-events-none z-[9998] rounded-full flex items-center justify-center transition-[width,height,border-color,background-color] duration-150 no-print ${
          cursorText
            ? 'w-14 h-14 bg-[#FB8B24] text-[#11151A] font-editorial-mono text-[10px] font-bold tracking-widest'
            : isInteractive
              ? 'w-9 h-9 border border-[#FB8B24] bg-[#FB8B24]/10'
              : 'w-7 h-7 border border-[#11151A]/30 dark:border-[#F5F3ED]/30'
        }`}
      >
        {cursorText && <span className="select-none">{cursorText}</span>}
      </motion.div>
    </>
  );
};


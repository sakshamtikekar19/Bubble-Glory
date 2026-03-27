import React, { useEffect, useMemo, useState } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';

const BackgroundEffects = () => {
  const reduceMotion = useReducedMotion();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 640px)');
    const update = () => setIsMobile(mq.matches);
    update();
    if (mq.addEventListener) {
      mq.addEventListener('change', update);
      return () => mq.removeEventListener('change', update);
    }
    mq.addListener(update);
    return () => mq.removeListener(update);
  }, []);

  const calm = reduceMotion || isMobile;
  const { scrollY } = useScroll();
  
  // Parallax movement for different layers
  const y1 = useTransform(scrollY, [0, 5000], [0, -500]);
  const y2 = useTransform(scrollY, [0, 5000], [0, -1000]);
  const y3 = useTransform(scrollY, [0, 5000], [0, -1500]);

  const premiumEase = [0.16, 1, 0.3, 1];

  // Keep generated particles stable to avoid rerender jitter.
  const bubbles = useMemo(() => {
    const count = calm ? 8 : 12;
    const shiftScale = calm ? 0.45 : 1;
    const durationMin = calm ? 10 : 8;
    const durationMax = calm ? 14 : 12;

    return Array.from({ length: count }).map((_, i) => ({
      id: i,
      size: Math.random() * 40 + 18,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      duration: Math.random() * (durationMax - durationMin) + durationMin,
      delay: Math.random() * (calm ? 3 : 4),
      xShift: (Math.random() * 16 - 8) * shiftScale,
      yShift: (Math.random() * 18 - 9) * shiftScale,
      color:
        i % 2 === 0 ? 'rgba(232, 207, 196, 0.14)' : 'rgba(245, 233, 226, 0.12)',
      layer: i % 3,
    }));
  }, [calm]);

  const petals = useMemo(() => {
    const count = calm ? 3 : 6;
    const shiftScale = calm ? 0.35 : 1;
    return Array.from({ length: count }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      duration: Math.random() * (calm ? 4 : 4) + (calm ? 12 : 9),
      delay: Math.random() * (calm ? 2.5 : 3),
      xShift: (Math.random() * 20 - 10) * shiftScale,
    }));
  }, [calm]);

  const getY = (layer) => {
    // On mobile / reduced-motion, don't bind to scroll-linked MotionValues.
    if (calm) return 0;
    if (layer === 0) return y1;
    if (layer === 1) return y2;
    return y3;
  };

  // Disable heavy fixed/parallax layer on mobile and reduced-motion devices.
  if (calm) {
    return null;
  }

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {bubbles.map((bubble) => (
        <motion.div
          key={bubble.id}
          className="absolute rounded-full blur-xl"
          style={{
            width: bubble.size,
            height: bubble.size,
            left: bubble.left,
            top: bubble.top,
            backgroundColor: bubble.color,
            y: getY(bubble.layer)
          }}
          animate={{
            x: [0, bubble.xShift, 0],
            y: [0, bubble.yShift, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: bubble.duration,
            repeat: Infinity,
            ease: premiumEase,
            delay: bubble.delay
          }}
        />
      ))}
      
      {/* Floating Petals (SVG) */}
      {petals.map((petal) => (
        <motion.div
          key={`petal-${petal.id}`}
          className="absolute opacity-10"
          style={{
            left: petal.left,
            top: petal.top,
            y: getY(petal.id % 3)
          }}
          animate={{
            rotate: calm ? [0, 6, 0] : [0, 12, 0],
            x: [0, petal.xShift, 0],
          }}
          transition={{
            duration: petal.duration,
            repeat: Infinity,
            ease: premiumEase,
            delay: petal.delay
          }}
        >
          <svg width="30" height="30" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M50 0C50 0 100 25 100 50C100 75 75 100 50 100C25 100 0 75 0 50C0 25 50 0 50 0Z" fill="#FFC1CC" />
          </svg>
        </motion.div>
      ))}
    </div>
  );
};

export default BackgroundEffects;

import React, { useMemo } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const BackgroundEffects = () => {
  const { scrollY } = useScroll();
  
  // Parallax movement for different layers
  const y1 = useTransform(scrollY, [0, 5000], [0, -500]);
  const y2 = useTransform(scrollY, [0, 5000], [0, -1000]);
  const y3 = useTransform(scrollY, [0, 5000], [0, -1500]);

  const premiumEase = [0.16, 1, 0.3, 1];

  // Keep generated particles stable to avoid rerender jitter.
  const bubbles = useMemo(
    () =>
      Array.from({ length: 12 }).map((_, i) => ({
        id: i,
        size: Math.random() * 48 + 20,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        duration: Math.random() * 4 + 8, // 8-12s loop
        delay: Math.random() * 4,
        xShift: Math.random() * 16 - 8,
        yShift: Math.random() * 18 - 9,
        color: i % 2 === 0 ? 'rgba(232, 207, 196, 0.16)' : 'rgba(245, 233, 226, 0.14)',
        layer: i % 3,
      })),
    []
  );

  const petals = useMemo(
    () =>
      Array.from({ length: 6 }).map((_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        duration: Math.random() * 4 + 9,
        delay: Math.random() * 3,
        xShift: Math.random() * 20 - 10,
      })),
    []
  );

  const getY = (layer) => {
    if (layer === 0) return y1;
    if (layer === 1) return y2;
    return y3;
  };

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
            rotate: [0, 12, 0],
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

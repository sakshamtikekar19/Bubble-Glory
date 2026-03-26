import React, { useState, useEffect } from 'react';
import { motion, useSpring } from 'framer-motion';

const CustomCursor = () => {
  const [isHovering, setIsHovering] = useState(false);
  const mouseX = useSpring(0, { stiffness: 500, damping: 28 });
  const mouseY = useSpring(0, { stiffness: 500, damping: 28 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseOver = (e) => {
      if (
        e.target.tagName === 'BUTTON' || 
        e.target.tagName === 'A' || 
        e.target.closest('button') || 
        e.target.closest('a') ||
        e.target.classList.contains('clickable')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="fixed top-0 left-0 w-6 h-6 bg-bubblegum rounded-full pointer-events-none z-[100] mix-blend-multiply"
      style={{
        x: mouseX,
        y: mouseY,
        translateX: '-50%',
        translateY: '-50%',
        scale: isHovering ? 2.5 : 1,
        opacity: isHovering ? 0.3 : 0.8,
      }}
      transition={{ type: 'spring', stiffness: 250, damping: 20 }}
    />
  );
};

export default CustomCursor;

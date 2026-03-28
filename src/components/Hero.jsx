import React, { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useReducedMotion, useSpring } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

const MagneticButton = ({ children, className, ...props }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 24, stiffness: 90 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const distanceX = clientX - centerX;
    const distanceY = clientY - centerY;
    
    // Magnetic pull range
    if (Math.abs(distanceX) < 90 && Math.abs(distanceY) < 90) {
      x.set(distanceX * 0.22);
      y.set(distanceY * 0.22);
    } else {
      x.set(0);
      y.set(0);
    }
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
      className={`relative group ${className}`}
      {...props}
    >
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
      <motion.div
        className="absolute inset-0 bg-white/20 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"
      />
    </motion.button>
  );
};

const Hero = () => {
  const reduceMotion = useReducedMotion();
  const [isMobile, setIsMobile] = useState(false);
  const premiumEase = [0.16, 1, 0.3, 1];
  const staggerParent = {
    initial: {},
    animate: { transition: { staggerChildren: 0.14, delayChildren: 0.08 } },
  };
  const fadeUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.95, ease: premiumEase },
  };

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 768px)');
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

  if (isMobile) {
    return (
      <section className="relative min-h-[100dvh] pt-40 pb-12 px-5 flex flex-col justify-start gap-8">
        <div className="w-full max-w-[460px] mx-auto text-left">
          <p className="text-[12px] md:text-sm font-medium text-[#6B6B6B] tracking-wide mb-3">
            Elevate your daily bathing ritual
          </p>
          <div className="flex items-center gap-3 mb-5">
            <span className="h-[1px] w-12 bg-[#C9A96E]/60"></span>
            <span className="text-[#C9A96E] text-[11px] tracking-[2.5px] uppercase">Est. 2024</span>
          </div>

          <h1 className="font-serif font-medium text-[clamp(36px,10vw,52px)] leading-[1.06] tracking-[-0.6px] text-[#1A1A1A]">
            A Luxury <br />
            <span className="text-[#F1DAD2]">Bathing</span> <br />
            Experience.
          </h1>

          <p className="mt-5 text-[15px] leading-[1.85] text-[#777777] max-w-[380px]">
            Artisanal soaps, skin-friendly ingredients, and indulgent textures crafted for your daily self-care moment.
            Gentle, nourishing, and thoughtfully handmade.
          </p>

          <div className="mt-8 flex flex-col gap-3 w-full">
            <button className="cta-breathe w-full px-6 py-4 bg-[#3A3A3A] text-white rounded-lg text-[12px] tracking-[1.8px] uppercase font-medium">
              SHOP THE COLLECTION
            </button>
            <button className="w-full px-6 py-4 border border-[#DDD3CC] rounded-lg text-[12px] tracking-[1.8px] uppercase font-medium text-[#4A4A4A]">
              INDULGE YOURSELF
            </button>
          </div>
        </div>

        <div className="w-full max-w-[420px] mx-auto">
          <div className="relative w-full aspect-square bg-white rounded-[28px] shadow-luxury p-5 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1605264964528-06403738d6dc?q=80&w=800&auto=format&fit=crop"
              alt="Luxury Soap"
              loading="eager"
              decoding="async"
              className="w-full h-full object-cover rounded-[16px]"
            />
            <div className="absolute top-4 right-4 bg-white/90 p-3 rounded-xl border border-lavender/20">
              <div className="flex items-center gap-2 text-bubblegum font-bold">
                <Sparkles size={14} />
                <span className="text-sm">NEW</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  const leftVariants = {
    initial: { opacity: 0, x: -40 },
    animate: {
      opacity: 1,
      x: 0,
      transition: { duration: 1, ease: premiumEase, staggerChildren: 0.14, delayChildren: 0.08 },
    },
  };

  return (
    <section className="relative min-h-[100dvh] pt-28 sm:pt-32 md:pt-44 pb-14 md:pb-20 px-4 sm:px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-0 touch-pan-y">
      {/* Left Content */}
      <motion.div
        initial={calm ? false : 'initial'}
        animate={calm ? { opacity: 1, x: 0 } : 'animate'}
        variants={calm ? undefined : { ...staggerParent, ...leftVariants }}
        className="w-full md:w-1/2 z-10 flex flex-col items-center md:items-start text-center md:text-left max-w-[460px] mx-auto md:mx-0"
      >
        <motion.p
          variants={calm ? undefined : fadeUp}
          className="text-sm font-medium text-[#6B6B6B] tracking-wide mb-4 md:mb-5"
        >
          Elevate your daily bathing ritual
        </motion.p>
        {/* EST */}
        <motion.div variants={calm ? undefined : fadeUp} className="flex items-center gap-3 mb-6">
          <span className="h-[1px] w-12 bg-[#C9A96E]/60"></span>
          <span className="text-[#C9A96E] text-[11px] tracking-[2.5px] uppercase">
            Est. 2024
          </span>
        </motion.div>

        {/* HERO TEXT */}
        <motion.h1 variants={calm ? undefined : fadeUp} className="font-serif font-medium text-[clamp(38px,11vw,60px)] leading-[1.05] tracking-[-0.7px] text-[#1A1A1A]">
          A Luxury <br />
          <span className="text-[#F1DAD2]">Bathing</span> <br />
          Experience.
        </motion.h1>

        {/* PARAGRAPH */}
        <motion.p variants={calm ? undefined : fadeUp} className="mt-6 text-[15px] leading-[1.9] text-[#8A8A8A] max-w-[380px]">
          Artisanal soaps, skin-friendly ingredients, and indulgent textures crafted for your daily self-care moment.
          Gentle, nourishing, and thoughtfully handmade.
        </motion.p>

        {/* BUTTONS */}
        <motion.div variants={calm ? undefined : fadeUp} className="mt-10 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <MagneticButton className="cta-breathe px-7 sm:px-10 py-4 sm:py-5 bg-[#3A3A3A] text-white rounded-lg text-[12px] sm:text-[13px] tracking-[1.8px] uppercase font-medium hover:bg-[#4A4A4A] hover:shadow-lg transition-all hover:-translate-y-1 active:translate-y-0">
            SHOP THE COLLECTION
          </MagneticButton>

          <button className="px-7 sm:px-10 py-4 sm:py-5 border border-[#DDD3CC] rounded-lg text-[12px] sm:text-[13px] tracking-[1.8px] uppercase font-medium text-[#4A4A4A] hover:border-[#E8CFC4] hover:text-[#D7B5AA] hover:shadow-md transition-all hover:-translate-y-1 active:translate-y-0">
            INDULGE YOURSELF
          </button>
        </motion.div>
      </motion.div>

      {/* Right Content - Floating Soap */}
      <div className="w-full md:w-1/2 relative mt-8 md:mt-0 flex justify-center items-center">
        <motion.div
          initial={calm ? false : { opacity: 0, scale: 0.8, rotate: -10 }}
          animate={calm ? { opacity: 1, scale: 1, rotate: 0 } : { opacity: 1, scale: 1, rotate: 0 }}
          transition={calm ? { duration: 0.35 } : { duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-[500px] aspect-square"
        >
          {/* Decorative Background Circles */}
          <motion.div 
            className="absolute inset-0 bg-lavender/40 rounded-full blur-3xl -z-10"
            animate={calm ? { scale: 1, opacity: 0.42 } : { scale: [1, 1.2, 1], opacity: [0.4, 0.6, 0.4] }}
            transition={calm ? { duration: 0.2 } : { duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          />
          
          {/* Floating Soap Image */}
          <motion.div
            className="w-full h-full flex items-center justify-center"
            animate={calm ? { y: 0, rotate: 0 } : { y: [0, -14, 0], rotate: [0, 1.8, 0] }}
            transition={calm ? { duration: 0.2 } : { duration: 8, repeat: Infinity, ease: premiumEase }}
          >
            <div className="relative w-[80%] h-[80%] bg-white rounded-[40px] shadow-luxury p-8 flex items-center justify-center overflow-hidden group">
              <img 
                src="https://images.unsplash.com/photo-1605264964528-06403738d6dc?q=80&w=800&auto=format&fit=crop" 
                alt="Luxury Soap" 
                className="w-full h-full object-cover rounded-[20px] group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-lavender/30 to-transparent pointer-events-none" />
              
              {/* Floating Badge */}
              <motion.div
                className="absolute top-8 right-8 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-lavender/20"
                animate={calm ? { y: 0 } : { y: [0, 10, 0] }}
                transition={calm ? { duration: 0.2 } : { duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              >
                <div className="flex items-center gap-2 text-bubblegum font-bold">
                  <Sparkles size={16} />
                  <span>NEW</span>
                </div>
                <p className="font-bold text-gray-400 uppercase mt-1">Macaroon Collection</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Floating Bubbles */}
          {!calm && (
            <>
              <motion.div 
                className="absolute -top-10 -left-10 w-20 h-20 bg-mint/60 rounded-full blur-xl"
                animate={{ y: [0, 50, 0], x: [0, 20, 0] }}
                transition={{ duration: 7, repeat: Infinity }}
              />
              <motion.div 
                className="absolute -bottom-10 -right-10 w-32 h-32 bg-bubblegum/30 rounded-full blur-2xl"
                animate={{ y: [0, -40, 0], x: [0, -30, 0] }}
                transition={{ duration: 9, repeat: Infinity }}
              />
            </>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useReducedMotion, useSpring } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import heroBgVideo from '../assets/hero-bg.mp4';

/** Half-speed (or slower) reads calmer on large hero backgrounds and feels less “busy” than 1×. */
const HERO_VIDEO_PLAYBACK_RATE = 0.45;

/**
 * Bundled MP4 URL (Vite) so the file always resolves next to the JS chunk on GitHub Pages.
 * Not gated on reduced-motion — ambient muted loops are treated separately from motion animations.
 */
const HeroBackdrop = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;
    el.muted = true;
    el.defaultMuted = true;
    el.setAttribute('playsinline', '');
    el.setAttribute('webkit-playsinline', '');

    const applySlowMo = () => {
      el.defaultPlaybackRate = HERO_VIDEO_PLAYBACK_RATE;
      el.playbackRate = HERO_VIDEO_PLAYBACK_RATE;
    };

    const tryPlay = () => {
      applySlowMo();
      const p = el.play();
      if (p !== undefined && typeof p.catch === 'function') p.catch(() => {});
    };

    applySlowMo();
    tryPlay();
    el.addEventListener('loadedmetadata', applySlowMo);
    el.addEventListener('playing', applySlowMo);
    el.addEventListener('loadeddata', tryPlay);
    el.addEventListener('canplay', tryPlay);
    return () => {
      el.removeEventListener('loadedmetadata', applySlowMo);
      el.removeEventListener('playing', applySlowMo);
      el.removeEventListener('loadeddata', tryPlay);
      el.removeEventListener('canplay', tryPlay);
    };
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden>
      <video
        ref={videoRef}
        src={heroBgVideo}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        fetchPriority="high"
        className="absolute left-1/2 top-1/2 min-h-full min-w-full h-full w-full -translate-x-1/2 -translate-y-1/2 object-cover scale-[1.02] opacity-[0.62] [filter:saturate(0.75)_brightness(1.08)]"
      />
      <div className="absolute inset-0 bg-[#fffbfa]/45" />
      <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-[#fdf2f6]/55" />
    </div>
  );
};

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
      <section className="relative isolate min-h-[100dvh] overflow-hidden pt-36 pb-12 px-5 flex flex-col justify-start gap-8">
        <HeroBackdrop />
        <div className="relative z-10 w-full max-w-[460px] mx-auto text-left">
          <p className="text-[12px] md:text-sm font-medium text-sass-muted tracking-wide mb-3 font-sans">
            Elevate your daily bathing ritual
          </p>
          <div className="flex items-center gap-3 mb-5">
            <span className="h-px w-12 bg-sass-rose/50" />
            <span className="text-sass-rose text-[10px] tracking-[0.22em] uppercase font-bold font-sans">Est. 2024</span>
          </div>

          <h1 className="font-display font-medium text-[clamp(36px,10vw,52px)] leading-[1.06] tracking-[-0.02em] text-sass-ink">
            A Luxury <br />
            <span className="text-sass-rose italic font-normal">Bathing</span> <br />
            Experience.
          </h1>

          <p className="mt-5 text-[15px] leading-[1.85] text-sass-muted max-w-[380px] font-sans">
            Artisanal soaps, skin-friendly ingredients, and indulgent textures crafted for your daily self-care moment.
            Gentle, nourishing, and thoughtfully handmade.
          </p>

          <div className="mt-8 flex flex-col gap-3 w-full">
            <a href="#products" className="cta-breathe btn-sass-primary w-full text-center">
              Shop the collection
            </a>
            <a href="#story" className="btn-sass-outline w-full text-center">
              Our story
            </a>
          </div>
        </div>

        <div className="relative z-10 w-full max-w-[420px] mx-auto">
          <div className="relative w-full aspect-square bg-white rounded-2xl shadow-soft border border-black/[0.06] p-4 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1605264964528-06403738d6dc?q=80&w=800&auto=format&fit=crop"
              alt="Luxury Soap"
              loading="eager"
              decoding="async"
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm p-2.5 rounded-lg border border-black/[0.06] shadow-sm">
              <div className="flex items-center gap-2 text-sass-rose font-bold font-sans text-[11px] uppercase tracking-wider">
                <Sparkles size={14} strokeWidth={2} />
                <span>New</span>
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
    <section className="relative isolate min-h-[100dvh] overflow-hidden pt-28 sm:pt-32 md:pt-40 pb-14 md:pb-20 px-4 sm:px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-0 touch-pan-y">
      <HeroBackdrop />
      {/* Left Content */}
      <motion.div
        initial={calm ? false : 'initial'}
        animate={calm ? { opacity: 1, x: 0 } : 'animate'}
        variants={calm ? undefined : { ...staggerParent, ...leftVariants }}
        className="w-full md:w-1/2 z-10 flex flex-col items-center md:items-start text-center md:text-left max-w-[460px] mx-auto md:mx-0"
      >
        <motion.p
          variants={calm ? undefined : fadeUp}
          className="text-sm font-medium text-sass-muted tracking-wide mb-4 md:mb-5 font-sans"
        >
          Elevate your daily bathing ritual
        </motion.p>
        {/* EST */}
        <motion.div variants={calm ? undefined : fadeUp} className="flex items-center gap-3 mb-6">
          <span className="h-px w-12 bg-sass-rose/50" />
          <span className="text-sass-rose text-[10px] tracking-[0.22em] uppercase font-bold font-sans">
            Est. 2024
          </span>
        </motion.div>

        {/* HERO TEXT */}
        <motion.h1 variants={calm ? undefined : fadeUp} className="font-display font-medium text-[clamp(38px,11vw,60px)] leading-[1.05] tracking-[-0.02em] text-sass-ink">
          A Luxury <br />
          <span className="text-sass-rose italic font-normal">Bathing</span> <br />
          Experience.
        </motion.h1>

        {/* PARAGRAPH */}
        <motion.p variants={calm ? undefined : fadeUp} className="mt-6 text-[15px] leading-[1.9] text-sass-muted max-w-[380px] font-sans">
          Artisanal soaps, skin-friendly ingredients, and indulgent textures crafted for your daily self-care moment.
          Gentle, nourishing, and thoughtfully handmade.
        </motion.p>

        {/* BUTTONS */}
        <motion.div variants={calm ? undefined : fadeUp} className="mt-10 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <MagneticButton
            type="button"
            className="cta-breathe btn-sass-primary hover:-translate-y-0.5 active:translate-y-0"
            onClick={() => {
              document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Shop the collection
          </MagneticButton>

          <a
            href="#story"
            className="btn-sass-outline text-center hover:-translate-y-0.5 active:translate-y-0 transition-transform"
          >
            Our story
          </a>
        </motion.div>
      </motion.div>

      {/* Right Content - Floating Soap */}
      <div className="relative z-10 w-full md:w-1/2 mt-8 md:mt-0 flex justify-center items-center">
        <motion.div
          initial={calm ? false : { opacity: 0, scale: 0.8, rotate: -10 }}
          animate={calm ? { opacity: 1, scale: 1, rotate: 0 } : { opacity: 1, scale: 1, rotate: 0 }}
          transition={calm ? { duration: 0.35 } : { duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-[500px] aspect-square"
        >
          {/* Decorative Background Circles */}
          <motion.div 
            className="absolute inset-0 bg-sass-blush/50 rounded-full blur-3xl -z-10"
            animate={calm ? { scale: 1, opacity: 0.42 } : { scale: [1, 1.2, 1], opacity: [0.4, 0.6, 0.4] }}
            transition={calm ? { duration: 0.2 } : { duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          />
          
          {/* Floating Soap Image */}
          <motion.div
            className="w-full h-full flex items-center justify-center"
            animate={calm ? { y: 0, rotate: 0 } : { y: [0, -14, 0], rotate: [0, 1.8, 0] }}
            transition={calm ? { duration: 0.2 } : { duration: 8, repeat: Infinity, ease: premiumEase }}
          >
            <div className="relative w-[80%] h-[80%] bg-white rounded-3xl shadow-soft border border-black/[0.06] p-6 md:p-8 flex items-center justify-center overflow-hidden group">
              <img 
                src="https://images.unsplash.com/photo-1605264964528-06403738d6dc?q=80&w=800&auto=format&fit=crop" 
                alt="Luxury Soap" 
                className="w-full h-full object-cover rounded-xl group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-sass-blush/25 to-transparent pointer-events-none" />
              
              {/* Floating Badge */}
              <motion.div
                className="absolute top-6 right-6 md:top-8 md:right-8 bg-white/95 backdrop-blur-md p-3 md:p-4 rounded-lg shadow-md border border-black/[0.06]"
                animate={calm ? { y: 0 } : { y: [0, 10, 0] }}
                transition={calm ? { duration: 0.2 } : { duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              >
                <div className="flex items-center gap-2 text-sass-rose font-bold font-sans text-[11px] uppercase tracking-wider">
                  <Sparkles size={16} strokeWidth={2} />
                  <span>New</span>
                </div>
                <p className="font-sans font-bold text-sass-muted uppercase text-[10px] tracking-[0.14em] mt-1.5">Macaroon Collection</p>
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

import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { ShoppingBag, Menu, Sparkles } from 'lucide-react';

const Navbar = ({ cartCount, onCartClick }) => {
  const [isHidden, setIsHidden] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();
  const premiumEase = [0.16, 1, 0.3, 1];
  const reduceMotion = useReducedMotion();
  const [isMobile, setIsMobile] = useState(false);
  
  const lastScrollY = React.useRef(0);

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

  useEffect(() => {
    if (isMobile || reduceMotion) {
      // Prevent scroll-linked translate/opacity toggling on mobile
      // (it can cause visible jitter / "stuck" feel).
      setIsHidden(false);
      setIsScrolled(false);
      return undefined;
    }

    return scrollY.onChange((latest) => {
      const direction = latest > lastScrollY.current ? 'down' : 'up';
      if (latest > 100 && direction === 'down') {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }
      
      if (latest > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
      
      lastScrollY.current = latest;
    });
  }, [scrollY, isMobile, reduceMotion]);

  const shouldHide = isHidden && !isMobile && !reduceMotion;

  return (
    <div className="fixed top-0 left-0 w-full z-50">
      {/* Announcement Bar */}
      <motion.div 
        className="bg-bubblegum text-white px-2 sm:px-3 py-2 text-center font-medium flex items-center justify-center gap-1 sm:gap-2"
        animate={{ opacity: shouldHide ? 0 : 1, y: shouldHide ? -40 : 0 }}
        transition={{ duration: 0.9, ease: premiumEase }}
      >
        <Sparkles size={14} />
        <span className="leading-tight text-[10px] sm:text-sm">FREE SHIPPING PAN-INDIA ON ORDERS ABOVE ₹999</span>
        <Sparkles size={14} />
      </motion.div>

      {/* Main Nav */}
      <motion.nav
        className={`w-full px-6 md:px-12 py-4 flex items-center justify-between font-sans text-[14px] tracking-[1px] uppercase text-[#1A1A1A] transition-all duration-300 ${
          isScrolled ? 'glass shadow-sm py-3' : 'bg-transparent'
        }`}
        animate={{ y: shouldHide ? -100 : 0 }}
        transition={{ duration: 0.9, ease: premiumEase }}
        style={{ borderBottom: isScrolled ? '1px solid rgba(212, 175, 55, 0.1)' : 'none' }}
      >
        <div className="flex items-center gap-8">
          <button className="md:hidden">
            <Menu size={24} className="text-gray-800" />
          </button>
          <div className="hidden md:flex items-center gap-6">
            <a href="#" className="text-sm font-semibold hover:text-bubblegum hover:-translate-y-1 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] uppercase">Shop</a>
            <a href="#" className="text-sm font-semibold hover:text-bubblegum hover:-translate-y-1 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] uppercase">Our Story</a>
          </div>
        </div>

        <div className="absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0 max-w-[60vw] md:max-w-none">
          <h1 className="font-serif text-[28px] tracking-[2px] font-medium bg-gradient-to-r from-[#B27F8E] via-[#9A6A80] to-[#8D6C4F] bg-clip-text text-transparent">
            BUBBLE <span className="text-[#C98FA0]">&</span> GLORY
          </h1>
        </div>

        <div className="flex items-center gap-3 md:gap-6">
          <a href="#" className="hidden md:block text-sm font-semibold hover:text-bubblegum hover:-translate-y-1 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] uppercase">Gifting</a>
          <button 
            onClick={onCartClick}
            className="relative p-2 hover:bg-lavender hover:-translate-y-1 rounded-full transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group"
          >
            <ShoppingBag size={24} className="text-gray-800 group-hover:scale-110 transition-transform" />
            <AnimatePresence>
              {cartCount > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                  className="absolute top-0 right-0 w-5 h-5 bg-bubblegum text-white flex items-center justify-center rounded-full font-bold border-2 border-white"
                >
                  {cartCount}
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </motion.nav>
    </div>
  );
};

export default Navbar;

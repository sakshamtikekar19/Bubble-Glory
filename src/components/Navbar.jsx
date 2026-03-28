import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion, useReducedMotion, useScroll } from 'framer-motion';
import { ShoppingBag, Menu } from 'lucide-react';

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
      setIsHidden(false);
      setIsScrolled(false);
      return undefined;
    }
    return scrollY.onChange((latest) => {
      const direction = latest > lastScrollY.current ? 'down' : 'up';
      if (latest > 100 && direction === 'down') setIsHidden(true);
      else setIsHidden(false);
      setIsScrolled(latest > 40);
      lastScrollY.current = latest;
    });
  }, [scrollY, isMobile, reduceMotion]);

  const shouldHide = isHidden && !isMobile && !reduceMotion;

  return (
    <div className="fixed top-0 left-0 w-full z-50">
      <motion.div
        className="bg-[#D9A8B8] text-white px-3 py-2.5 text-center"
        animate={{ opacity: shouldHide ? 0 : 1, y: shouldHide ? -36 : 0 }}
        transition={{ duration: 0.85, ease: premiumEase }}
      >
        <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.2em]">
          Free shipping on orders above ₹999
        </span>
      </motion.div>

      <motion.nav
        className={`w-full px-4 sm:px-8 md:px-10 py-3.5 flex items-center justify-between font-sans text-[12px] font-semibold uppercase tracking-[0.18em] text-sass-ink border-b transition-colors duration-300 ${
          isScrolled ? 'glass border-black/5 shadow-sm' : 'bg-[#FFFBF9]/95 border-transparent'
        }`}
        animate={{ y: shouldHide ? -92 : 0 }}
        transition={{ duration: 0.85, ease: premiumEase }}
      >
        <div className="flex items-center gap-6">
          <button type="button" className="md:hidden p-1 -ml-1" aria-label="Menu">
            <Menu size={22} className="text-sass-ink" />
          </button>
          <div className="hidden md:flex items-center gap-8">
            <a href="#products" className="hover:text-sass-rose transition-colors">
              Shop
            </a>
            <a href="#story" className="hover:text-sass-rose transition-colors">
              Our story
            </a>
          </div>
        </div>

        <a href="#" className="absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0 text-center">
          <span className="font-display text-[22px] sm:text-[26px] font-medium tracking-[0.06em] text-sass-ink normal-case">
            Bubble <span className="text-sass-rose">&amp;</span> Glory
          </span>
        </a>

        <div className="flex items-center gap-4 md:gap-6">
          <a href="#products" className="hidden md:inline hover:text-sass-rose transition-colors">
            Gifting
          </a>
          <button
            type="button"
            onClick={onCartClick}
            className="relative p-2 rounded-full hover:bg-sass-blush/60 transition-colors"
            aria-label="Cart"
          >
            <ShoppingBag size={22} className="text-sass-ink" />
            <AnimatePresence>
              {cartCount > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                  className="absolute -top-0.5 -right-0.5 min-w-[18px] h-[18px] px-1 bg-sass-ink text-white text-[9px] font-bold flex items-center justify-center rounded-full"
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

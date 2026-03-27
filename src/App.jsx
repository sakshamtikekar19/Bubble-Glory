import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import TrustMarkers from './components/TrustMarkers';
import Footer from './components/Footer';
import BackgroundEffects from './components/BackgroundEffects';
import CartDrawer from './components/CartDrawer';
import OurStorySection from './components/OurStorySection';
import GiftingHighlight from './components/GiftingHighlight';
import TestimonialsSection from './components/TestimonialsSection';
import InstagramGallery from './components/InstagramGallery';

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [isMobile, setIsMobile] = useState(false);
  const reduceMotion = useReducedMotion();
  const premiumEase = [0.16, 1, 0.3, 1];
  const sectionFadeUp = {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 1, ease: premiumEase },
  };

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
    setIsCartOpen(true);
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

  const disableScrollAnimations = reduceMotion || isMobile;
  const getSectionMotion = (customTransition) => {
    if (disableScrollAnimations) {
      return { initial: false, animate: { opacity: 1, y: 0 } };
    }
    return { ...sectionFadeUp, transition: customTransition ?? sectionFadeUp.transition };
  };

  return (
    <div className="relative min-h-screen grain-bg">
      <BackgroundEffects />
      
      <Navbar cartCount={cartItems.length} onCartClick={() => setIsCartOpen(true)} />
      
      <main>
        <Hero />
        <motion.div {...getSectionMotion({ duration: 1, ease: premiumEase, delay: 0.03 })}>
          <OurStorySection />
        </motion.div>
        <motion.div {...getSectionMotion()}>
          <TrustMarkers />
        </motion.div>
        <motion.div {...getSectionMotion({ duration: 1.1, ease: premiumEase, delay: 0.08 })}>
          <ProductGrid onAddToCart={addToCart} />
        </motion.div>
        <motion.div {...getSectionMotion({ duration: 1.05, ease: premiumEase, delay: 0.1 })}>
          <GiftingHighlight />
        </motion.div>
        <motion.div {...getSectionMotion({ duration: 1.05, ease: premiumEase, delay: 0.12 })}>
          <TestimonialsSection />
        </motion.div>
        <motion.div {...getSectionMotion({ duration: 1.05, ease: premiumEase, delay: 0.14 })}>
          <InstagramGallery />
        </motion.div>
      </main>

      <motion.div {...getSectionMotion({ duration: 1.1, ease: premiumEase, delay: 0.12 })}>
        <Footer />
      </motion.div>

      <AnimatePresence>
        {isCartOpen && (
          <CartDrawer 
            items={cartItems} 
            onClose={() => setIsCartOpen(false)} 
          />
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;

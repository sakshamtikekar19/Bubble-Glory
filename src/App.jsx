import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import ShopByCategory from './components/ShopByCategory';
import PromoBanners from './components/PromoBanners';
import TrustStrip from './components/TrustStrip';
import NewsletterSection from './components/NewsletterSection';
import Footer from './components/Footer';
import BackgroundEffects from './components/BackgroundEffects';
import LandingBubbles from './components/LandingBubbles';
import CartDrawer from './components/CartDrawer';
import OurStorySection from './components/OurStorySection';
import GiftingHighlight from './components/GiftingHighlight';
import TestimonialsSection from './components/TestimonialsSection';
import InstagramGallery from './components/InstagramGallery';

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
    setIsCartOpen(true);
  };

  return (
    <div className="relative min-h-screen grain-bg">
      <BackgroundEffects />
      <LandingBubbles />
      
      <Navbar cartCount={cartItems.length} onCartClick={() => setIsCartOpen(true)} />
      
      <main>
        <Hero />
        <ShopByCategory />
        <PromoBanners />
        <div className="soft-reveal" style={{ '--reveal-delay': '90ms' }}>
          <OurStorySection />
        </div>
        <TrustStrip />
        <div className="soft-reveal" style={{ '--reveal-delay': '150ms' }}>
          <ProductGrid onAddToCart={addToCart} />
        </div>
        <div className="soft-reveal" style={{ '--reveal-delay': '220ms' }}>
          <GiftingHighlight />
        </div>
        <div className="soft-reveal" style={{ '--reveal-delay': '280ms' }}>
          <TestimonialsSection />
        </div>
        <div className="soft-reveal" style={{ '--reveal-delay': '340ms' }}>
          <InstagramGallery />
        </div>
        <NewsletterSection />
      </main>

      <div className="soft-reveal" style={{ '--reveal-delay': '460ms' }}>
        <Footer />
      </div>

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

import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
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

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
    setIsCartOpen(true);
  };

  return (
    <div className="relative min-h-screen grain-bg">
      <BackgroundEffects />
      
      <Navbar cartCount={cartItems.length} onCartClick={() => setIsCartOpen(true)} />
      
      <main>
        <Hero />
        <div>
          <OurStorySection />
        </div>
        <div>
          <TrustMarkers />
        </div>
        <div>
          <ProductGrid onAddToCart={addToCart} />
        </div>
        <div>
          <GiftingHighlight />
        </div>
        <div>
          <TestimonialsSection />
        </div>
        <div>
          <InstagramGallery />
        </div>
      </main>

      <div>
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

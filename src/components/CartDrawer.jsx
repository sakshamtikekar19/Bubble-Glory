import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShoppingBag, Trash2, ArrowRight } from 'lucide-react';

const CartDrawer = ({ items, onClose }) => {
  const hasPoppedForCount = useRef(0);

  useEffect(() => {
    // Lazy-load confetti so it doesn't slow initial page load.
    // Only run when item count increases.
    if (items.length <= 0) return;
    if (items.length <= hasPoppedForCount.current) return;

    hasPoppedForCount.current = items.length;

    let cancelled = false;
    (async () => {
      try {
        const mod = await import('canvas-confetti');
        if (cancelled) return;

        const confetti = mod.default ?? mod;
        const scalar = 2;
        const bubble = confetti.shapeFromText({ text: '🫧', scalar });

        confetti({
          shapes: [bubble, 'circle'],
          particleCount: 40,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#E6E6FA', '#F0FFF0', '#FFC1CC', '#FFD1DC'],
          ticks: 200,
          gravity: 0.8,
          scalar: 1.2,
        });
      } catch {
        // No-op: confetti is a nice-to-have
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [items.length]);

  const subtotal = items.reduce((acc, item) => acc + item.price, 0);

  return (
    <>
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[60]"
      />

      {/* Drawer */}
      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        className="fixed top-0 right-0 h-full w-full max-w-md bg-white shadow-2xl z-[70] flex flex-col"
      >
        {/* Header */}
        <div className="p-6 border-b border-gray-100 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <ShoppingBag size={24} className="text-bubblegum" />
            <h2 className="text-2xl font-bold text-gray-800">Your Bag ({items.length})</h2>
          </div>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-lavender rounded-full transition-colors"
          >
            <X size={24} className="text-gray-400" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
              <div className="w-24 h-24 bg-lavender-light rounded-full flex items-center justify-center">
                <ShoppingBag size={40} className="text-lavender-dark" />
              </div>
              <p className="text-gray-500 font-medium">Your bag is empty. <br /> Let's find some treats!</p>
              <button 
                onClick={onClose}
                className="px-8 py-3 bg-gray-900 text-white rounded-full font-bold"
              >
                CONTINUE SHOPPING
              </button>
            </div>
          ) : (
            items.map((item, i) => (
              <motion.div 
                key={`${item.id}-${i}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex gap-4 group"
              >
                <div className="w-24 h-24 bg-lavender-light rounded-2xl overflow-hidden flex-shrink-0">
                  <img
                    src={item.image}
                    alt={item.name}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 flex flex-col justify-between py-1">
                  <div>
                    <h3 className="font-bold text-gray-800 group-hover:text-bubblegum transition-colors">{item.name}</h3>
                    <p className="text-gray-400 font-bold uppercase mt-1">{item.category}</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="font-bold text-gray-900">₹{item.price}</p>
                    <button className="text-gray-300 hover:text-red-400 transition-colors">
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="p-6 bg-lavender-light/30 border-t border-lavender/20 space-y-4">
            <div className="flex items-center justify-between">
              <p className="text-gray-500 font-medium">Subtotal</p>
              <p className="text-2xl font-bold text-gray-900">₹{subtotal}</p>
            </div>
            <p className="text-gray-400 font-bold uppercase text-center">
              Shipping & taxes calculated at checkout
            </p>
            <button className="w-full py-5 bg-gray-900 text-white rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-gray-800 transition-colors shadow-luxury">
              CHECKOUT NOW <ArrowRight size={20} />
            </button>
          </div>
        )}
      </motion.div>
    </>
  );
};

export default CartDrawer;

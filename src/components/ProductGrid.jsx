import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, Eye, Star } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Lavender Macaroon Medley',
    price: 499,
    category: 'Macaroon Soaps',
    description: 'Handcrafted luxury bar with a soft floral finish for a calming self-care ritual.',
    image: 'https://images.unsplash.com/photo-1605264964528-06403738d6dc?q=80&w=800&auto=format&fit=crop',
    hoverImage: 'https://images.unsplash.com/photo-1547793548-7a040dd3a274?q=80&w=800&auto=format&fit=crop',
    rating: 5,
    tag: 'Best Seller'
  },
  {
    id: 2,
    name: 'Berry Bliss Waffle Soap',
    price: 549,
    category: 'Waffle Soaps',
    description: 'Artisanal waffle-texture soap made to gently cleanse and leave skin feeling nourished.',
    image: 'https://images.unsplash.com/photo-1600857062241-98e5dba7f214?q=80&w=800&auto=format&fit=crop',
    hoverImage: 'https://images.unsplash.com/photo-1547793549-703882ad264a?q=80&w=800&auto=format&fit=crop',
    rating: 4,
    tag: 'Limited Edition'
  },
  {
    id: 3,
    name: 'Minty Fresh Macaroon',
    price: 499,
    category: 'Macaroon Soaps',
    description: 'A gentle, skin-friendly bar with minty freshness and creamy handcrafted lather.',
    image: 'https://images.unsplash.com/photo-1590439471364-192aa70c0b53?q=80&w=800&auto=format&fit=crop',
    hoverImage: 'https://images.unsplash.com/photo-1547793548-7a040dd3a274?q=80&w=800&auto=format&fit=crop',
    rating: 5,
    tag: 'New'
  },
  {
    id: 4,
    name: 'Citrus Zest Gift Box',
    price: 1299,
    category: 'Gift Boxes',
    description: 'Curated gifting set of premium soaps, beautifully packed for thoughtful celebrations.',
    image: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=800&auto=format&fit=crop',
    hoverImage: 'https://images.unsplash.com/photo-1513201099705-a9746e1e201f?q=80&w=800&auto=format&fit=crop',
    rating: 5,
    tag: 'Gift Idea'
  }
];

const ProductCard = ({ product, onAddToCart }) => {
  const [isHovered, setIsHovered] = useState(false);
  const premiumEase = [0.16, 1, 0.3, 1];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.9, ease: premiumEase }}
      className="group relative flex flex-col"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative aspect-[4/5] overflow-hidden rounded-[32px] bg-lavender-light shadow-soft group-hover:shadow-luxury transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]">
        <AnimatePresence mode="wait">
          <motion.img
            key={isHovered ? 'hover' : 'normal'}
            src={isHovered ? product.hoverImage : product.image}
            alt={product.name}
            loading="lazy"
            decoding="async"
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: isHovered ? 1.05 : 1 }}
            exit={{ opacity: 0, scale: 1.03 }}
            transition={{ duration: 0.75, ease: premiumEase }}
            className="w-full h-full object-cover will-change-transform"
          />
        </AnimatePresence>

        {/* Tag */}
        <div className="absolute top-4 left-4">
          <span className="px-4 py-1.5 bg-white/90 backdrop-blur-md rounded-full font-bold text-gray-800 uppercase shadow-sm">
            {product.tag}
          </span>
        </div>

        {/* Quick Add Overlay */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 14 }}
          transition={{ duration: 0.7, ease: premiumEase }}
          className="absolute inset-x-4 bottom-4 flex gap-2"
        >
          <button 
            onClick={() => onAddToCart(product)}
            className="flex-1 py-4 bg-gray-900 text-white rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-gray-800 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:scale-[1.03] hover:shadow-lg active:translate-y-0"
          >
            <ShoppingCart size={16} /> QUICK ADD
          </button>
          <button className="w-12 h-12 bg-white text-gray-900 rounded-2xl flex items-center justify-center hover:bg-lavender transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1">
            <Eye size={18} />
          </button>
        </motion.div>
      </div>

      {/* Info */}
      <div className="mt-6 px-2">
        <div className="flex items-center gap-1 mb-2">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={12} className={i < product.rating ? "fill-gold text-gold" : "text-gray-200"} />
          ))}
          <span className="text-gray-400 font-bold ml-1">(24)</span>
        </div>
        <p className="font-bold text-bubblegum uppercase mb-1">{product.category}</p>
        <h3 className="font-semibold text-gray-800 group-hover:text-bubblegum transition-colors">{product.name}</h3>
        <p className="mt-2 text-sm text-[#7A7A7A]">{product.description}</p>
        <p className="text-lg font-semibold text-gray-900 mt-1">₹{product.price}</p>
      </div>
    </motion.div>
  );
};

const ProductGrid = ({ onAddToCart }) => {
  const premiumEase = [0.16, 1, 0.3, 1];

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 1, ease: premiumEase }}
      className="py-24 md:py-28 px-6 md:px-12 bg-[#FCF8F5]"
    >
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.95, ease: premiumEase, delay: 0.05 }}
        className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6"
      >
        <div>
          <h2 className="font-bold text-gray-800 mb-4">Featured Products</h2>
          <p className="text-gray-500 max-w-md">Explore handcrafted, artisanal soaps designed to elevate your everyday bathing ritual.</p>
        </div>
        <div className="flex flex-wrap gap-3">
          {['All', 'Macaroon', 'Waffle', 'Gift Boxes'].map((cat) => (
            <button key={cat} className="px-4 sm:px-6 py-2 rounded-full border border-gray-100 font-semibold hover:border-bubblegum hover:text-bubblegum transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1">
              {cat}
            </button>
          ))}
        </div>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
        ))}
      </div>

      <div className="mt-20 text-center">
        <button className="px-8 sm:px-12 py-4 sm:py-5 border-2 border-gray-900 text-gray-900 rounded-full font-bold hover:bg-gray-900 hover:text-white transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:scale-[1.03]">
          EXPLORE OUR SOAPS
        </button>
      </div>
    </motion.section>
  );
};

export default ProductGrid;

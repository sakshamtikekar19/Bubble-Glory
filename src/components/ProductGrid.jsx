import React, { useEffect, useState } from 'react';
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

const ProductCard = ({ product, onAddToCart, canHover }) => {
  const [isHovered, setIsHovered] = useState(false);
  const showHoverState = canHover && isHovered;

  return (
    <div
      className="group relative flex flex-col"
      onMouseEnter={canHover ? () => setIsHovered(true) : undefined}
      onMouseLeave={canHover ? () => setIsHovered(false) : undefined}
    >
      <div className="relative aspect-[4/5] overflow-hidden rounded-lg bg-sass-cream border border-black/[0.06] shadow-soft transition-shadow duration-500 group-hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)]">
        <img
          src={showHoverState ? product.hoverImage : product.image}
          alt={product.name}
          loading="lazy"
          decoding="async"
          className={`w-full h-full object-cover transition-transform duration-500 ${showHoverState ? 'scale-105' : 'scale-100'}`}
        />

        <div className="absolute top-3 left-3">
          <span className="px-3 py-1.5 bg-white/95 backdrop-blur-sm rounded-md font-sans font-bold text-sass-ink uppercase text-[10px] tracking-[0.12em] shadow-sm border border-black/[0.05]">
            {product.tag}
          </span>
        </div>

        <div
          className={`absolute inset-x-3 bottom-3 flex gap-2 transition-all duration-300 ${
            canHover ? (isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2') : 'opacity-100 translate-y-0'
          }`}
        >
          <button 
            type="button"
            onClick={() => onAddToCart(product)}
            className="flex-1 py-3.5 btn-sass-primary !text-[10px] rounded-md"
          >
            <ShoppingCart size={15} strokeWidth={2} /> Add to cart
          </button>
          <button
            type="button"
            className="w-11 h-11 shrink-0 bg-white text-sass-ink rounded-md flex items-center justify-center border border-black/[0.08] hover:bg-sass-cream transition-colors"
            aria-label="Quick view"
          >
            <Eye size={17} />
          </button>
        </div>
      </div>

      <div className="mt-5 px-0.5">
        <div className="flex items-center gap-1 mb-2 font-sans">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={12} className={i < product.rating ? 'fill-gold text-gold' : 'text-gray-200'} />
          ))}
          <span className="text-sass-muted font-semibold text-xs ml-1">(24)</span>
        </div>
        <p className="font-sans font-bold text-sass-rose uppercase text-[10px] tracking-[0.16em] mb-1">{product.category}</p>
        <h3 className="font-display font-medium text-sass-ink text-lg group-hover:text-sass-rose transition-colors">{product.name}</h3>
        <p className="mt-2 text-sm text-sass-muted leading-relaxed font-sans">{product.description}</p>
        <p className="text-base font-semibold text-sass-ink mt-2 font-sans">₹{product.price}</p>
      </div>
    </div>
  );
};

const ProductGrid = ({ onAddToCart }) => {
  const [canHover, setCanHover] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(hover: hover) and (pointer: fine)');
    const update = () => setCanHover(mq.matches);
    update();
    if (mq.addEventListener) {
      mq.addEventListener('change', update);
      return () => mq.removeEventListener('change', update);
    }
    mq.addListener(update);
    return () => mq.removeListener(update);
  }, []);

  return (
    <section id="products" className="py-16 md:py-24 px-5 sm:px-6 md:px-12 bg-sass-cream border-t border-black/[0.05]">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 max-w-7xl mx-auto">
        <div>
          <p className="text-[10px] uppercase tracking-[0.22em] text-sass-rose font-bold mb-3 font-sans">Best sellers</p>
          <h2 className="font-display font-medium text-sass-ink text-[clamp(26px,4vw,36px)] mb-3">Our bubble stars</h2>
          <p className="text-sass-muted max-w-md text-[15px] font-sans">
            Customer favourites — handcrafted bars and gift sets, ready to add to your ritual.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          {['All', 'Macaroon', 'Waffle', 'Gift Boxes'].map((cat) => (
            <button
              key={cat}
              type="button"
              className="px-4 py-2 rounded-md border border-black/[0.1] bg-white font-sans font-semibold text-[10px] uppercase tracking-[0.12em] text-sass-ink hover:border-sass-rose hover:text-sass-rose transition-colors"
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-14 max-w-7xl mx-auto">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={onAddToCart}
            canHover={canHover}
          />
        ))}
      </div>

      <div className="mt-14 text-center max-w-7xl mx-auto">
        <a href="#products" className="btn-sass-outline">
          View all
        </a>
      </div>
    </section>
  );
};

export default ProductGrid;

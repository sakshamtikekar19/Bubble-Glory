import React from 'react';

const categories = [
  {
    label: 'Macaroon Soaps',
    href: '#products',
    image: 'https://images.unsplash.com/photo-1605264964528-06403738d6dc?q=80&w=400&auto=format&fit=crop',
    ring: 'ring-pink-200',
  },
  {
    label: 'Waffle Soaps',
    href: '#products',
    image: 'https://images.unsplash.com/photo-1600857062241-98e5dba7f214?q=80&w=400&auto=format&fit=crop',
    ring: 'ring-amber-100',
  },
  {
    label: 'Gift Boxes',
    href: '#products',
    image: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=400&auto=format&fit=crop',
    ring: 'ring-rose-200',
  },
  {
    label: 'Bath Rituals',
    href: '#story',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=400&auto=format&fit=crop',
    ring: 'ring-violet-100',
  },
  {
    label: 'New Drops',
    href: '#products',
    image: 'https://images.unsplash.com/photo-1590439471364-192aa70c0b53?q=80&w=400&auto=format&fit=crop',
    ring: 'ring-emerald-100',
  },
];

const ShopByCategory = () => {
  return (
    <section className="py-12 md:py-16 px-4 sm:px-6 md:px-12 bg-white border-y border-[#F3E8EC]">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="font-serif text-[clamp(22px,4.5vw,34px)] tracking-tight text-[#1A1A1A] mb-2">
          Handcrafted &amp; luxurious body care awaits you!
        </h2>
        <p className="text-sm md:text-base text-[#6B6B6B] max-w-xl mx-auto mb-10">
          Shop by category — the same playful, premium flow you love from artisan bath brands.
        </p>

        <div className="flex gap-6 md:gap-10 justify-start md:justify-center overflow-x-auto pb-2 scrollbar-hide -mx-1 px-1 snap-x snap-mandatory md:overflow-visible">
          {categories.map((cat) => (
            <a
              key={cat.label}
              href={cat.href}
              className="flex flex-col items-center gap-3 min-w-[88px] snap-center shrink-0 group"
            >
              <span
                className={`relative w-[76px] h-[76px] md:w-[100px] md:h-[100px] rounded-full overflow-hidden ring-4 ${cat.ring} shadow-soft transition-transform duration-300 group-hover:scale-105 group-active:scale-95`}
              >
                <img
                  src={cat.image}
                  alt=""
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </span>
              <span className="text-[11px] md:text-xs font-semibold uppercase tracking-[0.12em] text-[#1A1A1A] text-center max-w-[100px] leading-tight">
                {cat.label}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopByCategory;

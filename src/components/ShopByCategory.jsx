import React from 'react';

const categories = [
  {
    label: 'Macaroon soaps',
    href: '#products',
    image: 'https://images.unsplash.com/photo-1605264964528-06403738d6dc?q=80&w=400&auto=format&fit=crop',
    ring: 'ring-[#E8C4CF]',
  },
  {
    label: 'Waffle soaps',
    href: '#products',
    image: 'https://images.unsplash.com/photo-1600857062241-98e5dba7f214?q=80&w=400&auto=format&fit=crop',
    ring: 'ring-[#E5D4C8]',
  },
  {
    label: 'Gift boxes',
    href: '#products',
    image: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=400&auto=format&fit=crop',
    ring: 'ring-[#E8C4CF]',
  },
  {
    label: 'Bath rituals',
    href: '#story',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=400&auto=format&fit=crop',
    ring: 'ring-[#D4C4E0]',
  },
  {
    label: 'New drops',
    href: '#products',
    image: 'https://images.unsplash.com/photo-1590439471364-192aa70c0b53?q=80&w=400&auto=format&fit=crop',
    ring: 'ring-[#C8E0D4]',
  },
];

const ShopByCategory = () => {
  return (
    <section className="py-14 md:py-20 px-4 sm:px-6 md:px-12 bg-white border-y border-black/[0.06]">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="font-sans font-bold text-[clamp(15px,3.2vw,20px)] uppercase tracking-[0.14em] text-sass-ink leading-snug mb-10 px-2">
          Bubble &amp;{' '}
          <span className="italic font-semibold normal-case tracking-normal text-sass-rose">&apos;luxe&apos;</span>
          {' '}
          functional bodycare awaits you!
        </h2>

        <div className="flex gap-5 md:gap-12 justify-start md:justify-center overflow-x-auto pb-2 scrollbar-hide -mx-1 px-1 snap-x snap-mandatory md:overflow-visible">
          {categories.map((cat) => (
            <a
              key={cat.label}
              href={cat.href}
              className="flex flex-col items-center gap-3 min-w-[80px] snap-center shrink-0 group"
            >
              <span
                className={`relative w-[72px] h-[72px] md:w-[92px] md:h-[92px] rounded-full overflow-hidden ring-[3px] ${cat.ring} shadow-[0_6px_24px_rgba(0,0,0,0.06)] transition-transform duration-300 group-hover:scale-[1.06] group-active:scale-95`}
              >
                <img
                  src={cat.image}
                  alt=""
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </span>
              <span className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.16em] text-sass-ink text-center max-w-[104px] leading-tight">
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

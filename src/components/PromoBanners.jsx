import React from 'react';
import { ArrowRight } from 'lucide-react';

const promos = [
  {
    eyebrow: 'Macaroon collection',
    title: 'Dessert-inspired soaps',
    body:
      'Luxurious bars crafted from nourishing oils and butters — gentle oil-cleansing feel, skin-loving ingredients, and a whimsical finish for your daily ritual.',
    cta: 'Shop now',
    href: '#products',
    image: 'https://images.unsplash.com/photo-1547793548-7a040dd3a274?q=80&w=900&auto=format&fit=crop',
    bg: 'bg-[#FDF6F8]',
    reverse: false,
  },
  {
    eyebrow: 'Perfect for gifting',
    title: 'Curated gift boxes',
    body:
      'Thoughtfully packed sets for birthdays, brides, and self-care moments — premium presentation, soft fragrances, handmade charm.',
    cta: 'Shop now',
    href: '#products',
    image: 'https://images.unsplash.com/photo-1513201099705-a9746e1e201f?q=80&w=900&auto=format&fit=crop',
    bg: 'bg-[#F8F4F0]',
    reverse: true,
  },
];

const PromoBanners = () => {
  return (
    <div className="flex flex-col">
      {promos.map((p) => (
        <section
          key={p.title}
          className={`${p.bg} border-b border-[#EEE5E8]`}
        >
          <div
            className={`max-w-6xl mx-auto flex flex-col md:flex-row md:items-stretch ${
              p.reverse ? 'md:flex-row-reverse' : ''
            }`}
          >
            <div className="w-full md:w-1/2 aspect-[4/3] md:aspect-auto md:min-h-[320px]">
              <img
                src={p.image}
                alt=""
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="w-full md:w-1/2 flex flex-col justify-center px-6 sm:px-10 md:px-14 py-12 md:py-16">
              <p className="text-[11px] uppercase tracking-[0.25em] text-[#C9A96E] mb-3">
                {p.eyebrow}
              </p>
              <h2 className="font-serif text-[clamp(26px,4vw,36px)] text-[#1A1A1A] mb-4 leading-tight">
                {p.title}
              </h2>
              <p className="text-[15px] text-[#6B6B6B] leading-relaxed mb-8 max-w-md">
                {p.body}
              </p>
              <a
                href={p.href}
                className="inline-flex items-center gap-2 self-start px-8 py-3.5 bg-[#1A1A1A] text-white text-[12px] font-semibold uppercase tracking-[1.5px] rounded-full hover:bg-[#333] transition-colors"
              >
                {p.cta}
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default PromoBanners;

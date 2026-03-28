import React from 'react';

const promos = [
  {
    eyebrow: 'Macaroon collection',
    title: 'Dessert-inspired soaps',
    body:
      'Luxurious bars crafted from nourishing oils and butters — gentle oil-cleansing feel, skin-loving ingredients, and a whimsical finish for your daily ritual.',
    cta: 'Shop now',
    href: '#products',
    image: 'https://images.unsplash.com/photo-1547793548-7a040dd3a274?q=80&w=900&auto=format&fit=crop',
    bg: 'bg-[#FFFBF9]',
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
    bg: 'bg-[#F9F3F5]',
    reverse: true,
  },
];

const PromoBanners = () => {
  return (
    <div className="flex flex-col">
      {promos.map((p) => (
        <section key={p.title} className={`${p.bg} border-b border-black/[0.06]`}>
          <div
            className={`max-w-6xl mx-auto flex flex-col md:flex-row md:items-stretch ${
              p.reverse ? 'md:flex-row-reverse' : ''
            }`}
          >
            <div className="w-full md:w-1/2 aspect-[5/4] md:aspect-auto md:min-h-[340px]">
              <img
                src={p.image}
                alt=""
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="w-full md:w-1/2 flex flex-col justify-center px-6 sm:px-10 md:px-16 py-12 md:py-20">
              <p className="text-[10px] uppercase tracking-[0.22em] text-sass-rose font-bold mb-4">
                {p.eyebrow}
              </p>
              <h2 className="font-display font-semibold text-[clamp(22px,3.5vw,32px)] text-sass-ink mb-5 leading-tight uppercase tracking-[0.04em]">
                {p.title}
              </h2>
              <p className="text-[15px] text-sass-muted leading-[1.75] mb-9 max-w-md font-sans">
                {p.body}
              </p>
              <a href={p.href} className="btn-sass-primary self-start">
                {p.cta}
              </a>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default PromoBanners;

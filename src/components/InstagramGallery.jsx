import React from 'react';

const gallery = [
  'https://images.unsplash.com/photo-1605264964528-06403738d6dc?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1590439471364-192aa70c0b53?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1547793549-703882ad264a?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=1200&auto=format&fit=crop',
];

const InstagramGallery = () => {
  return (
    <section className="py-16 md:py-24 px-6 md:px-12 bg-sass-cream2 border-t border-black/[0.05]">
      <div className="max-w-6xl mx-auto">
        <p className="uppercase tracking-[0.22em] text-sass-rose text-[10px] font-bold mb-4 text-center font-sans">Instagram moments</p>
        <h2 className="text-center mb-12 font-display font-medium text-sass-ink text-[clamp(24px,3.5vw,32px)]">
          A glimpse into the Bubble &amp; Glory ritual
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {gallery.map((img) => (
            <div
              key={img}
              className="aspect-square overflow-hidden rounded-lg border border-black/[0.06] shadow-soft"
            >
              <img
                src={img}
                alt="Bubble and Glory product"
                className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstagramGallery;

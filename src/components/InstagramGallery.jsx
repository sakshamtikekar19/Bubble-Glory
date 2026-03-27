import React from 'react';

const gallery = [
  'https://images.unsplash.com/photo-1605264964528-06403738d6dc?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1590439471364-192aa70c0b53?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1547793549-703882ad264a?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=1200&auto=format&fit=crop',
];

const InstagramGallery = () => {
  return (
    <section className="py-24 md:py-28 px-6 md:px-12 bg-[#F9F3EE]">
      <div className="max-w-6xl mx-auto">
        <p className="uppercase tracking-[2px] text-[#C9A96E] text-xs mb-5 text-center">Instagram Moments</p>
        <h2 className="text-center mb-12">A Glimpse Into The Bubble & Glory Ritual</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {gallery.map((img) => (
            <div
              key={img}
              className="aspect-square overflow-hidden rounded-2xl"
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

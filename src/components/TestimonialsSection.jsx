import React from 'react';

const testimonials = [
  {
    name: 'Ananya S.',
    quote:
      'The texture, fragrance, and finish feel truly luxurious. My shower routine finally feels like a self-care ritual.',
  },
  {
    name: 'Rhea M.',
    quote:
      'I gifted the soap box to my sister and she loved everything about it - the packaging, scents, and handcrafted feel.',
  },
  {
    name: 'Priya K.',
    quote:
      'Gentle on skin, beautiful to look at, and perfectly premium. Exactly what I wanted from an artisanal soap brand.',
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-16 md:py-24 px-6 md:px-12 bg-white border-t border-black/[0.05]">
      <div className="max-w-6xl mx-auto">
        <p className="uppercase tracking-[0.22em] text-sass-rose text-[10px] font-bold mb-4 text-center font-sans">Our customers</p>
        <h2 className="text-center mb-12 font-display font-medium text-sass-ink text-[clamp(24px,3.5vw,32px)]">
          Loved by self-care enthusiasts
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((item) => (
            <div
              key={item.name}
              className="card bg-sass-cream/90 hover:-translate-y-0.5 transition-transform duration-300"
            >
              <p className="mb-5 font-sans text-sass-muted text-[15px] leading-relaxed">&ldquo;{item.quote}&rdquo;</p>
              <small className="text-sass-ink font-semibold font-sans text-sm">— {item.name}</small>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

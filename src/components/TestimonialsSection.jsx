import React from 'react';
import { motion } from 'framer-motion';

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
  const premiumEase = [0.16, 1, 0.3, 1];

  return (
    <section className="py-24 md:py-28 px-6 md:px-12 bg-[#FCF8F5]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: premiumEase }}
        className="max-w-6xl mx-auto"
      >
        <p className="uppercase tracking-[2px] text-[#C9A96E] text-xs mb-5 text-center">Testimonials</p>
        <h2 className="text-center mb-12">Loved By Self-Care Enthusiasts</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((item, idx) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: premiumEase, delay: idx * 0.08 }}
              className="card bg-white/85 hover:-translate-y-1"
            >
              <p className="mb-5">"{item.quote}"</p>
              <small className="text-[#1A1A1A] font-medium">- {item.name}</small>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default TestimonialsSection;

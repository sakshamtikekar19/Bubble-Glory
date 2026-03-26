import React from 'react';
import { motion } from 'framer-motion';

const OurStorySection = () => {
  const premiumEase = [0.16, 1, 0.3, 1];

  return (
    <section className="py-24 md:py-28 px-6 md:px-12 bg-[#FBF6F2]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 1, ease: premiumEase }}
        className="max-w-5xl mx-auto"
      >
        <p className="uppercase tracking-[2px] text-[#C9A96E] text-xs mb-5">Our Story</p>
        <h2 className="mb-6">Handcrafted Moments Of Gentle Indulgence</h2>
        <p className="max-w-3xl">
          Bubble & Glory is a small-batch handmade soap studio creating artisanal bathing bars for modern self-care rituals.
          Each piece is thoughtfully crafted with skin-loving ingredients, soft fragrances, and a luxurious finish that turns
          everyday bathing into a calming, nourishing pause.
        </p>
      </motion.div>
    </section>
  );
};

export default OurStorySection;

import React from 'react';

const OurStorySection = () => {
  return (
    <section id="story" className="py-16 md:py-24 px-6 md:px-12 bg-sass-cream2">
      <div className="max-w-5xl mx-auto">
        <p className="uppercase tracking-[0.22em] text-sass-rose text-[10px] font-bold mb-4 font-sans">Our story</p>
        <h2 className="font-display font-medium text-sass-ink text-[clamp(26px,4vw,36px)] mb-6 leading-tight">
          Handcrafted moments of gentle indulgence
        </h2>
        <p className="max-w-3xl font-sans text-sass-muted text-[15px] leading-[1.8]">
          Bubble &amp; Glory is a small-batch handmade soap studio creating artisanal bathing bars for modern self-care rituals.
          Each piece is thoughtfully crafted with skin-loving ingredients, soft fragrances, and a luxurious finish that turns
          everyday bathing into a calming, nourishing pause.
        </p>
      </div>
    </section>
  );
};

export default OurStorySection;

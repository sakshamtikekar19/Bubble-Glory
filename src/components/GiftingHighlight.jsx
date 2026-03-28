import React from 'react';
import { Gift, HeartHandshake } from 'lucide-react';

const GiftingHighlight = () => {
  return (
    <section className="py-16 md:py-24 px-6 md:px-12 bg-white border-y border-black/[0.06]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        <div className="card bg-sass-cream/80">
          <div className="w-12 h-12 rounded-full bg-sass-blush flex items-center justify-center mb-5">
            <Gift size={20} className="text-sass-ink" strokeWidth={1.5} />
          </div>
          <h3 className="font-display font-medium text-sass-ink mb-3">Perfect for gifting</h3>
          <p className="font-sans text-sass-muted text-[15px] leading-relaxed">
            From birthdays to bridal hampers, our curated soap boxes are designed to feel thoughtful, feminine, and premium.
            Beautifully packed, ready to delight.
          </p>
        </div>

        <div className="card bg-sass-cream/80">
          <div className="w-12 h-12 rounded-full bg-sass-blush flex items-center justify-center mb-5">
            <HeartHandshake size={20} className="text-sass-ink" strokeWidth={1.5} />
          </div>
          <h3 className="font-display font-medium text-sass-ink mb-3">Why Bubble &amp; Glory</h3>
          <p className="font-sans text-sass-muted text-[15px] leading-relaxed">
            Every bar is handcrafted in small batches, made to be gentle on skin, and created to elevate your self-care routine
            with artisanal quality and a soft luxury feel.
          </p>
        </div>
      </div>
    </section>
  );
};

export default GiftingHighlight;

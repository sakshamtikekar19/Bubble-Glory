import React from 'react';
import { Gift, HeartHandshake } from 'lucide-react';

const GiftingHighlight = () => {
  return (
    <section className="py-24 md:py-28 px-6 md:px-12 bg-[#F8F2ED]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="card bg-white/85">
          <div className="w-12 h-12 rounded-full bg-[#F1DAD2] flex items-center justify-center mb-5">
            <Gift size={20} className="text-[#1A1A1A]" />
          </div>
          <h3 className="mb-3">Perfect For Gifting</h3>
          <p>
            From birthdays to bridal hampers, our curated soap boxes are designed to feel thoughtful, feminine, and premium.
            Beautifully packed, ready to delight.
          </p>
        </div>

        <div className="card bg-white/85">
          <div className="w-12 h-12 rounded-full bg-[#F1DAD2] flex items-center justify-center mb-5">
            <HeartHandshake size={20} className="text-[#1A1A1A]" />
          </div>
          <h3 className="mb-3">Why Choose Bubble & Glory</h3>
          <p>
            Every bar is handcrafted in small batches, made to be gentle on skin, and created to elevate your self-care routine
            with artisanal quality and a soft luxury feel.
          </p>
        </div>
      </div>
    </section>
  );
};

export default GiftingHighlight;

import React from 'react';
import { Leaf, Heart, Truck, ShieldCheck, Sparkles, Droplets } from 'lucide-react';

const badges = [
  { icon: Leaf, label: 'Paraben free' },
  { icon: Heart, label: 'Cruelty free' },
  { icon: Sparkles, label: 'Vegan & plant based' },
  { icon: ShieldCheck, label: 'Handmade' },
  { icon: Droplets, label: 'Sulphate free' },
  { icon: Truck, label: 'Pan-India shipping' },
];

const TrustStrip = () => {
  return (
    <section className="py-12 md:py-14 px-4 sm:px-6 md:px-12 bg-[#F5F0F2] border-y border-black/[0.05]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 md:gap-6 text-center">
          {badges.map(({ icon: Icon, label }) => (
            <div key={label} className="flex flex-col items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[#C77B94] shadow-[0_4px_16px_rgba(0,0,0,0.05)]">
                <Icon size={22} strokeWidth={1.5} />
              </div>
              <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.16em] text-sass-ink leading-tight max-w-[120px]">
                {label}
              </span>
            </div>
          ))}
        </div>
        <p className="mt-10 text-center text-[12px] text-sass-muted max-w-2xl mx-auto leading-relaxed font-sans">
          For custom or bulk orders, connect with us — we&apos;re happy to help curate something special.
        </p>
      </div>
    </section>
  );
};

export default TrustStrip;

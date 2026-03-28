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
    <section className="py-10 md:py-12 px-4 sm:px-6 md:px-12 bg-[#1A1A1A] text-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-4 text-center">
          {badges.map(({ icon: Icon, label }) => (
            <div key={label} className="flex flex-col items-center gap-2">
              <div className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center text-bubblegum">
                <Icon size={20} strokeWidth={1.75} />
              </div>
              <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.14em] text-white/90">
                {label}
              </span>
            </div>
          ))}
        </div>
        <p className="mt-8 text-center text-xs text-white/50 max-w-2xl mx-auto leading-relaxed">
          For custom or bulk orders, reach out — we&apos;re happy to help curate something special.
        </p>
      </div>
    </section>
  );
};

export default TrustStrip;

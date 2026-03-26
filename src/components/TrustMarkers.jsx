import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Heart, Truck, Leaf } from 'lucide-react';

const TrustMarkers = () => {
  const premiumEase = [0.16, 1, 0.3, 1];

  const markers = [
    {
      icon: <Leaf className="text-mint-dark" size={32} />,
      title: "SLS & Paraben Free",
      desc: "Made without harsh surfactants for a gentle, skin-loving cleanse.",
      bg: "bg-mint-light"
    },
    {
      icon: <Heart className="text-bubblegum" size={32} />,
      title: "Handmade with Love",
      desc: "Every bar is handcrafted in small batches with artisanal care.",
      bg: "bg-lavender-light"
    },
    {
      icon: <Truck className="text-gold" size={32} />,
      title: "Pan-India Shipping",
      desc: "Pan-India delivery for your self-care restock and gifting needs.",
      bg: "bg-soft-pink/20"
    },
    {
      icon: <ShieldCheck className="text-lavender-dark" size={32} />,
      title: "100% Vegan",
      desc: "Cruelty-free, thoughtfully formulated, and kind to skin.",
      bg: "bg-lavender/20"
    }
  ];

  return (
    <section className="py-24 md:py-28 px-6 md:px-12 bg-[#F9F3EE]">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {markers.map((marker, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -4 }}
            transition={{ delay: i * 0.08, duration: 0.9, ease: premiumEase }}
            className="flex flex-col items-center text-center group"
          >
            <div className={`w-20 h-20 ${marker.bg} rounded-3xl flex items-center justify-center mb-6 group-hover:scale-105 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] shadow-soft`}>
              {marker.icon}
            </div>
            <h3 className="font-bold text-gray-800 mb-2">{marker.title}</h3>
            <p className="text-gray-500 text-sm leading-relaxed max-w-[200px]">{marker.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TrustMarkers;

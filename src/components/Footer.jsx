import React from 'react';
import { Mail, MapPin, Phone, Globe, Heart, Sparkles } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-sass-ink text-white pt-20 pb-12 px-6 md:px-12 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-sass-rose/10 rounded-full blur-[100px] -z-0 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-sass-bar/15 rounded-full blur-[100px] -z-0 pointer-events-none" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10 max-w-7xl mx-auto">
        <div className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-display font-medium luxury-text-glow">
            Bubble <span className="text-sass-rose">&amp;</span> Glory
          </h2>
          <p className="text-white/55 leading-relaxed font-sans text-[15px]">
            Crafting luxury bathing experiences since 2024. Our artisan soaps are handmade with love, using only the finest natural ingredients.
          </p>
          <div className="flex gap-3">
            {[Globe, Heart, Sparkles].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-sass-rose hover:text-white hover:-translate-y-0.5 transition-all duration-300 border border-white/10"
                aria-label="Social link"
              >
                <Icon size={18} strokeWidth={1.5} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-xs font-bold mb-6 text-sass-rose uppercase tracking-[0.18em] font-sans">Shop</h4>
          <ul className="space-y-3 text-white/55 font-sans text-[15px]">
            {['All Products', 'Macaroon Soaps', 'Waffle Soaps', 'Gift Boxes', 'Limited Edition'].map((link) => (
              <li key={link}>
                <a href="#" className="hover:text-white transition-colors">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-bold mb-6 text-sass-rose uppercase tracking-[0.18em] font-sans">Support</h4>
          <ul className="space-y-3 text-white/55 font-sans text-[15px]">
            {['Shipping Policy', 'Returns & Refunds', 'Privacy Policy', 'Terms of Service', 'Contact Us'].map((link) => (
              <li key={link}>
                <a href="#" className="hover:text-white transition-colors">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-bold mb-6 text-sass-rose uppercase tracking-[0.18em] font-sans">Get in touch</h4>
          <ul className="space-y-4 text-white/55 font-sans text-[15px]">
            <li className="flex items-start gap-3">
              <MapPin size={18} className="text-sass-rose flex-shrink-0 mt-0.5" strokeWidth={1.5} />
              <span>123 Artisan Lane, <br /> Mumbai, Maharashtra 400001</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={18} className="text-sass-rose flex-shrink-0" strokeWidth={1.5} />
              <span>+91 98765 43210</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} className="text-sass-rose flex-shrink-0" strokeWidth={1.5} />
              <span>hello@bubbleandglory.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-16 pt-8 border-t border-white/10 text-center text-white/40 text-sm font-sans max-w-7xl mx-auto">
        <p>© 2026 Bubble &amp; Glory. All rights reserved. Designed with love.</p>
      </div>
    </footer>
  );
};

export default Footer;

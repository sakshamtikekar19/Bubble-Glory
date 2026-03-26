import React from 'react';
import { Mail, MapPin, Phone, Globe, Heart, Sparkles } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-24 pb-12 px-6 md:px-12 overflow-hidden relative">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-bubblegum/10 rounded-full blur-[100px] -z-0" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-lavender/10 rounded-full blur-[100px] -z-0" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
        {/* Brand */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold luxury-text-glow">
            Bubble <span className="text-bubblegum">&</span> Glory
          </h2>
          <p className="text-gray-400 leading-relaxed">
            Crafting luxury bathing experiences since 2024. Our artisan soaps are handmade with love, using only the finest natural ingredients.
          </p>
          <div className="flex gap-4">
            {[Globe, Heart, Sparkles].map((Icon, i) => (
              <a key={i} href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-bubblegum hover:text-white hover:-translate-y-1 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]">
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-bold mb-6 text-bubblegum">Shop</h4>
          <ul className="space-y-4 text-gray-400">
            {['All Products', 'Macaroon Soaps', 'Waffle Soaps', 'Gift Boxes', 'Limited Edition'].map((link) => (
              <li key={link}><a href="#" className="hover:text-white transition-colors duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">{link}</a></li>
            ))}
          </ul>
        </div>

        {/* Support */}
        <div>
          <h4 className="text-lg font-bold mb-6 text-bubblegum">Support</h4>
          <ul className="space-y-4 text-gray-400">
            {['Shipping Policy', 'Returns & Refunds', 'Privacy Policy', 'Terms of Service', 'Contact Us'].map((link) => (
              <li key={link}><a href="#" className="hover:text-white transition-colors duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">{link}</a></li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-lg font-bold mb-6 text-bubblegum">Get in Touch</h4>
          <ul className="space-y-4 text-gray-400">
            <li className="flex items-start gap-3">
              <MapPin size={20} className="text-bubblegum flex-shrink-0" />
              <span>123 Artisan Lane, <br /> Mumbai, Maharashtra 400001</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={20} className="text-bubblegum flex-shrink-0" />
              <span>+91 98765 43210</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={20} className="text-bubblegum flex-shrink-0" />
              <span>hello@bubbleandglory.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-20 pt-8 border-t border-white/5 text-center text-gray-500 text-sm">
        <p>© 2026 Bubble & Glory. All rights reserved. Designed with love.</p>
      </div>
    </footer>
  );
};

export default Footer;

import React, { useState } from 'react';
import { Mail } from 'lucide-react';

const NewsletterSection = () => {
  const [email, setEmail] = useState('');

  return (
    <section className="py-14 md:py-16 px-4 sm:px-6 md:px-12 bg-[#FCE8EE] border-t border-[#F3D4DF]">
      <div className="max-w-xl mx-auto text-center">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-soft text-[#E8A4B8] mb-4">
          <Mail size={22} />
        </div>
        <h2 className="font-serif text-2xl md:text-3xl text-[#1A1A1A] mb-2">
          Sign up to our newsletter
        </h2>
        <p className="text-sm text-[#6B6B6B] mb-8">
          Receive special offers and first look at new drops.
        </p>
        <form
          className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          onSubmit={(e) => {
            e.preventDefault();
            setEmail('');
          }}
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email"
            className="flex-1 px-4 py-3.5 rounded-full border border-[#E8C4D0] bg-white text-sm text-[#1A1A1A] placeholder:text-[#A89CA0] focus:outline-none focus:ring-2 focus:ring-[#E8A4B8]/50"
          />
          <button
            type="submit"
            className="px-8 py-3.5 rounded-full bg-[#1A1A1A] text-white text-[12px] font-semibold uppercase tracking-[1.5px] hover:bg-[#333] transition-colors shrink-0"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default NewsletterSection;

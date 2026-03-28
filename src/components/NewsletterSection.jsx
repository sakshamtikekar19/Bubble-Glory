import React, { useState } from 'react';

const NewsletterSection = () => {
  const [email, setEmail] = useState('');

  return (
    <section className="py-16 md:py-20 px-4 sm:px-6 md:px-12 bg-[#F5E4EA] border-t border-[#E8CCD5]">
      <div className="max-w-lg mx-auto text-center">
        <h2 className="font-display text-2xl md:text-[1.75rem] font-medium text-sass-ink mb-3">
          Sign up to our newsletter
        </h2>
        <p className="text-sm text-sass-muted mb-9 font-sans">
          Receive special offers and first look at new products.
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
            className="flex-1 px-4 py-3.5 rounded-md border border-black/10 bg-white text-sm text-sass-ink placeholder:text-black/35 focus:outline-none focus:ring-2 focus:ring-sass-rose/30 font-sans"
          />
          <button type="submit" className="btn-sass-primary shrink-0 rounded-md">
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default NewsletterSection;

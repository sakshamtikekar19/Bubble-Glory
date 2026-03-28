import React, { useEffect, useMemo, useState } from 'react';

const LandingBubbles = () => {
  const [visible, setVisible] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 768px)');
    const update = () => setIsMobile(mq.matches);
    update();
    if (mq.addEventListener) {
      mq.addEventListener('change', update);
      return () => mq.removeEventListener('change', update);
    }
    mq.addListener(update);
    return () => mq.removeListener(update);
  }, []);

  const bubbles = useMemo(
    () =>
      Array.from({ length: isMobile ? 40 : 28 }).map((_, i) => ({
        id: i,
        size: isMobile ? 16 + (i % 5) * 9 : 10 + (i % 5) * 6,
        left: 6 + ((i * 7.3) % 88),
        delay: (i % 6) * (isMobile ? 0.08 : 0.12),
        duration: isMobile ? 2.4 + (i % 4) * 0.45 : 1.9 + (i % 4) * 0.35,
        opacity: isMobile ? 0.32 + (i % 3) * 0.14 : 0.2 + (i % 3) * 0.1,
      })),
    [isMobile]
  );

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), isMobile ? 4200 : 3400);
    return () => clearTimeout(timer);
  }, [isMobile]);

  if (!visible) return null;

  return (
    <div className="landing-bubbles" aria-hidden="true">
      {bubbles.map((bubble) => (
        <span
          key={bubble.id}
          className="landing-bubble"
          style={{
            width: `${bubble.size}px`,
            height: `${bubble.size}px`,
            left: `${bubble.left}%`,
            animationDelay: `${bubble.delay}s`,
            animationDuration: `${bubble.duration}s`,
            opacity: bubble.opacity,
            ['--bubble-opacity']: bubble.opacity,
          }}
        />
      ))}
    </div>
  );
};

export default LandingBubbles;

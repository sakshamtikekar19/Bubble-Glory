import React, { useEffect, useMemo, useState } from 'react';

const LandingBubbles = () => {
  const [visible, setVisible] = useState(true);

  const bubbles = useMemo(
    () =>
      Array.from({ length: 14 }).map((_, i) => ({
        id: i,
        size: 10 + (i % 5) * 6,
        left: 6 + ((i * 7.3) % 88),
        delay: (i % 6) * 0.12,
        duration: 1.9 + (i % 4) * 0.35,
        opacity: 0.2 + (i % 3) * 0.1,
      })),
    []
  );

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 3400);
    return () => clearTimeout(timer);
  }, []);

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
          }}
        />
      ))}
    </div>
  );
};

export default LandingBubbles;

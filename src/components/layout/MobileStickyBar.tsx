'use client';

import { useEffect, useState } from 'react';

export default function MobileStickyBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.querySelector('[data-hero]') || document.querySelector('.hero');
    if (!hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { threshold: 0 }
    );
    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-40 glass border-t border-border-dark/50 sm:hidden transition-all duration-300 ${
        visible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
      }`}
      style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
    >
      <div className="px-4 py-3">
        <button
          onClick={() => window.dispatchEvent(new CustomEvent('open-apply'))}
          className="w-full bg-burnt-amber hover:bg-burnt-amber-hover text-white font-bold rounded-xl py-3.5 flex items-center justify-center gap-2.5 transition-all duration-300 hover:shadow-[0_4px_20px_rgba(200,117,51,0.3)] active:scale-[0.98]"
          style={{ fontSize: '15px', minHeight: '48px' }}
        >
          Apply Now
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}

'use client';

import type { Job } from '@/lib/types';
import { motion } from 'framer-motion';
import ScrollReveal from '@/components/motion/ScrollReveal';

export default function GrowthTrack({ stages }: { stages: Job['growth'] }) {
  return (
    <section className="pb-20 max-sm:pb-10">
      <ScrollReveal direction="left" distance={24} duration={0.5}>
        <h2
          className="gradient-text-teal uppercase font-bold mb-3"
          style={{ fontSize: '11px', letterSpacing: '3px' }}
        >
          YOUR GROWTH PATH
        </h2>

        <p className="text-text-light-secondary text-sm leading-relaxed mb-10 max-sm:mb-6">
          Where this role takes you.
        </p>
      </ScrollReveal>

      {/* Desktop: horizontal cards */}
      <div className="hidden sm:grid grid-cols-4 gap-3">
        {stages.map((stage, i) => (
          <motion.div
            key={i}
            className={`
              rounded-2xl p-5 border text-center transition-all duration-300
              hover:scale-[1.03]
              ${stage.active
                ? 'glass border-wealth-teal/30 shadow-[0_0_20px_rgba(10,141,122,0.12)]'
                : 'glass border-border-dark/40 hover:border-border-dark/60'
              }
            `}
            initial={{ opacity: 0, y: 30, scale: 0.92 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{
              duration: 0.6,
              delay: i * 0.12,
              ease: [0.33, 1, 0.68, 1],
            }}
          >
            <span
              className="text-text-light-secondary uppercase font-bold block mb-2"
              style={{ fontSize: '10px', letterSpacing: '1.5px' }}
            >
              {stage.period}
            </span>
            <span className="text-soft-sand font-semibold text-sm block mb-2 leading-snug">
              {stage.milestone}
            </span>
            <span className={`font-bold text-sm ${stage.active ? 'gradient-text' : 'text-burnt-amber'}`}>
              {stage.pay}
            </span>
            {stage.active && (
              <div className="mt-3 flex justify-center">
                <span
                  className="inline-block w-1.5 h-1.5 rounded-full bg-wealth-teal"
                  style={{ animation: 'glow-pulse 2s ease-in-out infinite' }}
                />
              </div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Mobile: vertical cards */}
      <div className="sm:hidden flex flex-col gap-3">
        {stages.map((stage, i) => (
          <motion.div
            key={i}
            className={`
              rounded-xl p-4 border flex items-center gap-4
              ${stage.active
                ? 'glass border-wealth-teal/30'
                : 'glass border-border-dark/40'
              }
            `}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{
              duration: 0.5,
              delay: i * 0.1,
              ease: [0.33, 1, 0.68, 1],
            }}
          >
            <div className={`w-10 h-10 rounded-xl shrink-0 flex items-center justify-center text-sm font-black ${stage.active ? 'bg-wealth-teal/15 text-wealth-teal' : 'bg-deep-slate-lighter/50 text-text-light-secondary'}`}>
              {i + 1}
            </div>
            <div className="flex-1 min-w-0">
              <span
                className="text-text-light-secondary uppercase font-bold block mb-0.5"
                style={{ fontSize: '10px', letterSpacing: '1.5px' }}
              >
                {stage.period}
              </span>
              <span className="text-soft-sand font-semibold text-sm block">
                {stage.milestone}
              </span>
            </div>
            <span className={`font-bold text-sm shrink-0 ${stage.active ? 'gradient-text' : 'text-burnt-amber'}`}>
              {stage.pay}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

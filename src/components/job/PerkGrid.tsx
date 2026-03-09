'use client';

import type { Job } from '@/lib/types';
import { motion } from 'framer-motion';
import ScrollReveal from '@/components/motion/ScrollReveal';

export default function PerkGrid({ perks }: { perks: Job['perks'] }) {
  return (
    <section className="mb-20 max-sm:mb-10">
      <ScrollReveal direction="left" distance={24} duration={0.5}>
        <h2
          className="gradient-text-teal uppercase font-bold mb-10 max-sm:mb-6"
          style={{ fontSize: '11px', letterSpacing: '3px' }}
        >
          WHAT&apos;S IN IT FOR YOU
        </h2>
      </ScrollReveal>

      <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-4 max-sm:gap-3">
        {perks.map((perk, i) => (
          <motion.div
            key={i}
            className="glass rounded-2xl border border-border-dark/40 p-6 max-sm:p-5 gradient-border hover:scale-[1.02] hover:border-border-dark/60 transition-all duration-300"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{
              duration: 0.55,
              delay: i * 0.1,
              ease: [0.25, 0.1, 0.25, 1],
            }}
          >
            <span className="text-2xl block mb-3">{perk.emoji}</span>
            <h3 className="text-soft-sand font-semibold text-sm mb-1.5">
              {perk.title}
            </h3>
            <p className="text-text-light-secondary text-xs leading-relaxed">
              {perk.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

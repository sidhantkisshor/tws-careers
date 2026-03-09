'use client';

import type { Job } from '@/lib/types';
import { motion } from 'framer-motion';
import ScrollReveal from '@/components/motion/ScrollReveal';

const colorMap: Record<string, { bg: string; text: string }> = {
  amber: { bg: 'bg-burnt-amber/10', text: 'text-burnt-amber' },
  teal: { bg: 'bg-wealth-teal/10', text: 'text-wealth-teal' },
  gold: { bg: 'bg-brushed-gold/10', text: 'text-brushed-gold' },
};

export default function CardGrid({ items }: { items: Job['responsibilities'] }) {
  return (
    <section className="pb-20 max-sm:pb-10">
      <ScrollReveal direction="left" distance={24} duration={0.5}>
        <h2
          className="gradient-text-teal uppercase font-bold mb-10 max-sm:mb-6"
          style={{ fontSize: '11px', letterSpacing: '3px' }}
        >
          WHAT YOU&apos;LL OWN
        </h2>
      </ScrollReveal>

      <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-4 max-sm:gap-3">
        {items.map((item, i) => {
          const color = colorMap[item.iconColor] || colorMap.amber;
          return (
            <motion.div
              key={i}
              className="glass rounded-2xl border border-border-dark/40 gradient-border p-6 max-sm:p-4 sm:hover:-translate-y-1 sm:hover:border-border-dark/60 transition-all duration-400"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{
                duration: 0.6,
                delay: i * 0.1,
                ease: [0.25, 0.1, 0.25, 1],
              }}
            >
              <div
                className={`w-11 h-11 max-sm:w-9 max-sm:h-9 text-lg rounded-xl ${color.bg} flex items-center justify-center mb-4 max-sm:mb-3`}
              >
                <span className={color.text}>{item.icon}</span>
              </div>
              <h3 className="text-soft-sand font-semibold text-sm mb-1.5">
                {item.title}
              </h3>
              <p className="text-text-light-secondary text-xs leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

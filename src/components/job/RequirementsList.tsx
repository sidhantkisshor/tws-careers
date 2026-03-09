'use client';

import type { Job } from '@/lib/types';
import { motion } from 'framer-motion';
import ScrollReveal from '@/components/motion/ScrollReveal';

export default function RequirementsList({ items }: { items: Job['requirements'] }) {
  return (
    <section className="mb-20 max-sm:mb-10">
      <motion.div
        className="section-line-animated mb-20 max-sm:mb-10"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
      />
      <ScrollReveal direction="left" distance={24} duration={0.5}>
        <h2
          className="gradient-text-teal uppercase font-bold mb-10 max-sm:mb-6"
          style={{ fontSize: '11px', letterSpacing: '3px' }}
        >
          MUST-HAVES
        </h2>
      </ScrollReveal>

      <div className="flex flex-col gap-5 max-sm:gap-3.5">
        {items.map((item, i) => (
          <motion.div
            key={i}
            className="flex items-start gap-4 max-sm:gap-3 group"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{
              duration: 0.5,
              delay: i * 0.08,
              ease: [0.33, 1, 0.68, 1],
            }}
          >
            <div className="w-7 h-7 max-sm:w-6 max-sm:h-6 shrink-0 rounded-lg bg-wealth-teal/10 border border-wealth-teal/20 flex items-center justify-center mt-0.5 group-hover:bg-wealth-teal/20 group-hover:border-wealth-teal/40 transition-colors duration-300">
              <svg
                width="13"
                height="13"
                viewBox="0 0 12 12"
                fill="none"
                className="text-wealth-teal"
              >
                <path
                  d="M2.5 6L5 8.5L9.5 3.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <p className="text-sm max-sm:text-[13px] leading-relaxed pt-0.5">
              <span className="text-soft-sand font-bold">{item.bold}</span>{' '}
              <span className="text-text-light-secondary">{item.rest}</span>
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

'use client';

import type { Job } from '@/lib/types';
import { motion } from 'framer-motion';
import ScrollReveal from '@/components/motion/ScrollReveal';

export default function ToolsGrid({ tools }: { tools: Job['tools'] }) {
  return (
    <section className="pb-20 max-sm:pb-10">
      <motion.div
        className="section-line-animated mb-20 max-sm:mb-10"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
      />
      <ScrollReveal direction="left" distance={24} duration={0.5}>
        <h2
          className="gradient-text-teal uppercase font-bold mb-3"
          style={{ fontSize: '11px', letterSpacing: '3px' }}
        >
          TOOLS &amp; STACK
        </h2>

        <p className="text-text-light-secondary text-sm leading-relaxed mb-8 max-sm:mb-5">
          What you&apos;ll work with daily.
        </p>
      </ScrollReveal>

      <div className="grid grid-cols-3 max-sm:grid-cols-1 gap-4 max-sm:gap-3">
        {tools.map((tool, i) => (
          <motion.div
            key={i}
            className="glass rounded-2xl border border-border-dark/40 gradient-border p-6 text-center max-sm:flex max-sm:items-center max-sm:gap-4 max-sm:text-left max-sm:p-4 hover:scale-[1.03] hover:border-wealth-teal/30 transition-all duration-300"
            initial={{ opacity: 0, y: 24, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{
              duration: 0.55,
              delay: i * 0.12,
              ease: [0.33, 1, 0.68, 1],
            }}
          >
            <span className="text-3xl block mb-3 max-sm:mb-0 max-sm:text-2xl max-sm:shrink-0">
              {tool.icon}
            </span>
            <div>
              <h3 className="text-soft-sand font-semibold text-sm max-sm:whitespace-nowrap">
                {tool.title}
              </h3>
              <p className="text-text-light-secondary text-xs mt-1.5">
                {tool.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

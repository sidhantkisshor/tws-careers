'use client';

import type { Job } from '@/lib/types';
import { motion } from 'framer-motion';
import CountUp from '@/components/motion/CountUp';
import ScrollReveal from '@/components/motion/ScrollReveal';

export default function KpiGrid({ kpis, note }: { kpis: Job['kpis']; note: string }) {
  return (
    <section className="pb-20 max-sm:pb-10">
      <ScrollReveal direction="left" distance={24} duration={0.5}>
        <h2
          className="gradient-text-teal uppercase font-bold mb-3"
          style={{ fontSize: '11px', letterSpacing: '3px' }}
        >
          HOW YOU&apos;LL BE MEASURED
        </h2>

        <p className="text-text-light-secondary text-sm leading-relaxed mb-8 max-sm:mb-5">
          Clear targets from day one. No ambiguity.
        </p>
      </ScrollReveal>

      <div
        className="grid gap-4 max-sm:gap-3 mb-6"
        style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))' }}
      >
        {kpis.map((kpi, i) => (
          <motion.div
            key={i}
            className="glass rounded-2xl border border-border-dark/40 p-6 max-sm:p-4 text-center gradient-border transition-all duration-300"
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{
              duration: 0.6,
              delay: i * 0.1,
              ease: [0.25, 0.1, 0.25, 1],
            }}
          >
            <div
              className="gradient-text-teal font-black mb-2 leading-none"
              style={{ fontSize: 'clamp(28px, 4vw, 36px)' }}
            >
              <CountUp value={kpi.number} delay={i * 0.15} />
            </div>
            <div className="text-soft-sand font-semibold text-[13px] max-sm:text-[11px] mb-1.5">
              {kpi.label}
            </div>
            <div className="text-text-light-secondary text-xs max-sm:text-[11px] leading-relaxed">
              {kpi.description}
            </div>
          </motion.div>
        ))}
      </div>

      <ScrollReveal delay={0.3}>
        <p className="text-text-light-secondary text-[13px] max-sm:text-xs leading-relaxed opacity-70">
          {note}
        </p>
      </ScrollReveal>
    </section>
  );
}

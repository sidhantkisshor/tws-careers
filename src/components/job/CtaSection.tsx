'use client';

import type { Job } from '@/lib/types';
import { motion } from 'framer-motion';
import ApplyTrigger from '@/components/apply/ApplyTrigger';
import MagneticButton from '@/components/motion/MagneticButton';
import ScrollReveal from '@/components/motion/ScrollReveal';

export default function CtaSection({ cta }: { cta: Job['cta'] }) {
  return (
    <section className="text-center py-20 max-sm:py-12">
      <motion.div
        className="section-line-animated mb-20 max-sm:mb-12"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
      />

      <ScrollReveal direction="none" duration={0.6}>
        <p
          className="gradient-text-teal uppercase font-bold mb-5"
          style={{ fontSize: '11px', letterSpacing: '2.5px' }}
        >
          {cta.eyebrow}
        </p>
      </ScrollReveal>

      <ScrollReveal direction="up" distance={20} delay={0.1} duration={0.6}>
        <h2
          className="font-black text-soft-sand mb-5 max-sm:mb-4"
          style={{ fontSize: 'clamp(30px, 5vw, 48px)' }}
        >
          {cta.heading}
        </h2>
      </ScrollReveal>

      <ScrollReveal direction="up" distance={16} delay={0.2} duration={0.5}>
        <p className="text-text-light-secondary text-sm mb-10 max-sm:mb-7 max-w-md mx-auto leading-relaxed">
          {cta.subtext}
        </p>
      </ScrollReveal>

      <ScrollReveal direction="up" distance={20} delay={0.3} duration={0.6}>
        <MagneticButton className="inline-block" strength={0.25}>
          <ApplyTrigger
            className={`
              inline-flex items-center justify-center gap-2.5
              bg-burnt-amber text-warm-white-pure font-bold
              rounded-xl px-10 py-[18px] text-[15px]
              hover:bg-burnt-amber-hover hover:-translate-y-0.5
              hover:shadow-[0_8px_30px_rgba(200,117,51,0.25)]
              transition-all duration-300
              max-sm:w-full max-sm:py-4
              cursor-pointer
              group
              btn-shimmer
            `}
          >
            Apply Now
            <svg
              width="18"
              height="18"
              viewBox="0 0 16 16"
              fill="none"
              className="group-hover:translate-x-1 transition-transform duration-500 ease-[cubic-bezier(0.33,1,0.68,1)]"
            >
              <path
                d="M3 8h10M9 4l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </ApplyTrigger>
        </MagneticButton>
      </ScrollReveal>
    </section>
  );
}

'use client';

import type { Job } from '@/lib/types';
import { motion } from 'framer-motion';
import ScrollReveal from '@/components/motion/ScrollReveal';

export default function ProcessSteps({ steps }: { steps: Job['process'] }) {
  return (
    <section className="mb-20 max-sm:mb-10">
      <ScrollReveal direction="left" distance={24} duration={0.5}>
        <h2
          className="gradient-text-teal uppercase font-bold mb-10 max-sm:mb-6"
          style={{ fontSize: '11px', letterSpacing: '3px' }}
        >
          HOW IT WORKS
        </h2>
      </ScrollReveal>

      <div className="flex flex-col">
        {steps.map((step, i) => (
          <motion.div
            key={i}
            className="grid grid-cols-[56px_1fr] max-sm:grid-cols-[44px_1fr] gap-5 max-sm:gap-3"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{
              duration: 0.55,
              delay: i * 0.1,
              ease: [0.33, 1, 0.68, 1],
            }}
          >
            {/* Step number + line */}
            <div className="flex flex-col items-center">
              <motion.div
                className="w-12 h-12 max-sm:w-9 max-sm:h-9 rounded-xl glass border border-burnt-amber/20 flex items-center justify-center shrink-0 hover:border-burnt-amber/40 transition-colors duration-300"
                initial={{ scale: 0, rotate: -20 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.1 + 0.1,
                  ease: [0.33, 1, 0.68, 1],
                }}
              >
                <span className="gradient-text font-black text-base max-sm:text-sm">
                  {i + 1}
                </span>
              </motion.div>
              {i < steps.length - 1 && (
                <motion.div
                  className="w-px flex-1 min-h-[28px] bg-gradient-to-b from-burnt-amber/25 to-transparent my-1.5"
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  viewport={{ once: true, margin: '-20px' }}
                  transition={{
                    duration: 0.5,
                    delay: i * 0.1 + 0.3,
                    ease: [0.25, 0.1, 0.25, 1],
                  }}
                  style={{ transformOrigin: 'top' }}
                />
              )}
            </div>

            {/* Content */}
            <div className={i < steps.length - 1 ? 'pb-7 max-sm:pb-5' : ''}>
              <h3 className="text-soft-sand font-semibold text-[15px] max-sm:text-sm mb-1.5 mt-2.5 max-sm:mt-1.5">
                {step.title}
              </h3>
              <p className="text-text-light-secondary text-sm max-sm:text-xs leading-relaxed">
                {step.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

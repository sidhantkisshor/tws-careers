'use client';

import type { Job } from '@/lib/types';
import { motion } from 'framer-motion';

export default function FounderQuote({ quote }: { quote: Job['quote'] }) {
  const parts = quote.text.split(quote.accentWord);

  return (
    <section className="pb-20 max-sm:pb-10">
      <motion.div
        className="section-line-animated mb-20 max-sm:mb-10"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
      />
      <motion.div
        className="relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {/* Large decorative quote mark */}
        <motion.span
          className="absolute -top-8 -left-2 max-sm:-top-6 max-sm:-left-1 serif-accent text-burnt-amber/15 select-none pointer-events-none"
          style={{ fontSize: 'clamp(80px, 10vw, 120px)', lineHeight: 1 }}
          aria-hidden="true"
          initial={{ opacity: 0, scale: 0.5, rotate: -15 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.33, 1, 0.68, 1] }}
        >
          &ldquo;
        </motion.span>
        <blockquote className="relative z-10">
          <motion.p
            className="text-soft-sand leading-[1.7] max-sm:leading-[1.65]"
            style={{ fontSize: 'clamp(17px, 2.5vw, 22px)' }}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          >
            &ldquo;{parts[0].trimEnd()}{' '}
            <span className="serif-accent text-burnt-amber">{quote.accentWord}</span>
            {parts[1]}&rdquo;
          </motion.p>
          <motion.footer
            className="mt-5 max-sm:mt-3"
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <p className="text-text-light-secondary text-sm flex items-center gap-2">
              <motion.span
                className="w-6 h-px bg-burnt-amber/40 inline-block"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.6 }}
                style={{ transformOrigin: 'left' }}
              />
              {quote.author}
            </p>
          </motion.footer>
        </blockquote>
      </motion.div>
      <motion.div
        className="section-line-animated mt-20 max-sm:mt-10"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
      />
    </section>
  );
}

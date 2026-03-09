'use client';

import { motion } from 'framer-motion';

const line1Words = ['Build', 'the', 'future', 'of'];
const accentWords = ['fintech', 'education'];

export default function HomeHero() {
  return (
    <section className="pt-20 pb-10 sm:pt-28 sm:pb-14">
      <motion.p
        className="text-sm font-bold tracking-widest uppercase text-burnt-amber mb-6"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: [0.33, 1, 0.68, 1] }}
      >
        Open Positions
      </motion.p>

      <h1
        className="font-black text-text-dark leading-[1.02] mb-5"
        style={{ fontSize: 'clamp(36px, 6vw, 64px)' }}
      >
        {line1Words.map((word, i) => (
          <span key={i} className="inline-block overflow-hidden mr-[0.28em]">
            <motion.span
              className="inline-block"
              initial={{ y: '110%' }}
              animate={{ y: '0%' }}
              transition={{
                duration: 0.7,
                delay: 0.15 + i * 0.06,
                ease: [0.33, 1, 0.68, 1],
              }}
            >
              {word}
            </motion.span>
          </span>
        ))}
        <br className="sm:hidden" />
        {accentWords.map((word, i) => (
          <span key={word} className="inline-block overflow-hidden mr-[0.28em]">
            <motion.span
              className="inline-block serif-accent gradient-text"
              initial={{ y: '110%' }}
              animate={{ y: '0%' }}
              transition={{
                duration: 0.7,
                delay: 0.15 + (line1Words.length + i) * 0.06,
                ease: [0.33, 1, 0.68, 1],
              }}
            >
              {word}
            </motion.span>
          </span>
        ))}
      </h1>

      <motion.p
        className="text-base sm:text-lg text-text-dark-secondary max-w-xl leading-relaxed"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.55, ease: [0.25, 0.1, 0.25, 1] }}
      >
        We&apos;re a small, high-output team creating India&apos;s best trading
        &amp; finance content. If you want ownership from day one, you&apos;ll
        fit right in.
      </motion.p>
    </section>
  );
}

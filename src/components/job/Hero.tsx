'use client';

import type { Job } from '@/lib/types';
import { motion } from 'framer-motion';

export default function Hero({ job }: { job: Job }) {
  const titleWords = job.title.split(' ');
  const accentWords = job.titleAccent.split(' ');

  return (
    <section className="pt-16 pb-20 max-sm:pt-8 max-sm:pb-10" data-hero>
      {/* Open Position pill */}
      <motion.div
        className="inline-flex items-center gap-2 border border-burnt-amber/30 bg-burnt-amber/8 text-burnt-amber uppercase font-bold rounded-full px-5 py-2 mb-8 max-sm:mb-6"
        style={{ fontSize: '11px', letterSpacing: '2px' }}
        initial={{ opacity: 0, x: -20, scale: 0.95 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 0.5, ease: [0.33, 1, 0.68, 1] }}
      >
        <span className="w-1.5 h-1.5 rounded-full bg-burnt-amber" />
        Open Position
      </motion.div>

      {/* Title - oversized editorial with word-by-word reveal */}
      <h1
        className="font-black text-soft-sand leading-[1.02] mb-8 max-sm:mb-6"
        style={{ fontSize: 'clamp(38px, 7vw, 72px)' }}
      >
        {titleWords.map((word, i) => (
          <span key={i} className="inline-block overflow-hidden mr-[0.28em]">
            <motion.span
              className="inline-block"
              initial={{ y: '120%', rotateX: 40 }}
              animate={{ y: '0%', rotateX: 0 }}
              transition={{
                duration: 0.75,
                delay: 0.2 + i * 0.07,
                ease: [0.33, 1, 0.68, 1],
              }}
            >
              {word}
            </motion.span>
          </span>
        ))}
        {accentWords.map((word, i) => (
          <span key={word} className="inline-block overflow-hidden mr-[0.28em]">
            <motion.span
              className="inline-block serif-accent gradient-text"
              initial={{ y: '120%', rotateX: 40 }}
              animate={{ y: '0%', rotateX: 0 }}
              transition={{
                duration: 0.75,
                delay: 0.2 + (titleWords.length + i) * 0.07,
                ease: [0.33, 1, 0.68, 1],
              }}
            >
              {word}
            </motion.span>
          </span>
        ))}
      </h1>

      {/* Description */}
      <motion.p
        className="text-text-light-secondary leading-[1.75] max-w-[620px] mb-12 max-sm:mb-8"
        style={{ fontSize: 'clamp(15px, 2vw, 18px)' }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.55, ease: [0.25, 0.1, 0.25, 1] }}
      >
        {job.description}
      </motion.p>

      {/* Salary banner - glassmorphic */}
      <motion.div
        className="glass rounded-2xl border border-border-dark/60 p-7 max-sm:p-5 mb-10 max-sm:mb-6"
        initial={{ opacity: 0, y: 30, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.65, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <div className="flex items-center gap-8 max-sm:flex-col max-sm:items-start max-sm:gap-4">
          <div className="shrink-0">
            <span
              className="text-text-light-secondary uppercase block mb-1.5"
              style={{ fontSize: '11px', letterSpacing: '2px' }}
            >
              {job.salary.label}
            </span>
            <span className="gradient-text font-black text-[32px] max-sm:text-[26px] leading-none">
              {job.salary.amount}
            </span>
            <span className="text-text-light-secondary font-normal text-sm ml-2">
              {job.salary.unit}
            </span>
          </div>
          <div className="w-px h-10 bg-border-dark max-sm:hidden" />
          <div className="text-text-light-secondary text-xs leading-relaxed opacity-70">
            <span className="font-semibold text-text-light-secondary">{job.salary.detailBold}</span>{' '}
            {job.salary.detail}
          </div>
        </div>
      </motion.div>

      {/* Meta pills - staggered reveal */}
      <div className="flex flex-wrap gap-3 max-sm:gap-2">
        {job.meta.map((item, i) => (
          <motion.span
            key={i}
            className="glass rounded-full px-5 py-2.5 text-sm max-sm:text-xs border border-border-dark/40"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.8 + i * 0.08,
              ease: [0.25, 0.1, 0.25, 1],
            }}
          >
            <span className="text-soft-sand font-semibold">{item.bold}</span>{' '}
            <span className="text-text-light-secondary">{item.rest}</span>
          </motion.span>
        ))}
      </div>
    </section>
  );
}

'use client';

import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface TextRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  /** Stagger between each child word/element */
  stagger?: number;
}

/**
 * Reveals child elements with a clip-path + translate animation,
 * staggered word-by-word. Wrap each word in a span.
 */
export function TextRevealContainer({
  children,
  className,
  delay = 0,
  stagger = 0.06,
}: TextRevealProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-40px' }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: stagger,
            delayChildren: delay,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export function TextRevealWord({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span className={`inline-block overflow-hidden ${className || ''}`}>
      <motion.span
        className="inline-block"
        variants={{
          hidden: {
            y: '110%',
            opacity: 0,
            rotateX: 45,
          },
          visible: {
            y: '0%',
            opacity: 1,
            rotateX: 0,
            transition: {
              duration: 0.65,
              ease: [0.33, 1, 0.68, 1],
            },
          },
        }}
      >
        {children}
      </motion.span>
    </span>
  );
}

/**
 * Simple line reveal - the whole line slides up from below
 */
export function LineReveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <div className={`overflow-hidden ${className || ''}`}>
      <motion.div
        initial={{ y: '100%', opacity: 0 }}
        whileInView={{ y: '0%', opacity: 1 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{
          duration: 0.7,
          delay,
          ease: [0.33, 1, 0.68, 1],
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}

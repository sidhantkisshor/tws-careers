'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

interface CountUpProps {
  /** The target value to display, e.g. "12+", "50%+", "<24h", "<2" */
  value: string;
  className?: string;
  duration?: number;
  delay?: number;
}

/**
 * Extracts numeric part and decorations from strings like "12+", "50%+", "<24h", "<2"
 */
function parseValue(value: string): {
  prefix: string;
  number: number;
  suffix: string;
} {
  const match = value.match(/^([<>≥≤]*)(\d+(?:\.\d+)?)(.*)/);
  if (!match) return { prefix: '', number: 0, suffix: value };
  return {
    prefix: match[1],
    number: parseFloat(match[2]),
    suffix: match[3],
  };
}

export default function CountUp({
  value,
  className,
  duration = 1.8,
  delay = 0,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [displayNumber, setDisplayNumber] = useState(0);
  const { prefix, number: target, suffix } = parseValue(value);

  useEffect(() => {
    if (!isInView) return;

    const startTime = performance.now();
    const delayMs = delay * 1000;

    let raf: number;

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime - delayMs;

      if (elapsed < 0) {
        raf = requestAnimationFrame(animate);
        return;
      }

      const progress = Math.min(elapsed / (duration * 1000), 1);
      // Ease out cubic for natural deceleration
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(eased * target);

      setDisplayNumber(current);

      if (progress < 1) {
        raf = requestAnimationFrame(animate);
      }
    };

    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [isInView, target, duration, delay]);

  return (
    <motion.span
      ref={ref}
      className={className}
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{
        duration: 0.5,
        delay,
        ease: [0.33, 1, 0.68, 1],
      }}
    >
      {prefix}
      {displayNumber}
      {suffix}
    </motion.span>
  );
}

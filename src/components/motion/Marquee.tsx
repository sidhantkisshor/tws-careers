'use client';

import { motion } from 'framer-motion';

interface MarqueeProps {
  /** Words/phrases to scroll */
  items: string[];
  /** Separator between items */
  separator?: string;
  /** Speed in seconds for one full cycle */
  speed?: number;
  className?: string;
  itemClassName?: string;
  separatorClassName?: string;
  /** Scroll direction */
  direction?: 'left' | 'right';
}

export default function Marquee({
  items,
  separator = '·',
  speed = 30,
  className,
  itemClassName,
  separatorClassName,
  direction = 'left',
}: MarqueeProps) {
  // Duplicate items for seamless loop
  const content = [...items, ...items, ...items];
  const xStart = direction === 'left' ? '0%' : '-66.666%';
  const xEnd = direction === 'left' ? '-66.666%' : '0%';

  return (
    <div className={`overflow-hidden ${className || ''}`}>
      <motion.div
        className="flex items-center whitespace-nowrap will-change-transform"
        animate={{ x: [xStart, xEnd] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: 'loop',
            duration: speed,
            ease: 'linear',
          },
        }}
      >
        {content.map((item, i) => (
          <span key={i} className="flex items-center shrink-0">
            <span className={itemClassName}>{item}</span>
            <span className={`mx-6 ${separatorClassName || ''}`}>{separator}</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}

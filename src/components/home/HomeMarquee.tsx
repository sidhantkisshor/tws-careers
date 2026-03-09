'use client';

import Marquee from '@/components/motion/Marquee';
import { motion } from 'framer-motion';

const marqueeItems = [
  'Video Editing',
  'Content Strategy',
  'Motion Graphics',
  'Sound Design',
  'Color Grading',
  'Storytelling',
  'Thumbnail Design',
  'Retention Craft',
];

export default function HomeMarquee() {
  return (
    <motion.div
      className="mb-10 -mx-5"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.7 }}
    >
      <div className="marquee-mask py-5 border-y border-border-light">
        <Marquee
          items={marqueeItems}
          separator="·"
          speed={35}
          itemClassName="text-xs font-bold uppercase tracking-[3px] text-text-dark-secondary/40"
          separatorClassName="text-burnt-amber/30 text-xs"
        />
      </div>
    </motion.div>
  );
}

'use client';

import Marquee from '@/components/motion/Marquee';
import ScrollReveal from '@/components/motion/ScrollReveal';

const marqueeItems = [
  'Premiere Pro',
  'DaVinci Resolve',
  'After Effects',
  'Sound Design',
  'Color Grading',
  'Motion Graphics',
  'Retention Editing',
  'Storytelling',
];

export default function JobMarquee() {
  return (
    <ScrollReveal direction="none" duration={0.8} className="mb-20 max-sm:mb-10 -mx-5">
      <div className="marquee-mask py-4 border-y border-border-dark/30">
        <Marquee
          items={marqueeItems}
          separator="—"
          speed={40}
          itemClassName="text-[10px] font-bold uppercase tracking-[4px] text-text-light-secondary/25"
          separatorClassName="text-burnt-amber/20 text-[10px]"
          direction="right"
        />
      </div>
    </ScrollReveal>
  );
}

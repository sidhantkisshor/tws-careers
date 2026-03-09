import ScrollReveal from '@/components/motion/ScrollReveal';

export default function ContractNotice({ text }: { text: string }) {
  return (
    <section className="mb-20 max-sm:mb-10">
      <ScrollReveal distance={20} duration={0.6}>
        <div className="glass rounded-xl border border-wealth-teal/15 py-5 px-6 max-sm:py-4 max-sm:px-5 flex items-start gap-3 hover:border-wealth-teal/30 transition-colors duration-300">
          <div className="w-6 h-6 rounded-md bg-wealth-teal/10 flex items-center justify-center shrink-0 mt-0.5">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-wealth-teal">
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <p className="text-sm max-sm:text-[13px] leading-relaxed">
            <span className="text-wealth-teal font-bold">Contract:</span>{' '}
            <span className="text-text-light-secondary">{text}</span>
          </p>
        </div>
      </ScrollReveal>
    </section>
  );
}

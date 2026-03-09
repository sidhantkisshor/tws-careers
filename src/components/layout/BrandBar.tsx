import Image from 'next/image';

export default function BrandBar() {
  return (
    <div className="-mx-5 px-5">
      <div className="flex items-center justify-between py-5 max-sm:py-3.5 border-b border-border-dark/50">
        <span className="flex items-center gap-2.5">
          <Image
            src="/tws-gurukulx-icon-256.png"
            alt="TWS GurukulX"
            width={28}
            height={28}
            className="rounded-md max-sm:w-6 max-sm:h-6"
          />
          <span
            className="text-burnt-amber uppercase font-bold tracking-wider"
            style={{ fontSize: '13px', letterSpacing: '2.5px' }}
          >
            <span className="max-sm:hidden">TRADING WITH SIDHANT</span>
            <span className="sm:hidden" style={{ fontSize: '12px' }}>TWS</span>
          </span>
        </span>
        <span
          className="flex items-center gap-2.5 text-text-light-secondary uppercase"
          style={{ fontSize: '11px', letterSpacing: '1.5px' }}
        >
          <span className="relative flex items-center justify-center w-2.5 h-2.5">
            <span
              className="absolute inset-0 rounded-full bg-wealth-teal/40"
              style={{ animation: 'pulse-dot 2s ease-in-out infinite' }}
            />
            <span className="relative w-1.5 h-1.5 rounded-full bg-wealth-teal" />
          </span>
          ACTIVELY HIRING
        </span>
      </div>
    </div>
  );
}

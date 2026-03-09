import Image from 'next/image';
import Link from 'next/link';

interface FooterProps {
  variant?: 'dark' | 'light';
}

export default function Footer({ variant = 'dark' }: FooterProps) {
  const isLight = variant === 'light';

  return (
    <footer
      className={`border-t text-center pt-8 pb-10 max-sm:pt-5 max-sm:pb-4 ${
        isLight ? 'border-border-light' : 'border-border-dark/50'
      }`}
    >
      <div className="flex items-center justify-center gap-2.5 mb-2">
        <Image
          src="/tws-gurukulx-icon-256.png"
          alt="TWS GurukulX"
          width={20}
          height={20}
          className="rounded opacity-50"
        />
        <p
          className={`opacity-40 tracking-wider ${
            isLight ? 'text-text-dark-secondary' : 'text-text-light-secondary'
          }`}
          style={{ fontSize: '11px', letterSpacing: '1.5px' }}
        >
          TRADING WITH SIDHANT LLP &middot; 2026
        </p>
      </div>
      <div
        className={`flex items-center justify-center gap-3 opacity-30 ${
          isLight ? 'text-text-dark-secondary' : 'text-text-light-secondary'
        }`}
        style={{ fontSize: '10px', letterSpacing: '1px' }}
      >
        <Link
          href="/privacy"
          className={`underline-draw hover:opacity-100 transition-opacity duration-300 ${
            isLight ? 'hover:text-text-dark' : 'hover:text-soft-sand'
          }`}
        >
          PRIVACY POLICY
        </Link>
        <span>&middot;</span>
        <Link
          href="/terms"
          className={`underline-draw hover:opacity-100 transition-opacity duration-300 ${
            isLight ? 'hover:text-text-dark' : 'hover:text-soft-sand'
          }`}
        >
          TERMS &amp; CONDITIONS
        </Link>
        <span>&middot;</span>
        <a
          href="mailto:careers@tradingwithsidhant.com"
          className={`underline-draw hover:opacity-100 transition-opacity duration-300 ${
            isLight ? 'hover:text-text-dark' : 'hover:text-soft-sand'
          }`}
        >
          CONTACT
        </a>
      </div>
    </footer>
  );
}

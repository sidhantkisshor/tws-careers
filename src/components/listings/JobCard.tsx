import type { Job } from '@/lib/types';
import Link from 'next/link';

export default function JobCard({ job }: { job: Job }) {
  return (
    <Link
      href={`/${job.slug}`}
      className="group block bg-warm-white-pure border border-border-light rounded-2xl p-7 max-sm:p-5 gradient-border card-lift"
    >
      <div className="flex items-start justify-between gap-4 mb-4 max-sm:mb-3">
        <div>
          <h3 className="text-text-dark font-bold text-xl max-sm:text-base mb-1">
            {job.title}{' '}
            <span className="serif-accent font-normal text-burnt-amber">{job.titleAccent}</span>
          </h3>
          <p className="text-burnt-amber font-bold text-lg max-sm:text-base">
            {job.salary.amount}
            <span className="text-text-dark-secondary font-normal text-sm ml-1.5">
              {job.salary.unit}
            </span>
          </p>
        </div>
        <div className="shrink-0 w-10 h-10 rounded-xl bg-burnt-amber/8 flex items-center justify-center group-hover:bg-burnt-amber/15 transition-colors duration-300">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-burnt-amber group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-500 ease-[cubic-bezier(0.33,1,0.68,1)]">
            <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {job.meta.map((item, i) => (
          <span
            key={i}
            className="border border-border-light rounded-full px-3.5 py-1.5 text-xs group-hover:border-burnt-amber/20 transition-colors duration-300"
          >
            <span className="text-text-dark font-semibold">{item.bold}</span>{' '}
            <span className="text-text-dark-secondary">{item.rest}</span>
          </span>
        ))}
      </div>
    </Link>
  );
}

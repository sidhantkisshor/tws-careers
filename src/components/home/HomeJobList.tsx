'use client';

import type { Job } from '@/lib/types';
import JobCard from '@/components/listings/JobCard';
import StaggerChildren, { StaggerItem } from '@/components/motion/StaggerChildren';

export default function HomeJobList({ jobs }: { jobs: Job[] }) {
  if (jobs.length === 0) {
    return (
      <section className="pb-24">
        <div className="text-center py-20">
          <p className="text-lg text-text-dark-secondary">
            No open positions right now. Check back soon!
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="pb-24">
      <StaggerChildren className="grid gap-4" stagger={0.12} delay={0.1}>
        {jobs.map((job) => (
          <StaggerItem key={job.slug}>
            <JobCard job={job} />
          </StaggerItem>
        ))}
      </StaggerChildren>
    </section>
  );
}

import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { jobs, getJob } from '@/data/jobs';
import { generateJobPostingSchema } from '@/lib/structured-data';
import BrandBar from '@/components/layout/BrandBar';
import Footer from '@/components/layout/Footer';
import MobileStickyBar from '@/components/layout/MobileStickyBar';
import Hero from '@/components/job/Hero';
import FounderQuote from '@/components/job/FounderQuote';
import CardGrid from '@/components/job/CardGrid';
import KpiGrid from '@/components/job/KpiGrid';
import ToolsGrid from '@/components/job/ToolsGrid';
import GrowthTrack from '@/components/job/GrowthTrack';
import RequirementsList from '@/components/job/RequirementsList';
import ContractNotice from '@/components/job/ContractNotice';
import PerkGrid from '@/components/job/PerkGrid';
import ProcessSteps from '@/components/job/ProcessSteps';
import CtaSection from '@/components/job/CtaSection';
import JobMarquee from '@/components/job/JobMarquee';
import ScrollProgress from '@/components/motion/ScrollProgress';
import ApplyModal from '@/components/apply/ApplyModal';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return jobs.map((job) => ({ slug: job.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const job = getJob(slug);
  if (!job) return {};

  return {
    title: `${job.title} ${job.titleAccent}`,
    description: job.description,
    openGraph: {
      title: `${job.title} ${job.titleAccent} | TWS Careers`,
      description: job.description,
      type: 'website',
    },
  };
}

export default async function JobPage({ params }: PageProps) {
  const { slug } = await params;
  const job = getJob(slug);
  if (!job) notFound();

  const structuredData = generateJobPostingSchema(job);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <ScrollProgress />
      <main className="bg-deep-slate">
        <div className="max-w-3xl mx-auto px-5">
          <BrandBar />
          <Hero job={job} />
          <FounderQuote quote={job.quote} />
          <CardGrid items={job.responsibilities} />
          <KpiGrid kpis={job.kpis} note={job.kpiNote} />
          <ToolsGrid tools={job.tools} />
          <GrowthTrack stages={job.growth} />
          <JobMarquee />
          <RequirementsList items={job.requirements} />
          <ContractNotice text={job.contract} />
          <PerkGrid perks={job.perks} />
          <ProcessSteps steps={job.process} />
          <CtaSection cta={job.cta} />
          <Footer />
        </div>
      </main>
      <MobileStickyBar />
      <ApplyModal form={job.form} jobSlug={job.slug} jobTitle={`${job.title} ${job.titleAccent}`} />
    </>
  );
}

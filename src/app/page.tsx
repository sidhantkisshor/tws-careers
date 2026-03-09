import { getActiveJobs } from '@/data/jobs';
import BrandBar from '@/components/layout/BrandBar';
import Footer from '@/components/layout/Footer';
import HomeHero from '@/components/home/HomeHero';
import HomeMarquee from '@/components/home/HomeMarquee';
import HomeJobList from '@/components/home/HomeJobList';

export default function HomePage() {
  const activeJobs = getActiveJobs();

  return (
    <div className="max-w-3xl mx-auto px-5">
      <BrandBar />
      <main className="min-h-screen">
        <HomeHero />
        <HomeMarquee />
        <HomeJobList jobs={activeJobs} />
      </main>
      <Footer variant="light" />
    </div>
  );
}

import type { MetadataRoute } from 'next';
import { jobs } from '@/data/jobs';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://careers.twsgurukulx.com';

  const jobPages = jobs
    .filter((job) => job.status === 'active')
    .map((job) => ({
      url: `${baseUrl}/${job.slug}`,
      lastModified: new Date(job.postedDate),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    ...jobPages,
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date('2026-03-09'),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];
}

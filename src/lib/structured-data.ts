import type { Job } from './types';

export function generateJobPostingSchema(job: Job) {
  return {
    '@context': 'https://schema.org',
    '@type': 'JobPosting',
    title: `${job.title} ${job.titleAccent}`,
    description: job.description,
    hiringOrganization: {
      '@type': 'Organization',
      name: 'Trading With Sidhant LLP',
      sameAs: 'https://twsgurukul.com',
    },
    employmentType: 'CONTRACTOR',
    jobLocationType: 'TELECOMMUTE',
    applicantLocationRequirements: {
      '@type': 'Country',
      name: 'India',
    },
    baseSalary: {
      '@type': 'MonetaryAmount',
      currency: 'INR',
      value: {
        '@type': 'QuantitativeValue',
        maxValue: 100000,
        unitText: 'MONTH',
      },
    },
    datePosted: job.postedDate,
  };
}

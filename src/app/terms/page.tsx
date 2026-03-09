import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms & Conditions',
  description:
    'Terms and conditions governing the use of the Trading With Sidhant careers portal.',
};

export default function TermsPage() {
  return (
    <main className="bg-deep-slate min-h-screen">
      <div className="max-w-3xl mx-auto px-5 py-16 max-sm:py-10">
        <Link
          href="/"
          className="text-text-light-secondary text-sm hover:text-soft-sand transition-colors inline-flex items-center gap-1.5 mb-10"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          Back to Careers
        </Link>

        <h1 className="text-soft-sand font-bold text-3xl max-sm:text-2xl mb-2">
          Terms &amp; Conditions
        </h1>
        <p className="text-text-light-secondary text-sm mb-10">
          Effective date: 24 February 2026
        </p>

        <div className="space-y-8 text-text-light-secondary text-sm leading-relaxed">
          <section>
            <h2 className="text-soft-sand font-bold text-lg mb-3">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing or using this careers portal, operated as part of{' '}
              <strong className="text-soft-sand">tradingwithsidhant.com</strong>{' '}
              and <strong className="text-soft-sand">twsgurukul.com</strong>{' '}
              (collectively, &quot;the Platform&quot;), you (&quot;User&quot;)
              agree to be legally bound by these Terms &amp; Conditions. If you
              do not agree, please do not use the Platform.
            </p>
            <p className="mt-3">
              These Terms constitute a binding legal agreement between you and{' '}
              <strong className="text-soft-sand">Trading With Sidhant LLP</strong>{' '}
              (&quot;Company,&quot; &quot;we,&quot; &quot;us,&quot; or
              &quot;our&quot;), a limited liability partnership registered in
              India.
            </p>
          </section>

          <section>
            <h2 className="text-soft-sand font-bold text-lg mb-3">
              2. Eligibility
            </h2>
            <p>
              You must be at least{' '}
              <strong className="text-soft-sand">18 years of age</strong> and
              competent to contract under the Indian Contract Act, 1872 to use
              this Platform. By using the Platform, you represent and warrant
              that you meet these eligibility requirements.
            </p>
          </section>

          <section>
            <h2 className="text-soft-sand font-bold text-lg mb-3">
              3. Platform &amp; Services
            </h2>
            <h3 className="text-soft-sand font-semibold text-base mb-2">
              3.1 Intellectual Property
            </h3>
            <p>
              All content on the Platform — including videos, course materials,
              graphics, text, code, logos, and trademarks — is the exclusive
              intellectual property of Trading With Sidhant LLP and is protected
              under the Copyright Act, 1957 and other applicable Indian laws.
              You are granted a limited, non-exclusive, non-transferable,
              revocable license to access content solely for personal,
              non-commercial use. Any reproduction, redistribution, resale, or
              public display without prior written consent is strictly prohibited
              and may result in legal action.
            </p>
          </section>

          <section>
            <h2 className="text-soft-sand font-bold text-lg mb-3">
              4. User Accounts
            </h2>
            <p className="mb-3">
              When submitting a job application through this portal, you agree
              to:
            </p>
            <ul className="list-disc list-inside space-y-1.5 pl-1">
              <li>
                Provide accurate and complete information in your application
              </li>
              <li>
                Not submit false, misleading, or fraudulent information
              </li>
              <li>
                Not impersonate any person or misrepresent your qualifications
              </li>
            </ul>
            <p className="mt-3">
              The Company reserves the right to reject or discard applications
              found to be in violation of these Terms without prior notice.
            </p>
          </section>

          <section>
            <h2 className="text-soft-sand font-bold text-lg mb-3">
              5. Prohibited Conduct
            </h2>
            <p className="mb-3">You agree not to:</p>
            <ul className="list-disc list-inside space-y-1.5 pl-1">
              <li>
                Reproduce, copy, redistribute, or resell any content from this
                portal
              </li>
              <li>
                Use the Platform for any unlawful, fraudulent, or harmful
                purpose
              </li>
              <li>
                Use automated bots, scrapers, or other tools to extract content
                or submit applications
              </li>
              <li>
                Impersonate the Company, its employees, or any other person
              </li>
              <li>
                Attempt to hack, reverse-engineer, or disrupt the
                Platform&apos;s infrastructure
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-soft-sand font-bold text-lg mb-3">
              6. No Financial or Investment Advice
            </h2>
            <p>
              All content provided on the Platform is strictly for{' '}
              <strong className="text-soft-sand">
                EDUCATIONAL PURPOSES ONLY
              </strong>
              . Nothing on the Platform constitutes financial advice, investment
              advice, trading recommendations, or a solicitation to buy or sell
              any financial instrument. Trading in financial markets involves
              substantial risk of loss. The Company is not a SEBI-registered
              investment advisor.
            </p>
          </section>

          <section>
            <h2 className="text-soft-sand font-bold text-lg mb-3">
              7. Limitation of Liability
            </h2>
            <p>
              To the maximum extent permitted by applicable law, Trading With
              Sidhant LLP shall not be liable for any direct, indirect,
              incidental, special, consequential, or punitive damages arising
              from your use of or inability to use the Platform, including but
              not limited to loss of data or loss of opportunity.
            </p>
          </section>

          <section>
            <h2 className="text-soft-sand font-bold text-lg mb-3">
              8. Termination
            </h2>
            <p>
              The Company reserves the right to suspend or permanently restrict
              your access to the Platform at its sole discretion, with or
              without notice, if you violate these Terms, engage in fraudulent
              activity, or for any other reason deemed appropriate.
            </p>
          </section>

          <section>
            <h2 className="text-soft-sand font-bold text-lg mb-3">
              9. Governing Law &amp; Dispute Resolution
            </h2>
            <p>
              These Terms shall be governed by and construed in accordance with
              the laws of India. Any disputes arising out of or in connection
              with these Terms shall be first attempted to be resolved through
              amicable negotiation. If unresolved within 30 days, disputes shall
              be subject to the exclusive jurisdiction of the courts in{' '}
              <strong className="text-soft-sand">
                Hyderabad, Telangana, India
              </strong>
              .
            </p>
          </section>

          <section>
            <h2 className="text-soft-sand font-bold text-lg mb-3">
              10. Amendments
            </h2>
            <p>
              The Company reserves the right to update or modify these Terms at
              any time. Material changes will be communicated via email or
              prominent notice on the Platform. Continued use of the Platform
              after any such changes constitutes your acceptance of the updated
              Terms.
            </p>
          </section>

          <section>
            <h2 className="text-soft-sand font-bold text-lg mb-3">
              11. Contact
            </h2>
            <p>
              For queries related to these Terms, please contact us:
            </p>
            <p className="mt-3">
              <strong className="text-soft-sand">
                Trading With Sidhant LLP
              </strong>
              <br />
              Email:{' '}
              <a
                href="mailto:careers@tradingwithsidhant.com"
                className="text-burnt-amber hover:underline"
              >
                careers@tradingwithsidhant.com
              </a>
            </p>
          </section>

          <section className="border-t border-border-dark/50 pt-8 mt-10">
            <p className="text-text-light-secondary text-xs opacity-70">
              Trading With Sidhant LLP &middot; Hyderabad, Telangana, India
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}

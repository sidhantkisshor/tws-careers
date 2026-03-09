import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'How Trading With Sidhant collects, uses, and protects your personal data when you apply through our careers portal.',
};

export default function PrivacyPage() {
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
          Privacy Policy
        </h1>
        <p className="text-text-light-secondary text-sm mb-10">
          Last updated: 9 March 2026
        </p>

        <div className="space-y-8 text-text-light-secondary text-sm leading-relaxed">
          <section>
            <h2 className="text-soft-sand font-bold text-lg mb-3">
              1. Who We Are
            </h2>
            <p>
              This careers portal is operated by <strong className="text-soft-sand">Trading With Sidhant LLP</strong>{' '}
              (&quot;TWS&quot;, &quot;we&quot;, &quot;us&quot;). Our registered
              office is in Hyderabad, Telangana, India. For any privacy-related
              queries, contact us at{' '}
              <a
                href="mailto:careers@tradingwithsidhant.com"
                className="text-burnt-amber hover:underline"
              >
                careers@tradingwithsidhant.com
              </a>.
            </p>
          </section>

          <section>
            <h2 className="text-soft-sand font-bold text-lg mb-3">
              2. What Data We Collect
            </h2>
            <p className="mb-3">
              When you submit a job application through this portal, we collect:
            </p>
            <ul className="list-disc list-inside space-y-1.5 pl-1">
              <li>Full name</li>
              <li>Email address</li>
              <li>WhatsApp phone number</li>
              <li>Years of professional experience</li>
              <li>Primary editing software used</li>
              <li>Portfolio link, video walkthrough link, and best edit link</li>
              <li>Any additional information you voluntarily provide</li>
              <li>Timestamp of submission</li>
            </ul>
            <p className="mt-3">
              We do not collect Aadhaar numbers, financial information, or any
              government-issued identity documents through this portal.
            </p>
          </section>

          <section>
            <h2 className="text-soft-sand font-bold text-lg mb-3">
              3. How We Use Your Data
            </h2>
            <p className="mb-3">
              Your personal data is processed solely for the following purposes:
            </p>
            <ul className="list-disc list-inside space-y-1.5 pl-1">
              <li>Evaluating your suitability for the role you applied for</li>
              <li>
                Contacting you regarding your application status, test tasks,
                and interviews
              </li>
              <li>
                Maintaining records of the hiring process for internal reference
              </li>
            </ul>
            <p className="mt-3">
              We do not use your data for marketing, profiling, automated
              decision-making, or any purpose unrelated to hiring.
            </p>
          </section>

          <section>
            <h2 className="text-soft-sand font-bold text-lg mb-3">
              4. Legal Basis for Processing
            </h2>
            <p>
              We process your personal data based on your explicit consent,
              given when you check the consent box on the application form,
              in accordance with the Digital Personal Data Protection Act, 2023
              (DPDP Act). You may withdraw your consent at any time by
              contacting us (see Section 8 below).
            </p>
          </section>

          <section>
            <h2 className="text-soft-sand font-bold text-lg mb-3">
              5. Data Sharing
            </h2>
            <p className="mb-3">
              Your application data may be shared with:
            </p>
            <ul className="list-disc list-inside space-y-1.5 pl-1">
              <li>
                Internal hiring team members (founder, lead editor) for
                evaluation purposes only
              </li>
              <li>
                Automation tools (workflow processing) used to manage our
                hiring pipeline
              </li>
            </ul>
            <p className="mt-3">
              We do not sell, rent, or trade your personal data to third
              parties. We do not share your data with any external recruitment
              agencies, advertisers, or data brokers.
            </p>
          </section>

          <section>
            <h2 className="text-soft-sand font-bold text-lg mb-3">
              6. Data Retention
            </h2>
            <p>
              Application data is retained for a maximum of{' '}
              <strong className="text-soft-sand">12 months</strong> from the
              date of submission. If you are hired, relevant data will be
              transferred to your contractor/engagement records and governed by
              the terms of your agreement. Unsuccessful application data is
              permanently deleted after the retention period.
            </p>
          </section>

          <section>
            <h2 className="text-soft-sand font-bold text-lg mb-3">
              7. Data Security
            </h2>
            <p>
              We implement reasonable technical and organisational measures to
              protect your personal data against unauthorised access, loss, or
              misuse. Application submissions are transmitted over encrypted
              connections (HTTPS). Access to applicant data is restricted to
              authorised team members only.
            </p>
          </section>

          <section>
            <h2 className="text-soft-sand font-bold text-lg mb-3">
              8. Your Rights
            </h2>
            <p className="mb-3">
              Under the DPDP Act, 2023, you have the right to:
            </p>
            <ul className="list-disc list-inside space-y-1.5 pl-1">
              <li>
                <strong className="text-soft-sand">Access</strong> — Request a
                summary of the personal data we hold about you
              </li>
              <li>
                <strong className="text-soft-sand">Correction</strong> — Request
                correction of inaccurate or incomplete data
              </li>
              <li>
                <strong className="text-soft-sand">Erasure</strong> — Request
                deletion of your personal data
              </li>
              <li>
                <strong className="text-soft-sand">Withdraw Consent</strong> —
                Withdraw your consent at any time, after which we will cease
                processing and delete your data
              </li>
              <li>
                <strong className="text-soft-sand">Grievance Redressal</strong>{' '}
                — Raise a complaint if you are unsatisfied with our handling of
                your data
              </li>
            </ul>
            <p className="mt-3">
              To exercise any of these rights, email{' '}
              <a
                href="mailto:careers@tradingwithsidhant.com"
                className="text-burnt-amber hover:underline"
              >
                careers@tradingwithsidhant.com
              </a>{' '}
              with the subject line &quot;Data Request&quot;. We will respond
              within 30 days.
            </p>
          </section>

          <section>
            <h2 className="text-soft-sand font-bold text-lg mb-3">
              9. Cookies & Analytics
            </h2>
            <p>
              This careers portal does not use cookies for tracking or
              advertising. No third-party analytics scripts are loaded on this
              site. Basic server-level logs (IP address, request timestamp) may
              be retained by our hosting provider for security purposes and are
              automatically purged per their retention policies.
            </p>
          </section>

          <section>
            <h2 className="text-soft-sand font-bold text-lg mb-3">
              10. Changes to This Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. Material
              changes will be reflected by updating the &quot;Last updated&quot;
              date at the top of this page. Continued use of this portal after
              changes constitutes acceptance of the revised policy.
            </p>
          </section>

          <section>
            <h2 className="text-soft-sand font-bold text-lg mb-3">
              11. Governing Law
            </h2>
            <p>
              This Privacy Policy is governed by the laws of India, including
              the Digital Personal Data Protection Act, 2023 and the Information
              Technology Act, 2000. Any disputes shall be subject to the
              exclusive jurisdiction of the courts in Hyderabad, Telangana.
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

'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import type { Job, FormField, FormPayload } from '@/lib/types';
import { isValidEmail, isValidUrl, isValidPhone, sanitize } from '@/lib/validation';

interface ApplyModalProps {
  form: Job['form'];
  jobSlug: string;
  jobTitle: string;
}

type Status = 'idle' | 'submitting' | 'success' | 'error';

export default function ApplyModal({ form, jobSlug, jobTitle }: ApplyModalProps) {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [status, setStatus] = useState<Status>('idle');
  const [values, setValues] = useState<Record<string, string>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [honeypot, setHoneypot] = useState('');
  const [consent, setConsent] = useState(false);

  const modalRef = useRef<HTMLDivElement>(null);
  const firstFocusRef = useRef<HTMLElement | null>(null);

  // ---------- open / close ----------
  const openModal = useCallback(() => {
    setOpen(true);
    setStep(1);
    setStatus('idle');
    setValues({});
    setErrors({});
    setHoneypot('');
    setConsent(false);
  }, []);

  const closeModal = useCallback(() => {
    setOpen(false);
  }, []);

  // listen for custom event
  useEffect(() => {
    const handler = () => openModal();
    window.addEventListener('open-apply', handler);
    return () => window.removeEventListener('open-apply', handler);
  }, [openModal]);

  // body scroll lock
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  // escape key
  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [open, closeModal]);

  // focus trap
  useEffect(() => {
    if (!open || !modalRef.current) return;
    const modal = modalRef.current;
    const focusable = modal.querySelectorAll<HTMLElement>(
      'button, input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    if (focusable.length) {
      firstFocusRef.current = focusable[0];
      focusable[0].focus();
    }

    const trap = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;
      const focusableNow = modal.querySelectorAll<HTMLElement>(
        'button:not([disabled]), input:not([disabled]):not([type="hidden"]):not([aria-hidden="true"]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );
      if (!focusableNow.length) return;
      const first = focusableNow[0];
      const last = focusableNow[focusableNow.length - 1];
      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    window.addEventListener('keydown', trap);
    return () => window.removeEventListener('keydown', trap);
  }, [open, step, status]);

  // ---------- helpers ----------
  const set = (name: string, value: string) => {
    setValues((v) => ({ ...v, [name]: value }));
    if (errors[name]) setErrors((e) => {
      const next = { ...e };
      delete next[name];
      return next;
    });
  };

  const validate = (field: FormField, value: string): string | null => {
    if (field.required && !value.trim()) return `${field.label} is required`;
    if (!value.trim()) return null;
    if (field.validation === 'email' && !isValidEmail(value)) return 'Enter a valid email';
    if (field.validation === 'url' && !isValidUrl(value)) return 'Enter a valid URL (https://...)';
    if (field.validation === 'phone' && !isValidPhone(value)) return 'Enter a valid phone number';
    return null;
  };

  const validateStep = (fields: FormField[]): boolean => {
    const next: Record<string, string> = {};
    for (const f of fields) {
      const err = validate(f, values[f.name] || '');
      if (err) next[f.name] = err;
    }
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  // ---------- submit ----------
  const handleSubmit = async () => {
    if (!validateStep(form.step2Fields)) return;

    if (!consent) {
      setErrors((e) => ({ ...e, _consent: 'You must agree to the data usage terms to apply.' }));
      return;
    }

    // Rate limiting
    const lastSubmit = localStorage.getItem('tws_last_submit');
    if (lastSubmit && Date.now() - parseInt(lastSubmit, 10) < 60_000) {
      setErrors({ _rate: 'Please wait a minute before submitting again.' });
      return;
    }

    // Honeypot
    if (honeypot) {
      setStatus('success');
      return;
    }

    setStatus('submitting');

    const payload: FormPayload = {
      fullName: sanitize(values.fullName || ''),
      email: sanitize(values.email || ''),
      whatsapp: sanitize(values.whatsapp || ''),
      telegram: sanitize(values.telegram || '') || undefined,
      yearsExperience: sanitize(values.yearsExperience || ''),
      longFormExp: sanitize(values.longFormExp || ''),
      shortFormExp: sanitize(values.shortFormExp || ''),
      managementExp: sanitize(values.managementExp || ''),
      primaryTools: sanitize(values.primaryTools || ''),
      portfolio: sanitize(values.portfolio || ''),
      videoWalkthrough: sanitize(values.videoWalkthrough || ''),
      salaryExpectation: sanitize(values.salaryExpectation || ''),
      whyTWS: sanitize(values.whyTWS || ''),
      availability: sanitize(values.availability || ''),
      submittedAt: new Date().toISOString(),
      source: 'hiring-page',
    };

    try {
      const res = await fetch('/api/apply', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...payload, website: honeypot, jobSlug }),
      });
      if (res.ok) {
        localStorage.setItem('tws_last_submit', String(Date.now()));
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  // ---------- render helpers ----------
  const renderField = (field: FormField) => {
    const val = values[field.name] || '';
    const err = errors[field.name];
    const baseInput =
      'w-full bg-deep-slate-light border rounded-xl text-soft-sand placeholder:text-soft-sand-dim transition-all duration-200 outline-none';
    const borderClass = err
      ? 'border-red-500 shadow-[0_0_0_3px_rgba(239,68,68,0.2)]'
      : 'border-border-dark focus:border-burnt-amber focus:shadow-[0_0_0_3px_rgba(200,117,51,0.2)]';

    return (
      <div key={field.name} className={field.row ? '' : ''}>
        <label className="block text-soft-sand text-sm font-medium mb-1.5">
          {field.label}
          {field.required && <span className="text-red-500 ml-0.5">*</span>}
        </label>

        {field.hint && (
          <p className="text-text-light-secondary text-xs mb-2">{field.hint}</p>
        )}

        {field.type === 'select' ? (
          <select
            value={val}
            onChange={(e) => set(field.name, e.target.value)}
            className={`${baseInput} ${borderClass} cursor-pointer appearance-none`}
            style={{ fontSize: '15px', padding: '12px 16px' }}
          >
            <option value="" className="text-soft-sand-dim">
              {field.placeholder}
            </option>
            {field.options?.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        ) : field.type === 'textarea' ? (
          <textarea
            value={val}
            onChange={(e) => set(field.name, e.target.value)}
            placeholder={field.placeholder}
            maxLength={field.maxLength}
            rows={4}
            className={`${baseInput} ${borderClass} resize-none`}
            style={{ fontSize: '15px', padding: '12px 16px' }}
          />
        ) : (
          <input
            type={field.type}
            value={val}
            onChange={(e) => set(field.name, e.target.value)}
            placeholder={field.placeholder}
            autoComplete={field.autocomplete}
            maxLength={field.maxLength}
            className={`${baseInput} ${borderClass}`}
            style={{ fontSize: '15px', padding: '12px 16px' }}
          />
        )}

        {err && <p className="text-red-500 text-xs mt-1.5">{err}</p>}
      </div>
    );
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center max-sm:items-end"
      onClick={(e) => {
        if (e.target === e.currentTarget) closeModal();
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-[modalFadeIn_200ms_ease-out]" />

      {/* Modal */}
      <div
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        aria-label={`Apply for ${jobTitle}`}
        className={`
          relative z-10 w-full max-w-[520px] bg-deep-slate border border-border-dark overflow-hidden
          sm:rounded-2xl sm:max-h-[90vh] sm:animate-[modalSlideUp_300ms_ease-out]
          max-sm:rounded-t-2xl max-sm:max-h-[92vh] max-sm:animate-[modalSlideUpMobile_300ms_ease-out]
        `}
      >
        {/* Mobile drag handle */}
        <div className="sm:hidden flex justify-center pt-3 pb-1">
          <div className="w-10 h-1 rounded-full bg-border-dark" />
        </div>

        {/* Header */}
        <div className="flex items-center justify-between px-6 pt-5 pb-4 max-sm:px-4 max-sm:pt-3 max-sm:pb-3">
          <div className="flex-1">
            {/* Step dots */}
            <div className="flex items-center gap-2 mb-2">
              <div
                className={`w-2 h-2 rounded-full transition-colors ${
                  step === 1 ? 'bg-burnt-amber' : 'bg-wealth-teal'
                }`}
              />
              <div
                className={`w-2 h-2 rounded-full transition-colors ${
                  step === 2 || status === 'success' || status === 'error'
                    ? 'bg-burnt-amber'
                    : 'border border-border-dark'
                }`}
              />
            </div>
            <h2 className="text-soft-sand font-bold text-lg">
              {status === 'success' || status === 'error'
                ? jobTitle
                : step === 1
                ? jobTitle
                : 'Your Work & Availability'}
            </h2>
          </div>

          {/* Close button */}
          <button
            onClick={closeModal}
            className="text-text-light-secondary hover:text-soft-sand transition-colors rounded-lg p-1"
            style={{ minWidth: '44px', minHeight: '44px' }}
            aria-label="Close"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mx-auto"
            >
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Body */}
        <div className="px-6 pb-6 overflow-y-auto max-sm:px-4 max-sm:pb-4" style={{ maxHeight: 'calc(92vh - 120px)' }}>
          {/* Honeypot */}
          <div className="absolute -left-[9999px]" aria-hidden="true">
            <input
              type="text"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              value={honeypot}
              onChange={(e) => setHoneypot(e.target.value)}
            />
          </div>

          {status === 'success' ? (
            /* ---- Success ---- */
            <div className="text-center py-10">
              <div className="w-16 h-16 rounded-full bg-wealth-teal/15 flex items-center justify-center mx-auto mb-5">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--color-wealth-teal)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              </div>
              <h3 className="text-soft-sand font-bold text-xl mb-2">Application received.</h3>
              <p className="text-text-light-secondary text-sm">
                If it&apos;s the right match, we&apos;ll be in touch.
              </p>
            </div>
          ) : status === 'error' ? (
            /* ---- Error ---- */
            <div className="text-center py-10">
              <div className="w-16 h-16 rounded-full bg-red-500/15 flex items-center justify-center mx-auto mb-5">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#EF4444" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 8v4M12 16h.01" />
                </svg>
              </div>
              <h3 className="text-soft-sand font-bold text-xl mb-2">Something went wrong.</h3>
              <p className="text-text-light-secondary text-sm mb-6">
                Your data is safe. Try again or reach out directly.
              </p>
              <button
                onClick={() => setStatus('idle')}
                className="bg-burnt-amber hover:bg-burnt-amber-hover text-white font-bold rounded-xl px-8 py-3 transition-colors"
                style={{ fontSize: '15px' }}
              >
                Try Again
              </button>
            </div>
          ) : step === 1 ? (
            /* ---- Step 1: About You ---- */
            <div>
              <div className="space-y-4">
                {(() => {
                  const fields = form.step1Fields;
                  const elements: React.ReactNode[] = [];
                  let i = 0;
                  while (i < fields.length) {
                    if (fields[i].row && i + 1 < fields.length && fields[i + 1].row) {
                      elements.push(
                        <div key={`row-${i}`} className="grid grid-cols-2 gap-3 max-sm:grid-cols-1">
                          {renderField(fields[i])}
                          {renderField(fields[i + 1])}
                        </div>
                      );
                      i += 2;
                    } else {
                      elements.push(renderField(fields[i]));
                      i++;
                    }
                  }
                  return elements;
                })()}
              </div>

              {errors._rate && (
                <p className="text-red-500 text-xs mt-3">{errors._rate}</p>
              )}

              <button
                onClick={() => {
                  if (validateStep(form.step1Fields)) setStep(2);
                }}
                className="w-full mt-6 bg-burnt-amber hover:bg-burnt-amber-hover text-white font-bold rounded-xl py-3.5 flex items-center justify-center gap-2 transition-colors"
                style={{ fontSize: '15px' }}
              >
                Continue
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          ) : (
            /* ---- Step 2: Show Your Work ---- */
            <div>
              <div className="space-y-4">
                {form.step2Fields.map((field) => renderField(field))}
              </div>

              {/* Data consent */}
              <label className="flex items-start gap-3 mt-5 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={consent}
                  onChange={(e) => {
                    setConsent(e.target.checked);
                    if (errors._consent) setErrors((prev) => {
                      const next = { ...prev };
                      delete next._consent;
                      return next;
                    });
                  }}
                  className="mt-0.5 w-4 h-4 rounded border-border-dark accent-burnt-amber shrink-0"
                />
                <span className="text-text-light-secondary text-xs leading-relaxed">
                  I agree that Trading With Sidhant may collect and process the personal
                  information I provide (name, email, phone, portfolio links) solely for
                  evaluating my application. My data will be retained for up to 12 months
                  and will not be shared with third parties beyond what is necessary for
                  the hiring process. I can request deletion by emailing{' '}
                  <a href="mailto:careers@tradingwithsidhant.com" className="text-burnt-amber hover:underline">
                    careers@tradingwithsidhant.com
                  </a>.{' '}
                  <a href="/privacy" target="_blank" rel="noopener noreferrer" className="text-burnt-amber hover:underline">
                    Privacy Policy
                  </a>{' · '}
                  <a href="/terms" target="_blank" rel="noopener noreferrer" className="text-burnt-amber hover:underline">
                    Terms &amp; Conditions
                  </a>
                </span>
              </label>
              {errors._consent && (
                <p className="text-red-500 text-xs mt-1.5">{errors._consent}</p>
              )}

              {errors._rate && (
                <p className="text-red-500 text-xs mt-3">{errors._rate}</p>
              )}

              <div className="flex gap-3 mt-6">
                <button
                  onClick={() => setStep(1)}
                  className="border border-border-dark text-soft-sand hover:bg-deep-slate-light font-medium rounded-xl px-5 py-3.5 transition-colors"
                  style={{ fontSize: '15px' }}
                >
                  Back
                </button>
                <button
                  onClick={handleSubmit}
                  disabled={status === 'submitting'}
                  className="flex-1 bg-burnt-amber hover:bg-burnt-amber-hover disabled:opacity-60 text-white font-bold rounded-xl py-3.5 flex items-center justify-center gap-2 transition-colors"
                  style={{ fontSize: '15px' }}
                >
                  {status === 'submitting' ? (
                    <>
                      <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
                      </svg>
                      Submitting...
                    </>
                  ) : (
                    <>
                      Submit Application
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </>
                  )}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

    </div>
  );
}

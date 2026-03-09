export interface Job {
  slug: string;
  title: string;
  titleAccent: string;
  status: 'active' | 'closed';
  postedDate: string;
  description: string;
  salary: {
    label: string;
    amount: string;
    unit: string;
    detail: string;
    detailBold: string;
  };
  meta: Array<{ bold: string; rest: string }>;
  quote: { text: string; accentWord: string; author: string };
  responsibilities: Array<{
    icon: string;
    iconColor: 'amber' | 'teal' | 'gold';
    title: string;
    description: string;
  }>;
  kpis: Array<{ number: string; label: string; description: string }>;
  kpiNote: string;
  tools: Array<{ icon: string; title: string; description: string }>;
  growth: Array<{
    period: string;
    milestone: string;
    pay: string;
    active: boolean;
  }>;
  requirements: Array<{ bold: string; rest: string }>;
  contract: string;
  perks: Array<{ emoji: string; title: string; description: string }>;
  process: Array<{ title: string; description: string }>;
  cta: { eyebrow: string; heading: string; subtext: string };
  form: {
    step1Fields: FormField[];
    step2Fields: FormField[];
  };
}

export interface FormField {
  name: string;
  label: string;
  type: 'text' | 'email' | 'tel' | 'url' | 'select' | 'textarea';
  placeholder: string;
  required: boolean;
  hint?: string;
  options?: Array<{ value: string; label: string }>;
  validation?: 'email' | 'url' | 'phone';
  autocomplete?: string;
  maxLength?: number;
  row?: boolean;
}

export interface FormPayload {
  fullName: string;
  email: string;
  whatsapp: string;
  telegram?: string;
  yearsExperience: string;
  longFormExp: string;
  shortFormExp: string;
  managementExp: string;
  primaryTools: string;
  portfolio: string;
  videoWalkthrough: string;
  salaryExpectation: string;
  whyTWS: string;
  availability: string;
  submittedAt: string;
  source: string;
}

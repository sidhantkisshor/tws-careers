import type { Job } from '@/lib/types';

export const jobs: Job[] = [
  {
    slug: 'lead-video-editor',
    title: 'Lead',
    titleAccent: 'Video Editor',
    status: 'active',
    postedDate: '2026-03-08',
    description:
      "We're scaling to multiple channels, higher output, and better content than anything in Indian fintech education. We need someone who doesn't just edit. Someone who owns the entire visual output of the brand. If you can turn 45 minutes of raw footage into content that makes people stay, share, and come back. This role was built for you.",
    salary: {
      label: 'Performance-Linked',
      amount: 'Up to \u20B91L',
      unit: '/month',
      detail:
        'Clear benchmarks. Prove your output in 30-day sprints and scale to',
      detailBold: '\u20B91,00,000/month within 90 days',
    },
    meta: [
      { bold: 'Remote', rest: '\u00B7 Full-Time Engagement' },
      { bold: 'India', rest: 'timezone' },
      { bold: '2 weeks', rest: 'Start in' },
      { bold: 'Multi-Channel', rest: 'output' },
    ],
    quote: {
      text: "I don't want an editor. I want a",
      accentWord: 'content partner',
      author: '/ Sidhant, Founder',
    },
    responsibilities: [
      {
        icon: '\uD83C\uDFAC',
        iconColor: 'amber',
        title: 'Long-Form YouTube',
        description:
          'Take raw livestreams and talking-head footage and build them into 8\u201320 min retention-optimised YouTube videos. You decide the structure, pacing, and story beats.',
      },
      {
        icon: '\u26A1',
        iconColor: 'teal',
        title: 'Short-Form: Reels, Shorts, Clips',
        description:
          'Cut short-form content from the same raw sessions: Instagram Reels, YouTube Shorts, and standalone clips. Same-day turnaround. You know what hooks, what loops, and what makes people share before they even finish watching.',
      },
      {
        icon: '\uD83D\uDD0D',
        iconColor: 'amber',
        title: 'Quality Gate + Team Leadership',
        description:
          "Review junior editors' work before it ships. Set the visual standard. Mentor the team. You're the final quality gate before the audience sees it. Junior editors joining within 60 days. You'll lead them.",
      },
    ],
    kpis: [
      {
        number: '8-10',
        label: 'Pieces / Week',
        description:
          '2-3 long-form + 6-8 short-form solo. Scaling to 15+ as junior editors join from Month 3.',
      },
      {
        number: '50%+',
        label: 'Avg. Retention',
        description:
          'Average view duration on YouTube. This is the #1 metric.',
      },
      {
        number: '<48h',
        label: 'Turnaround',
        description:
          'Short-form same day. Long-form within 48 hours. Speed matters, but so does craft.',
      },
      {
        number: '<2',
        label: 'Revision Rounds',
        description:
          "Average revisions per video. If it needs 3+ rounds, the edit instinct isn't there.",
      },
    ],
    kpiNote:
      "Views aren't fully on you — that's a content + distribution game. But retention is. Your editing directly controls how long people stay.",
    tools: [
      {
        icon: '\uD83C\uDFA5',
        title: 'Premiere Pro / DaVinci',
        description:
          'Primary editing suite. Motion graphics workflow a plus.',
      },
      {
        icon: '\u2601\uFE0F',
        title: 'Google Drive + Notion',
        description:
          'Footage delivery, briefs, and task management. Everything organised and accessible in the cloud.',
      },
      {
        icon: '\uD83C\uDFA7',
        title: 'Audio & Sound Design',
        description:
          'Music curation, sound effects, and voice clarity. Audio quality is non-negotiable at TWS.',
      },
    ],
    growth: [
      {
        period: 'Day 1\u201330',
        milestone: 'Prove your output',
        pay: 'Starting Base',
        active: true,
      },
      {
        period: 'Day 30\u201360',
        milestone: 'Hit retention targets',
        pay: 'First Bump',
        active: false,
      },
      {
        period: 'Day 60\u201390',
        milestone: 'Lead junior editors',
        pay: 'Second Bump',
        active: false,
      },
      {
        period: 'Day 90+',
        milestone: 'Full ownership',
        pay: '\u20B91,00,000/mo',
        active: false,
      },
    ],
    requirements: [
      {
        bold: '3+ years',
        rest: 'editing both long-form AND short-form video content professionally. Not college projects. Real channels, real views.',
      },
      {
        bold: 'Premiere Pro or DaVinci Resolve',
        rest: 'as your daily driver. After Effects and motion graphics are a serious bonus.',
      },
      {
        bold: 'A portfolio you can show right now.',
        rest: 'We want to see pacing, retention edits, and story structure. Not "I\'ll send it later". If you can\'t show it, you don\'t have it.',
      },
      {
        bold: 'You understand retention at a gut level.',
        rest: 'You know why someone clicks away at 0:03 and how to build a hook that makes them stay for 8 minutes.',
      },
      {
        bold: 'Speed without sloppiness.',
        rest: "Same-day Reels from raw footage isn't a flex. It's the baseline. You move fast and the output still looks premium.",
      },
      {
        bold: 'Opinions about content.',
        rest: "You don't just execute. You push back when an edit doesn't work, suggest better structures, and think like a content strategist who happens to edit.",
      },
    ],
    contract:
      'Independent contractor, remote engagement. Milestone reviews every 30 days.',
    perks: [
      {
        emoji: '\uD83D\uDCA1',
        title: 'Direct Line to the Founder',
        description:
          'Work directly with Sidhant. No layers of management, no HR maze. You talk to the person making decisions.',
      },
      {
        emoji: '\uD83D\uDCC8',
        title: 'Learn How a Content Business Scales',
        description:
          "You'll be inside a high-converting content operation from day one. You won't just cut footage. You'll understand why content drives revenue and how a creator business actually works at scale.",
      },
      {
        emoji: '\uD83C\uDFE0',
        title: 'Fully Remote',
        description:
          'Work from anywhere in India. We measure output, not hours logged. Deliver the work, manage your own time.',
      },
    ],
    process: [
      {
        title: 'Apply (3 min)',
        description:
          'Fill the form below. Portfolio link + a 2-min video walking us through your best edit and why it works. Skip the cover letter. Just show us your work.',
      },
      {
        title: 'We Review (48 hrs)',
        description:
          "Our team reviews every application. If it's the right fit, we'll reach out within 48 hours to move you forward.",
      },
      {
        title: 'Paid Test Task (48 hrs)',
        description:
          'We sign a short contractor agreement, then send you a real raw clip. You deliver: one long-form YouTube edit + two Reels. 48-hour deadline. Compensated. Show us your style and speed.',
      },
      {
        title: 'Final Culture Call',
        description:
          "30-min call with Sidhant. Not about skills anymore. We already know you can edit. This is about ownership, communication, and whether you'll thrive in a fast-moving content team.",
      },
      {
        title: 'Offer + Onboarding',
        description:
          "If the vibe is right, you start within 2 weeks. We sort the paperwork — scope, IP, pay — then onboard you fast. No orientation theatre. Day 1, you're editing.",
      },
    ],
    cta: {
      eyebrow: 'The Role Is Open',
      heading: 'Ready to own the edit room?',
      subtext: "The work speaks. We'll be in touch.",
    },
    form: {
      step1Fields: [
        {
          name: 'fullName',
          label: 'Full Name',
          type: 'text',
          placeholder: 'Your full name',
          required: true,
          autocomplete: 'name',
        },
        {
          name: 'email',
          label: 'Email',
          type: 'email',
          placeholder: 'your@email.com',
          required: true,
          validation: 'email',
          autocomplete: 'email',
          row: true,
        },
        {
          name: 'whatsapp',
          label: 'WhatsApp Number',
          type: 'tel',
          placeholder: '+91 XXXXX XXXXX',
          required: true,
          validation: 'phone',
          autocomplete: 'tel',
          row: true,
        },
        {
          name: 'telegram',
          label: 'Telegram Handle',
          type: 'text',
          placeholder: '@yourhandle',
          required: false,
        },
        {
          name: 'yearsExperience',
          label: 'Years of Video Editing Experience',
          type: 'select',
          placeholder: 'Select an option',
          required: true,
          options: [
            { value: 'Less than 1 year', label: 'Less than 1 year' },
            { value: '1-2 years', label: '1\u20132 years' },
            { value: '2-3 years', label: '2\u20133 years' },
            { value: '3-5 years', label: '3\u20135 years' },
            { value: '5+ years', label: '5+ years' },
          ],
        },
        {
          name: 'longFormExp',
          label: 'Long-Form Editing Experience (8+ min YouTube videos)',
          type: 'select',
          placeholder: 'Select an option',
          required: true,
          options: [
            { value: 'Yes - regularly edit long-form content', label: 'Yes \u2014 regularly edit long-form content' },
            { value: 'Some - done a few long-form projects', label: 'Some \u2014 done a few long-form projects' },
            { value: 'No - only short-form', label: 'No \u2014 only short-form' },
          ],
          row: true,
        },
        {
          name: 'shortFormExp',
          label: 'Short-Form Editing Experience (Reels / Shorts / TikTok)',
          type: 'select',
          placeholder: 'Select an option',
          required: true,
          options: [
            { value: 'Yes - this is my primary format', label: 'Yes \u2014 this is my primary format' },
            { value: 'Some - done a few short-form projects', label: 'Some \u2014 done a few short-form projects' },
            { value: 'No - only long-form', label: 'No \u2014 only long-form' },
          ],
          row: true,
        },
        {
          name: 'managementExp',
          label: 'Have you managed or reviewed other editors\u2019 work?',
          type: 'select',
          placeholder: 'Select an option',
          required: true,
          options: [
            { value: 'Yes - led a team or reviewed others edits', label: 'Yes \u2014 led a team or reviewed others\u2019 edits' },
            { value: 'Somewhat - given feedback informally', label: 'Somewhat \u2014 given feedback informally' },
            { value: 'No - only individual editing', label: 'No \u2014 only individual editing' },
          ],
        },
      ],
      step2Fields: [
        {
          name: 'primaryTools',
          label: 'Primary Editing Tools',
          type: 'text',
          placeholder: 'e.g. Premiere Pro, DaVinci Resolve, After Effects, CapCut',
          required: true,
        },
        {
          name: 'portfolio',
          label: 'Portfolio Link',
          type: 'url',
          placeholder: 'https://your-portfolio-link.com',
          required: true,
          validation: 'url',
        },
        {
          name: 'videoWalkthrough',
          label: '2-Min Video \u2014 Show your BEST edit and explain WHY it works',
          type: 'url',
          placeholder: 'Loom, YouTube, or Drive link',
          required: true,
          validation: 'url',
        },
        {
          name: 'salaryExpectation',
          label: 'Monthly Salary Expectation (INR)',
          type: 'text',
          placeholder: 'e.g. 30000',
          required: true,
        },
        {
          name: 'whyTWS',
          label: 'Why do you want to work with Trading With Sidhant?',
          type: 'textarea',
          placeholder: '2\u20133 sentences. Be specific.',
          required: true,
          maxLength: 1000,
        },
        {
          name: 'availability',
          label: 'Can you start within 2 weeks?',
          type: 'select',
          placeholder: 'Select an option',
          required: true,
          options: [
            { value: 'Yes - available immediately or within 2 weeks', label: 'Yes \u2014 available immediately or within 2 weeks' },
            { value: 'Need 2-4 weeks notice', label: 'Need 2\u20134 weeks notice' },
            { value: 'Need more than 4 weeks', label: 'Need more than 4 weeks' },
          ],
        },
      ],
    },
  },
];

export function getJob(slug: string): Job | undefined {
  return jobs.find((j) => j.slug === slug);
}

export function getActiveJobs(): Job[] {
  return jobs.filter((j) => j.status === 'active');
}

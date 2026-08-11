// src/lib/content.ts

export interface Service {
  title: string;
  description: string;
}

export interface CaseStudy {
  name: string;
  tagline: string;
  stack: string[];
  description: string;
  liveUrl?: string;   
  githubUrl?: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}


export interface Product {
  name: string;
  tagline: string;
  description: string;
  status: 'Live' | 'Beta' | 'In Development';
  link?: string;
}

export const services: Service[] = [
  {
    title: 'Full-stack product builds',
    description:
      'Backend, frontend, and everything between — architected for production from day one, not prototyped and rebuilt later.',
  },
  {
    title: 'Systems integration',
    description:
      'Payments, messaging, and third-party APIs wired in correctly — auth, rate limiting, webhook validation, retries.',
  },
  {
    title: 'Deployment & infrastructure',
    description:
      'Cloud-hosted, monitored, and built to scale — not a local demo that breaks the moment real traffic hits it.',
  },
];

export const caseStudies: CaseStudy[] = [
  {
    name: 'ManifestHQ',
    tagline: 'Real-time shipment visibility for Kenyan clearing agents',
    stack: [
      'FastAPI',
      'JWT + rotating refresh tokens',
      'Redis rate limiting',
      'Meta WhatsApp Business API',
      'Africa’s Talking SMS',
      'Cloudinary',
      'React / TypeScript / Vite',
    ],
    description:
      'A B2B SaaS platform giving merchant clients live visibility into their shipments, built with encrypted document handling and automated status notifications over WhatsApp and SMS.',
      liveUrl: 'https://manifest-hq.vercel.app/', 
      githubUrl: 'https://github.com/infralabs-studio/ManifestHQ-backend', // Replace with real URL (or delete if private)
  },
  {
    name: 'NEXUS',
    tagline: 'Cross-platform autonomous personal assistant',
    stack: [
      'FastAPI',
      'Hub-and-spoke architecture',
      'Android',
      'Windows',
      'Render / Neon / Upstash'
    ],
    description:
      'A production-deployed personal assistant system with a central FastAPI brain coordinating Android and Windows client spokes.',
      githubUrl: 'https://github.com/infralabs-studio/nexus',
  },
  {
    name: 'Sheria Flow',
    tagline: 'End-to-end payroll and compliance system',
    stack: [
      'Python / Django',
      'React.js',
      'MySQL'
    ],
    description:
      'A comprehensive payroll system designed to handle payroll processing from end to end for companies and businesses, streamlining compliance and financial operations.',
      liveUrl: 'https://sheriaflow-web.vercel.app/',
  },
];

export const processSteps: ProcessStep[] = [
  { 
    step: '01', 
    title: 'Scope', 
    description: 'We define the real problem before writing a line of code.' 
  },
  { 
    step: '02', 
    title: 'Build', 
    description: 'Senior engineers ship in focused iterations, not black-box sprints.' 
  },
  { 
    step: '03', 
    title: 'Ship', 
    description: 'Deployed to real infrastructure — monitored, documented, handed off cleanly.' 
  },
];


export const products: Product[] = [
  {
    name: "Systema",
    tagline: "Core Operations Platform",
    description: "A complete internal operating system for service businesses. Handles invoicing, client portals, and automated workflow triggers in a single unified dashboard.",
    status: "Live",
    link: "#"
  },
  {
    name: "WebFlow Engine",
    tagline: "Headless CMS Bridge",
    description: "An API middleware layer that connects static frontends to dynamic databases, allowing marketing teams to update content without touching the codebase.",
    status: "Beta",
    link: "#"
  },
  {
    name: "MetricSync",
    tagline: "Real-time Analytics Dashboard",
    description: "Aggregates data from Stripe, Google Analytics, and custom PostgreSQL databases into a single, real-time executive dashboard.",
    status: "In Development"
  }
];
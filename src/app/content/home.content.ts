export interface HeroContent {
  eyebrow: string;
  headline: string;
  subheadline: string;
  ctas: {
    primary: string;
    secondary: string;
    whatsapp: string;
  };
  microTrust: string;
}

export interface TrustStripItem {
  label: string;
}

export interface NicheItem {
  title: string;
  description: string;
  image: string;
  srcset: string;
}

export interface ValuePropItem {
  title: string;
  description: string;
  icon: 'speed' | 'layout' | 'lead' | 'seo' | 'update' | 'maintenance';
}

export interface PackageItem {
  name: string;
  price: string;
  tagline: string;
  highlight: boolean;
  items: string[];
  bestFor: string;
  summary: string;
}

export interface WorkItem {
  title: string;
  category: string;
  result: string;
  image: string;
  srcset: string;
  link: string;
}

export interface ProcessStep {
  title: string;
  description: string;
}

export interface TestimonialItem {
  quote: string;
  name: string;
  role: string;
  company: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ContactCta {
  title: string;
  description: string;
  phone: string;
  whatsapp: string;
  emails: string[];
  availability: string;
}

export interface HomeContent {
  hero: HeroContent;
  trustStrip: {
    eyebrow: string;
    title: string;
    summary: string;
    items: TrustStripItem[];
  };
  designFirst: {
    eyebrow: string;
    title: string;
    description: string;
    steps: string[];
  };
  niches: {
    eyebrow: string;
    title: string;
    summary: string;
    items: NicheItem[];
  };
  valueProps: {
    eyebrow: string;
    title: string;
    summary: string;
    items: ValuePropItem[];
  };
  packages: {
    eyebrow: string;
    title: string;
    summary: string;
    items: PackageItem[];
  };
  work: {
    eyebrow: string;
    title: string;
    summary: string;
    items: WorkItem[];
  };
  process: {
    eyebrow: string;
    title: string;
    summary: string;
    steps: ProcessStep[];
  };
  testimonials: {
    eyebrow: string;
    title: string;
    summary: string;
    items: TestimonialItem[];
  };
  faq: {
    eyebrow: string;
    title: string;
    summary: string;
    items: FaqItem[];
  };
  contactCta: ContactCta;
}

export const homeContent: HomeContent = {
  hero: {
    eyebrow: 'WEB DESIGN • DEVELOPMENT STUDIO',
    headline:
      'Modern websites for retail & product brands — designed to convert, built to scale.',
    subheadline:
      'We design the first draft, get your approval, then build a fast, responsive website with clean UX, lead flows (WhatsApp + forms), and performance-first delivery.',
    ctas: {
      primary: 'Get a Free Quote',
      secondary: 'See Packages →',
      whatsapp: 'WhatsApp Now'
    },
    microTrust:
      'Design draft first · Two revision rounds · Typical turnaround: 3–10 days'
  },
  trustStrip: {
    eyebrow: 'Highlights',
    title: 'Agency-grade delivery, built for clarity and speed',
    summary: 'Focused on outcomes that matter across retail and product brands.',
    items: [
      { label: 'Mobile-first UX' },
      { label: 'Fast performance' },
      { label: 'Lead flows' },
      { label: 'Easy maintenance' }
    ]
  },
  designFirst: {
    eyebrow: 'Design-First Approach',
    title: 'No design yet? Don’t worry — we’ll design it first, then build the website.',
    description:
      'We start with a focused design draft to align on layout, content, and style before development.',
    steps: ['Figma draft', 'Approval', 'Build & launch']
  },
  niches: {
    eyebrow: 'Industries',
    title: 'Built for the brands we know best',
    summary: 'Focused layouts for product catalogs, retail launches, and B2B lead flow.',
    items: [
      {
        title: 'Perfumes & Fragrances',
        description: 'Elegant catalogs and clear purchase paths.',
        image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=800&q=80',
        srcset:
          'https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=400&q=80 400w, https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=800&q=80 800w'
      },
      {
        title: 'Watches & Accessories',
        description: 'Premium product pages with strong storytelling.',
        image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80',
        srcset:
          'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=400&q=80 400w, https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80 800w'
      },
      {
        title: 'Eyewear & Optics',
        description: 'Category filtering and inquiry-ready layouts.',
        image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=800&q=80',
        srcset:
          'https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=400&q=80 400w, https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=800&q=80 800w'
      },
      {
        title: 'Beauty & Skincare',
        description: 'Launch-ready layouts for new collections.',
        image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80',
        srcset:
          'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=400&q=80 400w, https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80 800w'
      },
      {
        title: 'Manufacturers / B2B',
        description: 'Capability pages and RFQ lead flows.',
        image: 'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=800&q=80',
        srcset:
          'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=400&q=80 400w, https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=800&q=80 800w'
      }
    ]
  },
  valueProps: {
    eyebrow: 'Capabilities',
    title: 'What you get with ASMCO Tech',
    summary: 'Everything you need for a high-performing website without unnecessary overhead.',
    items: [
      {
        title: 'Performance-first UX',
        description: 'Fast load times with clean, responsive layouts.',
        icon: 'speed'
      },
      {
        title: 'Catalog pages that convert',
        description: 'Clear product hierarchy with focused CTAs.',
        icon: 'layout'
      },
      {
        title: 'WhatsApp + form leads',
        description: 'Lead flows that make ordering effortless.',
        icon: 'lead'
      },
      {
        title: 'SEO-ready structure',
        description: 'Clean metadata, headings, and performance-first setup.',
        icon: 'seo'
      },
      {
        title: 'Easy future updates',
        description: 'Add products, services, or collections quickly.',
        icon: 'update'
      },
      {
        title: 'Hosting-friendly builds',
        description: 'Low-maintenance builds that stay fast over time.',
        icon: 'maintenance'
      }
    ]
  },
  packages: {
    eyebrow: 'Pricing',
    title: 'Packages built for long-term efficiency',
    summary: 'Transparent pricing with clear deliverables and a design-first workflow.',
    items: [
      {
        name: 'Starter',
        price: '$200',
        tagline: 'Business Website',
        highlight: false,
        summary: 'A clean presence for early-stage brands and services.',
        items: [
          '1–3 pages (Home, About, Contact)',
          'Modern landing layout',
          'WhatsApp + Call CTA',
          'Basic SEO setup'
        ],
        bestFor: 'Best for: new brands and service businesses'
      },
      {
        name: 'Growth',
        price: '$500',
        tagline: 'Catalog + WhatsApp Orders',
        highlight: true,
        summary: 'Catalog-driven experience built for product discovery.',
        items: [
          '5–8 pages',
          'Product catalog grid + details',
          'WhatsApp order / inquiry flow',
          'Speed optimization'
        ],
        bestFor: 'Best for: catalog-driven product brands'
      },
      {
        name: 'Pro',
        price: '$700',
        tagline: 'Small eCommerce + Advanced Setup',
        highlight: false,
        summary: 'Advanced structure and UX for scaling teams.',
        items: [
          '8–15 pages',
          'Catalog + filters + collections',
          'Advanced animations + performance',
          'SEO enhancements + analytics'
        ],
        bestFor: 'Best for: scaling brands and B2B teams'
      }
    ]
  },
  work: {
    eyebrow: 'Portfolio',
    title: 'Selected work across product and B2B brands',
    summary: 'Focused, clean, and conversion-ready site experiences.',
    items: [
      {
        title: 'Noor Scents',
        category: 'Perfume catalog launch',
        result: 'WhatsApp inquiries up 45% after launch',
        image: 'https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&w=1200&q=80',
        srcset:
          'https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&w=600&q=80 600w, https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&w=1200&q=80 1200w',
        link: 'View case study'
      },
      {
        title: 'Atlas Watches',
        category: 'Luxury product showcase',
        result: 'Premium product story with clear conversion path',
        image: 'https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?auto=format&fit=crop&w=1200&q=80',
        srcset:
          'https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?auto=format&fit=crop&w=600&q=80 600w, https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?auto=format&fit=crop&w=1200&q=80 1200w',
        link: 'View case study'
      },
      {
        title: 'Crystal Optics',
        category: 'Eyewear grid + inquiry',
        result: 'Faster browsing with clear product differentiation',
        image: 'https://images.unsplash.com/photo-1516715094483-75da7dee9758?auto=format&fit=crop&w=1200&q=80',
        srcset:
          'https://images.unsplash.com/photo-1516715094483-75da7dee9758?auto=format&fit=crop&w=600&q=80 600w, https://images.unsplash.com/photo-1516715094483-75da7dee9758?auto=format&fit=crop&w=1200&q=80 1200w',
        link: 'View case study'
      },
      {
        title: 'Sialkot Works',
        category: 'Factory profile + RFQ',
        result: 'B2B RFQ-ready within 7 days',
        image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80',
        srcset:
          'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80 600w, https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80 1200w',
        link: 'View case study'
      }
    ]
  },
  process: {
    eyebrow: 'Process',
    title: 'Simple process. Fast delivery.',
    summary: 'A focused workflow designed to keep momentum and clarity.',
    steps: [
      { title: 'Discovery', description: 'Requirements and references' },
      { title: 'Design', description: 'Layout and content structure' },
      { title: 'Build', description: 'Angular + SCSS development' },
      { title: 'Review', description: 'Final tweaks and QA' },
      { title: 'Launch', description: 'Domain, hosting, handover' }
    ]
  },
  testimonials: {
    eyebrow: 'Testimonials',
    title: 'What businesses say',
    summary: 'Client feedback from product and manufacturing brands.',
    items: [
      {
        quote:
          'The site feels premium and loads fast. It’s easy for customers to contact us.',
        name: 'Ayesha Khan',
        role: 'Founder',
        company: 'Noor Scents'
      },
      {
        quote: 'We launched quickly. The team handled design and content smoothly.',
        name: 'Hassan Raza',
        role: 'Brand Lead',
        company: 'Atlas Watches'
      },
      {
        quote:
          'Catalog pages are clear and easy to browse. Inquiries are organized now.',
        name: 'Bilal Ahmed',
        role: 'Operations Manager',
        company: 'Sialkot Works'
      }
    ]
  },
  faq: {
    eyebrow: 'FAQs',
    title: 'Frequently asked questions',
    summary: 'Clear answers before we start.',
    items: [
      {
        question: 'How much does it cost?',
        answer:
          'We offer clear packages with one-time setup and optional light maintenance.'
      },
      {
        question: 'How long does delivery take?',
        answer: 'Most projects launch within 1–3 weeks depending on scope.'
      },
      {
        question: 'Can I host it on affordable/shared hosting?',
        answer:
          'Yes. We build hosting-friendly sites that run well on shared plans.'
      },
      {
        question: 'Do you provide WhatsApp order flow?',
        answer: 'Yes. Every plan includes WhatsApp CTA and order flow.'
      },
      {
        question: 'Can you update products later?',
        answer:
          'Yes. We can update items for you or provide a simple update workflow.'
      },
      {
        question: 'Do you offer maintenance?',
        answer:
          'Yes. Optional light maintenance is available for peace of mind.'
      }
    ]
  },
  contactCta: {
    title: 'Ready to launch?',
    description: 'Get a simple quote and plan in 24 hours.',
    phone: '0313 4810105',
    whatsapp: 'WhatsApp Now',
    emails: ['hello@asmco.company', 'founder@asmco.company'],
    availability: '24/7 Available'
  }
};

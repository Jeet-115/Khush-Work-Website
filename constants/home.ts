import type { LucideIcon } from "lucide-react";
import {
  Award,
  Building2,
  Clock,
  Columns3,
  DoorOpen,
  Layers,
  LayoutGrid,
  Paintbrush,
  PanelTop,
  Sparkles,
  Square,
  Star,
  Wrench,
} from "lucide-react";

export const HERO_CONTENT = {
  headline: "Premium Aluminium & Glass Solutions for Modern Living",
  subheading:
    "Elegant aluminium windows, sliding doors, glass partitions, ACP cladding, and complete interior solutions.",
  image: "/images/hero.svg",
  imageAlt:
    "Modern luxury home with premium aluminium windows and glass facade",
} as const;

export type StatItem = {
  label: string;
  value: number;
  suffix?: string;
};

export const ABOUT_STATS: StatItem[] = [
  { label: "Years Experience", value: 10, suffix: "+" },
  { label: "Projects Completed", value: 500, suffix: "+" },
  { label: "Happy Customers", value: 1000, suffix: "+" },
  { label: "Premium Materials", value: 100, suffix: "%" },
  { label: "Professional Team", value: 50, suffix: "+" },
];

export const ABOUT_CONTENT = {
  eyebrow: "About Us",
  title: "Crafting Architectural Excellence Since Day One",
  description:
    "Shree Chamunda Aluminium delivers precision-engineered aluminium and glass solutions for discerning homeowners, architects, and developers across Gujarat. We combine premium materials with expert craftsmanship to transform spaces.",
} as const;

export type ServiceItem = {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
};

export const SERVICES: ServiceItem[] = [
  {
    icon: Square,
    title: "Aluminium Windows",
    description:
      "Slim-profile, thermally efficient windows designed for panoramic views and lasting performance.",
    href: "/services/aluminium-windows",
  },
  {
    icon: DoorOpen,
    title: "Sliding Doors",
    description:
      "Seamless indoor-outdoor transitions with smooth-gliding, weather-sealed sliding systems.",
    href: "/services/sliding-doors",
  },
  {
    icon: Columns3,
    title: "Glass Partitions",
    description:
      "Elegant glass divisions that maximise light while defining sophisticated workspaces.",
    href: "/services/glass-partitions",
  },
  {
    icon: Layers,
    title: "ACP Cladding",
    description:
      "Durable aluminium composite panel facades with striking finishes and weather resistance.",
    href: "/services/acp-cladding",
  },
  {
    icon: Building2,
    title: "Structural Glazing",
    description:
      "Frameless glass architecture for landmark commercial and residential facades.",
    href: "/services/structural-glazing",
  },
  {
    icon: LayoutGrid,
    title: "Office Partitions",
    description:
      "Modular office systems that balance privacy, acoustics, and contemporary aesthetics.",
    href: "/services/office-partitions",
  },
  {
    icon: PanelTop,
    title: "False Ceiling",
    description:
      "Refined ceiling solutions integrating lighting, HVAC, and clean architectural lines.",
    href: "/services/false-ceiling",
  },
  {
    icon: Paintbrush,
    title: "Interior Work",
    description:
      "End-to-end interior execution — from concept to completion with meticulous detail.",
    href: "/services/interior-work",
  },
];

export type FeatureItem = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const WHY_CHOOSE_US: FeatureItem[] = [
  {
    icon: Sparkles,
    title: "Premium Materials",
    description:
      "We source internationally certified profiles, glass, and hardware for enduring quality.",
  },
  {
    icon: Wrench,
    title: "Expert Installation",
    description:
      "Skilled technicians ensure pixel-perfect fitting, sealing, and structural integrity.",
  },
  {
    icon: Award,
    title: "Modern Designs",
    description:
      "Contemporary profiles and finishes aligned with global architectural trends.",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    description:
      "Structured project management keeps fabrication and installation on schedule.",
  },
  {
    icon: Star,
    title: "Customer Satisfaction",
    description:
      "Dedicated after-sales support and a reputation built on trust and transparency.",
  },
];

export type TestimonialItem = {
  name: string;
  role: string;
  rating: number;
  review: string;
};

export const TESTIMONIALS: TestimonialItem[] = [
  {
    name: "Rajesh Patel",
    role: "Homeowner, Rajkot",
    rating: 5,
    review:
      "The sliding door system transformed our living room. Impeccable finish, on-time installation, and a team that truly cares about details.",
  },
  {
    name: "Priya Shah",
    role: "Architect, Ahmedabad",
    rating: 5,
    review:
      "I specify Shree Chamunda Aluminium on premium residential projects. Their structural glazing work consistently exceeds client expectations.",
  },
  {
    name: "Vikram Mehta",
    role: "Developer, Surat",
    rating: 5,
    review:
      "From quotation to handover, the process was seamless. Quality materials, professional crew, and excellent post-installation support.",
  },
];

export type FaqItem = {
  question: string;
  answer: string;
};

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "What types of aluminium systems do you offer?",
    answer:
      "We offer aluminium windows, sliding doors, glass partitions, ACP cladding, structural glazing, office partitions, false ceilings, and complete interior solutions tailored to your project.",
  },
  {
    question: "Do you provide free site visits and quotations?",
    answer:
      "Yes. We offer complimentary site assessments and detailed quotations. Contact us via phone, WhatsApp, or our contact form to schedule a visit.",
  },
  {
    question: "What is the typical project timeline?",
    answer:
      "Timelines vary by scope. Standard residential window projects take 2–4 weeks after measurement confirmation. Large commercial facades are scheduled with a dedicated project plan.",
  },
  {
    question: "Do you use premium branded materials?",
    answer:
      "Absolutely. We work with certified aluminium profiles, toughened glass, and hardware from trusted manufacturers to ensure durability and performance.",
  },
  {
    question: "Do you serve areas outside Vadodara?",
    answer:
      "Yes. We are based in Vadodara and serve clients across Gujarat including Ahmedabad, Surat, Rajkot, and Gandhinagar, with installation teams available for major project locations.",
  },
];

export const WHY_CHOOSE_CONTENT = {
  eyebrow: "Why Choose Us",
  title: "The Standard of Excellence You Deserve",
  description:
    "Every project reflects our commitment to precision, premium materials, and uncompromising craftsmanship.",
} as const;

export const TESTIMONIALS_CONTENT = {
  eyebrow: "Testimonials",
  title: "Trusted by Homeowners & Architects",
  description:
    "Hear from clients who chose Shree Chamunda Aluminium for their most important spaces.",
} as const;

export const FAQ_CONTENT = {
  eyebrow: "FAQ",
  title: "Frequently Asked Questions",
  description:
    "Everything you need to know about our products, process, and project delivery.",
} as const;

export const CONTACT_CTA_CONTENT = {
  eyebrow: "Get In Touch",
  title: "Ready to Start Your Project?",
  description:
    "Speak with our specialists for a free consultation and personalised quotation.",
} as const;

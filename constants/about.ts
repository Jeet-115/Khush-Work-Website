import type { LucideIcon } from "lucide-react";
import {
  Eye,
  Gem,
  Handshake,
  Heart,
  Lightbulb,
  Shield,
  Target,
} from "lucide-react";

export const ABOUT_PAGE_HERO = {
  eyebrow: "About Us",
  title: "Building Spaces with Precision & Purpose",
  description:
    "For over a decade, Shree Chamunda Aluminium has been Gujarat's trusted partner for architectural aluminium and glass solutions.",
  image: "/images/about/company-story.svg",
  imageAlt: "Shree Chamunda Aluminium workshop and architectural installations",
} as const;

export const COMPANY_STORY = {
  eyebrow: "Our Story",
  title: "From Workshop to Architectural Landmark",
  paragraphs: [
    "Shree Chamunda Aluminium began with a simple belief: every space deserves the same precision and care as a landmark building. What started as a focused fabrication workshop in Rajkot has grown into a full-service aluminium and glass solutions company trusted across Gujarat.",
    "We partnered with architects, builders, and homeowners who demanded more — slimmer profiles, tighter tolerances, and finishes that elevate every facade. That pursuit of excellence shaped our culture and our craft.",
    "Today, we deliver end-to-end solutions from design consultation and fabrication to installation and after-sales support. Every project carries our signature: premium materials, expert execution, and an unwavering commitment to quality.",
  ],
  image: "/images/about/about-img.PNG",
} as const;

export const MISSION = {
  title: "Our Mission",
  description:
    "To deliver world-class aluminium and glass solutions that enhance the beauty, performance, and longevity of every space we touch — through innovation, craftsmanship, and unwavering integrity.",
  icon: Target,
} as const;

export const VISION = {
  title: "Our Vision",
  description:
    "To be Gujarat's most respected name in architectural aluminium — recognised for setting the standard in design, engineering, and client experience across residential and commercial landscapes.",
  icon: Eye,
} as const;

export type ValueItem = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const VALUES: ValueItem[] = [
  {
    icon: Gem,
    title: "Excellence",
    description:
      "We pursue perfection in every cut, seal, and finish — because details define architecture.",
  },
  {
    icon: Handshake,
    title: "Integrity",
    description:
      "Transparent pricing, honest timelines, and commitments we stand behind long after installation.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "We embrace modern profiles, systems, and techniques to deliver forward-thinking solutions.",
  },
  {
    icon: Heart,
    title: "Client Focus",
    description:
      "Your vision guides our process. We listen, advise, and execute with your goals at the centre.",
  },
  {
    icon: Shield,
    title: "Reliability",
    description:
      "On-time delivery, durable materials, and responsive support you can depend on for years.",
  },
];

export type TimelineItem = {
  year: string;
  title: string;
  description: string;
};

export const TIMELINE: TimelineItem[] = [
  {
    year: "2002",
    title: "The Beginning",
    description:
      "Founded in Rajkot with a focus on precision aluminium window fabrication for local residences.",
  },
  {
    year: "2007",
    title: "Commercial Expansion",
    description:
      "Expanded into commercial facades, sliding systems, and structural glazing for office towers.",
  },
  {
    year: "2012",
    title: "Interior Solutions",
    description:
      "Launched glass partitions and complete interior execution services.",
  },
  {
    year: "2017",
    title: "500+ Projects",
    description:
      "Crossed 500 completed projects across Gujarat with a growing team of skilled professionals.",
  },
  {
    year: "Today",
    title: "Industry Leader",
    description:
      "Serving Ahmedabad, Surat, Vadodara, and Gandhinagar with end-to-end architectural aluminium solutions.",
  },
];

export type TeamMember = {
  name: string;
  role: string;
  bio: string;
};

export const TEAM: TeamMember[] = [
  {
    name: "Bharat Mistry",
    role: "Founder & Owner",
    bio: "Bharat Mistry founded Shree Chamunda Aluminium with a clear commitment to craftsmanship, honest service, and long-term quality. He personally guides project standards from consultation to final installation, ensuring every space reflects precision, durability, and thoughtful design.",
  },
];

export const VALUES_CONTENT = {
  eyebrow: "Our Values",
  title: "Principles That Guide Every Project",
  description:
    "Our values are not words on a wall — they are the standards we hold ourselves to on every site, every day.",
} as const;

export const TIMELINE_CONTENT = {
  eyebrow: "Our Journey",
  title: "A Decade of Growth & Craftsmanship",
  description:
    "From a single workshop to a statewide reputation — our timeline reflects relentless dedication to quality.",
} as const;

export const TEAM_CONTENT = {
  eyebrow: "Our Leadership",
  title: "Meet the Founder",
  description:
    "Our company is led by Founder & Owner Bharat Mistry, whose hands-on leadership drives our quality, reliability, and client-first approach.",
} as const;

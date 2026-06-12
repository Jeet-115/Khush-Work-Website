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
  image: "/images/about/company-story.svg",
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
    year: "2014",
    title: "The Beginning",
    description:
      "Founded in Rajkot with a focus on precision aluminium window fabrication for local residences.",
  },
  {
    year: "2017",
    title: "Commercial Expansion",
    description:
      "Expanded into commercial facades, sliding systems, and structural glazing for office towers.",
  },
  {
    year: "2020",
    title: "Interior Solutions",
    description:
      "Launched glass partitions, false ceiling, and complete interior execution services.",
  },
  {
    year: "2023",
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
  image: string;
};

export const TEAM: TeamMember[] = [
  {
    name: "Rajesh Chamunda",
    role: "Founder & Managing Director",
    bio: "Two decades of fabrication expertise driving quality and innovation across every project.",
    image: "/images/about/team-1.svg",
  },
  {
    name: "Amit Patel",
    role: "Head of Operations",
    bio: "Ensures seamless project delivery from measurement to installation with meticulous planning.",
    image: "/images/about/team-2.svg",
  },
  {
    name: "Priya Shah",
    role: "Design Consultant",
    bio: "Translates architectural visions into practical, beautiful aluminium and glass systems.",
    image: "/images/about/team-3.svg",
  },
  {
    name: "Vikram Mehta",
    role: "Installation Lead",
    bio: "Leads our expert installation crews with a focus on precision fitting and site safety.",
    image: "/images/about/team-4.svg",
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
  eyebrow: "Our Team",
  title: "The People Behind the Precision",
  description:
    "A dedicated team of fabricators, designers, and installers committed to architectural excellence.",
} as const;

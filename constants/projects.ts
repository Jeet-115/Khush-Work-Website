import type { Project, ProjectSlug } from "@/types/projects";

function galleryFor(slug: ProjectSlug, name: string) {
  return [1, 2, 3, 4, 5].map((n) => ({
    src: `/images/projects/${slug}/gallery-${n}.svg`,
    alt: `${name} project photo ${n}`,
  }));
}

export const PROJECTS_CONTENT = {
  eyebrow: "Featured Work",
  title: "Projects That Define Spaces",
  description:
    "A selection of residential and commercial installations showcasing our architectural aluminium expertise.",
} as const;

export const PROJECTS: Project[] = [
  {
    slug: "skyline-residence",
    name: "Skyline Residence",
    category: "Residential",
    location: "Rajkot, Gujarat",
    shortDescription:
      "Floor-to-ceiling aluminium windows and sliding systems for a luxury penthouse with panoramic city views.",
    metaDescription:
      "Skyline Residence — premium aluminium windows and sliding doors installation in Rajkot by Shree Chamunda Aluminium. Luxury residential facade project.",
    keywords: [
      "luxury residence Rajkot",
      "aluminium windows residential",
      "penthouse glazing Gujarat",
    ],
    coverImage: "/images/projects/project-1.svg",
    description: [
      "Skyline Residence demanded uninterrupted views without compromising thermal performance. We engineered a complete window and sliding door package using slim-profile aluminium systems with double-glazed units.",
      "The project spanned three floors of a premium tower, requiring precise coordination with the interior fit-out team. Custom colour-matched powder coating was applied to complement the building's contemporary stone facade.",
    ],
    gallery: galleryFor("skyline-residence", "Skyline Residence"),
    servicesUsed: [
      { slug: "aluminium-windows", title: "Aluminium Windows" },
      { slug: "sliding-doors", title: "Sliding Doors" },
      { slug: "structural-glazing", title: "Structural Glazing" },
    ],
    completion: {
      completedDate: "March 2025",
      duration: "6 weeks",
      scope: "Full facade window and sliding door installation",
      area: "4,200 sq ft glazing",
      client: "Private Residence",
    },
    featured: true,
  },
  {
    slug: "meridian-tower",
    name: "Meridian Corporate Tower",
    category: "Commercial",
    location: "Ahmedabad, Gujarat",
    shortDescription:
      "Curtain wall glazing and ACP cladding for a 12-storey corporate headquarters.",
    metaDescription:
      "Meridian Corporate Tower commercial glazing project in Ahmedabad. Curtain wall, ACP cladding, and structural glazing by Shree Chamunda Aluminium.",
    keywords: [
      "commercial glazing Ahmedabad",
      "curtain wall Gujarat",
      "corporate facade ACP",
    ],
    coverImage: "/images/projects/project-2.svg",
    description: [
      "Meridian Corporate Tower required a striking glass facade that communicates corporate prestige while meeting stringent energy codes. Our team delivered a unitised curtain wall system with integrated ACP spandrel panels.",
      "The installation was phased across 12 floors with night-shift work to minimise disruption to adjacent tenants. All glazing was tested for wind load compliance before panel installation began.",
    ],
    gallery: galleryFor("meridian-tower", "Meridian Corporate Tower"),
    servicesUsed: [
      { slug: "structural-glazing", title: "Structural Glazing" },
      { slug: "acp-cladding", title: "ACP Cladding" },
      { slug: "aluminium-windows", title: "Aluminium Windows" },
    ],
    completion: {
      completedDate: "November 2024",
      duration: "14 weeks",
      scope: "Curtain wall and ACP facade",
      area: "18,000 sq ft facade",
      client: "Meridian Group",
    },
    featured: true,
  },
  {
    slug: "villa-serene",
    name: "Villa Serene",
    category: "Residential",
    location: "Surat, Gujarat",
    shortDescription:
      "Bespoke sliding door systems connecting living spaces to landscaped gardens and pool deck.",
    metaDescription:
      "Villa Serene — luxury sliding door and aluminium window installation in Surat. Indoor-outdoor living by Shree Chamunda Aluminium.",
    keywords: [
      "villa sliding doors Surat",
      "luxury home aluminium",
      "residential glazing Gujarat",
    ],
    coverImage: "/images/projects/project-3.svg",
    description: [
      "Villa Serene is a ground-floor luxury home designed around indoor-outdoor living. We installed multi-track sliding door systems opening onto the garden, pool, and entertainment terrace.",
      "Lift-and-slide hardware supports oversized glass panels while maintaining smooth, effortless operation. All systems feature marine-grade finishes suitable for pool-adjacent environments.",
    ],
    gallery: galleryFor("villa-serene", "Villa Serene"),
    servicesUsed: [
      { slug: "sliding-doors", title: "Sliding Doors" },
      { slug: "aluminium-windows", title: "Aluminium Windows" },
      { slug: "interior-work", title: "Interior Work" },
    ],
    completion: {
      completedDate: "August 2024",
      duration: "5 weeks",
      scope: "Sliding doors and window package",
      area: "2,800 sq ft openings",
      client: "Private Villa Owner",
    },
  },
  {
    slug: "horizon-mall",
    name: "Horizon Mall Facade",
    category: "Structural Glazing",
    location: "Vadodara, Gujarat",
    shortDescription:
      "Landmark retail facade with frameless structural glazing and integrated signage zones.",
    metaDescription:
      "Horizon Mall structural glazing facade in Vadodara. Frameless glass architecture and ACP cladding by Shree Chamunda Aluminium.",
    keywords: [
      "mall facade Vadodara",
      "structural glazing retail",
      "commercial glass facade",
    ],
    coverImage: "/images/projects/project-4.svg",
    description: [
      "Horizon Mall's entrance demanded a dramatic glass statement to attract footfall. We designed and installed a double-height structural glazing canopy with point-fixed glass and integrated LED signage channels.",
      "The facade combines frameless glazing with ACP panel accents, creating visual depth while maintaining weather protection at the main entrance and side elevations.",
    ],
    gallery: galleryFor("horizon-mall", "Horizon Mall Facade"),
    servicesUsed: [
      { slug: "structural-glazing", title: "Structural Glazing" },
      { slug: "acp-cladding", title: "ACP Cladding" },
      { slug: "glass-partitions", title: "Glass Partitions" },
    ],
    completion: {
      completedDate: "January 2025",
      duration: "10 weeks",
      scope: "Entrance canopy and elevation glazing",
      area: "6,500 sq ft glazed area",
      client: "Horizon Retail Developers",
    },
    featured: true,
  },
  {
    slug: "azure-office",
    name: "Azure Office Park",
    category: "Office Partitions",
    location: "Gandhinagar, Gujarat",
    shortDescription:
      "Full-floor office fit-out with glass partitions, false ceiling, and aluminium door systems.",
    metaDescription:
      "Azure Office Park interior fit-out in Gandhinagar. Glass partitions, false ceiling, and office systems by Shree Chamunda Aluminium.",
    keywords: [
      "office fit out Gandhinagar",
      "glass partitions office",
      "commercial interior Gujarat",
    ],
    coverImage: "/images/projects/project-5.svg",
    description: [
      "Azure Office Park required a turnkey interior solution for a 8,000 sq ft corporate floor plate. We delivered demountable glass partitions, aluminium-framed meeting rooms, and integrated false ceiling with lighting.",
      "Acoustic-rated glass was specified for executive cabins and boardrooms. The project was completed over a single weekend to allow the client to occupy on schedule.",
    ],
    gallery: galleryFor("azure-office", "Azure Office Park"),
    servicesUsed: [
      { slug: "office-partitions", title: "Office Partitions" },
      { slug: "glass-partitions", title: "Glass Partitions" },
      { slug: "false-ceiling", title: "False Ceiling" },
      { slug: "interior-work", title: "Interior Work" },
    ],
    completion: {
      completedDate: "June 2024",
      duration: "4 weeks",
      scope: "Complete office interior fit-out",
      area: "8,000 sq ft",
      client: "Azure Technologies",
    },
  },
  {
    slug: "riverside-penthouse",
    name: "Riverside Penthouse",
    category: "Residential",
    location: "Ahmedabad, Gujarat",
    shortDescription:
      "Wraparound terrace glazing with frameless glass balustrades and slim aluminium windows.",
    metaDescription:
      "Riverside Penthouse terrace glazing in Ahmedabad. Frameless glass balustrades and premium windows by Shree Chamunda Aluminium.",
    keywords: [
      "penthouse glazing Ahmedabad",
      "terrace glass balustrade",
      "luxury apartment windows",
    ],
    coverImage: "/images/projects/project-1.svg",
    description: [
      "This riverside penthouse features a wraparound terrace with unobstructed views of the Sabarmati. We installed frameless glass balustrades and floor-to-ceiling windows along the entire perimeter.",
      "Special attention was given to wind load calculations and drainage detailing to ensure long-term performance during monsoon seasons.",
    ],
    gallery: galleryFor("riverside-penthouse", "Riverside Penthouse"),
    servicesUsed: [
      { slug: "structural-glazing", title: "Structural Glazing" },
      { slug: "aluminium-windows", title: "Aluminium Windows" },
      { slug: "sliding-doors", title: "Sliding Doors" },
    ],
    completion: {
      completedDate: "October 2024",
      duration: "7 weeks",
      scope: "Terrace glazing and window replacement",
      area: "3,100 sq ft",
      client: "Private Residence",
    },
  },
  {
    slug: "techpark-atrium",
    name: "TechPark Atrium",
    category: "Commercial",
    location: "Rajkot, Gujarat",
    shortDescription:
      "Double-height atrium skylight and glass partition system for a technology campus.",
    metaDescription:
      "TechPark Atrium skylight and glass partition project in Rajkot. Commercial glazing and interior systems by Shree Chamunda Aluminium.",
    keywords: [
      "atrium skylight Rajkot",
      "tech campus glazing",
      "commercial glass partitions",
    ],
    coverImage: "/images/projects/project-2.svg",
    description: [
      "TechPark Atrium connects three office wings through a shared double-height space. We engineered a structural glass skylight and surrounding glass partition walls that flood the atrium with natural light.",
      "The skylight incorporates automated ventilation panels and integrated shading solutions to manage heat gain throughout the day.",
    ],
    gallery: galleryFor("techpark-atrium", "TechPark Atrium"),
    servicesUsed: [
      { slug: "structural-glazing", title: "Structural Glazing" },
      { slug: "glass-partitions", title: "Glass Partitions" },
      { slug: "false-ceiling", title: "False Ceiling" },
    ],
    completion: {
      completedDate: "December 2024",
      duration: "9 weeks",
      scope: "Atrium skylight and partition walls",
      area: "5,400 sq ft glazed",
      client: "TechPark Industries",
    },
  },
];

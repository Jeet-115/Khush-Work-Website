import type { Service, ServiceSlug } from "@/types/services";

function galleryFor(slug: ServiceSlug, title: string) {
  return [1, 2, 3, 4].map((n) => ({
    src: `/images/services/${slug}/gallery-${n}.svg`,
    alt: `${title} installation example ${n}`,
  }));
}

export const SERVICES: Service[] = [
  {
    slug: "aluminium-windows",
    title: "Aluminium Windows",
    shortDescription:
      "Slim-profile, thermally efficient windows designed for panoramic views and lasting performance.",
    metaDescription:
      "Premium aluminium windows in Vadodara by Shree Chamunda Aluminium. Slim profiles, thermal efficiency, custom sizes, and expert installation for homes and commercial buildings.",
    keywords: [
      "aluminium windows vadodara",
      "aluminium windows",
      "aluminium window manufacturer vadodara",
      "thermal break windows Gujarat",
    ],
    hero: {
      title: "Aluminium Windows",
      subtitle:
        "Engineered for clarity, comfort, and architectural elegance in every frame.",
      image: "/images/services/aluminium-windows/hero.svg",
      imageAlt: "Premium aluminium window installation on modern facade",
    },
    overview: {
      title: "Windows That Define Modern Architecture",
      paragraphs: [
        "Our aluminium window systems combine slim sightlines with exceptional thermal and acoustic performance. Whether for a luxury residence or a commercial tower, we fabricate windows that maximise natural light while maintaining structural integrity.",
        "We offer casement, sliding, fixed, and combination systems using premium profiles and toughened glass. Every unit is custom-measured, precision-fabricated, and professionally installed by our trained teams.",
      ],
    },
    benefits: [
      {
        title: "Thermal Efficiency",
        description:
          "Thermal break profiles reduce heat transfer, lowering energy costs year-round.",
      },
      {
        title: "Slim Sightlines",
        description:
          "Minimal frame widths maximise glass area for uninterrupted views.",
      },
      {
        title: "Weather Resistance",
        description:
          "Multi-point locking and EPDM gaskets ensure protection against monsoon and dust.",
      },
      {
        title: "Low Maintenance",
        description:
          "Powder-coated finishes resist corrosion and require minimal upkeep.",
      },
    ],
    features: [
      {
        title: "Custom Sizing",
        description:
          "Tailored dimensions for any opening, including large spans.",
      },
      {
        title: "Premium Hardware",
        description:
          "Imported hinges, handles, and multi-point locking systems.",
      },
      {
        title: "Glass Options",
        description:
          "Single, double, laminated, and tinted glass configurations.",
      },
      {
        title: "Colour Finishes",
        description: "Wide range of powder coat and anodized finish options.",
      },
      {
        title: "Mosquito Mesh",
        description: "Integrated mesh systems without compromising aesthetics.",
      },
      {
        title: "Warranty Support",
        description:
          "Comprehensive warranty with responsive after-sales service.",
      },
    ],
    gallery: galleryFor("aluminium-windows", "Aluminium Windows"),
    faq: [
      {
        question: "What types of aluminium windows do you offer?",
        answer:
          "We offer casement, sliding, fixed, top-hung, and combination window systems with custom sizing and glass options.",
      },
      {
        question: "Are your windows suitable for coastal areas?",
        answer:
          "Yes. We use corrosion-resistant profiles and premium powder coating suitable for coastal and high-humidity environments.",
      },
      {
        question: "What is the typical lead time?",
        answer:
          "Standard projects are completed within 2–4 weeks after final measurement confirmation.",
      },
    ],
  },
  {
    slug: "sliding-doors",
    title: "Sliding Doors",
    shortDescription:
      "Seamless indoor-outdoor transitions with smooth-gliding, weather-sealed sliding systems.",
    metaDescription:
      "Premium aluminium sliding doors in Vadodara, Gujarat. Smooth-gliding systems for patios, balconies, and commercial entrances with weather sealing and slim profiles.",
    keywords: [
      "sliding doors vadodara",
      "sliding doors",
      "aluminium sliding doors vadodara",
      "patio sliding doors Gujarat",
    ],
    hero: {
      title: "Sliding Doors",
      subtitle:
        "Effortless movement between spaces with engineering-grade smooth glide performance.",
      image: "/images/services/sliding-doors/hero.svg",
      imageAlt: "Aluminium sliding door system opening to outdoor terrace",
    },
    overview: {
      title: "Seamless Indoor-Outdoor Living",
      paragraphs: [
        "Our sliding door systems create fluid transitions between interiors and exteriors. Engineered with precision rollers and robust tracks, they deliver whisper-quiet operation even on large panel spans.",
        "Ideal for balconies, patios, pool areas, and commercial storefronts, our systems are built to withstand heavy use while maintaining weather-tight seals.",
      ],
    },
    benefits: [
      {
        title: "Smooth Operation",
        description:
          "Premium rollers ensure effortless gliding on panels up to 3 metres.",
      },
      {
        title: "Space Saving",
        description: "No swing arc required — maximise usable floor area.",
      },
      {
        title: "Large Openings",
        description: "Multi-track configurations for expansive glass walls.",
      },
      {
        title: "Security",
        description: "Reinforced profiles with multi-point locking options.",
      },
    ],
    features: [
      {
        title: "2-Track & 3-Track",
        description: "Flexible configurations for varying opening widths.",
      },
      {
        title: "Lift & Slide",
        description: "Heavy-duty systems for oversized glass panels.",
      },
      {
        title: "Soft-Close Option",
        description:
          "Controlled closing mechanism for premium user experience.",
      },
      {
        title: "Flush Threshold",
        description: "Barrier-free designs for accessibility and aesthetics.",
      },
      {
        title: "Toughened Glass",
        description: "Safety glass rated for impact and wind load.",
      },
      {
        title: "Custom Colours",
        description:
          "Match any architectural palette with powder coat finishes.",
      },
    ],
    gallery: galleryFor("sliding-doors", "Sliding Doors"),
    faq: [
      {
        question: "What is the maximum panel size?",
        answer:
          "We fabricate panels up to 3 metres in height and 1.5 metres in width depending on profile series and wind load requirements.",
      },
      {
        question: "Can sliding doors be automated?",
        answer:
          "Yes. Motorised sliding systems are available for commercial and high-end residential applications.",
      },
      {
        question: "How do you ensure weather sealing?",
        answer:
          "We use brush seals, EPDM gaskets, and drainage channels engineered for Gujarat's monsoon conditions.",
      },
    ],
  },
  {
    slug: "glass-partitions",
    title: "Glass Partitions",
    shortDescription:
      "Elegant glass divisions that maximise light while defining sophisticated workspaces.",
    metaDescription:
      "Glass partition systems for offices and homes in Vadodara, Gujarat. Frameless and framed solutions with acoustic options, premium hardware, and professional installation.",
    keywords: [
      "glass partitions vadodara",
      "glass partitions",
      "office glass walls vadodara",
      "frameless glass partitions Gujarat",
    ],
    hero: {
      title: "Glass Partitions",
      subtitle:
        "Define spaces without sacrificing light, openness, or modern aesthetics.",
      image: "/images/services/glass-partitions/hero.svg",
      imageAlt: "Frameless glass partition in modern office interior",
    },
    overview: {
      title: "Transparency With Purpose",
      paragraphs: [
        "Glass partitions bring structure and privacy to open-plan environments without blocking natural light. Our systems are ideal for corporate offices, meeting rooms, showrooms, and luxury residences.",
        "From frameless full-height glass to aluminium-framed modules, we deliver solutions that align with your interior design vision and acoustic requirements.",
      ],
    },
    benefits: [
      {
        title: "Natural Light",
        description:
          "Maintain brightness and openness throughout the workspace.",
      },
      {
        title: "Acoustic Control",
        description:
          "Laminated and double-glazed options reduce sound transfer.",
      },
      {
        title: "Flexible Layout",
        description: "Modular systems adapt as your space requirements evolve.",
      },
      {
        title: "Premium Aesthetics",
        description:
          "Clean lines and minimal hardware for executive environments.",
      },
    ],
    features: [
      {
        title: "Frameless Systems",
        description: "Floor-to-ceiling glass with minimal visible hardware.",
      },
      {
        title: "Framed Modules",
        description: "Aluminium-framed panels with door integrations.",
      },
      {
        title: "Frosted & Tinted",
        description: "Privacy films and etched glass for meeting rooms.",
      },
      {
        title: "Sliding Partitions",
        description: "Movable glass walls for flexible space configuration.",
      },
      {
        title: "Door Integration",
        description: "Hinged and sliding glass doors within partition systems.",
      },
      {
        title: "Branding Options",
        description: "Logo etching and custom film applications available.",
      },
    ],
    gallery: galleryFor("glass-partitions", "Glass Partitions"),
    faq: [
      {
        question: "Are glass partitions safe for offices?",
        answer:
          "Yes. We use toughened or laminated safety glass that meets building safety standards.",
      },
      {
        question: "Can partitions include doors?",
        answer:
          "Absolutely. We integrate hinged, sliding, and pivot glass doors within partition systems.",
      },
      {
        question: "Do you offer acoustic glass?",
        answer:
          "Yes. Laminated acoustic glass options are available for conference rooms and private offices.",
      },
    ],
  },
  {
    slug: "acp-cladding",
    title: "ACP Cladding",
    shortDescription:
      "Durable aluminium composite panel facades with striking finishes and weather resistance.",
    metaDescription:
      "ACP cladding and aluminium composite panel facades in Vadodara, Gujarat. Weather-resistant exterior cladding with premium finishes for commercial and residential buildings.",
    keywords: [
      "ACP cladding vadodara",
      "ACP cladding",
      "aluminium composite panels vadodara",
      "building facade cladding Gujarat",
    ],
    hero: {
      title: "ACP Cladding",
      subtitle:
        "Transform building exteriors with durable, lightweight, and visually striking panel systems.",
      image: "/images/services/acp-cladding/hero.svg",
      imageAlt: "ACP cladding facade on commercial building",
    },
    overview: {
      title: "Facades That Make a Statement",
      paragraphs: [
        "Aluminium Composite Panel cladding offers architects and developers a versatile solution for modern building envelopes. Lightweight yet rigid, ACP panels deliver bold aesthetics with excellent weather resistance.",
        "We handle design consultation, panel selection, fabrication, and installation for commercial towers, retail facades, hospitals, and premium residential projects.",
      ],
    },
    benefits: [
      {
        title: "Lightweight",
        description:
          "Reduces structural load compared to traditional cladding materials.",
      },
      {
        title: "Weather Proof",
        description:
          "UV-resistant coatings withstand harsh sun and monsoon conditions.",
      },
      {
        title: "Design Freedom",
        description:
          "Wide colour range including metallics, wood grains, and solids.",
      },
      {
        title: "Low Maintenance",
        description: "Easy to clean with long-lasting surface finishes.",
      },
    ],
    features: [
      {
        title: "Fire-Rated Options",
        description:
          "FR-grade panels available for code-compliant applications.",
      },
      {
        title: "Cassette Systems",
        description: "Concealed fixing for seamless facade appearance.",
      },
      {
        title: "Curved Panels",
        description: "Custom bending for curved architectural elements.",
      },
      {
        title: "Ventilated Facades",
        description: "Rainscreen systems for improved thermal performance.",
      },
      {
        title: "Signage Integration",
        description: "Combine branding elements within the cladding design.",
      },
      {
        title: "Structural Framework",
        description: "Complete sub-frame design and installation included.",
      },
    ],
    gallery: galleryFor("acp-cladding", "ACP Cladding"),
    faq: [
      {
        question: "What ACP panel brands do you use?",
        answer:
          "We work with certified ACP manufacturers offering fire-rated and standard grade panels.",
      },
      {
        question: "How long does ACP cladding last?",
        answer:
          "Quality ACP installations typically last 15–25 years with proper maintenance and premium coatings.",
      },
      {
        question: "Can ACP be installed on existing buildings?",
        answer:
          "Yes. Retrofit cladding is one of our specialties, subject to structural assessment.",
      },
    ],
  },
  {
    slug: "structural-glazing",
    title: "Structural Glazing",
    shortDescription:
      "Frameless glass architecture for landmark commercial and residential facades.",
    metaDescription:
      "Structural glazing systems in Gujarat. Frameless glass facades, curtain walls, and spider glazing for commercial landmarks and premium residences.",
    keywords: [
      "structural glazing",
      "curtain wall glazing",
      "spider glazing Gujarat",
      "frameless glass facade",
    ],
    hero: {
      title: "Structural Glazing",
      subtitle:
        "Frameless glass architecture that turns buildings into landmarks.",
      image: "/images/services/structural-glazing/hero.svg",
      imageAlt: "Structural glazing facade on commercial tower",
    },
    overview: {
      title: "Engineering Glass at Scale",
      paragraphs: [
        "Structural glazing eliminates visible framing to create seamless glass facades. Our systems use structural silicone glazing and point-fixed spider fittings to achieve stunning transparency on commercial and high-end residential projects.",
        "From curtain walls to skylights, we engineer solutions that meet wind load, thermal, and safety requirements while delivering breathtaking visual impact.",
      ],
    },
    benefits: [
      {
        title: "Uninterrupted Views",
        description:
          "Minimal structural interruption for maximum transparency.",
      },
      {
        title: "Structural Integrity",
        description: "Engineered to meet wind load and seismic requirements.",
      },
      {
        title: "Energy Performance",
        description:
          "Low-E and double-glazed units improve thermal efficiency.",
      },
      {
        title: "Landmark Aesthetics",
        description:
          "Elevate building identity with premium glass architecture.",
      },
    ],
    features: [
      {
        title: "Curtain Wall Systems",
        description: "Unitised and stick-built curtain wall configurations.",
      },
      {
        title: "Spider Glazing",
        description: "Point-fixed glass for entrance canopies and facades.",
      },
      {
        title: "SSG Glazing",
        description:
          "Structural silicone glazed systems for seamless appearance.",
      },
      {
        title: "Skylight Systems",
        description: "Overhead glazing for atriums and commercial spaces.",
      },
      {
        title: "Wind Load Engineering",
        description: "Calculations and testing for high-rise applications.",
      },
      {
        title: "Maintenance Access",
        description: "Design considerations for long-term facade maintenance.",
      },
    ],
    gallery: galleryFor("structural-glazing", "Structural Glazing"),
    faq: [
      {
        question: "Is structural glazing suitable for high-rises?",
        answer:
          "Yes. We engineer systems with appropriate glass thickness and fixing methods for high-rise wind loads.",
      },
      {
        question: "What safety standards do you follow?",
        answer:
          "We use toughened and laminated safety glass meeting applicable Indian building standards.",
      },
      {
        question: "Do you handle design and engineering?",
        answer:
          "Yes. Our team provides design assistance, shop drawings, and structural calculations.",
      },
    ],
  },
  {
    slug: "office-partitions",
    title: "Office Partitions",
    shortDescription:
      "Modular office systems that balance privacy, acoustics, and contemporary aesthetics.",
    metaDescription:
      "Office partition systems in Gujarat. Modular aluminium and glass partitions for corporate workspaces with acoustic panels and flexible configurations.",
    keywords: [
      "office partitions",
      "modular office walls Gujarat",
      "workplace partitions",
      "corporate interior partitions",
    ],
    hero: {
      title: "Office Partitions",
      subtitle:
        "Create productive workspaces with modular systems designed for modern businesses.",
      image: "/images/services/office-partitions/hero.svg",
      imageAlt: "Modular office partition system in corporate workspace",
    },
    overview: {
      title: "Workspaces Built for Productivity",
      paragraphs: [
        "Our office partition systems help businesses create functional, aesthetically refined workspaces. Modular aluminium and glass partitions allow rapid deployment with minimal disruption to ongoing operations.",
        "Whether fitting out a new office or reconfiguring an existing floor plate, we deliver solutions that balance collaboration zones with private work areas.",
      ],
    },
    benefits: [
      {
        title: "Quick Installation",
        description:
          "Modular systems reduce on-site construction time significantly.",
      },
      {
        title: "Reconfigurable",
        description: "Easily adapt layouts as teams grow or reorganise.",
      },
      {
        title: "Cable Management",
        description: "Integrated channels for power and data connectivity.",
      },
      {
        title: "Professional Finish",
        description:
          "Executive-grade materials for client-facing environments.",
      },
    ],
    features: [
      {
        title: "Single & Double Glazed",
        description: "Glass modules with varying acoustic performance levels.",
      },
      {
        title: "Solid Panels",
        description: "Fabric-wrapped and laminate panels for privacy zones.",
      },
      {
        title: "Demountable Systems",
        description: "Fully relocatable partitions for leased office spaces.",
      },
      {
        title: "Door Modules",
        description: "Matched doors with access control compatibility.",
      },
      {
        title: "Acoustic Rating",
        description: "Solutions rated for meeting room confidentiality.",
      },
      {
        title: "Brand Integration",
        description: "Corporate colours and logo panels available.",
      },
    ],
    gallery: galleryFor("office-partitions", "Office Partitions"),
    faq: [
      {
        question: "Can partitions be relocated?",
        answer:
          "Yes. Our demountable systems are designed for relocation when you move offices.",
      },
      {
        question: "What acoustic performance is available?",
        answer:
          "We offer solutions from basic privacy to high-acoustic meeting room specifications.",
      },
      {
        question: "How quickly can you fit out an office?",
        answer:
          "Timeline depends on area. A typical 2,000 sq ft fit-out takes 2–3 weeks after design approval.",
      },
    ],
  },
  {
    slug: "interior-work",
    title: "Interior Work",
    shortDescription:
      "End-to-end interior execution — from concept to completion with meticulous detail.",
    metaDescription:
      "Complete interior work services in Gujarat. End-to-end interior design and execution including aluminium, glass, and custom fabrication.",
    keywords: [
      "interior work Gujarat",
      "interior fit out",
      "commercial interior execution",
      "residential interior solutions",
    ],
    hero: {
      title: "Interior Work",
      subtitle:
        "Complete interior solutions — from concept to handover with a single trusted partner.",
      image: "/images/services/interior-work/hero.svg",
      imageAlt: "Complete interior fit-out with aluminium and glass elements",
    },
    overview: {
      title: "Interiors Executed to Perfection",
      paragraphs: [
        "Our interior work service brings together aluminium systems, glass partitions, and custom fabrication under one roof. This integrated approach ensures consistency, accountability, and a seamless client experience.",
        "We partner with architects, interior designers, and direct clients to deliver turnkey interiors for offices, retail spaces, showrooms, and premium residences.",
      ],
    },
    benefits: [
      {
        title: "Single Point of Contact",
        description:
          "One team manages all trades for simplified project delivery.",
      },
      {
        title: "Design Coordination",
        description: "We align with your architect's vision at every stage.",
      },
      {
        title: "Quality Control",
        description:
          "Unified standards across all interior elements and finishes.",
      },
      {
        title: "On-Time Handover",
        description:
          "Integrated scheduling prevents trade coordination delays.",
      },
    ],
    features: [
      {
        title: "Office Fit-Outs",
        description: "Complete corporate interior execution packages.",
      },
      {
        title: "Retail Interiors",
        description: "Showrooms and retail spaces with premium finishes.",
      },
      {
        title: "Residential Interiors",
        description:
          "Windows, doors, and partition packages for homes.",
      },
      {
        title: "Custom Fabrication",
        description: "Bespoke aluminium and glass elements for unique designs.",
      },
      {
        title: "Project Management",
        description: "Dedicated PM with regular progress reporting.",
      },
      {
        title: "Snag-Free Handover",
        description: "Thorough quality checks before final delivery.",
      },
    ],
    gallery: galleryFor("interior-work", "Interior Work"),
    faq: [
      {
        question: "Do you handle complete interior projects?",
        answer:
          "Yes. We offer turnkey interior execution including aluminium, glass, and related works.",
      },
      {
        question: "Can you work with our interior designer?",
        answer:
          "Absolutely. We regularly collaborate with architects and designers on detailed execution.",
      },
      {
        question: "What project sizes do you handle?",
        answer:
          "From single-room upgrades to full-floor commercial fit-outs and villa interiors.",
      },
    ],
  },
];

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "../public/work/Projects");

const PROJECT_META = {
  "axis bank": {
    slug: "axis-bank",
    name: "Axis Bank",
    category: "Commercial",
    location: "Vadodara, Gujarat",
    shortDescription:
      "Complete aluminium glazing, facade, and interior aluminium work for a premium bank branch.",
    metaDescription:
      "Axis Bank commercial glazing project in Vadodara by Shree Chamunda Aluminium. Aluminium windows, facade systems, and professional installation.",
    keywords: ["axis bank vadodara", "commercial bank glazing", "aluminium facade gujarat"],
    servicesUsed: [
      { slug: "structural-glazing", title: "Structural Glazing" },
      { slug: "aluminium-windows", title: "Aluminium Windows" },
      { slug: "glass-partitions", title: "Glass Partitions" },
    ],
    description: [
      "A full-scope commercial fit-out for Axis Bank featuring precision-engineered aluminium window systems, glazed partitions, and facade elements tailored to brand standards.",
      "Our team managed measurement, fabrication, and installation with minimal disruption to banking operations, delivering a polished, durable finish built for high footfall.",
    ],
    completion: {
      completedDate: "January 2025",
      duration: "8 weeks",
      scope: "Aluminium glazing and interior systems",
      area: "Commercial branch",
      client: "Axis Bank",
    },
    featured: true,
  },
  factory: {
    slug: "factory",
    name: "Industrial Factory",
    category: "Industrial",
    location: "Gujarat",
    shortDescription:
      "Large-scale aluminium window, door, and cladding solutions for an industrial manufacturing facility.",
    metaDescription:
      "Industrial factory aluminium and glazing project by Shree Chamunda Aluminium. Windows, doors, and facade systems for manufacturing facilities in Gujarat.",
    keywords: ["factory aluminium windows", "industrial glazing gujarat", "manufacturing facility facade"],
    servicesUsed: [
      { slug: "aluminium-windows", title: "Aluminium Windows" },
      { slug: "sliding-doors", title: "Sliding Doors" },
      { slug: "acp-cladding", title: "ACP Cladding" },
    ],
    description: [
      "This industrial project required robust aluminium systems capable of withstanding daily operational demands while maximising natural light across production and office zones.",
      "We supplied and installed high-durability window and door packages with weather-sealed profiles suited to Gujarat's climate conditions.",
    ],
    completion: {
      completedDate: "August 2025",
      duration: "6 weeks",
      scope: "Windows, doors, and cladding",
      area: "Industrial facility",
      client: "Private Manufacturing Unit",
    },
    featured: true,
  },
  "GSFC UNI ACP WORK": {
    slug: "gsfc-uni-acp-work",
    name: "GSFC Uni ACP Work",
    category: "ACP Cladding",
    location: "Vadodara, Gujarat",
    shortDescription:
      "Premium ACP cladding and facade panel installation for GSFC Uni building.",
    metaDescription:
      "GSFC Uni ACP cladding project in Vadodara. Aluminium composite panel facade installation by Shree Chamunda Aluminium.",
    keywords: ["GSFC ACP cladding", "ACP facade vadodara", "aluminium composite panels gujarat"],
    servicesUsed: [
      { slug: "acp-cladding", title: "ACP Cladding" },
      { slug: "structural-glazing", title: "Structural Glazing" },
    ],
    description: [
      "A landmark ACP cladding assignment for GSFC Uni, transforming the building envelope with clean lines, uniform panel alignment, and a premium exterior finish.",
      "Our installation team executed precise sub-framing, panel fixing, and quality checks to ensure long-term weather resistance and visual consistency across all elevations.",
    ],
    completion: {
      completedDate: "December 2024",
      duration: "5 weeks",
      scope: "ACP facade cladding",
      area: "Institutional building",
      client: "GSFC Uni",
    },
    featured: true,
  },
  house: {
    slug: "house",
    name: "Residential Homes",
    category: "Residential",
    location: "Gujarat",
    shortDescription:
      "A portfolio of residential aluminium window, door, and glazing installations across multiple homes.",
    metaDescription:
      "Residential aluminium window and door projects across Gujarat by Shree Chamunda Aluminium. Premium home glazing solutions.",
    keywords: ["residential aluminium windows", "home glazing gujarat", "house windows vadodara"],
    servicesUsed: [
      { slug: "aluminium-windows", title: "Aluminium Windows" },
      { slug: "sliding-doors", title: "Sliding Doors" },
      { slug: "interior-work", title: "Interior Work" },
    ],
    description: [
      "Our residential portfolio spans multiple homes across Gujarat, each with custom-measured aluminium window and door systems designed for comfort, security, and modern aesthetics.",
      "From sliding systems opening to gardens and terraces to fixed glazing for stairwells and bedrooms, every installation reflects our commitment to craftsmanship and clean finishing.",
    ],
    completion: {
      completedDate: "Ongoing portfolio",
      duration: "Varies by home",
      scope: "Windows, doors, and glazing",
      area: "Multiple residences",
      client: "Private Homeowners",
    },
    featured: false,
  },
  "indian oil pump": {
    slug: "indian-oil-pump",
    name: "Indian Oil Pump",
    category: "Commercial",
    location: "Gujarat",
    shortDescription:
      "Aluminium and glazing work for an Indian Oil retail outlet with durable, low-maintenance finishes.",
    metaDescription:
      "Indian Oil pump station aluminium work in Gujarat by Shree Chamunda Aluminium. Commercial glazing and facade solutions.",
    keywords: ["indian oil pump glazing", "petrol pump aluminium work", "commercial outlet gujarat"],
    servicesUsed: [
      { slug: "aluminium-windows", title: "Aluminium Windows" },
      { slug: "acp-cladding", title: "ACP Cladding" },
    ],
    description: [
      "This Indian Oil outlet project required practical, hard-wearing aluminium systems for the canopy, office, and customer areas with finishes that withstand outdoor exposure.",
      "We delivered weather-resistant profiles and panels aligned with the operational needs of a high-traffic fuel retail environment.",
    ],
    completion: {
      completedDate: "March 2026",
      duration: "3 weeks",
      scope: "Outlet aluminium and cladding",
      area: "Fuel retail station",
      client: "Indian Oil",
    },
    featured: false,
  },
  "Maruti Public Charitable Trus": {
    slug: "maruti-public-charitable-trust",
    name: "Maruti Public Charitable Trust",
    category: "Institutional",
    location: "Gujarat",
    shortDescription:
      "Aluminium window and facade work for a charitable trust building with functional, long-lasting systems.",
    metaDescription:
      "Maruti Public Charitable Trust building aluminium work by Shree Chamunda Aluminium. Institutional glazing in Gujarat.",
    keywords: ["charitable trust building", "institutional glazing gujarat", "aluminium windows trust"],
    servicesUsed: [
      { slug: "aluminium-windows", title: "Aluminium Windows" },
      { slug: "glass-partitions", title: "Glass Partitions" },
    ],
    description: [
      "We completed aluminium window and glazing installations for the Maruti Public Charitable Trust facility, balancing durability with a welcoming, well-lit interior environment.",
      "The project was executed with careful scheduling to minimise disruption to the trust's daily activities.",
    ],
    completion: {
      completedDate: "May 2024",
      duration: "4 weeks",
      scope: "Windows and interior glazing",
      area: "Institutional building",
      client: "Maruti Public Charitable Trust",
    },
    featured: false,
  },
  residency: {
    slug: "residency",
    name: "Residency",
    category: "Residential",
    location: "Gujarat",
    shortDescription:
      "Premium aluminium window and door systems for a multi-unit residency development.",
    metaDescription:
      "Residency aluminium window project in Gujarat by Shree Chamunda Aluminium. Residential glazing for apartment and residency buildings.",
    keywords: ["residency windows gujarat", "apartment aluminium glazing", "residential facade"],
    servicesUsed: [
      { slug: "aluminium-windows", title: "Aluminium Windows" },
      { slug: "sliding-doors", title: "Sliding Doors" },
    ],
    description: [
      "This residency project called for consistent aluminium window packages across multiple units, ensuring uniform quality, smooth operation, and an elevated exterior appearance.",
      "Our team coordinated batch fabrication and phased installation to meet the project timeline efficiently.",
    ],
    completion: {
      completedDate: "2013–2014",
      duration: "5 weeks",
      scope: "Residency window package",
      area: "Multi-unit residence",
      client: "Private Developer",
    },
    featured: false,
  },
  "vip bags": {
    slug: "vip-bags",
    name: "VIP Bags",
    category: "Commercial",
    location: "Gujarat",
    shortDescription:
      "Retail storefront aluminium and glazing work for a VIP Bags showroom.",
    metaDescription:
      "VIP Bags showroom aluminium and glazing project by Shree Chamunda Aluminium. Commercial retail facade Gujarat.",
    keywords: ["VIP bags showroom", "retail glazing gujarat", "storefront aluminium"],
    servicesUsed: [
      { slug: "structural-glazing", title: "Structural Glazing" },
      { slug: "aluminium-windows", title: "Aluminium Windows" },
    ],
    description: [
      "The VIP Bags retail project focused on creating an inviting storefront with clear display glazing and durable aluminium framing suited to a busy commercial environment.",
      "We delivered a clean, brand-appropriate facade that highlights products while maintaining security and weather protection.",
    ],
    completion: {
      completedDate: "March 2026",
      duration: "2 weeks",
      scope: "Showroom glazing and facade",
      area: "Retail showroom",
      client: "VIP Bags",
    },
    featured: false,
  },
  "yusuf pathan home": {
    slug: "yusuf-pathan-home",
    name: "Yusuf Pathan Home",
    category: "Residential",
    location: "Gujarat",
    shortDescription:
      "Bespoke aluminium window and door installation for a premium private residence.",
    metaDescription:
      "Yusuf Pathan home aluminium windows and doors by Shree Chamunda Aluminium. Luxury residential glazing in Gujarat.",
    keywords: ["luxury home windows gujarat", "celebrity home glazing", "premium aluminium residence"],
    servicesUsed: [
      { slug: "aluminium-windows", title: "Aluminium Windows" },
      { slug: "sliding-doors", title: "Sliding Doors" },
      { slug: "structural-glazing", title: "Structural Glazing" },
    ],
    description: [
      "A premium residential assignment featuring custom aluminium window and door systems designed for large openings, natural light, and a refined architectural finish.",
      "Every detail — from hardware selection to final alignment — was executed to meet the elevated standards expected of a high-profile private home.",
    ],
    completion: {
      completedDate: "2012",
      duration: "4 weeks",
      scope: "Full home window and door package",
      area: "Private residence",
      client: "Private Residence",
    },
    featured: false,
  },
};

function publicPath(folder, file) {
  const segments = ["work", "Projects", folder, file].map((segment) =>
    encodeURIComponent(segment),
  );
  return `/${segments.join("/")}`;
}

function buildProjects() {
  const dirs = fs
    .readdirSync(root, { withFileTypes: true })
    .filter((d) => d.isDirectory());

  const projects = dirs.map((dir) => {
    const folder = dir.name;
    const meta = PROJECT_META[folder];

    if (!meta) {
      throw new Error(`Missing metadata for folder: ${folder}`);
    }

    const files = fs
      .readdirSync(path.join(root, folder))
      .filter((f) => /\.(jpe?g|png|webp)$/i.test(f))
      .sort();

    const gallery = files.map((file, index) => ({
      src: publicPath(folder, file),
      alt: `${meta.name} — site photo ${index + 1}`,
    }));

    return {
      slug: meta.slug,
      name: meta.name,
      category: meta.category,
      location: meta.location,
      shortDescription: meta.shortDescription,
      metaDescription: meta.metaDescription,
      keywords: meta.keywords,
      coverImage: gallery[0]?.src ?? "",
      description: meta.description,
      gallery,
      servicesUsed: meta.servicesUsed,
      completion: meta.completion,
      ...(meta.featured ? { featured: true } : {}),
    };
  });

  return projects.sort((a, b) => a.name.localeCompare(b.name));
}

const projects = buildProjects();
const slugs = projects.map((p) => p.slug);

const output = `/* eslint-disable */
// Auto-generated by scripts/generate-work-projects.mjs — do not edit manually.
// Re-run: node scripts/generate-work-projects.mjs

import type { Project, ProjectSlug } from "@/types/projects";

export const PROJECT_SLUGS = ${JSON.stringify(slugs, null, 2)} as const satisfies readonly ProjectSlug[];

export const PROJECTS: Project[] = ${JSON.stringify(projects, null, 2)};
`;

const outPath = path.join(__dirname, "../constants/work-projects.generated.ts");
fs.writeFileSync(outPath, output, "utf8");

console.log(`Generated ${projects.length} projects (${projects.reduce((n, p) => n + p.gallery.length, 0)} images) -> constants/work-projects.generated.ts`);

import { PROJECTS } from "@/constants/projects";
import { SEO_LOCATION } from "@/constants/location";
import { DEFAULT_OG_IMAGE } from "@/constants/seo";
import { SITE_NAME, SITE_URL } from "@/constants/site";
import type { Metadata } from "next";
import type { Project, ProjectSlug } from "@/types/projects";

export function getAllProjects(): Project[] {
  return PROJECTS;
}

export function getFeaturedProjects(): Project[] {
  return PROJECTS.filter((project) => project.featured);
}

export function getAllProjectSlugs(): ProjectSlug[] {
  return PROJECTS.map((project) => project.slug);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return PROJECTS.find((project) => project.slug === slug);
}

export function getProjectCardProps(project: Project) {
  return {
    title: project.name,
    category: project.category,
    location: project.location,
    image: project.coverImage,
    href: `/projects/${project.slug}`,
    featured: project.featured,
  };
}

export function createProjectMetadata(project: Project): Metadata {
  const path = `/projects/${project.slug}`;
  const url = `${SITE_URL}${path}`;
  const pageTitle = `${project.name} | ${SITE_NAME}`;

  return {
    title: project.name,
    description: project.metaDescription,
    keywords: [
      ...project.keywords,
      SITE_NAME,
      project.category,
      SEO_LOCATION.city,
    ],
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "article",
      locale: "en_IN",
      url,
      siteName: SITE_NAME,
      title: pageTitle,
      description: project.metaDescription,
      images: [
        {
          url: project.coverImage,
          alt: project.name,
        },
        {
          url: DEFAULT_OG_IMAGE.url,
          width: DEFAULT_OG_IMAGE.width,
          height: DEFAULT_OG_IMAGE.height,
          alt: DEFAULT_OG_IMAGE.alt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: project.metaDescription,
      images: [project.coverImage],
    },
  };
}

export function getProjectJsonLd(project: Project) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.name,
    description: project.metaDescription,
    url: `${SITE_URL}/projects/${project.slug}`,
    image: project.gallery.map((img) => `${SITE_URL}${img.src}`),
    locationCreated: {
      "@type": "Place",
      name: project.location,
    },
    creator: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
  };
}

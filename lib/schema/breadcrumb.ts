import { SITE_URL } from "@/constants/site";

export type BreadcrumbItem = {
  name: string;
  path?: string;
};

export function getBreadcrumbJsonLd(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      ...(item.path
        ? { item: `${SITE_URL}${item.path === "/" ? "" : item.path}` }
        : {}),
    })),
  };
}

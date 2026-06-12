import { PageHero } from "@/components/shared/page-hero";
import { ABOUT_PAGE_HERO } from "@/constants/about";

export function AboutPageHero() {
  return <PageHero {...ABOUT_PAGE_HERO} ariaLabel="About page hero" />;
}

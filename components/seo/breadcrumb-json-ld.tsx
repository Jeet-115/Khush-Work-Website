import { JsonLdScript } from "@/components/seo/json-ld-script";
import {
  getBreadcrumbJsonLd,
  type BreadcrumbItem,
} from "@/lib/schema/breadcrumb";

type BreadcrumbJsonLdProps = {
  items: BreadcrumbItem[];
};

export function BreadcrumbJsonLd({ items }: BreadcrumbJsonLdProps) {
  return <JsonLdScript data={getBreadcrumbJsonLd(items)} />;
}

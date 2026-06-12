import { JsonLdScript } from "@/components/seo/json-ld-script";
import { getFaqJsonLd, type FaqSchemaItem } from "@/lib/schema/faq";

type FaqJsonLdProps = {
  items: FaqSchemaItem[];
};

export function FaqJsonLd({ items }: FaqJsonLdProps) {
  return <JsonLdScript data={getFaqJsonLd(items)} />;
}

import { JsonLdScript } from "@/components/seo/json-ld-script";
import { getOrganizationGraphJsonLd } from "@/lib/schema/local-business";

export function JsonLd() {
  return <JsonLdScript data={getOrganizationGraphJsonLd()} />;
}

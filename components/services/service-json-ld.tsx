import { JsonLdScript } from "@/components/seo/json-ld-script";
import { getServiceJsonLd } from "@/lib/services";
import type { Service } from "@/types/services";

type ServiceJsonLdProps = {
  service: Service;
};

export function ServiceJsonLd({ service }: ServiceJsonLdProps) {
  return <JsonLdScript data={getServiceJsonLd(service)} />;
}

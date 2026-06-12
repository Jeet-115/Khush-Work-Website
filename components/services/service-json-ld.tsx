import { getServiceJsonLd } from "@/lib/services";
import type { Service } from "@/types/services";

type ServiceJsonLdProps = {
  service: Service;
};

export function ServiceJsonLd({ service }: ServiceJsonLdProps) {
  const schema = getServiceJsonLd(service);

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

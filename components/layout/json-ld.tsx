import { getLocalBusinessJsonLd } from "@/lib/schema/local-business";

export function JsonLd() {
  const schema = getLocalBusinessJsonLd();

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

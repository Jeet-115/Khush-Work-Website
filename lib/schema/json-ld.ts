export function serializeJsonLd(data: Record<string, unknown> | Record<string, unknown>[]) {
  return JSON.stringify(data);
}

import { SITE_URL } from "@/constants/site";

export function formatPhoneNumber(phone: string): string {
  const digits = phone.replace(/\D/g, "");

  if (digits.length === 10) {
    return `+91 ${digits.slice(0, 5)} ${digits.slice(5)}`;
  }

  return phone;
}

export function absoluteUrl(path: string): string {
  return new URL(path, SITE_URL).toString();
}

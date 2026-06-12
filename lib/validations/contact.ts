import { z } from "zod";

const PHONE_MIN_DIGITS = 10;
const PHONE_MAX_DIGITS = 15;

function isValidPhone(value: string) {
  const digits = value.replace(/\D/g, "");

  if (digits.length < PHONE_MIN_DIGITS || digits.length > PHONE_MAX_DIGITS) {
    return false;
  }

  if (digits.startsWith("91") && digits.length === 12) {
    return /^91[6-9]\d{9}$/.test(digits);
  }

  if (digits.length === 10) {
    return /^[6-9]\d{9}$/.test(digits);
  }

  return /^\+?[1-9]\d{7,14}$/.test(value.replace(/\s/g, ""));
}

export const contactFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Name must be at least 2 characters.")
    .max(100, "Name must be at most 100 characters."),
  email: z.email("Please enter a valid email address."),
  phone: z
    .string()
    .trim()
    .min(1, "Phone number is required.")
    .refine(isValidPhone, "Please enter a valid phone number."),
  message: z
    .string()
    .trim()
    .min(10, "Message must be at least 10 characters.")
    .max(1000, "Message must be at most 1000 characters."),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;

export function isHoneypotTriggered(botcheck: boolean, website: string) {
  return botcheck || website.trim().length > 0;
}

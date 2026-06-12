import { z } from "zod";

const envSchema = z.object({
  NEXT_PUBLIC_SITE_URL: z.url().optional(),
  NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY: z
    .string()
    .min(1, "NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY is required."),
  WEB3FORMS_SUBMIT_MODE: z.enum(["client", "server"]).default("client"),
  NODE_ENV: z
    .enum(["development", "production", "test"])
    .default("development"),
});

export const env = envSchema.parse({
  NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
  NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY:
    process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY,
  WEB3FORMS_SUBMIT_MODE: process.env.WEB3FORMS_SUBMIT_MODE,
  NODE_ENV: process.env.NODE_ENV,
});

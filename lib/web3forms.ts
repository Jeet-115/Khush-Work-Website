import { SITE_NAME } from "@/constants/site";
import { env } from "@/lib/env";
import type { ContactFormValues } from "@/lib/validations/contact";

const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

export type Web3FormsResponse = {
  success: boolean;
  message?: string;
  body?: {
    message?: string;
  };
};

export function buildWeb3FormsPayload(data: ContactFormValues) {
  return {
    access_key: env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY,
    name: data.name,
    email: data.email,
    phone: data.phone,
    message: data.message,
    subject: `New enquiry from ${SITE_NAME} website`,
    from_name: `${SITE_NAME} Website`,
    botcheck: false,
  };
}

export async function submitToWeb3Forms(
  data: ContactFormValues,
): Promise<Web3FormsResponse> {
  const response = await fetch(WEB3FORMS_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(buildWeb3FormsPayload(data)),
  });

  const result = (await response.json()) as Web3FormsResponse;

  if (!response.ok) {
    return {
      success: false,
      message:
        result.message ??
        result.body?.message ??
        "Unable to send your enquiry. Please try again.",
    };
  }

  return result;
}

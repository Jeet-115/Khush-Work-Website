import { NextResponse } from "next/server";

import { isRateLimited } from "@/lib/contact/rate-limit";
import { env } from "@/lib/env";
import { submitToWeb3Forms } from "@/lib/web3forms";
import {
  contactApiSchema,
  isSpamSubmission,
} from "@/lib/validations/contact";
import type {
  ContactApiErrorResponse,
  ContactApiSuccessResponse,
} from "@/types/contact";

function getClientIp(request: Request) {
  const forwarded = request.headers.get("x-forwarded-for");

  if (forwarded) {
    return forwarded.split(",")[0]?.trim() ?? "unknown";
  }

  return request.headers.get("x-real-ip") ?? "unknown";
}

function validationErrorResponse(errors: Record<string, string[]>) {
  const response: ContactApiErrorResponse = {
    success: false,
    message: "Please correct the errors in the form.",
    errors,
  };

  return NextResponse.json(response, { status: 400 });
}

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    const response: ContactApiErrorResponse = {
      success: false,
      message: "Invalid request body.",
    };

    return NextResponse.json(response, { status: 400 });
  }

  const parsed = contactApiSchema.safeParse(body);

  if (!parsed.success) {
    return validationErrorResponse(parsed.error.flatten().fieldErrors);
  }

  if (isSpamSubmission(parsed.data)) {
    const response: ContactApiSuccessResponse = {
      success: true,
      message: "Your enquiry has been sent successfully.",
    };

    return NextResponse.json(response);
  }

  const clientIp = getClientIp(request);

  if (isRateLimited(clientIp)) {
    const response: ContactApiErrorResponse = {
      success: false,
      message: "Too many requests. Please try again later.",
    };

    return NextResponse.json(response, { status: 429 });
  }

  const { name, email, phone, message } = parsed.data;

  if (env.WEB3FORMS_SUBMIT_MODE === "client") {
    const response: ContactApiSuccessResponse = {
      success: true,
      message: "Validation successful.",
      clientSubmit: true,
    };

    return NextResponse.json(response);
  }

  const result = await submitToWeb3Forms({ name, email, phone, message });

  if (!result.success) {
    const response: ContactApiErrorResponse = {
      success: false,
      message:
        result.message ??
        result.body?.message ??
        "Unable to send your enquiry. Please try again.",
    };

    return NextResponse.json(response, { status: 502 });
  }

  const response: ContactApiSuccessResponse = {
    success: true,
    message: "Your enquiry has been sent successfully.",
  };

  return NextResponse.json(response);
}

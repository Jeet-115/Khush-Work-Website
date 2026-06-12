"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { m } from "framer-motion";
import { AlertCircle, CheckCircle2, Loader2, Send } from "lucide-react";
import { useId, useRef, useState } from "react";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FormField } from "@/components/ui/form-field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CONTACT_PAGE_CONTENT } from "@/constants/contact";
import { SITE_NAME } from "@/constants/site";
import { luxuryEase } from "@/lib/motion";
import {
  contactFormSchema,
  isHoneypotTriggered,
  type ContactFormValues,
} from "@/lib/validations/contact";

const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

type FormStatus = "idle" | "loading" | "success" | "error";

type Web3FormsResponse = {
  success: boolean;
  message?: string;
  body?: { message?: string };
};

async function submitToWeb3Forms(
  data: ContactFormValues,
  honeypot: { botcheck: boolean; website: string },
) {
  if (isHoneypotTriggered(honeypot.botcheck, honeypot.website)) {
    return;
  }

  const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

  if (!accessKey) {
    throw new Error("Form configuration is missing. Please contact support.");
  }

  const response = await fetch(WEB3FORMS_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      access_key: accessKey,
      name: data.name,
      email: data.email,
      phone: data.phone,
      message: data.message,
      subject: `New enquiry from ${SITE_NAME} website`,
      from_name: `${SITE_NAME} Website`,
      botcheck: false,
    }),
  });

  const result = (await response.json()) as Web3FormsResponse;

  if (!response.ok || !result.success) {
    throw new Error(
      result.message ??
        result.body?.message ??
        CONTACT_PAGE_CONTENT.form.errorMessage,
    );
  }
}

export function ContactForm() {
  const formId = useId();
  const statusRef = useRef<HTMLDivElement>(null);
  const websiteRef = useRef<HTMLInputElement>(null);
  const botcheckRef = useRef<HTMLInputElement>(null);
  const [status, setStatus] = useState<FormStatus>("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = handleSubmit(async (data) => {
    setStatus("loading");
    setStatusMessage("");

    try {
      await submitToWeb3Forms(data, {
        botcheck: botcheckRef.current?.checked ?? false,
        website: websiteRef.current?.value ?? "",
      });

      setStatus("success");
      setStatusMessage(CONTACT_PAGE_CONTENT.form.successMessage);
      reset();
      statusRef.current?.focus();
    } catch (error) {
      setStatus("error");
      setStatusMessage(
        error instanceof Error
          ? error.message
          : CONTACT_PAGE_CONTENT.form.errorMessage,
      );
      statusRef.current?.focus();
    }
  });

  return (
    <m.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: luxuryEase }}
    >
      <Card className="h-full">
        <CardHeader>
          <CardTitle>{CONTACT_PAGE_CONTENT.form.title}</CardTitle>
          <CardDescription>
            {CONTACT_PAGE_CONTENT.form.description}
          </CardDescription>
        </CardHeader>

        <CardContent>
          <div
            ref={statusRef}
            tabIndex={-1}
            className="outline-none"
            aria-live="polite"
            aria-atomic="true"
          >
            {status === "success" ? (
              <div
                role="status"
                className="border-brand-teal/20 bg-brand-teal/5 text-brand-charcoal mb-6 flex gap-3 rounded-lg border p-4"
              >
                <CheckCircle2
                  className="text-brand-teal mt-0.5 size-5 shrink-0"
                  aria-hidden="true"
                />
                <div>
                  <p className="font-medium">
                    {CONTACT_PAGE_CONTENT.form.successTitle}
                  </p>
                  <p className="text-muted-foreground mt-1 text-sm">
                    {statusMessage}
                  </p>
                </div>
              </div>
            ) : null}

            {status === "error" ? (
              <div
                role="alert"
                className="border-destructive/20 bg-destructive/5 text-brand-charcoal mb-6 flex gap-3 rounded-lg border p-4"
              >
                <AlertCircle
                  className="text-destructive mt-0.5 size-5 shrink-0"
                  aria-hidden="true"
                />
                <p className="text-sm">{statusMessage}</p>
              </div>
            ) : null}
          </div>

          <form
            id={formId}
            onSubmit={onSubmit}
            noValidate
            className="space-y-5"
          >
            <div
              className="pointer-events-none absolute -left-[9999px] h-0 w-0 overflow-hidden"
              aria-hidden="true"
            >
              <label htmlFor={`${formId}-website`}>Website</label>
              <input
                ref={websiteRef}
                id={`${formId}-website`}
                name="website"
                type="text"
                tabIndex={-1}
                autoComplete="off"
                defaultValue=""
              />
              <input
                ref={botcheckRef}
                name="botcheck"
                type="checkbox"
                tabIndex={-1}
                defaultChecked={false}
              />
            </div>

            <FormField
              id={`${formId}-name`}
              label="Name"
              required
              error={errors.name?.message}
            >
              <Input
                id={`${formId}-name`}
                type="text"
                autoComplete="name"
                aria-invalid={Boolean(errors.name)}
                aria-describedby={
                  errors.name ? `${formId}-name-error` : undefined
                }
                disabled={status === "loading"}
                {...register("name")}
              />
            </FormField>

            <div className="grid gap-5 sm:grid-cols-2">
              <FormField
                id={`${formId}-phone`}
                label="Phone"
                required
                error={errors.phone?.message}
              >
                <Input
                  id={`${formId}-phone`}
                  type="tel"
                  inputMode="tel"
                  autoComplete="tel"
                  placeholder="+91 98765 43210"
                  aria-invalid={Boolean(errors.phone)}
                  aria-describedby={
                    errors.phone ? `${formId}-phone-error` : undefined
                  }
                  disabled={status === "loading"}
                  {...register("phone")}
                />
              </FormField>

              <FormField
                id={`${formId}-email`}
                label="Email"
                required
                error={errors.email?.message}
              >
                <Input
                  id={`${formId}-email`}
                  type="email"
                  inputMode="email"
                  autoComplete="email"
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={
                    errors.email ? `${formId}-email-error` : undefined
                  }
                  disabled={status === "loading"}
                  {...register("email")}
                />
              </FormField>
            </div>

            <FormField
              id={`${formId}-message`}
              label="Message"
              required
              error={errors.message?.message}
            >
              <Textarea
                id={`${formId}-message`}
                rows={5}
                aria-invalid={Boolean(errors.message)}
                aria-describedby={
                  errors.message ? `${formId}-message-error` : undefined
                }
                disabled={status === "loading"}
                {...register("message")}
              />
            </FormField>

            <Button
              type="submit"
              variant="teal"
              size="lg"
              className="w-full sm:w-auto"
              disabled={status === "loading"}
              aria-busy={status === "loading"}
            >
              {status === "loading" ? (
                <>
                  <Loader2 className="size-4 animate-spin" aria-hidden="true" />
                  Sending enquiry...
                </>
              ) : (
                <>
                  <Send className="size-4" aria-hidden="true" />
                  Send Enquiry
                </>
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
    </m.div>
  );
}

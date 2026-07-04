import { useEffect, useRef, useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { submitLead, type LeadInput } from "@/lib/leads.functions";
import { captureVisitContext, readVisitContext } from "@/lib/visit-context";

type Status = "idle" | "submitting" | "error";

type Extra = Omit<
  LeadInput,
  | "utm_source"
  | "utm_medium"
  | "utm_campaign"
  | "utm_term"
  | "utm_content"
  | "referrer"
  | "landing_page"
  | "elapsed_ms"
  | "honeypot"
  | "form_source"
>;

/**
 * Handles the shared submission logic for every form:
 * captures UTM/referrer context, enforces honeypot + timing checks,
 * calls the server fn, then redirects to /thank-you with source.
 */
export function useLeadForm(form_source: LeadInput["form_source"]) {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const mountedAt = useRef<number>(0);
  const navigate = useNavigate();
  const send = useServerFn(submitLead);

  useEffect(() => {
    captureVisitContext();
    mountedAt.current = Date.now();
  }, []);

  async function submit(
    fields: Extra,
    opts: { honeypot: string },
  ) {
    setStatus("submitting");
    setErrorMessage(null);
    const { utm, referrer, landing_page } = readVisitContext();
    try {
      await send({
        data: {
          form_source,
          ...fields,
          utm_source: utm.utm_source ?? null,
          utm_medium: utm.utm_medium ?? null,
          utm_campaign: utm.utm_campaign ?? null,
          utm_term: utm.utm_term ?? null,
          utm_content: utm.utm_content ?? null,
          referrer,
          landing_page,
          honeypot: opts.honeypot,
          elapsed_ms: Date.now() - mountedAt.current,
        },
      });
      navigate({
        to: "/thank-you",
        search: { source: form_source },
      });
    } catch (err) {
      console.error(err);
      setStatus("error");
      setErrorMessage(
        "Something went wrong sending your message. Please try again, or email us directly.",
      );
    }
  }

  return { status, errorMessage, submit };
}

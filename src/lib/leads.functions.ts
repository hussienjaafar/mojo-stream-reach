import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const leadInput = z.object({
  form_source: z.enum(["audit", "partner", "contact"]),
  name: z.string().trim().max(200).optional().nullable(),
  company: z.string().trim().max(200).optional().nullable(),
  industry: z.string().trim().max(100).optional().nullable(),
  budget_range: z.string().trim().max(100).optional().nullable(),
  website: z.string().trim().max(500).optional().nullable(),
  email: z.string().trim().email().max(320).optional().nullable(),
  phone: z.string().trim().max(50).optional().nullable(),
  message: z.string().trim().max(5000).optional().nullable(),
  utm_source: z.string().trim().max(200).optional().nullable(),
  utm_medium: z.string().trim().max(200).optional().nullable(),
  utm_campaign: z.string().trim().max(200).optional().nullable(),
  utm_term: z.string().trim().max(200).optional().nullable(),
  utm_content: z.string().trim().max(200).optional().nullable(),
  referrer: z.string().trim().max(2000).optional().nullable(),
  landing_page: z.string().trim().max(2000).optional().nullable(),
  // Anti-spam signals (never persisted).
  honeypot: z.string().max(500).optional().nullable(),
  elapsed_ms: z.number().nonnegative().max(1000 * 60 * 60 * 24),
});

export type LeadInput = z.infer<typeof leadInput>;

// TODO-EMAIL: replace with the real notification recipient when known.
const NOTIFY_TO = "leads@mojo.tv";
const NOTIFY_FROM = "notifications@mojo.tv";

const MIN_ELAPSED_MS = 3000;

export const submitLead = createServerFn({ method: "POST" })
  .inputValidator((raw) => leadInput.parse(raw))
  .handler(async ({ data }) => {
    // Spam checks — silently accept-and-drop so bots don't learn the rules.
    const looksLikeSpam =
      (data.honeypot && data.honeypot.length > 0) ||
      data.elapsed_ms < MIN_ELAPSED_MS;

    if (looksLikeSpam) {
      // Log for observability but do not insert, notify, or webhook.
      console.warn("[submitLead] rejected suspected spam", {
        form_source: data.form_source,
        honeypot: Boolean(data.honeypot),
        elapsed_ms: data.elapsed_ms,
      });
      return { ok: true };
    }

    const { supabaseAdmin } = await import(
      "@/integrations/supabase/client.server"
    );

    const row = {
      form_source: data.form_source,
      name: data.name ?? null,
      company: data.company ?? null,
      industry: data.industry ?? null,
      budget_range: data.budget_range ?? null,
      website: data.website ?? null,
      email: data.email ?? null,
      phone: data.phone ?? null,
      message: data.message ?? null,
      utm_source: data.utm_source ?? null,
      utm_medium: data.utm_medium ?? null,
      utm_campaign: data.utm_campaign ?? null,
      utm_term: data.utm_term ?? null,
      utm_content: data.utm_content ?? null,
      referrer: data.referrer ?? null,
      landing_page: data.landing_page ?? null,
    };

    const { data: inserted, error } = await supabaseAdmin
      .from("leads")
      .insert(row)
      .select("id")
      .single();

    if (error) {
      console.error("[submitLead] insert failed", error);
      throw new Error("Could not save lead");
    }

    const leadId = inserted?.id as string | undefined;

    // Fire notification email + optional webhook in parallel. Failures here
    // must not fail the form submission — the lead is already saved.
    await Promise.allSettled([
      sendNotificationEmail({ leadId, row }),
      postWebhook({ leadId, row }),
    ]);

    return { ok: true, id: leadId };
  });

async function sendNotificationEmail({
  leadId,
  row,
}: {
  leadId: string | undefined;
  row: Record<string, unknown>;
}) {
  // TODO-EMAIL: wire to Lovable Emails (Cloud > Emails) or a provider.
  // For now, log the intended notification so it is inspectable in server logs.
  // Swap this block with a real send once an email domain is configured.
  console.info("[submitLead] notification email pending", {
    to: NOTIFY_TO,
    from: NOTIFY_FROM,
    subject: `New ${row.form_source} lead${row.company ? ` — ${row.company}` : ""}`,
    leadId,
    fields: row,
  });
}

async function postWebhook({
  leadId,
  row,
}: {
  leadId: string | undefined;
  row: Record<string, unknown>;
}) {
  const url = process.env.LEAD_WEBHOOK_URL;
  if (!url) return; // Silent no-op when unset.
  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        id: leadId,
        received_at: new Date().toISOString(),
        ...row,
      }),
    });
    if (!res.ok) {
      console.warn("[submitLead] webhook non-2xx", res.status);
    }
  } catch (err) {
    console.warn("[submitLead] webhook failed", err);
  }
}

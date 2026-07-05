import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { PageShell } from "@/components/mojo/PageShell";
import {
  Honeypot,
  SelectInput,
  StatusRegion,
  SubmitButton,
  TextInput,
} from "@/components/mojo/form-fields";
import { useLeadForm } from "@/lib/use-lead-form";

import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/free-audit")({
  head: () =>
    pageHead({
      path: "/free-audit",
      title: "Free streaming TV readiness audit | Mojo",
      description:
        "A real document, built by a human: what streaming TV would cost in your Michigan market, which inventory fits your customers, and whether your creative can convert. No obligation.",
    }),
  component: FreeAuditPage,
});

const industries = [
  { value: "home-services", label: "Home services" },
  { value: "legal", label: "Legal" },
  { value: "healthcare", label: "Healthcare" },
  { value: "auto-dealers", label: "Auto dealers" },
  { value: "other", label: "Other" },
];

const budgets = [
  { value: "under-5k", label: "Under $5,000 / month" },
  { value: "5k-10k", label: "$5,000 – $10,000 / month" },
  { value: "10k-25k", label: "$10,000 – $25,000 / month" },
  { value: "25k-50k", label: "$25,000 – $50,000 / month" },
  { value: "50k-plus", label: "$50,000+ / month" },
  { value: "unsure", label: "Not sure yet" },
];

const includes = [
  "Working-media estimate for your zip codes",
  "Which streaming apps and live-sports inventory fit your customers",
  "An honest read on whether your current creative will convert",
  "A one-page plan you can walk into any meeting with",
];

const schema = z.object({
  name: z.string().trim().min(1, "Your name is required").max(200),
  company: z.string().trim().min(1, "Company is required").max(200),
  industry: z.string().min(1, "Please choose one"),
  budget_range: z.string().min(1, "Please choose a range"),
  website: z.string().trim().url("Please include https://").max(500),
  email: z.string().trim().email("Please enter a valid email").max(320),
  phone: z.string().trim().max(50).optional(),
});

function FreeAuditPage() {
  const { status, errorMessage, submit } = useLeadForm("audit");
  const [errors, setErrors] = useState<Record<string, string>>({});

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const raw = Object.fromEntries(fd.entries()) as Record<string, string>;
    const parsed = schema.safeParse(raw);
    if (!parsed.success) {
      const next: Record<string, string> = {};
      for (const issue of parsed.error.issues) {
        next[String(issue.path[0])] = issue.message;
      }
      setErrors(next);
      return;
    }
    setErrors({});
    await submit(
      {
        name: parsed.data.name,
        company: parsed.data.company,
        industry: parsed.data.industry,
        budget_range: parsed.data.budget_range,
        website: parsed.data.website,
        email: parsed.data.email,
        phone: parsed.data.phone || null,
      },
      { honeypot: raw.company_website || "" },
    );
  }

  return (
    <PageShell>
      <section className="border-b border-mojo-border">
        <div className="mx-auto max-w-6xl px-6 pt-20 pb-16 md:pt-28 md:pb-20">
          <div className="max-w-3xl mojo-fade-up">
            <div className="text-xs uppercase tracking-[0.22em] text-mojo-clay-deep font-medium">
              Free audit
            </div>
            <h1 className="mt-5 font-display text-4xl sm:text-5xl md:text-6xl leading-[1.05] text-mojo-ink">
              Free streaming TV readiness audit.
            </h1>
            <p className="mt-6 text-lg text-mojo-mute max-w-2xl leading-relaxed">
              We'll map what TV would cost in your market, which streaming
              inventory fits your customers, and whether your current creative
              can convert. A real document, built by a human. No obligation.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-mojo-border">
        <div className="mx-auto max-w-6xl px-6 py-20 grid gap-16 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <div className="text-xs uppercase tracking-[0.22em] text-mojo-clay-deep font-medium">
              What you get
            </div>
            <h2 className="mt-4 font-display text-3xl md:text-4xl text-mojo-ink leading-tight">
              Written for your market, from scratch.
            </h2>
            <ul className="mt-8 space-y-4">
              {includes.map((item) => (
                <li key={item} className="flex gap-3 items-start text-mojo-ink">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 20 20"
                    fill="none"
                    stroke="var(--mojo-clay)"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mt-1 shrink-0"
                    aria-hidden="true"
                  >
                    <path d="M4 10.5l4 4 8-9" />
                  </svg>
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-8 text-mojo-mute text-sm leading-relaxed max-w-sm">
              If TV isn't the right next dollar for you, the audit will say so
              — plainly, in writing.
            </p>
          </div>

          <div className="rounded-lg border border-mojo-border bg-mojo-cream-2 p-6 md:p-10">
            <form onSubmit={onSubmit} className="space-y-5" noValidate>
              <Honeypot />
              <TextInput
                name="name"
                label="Your name"
                required
                autoComplete="name"
                error={errors.name}
              />
              <TextInput
                name="company"
                label="Company"
                required
                autoComplete="organization"
                error={errors.company}
              />
              <SelectInput
                name="industry"
                label="Industry"
                required
                options={industries}
                error={errors.industry}
              />
              <SelectInput
                name="budget_range"
                label="Monthly marketing budget"
                required
                options={budgets}
                placeholder="Select a range"
                error={errors.budget_range}
              />
              <TextInput
                name="website"
                label="Website"
                type="url"
                required
                placeholder="https://"
                autoComplete="url"
                error={errors.website}
              />
              <TextInput
                name="email"
                label="Email"
                type="email"
                required
                autoComplete="email"
                error={errors.email}
              />
              <TextInput
                name="phone"
                label="Phone (optional)"
                type="tel"
                autoComplete="tel"
                error={errors.phone}
              />

              <SubmitButton submitting={status === "submitting"} className="w-full">
                Request my audit
              </SubmitButton>
              <p className="text-center text-xs text-mojo-mute">
                We reply within one business day.
              </p>
              <StatusRegion status={status} errorMessage={errorMessage} />
            </form>
          </div>
        </div>
      </section>
    </PageShell>
  );
}

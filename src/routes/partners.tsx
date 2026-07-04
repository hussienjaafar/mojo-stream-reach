import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { PageShell } from "@/components/mojo/PageShell";
import {
  Honeypot,
  StatusRegion,
  SubmitButton,
  TextAreaInput,
  TextInput,
} from "@/components/mojo/form-fields";
import { useLeadForm } from "@/lib/use-lead-form";

import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/partners")({
  head: () =>
    pageHead({
      path: "/partners",
      title: "Referral partners — Send us a client, get paid for a year | Mojo",
      description:
        "For web, SEO, and marketing shops: 10% of first-year fees on any client you refer to Mojo. We never poach your services. Co-branded reporting available.",
    }),
  component: PartnersPage,
});

const terms = [
  {
    title: "10% of first-year fees",
    body: "For any client you refer who signs a Mojo program, we pay 10% of their management fees for a full 12 months.",
  },
  {
    title: "We never poach your services",
    body: "We do streaming TV. Not SEO, not paid social, not web builds. Your client is your client — we're just the TV team.",
  },
  {
    title: "Co-branded reporting on request",
    body: "If you want the monthly report to show up under your logo alongside ours, we'll set that up. Your relationship, our discipline.",
  },
];

const schema = z.object({
  name: z.string().trim().min(1, "Your name is required").max(200),
  company: z.string().trim().min(1, "Agency name is required").max(200),
  email: z.string().trim().email("Please enter a valid email").max(320),
  message: z.string().trim().max(5000).optional(),
});

function PartnersPage() {
  const { status, errorMessage, submit } = useLeadForm("partner");
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
        email: parsed.data.email,
        message: parsed.data.message || null,
      },
      { honeypot: raw.company_website || "" },
    );
  }

  return (
    <PageShell>
      <section className="border-b border-mojo-border">
        <div className="mx-auto max-w-6xl px-6 pt-20 pb-16 md:pt-28 md:pb-20">
          <div className="max-w-3xl mojo-fade-up">
            <div className="text-xs uppercase tracking-[0.22em] text-mojo-clay font-medium">
              Partners
            </div>
            <h1 className="mt-5 font-display text-4xl sm:text-5xl md:text-6xl leading-[1.05] text-mojo-ink">
              Send us a client. Get paid for a year.
            </h1>
            <p className="mt-6 text-lg text-mojo-mute max-w-2xl leading-relaxed">
              For web, SEO, and marketing agencies who want to offer streaming
              TV without building the team, the buying platform, or the
              production studio to support it.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-mojo-border">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="text-xs uppercase tracking-[0.22em] text-mojo-clay font-medium">
            The terms
          </div>
          <h2 className="mt-4 font-display text-3xl md:text-4xl text-mojo-ink leading-tight max-w-2xl">
            Simple, written down, honored.
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {terms.map((t) => (
              <div
                key={t.title}
                className="rounded-lg border border-mojo-border bg-mojo-cream-2 p-6"
              >
                <h3 className="font-display text-xl text-mojo-ink">{t.title}</h3>
                <p className="mt-3 text-mojo-mute leading-relaxed">{t.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-mojo-border">
        <div className="mx-auto max-w-2xl px-6 py-20">
          <div className="text-xs uppercase tracking-[0.22em] text-mojo-clay font-medium">
            Get in touch
          </div>
          <h2 className="mt-4 font-display text-3xl md:text-4xl text-mojo-ink leading-tight">
            Tell us about your agency.
          </h2>
          <p className="mt-4 text-mojo-mute">
            No form-then-silence. We reply within one business day.
          </p>

          <div className="mt-10 rounded-lg border border-mojo-border bg-mojo-cream-2 p-6 md:p-10">
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
                label="Agency"
                required
                autoComplete="organization"
                error={errors.company}
              />
              <TextInput
                name="email"
                label="Email"
                type="email"
                required
                autoComplete="email"
                error={errors.email}
              />
              <TextAreaInput
                name="message"
                label="Note (optional)"
                placeholder="Client types, markets, or anything else worth knowing."
                error={errors.message}
              />
              <SubmitButton submitting={status === "submitting"} className="w-full">
                Start the conversation
              </SubmitButton>
              <StatusRegion status={status} errorMessage={errorMessage} />
            </form>
          </div>
        </div>
      </section>
    </PageShell>
  );
}

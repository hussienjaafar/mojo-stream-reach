import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { PageShell } from "@/components/mojo/PageShell";
import { TVFrame } from "@/components/mojo/TVFrame";
import {
  Honeypot,
  StatusRegion,
  SubmitButton,
  TextAreaInput,
  TextInput,
} from "@/components/mojo/form-fields";
import { useLeadForm } from "@/lib/use-lead-form";

import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/contact")({
  head: () =>
    pageHead({
      path: "/contact",
      title: "Book a call — Mojo streaming TV",
      description:
        "Tell us about your business and your market. We'll put together a plan and walk you through it — no obligation.",
    }),
  component: ContactPage,
});

const schema = z.object({
  name: z.string().trim().min(1, "Your name is required").max(200),
  company: z.string().trim().max(200).optional(),
  email: z.string().trim().email("Please enter a valid email").max(320),
  phone: z.string().trim().max(50).optional(),
  message: z.string().trim().min(1, "Tell us a little about what you're looking for").max(5000),
});

function ContactPage() {
  const { status, errorMessage, submit } = useLeadForm("contact");
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
        company: parsed.data.company || null,
        email: parsed.data.email,
        phone: parsed.data.phone || null,
        message: parsed.data.message,
      },
      { honeypot: raw.company_website || "" },
    );
  }

  return (
    <PageShell>
      <section className="border-b border-mojo-border">
        <div className="mx-auto max-w-6xl px-6 pt-20 pb-14 md:pt-28 md:pb-16">
          <div className="max-w-3xl mojo-fade-up">
            <div className="text-xs uppercase tracking-[0.22em] text-mojo-clay font-medium">
              Contact
            </div>
            <h1 className="mt-5 font-display text-4xl sm:text-5xl md:text-6xl leading-[1.05] text-mojo-ink">
              Book a call. Or send a note.
            </h1>
            <p className="mt-6 text-lg text-mojo-mute max-w-2xl leading-relaxed">
              Tell us about your business and your market. We'll put together a
              plan and walk you through it — no obligation.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-mojo-border">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20 grid gap-12 lg:grid-cols-2 lg:items-start">
          {/* LEFT: scheduler embed placeholder */}
          <div>
            <div className="text-xs uppercase tracking-[0.22em] text-mojo-clay font-medium">
              Pick a time
            </div>
            <h2 className="mt-4 font-display text-2xl md:text-3xl text-mojo-ink leading-tight">
              Grab a 20-minute intro.
            </h2>
            <p className="mt-3 text-mojo-mute">
              No decks. We'll ask about your market and answer whatever you
              want to ask us.
            </p>

            <div className="mt-8">
              <TVFrame>
                {/* SCHEDULER-EMBED-HERE — drop Calendly / SavvyCal / Cal.com iframe below. */}
                <div
                  data-scheduler-slot="true"
                  className="aspect-[4/3] w-full flex items-center justify-center p-8 text-center"
                >
                  <div>
                    <div className="text-xs uppercase tracking-[0.22em] text-mojo-clay font-medium">
                      Scheduler embed
                    </div>
                    <p className="mt-3 font-display text-2xl text-mojo-ink leading-tight max-w-sm">
                      SCHEDULER-EMBED-HERE
                    </p>
                    <p className="mt-3 text-sm text-mojo-mute max-w-sm">
                      Swap this block for a Calendly, SavvyCal, or Cal.com
                      iframe. The TV frame stays.
                    </p>
                  </div>
                </div>
              </TVFrame>
            </div>
          </div>

          {/* RIGHT: short contact form */}
          <div>
            <div className="text-xs uppercase tracking-[0.22em] text-mojo-clay font-medium">
              Or send a note
            </div>
            <h2 className="mt-4 font-display text-2xl md:text-3xl text-mojo-ink leading-tight">
              We reply within one business day.
            </h2>

            <div className="mt-8 rounded-lg border border-mojo-border bg-mojo-cream-2 p-6 md:p-8">
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
                  label="Company (optional)"
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
                <TextInput
                  name="phone"
                  label="Phone (optional)"
                  type="tel"
                  autoComplete="tel"
                  error={errors.phone}
                />
                <TextAreaInput
                  name="message"
                  label="What are you looking for?"
                  required
                  rows={5}
                  placeholder="Market, budget range, timing — whatever you want us to know."
                  error={errors.message}
                />
                <SubmitButton submitting={status === "submitting"} className="w-full">
                  Send it over
                </SubmitButton>
                <StatusRegion status={status} errorMessage={errorMessage} />
              </form>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}

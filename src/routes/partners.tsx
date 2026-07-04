import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { PageShell } from "@/components/mojo/PageShell";

export const Route = createFileRoute("/partners")({
  head: () => ({
    meta: [
      { title: "Referral partners — Send us a client, get paid for a year | Mojo" },
      {
        name: "description",
        content:
          "For web, SEO, and marketing shops: 10% of first-year fees on any client you refer to Mojo. We never poach your services. Co-branded reporting available.",
      },
      { property: "og:title", content: "Partners — Mojo referral program" },
      {
        property: "og:description",
        content:
          "10% of first-year fees. No poaching. Co-branded reporting on request.",
      },
    ],
    links: [
      { rel: "canonical", href: "https://mojo-stream-reach.lovable.app/partners" },
    ],
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

function PartnersPage() {
  const [submitted, setSubmitted] = useState(false);

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
            {submitted ? (
              <div className="text-center py-8">
                <h3 className="font-display text-2xl text-mojo-ink">
                  Thanks — we'll be in touch.
                </h3>
                <p className="mt-3 text-mojo-mute">
                  Expect a note within one business day.
                </p>
                <Link
                  to="/"
                  className="mt-6 inline-flex items-center rounded-md bg-mojo-clay px-4 py-2 text-sm font-medium text-mojo-cream hover:bg-mojo-clay-deep transition-colors"
                >
                  Back home
                </Link>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
                className="space-y-5"
              >
                <PField label="Your name" name="name" required />
                <PField label="Agency" name="agency" required />
                <PField label="Email" name="email" type="email" required />
                <div>
                  <label htmlFor="note" className="text-sm font-medium text-mojo-ink">
                    Note (optional)
                  </label>
                  <textarea
                    id="note"
                    name="note"
                    rows={4}
                    placeholder="Client types, markets, or anything else worth knowing."
                    className="mt-2 block w-full rounded-md border border-mojo-border bg-mojo-cream px-3 py-2 text-mojo-ink placeholder:text-mojo-mute focus:outline-none focus:ring-2 focus:ring-mojo-clay focus:border-mojo-clay"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center rounded-md bg-mojo-clay px-6 py-3 text-sm font-medium text-mojo-cream hover:bg-mojo-clay-deep transition-colors"
                >
                  Start the conversation
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </PageShell>
  );
}

function PField({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="text-sm font-medium text-mojo-ink">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="mt-2 block w-full rounded-md border border-mojo-border bg-mojo-cream px-3 py-2 text-mojo-ink placeholder:text-mojo-mute focus:outline-none focus:ring-2 focus:ring-mojo-clay focus:border-mojo-clay"
      />
    </div>
  );
}

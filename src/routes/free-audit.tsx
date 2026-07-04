import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { PageShell } from "@/components/mojo/PageShell";

export const Route = createFileRoute("/free-audit")({
  head: () => ({
    meta: [
      { title: "Free streaming TV readiness audit | Mojo" },
      {
        name: "description",
        content:
          "A real document, built by a human: what streaming TV would cost in your Michigan market, which inventory fits your customers, and whether your creative can convert. No obligation.",
      },
      { property: "og:title", content: "Free streaming TV readiness audit | Mojo" },
      {
        property: "og:description",
        content:
          "We'll map your market, your inventory fit, and your creative. Human-built, no obligation.",
      },
    ],
    links: [
      { rel: "canonical", href: "https://mojo-stream-reach.lovable.app/free-audit" },
    ],
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
  "Under $5,000 / month",
  "$5,000 – $10,000 / month",
  "$10,000 – $25,000 / month",
  "$25,000 – $50,000 / month",
  "$50,000+ / month",
  "Not sure yet",
];

const includes = [
  "Working-media estimate for your zip codes",
  "Which streaming apps and live-sports inventory fit your customers",
  "An honest read on whether your current creative will convert",
  "A one-page plan you can walk into any meeting with",
];

function FreeAuditPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <PageShell>
      <section className="border-b border-mojo-border">
        <div className="mx-auto max-w-6xl px-6 pt-20 pb-16 md:pt-28 md:pb-20">
          <div className="max-w-3xl mojo-fade-up">
            <div className="text-xs uppercase tracking-[0.22em] text-mojo-clay font-medium">
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
            <div className="text-xs uppercase tracking-[0.22em] text-mojo-clay font-medium">
              What you get
            </div>
            <h2 className="mt-4 font-display text-3xl md:text-4xl text-mojo-ink leading-tight">
              Written for you. Not a template.
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
            {submitted ? (
              <div className="text-center py-8">
                <h3 className="font-display text-2xl text-mojo-ink">
                  Got it — thank you.
                </h3>
                <p className="mt-3 text-mojo-mute">
                  We'll reply within one business day with next steps.
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
                <Field label="Your name" name="name" required />
                <Field label="Company" name="company" required />

                <div>
                  <Label htmlFor="industry">Industry</Label>
                  <select
                    id="industry"
                    name="industry"
                    required
                    defaultValue=""
                    className={selectClasses}
                  >
                    <option value="" disabled>
                      Select one
                    </option>
                    {industries.map((i) => (
                      <option key={i.value} value={i.value}>
                        {i.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <Label htmlFor="budget">Monthly marketing budget</Label>
                  <select
                    id="budget"
                    name="budget"
                    required
                    defaultValue=""
                    className={selectClasses}
                  >
                    <option value="" disabled>
                      Select a range
                    </option>
                    {budgets.map((b) => (
                      <option key={b} value={b}>
                        {b}
                      </option>
                    ))}
                  </select>
                </div>

                <Field label="Website" name="website" type="url" required placeholder="https://" />
                <Field label="Email" name="email" type="email" required />
                <Field label="Phone (optional)" name="phone" type="tel" />

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center rounded-md bg-mojo-clay px-6 py-3 text-sm font-medium text-mojo-cream hover:bg-mojo-clay-deep transition-colors"
                >
                  Request my audit
                </button>
                <p className="text-center text-xs text-mojo-mute">
                  We reply within one business day.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    </PageShell>
  );
}

const inputClasses =
  "mt-2 block w-full rounded-md border border-mojo-border bg-mojo-cream px-3 py-2 text-mojo-ink placeholder:text-mojo-mute focus:outline-none focus:ring-2 focus:ring-mojo-clay focus:border-mojo-clay";
const selectClasses = inputClasses;

function Label({ htmlFor, children }: { htmlFor: string; children: React.ReactNode }) {
  return (
    <label htmlFor={htmlFor} className="text-sm font-medium text-mojo-ink">
      {children}
    </label>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <Label htmlFor={name}>{label}</Label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className={inputClasses}
      />
    </div>
  );
}

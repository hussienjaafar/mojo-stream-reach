import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/mojo/PageShell";
import { CTABand } from "@/components/mojo/CTABand";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/results")({
  head: () =>
    pageHead({
      path: "/results",
      title: "Results — Mojo streaming TV advertising",
      description:
        "A new name in commercial streaming TV with a national track record behind it. Capability stats, an anonymized advocacy case, and our founding-client program.",
    }),
  component: ResultsPage,
});

// TODO: replace with verified numbers before launch.
const capabilityStats = [
  { value: "TODO", label: "Households reached" },
  { value: "TODO", label: "Impressions delivered" },
  { value: "TODO", label: "Markets covered" },
  { value: "TODO", label: "Spots produced" },
];

function ResultsPage() {
  return (
    <PageShell>
      {/* HERO */}
      <section className="border-b border-mojo-border">
        <div className="mx-auto max-w-6xl px-6 pt-20 pb-16 md:pt-28 md:pb-24">
          <div className="max-w-3xl mojo-fade-up">
            <div className="text-xs uppercase tracking-[0.22em] text-mojo-clay font-medium">
              Results
            </div>
            <h1 className="mt-5 font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] text-mojo-ink">
              Proof over promises.
            </h1>
            <p className="mt-6 text-lg text-mojo-mute max-w-2xl leading-relaxed">
              We're a new name in commercial streaming TV — with a national track record behind it. Below: what we've built capability to do, and the case studies we'll publish as clients sign off on them.
            </p>
          </div>
        </div>
      </section>

      {/* CAPABILITY STAT GRID */}
      <section className="border-b border-mojo-border">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="text-xs uppercase tracking-[0.22em] text-mojo-clay font-medium">
            Capability
          </div>
          <h2 className="mt-4 font-display text-3xl md:text-5xl text-mojo-ink leading-[1.1] max-w-3xl">
            The scale we've already run at.
          </h2>
          <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {capabilityStats.map((s) => (
              <div key={s.label}>
                <div className="font-display text-5xl md:text-6xl text-mojo-ink leading-none">
                  {s.value}
                </div>
                <div className="mt-3 text-sm text-mojo-mute uppercase tracking-widest">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ANONYMIZED CAPABILITY BLOCK */}
      <section className="bg-mojo-cream-2 border-b border-mojo-border">
        <div className="mx-auto max-w-4xl px-6 py-24">
          <div className="text-xs uppercase tracking-[0.22em] text-mojo-clay font-medium">
            Case study — anonymized
          </div>
          <h2 className="mt-4 font-display text-3xl md:text-5xl text-mojo-ink leading-[1.1]">
            National advocacy and congressional campaigns.
          </h2>
          <div className="mt-8 space-y-5 text-mojo-ink/85 text-base md:text-lg leading-relaxed">
            <p>
              Multi-state streaming TV programs across dozens of media markets, running simultaneously with fixed launch dates and non-negotiable end dates. Weekly creative rotations, market-by-market weighting, and daily pacing reviews.
            </p>
            <p>
              The specifics stay confidential — that's the nature of the work. What travels is the discipline: high stakes, tight deadlines, transparent reporting, and creative produced fast enough to react to the news cycle.
            </p>
            <p>
              That's the same operating standard we bring to a Michigan home-services company or a law firm buying its first streaming flight.
            </p>
          </div>
        </div>
      </section>

      {/* FIRST 10 CLIENTS HONESTY CARD */}
      <section className="border-b border-mojo-border">
        <div className="mx-auto max-w-4xl px-6 py-24">
          <div
            className="rounded-2xl bg-mojo-cream p-8 md:p-12"
            style={{ border: "1.5px solid var(--mojo-clay)" }}
          >
            <div className="text-xs uppercase tracking-[0.22em] text-mojo-clay font-medium">
              First 10 clients
            </div>
            <h2 className="mt-4 font-display text-3xl md:text-5xl text-mojo-ink leading-[1.1]">
              Founding-client program.
            </h2>
            <p className="mt-6 text-mojo-ink/85 text-base md:text-lg leading-relaxed max-w-2xl">
              We're being honest about where we are: our first ten commercial clients get the founding treatment. That means priority production, founder-led service, and case-study pricing in exchange for permission to publish the results.
            </p>
            <ul className="mt-8 space-y-4">
              {[
                "Priority production slots and turnaround",
                "Founder-led account service through the full program",
                "Case-study pricing in exchange for permission to publish results",
              ].map((item) => (
                <li key={item} className="flex gap-3 items-start text-mojo-ink">
                  <svg
                    width="20"
                    height="20"
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
            <div className="mt-10">
              <Link
                to="/contact"
                className="inline-flex items-center rounded-md bg-mojo-clay px-6 py-3 text-sm font-medium text-mojo-cream hover:bg-mojo-clay-deep transition-colors"
              >
                Ask about a founding spot
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTABand />
    </PageShell>
  );
}

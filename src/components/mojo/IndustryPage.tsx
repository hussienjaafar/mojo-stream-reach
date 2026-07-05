import { Link } from "@tanstack/react-router";
import { PageShell } from "./PageShell";
import { CTABand } from "./CTABand";
import { TVFrame } from "./TVFrame";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export interface IndustryPageProps {
  eyebrow: string; // "HOME SERVICES ADVERTISING"
  h1: string;
  subhead: string;
  pain: string[]; // 2-3 short paragraphs
  steps: { n: string; title: string; body: string }[];
  runsOn: string[]; // TV-frame bullet list
  metro: string; // e.g. "metro Detroit"
  geoPills: string[];
  faqs: { q: string; a: string }[];
  statsTodo?: string;
}

export function IndustryPage(p: IndustryPageProps) {
  return (
    <PageShell>
      {/* 1. HERO */}
      <section className="border-b border-mojo-border">
        <div className="mx-auto max-w-6xl px-6 pt-20 pb-16 md:pt-28 md:pb-24">
          <div className="max-w-3xl mojo-fade-up">
            <div className="text-xs uppercase tracking-[0.22em] text-mojo-clay-deep font-medium">
              {p.eyebrow}
            </div>
            <h1 className="mt-5 font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] text-mojo-ink">
              {p.h1}
            </h1>
            <p className="mt-6 text-lg text-mojo-mute max-w-2xl leading-relaxed">
              {p.subhead}
            </p>
            <div className="mt-8">
              <Link
                to="/contact"
                className="inline-flex items-center rounded-md bg-mojo-clay px-6 py-3 text-sm font-medium text-mojo-cream hover:bg-mojo-clay-deep transition-colors"
              >
                Book a call
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. PAIN */}
      <section className="border-b border-mojo-border">
        <div className="mx-auto max-w-6xl px-6 py-24 grid gap-12 md:grid-cols-2 md:gap-20">
          <div>
            <div className="text-xs uppercase tracking-[0.22em] text-mojo-clay-deep font-medium">
              The problem
            </div>
            <h2 className="mt-4 font-display text-3xl md:text-5xl text-mojo-ink leading-[1.1]">
              You already know what isn't working.
            </h2>
          </div>
          <div className="space-y-5 text-mojo-ink/85 text-base md:text-lg leading-relaxed">
            {p.pain.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </div>
      </section>

      {/* 3. HOW IT WORKS */}
      <section className="border-b border-mojo-border">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="max-w-2xl">
            <div className="text-xs uppercase tracking-[0.22em] text-mojo-clay-deep font-medium">
              How it works
            </div>
            <h2 className="mt-4 font-display text-3xl md:text-5xl text-mojo-ink leading-[1.1]">
              Three steps. No mystery.
            </h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {p.steps.map((s) => (
              <div
                key={s.n}
                className="rounded-xl bg-mojo-cream-2 border border-mojo-border p-8"
              >
                <div className="font-display text-mojo-clay text-2xl">{s.n}</div>
                <h3 className="mt-4 font-display text-2xl text-mojo-ink">
                  {s.title}
                </h3>
                <p className="mt-3 text-mojo-mute leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. WHERE YOUR AD RUNS */}
      <section className="bg-mojo-cream-2 border-b border-mojo-border">
        <div className="mx-auto max-w-6xl px-6 py-24 grid gap-12 md:grid-cols-2 items-center">
          <div>
            <div className="text-xs uppercase tracking-[0.22em] text-mojo-clay-deep font-medium">
              Where your ad runs
            </div>
            <h2 className="mt-4 font-display text-3xl md:text-5xl text-mojo-ink leading-[1.1]">
              The big screen, on your terms.
            </h2>
            <p className="mt-6 text-mojo-mute text-lg leading-relaxed max-w-xl">
              Premium streaming environments — the same shows your customers already watch — bought only in the zip codes you serve.
            </p>
          </div>
          <TVFrame>
            <div className="p-8 md:p-10 bg-mojo-cream">
              <ul className="space-y-5">
                {p.runsOn.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 items-start text-mojo-ink"
                  >
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
            </div>
          </TVFrame>
        </div>
      </section>

      {/* 5. PROOF STAT PLACEHOLDER */}
      <section className="border-b border-mojo-border">
        <div className="mx-auto max-w-6xl px-6 py-16 grid gap-10 md:grid-cols-3">
          {/* TODO: replace with verified campaign stats for this vertical */}
          {[
            { value: "TODO", label: "Lift in branded search" },
            { value: "TODO", label: "Households reached" },
            { value: "TODO", label: "Cost per booked call" },
          ].map((s) => (
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
      </section>

      {/* 6. GEO */}
      <section className="border-b border-mojo-border">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="max-w-3xl">
            <div className="text-xs uppercase tracking-[0.22em] text-mojo-clay-deep font-medium">
              Where we run
            </div>
            <h2 className="mt-4 font-display text-3xl md:text-5xl text-mojo-ink leading-[1.1]">
              Serving {p.metro} and beyond.
            </h2>
            <p className="mt-6 text-mojo-mute text-lg leading-relaxed">
              Targeting is zip-code precise. If your customers are there, your ad can be there.
            </p>
          </div>
          <ul className="mt-10 flex flex-wrap gap-2">
            {p.geoPills.map((city) => (
              <li
                key={city}
                className="rounded-full border border-mojo-border bg-mojo-cream-2 px-4 py-1.5 text-sm text-mojo-ink"
              >
                {city}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 7. FAQ */}
      <section className="border-b border-mojo-border">
        <div className="mx-auto max-w-3xl px-6 py-24">
          <div className="text-xs uppercase tracking-[0.22em] text-mojo-clay-deep font-medium">
            Questions
          </div>
          <h2 className="mt-4 font-display text-3xl md:text-5xl text-mojo-ink leading-[1.1]">
            The things you're about to ask.
          </h2>
          <Accordion type="single" collapsible className="mt-10">
            {p.faqs.map((f, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="border-mojo-border"
              >
                <AccordionTrigger className="font-display text-lg md:text-xl text-mojo-ink py-6 hover:no-underline">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-mojo-ink/85 text-base leading-relaxed pb-6">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* 8. CTA */}
      <CTABand />
    </PageShell>
  );
}

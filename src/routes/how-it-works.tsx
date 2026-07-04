import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/mojo/PageShell";
import { CTABand } from "@/components/mojo/CTABand";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { pageHead, faqJsonLd } from "@/lib/seo";

export const Route = createFileRoute("/how-it-works")({
  head: () =>
    pageHead({
      path: "/how-it-works",
      title: "How it works — Mojo streaming TV advertising",
      description:
        "Five steps from first call to on-screen: strategy, in-house production, transparent buy, launch within 30 days, and monthly reporting that respects you.",
      jsonLd: [faqJsonLd(faqs)],
    }),
  component: HowItWorksPage,
});

const timeline = [
  {
    n: "01",
    title: "Strategy call",
    body:
      "We talk goals, market, and budget. If TV isn't the right next dollar for you, we'll say so — plainly, on the call.",
  },
  {
    n: "02",
    title: "We produce your spot",
    body:
      "Scripted, shot, and edited in-house. Broadcast quality. Usually two to three weeks. Included in your program — not a separate line item.",
  },
  {
    n: "03",
    title: "We build the buy",
    body:
      "Live sports and premium streaming apps, in the zip codes you actually serve. Transparent fees. No station kickbacks, no forced linear bundles.",
  },
  {
    n: "04",
    title: "Launch",
    body:
      "Your ad is on TV. Most programs are live within 30 days of kickoff — sometimes faster once creative is approved.",
  },
  {
    n: "05",
    title: "Reporting that respects you",
    body:
      "Calls, site visits, and brand-search lift — reviewed together every month. Results compound around day 90, and we'll tell you that up front instead of after.",
  },
];

const monthOne = [
  "Kickoff call and creative brief signed",
  "Script drafted, revised, and approved",
  "Production day scheduled (usually week two)",
  "Media plan built with zip-code map and fee breakdown",
  "Creative delivered for final sign-off",
  "Campaign live on streaming, first pacing report inside 10 days",
];

const faqs = [
  {
    q: "How long is a Mojo program?",
    a: "Six months. That's not a sales tactic — streaming TV needs time for frequency to build and for brand-search lift to show up in the data. Under six months we can't honestly promise you a clean read on what worked. Book a call if you want to talk through the timing.",
  },
  {
    q: "Do I have to bring my own creative?",
    a: "No. Production is included. We script, shoot, and edit your spot in-house at broadcast quality. If you already have creative you love, we'll use it.",
  },
  {
    q: "What does a program cost?",
    a: "Programs are built around your market and goals, not a rate card. On the call we'll tell you the honest floor for your zip codes and vertical, and what we'd actually recommend spending. If TV isn't the right lever for your budget, we'll say so.",
  },
  {
    q: "How fast can we be on TV?",
    a: "Most programs launch within 30 days of the kickoff call. The gating item is almost always creative approval — once the spot is signed off, the buy goes live quickly.",
  },
  {
    q: "How will I know it's working?",
    a: "We track calls, site visits, and lift in branded search — the same signals you're already using for the rest of your marketing. Monthly review, plain-English report, no vanity impressions.",
  },
  {
    q: "What if my market changes mid-program?",
    a: "The buy is flexible. Zip codes, dayparts, and creative rotations can all be adjusted between months. If a sales event or seasonal push lands mid-flight, we'll re-weight the plan.",
  },
];

function HowItWorksPage() {
  return (
    <PageShell>
      {/* HERO */}
      <section className="border-b border-mojo-border">
        <div className="mx-auto max-w-6xl px-6 pt-20 pb-16 md:pt-28 md:pb-24">
          <div className="max-w-3xl mojo-fade-up">
            <div className="text-xs uppercase tracking-[0.22em] text-mojo-clay font-medium">
              How it works
            </div>
            <h1 className="mt-5 font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] text-mojo-ink">
              TV advertising, minus the mystery.
            </h1>
            <p className="mt-6 text-lg text-mojo-mute max-w-2xl leading-relaxed">
              Five steps, in plain English. What we do, when we do it, and what you'll see back.
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

      {/* TIMELINE */}
      <section className="border-b border-mojo-border">
        <div className="mx-auto max-w-4xl px-6 py-24">
          <div className="text-xs uppercase tracking-[0.22em] text-mojo-clay font-medium">
            The process
          </div>
          <h2 className="mt-4 font-display text-3xl md:text-5xl text-mojo-ink leading-[1.1]">
            From first call to on-screen.
          </h2>

          <ol className="mt-14 relative">
            {/* vertical line */}
            <div
              className="absolute left-6 top-2 bottom-2 w-px"
              style={{ background: "var(--mojo-border)" }}
              aria-hidden="true"
            />
            {timeline.map((s) => (
              <li key={s.n} className="relative pl-20 pb-12 last:pb-0">
                <div
                  className="absolute left-0 top-0 h-12 w-12 rounded-full flex items-center justify-center bg-mojo-cream"
                  style={{ border: "1.5px solid var(--mojo-clay)" }}
                >
                  <span className="font-display text-mojo-clay text-lg">
                    {s.n}
                  </span>
                </div>
                <h3 className="font-display text-2xl md:text-3xl text-mojo-ink leading-tight">
                  {s.title}
                </h3>
                <p className="mt-3 text-mojo-ink/85 text-base md:text-lg leading-relaxed max-w-2xl">
                  {s.body}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* MONTH ONE CHECKLIST */}
      <section className="bg-mojo-cream-2 border-b border-mojo-border">
        <div className="mx-auto max-w-4xl px-6 py-24">
          <div className="text-xs uppercase tracking-[0.22em] text-mojo-clay font-medium">
            Onboarding
          </div>
          <h2 className="mt-4 font-display text-3xl md:text-5xl text-mojo-ink leading-[1.1]">
            What to expect in month one.
          </h2>
          <ul className="mt-10 space-y-4">
            {monthOne.map((item) => (
              <li key={item} className="flex gap-4 items-start text-mojo-ink">
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
                <span className="leading-relaxed text-base md:text-lg">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-b border-mojo-border">
        <div className="mx-auto max-w-3xl px-6 py-24">
          <div className="text-xs uppercase tracking-[0.22em] text-mojo-clay font-medium">
            Questions
          </div>
          <h2 className="mt-4 font-display text-3xl md:text-5xl text-mojo-ink leading-[1.1]">
            The things you're about to ask.
          </h2>
          <Accordion type="single" collapsible className="mt-10">
            {faqs.map((f, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="border-mojo-border"
              >
                <AccordionTrigger className="font-display text-lg md:text-xl text-mojo-ink py-6 hover:no-underline text-left">
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

      <CTABand />
    </PageShell>
  );
}

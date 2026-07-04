import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/mojo/PageShell";
import { CTABand } from "@/components/mojo/CTABand";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { pageHead, faqJsonLd, serviceJsonLd } from "@/lib/seo";

const PATH = "/who-we-serve/political-advocacy";
const TITLE = "Political & Advocacy CTV Advertising | Mojo";
const DESCRIPTION =
  "Streaming TV advertising for political campaigns, PACs, and advocacy organizations. Voter-file matched CTV, rapid creative turnaround, and compliance-aware trafficking.";

export const Route = createFileRoute("/who-we-serve/political-advocacy")({
  head: () =>
    pageHead({
      path: PATH,
      title: TITLE,
      description: DESCRIPTION,
      jsonLd: [
        serviceJsonLd({
          name: "Political & advocacy streaming TV advertising",
          description: DESCRIPTION,
          path: PATH,
          serviceType: "Political and advocacy CTV advertising",
        }),
        faqJsonLd(faqs),
      ],
    }),
  component: PoliticalAdvocacyPage,
});

const capabilities = [
  {
    title: "Voter-file matched targeting",
    body: "We match your voter file or donor list to connected-TV households. That means your ad reaches registered voters and likely donors where they actually watch — on the big screen in the living room.",
  },
  {
    title: "IE and coordinated-side experience",
    body: "We have run both independent-expenditure and coordinated campaigns. We understand the firewalls, reporting requirements, and pacing discipline each side demands.",
  },
  {
    title: "Rapid creative turnaround",
    body: "News cycles do not wait. Our in-house studio produces broadcast-quality spots in days, not months, with revisions fast enough to react while the moment is still relevant.",
  },
  {
    title: "Compliance-aware trafficking",
    body: "Political ads carry disclaimer rules, platform policies, and calendar deadlines. We build compliance into the workflow from day one so your spot clears and launches on time.",
  },
];

const faqs = [
  {
    q: "What is the minimum timeline to launch a political streaming TV campaign?",
    a: "Most programs need two to three weeks from strategy call to first impression. That covers creative production, platform approvals, and trafficking. If your election date is fixed, book a call and we will tell you honestly what is still possible.",
  },
  {
    q: "How do political disclaimers work on streaming TV?",
    a: "We build the paid-for disclaimer into the creative during production and confirm the wording with your counsel before trafficking. Platform compliance is handled as part of setup, not an afterthought. If you want us to review your existing disclaimer language, book a call.",
  },
  {
    q: "Can you target by congressional or state legislative district?",
    a: "Yes. We map district boundaries onto CTV geography using zip-code and market-area combinations. The match is precise enough for media planning and well within standard practice. For a targeting map of your specific district, book a call.",
  },
  {
    q: "What data sources do you use for voter-file matching?",
    a: "We partner with established voter-file providers and CTV platforms that match registered-voter lists to streaming households. We use the same verified sources national campaigns rely on. If you want to discuss match rates for your race, book a call.",
  },
  {
    q: "How fast can you launch a new flight during an active election cycle?",
    a: "With approved creative, we have launched in under a week. Starting from scratch, two to three weeks is the honest standard. We will not promise what we cannot deliver. If you need an in-cycle launch, book a call for a straight timeline.",
  },
];

function PoliticalAdvocacyPage() {
  return (
    <PageShell>
      {/* 1. HERO */}
      <section className="border-b border-mojo-border">
        <div className="mx-auto max-w-6xl px-6 pt-20 pb-16 md:pt-28 md:pb-24">
          <div className="max-w-3xl mojo-fade-up">
            <div className="text-xs uppercase tracking-[0.22em] text-mojo-clay-deep font-medium">
              Political & advocacy
            </div>
            <h1 className="mt-5 font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] text-mojo-ink">
              Streaming TV for campaigns and causes.
            </h1>
            <p className="mt-6 text-lg text-mojo-mute max-w-2xl leading-relaxed">
              Voter-file-matched CTV, rapid-turn creative, and buying discipline from a team that has delivered for congressional campaigns and national advocacy organizations.
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

      {/* 2. CAPABILITIES */}
      <section className="border-b border-mojo-border">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="max-w-2xl">
            <div className="text-xs uppercase tracking-[0.22em] text-mojo-clay-deep font-medium">
              Capabilities
            </div>
            <h2 className="mt-4 font-display text-3xl md:text-5xl text-mojo-ink leading-[1.1]">
              Built for high-stakes, high-speed work.
            </h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {capabilities.map((c) => (
              <div
                key={c.title}
                className="rounded-xl bg-mojo-cream-2 border border-mojo-border p-8"
              >
                <h3 className="font-display text-2xl text-mojo-ink">
                  {c.title}
                </h3>
                <p className="mt-3 text-mojo-mute leading-relaxed">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. CASE STUDIES — TODO-PERMISSION */}
      <section className="bg-mojo-cream-2 border-b border-mojo-border">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="max-w-2xl">
            <div className="text-xs uppercase tracking-[0.22em] text-mojo-clay-deep font-medium">
              Case studies
            </div>
            <h2 className="mt-4 font-display text-3xl md:text-5xl text-mojo-ink leading-[1.1]">
              Recent work.
            </h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <div className="rounded-xl bg-mojo-cream border border-mojo-border p-8">
              <div className="text-xs uppercase tracking-[0.22em] text-mojo-clay-deep font-medium">
                TODO-PERMISSION
              </div>
              <h3 className="mt-3 font-display text-2xl text-mojo-ink">
                Case study placeholder
              </h3>
              <p className="mt-3 text-mojo-mute leading-relaxed">
                Details will be added here once written permission from the client or campaign is confirmed. This card is a reserved placeholder.
              </p>
            </div>
            <div className="rounded-xl bg-mojo-cream border border-mojo-border p-8">
              <div className="text-xs uppercase tracking-[0.22em] text-mojo-clay-deep font-medium">
                TODO-PERMISSION
              </div>
              <h3 className="mt-3 font-display text-2xl text-mojo-ink">
                Case study placeholder
              </h3>
              <p className="mt-3 text-mojo-mute leading-relaxed">
                Details will be added here once written permission from the client or campaign is confirmed. This card is a reserved placeholder.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. MARKET CONTEXT STAT */}
      <section className="border-b border-mojo-border">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="max-w-3xl">
            <div className="text-xs uppercase tracking-[0.22em] text-mojo-clay-deep font-medium">
              Market context
            </div>
            <h2 className="mt-4 font-display text-3xl md:text-5xl text-mojo-ink leading-[1.1]">
              Streaming is where persuadable viewers are.
            </h2>
            <p className="mt-6 text-mojo-mute text-lg leading-relaxed max-w-xl">
              Voters who have left traditional broadcast are not unreachable — they have shifted to streaming. The question is whether your message meets them on the screen they are actually watching.
            </p>
          </div>
          <div className="mt-14 grid gap-10 sm:grid-cols-3">
            {[
              { value: "TODO", label: "Streaming households in target states" },
              { value: "TODO", label: "Voter-file match rate" },
              { value: "TODO", label: "Average persuadable-reach lift" },
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
        </div>
      </section>

      {/* 5. FAQ */}
      <section className="border-b border-mojo-border">
        <div className="mx-auto max-w-3xl px-6 py-24">
          <div className="text-xs uppercase tracking-[0.22em] text-mojo-clay-deep font-medium">
            Questions
          </div>
          <h2 className="mt-4 font-display text-3xl md:text-5xl text-mojo-ink leading-[1.1]">
            The things you are about to ask.
          </h2>
          <Accordion type="single" collapsible className="mt-10">
            {faqs.map((f, i) => (
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

      <CTABand
        headline="Put your message on the big screen."
        subhead="A short call, a plain-English plan, and a spot on the biggest screens your voters watch."
      />
    </PageShell>
  );
}

import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/mojo/PageShell";
import { CTABand } from "@/components/mojo/CTABand";
import { TVFrame } from "@/components/mojo/TVFrame";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () =>
    pageHead({
      path: "/",
      title: "Mojo — Streaming TV advertising for mid-market businesses",
      description:
        "Your ad on live sports and premium streaming shows — shown only to the households you choose, measured like the rest of your marketing.",
    }),
  component: HomePage,
});

// TODO: replace placeholder stats with verified numbers before launch.
const stats = [
  { value: "10M+", label: "Households reached" },
  { value: "48", label: "National campaigns delivered" },
  { value: "100%", label: "Creative produced in-house" },
];

const steps = [
  {
    n: "01",
    title: "We make your spot",
    body:
      "Our crew writes the script, shoots on your site, and cuts the final at broadcast quality. Production is baked into the program, so there's no separate invoice waiting after launch.",
  },
  {
    n: "02",
    title: "We put it on TV",
    body:
      "The buy runs during live sports and the streaming apps people already pay for — targeted down to the zip codes you actually cover. Households outside your service map never see it.",
  },
  {
    n: "03",
    title: "We show you what happened",
    body:
      "The phone ringing. Walk-ins on Saturday. Branded search climbing week over week — all of it tied back to the flights that ran. Not vanity impressions.",
  },
];

const industries = [
  {
    to: "/industries/home-services",
    title: "Home services",
    hook: "Own the game in your service area.",
  },
  {
    to: "/industries/legal",
    title: "Legal",
    hook: "Be the firm people already recognize.",
  },
  {
    to: "/industries/healthcare",
    title: "Healthcare",
    hook: "Reach patients where they actually watch.",
  },
  {
    to: "/industries/auto-dealers",
    title: "Auto dealers",
    hook: "Move inventory with local TV, not local rates.",
  },
] as const;

const independent = {
  them: [
    "Sells you their own channels",
    "Bundles inventory they need to move",
    "Opaque fees and station-side incentives",
    "Pushes forced linear packages",
  ],
  us: [
    "Buys the right inventory for your goal",
    "Works only for you",
    "Transparent fees; no station kickbacks",
    "Streaming-first with no linear obligation",
  ],
};

function HomePage() {
  return (
    <PageShell>
      {/* 1. HERO */}
      <section className="border-b border-mojo-border">
        <div className="mx-auto max-w-6xl px-6 pt-20 pb-16 md:pt-28 md:pb-24">
          <div className="max-w-3xl mojo-fade-up">
            <div className="text-xs uppercase tracking-[0.22em] text-mojo-clay-deep font-medium">
              Streaming TV advertising
            </div>
            <h1 className="mt-5 font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] text-mojo-ink">
              Remember when TV advertising meant a $50,000 handshake?
            </h1>
            <p className="mt-6 text-lg text-mojo-mute max-w-2xl leading-relaxed">
              It doesn't anymore. Your commercial runs during the football game your neighbor is watching after dinner, shown only in the zip codes you draw customers from, and tied back to the phone that rings on Monday morning. That's the whole pitch.
            </p>
            {/* TODO-WARSTORY: a real one-sentence example the founder can stand behind — e.g., a specific Michigan zip cluster where a home-services client saw first-call volume move inside 60 days. */}
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center rounded-md bg-mojo-clay px-6 py-3 text-sm font-medium text-mojo-cream hover:bg-mojo-clay-deep transition-colors"
              >
                Book a call
              </Link>
              <Link
                to="/how-it-works"
                className="inline-flex items-center rounded-md border border-mojo-border bg-mojo-cream px-6 py-3 text-sm font-medium text-mojo-ink hover:bg-mojo-cream-2 transition-colors"
              >
                How it works
              </Link>
            </div>
          </div>

          <div className="mt-14 md:mt-20 max-w-4xl mx-auto">
            <TVFrame>
              <div className="aspect-video w-full bg-mojo-sand/60 flex items-center justify-center">
                {/* Video placeholder — replace with <video autoPlay muted playsInline poster="..."> */}
                <div className="text-center">
                  <div className="font-display text-2xl md:text-3xl text-mojo-ink">
                    Your spot, here.
                  </div>
                  <div className="mt-2 text-sm text-mojo-mute">
                    16:9 reel placeholder — muted autoplay when video is added.
                  </div>
                </div>
              </div>
            </TVFrame>
          </div>
        </div>
      </section>

      {/* 2. PROOF BAND */}
      <section className="border-b border-mojo-border">
        <div className="mx-auto max-w-6xl px-6 py-16 grid gap-10 md:grid-cols-3">
          {stats.map((s) => (
            <div key={s.label} className="text-left">
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

      {/* 3. THE SHIFT */}
      <section className="border-b border-mojo-border">
        <div className="mx-auto max-w-6xl px-6 py-24 grid gap-12 md:grid-cols-2 md:gap-20">
          <div>
            <div className="text-xs uppercase tracking-[0.22em] text-mojo-clay-deep font-medium">
              The shift
            </div>
            <h2 className="mt-4 font-display text-3xl md:text-5xl text-mojo-ink leading-[1.1]">
              Your customers cut the cord. Your ads should follow.
            </h2>
          </div>
          <div className="space-y-5 text-mojo-ink/85 text-base md:text-lg leading-relaxed">
            <p>
              Streaming is now the majority of TV time. The living-room screen is bigger than ever — it just doesn't get its programming from a cable box anymore.
            </p>
            <p>
              Ad-supported streaming changed the math. Local businesses can finally buy the big screen without broadcast budgets, and only in the neighborhoods they actually serve.
            </p>
          </div>
        </div>
      </section>

      {/* 4. HOW IT WORKS */}
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
            {steps.map((s) => (
              <div
                key={s.n}
                className="rounded-xl bg-mojo-cream-2 border border-mojo-border p-8"
              >
                <div className="font-display text-mojo-clay text-2xl">{s.n}</div>
                <h3 className="mt-4 font-display text-2xl text-mojo-ink">{s.title}</h3>
                <p className="mt-3 text-mojo-mute leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <Link
              to="/how-it-works"
              className="text-sm font-medium text-mojo-clay hover:text-mojo-clay-deep"
            >
              See the full process →
            </Link>
          </div>
        </div>
      </section>

      {/* 5. LIVE SPORTS HOOK */}
      <section className="bg-mojo-cream-2 border-b border-mojo-border">
        <div className="mx-auto max-w-6xl px-6 py-24 grid gap-12 md:grid-cols-2 items-center">
          <div>
            <div className="text-xs uppercase tracking-[0.22em] text-mojo-clay-deep font-medium">
              Live sports
            </div>
            <h2 className="mt-4 font-display text-4xl md:text-6xl text-mojo-ink leading-[1.05]">
              Yes — during the game.
            </h2>
            <p className="mt-6 text-lg text-mojo-ink/85 leading-relaxed max-w-xl">
              Live sports on streaming TV used to be untouchable for local budgets. Now your ad can run during the games your customers watch, in your market, at a fraction of old broadcast costs.
            </p>
            <p className="mt-4 text-xs text-mojo-mute">
              Availability varies by season and platform.
            </p>
          </div>

          {/* Stylized couch + stadium line art — no logos, no league marks */}
          <div className="flex justify-center">
            <svg
              viewBox="0 0 400 280"
              className="w-full max-w-md"
              fill="none"
              stroke="var(--mojo-clay)"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              {/* Stadium arc */}
              <path d="M40 90 Q200 20 360 90" />
              <path d="M60 100 Q200 40 340 100" opacity="0.5" />
              {/* Field */}
              <ellipse cx="200" cy="140" rx="150" ry="30" />
              <line x1="200" y1="110" x2="200" y2="170" opacity="0.5" />
              {/* Couch */}
              <rect x="80" y="200" width="240" height="55" rx="10" />
              <line x1="80" y1="220" x2="320" y2="220" />
              <line x1="200" y1="220" x2="200" y2="255" />
              {/* Couch legs */}
              <line x1="95" y1="255" x2="95" y2="268" />
              <line x1="305" y1="255" x2="305" y2="268" />
              {/* Little TV on floor left */}
              <rect x="20" y="230" width="40" height="26" rx="3" />
              <line x1="30" y1="260" x2="50" y2="260" />
            </svg>
          </div>
        </div>
      </section>

      {/* 6. INDEPENDENT BUYER */}
      <section className="border-b border-mojo-border">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="max-w-3xl">
            <div className="text-xs uppercase tracking-[0.22em] text-mojo-clay-deep font-medium">
              Independent
            </div>
            <h2 className="mt-4 font-display text-3xl md:text-5xl text-mojo-ink leading-[1.1]">
              We don't sell you our inventory. We buy you the right inventory.
            </h2>
            <p className="mt-6 text-mojo-mute text-lg leading-relaxed">
              Most TV sellers are tied to a station or a network — they win when they move their own bundle. We work the other way around.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <ComparisonCard
              label="Station-affiliated seller"
              tone="mute"
              items={independent.them}
            />
            <ComparisonCard
              label="Mojo — independent buyer"
              tone="clay"
              items={independent.us}
            />
          </div>
        </div>
      </section>

      {/* 7. WHO WE SERVE */}
      <section className="border-b border-mojo-border">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="max-w-2xl">
            <div className="text-xs uppercase tracking-[0.22em] text-mojo-clay-deep font-medium">
              Who we serve
            </div>
            <h2 className="mt-4 font-display text-3xl md:text-5xl text-mojo-ink leading-[1.1]">
              Built for mid-market. Priced like it.
            </h2>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {industries.map((i) => (
              <Link
                key={i.to}
                to={i.to}
                className="group rounded-xl bg-mojo-cream border border-mojo-border p-6 hover:bg-mojo-cream-2 transition-colors"
              >
                <div className="font-display text-2xl text-mojo-ink">{i.title}</div>
                <p className="mt-3 text-sm text-mojo-mute leading-relaxed">{i.hook}</p>
                <div className="mt-5 text-sm font-medium text-mojo-clay group-hover:text-mojo-clay-deep">
                  See how →
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-8 text-sm text-mojo-mute">
            Also serving{" "}
            <Link
              to="/who-we-serve/political-advocacy"
              className="text-mojo-ink underline underline-offset-4 decoration-mojo-border hover:decoration-mojo-clay"
            >
              political & advocacy campaigns
            </Link>
            .
          </div>
        </div>
      </section>

      {/* 8. CTA BAND */}
      <CTABand />
    </PageShell>
  );
}

function ComparisonCard({
  label,
  tone,
  items,
}: {
  label: string;
  tone: "mute" | "clay";
  items: readonly string[];
}) {
  const isClay = tone === "clay";
  return (
    <div
      className={`rounded-xl border p-8 ${
        isClay
          ? "bg-mojo-cream border-mojo-clay"
          : "bg-mojo-cream-2 border-mojo-border"
      }`}
    >
      <div
        className={`text-xs uppercase tracking-[0.22em] font-medium ${
          isClay ? "text-mojo-clay" : "text-mojo-mute"
        }`}
      >
        {label}
      </div>
      <ul className="mt-6 space-y-4">
        {items.map((t) => (
          <li key={t} className="flex gap-3 items-start text-mojo-ink">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              stroke={isClay ? "var(--mojo-clay)" : "var(--mojo-mute)"}
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mt-1 shrink-0"
              aria-hidden="true"
            >
              {isClay ? (
                <path d="M4 10.5l4 4 8-9" />
              ) : (
                <>
                  <path d="M5 5l10 10" />
                  <path d="M15 5L5 15" />
                </>
              )}
            </svg>
            <span className="leading-relaxed">{t}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

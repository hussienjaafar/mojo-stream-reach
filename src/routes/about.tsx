import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/mojo/PageShell";
import { CTABand } from "@/components/mojo/CTABand";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/about")({
  head: () =>
    pageHead({
      path: "/about",
      title: "About Mojo — Political-media discipline for Michigan businesses",
      description:
        "Founded on the discipline of political and advocacy media, Mojo brings a national streaming TV track record — and an in-house creative studio — to Michigan businesses.",
    }),
  component: AboutPage,
});

const values = [
  {
    title: "Transparent fees",
    body:
      "You see the media cost, the production cost, and our fee. No station-side kickbacks. No bundled markup buried in a plan.",
  },
  {
    title: "Creative included",
    body:
      "Broadcast-quality production is part of the program, not an upsell. Scripted, shot, and edited by our in-house team.",
  },
  {
    title: "Honest measurement",
    body:
      "Calls, visits, and brand-search lift — the numbers that actually move a business. Reviewed together every month, in plain English.",
  },
];

function AboutPage() {
  return (
    <PageShell>
      {/* HERO */}
      <section className="border-b border-mojo-border">
        <div className="mx-auto max-w-6xl px-6 pt-20 pb-16 md:pt-28 md:pb-24">
          <div className="max-w-3xl mojo-fade-up">
            <div className="text-xs uppercase tracking-[0.22em] text-mojo-clay font-medium">
              About Mojo
            </div>
            <h1 className="mt-5 font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] text-mojo-ink">
              The discipline of political media. Working for your business.
            </h1>
          </div>
        </div>
      </section>

      {/* FOUNDER NARRATIVE */}
      <section className="border-b border-mojo-border">
        <div className="mx-auto max-w-6xl px-6 py-24 grid gap-12 md:grid-cols-5 md:gap-16 items-start">
          {/* Photo placeholder */}
          <div className="md:col-span-2">
            <div
              className="aspect-[4/5] w-full rounded-2xl bg-mojo-cream-2 flex items-center justify-center"
              style={{ border: "1.5px solid var(--mojo-clay)" }}
            >
              <div className="text-center px-6">
                <div className="font-display text-2xl text-mojo-ink">
                  Founder photo
                </div>
                <div className="mt-2 text-sm text-mojo-mute">
                  4:5 portrait placeholder
                </div>
              </div>
            </div>
          </div>

          {/* Narrative */}
          <div className="md:col-span-3 space-y-8 text-mojo-ink/85 text-base md:text-lg leading-relaxed">
            <div>
              <div className="text-xs uppercase tracking-[0.22em] text-mojo-clay font-medium">
                Where we come from
              </div>
              <p className="mt-4">
                Mojo was built in political and advocacy media — where budgets are unforgiving, deadlines are absolute, and there is no rescheduling election day. You either hit the market on time, on target, and on message, or you lose. That environment teaches you what "good enough" isn't.
              </p>
            </div>

            <div>
              <div className="text-xs uppercase tracking-[0.22em] text-mojo-clay font-medium">
                What we did there
              </div>
              <p className="mt-4">
                We ran national streaming TV campaigns across dozens of media markets, with weekly creative rotations and daily pacing reviews. The work required transparent reporting to serious clients and creative fast enough to react to the news cycle. It's the same operating discipline we bring here.
              </p>
            </div>

            <div>
              <div className="text-xs uppercase tracking-[0.22em] text-mojo-clay font-medium">
                Why Mojo, why now
              </div>
              <p className="mt-4">
                Streaming finally made the big screen affordable for local businesses — but the buying landscape is still a mess of station reps, bundled inventory, and creative bills that arrive separately. So we brought the political-media playbook — and an in-house creative studio — home to Michigan businesses. Same discipline. Different scoreboard.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="border-b border-mojo-border">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="max-w-2xl">
            <div className="text-xs uppercase tracking-[0.22em] text-mojo-clay font-medium">
              What we stand for
            </div>
            <h2 className="mt-4 font-display text-3xl md:text-5xl text-mojo-ink leading-[1.1]">
              Three things we don't compromise on.
            </h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {values.map((v) => (
              <div
                key={v.title}
                className="rounded-xl bg-mojo-cream-2 border border-mojo-border p-8"
              >
                <h3 className="font-display text-2xl text-mojo-ink">
                  {v.title}
                </h3>
                <p className="mt-3 text-mojo-mute leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </PageShell>
  );
}

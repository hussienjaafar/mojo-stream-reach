import type { ReactNode } from "react";
import { blogPosts, type BlogPostMeta } from "./blog-posts";

type PostContent = {
  meta: BlogPostMeta;
  seoTitle: string;
  seoDescription: string;
  body: ReactNode;
};

const H2 = ({ children }: { children: ReactNode }) => (
  <h2 className="font-display text-2xl md:text-3xl text-mojo-ink mt-14 mb-4 leading-tight">
    {children}
  </h2>
);
const P = ({ children }: { children: ReactNode }) => (
  <p className="mb-5">{children}</p>
);
const Lead = ({ children }: { children: ReactNode }) => (
  <p className="mb-8 text-xl leading-[1.55] text-mojo-ink">{children}</p>
);
const UL = ({ children }: { children: ReactNode }) => (
  <ul className="mb-6 space-y-2 list-disc pl-6 marker:text-mojo-clay">
    {children}
  </ul>
);

const byslug = Object.fromEntries(blogPosts.map((p) => [p.slug, p]));

const posts: Record<string, PostContent> = {
  "what-does-streaming-tv-advertising-cost": {
    meta: byslug["what-does-streaming-tv-advertising-cost"],
    seoTitle: "What does streaming TV advertising cost? | Mojo",
    seoDescription:
      "A plain-English guide to streaming TV ad costs — CPM ranges, the fee stack most buyers hide, and what actually drives price for a mid-market business.",
    body: (
      <>
        <Lead>
          The honest answer is: it depends — and any agency that quotes you a
          number before asking about your market, your zip codes, and your goals
          is either guessing or hiding fees. Here's how streaming TV pricing
          actually works, in plain English.
        </Lead>

        <H2>What is a CPM, and what should mine be?</H2>
        <P>
          CPM means cost per thousand impressions — the price to show your ad
          to one thousand households. On streaming TV, working CPMs for
          mid-market advertisers typically land between $25 and $55. Live sports
          sit at the top of that range. General-entertainment streaming apps
          sit lower. Highly targeted inventory — a specific zip cluster during a
          specific game — costs more than a broad national buy, because you're
          asking for a smaller, more valuable slice.
        </P>
        <P>
          A $35 CPM sounds abstract until you translate it. $10,000 of media at
          a $35 CPM is about 285,000 impressions. In a mid-sized Michigan
          market, that's enough frequency in your target zip codes to move the
          needle on brand-search and inbound calls over a 90-day flight.
        </P>

        <H2>What is the fee stack, and why does it matter?</H2>
        <P>
          The number on your invoice is rarely the number the TV app receives.
          Between you and the ad slot are usually four to six layers, each
          taking a cut:
        </P>
        <UL>
          <li>Your agency or reseller fee (often 15–25%).</li>
          <li>The demand-side platform (DSP) tech fee (5–15%).</li>
          <li>Data and targeting fees for audience segments (3–10%).</li>
          <li>Verification and measurement partners (2–5%).</li>
          <li>The supply-side platform (SSP) fee on the publisher side.</li>
          <li>The publisher's own take, before the CPM you actually paid.</li>
        </UL>
        <P>
          Stack all of that and it's common for 40–60% of your budget to be
          absorbed before an ad ever renders on a TV. That's the "tech tax"
          nobody wants to talk about. It's not evil — every layer does
          something — but if no one shows you the stack, you can't judge
          whether you're getting value.
        </P>

        <H2>What drives the number up or down?</H2>
        <P>
          Four things move price more than anything else. Geography: tight
          targeting to a handful of zips costs more per impression than a
          county-wide buy. Inventory: live NFL is not the same product as a
          late-night rerun on a free-with-ads streaming app. Season: fourth
          quarter is expensive because every retailer in America wants the same
          audience. Creative length: 30-second spots cost more than 15s, and
          the difference is not always worth it.
        </P>

        <H2>What should a real program cost?</H2>
        <P>
          For a mid-market business in Michigan, a serious streaming TV program
          usually starts around $6,000–$10,000 per month in working media, plus
          a transparent management fee. Under that, you can't build enough
          frequency in your zip codes to see brand-search lift. Above it, you
          scale by adding markets, dayparts, or sports adjacencies — not by
          spraying the same audience harder.
        </P>

        <H2>Why transparent fees matter</H2>
        <P>
          If your agency won't itemize the fee stack, you're not being told
          what's actually happening to your money. That's the whole reason we
          quote our management fee separately from working media, show you the
          zip-code map, and put the tech and data fees on the same page as the
          CPM. It's your budget. You should see where every dollar goes.
        </P>
        <P>
          Want a real number for your market? <a className="text-mojo-clay underline underline-offset-4 hover:text-mojo-clay-deep" href="/free-audit">Book a free audit</a>{" "}
          and we'll build the fee-transparent version for your zip codes.
        </P>
      </>
    ),
  },

  "what-self-serve-tv-ad-platforms-dont-tell-you": {
    meta: byslug["what-self-serve-tv-ad-platforms-dont-tell-you"],
    seoTitle: "What self-serve TV ad platforms don't tell you | Mojo",
    seoDescription:
      "Self-serve streaming TV ad platforms look simple. Here's what they leave off the landing page — curation, fee opacity, creative burden, and measurement setup.",
    body: (
      <>
        <Lead>
          The self-serve dashboards are impressive. Log in, upload a video,
          pick an audience, launch. If it feels a little too easy, that's
          because the hard parts have been quietly outsourced to you. Here's
          the honest version of what you're signing up for.
        </Lead>

        <H2>The inventory is not what you think</H2>
        <P>
          The pitch usually implies you're buying "Hulu" or "premium streaming."
          The reality is a mixed bag: some premium apps, plenty of long-tail
          free-with-ads services, and a lot of app inventory you've never heard
          of. Without a human curating what runs where, your spot can end up
          against content that doesn't match your brand — and there's no
          easy toggle on a self-serve dashboard to fix it after the fact.
        </P>

        <H2>The fees are real, they're just not on the invoice</H2>
        <P>
          Self-serve platforms often advertise "no management fee." That is
          true and misleading at the same time. The platform still takes a
          margin — it's just baked into the CPM instead of listed as a line
          item. You can't tell whether you paid $30 or $52 to reach a thousand
          households, because the working portion isn't disclosed. If you
          can't see the fee, you can't negotiate it, and you can't compare it.
        </P>

        <H2>You are now the creative department</H2>
        <P>
          Great streaming TV creative — a 30-second spot that actually
          converts on the big screen — is a real production. Script, talent,
          location, lighting, sound, edit, color, captions, and a version
          library for different flights. Self-serve platforms will happily
          let you upload the phone-shot video you have. They will not tell
          you that most of them are why the campaign underperformed.
        </P>
        <P>
          If you're going to spend real money on the media, the creative is
          not the place to save. This is why we include broadcast-quality
          production in every Mojo program — the creative and the buy have to
          come from the same conversation, or neither one works.
        </P>

        <H2>Measurement is a project, not a checkbox</H2>
        <P>
          Impression counts are easy to produce. Impression counts don't run
          your business. What you actually need is a read on incremental
          calls, site visits from your target zips, and lift in branded
          search. Setting that up means UTM discipline, call tracking on
          landing pages, and a baseline period before the campaign starts.
          The self-serve dashboard will not do any of that for you.
        </P>
        <P>
          When someone tells you their platform "proves ROAS," ask how the
          incrementality was measured. If the answer is "our attribution
          model," you have a modelled number, not a measured one. Both have
          a place — but they are not the same thing.
        </P>

        <H2>When self-serve is fine, and when it's not</H2>
        <P>
          If you have a strong in-house creative team, a media analyst who
          lives in dashboards, and a budget you're comfortable spending as
          tuition, self-serve platforms are a reasonable place to learn. If
          you're a mid-market operator whose day is running your business,
          self-serve is a slow way to spend real money on the wrong
          impressions.
        </P>
        <P>
          Not sure which one you are? <a className="text-mojo-clay underline underline-offset-4 hover:text-mojo-clay-deep" href="/free-audit">Send us your current plan</a>{" "}
          and we'll give you an honest read — even if the honest read is
          "keep doing what you're doing."
        </P>
      </>
    ),
  },

  "should-you-take-the-tv-stations-streaming-offer": {
    meta: byslug["should-you-take-the-tv-stations-streaming-offer"],
    seoTitle:
      "The TV station offered us streaming ads. Should we take it? | Mojo",
    seoDescription:
      "Your local TV station's streaming offer is convenient — and it comes with real trade-offs. A plain-spoken guide for mid-market advertisers.",
    body: (
      <>
        <Lead>
          Your account rep at the station has always been good to you. They
          just pitched a streaming package on top of your usual buy, and it
          looks easy. Before you sign, here's what a fee-transparent
          independent buyer sees when they read that same proposal.
        </Lead>

        <H2>Stations are genuinely good at what they do</H2>
        <P>
          Local TV stations have real assets: live news, live sports rights,
          strong local relationships, and production teams that can turn
          around a spot fast. If you're buying broadcast, the station is
          often the right call. None of what follows is a knock on the
          people at your station.
        </P>

        <H2>The streaming package is usually not their strongest product</H2>
        <P>
          Station streaming offers are frequently packaged with linear buys,
          resold from a partner platform, or built on a limited inventory
          set the station has direct access to. That means:
        </P>
        <UL>
          <li>Targeting is often coarser than a dedicated CTV buy.</li>
          <li>Inventory is narrower — mostly the station's own OTT app plus a resold pool.</li>
          <li>The fee structure is bundled with linear, so the streaming CPM is hard to isolate.</li>
          <li>Reporting tends to be impression counts, not conversion-side signals.</li>
        </UL>

        <H2>The incentive is the important part</H2>
        <P>
          A station rep gets paid to sell station inventory. That's not a
          scandal — that's their job. But when you ask "should I add
          streaming?" the honest answer, for them, is almost always yes,
          because they have a streaming product to sell. An independent
          buyer with no ownership in any single publisher can tell you
          "yes, but not this one" or "not yet" without losing a commission.
        </P>

        <H2>When the station offer is the right answer</H2>
        <P>
          Take it when: you want incremental reach on the station's own OTT
          app, you're already spending meaningful linear dollars there and
          the streaming add is priced as a genuine bonus, or you have a
          local-news adjacency you specifically want to sponsor. In those
          cases the fit is real.
        </P>

        <H2>When to hold off</H2>
        <P>
          Hold off when: streaming is the majority of your intended TV
          budget, you want tight zip-code targeting across multiple premium
          apps, you need live-sports inventory beyond what the station
          carries, or you can't get a fee-transparent breakdown of the CPM
          for the streaming portion. Any one of those means the station
          package is probably not the right home for that dollar.
        </P>

        <H2>How to compare the two proposals fairly</H2>
        <P>
          Ask both the station and an independent buyer for the same four
          things: the list of apps and inventory their buy will run on, the
          zip codes and audience it will reach, the working CPM after fees,
          and how they will measure conversions — not impressions. Put the
          two side by side. The right answer usually becomes obvious in
          about ten minutes.
        </P>
        <P>
          Want an independent second opinion?{" "}
          <a className="text-mojo-clay underline underline-offset-4 hover:text-mojo-clay-deep" href="/free-audit">Book a free audit</a>{" "}
          and we'll read the proposal with you. If the station's offer is the
          right one, we'll tell you that too.
        </P>
      </>
    ),
  },
};

export function getPost(slug: string): PostContent | undefined {
  return posts[slug];
}

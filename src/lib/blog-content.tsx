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
          The honest answer is: it depends. Any agency that quotes you a firm number before asking about your market, your zip codes, and the goal you're actually trying to hit is either guessing or hiding something. Here is how streaming TV pricing works in plain English, with the fee stack drawn on the same page as the CPM.
        </Lead>

        {/* TODO-WARSTORY: a real CPM the founder can stand behind — e.g., "the last home-services flight we ran in metro Detroit cleared at $X on live-weekend inventory." */}

        <H2>What is a CPM, and what should mine be?</H2>
        <P>
          CPM means cost per thousand impressions. It's the price to show your commercial to one thousand households. For a mid-market advertiser on streaming, working CPMs generally land somewhere between $25 and $55. Live sports sit at the top of that range because everyone wants them at the same time. General-entertainment streaming apps sit lower. Highly targeted inventory — a specific zip cluster during a specific weekend game — costs more than a broad national buy, because you're asking for a smaller and more valuable slice.
        </P>
        <P>
          A $35 CPM stays abstract until you translate it. Ten thousand dollars of working media at that price is roughly 285,000 impressions. In a mid-sized Michigan market, that's enough frequency across your target zip codes to move branded search and inbound calls inside a ninety-day flight. That's the number a business owner can actually feel.
        </P>

        <H2>What is the fee stack, and why does it matter?</H2>
        <P>
          The number on your invoice is rarely the number the TV app on the other end actually receives. Between you and the ad slot are usually four to six layers, each one quietly taking a cut before the money reaches the screen:
        </P>
        <UL>
          <li>Your agency or reseller fee (often 15–25%).</li>
          <li>The demand-side platform tech fee (5–15%).</li>
          <li>Data and audience-segment fees (3–10%).</li>
          <li>Verification and measurement partners (2–5%).</li>
          <li>The supply-side platform fee on the publisher side.</li>
          <li>The publisher's own take, before the CPM you actually paid.</li>
        </UL>
        <P>
          Stack all of that and it's common for 40–60% of your budget to be absorbed before an ad ever renders on a television. That's the tech tax nobody wants to draw on the whiteboard. It isn't sinister — every layer does something — but if no one shows you the stack, you can't judge whether the layers are earning their keep.
        </P>

        <H2>What drives the number up or down?</H2>
        <P>
          Four things move the price more than anything else. Geography is the first: tight targeting to a handful of zip codes costs more per impression than a county-wide buy, because you're paying for precision. Inventory is the second: a live weekend game is not the same product as a late-night rerun on a free-with-ads streaming app. Season is the third: Q4 is expensive because every retailer in America is bidding on the same living rooms at the same time. Creative length rounds it out. Thirty-second spots cost more than fifteens, and the difference isn't always worth it depending on your goal.
        </P>

        <H2>What makes CPMs go up?</H2>
<P>
          Scarcity is the honest one-word answer. When a single live weekend game concentrates a huge chunk of a market's attention into a three-hour window, everyone who wants those living rooms bids for the same slots at the same time. Add competitive dayparts around holidays, add advertisers with fresh Q4 budgets, and CPMs climb. Narrow geo targeting compounds the effect, because a small target audience inside a hot inventory window is the most expensive combination on the board.
</P>
<P>
          What pulls the number down is the opposite: broad geography, ordinary weeknight inventory, and off-peak seasons. The same $10,000 flight can reach very different households depending on when you press go. A media plan built around your actual sales calendar will spend into the expensive windows only when they line up with your best selling moments — and skip them the rest of the year.
</P>

<H2>What does a good month one look like?</H2>
<P>
          A healthy first month has a rhythm to it. Week one is the kickoff call, the creative brief, and a script draft. Week two is production — usually a single day on your site. Week three is the final cut, sign-off, and the media plan itemized down to the zip-code map and every fee in the stack. By the end of week four, the campaign is live and the first pacing report is on your desk with plain-English notes attached.
</P>
<P>
          What you should not expect in month one is a full read on results. Brand-search lift and call-volume signal need frequency and a baseline period behind them. Anyone promising you a clean ROAS number after thirty days on TV is measuring correlations, not causes. The right expectation for the first month is a working campaign, honest pacing, and the reporting infrastructure ready for month two through month six to actually tell you something.
</P>

        <H2>What should a real program cost?</H2>
        <P>
          For a mid-market business in Michigan, a serious streaming TV program usually starts around $6,000 to $10,000 per month in working media, plus a transparent management fee. Below that, you can't build enough frequency across your zip codes to see brand-search actually lift. Above it, you scale by adding markets, dayparts, or live-sports adjacencies — not by spraying the same household harder and hoping something changes.
        </P>

        <H2>Why transparent fees matter</H2>
        <P>
          If your agency won't itemize the stack, you're not being told what's actually happening to your money. That's the whole reason we quote our management fee separately from working media, put the zip-code map in your hands, and list the tech and data fees on the same page as the CPM. It's your budget. You should be able to see where every dollar in it went.
        </P>
        <P>
          Want a real number for your specific market?{" "}
          <a className="text-mojo-clay underline underline-offset-4 hover:text-mojo-clay-deep" href="/free-audit">Book a free audit</a>{" "}
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
          The self-serve dashboards look great. Log in, upload a video, pick an audience, launch. If it feels a little too easy, that's because the hard parts have been quietly outsourced to you. Here is the honest version of what you're signing up for when you punch in a credit card.
        </Lead>

        {/* TODO-WARSTORY: a real example of an owner who ran a self-serve buy first — the platform, the CPM they thought they were paying, and what the actual working media turned out to be. */}

        <H2>The inventory is not what you think it is</H2>
        <P>
          The pitch usually implies you're buying "premium streaming." The reality is a mixed bag — some genuinely premium apps, plenty of long-tail free-with-ads services, and a surprising amount of app inventory you've never heard of. Without a human curating what runs where, your commercial can end up against content that doesn't match your brand at all. There is no easy toggle on a self-serve dashboard to fix that after the fact. You find out from the report, if you find out at all.
        </P>

        <H2>The fees are real, they're just not on the invoice</H2>
        <P>
          Self-serve platforms often advertise "no management fee." That is both true and misleading at the same time. The platform still takes a margin. It's just baked into the CPM instead of listed as a line item, which means you can't tell whether you paid $30 or $52 to reach a thousand households. The working portion isn't disclosed. If you can't see the fee, you can't negotiate it, and you have no way to compare it to another buy.
        </P>

        <H2>You are now the creative department</H2>
        <P>
          Great streaming TV creative — a spot that actually converts on a fifty-inch living-room screen — is a real production. Script, talent, location, lighting, sound, edit, color, captions, and a version library for different flights. Self-serve platforms will happily let you upload the phone-shot video you already have on your marketing drive. They will not tell you that most of the campaign's underperformance traces back to that upload.
        </P>
        <P>
          If you're going to spend real money on the media, the creative is the last place to save. That's why we include broadcast-quality production in every Mojo program. The creative and the buy have to come from the same conversation, or neither one of them works.
        </P>

        <H2>Measurement is a project, not a checkbox</H2>
        <P>
          Impression counts are easy to produce. Impression counts do not run your business. What you actually need is a read on incremental calls, walk-ins from your target zip codes, and lift in branded search over a baseline period. Setting that up means UTM discipline, call tracking on the landing pages, and a clean pre-campaign window to compare against. The self-serve dashboard will not do any of that for you.
        </P>
        <P>
          When someone tells you their platform "proves ROAS," ask exactly how the incrementality was measured. If the answer is "our attribution model," you have a modelled number rather than a measured one. Both have a place, but they are very different things. Confuse them and you'll spend real money on a report that only ever tells you what you already believed.
        </P>

        <H2>Who self-serve actually is right for</H2>
<P>
          There's a real profile of buyer who should ignore everything above and go straight to a self-serve platform. The performance marketer at a direct-to-consumer brand with a mature creative library, a data team, and a mandate to test TV as a channel — that person will get more out of a self-serve buy than an agency retainer. The tooling was built for them. They already have the incrementality methodology, the pixel infrastructure, and the internal appetite to fail publicly for two quarters before something works.
</P>
<P>
          The mismatch happens when a mid-market operator — the plumbing group owner, the managing partner, the dealer principal — reads the same landing page and assumes it was written for them. It wasn't. What looks like simplicity is really a set of skilled decisions the platform expects you to make on your own. When those decisions land on somebody whose job is running a business rather than optimizing a media stack, the outcomes usually reflect it.
</P>

<H2>Questions to ask before you sign up for one</H2>
<P>
          Whether you go self-serve or hire a buyer, ask the same short list up front. What is my actual working CPM after the platform's margin? Which specific apps and content categories will my spot run against? How do I exclude the ones I don't want, and how quickly can I make that change? What baseline period do you recommend before launch, and what conversion signal are we using to measure lift? If the answers are vague, the reporting will be vague too, and that vagueness will cost you real money on the back end.
</P>

        <H2>When self-serve is fine, and when it isn't</H2>
        <P>
          If you have a strong in-house creative team, a media analyst who lives in dashboards all day, and a budget you're comfortable spending as tuition, self-serve platforms are a reasonable place to learn. If you're a mid-market operator whose day is already spent running a company, self-serve is a slow way to spend real money on the wrong impressions.
        </P>
        <P>
          Not sure which one you are?{" "}
          <a className="text-mojo-clay underline underline-offset-4 hover:text-mojo-clay-deep" href="/free-audit">Send us your current plan</a>{" "}
          and we'll give you an honest read. Even if the honest read is "keep doing what you're doing."
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
          Your account rep at the station has always been good to you. They just pitched a streaming package on top of your usual buy, and it looks easy. Before you sign, here is what a fee-transparent, independent buyer sees when they read that same proposal cold.
        </Lead>

        {/* TODO-WARSTORY: a real station-vs-independent proposal comparison the founder has personally read — what the two working CPMs turned out to be after fees were exposed. */}

        <H2>Stations are genuinely good at what they do</H2>
        <P>
          Local TV stations have real assets: live news, live weekend games, deep relationships across the market, and production teams that can turn a spot around in a hurry. If you're buying broadcast, the station is often the right call. Nothing that follows is a knock on the people at your station. They know their inventory cold, and their linear product is often exactly what a certain kind of buy needs.
        </P>

        <H2>Their streaming package is usually not their strongest product</H2>
        <P>
          Station streaming offers are frequently packaged with a linear buy, resold from a partner platform, or built on a narrow inventory pool the station has direct access to. That means:
        </P>
        <UL>
          <li>Targeting is often coarser than a dedicated CTV buy.</li>
          <li>Inventory is narrower — the station's own OTT app plus a resold pool.</li>
          <li>Fee structure is bundled with linear, so the streaming CPM is nearly impossible to isolate.</li>
          <li>Reporting is usually impression counts, not conversion signals.</li>
        </UL>

        <H2>The incentive is the important part</H2>
        <P>
          A station rep gets paid to sell station inventory. That isn't a scandal. It's the job description. But when you ask them "should I add streaming?" the honest answer, for them, is almost always yes — because they have a streaming product on the shelf they need to move. An independent buyer with no ownership stake in any single publisher can answer differently. They can say "yes, but not this one," or "not yet," and no commission dies on the table when they do.
        </P>

        <H2>When the station offer is the right answer</H2>
        <P>
          Take it when you want incremental reach on the station's own OTT app and its audience overlaps yours cleanly. Take it when you're already spending meaningful linear dollars with them and the streaming add is priced as a real bonus rather than repriced margin. Take it when there is a specific local-news adjacency you want to sponsor. In those cases the fit is real, the price is fair, and the reporting question stops mattering as much.
        </P>

        <H2>When to hold off</H2>
        <P>
          Hold off when streaming is going to be the majority of your intended TV budget. Hold off when you want tight zip-code targeting across multiple premium apps. Hold off when you need live-sports inventory beyond what the station itself carries. Hold off when you can't get a fee-transparent breakdown of the CPM for the streaming portion, separated from anything linear. Any one of those alone means the station package is probably not the right home for that dollar.
        </P>

        <H2>Questions to ask the station rep before signing</H2>
        <P>
          Push on the specifics before the ink dries. Which exact apps and content publishers is my spot going to run on, itemized, not "our premium OTT bundle"? What is the working CPM for the streaming portion alone, after your margin and any resold-platform fees are pulled out? Can I get zip-code-level targeting inside the station's OTT app, or only DMA-level? What does the report look like at month three, and does it separate the streaming impressions from the linear ones?
        </P>
        <P>
          If any of those answers arrive as "we'll have to check" or "it's included in the package," treat it as data. It usually means the streaming layer was assembled by a partner the station itself doesn't fully control. That's fine as a product, but you should know it's what you're buying — and price the trade-off accordingly.
        </P>

        <H2>Where independent buyers actually add value</H2>
        <P>
          An independent buyer isn't automatically the right answer either. What we add is the ability to move budget across publishers without losing anything on our own side, and the discipline to walk away from a plan that doesn't fit. If the right buy for your market this quarter is 70% station streaming and 30% dedicated CTV, that's what we'll build. If it's the opposite, we'll build that instead. The buy follows your customer, and nothing on our shelf needs to move for us to eat.
        </P>

        <H2>How to compare the two proposals fairly</H2>
        <P>
          Ask both the station and an independent buyer for the same four things: the list of apps and inventory your buy will actually run on, the zip codes and audience it will reach, the working CPM after every fee is exposed, and how they will measure conversions instead of impressions. Put the two proposals side by side on your desk. The right answer usually becomes obvious inside ten minutes.
        </P>
        <P>
          Want an independent second opinion on the proposal in front of you?{" "}
          <a className="text-mojo-clay underline underline-offset-4 hover:text-mojo-clay-deep" href="/free-audit">Book a free audit</a>{" "}
          and we'll read it with you. If the station's offer turns out to be the right one, we'll tell you that too.
        </P>
      </>
    ),
  },
};

export function getPost(slug: string): PostContent | undefined {
  return posts[slug];
}

import { createFileRoute } from "@tanstack/react-router";
import { IndustryPage } from "@/components/mojo/IndustryPage";

export const Route = createFileRoute("/industries/home-services")({
  head: () => ({
    meta: [
      { title: "Streaming TV Advertising for Home Services | Mojo" },
      {
        name: "description",
        content:
          "Streaming TV ads for Michigan home services companies — plumbers, roofers, HVAC, remodelers. Zip-code targeted, measured, and priced for the mid-market.",
      },
      { property: "og:title", content: "Streaming TV Advertising for Home Services | Mojo" },
      { property: "og:url", content: "/industries/home-services" },
    ],
    links: [{ rel: "canonical", href: "/industries/home-services" }],
  }),
  component: Page,
});

const geo = [
  "Dearborn", "Dearborn Heights", "Livonia", "Westland", "Canton", "Plymouth",
  "Novi", "Farmington Hills", "Southfield", "Troy", "Royal Oak",
  "Sterling Heights", "Warren", "Ann Arbor",
];

function Page() {
  return (
    <IndustryPage
      eyebrow="Home services advertising"
      h1="TV advertising for home services companies."
      subhead="Be the name they already know when the furnace dies, the pipe bursts, or the roof gives up."
      pain={[
        "Lead costs on search keep climbing. Every plumber, roofer, and HVAC company in your market is bidding on the same handful of emergency keywords, and the platforms are more than happy to let the price go up.",
        "The problem isn't demand. It's that nobody remembers your company name until something breaks — and by then, they're typing a generic search and clicking whoever paid the most that minute.",
        "Streaming TV builds the brand recall that makes homeowners call you first, before they ever open a search bar. And when they do search, your cost per lead drops everywhere else too.",
      ]}
      steps={[
        {
          n: "01",
          title: "We make your spot",
          body: "A broadcast-quality ad about your company, your trucks, your team. Written, shot, and edited in-house. Included.",
        },
        {
          n: "02",
          title: "We put it on TV",
          body: "Live sports and premium streaming apps — running only in the zip codes you actually roll a truck to.",
        },
        {
          n: "03",
          title: "We show you what happened",
          body: "Branded search lift, call volume, and booked jobs tied back to the campaign. Not vanity impressions.",
        },
      ]}
      runsOn={[
        "Live sports on streaming — weekends, weeknights, big games",
        "Premium streaming apps your customers actually pay for",
        "News and lifestyle channels that run in the background all day",
      ]}
      metro="metro Detroit"
      geoPills={geo}
      faqs={[
        {
          q: "How much does streaming TV advertising cost for a home services company?",
          a: "Most of our home services clients start between $3,000 and $10,000 a month in media, plus a flat management fee. That's enough to own a real share of voice in a set of zip codes and see the branded search lift move within the first 60 days. We'll size a plan to your service area on a book a call.",
        },
        {
          q: "Can you target just the zip codes we serve?",
          a: "Yes. That's the whole point of streaming. You give us the zip codes you're willing to drive to, and your ad only runs on TVs in those households. No paying for eyeballs three counties away.",
        },
        {
          q: "We don't have a commercial — is that a problem?",
          a: "Not at all. We make it. Script, shoot, edit, deliver. It's included in our engagement, not a separate line item. Most home services shoots wrap in a day at your yard or a recent jobsite.",
        },
        {
          q: "How is this different from what the TV station rep offered us?",
          a: "The station rep sells you their station's inventory — because that's what they have to move. We're independent, so we buy across streaming platforms based on what actually reaches your customers. No forced linear packages, no station-side incentives.",
        },
        {
          q: "How do we know it's working if nobody clicks a TV ad?",
          a: "The same way you'd know a billboard is working, except with real numbers. We track branded search lift, direct call volume, form fills, and household-level attribution. You'll see the movement in your own CRM and Google Analytics, not just in our reports.",
        },
        {
          q: "How fast can we launch?",
          a: "From signed agreement to your ad on the air is typically two to three weeks — most of that is production. If you already have a usable spot, we can be live in about a week. Book a call and we'll walk you through the timeline for your market.",
        },
      ]}
    />
  );
}

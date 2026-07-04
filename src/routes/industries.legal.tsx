import { createFileRoute } from "@tanstack/react-router";
import { IndustryPage } from "@/components/mojo/IndustryPage";

export const Route = createFileRoute("/industries/legal")({
  head: () => ({
    meta: [
      { title: "Streaming TV Advertising for Law Firms | Mojo" },
      {
        name: "description",
        content:
          "Streaming TV advertising for Michigan law firms — county-level targeting, bar-compliant creative, and measurement tied to real intake, not impressions.",
      },
      { property: "og:title", content: "Streaming TV Advertising for Law Firms | Mojo" },
      { property: "og:url", content: "/industries/legal" },
    ],
    links: [{ rel: "canonical", href: "/industries/legal" }],
  }),
  component: Page,
});

const geo = [
  "Detroit", "Dearborn", "Livonia", "Southfield", "Troy", "Royal Oak",
  "Sterling Heights", "Warren", "Ann Arbor", "Novi", "Farmington Hills",
  "Grand Rapids", "Lansing", "Flint",
];

function Page() {
  return (
    <IndustryPage
      eyebrow="Legal advertising"
      h1="TV advertising for law firms."
      subhead="Be the firm people already recognize when they need one — without a broadcast budget."
      pain={[
        "PI TV has always worked. That's not the debate. The debate is whether it's still affordable for anyone who isn't already the biggest firm in the market.",
        "Broadcast rates have run up. Billboard inventory is saturated. The old playbook now requires the kind of budget that boxes out every mid-sized firm trying to build a real brand.",
        "Streaming changed the math. You get the same big-screen presence during the same shows and the same games — at a fraction of broadcast — targeted to the counties where your firm actually practices.",
      ]}
      steps={[
        {
          n: "01",
          title: "We make your spot",
          body: "Brand or direct-response, built with bar-compliant messaging and shot to look like a real firm — not a stock template.",
        },
        {
          n: "02",
          title: "We put it on TV",
          body: "Streaming inventory targeted county by county, with day-parting around your intake team's coverage.",
        },
        {
          n: "03",
          title: "We show you what happened",
          body: "Branded search lift, call volume by campaign, and case starts you can tie back to the ads that ran.",
        },
      ]}
      runsOn={[
        "Live sports on streaming — the appointment TV your future clients still watch live",
        "Premium streaming apps with prestige drama and comedy",
        "News and lifestyle channels running in waiting rooms, kitchens, and gyms",
      ]}
      metro="Michigan"
      geoPills={geo}
      faqs={[
        {
          q: "How much does streaming TV advertising cost for a law firm?",
          a: "Firms typically start between $8,000 and $25,000 a month in media, depending on practice area and market. That's enough to build a real share of voice in your counties without competing head-to-head with broadcast spend. We'll size a plan on a book a call.",
        },
        {
          q: "Can you keep the creative compliant with our state bar rules?",
          a: "Yes. Our creative team writes and produces with state bar advertising rules in mind, and we route final cuts through your firm's compliance point-person before anything airs. We've done this in multiple states.",
        },
        {
          q: "Can you target specific counties instead of a whole DMA?",
          a: "Yes. Streaming lets us target down to the county and zip-code level, so your ad only runs where you're actually taking cases. No paying for a broadcast DMA that spills into markets you don't practice in.",
        },
        {
          q: "We don't have a commercial — do we need to hire a production company?",
          a: "No. Creative is included. We write the spot, direct the shoot, and deliver the final cuts. Most firms shoot in a single day at the office or a local location.",
        },
        {
          q: "How do we measure this without click-through data?",
          a: "We tie campaign flights to intake volume, branded search lift, and case starts by referral source. You'll see the movement in the intake numbers your firm already tracks — not just in a media report.",
        },
        {
          q: "What's the contract length?",
          a: "We work in 90-day flights so we can prove the model before you commit to anything longer. Most firms renew and expand from there. Book a call and we'll walk through the terms.",
        },
      ]}
    />
  );
}

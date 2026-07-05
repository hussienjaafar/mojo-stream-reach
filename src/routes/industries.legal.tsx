import { createFileRoute } from "@tanstack/react-router";
import { IndustryPage } from "@/components/mojo/IndustryPage";
import { pageHead, faqJsonLd, serviceJsonLd } from "@/lib/seo";

const PATH = "/industries/legal";
const TITLE = "Streaming TV Advertising for Law Firms | Mojo";
const DESCRIPTION =
  "Streaming TV advertising for Michigan law firms — county-level targeting, bar-compliant creative, and measurement tied to real intake, not impressions.";

const faqs = [
  {
    q: "How much does streaming TV advertising cost for a law firm?",
    a: "Firms typically start between $8,000 and $25,000 a month in working media, depending on practice area and market size. That level of spend builds a real share of voice across your counties without trying to trade punches with a broadcast budget you don't have. We'll size a plan on a book a call.",
  },
  {
    q: "Can you keep the creative compliant with our state bar rules?",
    a: "Yes. Our creative team writes and produces with state bar advertising rules in the frame from the first script draft. Final cuts route through your firm's compliance point-person before anything airs. We've done this work in more than one state, and the process is the same every time.",
  },
  {
    q: "Can you target specific counties instead of a whole DMA?",
    a: "Yes. Streaming lets us target down to the county and zip-code level, so your commercial only runs where your firm actually takes cases. You aren't paying for a broadcast DMA that spills into markets three hours away.",
  },
  {
    q: "We don't have a commercial — do we need to hire a production company?",
    a: "No. Creative is part of the program. We write the spot, direct the shoot, and deliver the final cuts. Most firms shoot in a single day at the office or a nearby location, and the finished commercial is yours.",
  },
  {
    q: "How do we measure this without click-through data?",
    a: "We tie campaign flights to intake volume, branded search lift, and case starts by referral source. The movement shows up in the intake numbers your firm already tracks — the same board the partners already look at every Monday.",
  },
  {
    q: "What's the contract length?",
    a: "We work in ninety-day flights so we can prove the model before you commit to anything longer. Most firms renew and expand from there. Book a call and we'll walk through the terms in detail.",
  },
];

export const Route = createFileRoute("/industries/legal")({
  head: () =>
    pageHead({
      path: PATH,
      title: TITLE,
      description: DESCRIPTION,
      jsonLd: [
        serviceJsonLd({
          name: "Streaming TV advertising for law firms",
          description: DESCRIPTION,
          path: PATH,
        }),
        faqJsonLd(faqs),
      ],
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
      faqs={faqs}
    />
  );
}

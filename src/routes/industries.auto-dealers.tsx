import { createFileRoute } from "@tanstack/react-router";
import { IndustryPage } from "@/components/mojo/IndustryPage";
import { pageHead, faqJsonLd, serviceJsonLd } from "@/lib/seo";

const PATH = "/industries/auto-dealers";
const TITLE = "Streaming TV Advertising for Auto Dealers | Mojo";
const DESCRIPTION =
  "Streaming TV advertising for Michigan auto dealers — same big-screen presence, zip-code precision, event tie-ins, and reporting that ties back to VDPs and traffic.";

const faqs = [
  {
    q: "How much does streaming TV advertising cost for an auto dealer?",
    a: "Single-rooftop dealers typically start between $8,000 and $25,000 a month in media. Groups start higher, with budget flexed by rooftop and event. That's enough to own a real share of voice in your market without competing head-to-head with broadcast spend. We'll size a plan on a book a call.",
  },
  {
    q: "Can you run event campaigns — model-year closeouts, tent sales, tax season?",
    a: "Yes. Event flighting is where streaming really shines — we can spin up creative, ramp spend into the event window, and pull back the second the sale is over. No renegotiating a broadcast contract to shift dates.",
  },
  {
    q: "Is our OEM co-op eligible for streaming TV?",
    a: "In most cases, yes. Every OEM handles co-op documentation a little differently, but streaming TV is now widely eligible. We prepare the pre-approval materials and post-air documentation your co-op team needs — send us your program and we'll tell you exactly what qualifies.",
  },
  {
    q: "Can you target our actual market instead of a whole DMA?",
    a: "Yes. Streaming targets down to the zip code, so your ad runs in the neighborhoods your customers actually come from — not the far side of a DMA where another dealer already owns the traffic.",
  },
  {
    q: "We don't have a fresh commercial — is that a problem?",
    a: "No. Creative is included. We shoot on your lot with your inventory and your people, and we can cut multiple versions from a single production day — one for brand, one for the current event, one for service.",
  },
  {
    q: "What does the reporting actually look like?",
    a: "A monthly report tied to what matters: VDP views, branded search lift, showroom and service-lane traffic, and cost per action against the flights that ran. Not a slide deck of impression counts. Book a call and we'll walk through a sample.",
  },
];

export const Route = createFileRoute("/industries/auto-dealers")({
  head: () =>
    pageHead({
      path: PATH,
      title: TITLE,
      description: DESCRIPTION,
      jsonLd: [
        serviceJsonLd({
          name: "Streaming TV advertising for auto dealers",
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
      eyebrow="Auto dealer advertising"
      h1="TV advertising for auto dealers."
      subhead="Same big-screen presence you grew up on. New precision. Real reporting."
      pain={[
        "Dealers grew up on TV. It built the brand, it moved the metal, and it turned a name on a rooftop sign into the dealership everyone in the market knew.",
        "Then the co-op grid got complicated, broadcast rates ran up, and half the buy became unmeasurable. Every month you're spending real money and hoping the report from the rep tells the whole story.",
        "Streaming keeps the presence and adds the precision. Same big screen during the same games and shows — targeted to the zip codes you draw from, tied to sales events, and reported against VDPs and traffic instead of guesses.",
      ]}
      steps={[
        {
          n: "01",
          title: "We make your spot",
          body: "Event, model-year, service-lane, or brand. Shot on your lot with your inventory, cut for streaming — not a dubbed-over factory template.",
        },
        {
          n: "02",
          title: "We put it on TV",
          body: "Live sports adjacency, premium streaming inventory, and event flighting timed to your sales calendar.",
        },
        {
          n: "03",
          title: "We show you what happened",
          body: "VDP lift, branded search, showroom and service-lane traffic — tied back to the flights that ran.",
        },
      ]}
      runsOn={[
        "Live sports on streaming — the tentpole games that used to require a broadcast buy",
        "Premium streaming apps that carry appointment TV and prestige series",
        "News and lifestyle channels that run through the morning and evening drive",
      ]}
      metro="Michigan"
      geoPills={geo}
      faqs={faqs}
    />
  );
}

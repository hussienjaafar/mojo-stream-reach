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
    a: "Single-rooftop dealers typically start between $8,000 and $25,000 a month in working media. Groups start higher, with budget flexed by rooftop and by event. At that level you can own a real share of voice in your market without trying to trade broadcast checks with the dealer down the road. We'll size a plan on a book a call.",
  },
  {
    q: "Can you run event campaigns — model-year closeouts, tent sales, tax season?",
    a: "Yes. Event flighting is where streaming really shines. We spin up fresh creative, ramp spend into the event window, then pull spend back the second the sale is over. No renegotiating a broadcast contract to shift dates.",
  },
  {
    q: "Is our OEM co-op eligible for streaming TV?",
    a: "In most cases, yes. Every OEM handles co-op documentation a little differently, but streaming TV is now widely eligible under current programs. We prepare the pre-approval materials and the post-air documentation your co-op team needs. Send us your program and we'll tell you exactly what qualifies.",
  },
  {
    q: "Can you target our actual market instead of a whole DMA?",
    a: "Yes. Streaming targets down to the zip code, so your commercial runs inside the neighborhoods your customers actually drive in from. You aren't buying the far edge of a DMA where another dealer already owns the traffic.",
  },
  {
    q: "We don't have a fresh commercial — is that a problem?",
    a: "No. Creative is part of the program. We shoot on your lot, with your inventory and your people, and cut multiple versions from a single production day — one for brand, one for the current event, one for service.",
  },
  {
    q: "What does the reporting actually look like?",
    a: "A monthly report tied to what actually matters: VDP views, branded search lift, showroom and service-lane traffic, and cost per action against the flights that ran. It's a working document, not a slide deck of impression counts. Book a call and we'll walk through a sample.",
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
      subhead="The same big-screen presence you grew up on. With new precision and real reporting."
      /* TODO-WARSTORY: a real event-flight example from a rooftop or group — the specific sale window, the creative rotation, and what showed up in VDP and showroom traffic. */
      pain={[
        "Dealers grew up on TV. It built the brand, it moved the metal, and it turned a name on a rooftop sign into the dealership everyone in the market already knew before they ever pulled onto the lot.",
        "Then the co-op grid got complicated. Broadcast rates ran up. Half the buy became unmeasurable. Every month you're writing a real check and hoping the report from your rep tells the whole story.",
        "Streaming keeps the presence and adds the precision. Same big screen during the same games your customers watch, targeted to the zip codes you actually draw from, tied to your sales calendar, and reported against VDPs and traffic.",
      ]}
      steps={[
        {
          n: "01",
          title: "We make your spot",
          body: "Event, model-year, service-lane, or brand — shot on your lot with your inventory, cut for streaming, never a dubbed-over factory template.",
        },
        {
          n: "02",
          title: "We put it on TV",
          body: "Live-sports adjacency, the streaming apps customers pay for, and event flighting timed to your sales calendar.",
        },
        {
          n: "03",
          title: "We show you what happened",
          body: "VDP lift, branded search, showroom and service-lane traffic — tied back to the flights that ran.",
        },
      ]}
      runsOn={[
        "Live weekend games — the tentpole matchups that used to require a broadcast buy",
        "The streaming apps that carry appointment TV and prestige series",
        "News and lifestyle channels that run through the morning and evening drive",
      ]}
      metro="Michigan"
      geoPills={geo}
      faqs={faqs}
    />
  );
}

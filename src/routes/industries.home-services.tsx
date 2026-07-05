import { createFileRoute } from "@tanstack/react-router";
import { IndustryPage } from "@/components/mojo/IndustryPage";
import { pageHead, faqJsonLd, serviceJsonLd } from "@/lib/seo";

const PATH = "/industries/home-services";
const TITLE = "Streaming TV Advertising for Home Services | Mojo";
const DESCRIPTION =
  "Streaming TV ads for Michigan home services companies — plumbers, roofers, HVAC, remodelers. Zip-code targeted, measured, and priced for the mid-market.";

const faqs = [
  {
    q: "How much does streaming TV advertising cost for a home services company?",
    a: "Most of our home services clients start between $3,000 and $10,000 a month in working media, plus a flat management fee. At that level, you can own a real share of voice in a defined set of zip codes and watch branded search lift begin to move inside the first sixty days. We'll size a plan to your actual service area on a book a call.",
  },
  {
    q: "Can you target just the zip codes we serve?",
    a: "Yes. That's the entire point of streaming. You hand us the map of neighborhoods you're willing to drive to. Your ad only plays on TVs inside those households. You never pay for eyeballs three counties away.",
  },
  {
    q: "We don't have a commercial — is that a problem?",
    a: "No. We make it for you. Script, shoot, edit, and delivery are all part of the program. Most home services shoots wrap in a single day at your yard or a recent jobsite, and the finished spot is yours to use.",
  },
  {
    q: "How is this different from what the TV station rep offered us?",
    a: "The station rep is selling their station's inventory because that's what they have to move. We're independent. We buy across streaming platforms based on what actually reaches your customers, without any forced linear packages or station-side incentives pulling the plan sideways.",
  },
  {
    q: "How do we know it's working if nobody clicks a TV ad?",
    a: "The same way you'd know a billboard was working, except with real numbers behind it. We track branded search lift, direct call volume, form fills, and household-level attribution. The movement shows up in your own CRM and Google Analytics, right alongside the rest of your marketing.",
  },
  {
    q: "How fast can we launch?",
    a: "From signed agreement to your commercial on the air is typically two to three weeks, and most of that time is production. If you already have a usable spot, we can be live in about a week. Book a call and we'll walk you through the specific timeline for your market.",
  },
];

export const Route = createFileRoute("/industries/home-services")({
  head: () =>
    pageHead({
      path: PATH,
      title: TITLE,
      description: DESCRIPTION,
      jsonLd: [
        serviceJsonLd({
          name: "Streaming TV advertising for home services companies",
          description: DESCRIPTION,
          path: PATH,
        }),
        faqJsonLd(faqs),
      ],
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
      subhead="Be the name they already know when the furnace dies at 6 a.m."
      /* TODO-WARSTORY: a real one-day shoot anecdote from a Michigan plumber, roofer, or HVAC client — e.g., a specific yard, a specific truck, and what the spot cost to make. */
      pain={[
        "Search leads keep getting more expensive. Every plumber, roofer, and HVAC company in your market is bidding on the same handful of emergency keywords, and the platforms are more than happy to let that price drift up quarter after quarter.",
        "The problem isn't demand. It's memory. Nobody remembers your company name until the water heater floods the basement, and by then they're typing a generic search and calling whoever paid the most that minute.",
        "TV rebuilds that memory. A homeowner who has seen your truck on their screen a few Sunday afternoons doesn't open a search bar first. They pick up the phone. And when they do open one, your cost per lead drops everywhere else too.",
      ]}
      steps={[
        {
          n: "01",
          title: "We make your spot",
          body: "A broadcast-quality commercial featuring your trucks and your crew, written and shot by our in-house team. The production cost is baked into the program.",
        },
        {
          n: "02",
          title: "We put it on TV",
          body: "Live weekend games and the streaming apps homeowners actually pay for — running only in the zip codes you'll roll a truck to.",
        },
        {
          n: "03",
          title: "We show you what happened",
          body: "Branded search lift, call volume, and booked jobs tied back to the flights that ran. You'll see the movement inside your own CRM.",
        },
      ]}
      runsOn={[
        "Live weekend games — the appointment TV your customers still watch as it happens",
        "The streaming apps households pay a monthly bill for",
        "News and lifestyle channels that run in the background from breakfast to dinner",
      ]}
      metro="metro Detroit"
      geoPills={geo}
      faqs={faqs}
    />
  );
}

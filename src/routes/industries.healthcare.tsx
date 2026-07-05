import { createFileRoute } from "@tanstack/react-router";
import { IndustryPage } from "@/components/mojo/IndustryPage";
import { pageHead, faqJsonLd, serviceJsonLd } from "@/lib/seo";

const PATH = "/industries/healthcare";
const TITLE = "Streaming TV Advertising for Healthcare Practices | Mojo";
const DESCRIPTION =
  "Streaming TV advertising for Michigan healthcare practices and groups — premium environments, household targeting near your locations, compliant creative.";

const faqs = [
  {
    q: "How much does streaming TV advertising cost for a healthcare practice?",
    a: "Practices and groups typically start between $5,000 and $20,000 a month in working media, depending on service line and geography. That range holds a real share of voice across the neighborhoods that sit inside a reasonable drive time from your front door. We'll size the right plan on a book a call.",
  },
  {
    q: "Can you keep our targeting and creative compliant with healthcare rules?",
    a: "Yes. Targeting stays inside the healthcare rulebook — no sensitive-condition segments, no health-status inference. Every cut runs past your compliance point-person before it airs. We're familiar with the guardrails around patient testimonials and outcome claims.",
  },
  {
    q: "Can you target households near our specific locations?",
    a: "Yes. Streaming lets us target down to the zip code, so your ad runs only inside a realistic drive-time radius around each location. You won't be paying to reach families two counties over who will never book an appointment with you.",
  },
  {
    q: "We don't have a commercial — is that a problem?",
    a: "No. Creative is part of the program. We write the spot with your clinical team, shoot on-site or at a nearby location, and deliver the final cuts. Most practices wrap production in a single day.",
  },
  {
    q: "How do we measure this without patients clicking a TV ad?",
    a: "We track new-patient inquiries, branded search lift, appointment-request forms, and — where the data supports it — household-level visit attribution. The numbers move in the same systems your practice already reviews at the monthly meeting.",
  },
  {
    q: "How fast can we launch?",
    a: "From signed agreement to on-air is typically three to four weeks. Most of that window is production and compliance review. If you already have usable creative, we can move faster. Book a call and we'll walk through your timeline.",
  },
];

export const Route = createFileRoute("/industries/healthcare")({
  head: () =>
    pageHead({
      path: PATH,
      title: TITLE,
      description: DESCRIPTION,
      jsonLd: [
        serviceJsonLd({
          name: "Streaming TV advertising for healthcare practices",
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
      eyebrow="Healthcare advertising"
      h1="TV advertising for healthcare practices."
      subhead="Build preference on the screen the household already trusts, before anyone opens a comparison tab."
      /* TODO-WARSTORY: a real specialty-practice detail — e.g., an orthopedic group or dermatology practice, the drive-time radius they targeted, and the specific inquiry pattern that shifted. */
      pain={[
        "Elective and high-lifetime-value care isn't chosen on price. It's chosen on trust — a quiet decision that gets made in the kitchen, weeks or months before anyone ever types a search.",
        "Search ads reach people who are already comparing three practices and a hospital system. By that point the decision is mostly done. You're paying to be one of the finalists rather than the first name that came up over dinner.",
        "TV builds that first-name preference in the room where the decision actually happens. Household targeting around your locations, credible on-camera talent, and creative that sounds like a doctor talking to a neighbor.",
      ]}
      steps={[
        {
          n: "01",
          title: "We make your spot",
          body: "Warm, credible, on-brand. Written with your clinical team, shot on-site, produced without medical-ad clichés.",
        },
        {
          n: "02",
          title: "We put it on TV",
          body: "Streaming inventory targeted to households inside a realistic drive-time radius of each location.",
        },
        {
          n: "03",
          title: "We show you what happened",
          body: "New-patient inquiries, branded search lift, and appointment requests tied back to the flights that ran.",
        },
      ]}
      runsOn={[
        "Live weekend games — the co-viewing window when the household is actually in the same room",
        "The streaming apps that carry prestige series and family programming",
        "News and lifestyle channels that run through the morning and evening routine",
      ]}
      metro="Michigan"
      geoPills={geo}
      faqs={faqs}
    />
  );
}

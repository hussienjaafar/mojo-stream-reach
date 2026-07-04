import { createFileRoute } from "@tanstack/react-router";
import { IndustryPage } from "@/components/mojo/IndustryPage";

export const Route = createFileRoute("/industries/healthcare")({
  head: () => ({
    meta: [
      { title: "Streaming TV Advertising for Healthcare Practices | Mojo" },
      {
        name: "description",
        content:
          "Streaming TV advertising for Michigan healthcare practices and groups — premium environments, household targeting near your locations, compliant creative.",
      },
      { property: "og:title", content: "Streaming TV Advertising for Healthcare Practices | Mojo" },
      { property: "og:url", content: "/industries/healthcare" },
    ],
    links: [{ rel: "canonical", href: "/industries/healthcare" }],
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
      subhead="Build preference before patients start comparing — on the screen the household already trusts."
      pain={[
        "Elective and high-lifetime-value care isn't chosen on price. It's chosen on trust — usually months before the patient ever types a search.",
        "Search ads reach people already comparing three practices and a hospital. By then, the decision is mostly made. You're paying to be one of the finalists, not the first name they thought of.",
        "TV builds that first-name preference. Premium streaming environments, household targeting near your locations, and creative that sounds like a doctor — not a promo.",
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
          body: "Streaming inventory targeted to households within your realistic service radius — not a whole state.",
        },
        {
          n: "03",
          title: "We show you what happened",
          body: "New-patient inquiries, branded search lift, and appointment requests tied back to the campaign.",
        },
      ]}
      runsOn={[
        "Live sports on streaming — the co-viewing window when households are actually together",
        "Premium streaming apps with prestige series and family programming",
        "News and lifestyle channels that run through the morning and evening routine",
      ]}
      metro="Michigan"
      geoPills={geo}
      faqs={[
        {
          q: "How much does streaming TV advertising cost for a healthcare practice?",
          a: "Practices and groups typically start between $5,000 and $20,000 a month in media, depending on service line and geography. That's enough to hold a real share of voice in the neighborhoods around your locations. We'll size the right plan on a book a call.",
        },
        {
          q: "Can you keep our targeting and creative compliant with healthcare rules?",
          a: "Yes. We keep targeting compliant for healthcare advertisers — no sensitive-condition targeting, no health-status inference. Creative is reviewed with your compliance point-person before anything airs, and we're familiar with the guardrails around patient testimonials and outcome claims.",
        },
        {
          q: "Can you target households near our specific locations?",
          a: "Yes. Streaming lets us target down to the zip code, so your ad runs only in a realistic drive-time radius around each location — not across an entire broadcast market.",
        },
        {
          q: "We don't have a commercial — is that a problem?",
          a: "Not at all. Creative is included. We write the spot with your clinical team, shoot on-site or at a nearby location, and deliver the final cuts. Most practices shoot in a single day.",
        },
        {
          q: "How do we measure this without patients clicking a TV ad?",
          a: "We track new-patient inquiries, branded search lift, appointment-request forms, and — where possible — household-level visit attribution. You'll see the numbers move in the systems your practice already uses.",
        },
        {
          q: "How fast can we launch?",
          a: "From signed agreement to on-air is typically three to four weeks, most of it in production and compliance review. If you already have usable creative, we can move faster. Book a call and we'll walk through your timeline.",
        },
      ]}
    />
  );
}

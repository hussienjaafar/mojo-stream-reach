import { createFileRoute } from "@tanstack/react-router";
import { PlaceholderPage } from "@/components/mojo/PlaceholderPage";

export const Route = createFileRoute("/results")({
  head: () => ({
    meta: [
      { title: "Results \u2014 Mojo" },
      { name: "description", content: "Case studies, campaign outcomes, and the specific lifts our clients have seen \u2014 calls, visits, and search." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <PlaceholderPage
      eyebrow="Results"
      title="Numbers, not vanity impressions."
      subhead="Case studies, campaign outcomes, and the specific lifts our clients have seen \u2014 calls, visits, and search."
    />
  );
}

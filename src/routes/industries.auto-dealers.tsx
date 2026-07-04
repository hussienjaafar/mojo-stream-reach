import { createFileRoute } from "@tanstack/react-router";
import { PlaceholderPage } from "@/components/mojo/PlaceholderPage";

export const Route = createFileRoute("/industries/auto-dealers")({
  head: () => ({
    meta: [
      { title: "Auto dealers \u2014 Mojo" },
      { name: "description", content: "Streaming TV for dealer groups \u2014 model-year pushes, service-lane campaigns, and market-share plays priced for the mid-market." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <PlaceholderPage
      eyebrow="Auto dealers"
      title="Move inventory with local TV, not local rates."
      subhead="Streaming TV for dealer groups \u2014 model-year pushes, service-lane campaigns, and market-share plays priced for the mid-market."
    />
  );
}

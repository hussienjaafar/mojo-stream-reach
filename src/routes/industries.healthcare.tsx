import { createFileRoute } from "@tanstack/react-router";
import { PlaceholderPage } from "@/components/mojo/PlaceholderPage";

export const Route = createFileRoute("/industries/healthcare")({
  head: () => ({
    meta: [
      { title: "Healthcare \u2014 Mojo" },
      { name: "description", content: "Streaming TV for practices, groups, and health systems \u2014 targeted to service areas, compliant, and measured against real visits." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <PlaceholderPage
      eyebrow="Healthcare"
      title="Reach patients where they actually watch."
      subhead="Streaming TV for practices, groups, and health systems \u2014 targeted to service areas, compliant, and measured against real visits."
    />
  );
}

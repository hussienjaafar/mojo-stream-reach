import { createFileRoute } from "@tanstack/react-router";
import { PlaceholderPage } from "@/components/mojo/PlaceholderPage";

export const Route = createFileRoute("/free-audit")({
  head: () => ({
    meta: [
      { title: "Free audit \u2014 Mojo" },
      { name: "description", content: "A no-cost look at your current media mix, with specific streaming TV opportunities in your market." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <PlaceholderPage
      eyebrow="Free audit"
      title="Send us your current plan. We'll tell you what's missing."
      subhead="A no-cost look at your current media mix, with specific streaming TV opportunities in your market."
    />
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { PlaceholderPage } from "@/components/mojo/PlaceholderPage";

export const Route = createFileRoute("/industries/legal")({
  head: () => ({
    meta: [
      { title: "Legal \u2014 Mojo" },
      { name: "description", content: "Streaming TV for law firms \u2014 brand and intake campaigns measured against calls and case starts, not impressions." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <PlaceholderPage
      eyebrow="Legal"
      title="Be the firm people already recognize."
      subhead="Streaming TV for law firms \u2014 brand and intake campaigns measured against calls and case starts, not impressions."
    />
  );
}

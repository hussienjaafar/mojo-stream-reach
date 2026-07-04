import { createFileRoute } from "@tanstack/react-router";
import { PlaceholderPage } from "@/components/mojo/PlaceholderPage";

export const Route = createFileRoute("/who-we-serve/political-advocacy")({
  head: () => ({
    meta: [
      { title: "Political & advocacy \u2014 Mojo" },
      { name: "description", content: "Streaming TV built for campaigns, PACs, and issue advocacy \u2014 fast turnarounds and precise geo targeting." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <PlaceholderPage
      eyebrow="Political & advocacy"
      title="Reach the voters and donors who watch."
      subhead="Streaming TV built for campaigns, PACs, and issue advocacy \u2014 fast turnarounds and precise geo targeting."
    />
  );
}

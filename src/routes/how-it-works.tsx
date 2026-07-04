import { createFileRoute } from "@tanstack/react-router";
import { PlaceholderPage } from "@/components/mojo/PlaceholderPage";

export const Route = createFileRoute("/how-it-works")({
  head: () => ({
    meta: [
      { title: "How it works \u2014 Mojo" },
      { name: "description", content: "The full walkthrough of how a Mojo campaign comes together, from first call to on-screen to attribution report." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <PlaceholderPage
      eyebrow="How it works"
      title="Make it. Air it. Measure it."
      subhead="The full walkthrough of how a Mojo campaign comes together, from first call to on-screen to attribution report."
    />
  );
}

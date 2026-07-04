import { createFileRoute } from "@tanstack/react-router";
import { PlaceholderPage } from "@/components/mojo/PlaceholderPage";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy policy \u2014 Mojo" },
      { name: "description", content: "Full privacy policy \u2014 coming soon." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <PlaceholderPage
      eyebrow="Privacy policy"
      title="How we handle your data."
      subhead="Full privacy policy \u2014 coming soon."
    />
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { PlaceholderPage } from "@/components/mojo/PlaceholderPage";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/privacy")({
  head: () =>
    pageHead({
      path: "/privacy",
      title: "Privacy policy — Mojo",
      description: "How Mojo handles your data. Full privacy policy — coming soon.",
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

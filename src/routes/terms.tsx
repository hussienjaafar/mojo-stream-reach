import { createFileRoute } from "@tanstack/react-router";
import { PlaceholderPage } from "@/components/mojo/PlaceholderPage";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/terms")({
  head: () =>
    pageHead({
      path: "/terms",
      title: "Terms of service — Mojo",
      description: "Mojo terms of service — full text coming soon.",
    }),
  component: Page,
});

function Page() {
  return (
    <PlaceholderPage
      eyebrow="Terms of service"
      title="The fine print, in plain English."
      subhead="Full terms of service \u2014 coming soon."
    />
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { PlaceholderPage } from "@/components/mojo/PlaceholderPage";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of service \u2014 Mojo" },
      { name: "description", content: "Full terms of service \u2014 coming soon." },
    ],
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

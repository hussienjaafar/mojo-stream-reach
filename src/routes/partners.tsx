import { createFileRoute } from "@tanstack/react-router";
import { PlaceholderPage } from "@/components/mojo/PlaceholderPage";

export const Route = createFileRoute("/partners")({
  head: () => ({
    meta: [
      { title: "Partners \u2014 Mojo" },
      { name: "description", content: "How we work with marketing agencies, industry groups, and platform partners to deliver streaming TV for their clients." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <PlaceholderPage
      eyebrow="Partners"
      title="Agencies, referrers, and platform partners."
      subhead="How we work with marketing agencies, industry groups, and platform partners to deliver streaming TV for their clients."
    />
  );
}

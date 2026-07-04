import { createFileRoute } from "@tanstack/react-router";
import { PlaceholderPage } from "@/components/mojo/PlaceholderPage";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Field notes \u2014 Mojo" },
      { name: "description", content: "How the market is changing, what's actually working, and where mid-market ad dollars should go next." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <PlaceholderPage
      eyebrow="Field notes"
      title="Straight talk about streaming TV."
      subhead="How the market is changing, what's actually working, and where mid-market ad dollars should go next."
    />
  );
}

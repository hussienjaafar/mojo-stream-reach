import { createFileRoute } from "@tanstack/react-router";
import { PlaceholderPage } from "@/components/mojo/PlaceholderPage";

export const Route = createFileRoute("/thank-you")({
  head: () => ({
    meta: [
      { title: "Thank you \u2014 Mojo" },
      { name: "description", content: "One of our team will reach out within one business day to schedule your call." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <PlaceholderPage
      eyebrow="Thank you"
      title="We got it. We'll be in touch."
      subhead="One of our team will reach out within one business day to schedule your call."
    />
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { PlaceholderPage } from "@/components/mojo/PlaceholderPage";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact \u2014 Mojo" },
      { name: "description", content: "Tell us about your business and your market. We'll put together a plan and walk you through it \u2014 no obligation." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <PlaceholderPage
      eyebrow="Contact"
      title="Book a call."
      subhead="Tell us about your business and your market. We'll put together a plan and walk you through it \u2014 no obligation."
    />
  );
}

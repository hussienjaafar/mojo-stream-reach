import { createFileRoute } from "@tanstack/react-router";
import { PlaceholderPage } from "@/components/mojo/PlaceholderPage";

export const Route = createFileRoute("/industries/home-services")({
  head: () => ({
    meta: [
      { title: "Home services \u2014 Mojo" },
      { name: "description", content: "Streaming ads for plumbers, roofers, HVAC, and remodelers \u2014 running only in the zip codes you actually serve." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <PlaceholderPage
      eyebrow="Home services"
      title="TV that works your service area."
      subhead="Streaming ads for plumbers, roofers, HVAC, and remodelers \u2014 running only in the zip codes you actually serve."
    />
  );
}

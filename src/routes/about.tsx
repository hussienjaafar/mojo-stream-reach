import { createFileRoute } from "@tanstack/react-router";
import { PlaceholderPage } from "@/components/mojo/PlaceholderPage";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About \u2014 Mojo" },
      { name: "description", content: "Mojo was built to give mid-market businesses the TV firepower national brands take for granted \u2014 without station politics." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <PlaceholderPage
      eyebrow="About"
      title="An independent TV buyer for the rest of the market."
      subhead="Mojo was built to give mid-market businesses the TV firepower national brands take for granted \u2014 without station politics."
    />
  );
}

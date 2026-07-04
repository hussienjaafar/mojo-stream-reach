import { createFileRoute, Outlet } from "@tanstack/react-router";

// Layout for /blog and /blog/$slug. All page content (H1, head, canonical)
// lives on the leaf routes so canonical/JSON-LD don't concatenate.
export const Route = createFileRoute("/blog")({
  component: () => <Outlet />,
});

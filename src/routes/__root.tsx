import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import {
  ORGANIZATION_JSONLD,
  LOCAL_BUSINESS_JSONLD,
  OG_IMAGE,
} from "../lib/seo";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-mojo-cream px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-7xl text-mojo-ink">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-mojo-ink">Page not found</h2>
        <p className="mt-2 text-sm text-mojo-mute">
          That page has left the airwaves. Head back home.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-mojo-clay px-4 py-2 text-sm font-medium text-mojo-cream hover:bg-mojo-clay-deep transition-colors"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-mojo-cream px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-2xl text-mojo-ink">This page didn't load</h1>
        <p className="mt-2 text-sm text-mojo-mute">
          Something went wrong on our end. Try again or head home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-mojo-clay px-4 py-2 text-sm font-medium text-mojo-cream hover:bg-mojo-clay-deep transition-colors"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-mojo-border bg-mojo-cream px-4 py-2 text-sm font-medium text-mojo-ink hover:bg-mojo-cream-2"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Mojo — Streaming TV advertising for mid-market businesses" },
      {
        name: "description",
        content:
          "Mojo puts your ad on live sports and the biggest streaming shows — only in the households you choose, measured like the rest of your marketing.",
      },
      { property: "og:title", content: "Mojo — Streaming TV advertising for mid-market businesses" },
      {
        property: "og:description",
        content:
          "Your ad on live sports and premium streaming, shown only to the households you choose.",
      },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Mojo" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Mojo — Streaming TV advertising for mid-market businesses" },
      { name: "description", content: "Your ad on live sports and premium streaming shows — shown only to the households you choose, measured like the rest of your marketing." },
      { property: "og:description", content: "Your ad on live sports and premium streaming shows — shown only to the households you choose, measured like the rest of your marketing." },
      { name: "twitter:description", content: "Your ad on live sports and premium streaming shows — shown only to the households you choose, measured like the rest of your marketing." },
      { property: "og:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/77857555-2f3c-4198-8f06-a4d166950a2e" },
      { name: "twitter:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/77857555-2f3c-4198-8f06-a4d166950a2e" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,600&family=Inter:wght@400;500;600&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}

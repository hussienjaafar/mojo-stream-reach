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
      <main id="main-content" className="max-w-lg text-center">
        <div className="text-xs uppercase tracking-[0.22em] text-mojo-clay-deep font-medium">
          404 — off the air
        </div>
        <h1 className="mt-5 font-display text-5xl md:text-6xl text-mojo-ink leading-[1.05]">
          This channel doesn't exist.
        </h1>
        <p className="mt-5 text-mojo-mute leading-relaxed">
          The page you were looking for isn't here — maybe it moved, maybe the
          link had a typo, maybe it never aired. Try one of these instead.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            to="/"
            className="inline-flex items-center rounded-md bg-mojo-clay px-5 py-2.5 text-sm font-medium text-mojo-cream hover:bg-mojo-clay-deep transition-colors"
          >
            Go home
          </Link>
          <Link
            to="/how-it-works"
            className="inline-flex items-center rounded-md border border-mojo-border bg-mojo-cream px-5 py-2.5 text-sm font-medium text-mojo-ink hover:bg-mojo-cream-2 transition-colors"
          >
            How it works
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center rounded-md border border-mojo-border bg-mojo-cream px-5 py-2.5 text-sm font-medium text-mojo-ink hover:bg-mojo-cream-2 transition-colors"
          >
            Contact
          </Link>
        </div>
      </main>
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
          "Your ad on live sports and premium streaming shows — shown only to the households you choose, measured like the rest of your marketing.",
      },
      { property: "og:title", content: "Mojo — Streaming TV advertising for mid-market businesses" },
      {
        property: "og:description",
        content:
          "Your ad on live sports and premium streaming shows — shown only to the households you choose, measured like the rest of your marketing.",
      },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Mojo" },
      { property: "og:image", content: OG_IMAGE },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Mojo — Streaming TV advertising for mid-market businesses" },
      {
        name: "twitter:description",
        content:
          "Your ad on live sports and premium streaming shows — shown only to the households you choose, measured like the rest of your marketing.",
      },
      { name: "twitter:image", content: OG_IMAGE },
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
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(ORGANIZATION_JSONLD),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(LOCAL_BUSINESS_JSONLD),
      },
      // ---------- Analytics (deferred, non-blocking) ----------
      // TODO-GA4: replace G-XXXXXXXXXX with real GA4 Measurement ID.
      {
        src: "https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX",
        async: true,
        defer: true,
      },
      {
        children: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-XXXXXXXXXX', { send_page_view: true });
        `,
      },
      // TODO-META-PIXEL: replace 000000000000000 with real Meta Pixel ID.
      {
        children: `
          !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
          n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
          t.defer=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}
          (window,document,'script','https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '000000000000000');
          fbq('track', 'PageView');
        `,
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
        {/* Mark the doc as JS-enabled BEFORE first paint so entrance animations
            only run post-hydration; SSR HTML stays fully visible. */}
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js')",
          }}
        />
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

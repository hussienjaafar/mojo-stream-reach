import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect } from "react";
import { z } from "zod";
import { PageShell } from "@/components/mojo/PageShell";
import { blogPosts } from "@/lib/blog-posts";

const searchSchema = z.object({
  source: z.enum(["audit", "partner", "contact"]).optional(),
});

import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/thank-you")({
  head: () =>
    pageHead({
      path: "/thank-you",
      title: "Got it — Mojo",
      description: "Thanks for reaching out. You'll hear from us within one business day.",
      robots: "noindex",
    }),
  validateSearch: (search) => searchSchema.parse(search),
  component: ThankYouPage,
});

function ThankYouPage() {
  const { source } = Route.useSearch();

  // Fire an analytics conversion event on mount. Any analytics provider
  // (Plausible, GA4, Fathom, PostHog) can hook off window.dataLayer or
  // its own global. Keep this dependency-free.
  useEffect(() => {
    const label = source ?? "unknown";
    try {
      // GA4 / GTM
      // @ts-expect-error dataLayer is provider-injected
      window.dataLayer = window.dataLayer || [];
      // @ts-expect-error dataLayer is provider-injected
      window.dataLayer.push({
        event: "lead_submitted",
        form_source: label,
      });
      // GA4 direct (gtag)
      // @ts-expect-error gtag is provider-injected
      if (typeof window.gtag === "function") {
        // @ts-expect-error gtag is provider-injected
        window.gtag("event", "lead_submitted", { form_source: label });
      }
      // Meta Pixel
      // @ts-expect-error fbq is provider-injected
      if (typeof window.fbq === "function") {
        // @ts-expect-error fbq is provider-injected
        window.fbq("track", "Lead", { form_source: label });
      }
      // Plausible
      // @ts-expect-error plausible is provider-injected
      if (typeof window.plausible === "function") {
        // @ts-expect-error plausible is provider-injected
        window.plausible("Lead", { props: { form_source: label } });
      }
    } catch {
      /* analytics missing — non-fatal */
    }
  }, [source]);

  return (
    <PageShell>
      <section className="border-b border-mojo-border">
        <div className="mx-auto max-w-3xl px-6 pt-24 pb-20 md:pt-32 md:pb-24 text-center">
          <div className="text-xs uppercase tracking-[0.22em] text-mojo-clay-deep font-medium">
            Thank you
          </div>
          <h1 className="mt-5 font-display text-4xl sm:text-5xl md:text-6xl leading-[1.05] text-mojo-ink">
            Got it. You'll hear from us within one business day.
          </h1>
          <p className="mt-6 text-lg text-mojo-mute leading-relaxed">
            Real humans, real replies. If we need anything from you before we
            can put together a useful plan, we'll ask in that first note.
          </p>
        </div>
      </section>

      <section className="bg-mojo-cream-2 border-b border-mojo-border">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <div className="text-xs uppercase tracking-[0.22em] text-mojo-clay-deep font-medium">
            While you wait
          </div>
          <h2 className="mt-4 font-display text-3xl md:text-4xl text-mojo-ink leading-tight max-w-2xl">
            A few plain-English reads on how streaming TV actually works.
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {blogPosts.map((p) => (
              <Link
                key={p.slug}
                to="/blog/$slug"
                params={{ slug: p.slug }}
                preload="intent"
                className="group block rounded-lg bg-mojo-cream border border-mojo-border p-6 hover:border-mojo-clay transition-colors"
              >
                <div className="text-xs uppercase tracking-[0.18em] text-mojo-mute">
                  <time dateTime={p.date}>{p.dateLabel}</time>
                </div>
                <h3 className="mt-3 font-display text-lg md:text-xl text-mojo-ink leading-snug group-hover:text-mojo-clay-deep transition-colors">
                  {p.title}
                </h3>
                <p className="mt-3 text-mojo-mute text-sm leading-relaxed">
                  {p.excerpt}
                </p>
                <span className="mt-4 inline-block text-sm font-medium text-mojo-clay group-hover:text-mojo-clay-deep">
                  Read →
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/"
              className="inline-flex items-center rounded-md border border-mojo-border bg-mojo-cream px-5 py-2.5 text-sm font-medium text-mojo-ink hover:bg-mojo-sand transition-colors"
            >
              Back home
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}

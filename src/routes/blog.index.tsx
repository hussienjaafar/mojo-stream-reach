import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/mojo/PageShell";
import { CTABand } from "@/components/mojo/CTABand";
import { blogPosts } from "@/lib/blog-posts";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/blog/")({
  head: () =>
    pageHead({
      path: "/blog",
      title: "Field notes — Plain answers about TV advertising | Mojo",
      description:
        "Straight talk about streaming TV: what it costs, what platforms hide, and how to buy it well. No jargon, no fluff.",
    }),
  component: BlogIndex,
});

function BlogIndex() {
  const posts = blogPosts;
  return (
    <PageShell>
      <section className="border-b border-mojo-border">
        <div className="mx-auto max-w-6xl px-6 pt-20 pb-16 md:pt-28 md:pb-20">
          <div className="max-w-3xl mojo-fade-up">
            <div className="text-xs uppercase tracking-[0.22em] text-mojo-clay-deep font-medium">
              Field notes
            </div>
            <h1 className="mt-5 font-display text-4xl sm:text-5xl md:text-6xl leading-[1.05] text-mojo-ink">
              Plain answers about TV advertising.
            </h1>
            <p className="mt-6 text-lg text-mojo-mute max-w-2xl leading-relaxed">
              What things cost, what's actually working, and what the pitch
              decks leave out.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-mojo-border">
        <div className="mx-auto max-w-6xl px-6 py-20">
          {posts.length === 0 ? (
            <div className="rounded-lg border border-dashed border-mojo-border bg-mojo-cream-2 p-12 text-center">
              <h2 className="font-display text-2xl text-mojo-ink">
                New notes coming soon.
              </h2>
              <p className="mt-3 text-mojo-mute max-w-md mx-auto">
                We're writing them the way we'd want to read them — short,
                specific, and honest. Check back shortly.
              </p>
            </div>
          ) : (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((p) => (
                <Link
                  key={p.slug}
                  to="/blog/$slug"
                  params={{ slug: p.slug }}
                  preload="intent"
                  className="group flex flex-col rounded-lg bg-mojo-cream border border-mojo-border overflow-hidden hover:border-mojo-clay transition-colors"
                >
                  <div
                    className="aspect-[16/10] bg-gradient-to-br from-mojo-sand to-mojo-cream-2 relative"
                    aria-hidden="true"
                  >
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="font-display text-6xl text-mojo-clay/40">
                        M
                      </span>
                    </div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="text-xs uppercase tracking-[0.18em] text-mojo-mute">
                      <time dateTime={p.date}>{p.dateLabel}</time>
                    </div>
                    <h2 className="mt-3 font-display text-xl md:text-2xl text-mojo-ink leading-snug group-hover:text-mojo-clay-deep transition-colors">
                      {p.title}
                    </h2>
                    <p className="mt-3 text-mojo-mute text-base leading-relaxed flex-1">
                      {p.excerpt}
                    </p>
                    <span className="mt-5 text-sm font-medium text-mojo-clay group-hover:text-mojo-clay-deep">
                      Read →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      <CTABand />
    </PageShell>
  );
}

import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { PageShell } from "./PageShell";
import { CTABand } from "./CTABand";
import { getRelatedPosts, type BlogPostMeta } from "@/lib/blog-posts";

interface Props {
  post: BlogPostMeta;
  children: ReactNode;
}

export function PostLayout({ post, children }: Props) {
  const related = getRelatedPosts(post.slug);
  return (
    <PageShell>
      <article className="border-b border-mojo-border">
        <div className="mx-auto max-w-3xl px-6 pt-20 pb-16 md:pt-28">
          <div className="mojo-fade-up">
            <Link
              to="/blog"
              className="text-xs uppercase tracking-[0.22em] text-mojo-clay font-medium hover:text-mojo-clay-deep"
            >
              ← Field notes
            </Link>
            <h1 className="mt-6 font-display text-4xl sm:text-5xl md:text-6xl leading-[1.05] text-mojo-ink">
              {post.title}
            </h1>
            <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-mojo-mute">
              <span>{post.author}</span>
              <span aria-hidden>·</span>
              <time dateTime={post.date}>{post.dateLabel}</time>
              <span aria-hidden>·</span>
              <span>{post.readMinutes} min read</span>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-3xl px-6 pb-24">
          <div className="prose-mojo max-w-[68ch] text-mojo-ink/90 text-lg leading-[1.7]">
            {children}
          </div>
        </div>
      </article>

      {related.length > 0 && (
        <section className="bg-mojo-cream-2 border-b border-mojo-border">
          <div className="mx-auto max-w-5xl px-6 py-20">
            <div className="text-xs uppercase tracking-[0.22em] text-mojo-clay font-medium">
              Keep reading
            </div>
            <h2 className="mt-4 font-display text-3xl md:text-4xl text-mojo-ink">
              Related field notes.
            </h2>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  to="/blog/$slug"
                  params={{ slug: r.slug }}
                  className="group block rounded-lg bg-mojo-cream border border-mojo-border p-6 hover:border-mojo-clay transition-colors"
                  preload="intent"
                >
                  <div className="text-xs uppercase tracking-[0.18em] text-mojo-mute">
                    {r.dateLabel}
                  </div>
                  <h3 className="mt-3 font-display text-xl md:text-2xl text-mojo-ink leading-snug group-hover:text-mojo-clay-deep transition-colors">
                    {r.title}
                  </h3>
                  <p className="mt-3 text-mojo-mute text-base leading-relaxed">
                    {r.excerpt}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTABand />
    </PageShell>
  );
}

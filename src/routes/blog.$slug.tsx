import { createFileRoute, notFound } from "@tanstack/react-router";
import { PostLayout } from "@/components/mojo/PostLayout";
import { getPost } from "@/lib/blog-content";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = getPost(params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Not found — Mojo" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const { post } = loaderData;
    const url = `https://mojo-stream-reach.lovable.app/blog/${params.slug}`;
    return {
      meta: [
        { title: post.seoTitle },
        { name: "description", content: post.seoDescription },
        { property: "og:title", content: post.meta.title },
        { property: "og:description", content: post.seoDescription },
        { property: "og:type", content: "article" },
        { property: "og:url", content: url },
        { property: "article:published_time", content: post.meta.date },
        { name: "twitter:title", content: post.meta.title },
        { name: "twitter:description", content: post.seoDescription },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: post.meta.title,
            description: post.seoDescription,
            author: { "@type": "Organization", name: "Mojo" },
            datePublished: post.meta.date,
            mainEntityOfPage: url,
          }),
        },
      ],
    };
  },
  component: PostPage,
  notFoundComponent: PostNotFound,
});

function PostPage() {
  const { post } = Route.useLoaderData();
  return <PostLayout post={post.meta}>{post.body}</PostLayout>;
}

function PostNotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-mojo-cream px-6">
      <div className="max-w-md text-center">
        <h1 className="font-display text-4xl text-mojo-ink">
          That note isn't here.
        </h1>
        <p className="mt-3 text-mojo-mute">
          It may have moved. Head back to field notes to see what's current.
        </p>
        <a
          href="/blog"
          className="mt-6 inline-flex items-center rounded-md bg-mojo-clay px-4 py-2 text-sm font-medium text-mojo-cream hover:bg-mojo-clay-deep transition-colors"
        >
          Back to field notes
        </a>
      </div>
    </div>
  );
}

import { createFileRoute, notFound } from "@tanstack/react-router";
import { PostLayout } from "@/components/mojo/PostLayout";
import { getPost } from "@/lib/blog-content";
import { pageHead, articleJsonLd } from "@/lib/seo";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = getPost(params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) {
      return pageHead({
        path: `/blog/${params.slug}`,
        title: "Not found — Mojo",
        description: "That note isn't here.",
        robots: "noindex",
      });
    }
    const { post } = loaderData;
    const path = `/blog/${params.slug}`;
    return pageHead({
      path,
      title: post.seoTitle,
      description: post.seoDescription,
      ogType: "article",
      jsonLd: [
        articleJsonLd({
          title: post.meta.title,
          description: post.seoDescription,
          path,
          datePublished: post.meta.date,
          author: post.meta.author,
        }),
      ],
    });
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

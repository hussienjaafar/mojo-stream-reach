import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { SITE_URL, SITEMAP_STATIC_PATHS } from "@/lib/seo";
import { blogPosts } from "@/lib/blog-posts";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const paths = [
          ...SITEMAP_STATIC_PATHS,
          ...blogPosts.map((p) => `/blog/${p.slug}`),
        ];

        const urls = paths
          .map(
            (p) =>
              `  <url>\n    <loc>${SITE_URL}${p}</loc>\n    <changefreq>weekly</changefreq>\n  </url>`,
          )
          .join("\n");

        const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});

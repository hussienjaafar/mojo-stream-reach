// Central SEO config. Swap SITE_URL when the live domain is chosen.
export const SITE_URL = "https://TODO-DOMAIN.com";

// TODO-OG-IMAGE: replace public/og-image.png with the real 1200x630 asset.
export const OG_IMAGE = `${SITE_URL}/og-image.png`;

export const absUrl = (path: string) =>
  `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;

// -----------------------------------------------------------------------------
// Sitewide JSON-LD (rendered from __root.tsx on every page)
// -----------------------------------------------------------------------------
export const ORGANIZATION_JSONLD = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Mojo",
  url: SITE_URL,
  logo: OG_IMAGE,
  sameAs: [] as string[],
};

// NAP placeholders — replace before launch.
export const LOCAL_BUSINESS_JSONLD = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Mojo",
  url: SITE_URL,
  image: OG_IMAGE,
  telephone: "TODO-PHONE",
  address: {
    "@type": "PostalAddress",
    streetAddress: "TODO-STREET",
    addressLocality: "Dearborn",
    addressRegion: "MI",
    postalCode: "TODO-ZIP",
    addressCountry: "US",
  },
  areaServed: { "@type": "State", name: "Michigan" },
};

// -----------------------------------------------------------------------------
// Reusable JSON-LD builders
// -----------------------------------------------------------------------------
export function faqJsonLd(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function serviceJsonLd(input: {
  name: string;
  description: string;
  path: string;
  serviceType?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: input.name,
    description: input.description,
    serviceType: input.serviceType ?? "Streaming TV advertising",
    provider: { "@type": "Organization", name: "Mojo", url: SITE_URL },
    areaServed: { "@type": "State", name: "Michigan" },
    url: absUrl(input.path),
  };
}

export function articleJsonLd(input: {
  title: string;
  description: string;
  path: string;
  datePublished: string;
  author?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: input.title,
    description: input.description,
    author: {
      "@type": "Organization",
      name: input.author ?? "Mojo",
    },
    datePublished: input.datePublished,
    mainEntityOfPage: absUrl(input.path),
    image: OG_IMAGE,
    publisher: {
      "@type": "Organization",
      name: "Mojo",
      logo: { "@type": "ImageObject", url: OG_IMAGE },
    },
  };
}

// -----------------------------------------------------------------------------
// Per-page head builder — returns { meta, links, scripts } to spread into head()
// -----------------------------------------------------------------------------
export interface PageSeoInput {
  path: string;
  title: string;
  description: string;
  ogType?: "website" | "article";
  ogImage?: string;
  robots?: string;
  jsonLd?: unknown[];
}

export function pageHead(input: PageSeoInput) {
  const url = absUrl(input.path);
  const image = input.ogImage ?? OG_IMAGE;

  const meta: Array<Record<string, string>> = [
    { title: input.title },
    { name: "description", content: input.description },
    { property: "og:title", content: input.title },
    { property: "og:description", content: input.description },
    { property: "og:type", content: input.ogType ?? "website" },
    { property: "og:url", content: url },
    { property: "og:image", content: image },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: input.title },
    { name: "twitter:description", content: input.description },
    { name: "twitter:image", content: image },
  ];
  if (input.robots) meta.push({ name: "robots", content: input.robots });

  const scripts = (input.jsonLd ?? []).map((obj) => ({
    type: "application/ld+json",
    children: JSON.stringify(obj),
  }));

  return {
    meta,
    links: [{ rel: "canonical", href: url }],
    scripts,
  };
}

// -----------------------------------------------------------------------------
// Sitemap route list (kept here so sitemap.xml + code stay in sync).
// Add new public routes below.
// -----------------------------------------------------------------------------
export const SITEMAP_STATIC_PATHS: string[] = [
  "/",
  "/how-it-works",
  "/results",
  "/about",
  "/contact",
  "/free-audit",
  "/partners",
  "/blog",
  "/industries/home-services",
  "/industries/legal",
  "/industries/healthcare",
  "/industries/auto-dealers",
  "/who-we-serve/political-advocacy",
  "/privacy",
  "/terms",
];

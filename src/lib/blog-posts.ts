export type BlogPostMeta = {
  slug: string;
  title: string;
  excerpt: string;
  date: string; // ISO
  dateLabel: string;
  author: string;
  readMinutes: number;
};

export const blogPosts: BlogPostMeta[] = [
  {
    slug: "what-does-streaming-tv-advertising-cost",
    title: "What does streaming TV advertising cost?",
    excerpt:
      "A plain-English walk through CPMs, fee stacks, and the tech tax — so you know what you're actually paying for.",
    date: "2025-11-04",
    dateLabel: "November 4, 2025",
    author: "The Mojo team",
    readMinutes: 6,
  },
  {
    slug: "what-self-serve-tv-ad-platforms-dont-tell-you",
    title: "What self-serve TV ad platforms don't tell you",
    excerpt:
      "The dashboard is easy. The inventory, the fees, the creative, and the measurement are not.",
    date: "2025-11-18",
    dateLabel: "November 18, 2025",
    author: "The Mojo team",
    readMinutes: 7,
  },
  {
    slug: "should-you-take-the-tv-stations-streaming-offer",
    title: "The TV station offered us streaming ads. Should we take it?",
    excerpt:
      "Stations are good at what they do. Here's how to tell whether their streaming pitch is the right fit for your business.",
    date: "2025-12-02",
    dateLabel: "December 2, 2025",
    author: "The Mojo team",
    readMinutes: 6,
  },
];

export function getRelatedPosts(slug: string, count = 2) {
  return blogPosts.filter((p) => p.slug !== slug).slice(0, count);
}

import { Link } from "@tanstack/react-router";

const cols = [
  {
    title: "Company",
    links: [
      { to: "/about", label: "About" },
      { to: "/how-it-works", label: "How it works" },
      { to: "/results", label: "Results" },
      { to: "/partners", label: "Partners" },
    ],
  },
  {
    title: "Industries",
    links: [
      { to: "/industries/home-services", label: "Home services" },
      { to: "/industries/legal", label: "Legal" },
      { to: "/industries/healthcare", label: "Healthcare" },
      { to: "/industries/auto-dealers", label: "Auto dealers" },
      { to: "/who-we-serve/political-advocacy", label: "Political & advocacy" },
    ],
  },
  {
    title: "Resources",
    links: [
      { to: "/blog", label: "Blog" },
      { to: "/free-audit", label: "Free audit" },
      { to: "/contact", label: "Contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { to: "/privacy", label: "Privacy" },
      { to: "/terms", label: "Terms" },
    ],
  },
] as const;

export function Footer() {
  return (
    <footer className="bg-mojo-ink text-mojo-cream">
      <div className="mx-auto max-w-6xl px-6 py-16 grid gap-12 md:grid-cols-6">
        <div className="md:col-span-2">
          <div className="font-display text-3xl">Mojo</div>
          <p className="mt-3 text-mojo-cream/70 text-sm max-w-xs">
            Streaming TV advertising built for mid-market businesses.
          </p>

          {/* NAP block — placeholder */}
          <address className="mt-6 not-italic text-sm text-mojo-cream/70 leading-6">
            <div>Mojo TV, Inc.</div>
            <div>[Street address]</div>
            <div>[City, ST ZIP]</div>
            <div>[Phone]</div>
          </address>
        </div>

        {cols.map((c) => (
          <div key={c.title}>
            <div className="text-xs uppercase tracking-widest text-mojo-cream/50">
              {c.title}
            </div>
            <ul className="mt-4 space-y-3 text-sm">
              {c.links.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-mojo-cream/85 hover:text-mojo-cream">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-mojo-cream/10">
        <div className="mx-auto max-w-6xl px-6 py-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-mojo-cream/50">
          <div>© {new Date().getFullYear()} Mojo TV, Inc.</div>
          <div>Streaming TV advertising for mid-market businesses.</div>
        </div>
      </div>
    </footer>
  );
}

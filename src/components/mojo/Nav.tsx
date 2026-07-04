import { Link } from "@tanstack/react-router";
import { useState } from "react";

const navLinks = [
  { to: "/how-it-works", label: "How it works" },
  { to: "/results", label: "Results" },
  { to: "/industries/home-services", label: "Industries" },
  { to: "/about", label: "About" },
  { to: "/blog", label: "Blog" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-mojo-cream border-b border-mojo-border">
      <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
        <Link to="/" className="font-display text-2xl text-mojo-ink tracking-tight">
          Mojo
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm text-mojo-ink/80">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="hover:text-mojo-clay transition-colors"
              activeProps={{ className: "text-mojo-clay" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link
            to="/contact"
            className="inline-flex items-center rounded-md bg-mojo-clay px-4 py-2 text-sm font-medium text-mojo-cream hover:bg-mojo-clay-deep transition-colors"
          >
            Book a call
          </Link>
        </div>

        <button
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          className="md:hidden p-2 -mr-2 text-mojo-ink focus:outline-none focus-visible:ring-2 focus-visible:ring-mojo-clay rounded-md"
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <>
                <path d="M4 7h16" />
                <path d="M4 12h16" />
                <path d="M4 17h16" />
              </>
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div id="mobile-menu" className="md:hidden border-t border-mojo-border bg-mojo-cream">
          <div className="mx-auto max-w-6xl px-6 py-4 flex flex-col gap-4">
            {navLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="text-mojo-ink text-base"
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="inline-flex items-center justify-center rounded-md bg-mojo-clay px-4 py-2.5 text-sm font-medium text-mojo-cream"
            >
              Book a call
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

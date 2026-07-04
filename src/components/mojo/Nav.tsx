import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const industryLinks = [
  { to: "/industries/home-services", label: "Home services" },
  { to: "/industries/legal", label: "Legal" },
  { to: "/industries/healthcare", label: "Healthcare" },
  { to: "/industries/auto-dealers", label: "Auto dealers" },
] as const;

const navLinks = [
  { to: "/how-it-works", label: "How it works" },
  { to: "/results", label: "Results" },
  { to: "/about", label: "About" },
  { to: "/blog", label: "Blog" },
] as const;

export function Nav() {
  const [open, setOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-mojo-cream border-b border-mojo-border">
      <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
        <Link to="/" className="font-display text-2xl text-mojo-ink tracking-tight">
          Mojo
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm text-mojo-ink/80">
          <Link
            to="/how-it-works"
            className="hover:text-mojo-clay transition-colors"
            activeProps={{ className: "text-mojo-clay" }}
          >
            How it works
          </Link>
          <Link
            to="/results"
            className="hover:text-mojo-clay transition-colors"
            activeProps={{ className: "text-mojo-clay" }}
          >
            Results
          </Link>

          <DropdownMenu open={industriesOpen} onOpenChange={setIndustriesOpen}>
            <DropdownMenuTrigger
              className="inline-flex items-center gap-1 text-mojo-ink/80 hover:text-mojo-clay transition-colors focus:outline-none data-[state=open]:text-mojo-clay"
              aria-label="Industries menu"
            >
              Industries
              <ChevronDown
                className={`h-3.5 w-3.5 transition-transform ${
                  industriesOpen ? "rotate-180" : ""
                }`}
                aria-hidden="true"
              />
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="start"
              sideOffset={12}
              className="min-w-56 rounded-xl border border-mojo-border bg-mojo-cream p-2 shadow-none"
            >
              {industryLinks.map((i) => (
                <DropdownMenuItem key={i.to} asChild>
                  <Link
                    to={i.to}
                    className="block w-full rounded-md px-3 py-2 text-sm text-mojo-ink hover:bg-mojo-cream-2 focus:bg-mojo-cream-2 focus:text-mojo-clay-deep cursor-pointer"
                  >
                    {i.label}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {navLinks.slice(2).map((l) => (
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
            <Link to="/how-it-works" onClick={() => setOpen(false)} className="text-mojo-ink text-base">
              How it works
            </Link>
            <Link to="/results" onClick={() => setOpen(false)} className="text-mojo-ink text-base">
              Results
            </Link>

            <div>
              <div
                id="mobile-industries-label"
                className="text-xs uppercase tracking-[0.18em] text-mojo-mute font-medium"
              >
                Industries
              </div>
              <ul
                aria-labelledby="mobile-industries-label"
                className="mt-3 flex flex-col gap-3 pl-3 border-l border-mojo-border"
              >
                {industryLinks.map((i) => (
                  <li key={i.to}>
                    <Link
                      to={i.to}
                      onClick={() => setOpen(false)}
                      className="text-mojo-ink text-base block"
                    >
                      {i.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <Link to="/about" onClick={() => setOpen(false)} className="text-mojo-ink text-base">
              About
            </Link>
            <Link to="/blog" onClick={() => setOpen(false)} className="text-mojo-ink text-base">
              Blog
            </Link>

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

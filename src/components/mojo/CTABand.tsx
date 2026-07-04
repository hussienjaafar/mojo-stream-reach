import { Link } from "@tanstack/react-router";

export function CTABand() {
  return (
    <section className="bg-mojo-cream-2 border-t border-mojo-border">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28 text-center">
        <h2 className="font-display text-4xl md:text-6xl text-mojo-ink">
          Let's put you on TV.
        </h2>
        <p className="mt-4 text-mojo-mute max-w-xl mx-auto">
          A short call, a plain-English plan, and a spot on the biggest screens your customers watch.
        </p>
        <div className="mt-8">
          <Link
            to="/contact"
            className="inline-flex items-center rounded-md bg-mojo-clay px-6 py-3 text-sm font-medium text-mojo-cream hover:bg-mojo-clay-deep transition-colors"
          >
            Book a call
          </Link>
        </div>
      </div>
    </section>
  );
}

import type { ReactNode } from "react";
import { PageShell } from "./PageShell";
import { CTABand } from "./CTABand";

interface PlaceholderPageProps {
  eyebrow: string;
  title: string;
  subhead?: string;
  children?: ReactNode;
  showCTA?: boolean;
}

export function PlaceholderPage({
  eyebrow,
  title,
  subhead,
  children,
  showCTA = true,
}: PlaceholderPageProps) {
  return (
    <PageShell>
      <section className="border-b border-mojo-border">
        <div className="mx-auto max-w-4xl px-6 py-24 md:py-32">
          <div className="text-xs uppercase tracking-[0.22em] text-mojo-clay-deep font-medium">
            {eyebrow}
          </div>
          <h1 className="mt-5 font-display text-4xl md:text-6xl text-mojo-ink leading-[1.05]">
            {title}
          </h1>
          {subhead && (
            <p className="mt-6 text-lg text-mojo-mute leading-relaxed max-w-2xl">
              {subhead}
            </p>
          )}
          {children && <div className="mt-10">{children}</div>}
        </div>
      </section>
      {showCTA && <CTABand />}
    </PageShell>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/mojo/PageShell";
import { CTABand } from "@/components/mojo/CTABand";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/terms")({
  head: () =>
    pageHead({
      path: "/terms",
      title: "Terms of service — Mojo",
      description:
        "The plain-language terms that govern your use of this website and any engagement with Mojo.",
    }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <PageShell>
      <article className="border-b border-mojo-border">
        <div className="mx-auto max-w-3xl px-6 py-24 md:py-32">
          <div className="text-xs uppercase tracking-[0.22em] text-mojo-clay-deep font-medium">
            Terms of service
          </div>
          <h1 className="mt-5 font-display text-4xl md:text-6xl text-mojo-ink leading-[1.05]">
            The fine print, in plain English.
          </h1>
          <p className="mt-6 text-sm text-mojo-mute">
            Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
            {" · "}<em>FOR-ATTORNEY-REVIEW — plain-language placeholder, not a substitute for a signed engagement letter.</em>
          </p>

          <div className="mt-12 space-y-10 text-mojo-ink/90 leading-relaxed text-[1.02rem]">
            <section>
              <h2 className="font-display text-2xl md:text-3xl text-mojo-ink">Using this website</h2>
              <p className="mt-3">
                You can browse mojo.tv, read our writing, and submit our
                forms. Don't try to break the site, scrape it at scale,
                impersonate anyone, or use it to send unlawful content.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl md:text-3xl text-mojo-ink">Our content</h2>
              <p className="mt-3">
                Copy, design, and images on this site are ours (or used with
                permission) and are protected by copyright. You're welcome
                to quote short passages with attribution and a link back;
                everything else needs written permission.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl md:text-3xl text-mojo-ink">Client engagements</h2>
              <p className="mt-3">
                A form submission is not a contract. Any client engagement is
                governed by a separate written agreement (statement of work
                or master services agreement) that sets fees, deliverables,
                media commitments, IP ownership of creative, and
                confidentiality. If anything in that agreement conflicts
                with these terms, the agreement controls.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl md:text-3xl text-mojo-ink">No warranties</h2>
              <p className="mt-3">
                This website is provided "as is." We do our best to keep it
                accurate and current, but we don't warrant that everything
                on it is free of errors, uninterrupted, or fit for any
                specific purpose. Estimated pricing, timelines, and
                performance ranges are illustrative — actual results depend
                on your market, creative, and media conditions.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl md:text-3xl text-mojo-ink">Limitation of liability</h2>
              <p className="mt-3">
                To the maximum extent permitted by law, Mojo isn't liable
                for indirect, incidental, or consequential damages arising
                from your use of this website. FOR-ATTORNEY-REVIEW: confirm
                jurisdiction-specific limitation and cap language.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl md:text-3xl text-mojo-ink">Third-party links</h2>
              <p className="mt-3">
                We sometimes link to outside pages for context. We don't
                control those sites and aren't responsible for their
                content or their handling of your data.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl md:text-3xl text-mojo-ink">Governing law</h2>
              <p className="mt-3">
                These terms are governed by the laws of the State of
                Michigan, without regard to conflict-of-law principles.
                FOR-ATTORNEY-REVIEW: confirm venue and any arbitration
                clause preferences.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl md:text-3xl text-mojo-ink">Changes</h2>
              <p className="mt-3">
                We may update these terms; we'll revise the "last updated"
                date and, for material changes, note them at the top of the
                page.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl md:text-3xl text-mojo-ink">Contact</h2>
              <p className="mt-3">
                Questions about these terms? Email{" "}
                <a href="mailto:legal@mojo.tv" className="text-mojo-clay-deep underline underline-offset-4 hover:text-mojo-clay">
                  legal@mojo.tv
                </a>
                .
              </p>
            </section>
          </div>
        </div>
      </article>
      <CTABand />
    </PageShell>
  );
}

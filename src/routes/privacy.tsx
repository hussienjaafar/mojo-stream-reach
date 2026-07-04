import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/mojo/PageShell";
import { CTABand } from "@/components/mojo/CTABand";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/privacy")({
  head: () =>
    pageHead({
      path: "/privacy",
      title: "Privacy policy — Mojo",
      description:
        "How Mojo collects, uses, and protects your data — analytics, form submissions, and cookies explained in plain English.",
    }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <PageShell>
      <article className="border-b border-mojo-border">
        <div className="mx-auto max-w-3xl px-6 py-24 md:py-32">
          <div className="text-xs uppercase tracking-[0.22em] text-mojo-clay-deep font-medium">
            Privacy policy
          </div>
          <h1 className="mt-5 font-display text-4xl md:text-6xl text-mojo-ink leading-[1.05]">
            How we handle your data.
          </h1>
          <p className="mt-6 text-sm text-mojo-mute">
            Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
            {" · "}<em>FOR-ATTORNEY-REVIEW — plain-language placeholder, not legal advice.</em>
          </p>

          <div className="mt-12 space-y-10 text-mojo-ink/90 leading-relaxed text-[1.02rem]">
            <section>
              <h2 className="font-display text-2xl md:text-3xl text-mojo-ink">Who we are</h2>
              <p className="mt-3">
                Mojo ("we," "us") is a streaming TV advertising agency. This
                policy covers the information collected through this website
                and through our client engagements.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl md:text-3xl text-mojo-ink">What we collect</h2>
              <ul className="mt-3 list-disc pl-5 space-y-2">
                <li>
                  <strong>Information you give us:</strong> name, company,
                  email, phone, website, industry, marketing budget range, and
                  anything you write in a message. Submitted through our
                  contact, free-audit, and partner forms.
                </li>
                <li>
                  <strong>Marketing attribution:</strong> UTM parameters
                  (source, medium, campaign, term, content), the referring
                  URL, and the first page you landed on. Stored in your
                  browser's sessionStorage so it can travel with a form
                  submission.
                </li>
                <li>
                  <strong>Analytics:</strong> pages viewed, approximate
                  location, device and browser type, and how you arrived —
                  collected by the third-party services listed below.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-2xl md:text-3xl text-mojo-ink">How we use it</h2>
              <ul className="mt-3 list-disc pl-5 space-y-2">
                <li>Reply to your inquiry and staff the engagement if you become a client.</li>
                <li>Understand which marketing channels bring us the right conversations.</li>
                <li>Improve this website and our published writing.</li>
              </ul>
              <p className="mt-3">
                We do not sell your personal information. We do not share form
                submissions with third parties except the service providers
                needed to deliver our service (see below).
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl md:text-3xl text-mojo-ink">Analytics and pixels</h2>
              <p className="mt-3">
                This site uses <strong>Google Analytics 4</strong> to measure
                traffic and <strong>Meta (Facebook) Pixel</strong> to measure
                the effectiveness of paid campaigns. Both providers set
                cookies and collect device identifiers subject to their own
                privacy policies. A conversion event fires only after you
                submit a form and land on our thank-you page.
              </p>
              <p className="mt-3">
                You can opt out of Google Analytics with the{" "}
                <a
                  href="https://tools.google.com/dlpage/gaoptout"
                  className="text-mojo-clay-deep underline underline-offset-4 hover:text-mojo-clay"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  official browser add-on
                </a>
                , and manage Meta ad preferences inside your Facebook account.
                Most browsers let you block third-party cookies globally.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl md:text-3xl text-mojo-ink">Form data storage</h2>
              <p className="mt-3">
                Form submissions are stored in our backend database (managed
                cloud infrastructure) and, where configured, forwarded to a
                notification email address and/or an outbound webhook for
                CRM ingestion. We keep submissions for as long as reasonably
                needed to respond and, for clients, for the life of the
                engagement plus a reasonable business-records retention
                window. FOR-ATTORNEY-REVIEW: confirm final retention period.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl md:text-3xl text-mojo-ink">Your choices</h2>
              <p className="mt-3">
                You can ask us to access, correct, or delete personal
                information we hold about you. Email{" "}
                <a href="mailto:privacy@mojo.tv" className="text-mojo-clay-deep underline underline-offset-4 hover:text-mojo-clay">
                  privacy@mojo.tv
                </a>{" "}
                and we'll respond within a reasonable timeframe.
                FOR-ATTORNEY-REVIEW: add state-specific rights (CCPA/CPRA,
                other applicable regimes) once counsel has reviewed.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl md:text-3xl text-mojo-ink">Security</h2>
              <p className="mt-3">
                We use industry-standard controls — encrypted transport
                (HTTPS), access controls on our backend, and reputable
                subprocessors — to protect the information you send us. No
                internet transmission is ever perfectly secure.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl md:text-3xl text-mojo-ink">Changes</h2>
              <p className="mt-3">
                We'll post any material updates to this page and revise the
                "last updated" date above.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl md:text-3xl text-mojo-ink">Contact</h2>
              <p className="mt-3">
                Questions? Email{" "}
                <a href="mailto:privacy@mojo.tv" className="text-mojo-clay-deep underline underline-offset-4 hover:text-mojo-clay">
                  privacy@mojo.tv
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

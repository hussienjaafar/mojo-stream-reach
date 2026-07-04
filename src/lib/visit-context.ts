// Small helpers for tracking marketing context across a visit.
// UTM params come from the first URL that had them, then persist for the session
// so a lead who lands on /industries/legal?utm_source=google and later fills the
// form on /free-audit still gets attributed correctly.

const UTM_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
] as const;

export type UtmParams = Partial<Record<(typeof UTM_KEYS)[number], string>>;

const SS_UTM_KEY = "mojo:utm";
const SS_REFERRER_KEY = "mojo:referrer";
const SS_LANDING_KEY = "mojo:landing";

function isBrowser() {
  return typeof window !== "undefined";
}

export function captureVisitContext() {
  if (!isBrowser()) return;
  try {
    // Landing page + external referrer are captured once per session.
    if (!window.sessionStorage.getItem(SS_LANDING_KEY)) {
      window.sessionStorage.setItem(
        SS_LANDING_KEY,
        window.location.pathname + window.location.search,
      );
    }
    if (!window.sessionStorage.getItem(SS_REFERRER_KEY)) {
      const ref = document.referrer || "";
      // Only store external referrers.
      if (ref && !ref.startsWith(window.location.origin)) {
        window.sessionStorage.setItem(SS_REFERRER_KEY, ref);
      }
    }
    // UTM params — first-touch attribution.
    const url = new URL(window.location.href);
    const incoming: UtmParams = {};
    let hasAny = false;
    for (const key of UTM_KEYS) {
      const v = url.searchParams.get(key);
      if (v) {
        incoming[key] = v;
        hasAny = true;
      }
    }
    if (hasAny && !window.sessionStorage.getItem(SS_UTM_KEY)) {
      window.sessionStorage.setItem(SS_UTM_KEY, JSON.stringify(incoming));
    }
  } catch {
    /* sessionStorage unavailable — non-fatal */
  }
}

export function readVisitContext(): {
  utm: UtmParams;
  referrer: string;
  landing_page: string;
} {
  if (!isBrowser()) return { utm: {}, referrer: "", landing_page: "" };
  let utm: UtmParams = {};
  try {
    const raw = window.sessionStorage.getItem(SS_UTM_KEY);
    if (raw) utm = JSON.parse(raw);
  } catch {
    /* ignore */
  }
  const referrer = window.sessionStorage.getItem(SS_REFERRER_KEY) || "";
  const landing_page =
    window.sessionStorage.getItem(SS_LANDING_KEY) ||
    window.location.pathname + window.location.search;
  return { utm, referrer, landing_page };
}

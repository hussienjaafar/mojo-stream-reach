import { useEffect, useRef, useState, type ReactNode } from "react";

// Six placement channels. Copy kept short and voice-consistent with the rest of the site.
const CHANNELS: {
  code: string;
  eyebrow: string;
  title: string;
  body: string;
  Screen: () => ReactNode;
}[] = [
  {
    code: "CH 01",
    eyebrow: "Prime time",
    title: "The show they sit down for.",
    body:
      "The 8pm drama, the Sunday-night lineup, the episode the whole house waits until after dinner to start. That's where your spot lands.",
    Screen: PrimeTimeScreen,
  },
  {
    code: "CH 02",
    eyebrow: "Free ad-supported channels",
    title: "The endless free tier.",
    body:
      "Pluto, Tubi, the Roku Channel — always-on programming people flip to when nothing else is queued up. Cheap inventory, real households.",
    Screen: FreeChannelsScreen,
  },
  {
    code: "CH 03",
    eyebrow: "News",
    title: "Morning coffee, evening wrap.",
    body:
      "Local and national news streams that run in the background from the first pot of coffee to the closing headlines.",
    Screen: NewsScreen,
  },
  {
    code: "CH 04",
    eyebrow: "Lifestyle",
    title: "Kitchen on, TV on.",
    body:
      "Food, home, and lifestyle programming that plays while dinner is cooking and the family is half-watching from the counter.",
    Screen: LifestyleScreen,
  },
  {
    code: "CH 05",
    eyebrow: "Movies",
    title: "Friday-night feature.",
    body:
      "Ad-supported movie tiers on the platforms your customers already pay for — a captive audience settling in for two hours.",
    Screen: MoviesScreen,
  },
  {
    code: "CH 06",
    eyebrow: "YouTube on the TV",
    title: "The big screen, the biggest library.",
    body:
      "Long-form YouTube watched in the living room, on the actual television — not a phone in a lap.",
    Screen: YouTubeTVScreen,
  },
];

export function ChannelFlip() {
  const [active, setActive] = useState(0);
  const [reduced, setReduced] = useState(false);
  const blockRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = () => setReduced(mq.matches);
    onChange();
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const desktop = window.matchMedia("(min-width: 1024px)");
    if (!desktop.matches) return;

    const io = new IntersectionObserver(
      (entries) => {
        // Pick the entry closest to viewport center among currently-intersecting blocks.
        const viewportCenter = window.innerHeight / 2;
        let best: { idx: number; dist: number } | null = null;
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const idx = Number((entry.target as HTMLElement).dataset.channelIdx);
          const rect = entry.boundingClientRect;
          const center = rect.top + rect.height / 2;
          const dist = Math.abs(center - viewportCenter);
          if (!best || dist < best.dist) best = { idx, dist };
        }
        if (best) setActive(best.idx);
      },
      {
        // Trigger around the vertical middle of the viewport.
        rootMargin: "-45% 0px -45% 0px",
        threshold: 0,
      }
    );

    blockRefs.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-start">
      {/* LEFT: six placement blocks in normal document flow */}
      <div className="space-y-16 lg:space-y-40">
        {CHANNELS.map((ch, i) => (
          <div
            key={ch.code}
            ref={(el) => {
              blockRefs.current[i] = el;
            }}
            data-channel-idx={i}
          >
            <div className="text-xs uppercase tracking-[0.22em] text-mojo-clay-deep font-medium">
              {ch.code} · {ch.eyebrow}
            </div>
            <h3 className="mt-3 font-display text-2xl md:text-3xl text-mojo-ink leading-tight">
              {ch.title}
            </h3>
            <p className="mt-4 text-mojo-mute leading-relaxed max-w-lg">
              {ch.body}
            </p>

            {/* Inline screen for mobile only. Hidden on lg. */}
            <div className="mt-6 lg:hidden">
              <MiniScreen>{ch.Screen()}</MiniScreen>
            </div>
          </div>
        ))}
      </div>

      {/* RIGHT: sticky TV, desktop only. All 6 SVGs stay in the DOM, crossfaded via opacity. */}
      <div className="hidden lg:block">
        <div className="sticky top-28">
          <StickyTV
            active={active}
            reduced={reduced}
            channels={CHANNELS}
          />
        </div>
      </div>
    </div>
  );
}

function StickyTV({
  active,
  reduced,
  channels,
}: {
  active: number;
  reduced: boolean;
  channels: typeof CHANNELS;
}) {
  return (
    <div className="relative">
      <div
        className="relative rounded-2xl overflow-hidden bg-mojo-cream"
        style={{ border: "1.5px solid var(--mojo-clay)" }}
      >
        <div className="relative aspect-video w-full">
          {channels.map((ch, i) => (
            <div
              key={ch.code}
              aria-hidden={i !== active}
              className="absolute inset-0"
              style={{
                opacity: i === active ? 1 : 0,
                transition: reduced ? "none" : "opacity 300ms ease-out",
              }}
            >
              {ch.Screen()}
            </div>
          ))}

          {/* Channel number badge */}
          <div className="absolute top-3 right-3 rounded-md border border-mojo-clay bg-mojo-cream px-2 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-mojo-clay-deep">
            {channels[active].code}
          </div>
        </div>
      </div>
      {/* Stand notch, matching TVFrame */}
      <div className="flex justify-center">
        <div
          className="mt-2 h-3 w-16 rounded-b-md"
          style={{
            borderLeft: "1.5px solid var(--mojo-clay)",
            borderRight: "1.5px solid var(--mojo-clay)",
            borderBottom: "1.5px solid var(--mojo-clay)",
          }}
        />
      </div>
    </div>
  );
}

function MiniScreen({ children }: { children: ReactNode }) {
  return (
    <div
      className="relative rounded-xl overflow-hidden bg-mojo-cream"
      style={{ border: "1.5px solid var(--mojo-clay)" }}
    >
      <div className="relative aspect-video w-full">{children}</div>
    </div>
  );
}

// ---------- Screen SVGs (clay strokes, no fills) ----------
const STROKE = "var(--mojo-clay)";
const svgProps = {
  viewBox: "0 0 320 180",
  preserveAspectRatio: "xMidYMid meet",
  className: "w-full h-full",
  fill: "none" as const,
  stroke: STROKE,
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

function PrimeTimeScreen() {
  // Sofa + floor lamp — a living-room evening scene.
  return (
    <svg {...svgProps}>
      {/* Floor line */}
      <path d="M20 140 H300" />
      {/* Sofa base */}
      <path d="M70 140 V100 Q70 90 80 90 H210 Q220 90 220 100 V140" />
      {/* Cushions */}
      <path d="M95 90 V70 Q95 62 103 62 H137 Q145 62 145 70 V90" />
      <path d="M145 90 V70 Q145 62 153 62 H187 Q195 62 195 70 V90" />
      {/* Sofa arms */}
      <path d="M70 100 Q60 100 60 110 V140" />
      <path d="M220 100 Q230 100 230 110 V140" />
      {/* Floor lamp */}
      <path d="M255 140 V70" />
      <path d="M240 70 L270 70 L262 45 L248 45 Z" />
      {/* Lamp glow dots */}
      <circle cx="255" cy="35" r="1.5" />
      <circle cx="245" cy="30" r="1.5" />
      <circle cx="265" cy="30" r="1.5" />
    </svg>
  );
}

function FreeChannelsScreen() {
  // 3x3 grid of small rectangles — channel guide.
  return (
    <svg {...svgProps}>
      {[0, 1, 2].map((row) =>
        [0, 1, 2].map((col) => (
          <rect
            key={`${row}-${col}`}
            x={70 + col * 65}
            y={35 + row * 40}
            width={50}
            height={28}
            rx={3}
          />
        ))
      )}
    </svg>
  );
}

function NewsScreen() {
  // News desk with ticker line at bottom.
  return (
    <svg {...svgProps}>
      {/* Anchor head */}
      <circle cx="160" cy="70" r="18" />
      {/* Shoulders / body */}
      <path d="M125 120 Q125 95 160 95 Q195 95 195 120 V135" />
      {/* Desk */}
      <path d="M80 135 H240 V150 H80 Z" />
      {/* Ticker */}
      <path d="M20 165 H300" />
      <path d="M35 165 H90" strokeWidth={4} />
      <path d="M105 165 H175" strokeWidth={4} />
      <path d="M190 165 H255" strokeWidth={4} />
    </svg>
  );
}

function LifestyleScreen() {
  // Saucepan with steam.
  return (
    <svg {...svgProps}>
      {/* Steam curls */}
      <path d="M140 40 Q135 50 140 60 Q145 70 140 80" />
      <path d="M160 30 Q155 45 160 60 Q165 75 160 85" />
      <path d="M180 40 Q175 50 180 60 Q185 70 180 80" />
      {/* Pan body */}
      <path d="M110 95 H210 L200 140 Q200 145 195 145 H125 Q120 145 120 140 Z" />
      {/* Handle */}
      <path d="M210 105 H255 Q262 105 262 112 V118" />
      {/* Rim */}
      <path d="M105 95 H215" />
    </svg>
  );
}

function MoviesScreen() {
  // Play triangle inside a film-frame rectangle with sprocket holes.
  return (
    <svg {...svgProps}>
      <rect x="55" y="35" width="210" height="110" rx="6" />
      {/* Sprocket holes */}
      {[0, 1, 2, 3, 4].map((i) => (
        <rect key={`t-${i}`} x={70 + i * 40} y={42} width={16} height={8} rx={1.5} />
      ))}
      {[0, 1, 2, 3, 4].map((i) => (
        <rect key={`b-${i}`} x={70 + i * 40} y={130} width={16} height={8} rx={1.5} />
      ))}
      {/* Play triangle */}
      <path d="M140 70 L195 90 L140 110 Z" />
    </svg>
  );
}

function YouTubeTVScreen() {
  // Generic rounded play button — no logo reproduction.
  return (
    <svg {...svgProps}>
      <rect x="90" y="55" width="140" height="80" rx="24" />
      <path d="M148 78 L180 95 L148 112 Z" />
    </svg>
  );
}

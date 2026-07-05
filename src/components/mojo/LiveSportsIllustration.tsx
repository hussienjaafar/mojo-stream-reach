interface Props {
  className?: string;
}

export function LiveSportsIllustration({ className }: Props) {
  return (
    <svg
      viewBox="0 0 770 430"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Line-art illustration of a couch facing a TV showing a game"
      style={{ width: "100%", height: "auto" }}
      className={className}
      preserveAspectRatio="xMidYMid meet"
    >
      <rect x="0" y="0" width="760" height="420" rx="16" fill="#F7F3EC" />
      <g
        stroke="#C1502E"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="70" y1="352" x2="690" y2="352" />

        <rect x="452" y="96" width="216" height="140" rx="14" />
        <line x1="560" y1="236" x2="560" y2="252" />
        <line x1="516" y1="252" x2="604" y2="252" />

        <path d="M472 208 Q560 176 648 208" stroke="#E8927A" />
        <line x1="560" y1="128" x2="560" y2="204" stroke="#E8927A" />
        <circle cx="602" cy="160" r="7" stroke="#C1502E" />
        <path d="M584 148 q-8 10 -2 22" stroke="#E8927A" />

        <path d="M676 88 q10 -12 26 -14" stroke="#E8927A" />
        <path d="M672 72 q16 -18 40 -20" stroke="#C1502E" />

        <path d="M96 208 v-42 q0 -16 16 -16 h172 q16 0 16 16 v42" />

        <rect x="76" y="208" width="40" height="86" rx="14" />
        <rect x="280" y="208" width="40" height="86" rx="14" />

        <path d="M116 294 h164 M116 250 h164" />
        <path d="M116 250 v44 M280 250 v44" />

        <line x1="198" y1="250" x2="198" y2="294" />
        <line x1="198" y1="166" x2="198" y2="208" />

        <line x1="92" y1="294" x2="92" y2="322" />
        <line x1="304" y1="294" x2="304" y2="322" />

        <rect
          x="128"
          y="212"
          width="34"
          height="34"
          rx="8"
          transform="rotate(-8 145 229)"
          stroke="#E8927A"
        />

        <line x1="376" y1="352" x2="376" y2="296" />
        <ellipse cx="376" cy="294" rx="34" ry="6" />

        <path
          d="M356 282 q20 14 40 0 l-4 -12 h-32 z"
          transform="translate(0,2)"
        />

        <circle cx="368" cy="266" r="4" stroke="#E8927A" />
        <circle cx="378" cy="262" r="4" stroke="#E8927A" />
        <circle cx="386" cy="267" r="4" stroke="#E8927A" />
      </g>
    </svg>
  );
}

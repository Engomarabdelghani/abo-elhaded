type Props = {
  variant?: "skewer" | "chili" | "smoke" | "leaf";
  className?: string;
};

/**
 * Lightweight SVG decorative elements inspired by the restaurant's grill identity.
 * Pure vector, no raster images — keeps sections light and scalable.
 */
export default function DecorativeBackground({ variant = "smoke", className = "" }: Props) {
  if (variant === "skewer") {
    return (
      <svg viewBox="0 0 200 40" className={className} aria-hidden="true">
        <line x1="5" y1="20" x2="195" y2="20" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" opacity="0.55" />
        {[20, 55, 90, 125, 160].map((x, i) => (
          <rect key={i} x={x} y="10" width="22" height="20" rx="6" fill="var(--color-ember)" opacity="0.5" transform={`rotate(${i % 2 === 0 ? -6 : 6} ${x + 11} 20)`} />
        ))}
      </svg>
    );
  }

  if (variant === "chili") {
    return (
      <svg viewBox="0 0 100 140" className={className} aria-hidden="true" fill="none">
        <path
          d="M52 18 C 56 8, 68 4, 76 9 C 68 10, 61 16, 58 23"
          stroke="var(--color-gold)"
          strokeWidth="3"
          strokeLinecap="round"
          opacity="0.55"
        />
        <path
          d="M54 20 C 30 26, 18 52, 24 82 C 29 106, 46 124, 60 118 C 76 111, 78 78, 66 50 C 60 38, 55 28, 54 20 Z"
          fill="var(--color-ember)"
          opacity="0.5"
        />
        <path
          d="M54 20 C 30 26, 18 52, 24 82 C 29 106, 46 124, 60 118"
          stroke="var(--color-red)"
          strokeWidth="2"
          opacity="0.4"
        />
      </svg>
    );
  }

  if (variant === "leaf") {
    return (
      <svg viewBox="0 0 120 80" className={className} aria-hidden="true" fill="none">
        <path d="M10 60 C 30 20, 70 10, 110 20" stroke="var(--color-gold)" strokeWidth="2" opacity="0.45" />
        {[20, 40, 60, 80].map((x, i) => (
          <path
            key={i}
            d={`M${x} ${55 - i * 6} C ${x + 8} ${40 - i * 6}, ${x + 18} ${40 - i * 6}, ${x + 22} ${52 - i * 6}`}
            stroke="var(--color-ember)"
            strokeWidth="1.8"
            opacity="0.4"
          />
        ))}
      </svg>
    );
  }

  // smoke
  return (
    <svg viewBox="0 0 200 300" className={className} aria-hidden="true" fill="none">
      <path
        d="M100 300 C 90 250, 130 230, 110 190 C 95 160, 130 140, 115 100 C 105 70, 135 50, 120 10"
        stroke="var(--color-cream)"
        strokeWidth="18"
        strokeLinecap="round"
        opacity="0.05"
      />
      <path
        d="M80 300 C 70 240, 110 220, 95 175 C 82 145, 112 125, 100 85"
        stroke="var(--color-cream)"
        strokeWidth="12"
        strokeLinecap="round"
        opacity="0.04"
      />
    </svg>
  );
}

type Props = {
  className?: string;
  seed?: number; // varies skewer/bulb placement so cards don't look identical
  tone?: "ember" | "gold" | "deep";
};

const tones: Record<string, [string, string]> = {
  ember: ["#3A0E10", "#C9391E"],
  gold: ["#3A0E10", "#B8862F"],
  deep: ["#1C0D0C", "#8C1810"],
};

/**
 * A hand-built vector "grill scene" — hanging bulbs, smoke, skewers over embers.
 * Stands in for real restaurant photography until the owner supplies actual
 * photos/videos, per the brief's "no product photos required" constraint.
 */
export default function GrillIllustration({ className = "", seed = 0, tone = "ember" }: Props) {
  const [c1, c2] = tones[tone];
  const bulbs = [40, 110, 170, 230].map((x, i) => x + ((seed * 13 + i * 7) % 10));

  return (
    <svg viewBox="0 0 320 220" className={className} preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <radialGradient id={`glow-${seed}`} cx="50%" cy="35%" r="75%">
          <stop offset="0%" stopColor={c2} stopOpacity="0.55" />
          <stop offset="100%" stopColor={c1} stopOpacity="1" />
        </radialGradient>
        <filter id={`blur-${seed}`}>
          <feGaussianBlur stdDeviation="6" />
        </filter>
      </defs>

      <rect width="320" height="220" fill={`url(#glow-${seed})`} />

      {/* hanging bulbs */}
      {bulbs.map((x, i) => (
        <g key={i}>
          <line x1={x} y1="0" x2={x} y2={26 + (i % 2) * 10} stroke="#00000055" strokeWidth="1.5" />
          <circle cx={x} cy={30 + (i % 2) * 10} r="5" fill="#FFD98A" filter={`url(#blur-${seed})`} opacity="0.8" />
          <circle cx={x} cy={30 + (i % 2) * 10} r="2.5" fill="#FFE9BE" />
        </g>
      ))}

      {/* smoke */}
      <path
        d={`M ${90 + seed * 4} 210 C ${70 + seed} 170, ${110 - seed} 150, ${90 + seed} 110 C ${75} 85, ${105} 70, ${95} 30`}
        stroke="#F7ECDD"
        strokeWidth="10"
        strokeLinecap="round"
        fill="none"
        opacity="0.12"
      />
      <path
        d={`M ${210 - seed * 3} 210 C ${230 - seed} 175, ${195 + seed} 145, ${215} 100`}
        stroke="#F7ECDD"
        strokeWidth="7"
        strokeLinecap="round"
        fill="none"
        opacity="0.1"
      />

      {/* grate */}
      <rect x="20" y="150" width="280" height="8" rx="4" fill="#000" opacity="0.35" />
      {Array.from({ length: 9 }).map((_, i) => (
        <line key={i} x1={30 + i * 32} y1="150" x2={30 + i * 32} y2="180" stroke="#000" strokeWidth="3" opacity="0.3" />
      ))}

      {/* skewers with alternating meat / pepper / onion chunks — reads as a kebab skewer, not abstract blocks */}
      {[0, 1, 2].map((row) => {
        const y = 128 + row * 3;
        const chunkColors = ["#8C3A1E", "#5C7A3A", "#E8D9B9", "#7A2A16", "#4C6A2E", "#DCC79E"];
        return (
          <g key={row} transform={`rotate(${-3 + row * 3} 160 ${y})`}>
            <line x1="30" y1={y} x2="295" y2={y} stroke="#D8A857" strokeWidth="2.5" opacity="0.85" />
            <circle cx="30" cy={y} r="2.5" fill="#D8A857" opacity="0.9" />
            {Array.from({ length: 6 }).map((_, i) => {
              const cx = 52 + i * 40 + ((seed + row) % 5);
              const fill = chunkColors[(i + row + seed) % chunkColors.length];
              const isMeat = fill.startsWith("#8") || fill.startsWith("#7");
              return (
                <g key={i}>
                  <rect x={cx} y={y - 9} width="19" height="18" rx="4" fill={fill} opacity="0.92" />
                  {isMeat && (
                    <path
                      d={`M${cx + 4} ${y - 4} l 10 8 M${cx + 4} ${y + 2} l 6 5`}
                      stroke="#000"
                      strokeWidth="1"
                      opacity="0.25"
                      strokeLinecap="round"
                    />
                  )}
                </g>
              );
            })}
          </g>
        );
      })}

      {/* embers with a few brighter flame flecks */}
      <rect x="20" y="182" width="280" height="14" rx="3" fill="#E8623A" opacity="0.35" filter={`url(#blur-${seed})`} />
      {[60, 140, 220].map((x, i) => (
        <circle key={i} cx={x + ((seed + i) % 20)} cy="188" r="5" fill="#FFB259" opacity="0.5" filter={`url(#blur-${seed})`} />
      ))}
    </svg>
  );
}

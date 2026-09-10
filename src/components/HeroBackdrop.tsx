import { motion } from "framer-motion";

type Props = { className?: string };

function ChiliShape() {
  return (
    <>
      <path
        d="M2 -18 C 6 -28, 18 -32, 26 -27 C 18 -25, 11 -19, 8 -12"
        stroke="var(--color-gold)"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M4 -16 C -20 -10, -32 16, -26 46 C -21 70, -4 88, 10 82 C 26 75, 28 42, 16 14 C 10 2, 5 -8, 4 -16 Z"
        fill="var(--color-ember)"
      />
    </>
  );
}

function LeafShape() {
  return (
    <>
      <path d="M-40 10 C -20 -22, 20 -32, 55 -20" stroke="var(--color-gold)" strokeWidth="2.5" fill="none" />
      {[0, 18, 36, 54].map((dx, i) => (
        <path
          key={i}
          d={`M${-30 + dx} ${5 - i * 4} C ${-22 + dx} ${-10 - i * 4}, ${-10 + dx} ${-10 - i * 4}, ${-5 + dx} ${3 - i * 4}`}
          stroke="var(--color-ember)"
          strokeWidth="2"
          fill="none"
        />
      ))}
    </>
  );
}

type AnimProps = {
  x: number;
  y: number;
  rotate?: number;
  scale?: number;
  opacity?: number;
  duration?: number;
  delay?: number;
};

// hanging chilies sway gently from the stem, like they would on a string in the restaurant
function AnimatedChili({ x, y, rotate = 0, scale = 1, opacity = 1, duration = 4, delay = 0 }: AnimProps) {
  return (
    <motion.g
      style={{ x, y, scale, opacity }}
      animate={{ rotate: [rotate - 4, rotate + 4, rotate - 4] }}
      transition={{ duration, repeat: Infinity, ease: "easeInOut", delay }}
    >
      <ChiliShape />
    </motion.g>
  );
}

function AnimatedLeaf({ x, y, rotate = 0, scale = 1, opacity = 1, duration = 5, delay = 0 }: AnimProps) {
  return (
    <motion.g
      style={{ x, y, scale, opacity }}
      animate={{ rotate: [rotate - 2, rotate + 2, rotate - 2] }}
      transition={{ duration, repeat: Infinity, ease: "easeInOut", delay }}
    >
      <LeafShape />
    </motion.g>
  );
}

function Smoke({ d, width, opacity, duration, delay }: { d: string; width: number; opacity: number; duration: number; delay: number }) {
  return (
    <motion.path
      d={d}
      stroke="var(--color-cream)"
      strokeWidth={width}
      strokeLinecap="round"
      fill="none"
      style={{ opacity }}
      animate={{ y: [0, -22, 0], opacity: [opacity * 0.6, opacity * 1.6, opacity * 0.6] }}
      transition={{ duration, repeat: Infinity, ease: "easeInOut", delay }}
    />
  );
}

export default function HeroBackdrop({ className = "" }: Props) {
  return (
    <svg
      viewBox="0 0 1440 800"
      preserveAspectRatio="xMidYMax slice"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="heroGlow" cx="50%" cy="0%" r="85%">
          <stop offset="0%" stopColor="#C9391E" stopOpacity="0.32" />
          <stop offset="55%" stopColor="#8C1810" stopOpacity="0.16" />
          <stop offset="100%" stopColor="#0E0605" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="emberStrip" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#E8623A" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#E8623A" stopOpacity="0" />
        </linearGradient>
        <filter id="heroBlurLg">
          <feGaussianBlur stdDeviation="16" />
        </filter>
      </defs>

      <rect width="1440" height="800" fill="url(#heroGlow)" />

      {/* soft, blurred chilies deep in the scene for atmospheric depth */}
      <g filter="url(#heroBlurLg)">
        <AnimatedChili x={140} y={140} rotate={18} scale={2.4} opacity={0.28} duration={7} />
        <AnimatedChili x={1280} y={110} rotate={-22} scale={2.6} opacity={0.28} duration={8} delay={1} />
      </g>

      {/* rising smoke */}
      <Smoke
        d="M 230 800 C 200 660 280 610 245 490 C 215 405 285 345 255 250 C 235 190 265 150 250 100"
        width={26}
        opacity={0.055}
        duration={6}
        delay={0}
      />
      <Smoke
        d="M 1180 800 C 1220 650 1130 590 1170 470 C 1195 395 1140 330 1170 240"
        width={20}
        opacity={0.05}
        duration={7}
        delay={1.2}
      />
      <Smoke
        d="M 720 800 C 690 700 745 650 715 560 C 700 515 725 480 712 440"
        width={14}
        opacity={0.045}
        duration={5}
        delay={0.6}
      />

      {/* crisper foreground accents scattered around the composition */}
      <AnimatedChili x={90} y={430} rotate={-14} scale={1.05} opacity={0.55} duration={4.5} />
      <AnimatedChili x={1360} y={390} rotate={16} scale={0.85} opacity={0.4} duration={5} delay={0.8} />
      <AnimatedChili x={1180} y={640} rotate={-8} scale={0.7} opacity={0.3} duration={4} delay={1.5} />
      <AnimatedLeaf x={1340} y={560} rotate={-6} scale={1.2} opacity={0.4} duration={5.5} />
      <AnimatedLeaf x={60} y={640} rotate={12} scale={1} opacity={0.35} duration={6} delay={0.4} />

      {/* charcoal ember glow + skewer silhouette along the base of the hero */}
      <motion.rect
        x="0"
        y="740"
        width="1440"
        height="60"
        fill="url(#emberStrip)"
        animate={{ opacity: [0.75, 1, 0.75] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />
      <rect x="0" y="778" width="1440" height="6" fill="#000" opacity="0.35" />
      <g opacity="0.5">
        {Array.from({ length: 16 }).map((_, i) => (
          <line key={i} x1={30 + i * 92} y1="778" x2={30 + i * 92} y2="800" stroke="#000" strokeWidth="4" opacity="0.3" />
        ))}
        {Array.from({ length: 10 }).map((_, i) => (
          <g key={i} transform={`rotate(${i % 2 === 0 ? -2 : 2} ${80 + i * 145} 760)`}>
            <line x1={20 + i * 145} y1="760" x2={140 + i * 145} y2="760" stroke="var(--color-gold)" strokeWidth="2" opacity="0.5" />
            {[0, 1, 2].map((j) => (
              <rect
                key={j}
                x={45 + i * 145 + j * 30}
                y="753"
                width="18"
                height="14"
                rx="3"
                fill={j % 2 === 0 ? "var(--color-red)" : "#5A2A16"}
                opacity="0.6"
              />
            ))}
          </g>
        ))}
      </g>
    </svg>
  );
}

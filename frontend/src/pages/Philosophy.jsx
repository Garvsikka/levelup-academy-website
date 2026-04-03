import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import "./Philosophy.css";

/* ─── Node data ─── */
/* SVG grid: viewBox="-500 -500 1000 1000", origin = screen centre     */
/* Path endpoints are inset to the nearest card edge, not the centre   */
const NODES = [
  {
    id: 0,
    /* card centre (SVG units) */ cx: -320, cy: -245,
    /* card position offset   */ cardLeft: "calc(50% - 180px - 80px)", cardTop: "calc(50% - 126px - 55px)",
    title: "100X YOUR FAMILY WEALTH",
    body: "That's the ultimate goal we are studying for. Academic success is the passport to financial success.",
    /* Bézier controls */ bx1: -120, by1: -70, bx2: -260, by2: -180,
    delay: 0,
  },
  {
    id: 1,
    cx: -392, cy: 0,
    cardLeft: "calc(50% - 216px - 80px)", cardTop: "calc(50% - 55px)",
    title: "ROOTED IN VALUES & CHARACTER BUILDING",
    body: "Every class begins with the Gayatri Mantra. Education without spirituality & values is incomplete.",
    bx1: -110, by1: 15, bx2: -290, by2: 0,
    delay: 0.03,
  },
  {
    id: 2,
    cx: -320, cy: 245,
    cardLeft: "calc(50% - 180px - 80px)", cardTop: "calc(50% + 126px - 55px)",
    title: "PERSONALITY DEVELOPMENT IS CORE",
    body: "It is part of the curriculum at LEVELUP. Knowledge w/o communication skills & confidence is incomplete.",
    bx1: -110, by1: 70, bx2: -260, by2: 180,
    delay: 0.06,
  },
  {
    id: 3,
    cx: 320, cy: -245,
    cardLeft: "calc(50% + 180px - 80px)", cardTop: "calc(50% - 126px - 55px)",
    title: "HONOR YOUR SCHOOL TEACHERS",
    body: "They are the core foundation of education. We can complement schools, never replace them.",
    bx1: 120, by1: -70, bx2: 260, by2: -180,
    delay: 0.02,
  },
  {
    id: 4,
    cx: 392, cy: 0,
    cardLeft: "calc(50% + 216px - 80px)", cardTop: "calc(50% - 55px)",
    title: "REPETITION IS THE MOTHER OF LEARNING",
    body: "Every class starts with a 10-min formula test. Mastery comes from repetition, not blind practice.",
    bx1: 110, by1: 15, bx2: 290, by2: 0,
    delay: 0.04,
  },
  {
    id: 5,
    cx: 320, cy: 245,
    cardLeft: "calc(50% + 180px - 80px)", cardTop: "calc(50% + 126px - 55px)",
    title: "GAMIFICATION & CINEMATIC TEACHING",
    body: "We make educational games where problems unlock levels. How ChatGPT & self-driving cars work?",
    bx1: 110, by1: 70, bx2: 260, by2: 180,
    delay: 0.07,
  },
];

const SNAKE_DUR = 0.28; // seconds

export default function Philosophy() {
  const pathRefs = useRef([]);
  const [pathLengths, setPathLengths] = useState(Array(6).fill(800));
  const [visible, setVisible] = useState(Array(6).fill(false));

  useEffect(() => {
    // Measure real path lengths after mount
    const lengths = pathRefs.current.map((el) =>
      el ? el.getTotalLength() : 800
    );
    setPathLengths(lengths);

    // Reveal each card once its snake finishes
    NODES.forEach((n) => {
      setTimeout(() => {
        setVisible((prev) => {
          const next = [...prev];
          next[n.id] = true;
          return next;
        });
      }, (n.delay + SNAKE_DUR) * 1000);
    });
  }, []);

  return (
    <div className="philosophy-bg relative w-full min-h-screen flex items-center justify-center overflow-hidden">

      {/* ── SVG layer ── */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="-500 -500 1000 1000"
        preserveAspectRatio="xMidYMid meet"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {NODES.map((n) => (
            <linearGradient
              key={n.id}
              id={`snakeGrad${n.id}`}
              gradientUnits="userSpaceOnUse"
              x1="0" y1="0" x2={n.cx} y2={n.cy}
            >
              <stop offset="0%"   stopColor="#ff2200" />
              <stop offset="50%"  stopColor="#ff6600" />
              <stop offset="100%" stopColor="#ffcc00" />
            </linearGradient>
          ))}
          <filter id="snakeGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="4" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Snakes */}
        {NODES.map((n) => (
          <path
            key={n.id}
            ref={(el) => (pathRefs.current[n.id] = el)}
            className={`snake-path snake-${n.id}`}
            d={`M 0 0 C ${n.bx1} ${n.by1}, ${n.bx2} ${n.by2}, ${n.cx} ${n.cy}`}
            stroke={`url(#snakeGrad${n.id})`}
            filter="url(#snakeGlow)"
            style={{ "--path-length": pathLengths[n.id] }}
          />
        ))}

        {/* Hub */}
        <circle
          className="hub-circle"
          cx="0" cy="0" r="88"
          fill="#0a0a0a"
          stroke="#ff4400"
          strokeWidth="2"
        />
        <circle cx="0" cy="0" r="78" fill="none" stroke="#ff220030" strokeWidth="1" />

        {/* Hub text */}
        <text
          x="0" y="-30"
          textAnchor="middle"
          fontFamily="'Rajdhani', sans-serif"
          fontSize="11"
          fill="#ff6600"
          letterSpacing="4"
        >
          iconic
        </text>
        <text
          x="0" y="-4"
          textAnchor="middle"
          fontFamily="'Black Han Sans', Impact, sans-serif"
          fontWeight="900"
          fontSize="26"
          fill="white"
          letterSpacing="3"
        >
          LEVELUP
        </text>
        <text
          x="0" y="18"
          textAnchor="middle"
          fontFamily="'Rajdhani', sans-serif"
          fontSize="10"
          fill="#ff6600"
          letterSpacing="5"
        >
          PHILOSOPHY
        </text>
      </svg>

      {/* ── Node cards ── */}
      <div className="absolute inset-0 pointer-events-none">
        {NODES.map((n) => (
          <motion.div
            key={n.id}
            className="node-card pointer-events-auto"
            initial={{ opacity: 0, scale: 0.6 }}
            animate={visible[n.id] ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.6 }}
            transition={{ duration: 0.15, type: "spring", stiffness: 260, damping: 20 }}
            style={{ left: n.cardLeft, top: n.cardTop }}
          >
            <p className="node-title">{n.title}</p>
            <p className="node-body">{n.body}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
} 
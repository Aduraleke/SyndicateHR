
import React, { useMemo, useState, useRef, useEffect, useLayoutEffect } from "react";
import { motion, useMotionValue, useReducedMotion } from "framer-motion";
import { seededRandom, clamp } from "./utils";
import { useOrbit } from "./OrbitContext";

type BulletProps = {
  idx: number;
  label: string;
  total: number;
  config: {
    perBulletDelayMs: number;
    launchDurationMsDesktop: number;
    launchDurationMsMobile: number;
    maxDistanceFactor: number;
    colors: { accentStart: string; accentEnd: string };
  };
};

/* ---------- helper: window size ---------- */
function useWindowSize() {
  const [size, setSize] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 1200,
    height: typeof window !== "undefined" ? window.innerHeight : 800,
  });
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const onResize = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() =>
        setSize({ width: window.innerWidth, height: window.innerHeight })
      );
    };
    window.addEventListener("resize", onResize);
    window.addEventListener("orientationchange", onResize);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("orientationchange", onResize);
    };
  }, []);

  return size;
}

function BulletProjectileInner({ idx, label, total, config }: BulletProps) {
  const { paused, openModal, lastFocusedIdRef } = useOrbit();
  const prefersReduced = useReducedMotion();
  const { width } = useWindowSize();
  const isMobile = width < 768;

  const rng = useMemo(() => seededRandom(idx + 11), [idx]);

  /* ---------- circular responsive geometry ---------- */
  const geometry = useMemo(() => {
  const angleBase = (idx / total) * Math.PI * 2;

// make angles evenly spaced on mobile
const angle = isMobile
  ? angleBase
  : angleBase + (rng() - 0.5) * 0.6; // slight jitter only for tablet/desktop

// radius tuning
const isTablet = width >= 768 && width < 1280;
const radiusBase = isMobile ? 130 : isTablet ? 180 : 240;

// remove variance for perfect mobile circle
const radiusVariance = isMobile ? 0 : isTablet ? 60 : 90;
const rawRadius = radiusBase + rng() * radiusVariance;


    // ensure bullets stay visible and well spaced
    const maxCap = isMobile ? 160 : isTablet ? 320 : 420;
    const maxDistance = Math.min(width * config.maxDistanceFactor, maxCap);
    const radius = clamp(rawRadius, 60, maxDistance);

    // vertical offset: raise orbit slightly on mobile
    const yOffset = isMobile ? -20 : 0;

    const originRadius = isMobile ? 36 : 64;
    const perpOffset = 10 + rng() * 16;

    const originX = Math.cos(angle) * originRadius;
    const originY = Math.sin(angle) * originRadius + yOffset;
    const targetX = Math.cos(angle) * radius;
    const targetY = Math.sin(angle) * radius + yOffset;

    const midX = (originX + targetX) / 2 + Math.cos(angle + Math.PI / 2) * perpOffset;
    const midY = (originY + targetY) / 2 + Math.sin(angle + Math.PI / 2) * (perpOffset * 0.5);

    const settleJitterX = (rng() - 0.5) * (isMobile ? 6 : 10);
    const settleJitterY = (rng() - 0.5) * (isMobile ? 4 : 8);

    return {
      originX,
      originY,
      midX,
      midY,
      targetX: targetX + settleJitterX,
      targetY: targetY + settleJitterY,
      angle,
      radius,
    };
  }, [idx, total, rng, isMobile, width, config.maxDistanceFactor]);

  const x = useMotionValue(geometry.originX);
  const y = useMotionValue(geometry.originY);
  const floatRange = isMobile ? 5 : 12;

  const [hovered, setHovered] = useState(false);
  const id = `bullet-${idx}-${label.replace(/\s+/g, "-").toLowerCase()}`;
  const btnRef = useRef<HTMLButtonElement | null>(null);

  const perBulletDelayMs = config.perBulletDelayMs ?? 40;
  const launchDurationMs = isMobile
    ? config.launchDurationMsMobile
    : config.launchDurationMsDesktop;
  const delayMs = idx * perBulletDelayMs;

  useLayoutEffect(() => {
    if (paused) {
      x.set(geometry.targetX);
      y.set(geometry.targetY);
    }
  }, [paused, geometry.targetX, geometry.targetY, x, y]);

  useEffect(() => {
    const el = btnRef.current;
    if (!el) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        lastFocusedIdRef.current = id;
        openModal(label);
      }
    };
    el.addEventListener("keydown", handler);
    return () => el.removeEventListener("keydown", handler);
  }, [id, label, lastFocusedIdRef, openModal]);

  const floatingAnimation = prefersReduced
    ? { x: 0, y: 0 }
    : {
        x: [0, floatRange * 0.3, -floatRange * 0.3, 0],
        y: [0, -floatRange * 0.25, floatRange * 0.25, 0],
      };

  /* ---------- render ---------- */
  return (
    <div
      className="absolute z-30 left-1/2 top-1/2"
      style={{ translate: "-50% -50%", pointerEvents: "none" }}
      aria-hidden={false}
    >
      {/* trail */}
      <motion.span
        aria-hidden
        style={{
          position: "absolute",
          left: geometry.originX,
          top: geometry.originY,
          width: isMobile ? 70 : 180,
          height: isMobile ? 5 : 8,
          transformOrigin: "left center",
          rotate: `${(geometry.angle * 180) / Math.PI}deg`,
          borderRadius: 999,
          filter: "blur(4px)",
          background: `linear-gradient(90deg, ${config.colors.accentStart}, ${config.colors.accentEnd})`,
          pointerEvents: "none",
        }}
        initial={{ scaleX: 0.02, opacity: 0.9 }}
        animate={
          paused || prefersReduced
            ? { scaleX: 0.02, opacity: 0.9 }
            : { scaleX: [0.02, 0.5, 0.9], opacity: [0.9, 0.9, 0.85] }
        }
        transition={{
          delay: delayMs / 1000,
          duration: Math.max(0.35, launchDurationMs / 1000),
          ease: [0.22, 1, 0.36, 1],
        }}
      />

      {/* bullet body */}
      <motion.div
        initial={{ x: geometry.originX, y: geometry.originY, opacity: 0, scale: 0.64 }}
        animate={
          paused || prefersReduced
            ? { x: geometry.targetX, y: geometry.targetY, opacity: 1, scale: 1 }
            : {
                x: [geometry.originX, geometry.midX, geometry.targetX],
                y: [geometry.originY, geometry.midY, geometry.targetY],
                opacity: [0, 1, 1],
                scale: [0.64, 1.05, 1],
              }
        }
        transition={{
          delay: delayMs / 1000,
          duration: Math.max(0.45, launchDurationMs / 1000),
          ease: [0.22, 1, 0.36, 1],
        }}
        className="absolute"
        style={{ x, y }}
      >
        <motion.div
          initial={{ x: 0, y: 0 }}
          animate={floatingAnimation}
          transition={
            prefersReduced
              ? undefined
              : {
                  delay: (delayMs + launchDurationMs + 200) / 1000,
                  duration: 6,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatType: "mirror",
                }
          }
          style={{ pointerEvents: "none" }}
        >
          <div
            className="flex items-center gap-3 px-3 py-1.5 rounded-full border border-white/10 backdrop-blur-md bg-gradient-to-tr from-white/8 to-transparent shadow-[0_0_25px_rgba(255,107,53,0.12)]"
            style={{
              minWidth: isMobile ? 96 : 140,
              willChange: "transform, opacity",
            }}
          >
            <div
              className={`${isMobile ? "w-2.5 h-2.5" : "w-3.5 h-3.5"} rounded-full`}
              style={{
                background: `linear-gradient(135deg, ${config.colors.accentStart}, ${config.colors.accentEnd})`,
                boxShadow: "0 0 10px rgba(255,107,53,0.8)",
              }}
            />
            <span
              className={`${isMobile ? "text-xs" : "text-sm"} font-semibold text-white/95`}
              style={{ whiteSpace: "nowrap" }}
            >
              {label}
            </span>
          </div>
        </motion.div>

        {/* button hit area */}
        <button
          id={id}
          ref={btnRef}
          onClick={(e) => {
            e.stopPropagation();
            lastFocusedIdRef.current = id;
            openModal(label);
          }}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          aria-label={`${label} — preview or open page`}
          style={{
            position: "absolute",
            left: geometry.targetX,
            top: geometry.targetY,
            translate: "-50% -50%",
            pointerEvents: "auto",
            background: "transparent",
            border: 0,
            padding: 10,
          }}
          className="rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#ff6b35]"
        >
          <span
            className={`block ${
              hovered ? "bg-white/8" : "bg-transparent"
            } w-10 h-10 rounded-full pointer-events-none`}
            aria-hidden
          />
        </button>
      </motion.div>
    </div>
  );
}

const BulletProjectile = React.memo(BulletProjectileInner, (p, n) => p.idx === n.idx && p.label === n.label);
export default BulletProjectile;

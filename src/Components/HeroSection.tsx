"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

/* ----------------------------- Configuration ----------------------------- */

const FIELDS = [
  "Fintech",
  "Web3",
  "iGaming",
  "Healthcare",
  "Legal",
  "Marketing & PR",
  "Hospitality",
  "Engineering",
  "Others",
];

/** deterministic seeded RNG — stable across renders for same idx */
function seededRandom(seed: number) {
  let v = seed % 2147483647;
  if (v <= 0) v += 2147483646;
  return () => {
    v = (v * 16807) % 2147483647;
    return (v - 1) / 2147483646;
  };
}

/* ------------------------------- Main UI -------------------------------- */

export default function HeroCentralBurst() {
  const prefersReduced = useReducedMotion();
  const router = useRouter();

  const [isMobile, setIsMobile] = useState(false);
  const [paused, setPaused] = useState(false);

  // modal state: which field is being previewed (null => closed)
  const [modalField, setModalField] = useState<string | null>(null);

  // Debounced resize to set mobile break
  useEffect(() => {
    let t: number | undefined;
    const check = () => {
      window.clearTimeout(t);
      t = window.setTimeout(() => setIsMobile(window.innerWidth < 768), 120);
    };
    check();
    window.addEventListener("resize", check);
    return () => {
      window.removeEventListener("resize", check);
      if (t) window.clearTimeout(t);
    };
  }, []);

  // keyboard: escape to close modal
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setModalField(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // navigate helper used by modal CTA
  const navigateToField = (field: string) => {
    const slug = field.toLowerCase().replace(/\s+/g, "-");
    router.push(`/fields/${slug}`);
  };

  return (
    <section className="relative w-full min-h-screen bg-[#060607] text-white flex flex-col items-center justify-center px-6">
      {/* Backdrops */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0b0d] via-[#0c1117] to-[#060607] opacity-90" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06)_0%,transparent_70%)]" />

 {/* Hero text */}
      <div className="relative z-20 text-center mt-14 md:mt-20 max-w-2xl">
        <h1 className="text-3xl md:text-6xl font-bold leading-tight">
          Empowering <span className="text-[#ff6b35]">People</span> &{" "}
          <span className="text-[#ff6b35]">Businesses</span>
        </h1>
        <p className="text-white/70 text-sm md:text-lg mt-4 px-4 md:px-0">
          Build, manage, and scale your workforce with intelligent HR solutions
          designed for modern teams.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <Link href="/hire" aria-label="Hire Talent" className="inline-block">
            <button className="px-6 py-3 bg-[#ff6b35] text-black font-semibold rounded-full hover:bg-[#ff6b35]/90 transition focus:ring-2 focus:ring-offset-2 focus:ring-[#ff6b35]">
              Hire Talent
            </button>
          </Link>
          <Link href="/jobs" aria-label="Find Jobs" className="inline-block">
            <button className="px-6 py-3 border border-white/30 text-white hover:text-black font-semibold rounded-full hover:bg-[#ff6b35]/90 transition focus:ring-2 focus:ring-offset-2 focus:ring-[#ff6b35]">
              Find Jobs
            </button>
          </Link>
        </div>
      </div>

      {/* Core + Bullets */}
      <div className="relative z-10 flex flex-col items-center">
        <motion.div
          className="relative w-[120px] h-[120px] md:w-[150px] md:h-[150px] rounded-full border border-white/10 bg-black/40 backdrop-blur-xl flex items-center justify-center shadow-[0_0_60px_rgba(255,255,255,0.05)]"
          animate={paused ? { scale: 1 } : { scale: [1, 0.97, 1.03, 1], rotate: [0, -1.2, 1.2, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <Image
            src="/syndicate.jpeg"
            alt="Syndicate Core Logo"
            width={100}
            height={100}
            sizes="(max-width:768px) 80px, 150px"
            className="rounded-full object-cover"
            priority
          />

          {/* Bullets layer: central absolute overlay covering the core element */}
          <BulletsLayer
            prefersReduced={prefersReduced}
            isMobile={isMobile}
            paused={paused}
            setPaused={setPaused}
            onOpenModal={(field) => setModalField(field)}
          />
        </motion.div>

      </div>

     

      {/* Modal preview (mounted at page root level visually) */}
      <FieldModal
        field={modalField}
        onClose={() => setModalField(null)}
        onNavigate={() => {
          if (modalField) navigateToField(modalField);
        }}
      />
    </section>
  );
}

/* ----------------------------- BulletsLayer ------------------------------ */
/* Orchestrates repeating bursts; keeps bursts keyed so child animations replay */

function BulletsLayer({
  prefersReduced,
  isMobile,
  paused,
  onOpenModal,
}: {
  prefersReduced: boolean;
  isMobile: boolean;
  paused: boolean;
  setPaused: (v: boolean) => void;
  onOpenModal: (field: string) => void;
}) {
  const burstInterval = 3500;
  const [burst, setBurst] = useState(0);
  const intervalRef = useRef<number | null>(null);

  // Manage repeating bursts (skip if reduced or paused)
  useEffect(() => {
    if (prefersReduced) return;
    if (paused) return;
    // trigger initial burst quickly
    setBurst((b) => b + 1);
    intervalRef.current = window.setInterval(() => setBurst((b) => b + 1), burstInterval) as unknown as number;
    return () => {
      if (intervalRef.current) window.clearInterval(intervalRef.current);
    };
  }, [prefersReduced, paused]);

  // Reduced: static radial markers (no pointer interaction)
  if (prefersReduced) {
    return (
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        {FIELDS.map((label, idx) => {
          const angle = (idx / FIELDS.length) * Math.PI * 2;
          const rng = seededRandom(idx + 7);
          const radius = isMobile ? 140 + rng() * 50 : 300 + rng() * 90;
          const x = Math.cos(angle + rng() * 0.6 - 0.3) * radius;
          const y = Math.sin(angle + rng() * 0.6 - 0.3) * radius;
          return (
            <div
              key={label}
              style={{ transform: `translate(${x}px, ${y}px)` }}
              className="absolute px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-white/80"
            >
              {label}
            </div>
          );
        })}
      </div>
    );
  }

  // Animated layer: items are keyed by burst so they restart on new burst
  return (
    <div className="absolute inset-0 pointer-events-none" aria-hidden>
      {FIELDS.map((label, idx) => (
        <BulletProjectile
          key={`${label}-burst-${burst}`}
          idx={idx}
          label={label}
          total={FIELDS.length}
          isMobile={isMobile}
          burstIndex={burst}
          paused={paused}
          onOpenModal={onOpenModal}
        />
      ))}
    </div>
  );
}

/* -------------------------- BulletProjectile ---------------------------- */
/* Single bullet: curved launch -> settle -> floating; hover & click enable */

function BulletProjectile({
  idx,
  label,
  total,
  isMobile,
  burstIndex,
  paused,
  onOpenModal,
}: {
  idx: number;
  label: string;
  total: number;
  isMobile: boolean;
  burstIndex: number;
  paused: boolean;
  onOpenModal: (field: string) => void;
}) {
  const angleBase = (idx / total) * Math.PI * 2;

  // Generate a stable orbital offset — not perfect circle
  const geometry = useMemo(() => {
    const rng = seededRandom(idx + 11);
    // give each bullet a unique offset within a controlled band
    const angleJitter = (rng() - 0.5) * 0.6; // +/- ~0.3 rad
    const angle = angleBase + angleJitter;
    // radius banding so not all same distance
    const radiusBase = isMobile ? 150 : 300;
    const radiusVariance = isMobile ? 60 : 120;
    const radius = radiusBase + rng() * radiusVariance;
    // small elliptical distortion for portrait vs landscape
    const ellipseFactor = isMobile ? 0.85 : 1.1;
    const originRadius = isMobile ? 48 : 72;
    // mid control point for curved arc (offset perpendicular)
    const perpOffset = 18 + rng() * 18;
    const originX = Math.cos(angle) * originRadius;
    const originY = Math.sin(angle) * originRadius;
    const targetX = Math.cos(angle) * radius * ellipseFactor;
    const targetY = Math.sin(angle) * radius;
    const midX = (originX + targetX) / 2 + Math.cos(angle + Math.PI / 2) * perpOffset;
    const midY = (originY + targetY) / 2 + Math.sin(angle + Math.PI / 2) * (perpOffset * 0.4);
    // slight settle offsets so bullets don't perfectly align (natural cluster)
    const settleJitterX = (rng() - 0.5) * 10;
    const settleJitterY = (rng() - 0.5) * 8;
    return {
      originX,
      originY,
      midX,
      midY,
      targetX: targetX + settleJitterX,
      targetY: targetY + settleJitterY,
      angle,
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [idx, isMobile]);

  // Timing: stagger per bullet so launches are sequential
  const perBulletDelayMs = 200;
  const launchDurationMs = isMobile ? 900 : 1100;
  const delayMs = idx * perBulletDelayMs;

  // Hover state (local) to enable tooltip + pointer events
  const [hovered, setHovered] = useState(false);

  // For accessible keyboard focus we need a focusable element — but container has pointer-events-none
  // We'll render an invisible focusable button (positioned at bullet final position) to receive keyboard focus.
  // This button will be pointer-events-auto and sit above pointer-events-none wrapper via z-index.

  // bullet floating bob range
  const floatRange = isMobile ? 6 : 12;

  // slug helper for link path
  const slug = label.toLowerCase().replace(/\s+/g, "-");

  return (
    <motion.div
      className="absolute z-30"
      style={{
        left: "50%",
        top: "50%",
        translate: "-50% -50%",
        pointerEvents: "none", // parent wrapper shouldn't block underlying UI
      }}
      aria-hidden={false}
    >
      {/* Trail (simple blurred bar which scales/fades during launch) */}
      <motion.span
        aria-hidden
        style={{
          position: "absolute",
          left: geometry.originX,
          top: geometry.originY,
          width: isMobile ? 80 : 180,
          height: isMobile ? 6 : 8,
          transformOrigin: "left center",
          rotate: `${(geometry.angle * 180) / Math.PI}deg`,
          borderRadius: 999,
          filter: "blur(6px)",
          background: "linear-gradient(90deg, rgba(255,107,53,0.95), rgba(255,183,135,0.6))",
          pointerEvents: "none",
        }}
        initial={{ scaleX: 0.02, opacity: 0.95 }}
        animate={
          paused
            ? { scaleX: 0.02, opacity: 0.9 }
            : { scaleX: [0.02, 0.6, 0.95], opacity: [0.95, 0.6, 0.02] }
        }
        transition={{
          delay: delayMs / 1000,
          duration: launchDurationMs / 1000,
          ease: [0.22, 1, 0.36, 1],
        }}
      />

      {/* Bullet node — moves on x/y keyframes (origin -> mid -> target) */}
      <motion.div
        initial={{ x: geometry.originX, y: geometry.originY, opacity: 0, scale: 0.64 }}
        animate={
          paused
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
          duration: launchDurationMs / 1000,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="absolute"
      >
        {/* Floating wrapper (begins animating after arrival) */}
        <motion.div
          initial={{ x: 0, y: 0 }}
          animate={
            paused
              ? { x: 0, y: 0 }
              : {
                  x: [0, floatRange * 0.3, -floatRange * 0.3, 0],
                  y: [0, -floatRange * 0.25, floatRange * 0.25, 0],
                }
          }
          transition={{
            delay: (delayMs + launchDurationMs + 200) / 1000,
            duration: 6,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "mirror",
          }}
          style={{ pointerEvents: "none" }}
        >
          {/* Visual badge */}
          <div
            className={`flex items-center gap-3 px-4 py-2 rounded-full border border-white/12 backdrop-blur-xl bg-gradient-to-tr from-white/8 to-transparent shadow-[0_0_25px_rgba(255,107,53,0.12)] transform-gpu`}
            style={{ minWidth: isMobile ? 92 : 140, willChange: "transform, opacity" }}
          >
            <div
              className={`rounded-full ${isMobile ? "w-2.5 h-2.5" : "w-3.5 h-3.5"} bg-gradient-to-tr from-[#ff6b35] to-[#ffb987] shadow-[0_0_10px_rgba(255,107,53,0.9)]`}
            />
            <span className={`text-white/95 ${isMobile ? "text-xs" : "text-sm"} font-semibold`}>
              {label}
            </span>
          </div>
        </motion.div>

        {/* Accessible clickable/focusable element placed at final position.
            This receives pointer events and opens modal / link. */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            // open modal preview
            onOpenModal(label);
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
            border: "0",
            padding: 6,
          }}
          className="rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#ff6b35]"
        >
          {/* invisible hit target (but small visual for pointer to hint) */}
          <span
            className={`block ${hovered ? "bg-white/8" : "bg-transparent"} w-9 h-9 rounded-full pointer-events-none`}
            aria-hidden
          />
        </button>
      </motion.div>
    </motion.div>
  );
}

/* -------------------------------- Modal --------------------------------- */
/* Simple accessible modal with focus trap-ish behavior (shift focus to close) */

function FieldModal({ field, onClose, onNavigate }: { field: string | null; onClose: () => void; onNavigate: () => void }) {
  const dialogRef = useRef<HTMLDivElement | null>(null);
  const closeBtnRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (field) {
      // focus close button when modal opens
      setTimeout(() => closeBtnRef.current?.focus(), 40);
      // prevent background scroll
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [field]);

  if (!field) return null;

  const slug = field.toLowerCase().replace(/\s+/g, "-");

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${field} preview`}
      className="fixed inset-0 z-50 flex items-center justify-center px-4"
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />

      <div
        ref={dialogRef}
        className="relative z-10 max-w-lg w-full rounded-2xl bg-[#0b0b0d] border border-white/8 p-6 shadow-2xl"
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 className="text-2xl font-semibold">{field}</h2>
            <p className="text-white/70 mt-2">
              Quick preview for <span className="font-medium">{field}</span>. This modal can contain a short intro,
              stats, or CTA. Click “Open page” to go to the full field page.
            </p>
          </div>

          <div className="flex flex-col items-end gap-2">
            <button
              ref={closeBtnRef}
              onClick={onClose}
              className="text-sm px-3 py-1 rounded bg-white/6 hover:bg-white/10 focus:ring-2 focus:ring-offset-2 focus:ring-[#ff6b35]"
              aria-label="Close preview"
            >
              Close
            </button>
            <Link href={`/fields/${slug}`} className="w-full">
              <button
                onClick={() => {
                  // navigation handled by next/link, but call onNavigate for parity
                  onNavigate();
                }}
                className="mt-2 w-full px-4 py-2 rounded bg-[#ff6b35] text-black font-semibold hover:bg-[#ff6b35]/90 focus:ring-2 focus:ring-offset-2 focus:ring-[#ff6b35]"
              >
                Open page
              </button>
            </Link>
          </div>
        </div>

        {/* Optional extended content */}
        <div className="mt-6 grid grid-cols-1 gap-3">
          <div className="text-sm text-white/70">Example highlights</div>
          <ul className="text-sm text-white/80 list-disc pl-5">
            <li>Trusted recruitment partners in the industry</li>
            <li>Specialized screening & assessment workflows</li>
            <li>Custom placement packages and retainers</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

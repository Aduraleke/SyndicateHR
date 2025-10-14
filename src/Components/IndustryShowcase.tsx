"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Industry = {
  name: string;
  slug: string;
  tagline?: string;
};

const ACCENT = "#FF6B35";
const BG = "#000000";

const industries: Industry[] = [
  { name: "Fintech", slug: "fintech", tagline: "Fast-moving finance teams and product labs" },
  { name: "Healthcare", slug: "healthcare", tagline: "Patient-first operations & clinical tech" },
  { name: "Web3", slug: "web3", tagline: "Blockchain teams building the next web" },
  { name: "Engineering", slug: "engineering", tagline: "High-performance engineering orgs" },
  { name: "Marketing & PR", slug: "marketing-pr", tagline: "Creative studios & data-driven marketing" },
  { name: "Hospitality", slug: "hospitality", tagline: "Service-led teams & customer experience" },
  { name: "Legal", slug: "legal", tagline: "Corporate counsel & compliance teams" },
  { name: "iGaming", slug: "igaming", tagline: "Real-time platforms and ops" },
  { name: "Others", slug: "others", tagline: "All other industries we serve" },
];

export default function IndustriesAndJourney() {
  const [activeIndex, setActiveIndex] = useState<number>(-1); // -1 = initial intro message

  // Delay before first rotation
  useEffect(() => {
    const timer = setTimeout(() => setActiveIndex(0), 2000);
    return () => clearTimeout(timer);
  }, []);

  // Auto-switch industries
  useEffect(() => {
    if (activeIndex < 0) return;
    const switchInterval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % industries.length);
    }, 6000);
    return () => clearInterval(switchInterval);
  }, [activeIndex]);

  const active = activeIndex >= 0 ? industries[activeIndex] : null;

  return (
    <div style={{ background: BG }}>
      <section className="relative py-20 px-6 lg:px-12 overflow-hidden">
        {/* Glow background */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute left-10 top-16 rounded-full blur-3xl opacity-30"
            style={{
              width: 400,
              height: 400,
              background: `radial-gradient(circle at 30% 30%, ${ACCENT}, transparent 40%)`,
              mixBlendMode: "screen",
            }}
          />
          <div
            className="absolute right-10 bottom-16 rounded-full blur-3xl opacity-20"
            style={{
              width: 420,
              height: 420,
              background: `radial-gradient(circle at 70% 70%, rgba(255,107,53,0.35), transparent 40%)`,
              mixBlendMode: "screen",
            }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div
              className="inline-flex items-center space-x-2 rounded-full px-4 py-2 mb-4 border"
              style={{
                background: "rgba(255,107,53,0.08)",
                borderColor: "rgba(255,107,53,0.12)",
              }}
            >
              <span className="text-sm font-semibold" style={{ color: ACCENT }}>
                Industries We Serve
              </span>
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-white">
              Explore Industry Workplaces
            </h2>
            <p className="text-lg max-w-3xl mx-auto text-slate-300">
              Get an inside look at the dynamic environments where we place top talent across diverse sectors.
            </p>
          </div>

          {/* Hero Video */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-black aspect-video">
            <video
              src="/heroVideo.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Cinematic overlay for fade */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

            {/* Animated bottom-right text */}
            <AnimatePresence mode="wait">
              {activeIndex === -1 ? (
                <motion.div
                  key="intro"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.8 }}
                  className="absolute bottom-8 right-8 text-right"
                >
                  <h3 className="text-3xl md:text-4xl font-bold text-white tracking-wide drop-shadow-lg">
                    Industries We Target
                  </h3>
                </motion.div>
              ) : (
                <motion.div
                  key={active?.slug}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.6 }}
                  className="absolute bottom-8 right-8 text-right max-w-xs md:max-w-md"
                >
                  <h3
                    className="text-2xl md:text-4xl font-bold text-white leading-tight drop-shadow-[0_4px_12px_rgba(0,0,0,0.6)]"
                    style={{ textShadow: "0 2px 16px rgba(255,107,53,0.6)" }}
                  >
                    {active?.name} Industry
                  </h3>
                  <p
                    className="mt-2 text-sm md:text-base text-[#ffe5d8] font-medium leading-snug"
                    style={{
                      textShadow: "0 2px 10px rgba(0,0,0,0.6)",
                      background: "linear-gradient(to left, rgba(0,0,0,0.3), transparent)",
                      padding: "0.25rem 0.5rem",
                      borderRadius: "0.5rem",
                      display: "inline-block",
                    }}
                  >
                    {active?.tagline}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Industry Tabs */}
          <div className="mt-8 grid grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-3">
            {industries.map((it, idx) => {
              const activeTab = idx === activeIndex;
              return (
                <button
                  key={it.slug}
                  onClick={() => setActiveIndex(idx)}
                  className="relative rounded-xl p-3 transition-all focus:outline-none"
                  style={{
                    background: activeTab
                      ? `linear-gradient(90deg, ${ACCENT}, rgba(255,107,53,0.85))`
                      : "rgba(255,255,255,0.04)",
                    border: activeTab
                      ? `1px solid rgba(255,107,53,0.18)`
                      : "1px solid rgba(255,255,255,0.06)",
                    boxShadow: activeTab ? `0 10px 30px ${ACCENT}33` : "none",
                  }}
                >
                  <div
                    className="text-xs font-semibold text-center"
                    style={{ color: activeTab ? "#fff" : "#cbd5e1" }}
                  >
                    {it.name}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Stats Section */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: "Fintech Placements", count: "2.5K+" },
              { label: "Tech & Engineering", count: "1.8K+" },
              { label: "Healthcare Roles", count: "1.2K+" },
              { label: "Other Industries", count: "3.5K+" },
            ].map((s) => (
              <div
                key={s.label}
                className="text-center rounded-2xl p-6 border"
                style={{
                  background: "rgba(255,255,255,0.02)",
                  borderColor: "rgba(255,255,255,0.04)",
                }}
              >
                <div className="text-3xl font-bold text-white">{s.count}</div>
                <div className="mt-1 text-sm text-slate-300">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

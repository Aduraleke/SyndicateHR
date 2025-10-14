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

// Simplified list — all industries share the same hero video
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
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const active = industries[activeIndex];

  // Simulate progress bar (demo animation)
  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    setProgress(0);
    const progressInterval = setInterval(() => {
      setProgress((p) => (p >= 100 ? 0 : p + 0.8));
    }, 200);

    return () => clearInterval(progressInterval);
  }, [activeIndex]);

  // 🌀 Auto-switch industry every 6 seconds
  useEffect(() => {
    const switchInterval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % industries.length);
    }, 6000); // every 6 seconds

    return () => clearInterval(switchInterval);
  }, []);

  return (
    <div style={{ background: BG }}>
      <section className="relative py-20 px-6 lg:px-12 overflow-hidden">
        {/* Background Glows */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute left-10 top-16 rounded-full filter blur-3xl opacity-30"
            style={{
              width: 400,
              height: 400,
              background: `radial-gradient(circle at 30% 30%, ${ACCENT}, transparent 40%)`,
              mixBlendMode: "screen",
            }}
          />
          <div
            className="absolute right-10 bottom-16 rounded-full filter blur-3xl opacity-20"
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

          {/* Hero Video Showcase */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-black aspect-video">
            <video
              src="/heroVideo.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Cinematic Overlay */}
            <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-center px-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active.slug}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <h3 className="text-2xl font-bold text-white">{active.name} Industry</h3>
                  <p className="mt-2 text-sm text-[#ffd7c9]">{active.tagline}</p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Fake controls (play/progress/time) */}
            <div
              className="absolute bottom-6 left-6 right-6 rounded-2xl p-3 border"
              style={{
                background: "rgba(0,0,0,0.6)",
                borderColor: "rgba(255,255,255,0.06)",
              }}
            >
              <div className="flex items-center space-x-4">
                <button
                  className="w-10 h-10 rounded-full flex items-center justify-center shadow"
                  style={{
                    background: "white",
                    boxShadow: `0 6px 24px ${ACCENT}33`,
                  }}
                >
                  <svg
                    className="w-5 h-5 text-gray-900"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </button>

                <div className="flex-1">
                  <div className="h-1 bg-white/30 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full rounded-full"
                      animate={{ width: `${progress}%` }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      style={{
                        background: `linear-gradient(90deg, ${ACCENT}, rgba(255,107,53,0.85))`,
                        boxShadow: `0 6px 18px ${ACCENT}66`,
                      }}
                    />
                  </div>
                </div>

                <div className="min-w-[80px] text-right">
                  <span className="text-sm font-medium text-white">
                    {`${Math.floor((progress / 100) * 3)}:${String(
                      Math.floor(((progress / 100) * 60) % 60)
                    ).padStart(2, "0")} / 3:45`}
                  </span>
                </div>
              </div>
            </div>
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

          {/* Stats */}
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

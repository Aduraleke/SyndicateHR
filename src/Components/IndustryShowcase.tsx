"use client";

import React, { JSX, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Industry = {
  name: string;
  slug: string;
  videoSrc?: string; // replace with real urls
  poster?: string; // optional poster image
  tagline?: string;
};

const ACCENT = "#FF6B35";
const BG = "#000000";

const industries: Industry[] = [
  {
    name: "Fintech",
    slug: "fintech",
    videoSrc: "/videos/fintech.mp4", // <-- replace or keep as placeholder
    poster: "/images/fintech.jpg",
    tagline: "Fast-moving finance teams and product labs",
  },
  {
    name: "Healthcare",
    slug: "healthcare",
    videoSrc: "/videos/healthcare.mp4",
    poster: "/images/healthcare.jpg",
    tagline: "Patient-first operations & clinical tech",
  },
  {
    name: "Web3",
    slug: "web3",
    videoSrc: "/videos/web3.mp4",
    poster: "/images/web3.jpg",
    tagline: "Blockchain teams building the next web",
  },
  {
    name: "Engineering",
    slug: "engineering",
    videoSrc: "/videos/engineering.mp4",
    poster: "/images/engineering.jpg",
    tagline: "High-performance engineering organizations",
  },
  {
    name: "Marketing & PR",
    slug: "marketing-pr",
    videoSrc: "/videos/marketing.mp4",
    poster: "/images/marketing.jpg",
    tagline: "Creative studios & data-driven marketing",
  },
  {
    name: "Hospitality",
    slug: "hospitality",
    videoSrc: "/videos/hospitality.mp4",
    poster: "/images/hospitality.jpg",
    tagline: "Service-led teams & customer experience",
  },
  {
    name: "Legal",
    slug: "legal",
    videoSrc: "/videos/legal.mp4",
    poster: "/images/legal.jpg",
    tagline: "Corporate counsel & compliance teams",
  },
  {
    name: "iGaming",
    slug: "igaming",
    videoSrc: "/videos/igaming.mp4",
    poster: "/images/igaming.jpg",
    tagline: "Real-time platforms and ops",
  },
  {
    name: "Others",
    slug: "others",
    videoSrc: "/videos/others.mp4",
    poster: "/images/others.jpg",
    tagline: "All other industry verticals we serve",
  },
];

export default function IndustriesAndJourney(): JSX.Element {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const active = industries[activeIndex];

  // Simulate video progress (you can replace with real timeupdate for a real <video>)
  const [progress, setProgress] = useState<number>(0);
  useEffect(() => {
    setProgress(0);
    const id = setInterval(() => {
      setProgress((p) => (p >= 100 ? 0 : p + 0.8));
    }, 200);
    return () => clearInterval(id);
  }, [activeIndex]);

  // small accessible id for progress label
  const progressId = `video-progress-${active.slug}`;

  return (
    <div style={{ background: BG }}>
      {/* ============================
          Industries Video Showcase
         ============================ */}
      <section
        className="relative py-20 px-6 lg:px-12 overflow-hidden"
        aria-labelledby="industries-heading"
      >
        {/* background glows */}
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

        <div className="relative max-w-6xl mx-auto z-10">
          {/* header */}
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

            <h2
              id="industries-heading"
              className="text-4xl lg:text-5xl font-bold mb-4"
              style={{ color: "white" }}
            >
              Explore Industry Workplaces
            </h2>
            <p className="text-lg max-w-3xl mx-auto" style={{ color: "#cbd5e1" }}>
              Get an inside look at the dynamic environments where we place top talent across diverse sectors.
            </p>
          </div>

          {/* video container */}
          <div className="relative">
            <div
              className="relative rounded-3xl overflow-hidden shadow-2xl bg-black aspect-video"
              role="region"
              aria-label={`${active.name} showcase video`}
            >
              {/* Animated video (or video mockup) */}
              <AnimatePresence mode="wait">
                <motion.video
                  key={active.slug}
                  src={active.videoSrc}
                  poster={active.poster}
                  autoPlay
                  loop
                  muted
                  className="absolute inset-0 w-full h-full object-cover"
                  initial={{ opacity: 0, scale: 1.02 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.6 }}
                  // If you want real controls, remove muted/autoPlay and add controls
                />
              </AnimatePresence>

              {/* cinematic overlay content */}
              <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center px-6">
                <motion.div
                  key={active.name + "-center"}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45 }}
                  className="text-center"
                >
                  <div
                    className="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 border"
                    style={{
                      background: "rgba(255,255,255,0.06)",
                      borderColor: "rgba(255,255,255,0.12)",
                    }}
                  >
                    <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>

                  <h3 className="text-2xl font-bold" style={{ color: "white" }}>
                    {active.name} Showcase
                  </h3>
                  <p className="mt-2 text-sm" style={{ color: "#ffd7c9" }}>
                    {active.tagline}
                  </p>
                </motion.div>
              </div>

              {/* top-left label */}
              <div
                className="absolute top-6 left-6 rounded-full px-5 py-2 border"
                style={{
                  background: "rgba(0,0,0,0.55)",
                  borderColor: "rgba(255,255,255,0.06)",
                }}
              >
                <span className="font-semibold" style={{ color: "white" }}>
                  {active.name} Workspace
                </span>
              </div>

              {/* controls overlay */}
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
                    aria-label="Play"
                    style={{
                      background: "white",
                      boxShadow: `0 6px 24px ${ACCENT}33`,
                    }}
                  >
                    <svg className="w-5 h-5 text-gray-900" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </button>

                  <div className="flex-1" aria-hidden>
                    <div className="h-1 bg-white/30 rounded-full overflow-hidden">
                      <div
                        role="progressbar"
                        aria-valuemin={0}
                        aria-valuemax={100}
                        aria-valuenow={Math.round(progress)}
                        id={progressId}
                        className="h-full rounded-full"
                        style={{
                          width: `${progress}%`,
                          background: `linear-gradient(90deg, ${ACCENT}, rgba(255,107,53,0.85))`,
                          boxShadow: `0 6px 18px ${ACCENT}66`,
                        }}
                      />
                    </div>
                  </div>

                  <div className="min-w-[80px] text-right">
                    <span className="text-sm font-medium" style={{ color: "white" }}>
                      {/* Fake timestamp derived from progress (for demo) */}
                      {`${Math.floor((progress / 100) * 3)}:${String(
                        Math.floor(((progress / 100) * 60) % 60)
                      ).padStart(2, "0")} / 3:45`}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Industry Selector Tabs */}
            <div className="mt-8 grid grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-3">
              {industries.map((it, idx) => {
                const activeTab = idx === activeIndex;
                return (
                  <button
                    key={it.slug}
                    onClick={() => setActiveIndex(idx)}
                    className={`relative rounded-xl p-3 transition-transform transform focus:outline-none focus:ring-2`}
                    style={{
                      background: activeTab
                        ? `linear-gradient(90deg, ${ACCENT}, rgba(255,107,53,0.85))`
                        : "rgba(255,255,255,0.04)",
                      border: activeTab ? `1px solid rgba(255,107,53,0.18)` : "1px solid rgba(255,255,255,0.06)",
                      boxShadow: activeTab ? `0 10px 30px ${ACCENT}33` : "none",
                    }}
                    aria-pressed={activeTab}
                    aria-label={`Show ${it.name} showcase`}
                  >
                    <div className="text-center">
                      <div className={`text-xs font-semibold`} style={{ color: activeTab ? "#fff" : "#cbd5e1" }}>
                        {it.name}
                      </div>
                    </div>

                    {activeTab && <div className="absolute left-0 right-0 bottom-0 h-1 bg-white rounded-b-md" />}
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
                  <div className="text-3xl font-bold" style={{ color: "white" }}>
                    {s.count}
                  </div>
                  <div className="mt-1 text-sm" style={{ color: "#cbd5e1" }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


    </div>
  );
}

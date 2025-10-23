"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

type Industry = {
  name: string;
  slug: string;
  tagline?: string;
  image: string;
};

const ACCENT = "#FF6B35";
const BG = "#000000";

const industries: Industry[] = [
  {
    name: "Fintech",
    slug: "fintech",
    tagline: "Fast-moving finance teams and product labs",
    image: "/HR Syndicate Fintech.jpg",
  },
  {
    name: "Healthcare",
    slug: "healthcare",
    tagline: "Patient-first operations & clinical tech",
    image: "/HR Syndicate Healthcare.jpg",
  },
  {
    name: "Web3",
    slug: "web3",
    tagline: "Blockchain teams building the next web",
    image: "/HR Syndicate Web3.jpg",
  },
  {
    name: "Engineering",
    slug: "engineering",
    tagline: "High-performance engineering orgs",
    image: "/HR Syndicate Engineering.jpg",
  },
  {
    name: "Marketing & PR",
    slug: "marketing-pr",
    tagline: "Creative studios & data-driven marketing",
    image: "/HR Syndicate Marketing.jpg",
  },
  {
    name: "Hospitality",
    slug: "hospitality",
    tagline: "Service-led teams & customer experience",
    image: "/HR Syndicate Hospitality.jpg",
  },
  {
    name: "Legal",
    slug: "legal",
    tagline: "Corporate counsel & compliance teams",
    image: "/HR Syndicate Legal.jpeg",
  },
  {
    name: "iGaming",
    slug: "igaming",
    tagline: "Real-time platforms and ops",
    image: "/HR Syndicate iGaming.jpeg",
  },
  {
    name: "Others",
    slug: "others",
    tagline: "All other industries we serve",
    image: "/HR Syndicate Other.jpg",
  },
];

export default function IndustriesAndJourney() {
  const [activeIndex, setActiveIndex] = useState<number>(-1);

  useEffect(() => {
    const timer = setTimeout(() => setActiveIndex(0), 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (activeIndex < 0) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % industries.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [activeIndex]);

  const active = activeIndex >= 0 ? industries[activeIndex] : null;

  return (
    <div style={{ background: BG }}>
      <section className="relative py-20 px-6 lg:px-12 overflow-hidden bg-gradient-to-br from-[#0a0a0a] via-[#2d2b2b] to-[#8f8b8b]">
        {/* Glow */}
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
        </div>

        <div className="relative z-10 max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div
              className="inline-flex items-center space-x-2 bg-[#FF6B35] rounded-xl px-6 py-4 mb-4 border"
              style={{ borderColor: "#FF6B35" }}
            >
              <span className="text-lg text-white font-semibold">
                Industries We Serve
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-white">
              Explore Industry Workplaces
            </h2>
            <p className="text-lg max-w-3xl mx-auto text-slate-300">
              Get an inside look at the dynamic environments where we place top
              talent across diverse sectors.
            </p>
          </div>

          {/* Hero Image */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-black aspect-video">
            <AnimatePresence mode="wait">
              {activeIndex === -1 ? (
                <motion.div
                  key="intro"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1 }}
                  className="absolute inset-0 bg-gradient-to-t from-black via-[#222] to-[#444] flex items-center justify-center"
                >
                  <h3 className="text-2xl md:text-4xl font-bold text-white">
                    Industries We Target
                  </h3>
                </motion.div>
              ) : (
                <motion.div
                  key={active?.slug}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 1.2, ease: "easeInOut" }}
                  className="absolute inset-0"
                >
                  <motion.div
                    initial={{ scale: 1 }}
                    animate={{ scale: 1.05 }}
                    transition={{
                      duration: 6,
                      ease: "easeInOut",
                      repeat: Infinity,
                      repeatType: "reverse",
                    }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={active?.image || ""}
                      alt={active?.name || ""}
                      fill
                      priority
                      className="object-cover"
                    />
                  </motion.div>

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                  {/* Enhanced bottom-right text */}
                  <div className="absolute bottom-8 right-8 max-w-xs md:max-w-md text-right z-20">
                    <div className="backdrop-blur-md bg-black/50 border border-[#FF6B35]/40 rounded-2xl px-4 py-3 md:px-6 md:py-4 shadow-[0_8px_30px_rgba(0,0,0,0.5)] transition-all">
                      <h3
                        className="text-lg md:text-4xl font-bold text-white leading-tight mb-2"
                        style={{
                          textShadow: "0 0 18px rgba(255,107,53,0.8)",
                          letterSpacing: "0.5px",
                        }}
                      >
                        {active?.name} Industry
                      </h3>
                      <p
                        className="text-sm md:text-base text-[#FFEDE5] font-medium leading-snug"
                        style={{
                          textShadow: "0 1px 8px rgba(0,0,0,0.8)",
                          lineHeight: 1.4,
                        }}
                      >
                        {active?.tagline}
                      </p>
                    </div>
                  </div>
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
                className="text-center rounded-2xl p-6 border backdrop-blur-md"
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

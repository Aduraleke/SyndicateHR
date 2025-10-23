"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@iconify/react";
import Link from "next/link";

const ACCENT = "#FF6B35";

const steps = [
  {
    step: "Step 1",
    title: "Discovery & Consultation",
    desc: "We begin with an in-depth consultation to understand your organization's culture, hiring goals, and role requirements.",
    icon: "mdi:account-search-outline",
  },
  {
    step: "Step 2",
    title: "Strategic Talent Sourcing",
    desc: "Leveraging our network, we launch targeted searches across channels to surface both active and passive candidates.",
    icon: "mdi:target-account",
  },
  {
    step: "Step 3",
    title: "Rigorous Screening & Assessment",
    desc: "Technical assessments, cultural fit checks, and behavioral interviews ensure candidates are a strong match.",
    icon: "mdi:clipboard-check-outline",
  },
  {
    step: "Step 4",
    title: "Curated Candidate Presentation",
    desc: "We present shortlists with deep insights, salary guidance, and readiness markers to help you decide quickly.",
    icon: "mdi:account-multiple-outline",
  },
  {
    step: "Step 5",
    title: "Interview Coordination & Support",
    desc: "We handle scheduling, brief candidates, and support the interview process to keep momentum high.",
    icon: "mdi:calendar-clock-outline",
  },
  {
    step: "Step 6",
    title: "Offer Negotiation & Onboarding",
    desc: "We facilitate offers and onboarding, and check in during the first 90 days to ensure long-term success.",
    icon: "mdi:handshake-outline",
  },
];

export default function RecruitmentJourney() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % steps.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative bg-gradient-to-br from-[#fff] via-[#faf7f6] to-[#f2f0ef] text-[#1a1a1a] py-24 px-6 lg:px-12 overflow-hidden">
      {/* background glow */}
      <div
        className="absolute inset-0 -z-10 opacity-40"
        style={{
          background: `radial-gradient(circle at 40% 20%, ${ACCENT}15 0%, transparent 60%)`,
        }}
      />
      <div className="absolute inset-0 bg-[url('/grid-light.svg')] bg-center opacity-[0.04]" />

      {/* container */}
      <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* LEFT — Animated Step */}
        <div className="flex flex-col items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={steps[active].step}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="relative w-full h-[440px] rounded-3xl overflow-hidden border border-[#00000010] shadow-[0_10px_30px_rgba(0,0,0,0.08)] flex flex-col justify-center items-center p-10 bg-white"
            >
              {/* animated soft gradient */}
              <motion.div
                animate={{
                  background: [
                    `radial-gradient(circle at 30% 30%, ${ACCENT}20, transparent 60%)`,
                    `radial-gradient(circle at 70% 70%, ${ACCENT}20, transparent 60%)`,
                  ],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 opacity-20"
              />

              {/* ICON */}
              <motion.div
                initial={{ scale: 0.7, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", stiffness: 120, damping: 8 }}
                className="mb-6 relative"
              >
                <div className="p-6 rounded-full bg-orange-100 relative overflow-hidden">
                  <Icon
                    icon={steps[active].icon}
                    className="text-[3.2rem] text-[#FF6B35] drop-shadow-[0_0_15px_#ff6b35aa]"
                  />
                  <motion.div
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.4, 0, 0.4],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                    }}
                    className="absolute inset-0 bg-[#FF6B35]/40 blur-2xl rounded-full"
                  />
                </div>
              </motion.div>

              {/* TEXT */}
              <h3 className="text-sm font-semibold uppercase tracking-wide text-[#FF6B35] mb-2">
                {steps[active].step}
              </h3>
              <h2 className="text-2xl md:text-3xl font-bold text-center mb-3">
                {steps[active].title}
              </h2>
              <p className="text-gray-700 max-w-lg text-center leading-relaxed">
                {steps[active].desc}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* progress dots */}
          <div className="flex items-center space-x-2 mt-6">
            {steps.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                aria-label={`Go to ${steps[i].step}`}
                className="relative"
              >
                <div
                  className={`h-2 rounded-full transition-all duration-300 ${
                    active === i
                      ? "bg-[#FF6B35] w-8"
                      : "bg-black/20 w-3 hover:w-5"
                  }`}
                />
                {active === i && (
                  <motion.div
                    layoutId="glow"
                    className="absolute -top-1 left-0 right-0 h-4 rounded-full blur-sm bg-[#FF6B35]/40"
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* RIGHT — Overview Text */}
        <div className="flex flex-col justify-center max-w-2xl space-y-6">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-5xl font-bold leading-tight"
          >
            Your Recruitment Journey

          </motion.h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            We don’t just fill roles, we build pathways for growth. From discovery to onboarding, 
            every step is crafted to deliver lasting impact and aligned values.
          </p>
          <div className="flex items-center space-x-3 mt-2">
            <div className="h-1 w-6 bg-[#FF6B35] rounded-full" />
            <span className="text-sm tracking-wide text-gray-600">
              Precision. Partnership. Performance.
            </span>
          </div>
        </div>
      </div>

      {/* timeline preview */}
      <div className="mt-24 hidden md:flex justify-center gap-8 max-w-5xl mx-auto">
        {steps.map((s, i) => (
          <motion.div
            key={i}
            className={`flex flex-col items-center relative ${
              i !== steps.length - 1 ? "after:content-[''] after:absolute after:w-16 after:h-[2px] after:bg-[#FF6B35]/30 after:top-6 after:left-full" : ""
            }`}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 150 }}
          >
            <div
              className={`p-4 rounded-full border-2 ${
                i === active
                  ? "border-[#FF6B35] bg-[#FF6B35]/10"
                  : "border-gray-300 bg-white"
              }`}
            >
              <Icon
                icon={s.icon}
                className={`text-2xl ${
                  i === active ? "text-[#FF6B35]" : "text-gray-400"
                }`}
              />
            </div>
            <p
              className={`text-xs mt-2 ${
                i === active ? "text-[#FF6B35] font-semibold" : "text-gray-500"
              }`}
            >
              {s.step}
            </p>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mt-24 text-center relative z-10"
      >
        <h3 className="text-2xl font-bold mb-3">
          Ready to Start Your Journey?
        </h3>
        <p className="text-gray-700 mb-6 max-w-lg mx-auto">
          Let’s help you discover and attract world-class talent that drives your growth.
        </p>
        <Link
          href="/contact"
          className="rounded-full px-10 py-4 font-semibold shadow-lg hover:scale-105 transition"
          style={{
            background: ACCENT,
            color: "white",
            boxShadow: `0 8px 20px ${ACCENT}55`,
          }}
        >
          Schedule a Consultation
        </Link>
      </motion.div>
    </section>
  );
}

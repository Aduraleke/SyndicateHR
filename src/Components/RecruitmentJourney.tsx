"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@iconify/react";

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

  // Automatically move to next step every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % steps.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative bg-white text-black py-20 px-6 lg:px-12 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-white via-[#ddd9d9] to-[#4f4e4e]" />

      <div className="relative max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 z-10 items-center">
        {/* LEFT: Active Step Display */}
        <div className="relative flex flex-col items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={steps[active].step}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="relative w-full h-[420px] rounded-3xl overflow-hidden border border-black/10 shadow-xl flex flex-col justify-center items-center p-10 bg-gradient-to-br from-black/[0.05] to-black/[0.02]"
            >
              {/* glowing overlay */}
              <div
                className="absolute inset-0 opacity-20"
                style={{
                  background: `radial-gradient(circle at 30% 30%, ${ACCENT}33, transparent 60%)`,
                }}
              />

              {/* Animated Icon */}
              <motion.div
                initial={{ opacity: 0, scale: 0.7, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: 0.15, type: "spring", stiffness: 150 }}
                className="mb-5 flex items-center justify-center"
              >
                <div className="p-5 rounded-full bg-orange-100 shadow-inner relative">
                  <Icon
                    icon={steps[active].icon}
                    className="text-[3rem] text-[#FF6B35] drop-shadow-[0_0_12px_#ff6b35aa]"
                  />
                  {/* Soft pulsating glow */}
                  <motion.div
                    animate={{ scale: [1, 1.4, 1], opacity: [0.4, 0, 0.4] }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute inset-0 bg-[#ff6b35]/40 rounded-full blur-2xl"
                  />
                </div>
              </motion.div>

              <motion.h3
                className="text-xl font-semibold mb-2 text-orange-400"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.25 }}
              >
                {steps[active].step}
              </motion.h3>

              <motion.h2
                className="text-3xl font-bold mb-4 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                {steps[active].title}
              </motion.h2>

              <motion.p
                className="text-gray-700 max-w-lg text-center leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                {steps[active].desc}
              </motion.p>
            </motion.div>
          </AnimatePresence>

          {/* Progress indicator */}
          <div className="flex items-center space-x-2 mt-3">
            {steps.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className="group relative"
                aria-label={`Go to ${steps[i].step}`}
              >
                <div
                  className={`h-2 rounded-full transition-all duration-300 ${
                    active === i
                      ? "bg-orange-500 w-8"
                      : "bg-black/20 w-3 group-hover:w-5"
                  }`}
                />
                {active === i && (
                  <motion.div
                    layoutId="indicator"
                    className="absolute -top-1 left-0 right-0 h-4 rounded-full blur-sm bg-orange-500/40"
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* RIGHT: Minimal Step Info + Next */}
        <div className="flex flex-col justify-center max-w-2xl items-start space-y-6">
          <h2
            id="journey-heading"
            className="text-4xl md:text-6xl font-bold"
            style={{ color: "black" }}
          >
            Your Recruitment Journey with Us
          </h2>
          <p className="mt-4 mx-auto text-[#000]">
            We partner with you through discovery, sourcing, assessment,
            coordination, and onboarding, ensuring placements that stick.
          </p>
        </div>
      </div>

      {/* CTA */}
      <div className="mt-20 text-center relative z-10">
        <h3 className="text-2xl font-bold mb-3">
          Ready to Start Your Journey?
        </h3>
        <p className="text-gray-700 mb-6">
          Let’s help you find exceptional talent that transforms your
          organization.
        </p>
        <button
          className="rounded-full px-8 py-3 font-bold shadow-lg transform hover:scale-105 transition"
          style={{
            background: ACCENT,
            color: "black",
            boxShadow: `0 8px 20px ${ACCENT}55`,
          }}
        >
          Schedule a Consultation
        </button>
      </div>
    </section>
  );
}

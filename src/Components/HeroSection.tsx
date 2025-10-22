"use client";

import React, { JSX } from "react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import Link from "next/link"; // ✅ fixed import

export default function HRHeroPage(): JSX.Element {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-neutral-950 via-black to-neutral-900 text-white">
      {/* Ambient Glow */}
      <motion.div
        className="absolute -inset-48 bg-[radial-gradient(circle_at_center,_rgba(255,107,53,0.12)_0%,_transparent_70%)]"
        animate={{ opacity: [0.4, 0.6, 0.4], scale: [1, 1.05, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Moving Accent Gradient */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-tl from-transparent via-[#ff6b35]/10 to-transparent mix-blend-overlay"
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{ backgroundSize: "200% 200%" }}
      />

      {/* Content Container */}
      <div className="relative z-10 px-6 text-center flex flex-col items-center justify-center max-w-5xl">
        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl sm:text-6xl lg:text-7xl font-extrabold mb-6 leading-[1.2] tracking-tight"
        >
          <span className="block text-white/90">Precision Hiring</span>
          <span className="block bg-gradient-to-r from-[#ff6b35] via-orange-400 to-yellow-300 bg-clip-text text-transparent">
            Across All Industries
          </span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
          className="text-gray-300 text-base sm:text-lg lg:text-xl mb-10 max-w-2xl leading-relaxed font-light"
        >
          Reach your recruitment goals with data-driven precision. We connect
          industry-leading companies with the best talent — fast, reliable, and proven.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4 mb-14 items-center justify-center"
        >
          {/* ✅ Fixed Link usage */}
          <motion.div whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.98 }}>
            <Link
              href="/contact"
              className="group bg-gradient-to-r from-[#ff6b35] via-orange-500 to-orange-400 text-white px-10 py-4 rounded-full font-semibold text-lg transition-all flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(255,107,53,0.2)] hover:shadow-[0_0_25px_rgba(255,107,53,0.6)]"
            >
              <span>Start Hiring</span>
              <Icon
                icon="mdi:arrow-right"
                className="w-5 h-5 group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
            <Link
              href="/industries"
              className="border border-[#ff6b35]/40 text-white px-10 py-4 rounded-full font-semibold text-lg transition-all backdrop-blur-sm hover:border-[#ff6b35]/70 hover:bg-[#ff6b35]/10"
            >
              View Industries
            </Link>
          </motion.div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
          className="w-full max-w-3xl"
        >
          <div className="bg-neutral-900/70 backdrop-blur-xl rounded-3xl border border-neutral-800 p-8 flex flex-wrap justify-around items-center gap-8 shadow-[0_0_30px_rgba(255,107,53,0.05)]">
            {[
              { value: "9+", label: "Industries Covered" },
              { value: "10K+", label: "Successful Placements" },
              { value: "98%", label: "Client Satisfaction" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.08 }}
                transition={{ type: "spring", stiffness: 250 }}
                className="flex flex-col items-center flex-1 text-center"
              >
                <div className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm sm:text-base font-light tracking-wide mt-2">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

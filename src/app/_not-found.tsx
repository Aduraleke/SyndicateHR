"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFound() {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden bg-[#050505] text-white px-6">
      {/* --- Dynamic Animated Grid Background --- */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#1a1a1a_0%,#050505_80%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(180deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:60px_60px] opacity-20 animate-slow-pan" />

      {/* --- Floating Glow Particles --- */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-[#ff6b35]/40 blur-2xl"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: 0.4,
              scale: Math.random() * 1.5 + 0.5,
            }}
            animate={{
              y: ["0%", "100%"],
              opacity: [0.4, 0.8, 0.4],
              x: ["0%", "100%"],
            }}
            transition={{
              duration: 12 + Math.random() * 8,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              width: 50 + Math.random() * 40,
              height: 50 + Math.random() * 40,
              left: Math.random() * 100 + "vw",
              top: Math.random() * 100 + "vh",
            }}
          />
        ))}
      </div>

      {/* --- Main Card --- */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 w-full max-w-2xl bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-10 shadow-[0_0_50px_rgba(255,107,53,0.15)] text-center"
      >
        {/* --- Logo --- */}
        <div className="flex justify-center mb-8">
          {!imgError ? (
            <Image
              src="/syndicate.jpeg"
              alt="Syndicate HRs logo"
              width={110}
              height={110}
              onError={() => setImgError(true)}
              className="rounded-full object-contain shadow-[0_0_40px_rgba(255,107,53,0.5)] border border-white/10"
            />
          ) : (
            <div className="w-[110px] h-[110px] flex items-center justify-center rounded-full bg-gradient-to-br from-[#ff6b35] to-[#ffb987] text-3xl font-bold shadow-lg border border-white/10">
              SHR
            </div>
          )}
        </div>

        {/* --- Title --- */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-[72px] sm:text-[96px] font-extrabold tracking-tight bg-gradient-to-r from-[#ff6b35] to-[#ffb987] bg-clip-text text-transparent drop-shadow-[0_2px_6px_rgba(255,107,53,0.4)]"
        >
          404
        </motion.h1>

        {/* --- Subtitle --- */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-xl sm:text-2xl font-semibold text-white/90 mb-4"
        >
          Oops, looks like you’ve drifted off track.
        </motion.p>

        {/* --- Description --- */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-base text-white/70 mb-10 max-w-md mx-auto"
        >
          The page you’re trying to reach doesn’t exist or has been moved.  
          Let’s take you back to where things make sense.
        </motion.p>

        {/* --- Buttons --- */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          <Link
            href="/"
            className="px-8 py-3 rounded-full font-semibold text-white bg-gradient-to-r from-[#ff6b35] to-[#ff814f] shadow-[0_0_20px_rgba(255,107,53,0.3)] hover:opacity-90 hover:scale-[1.02] transition-transform"
          >
            Go Home
          </Link>
          <Link
            href="mailto:support@syndicatehrs.com"
            className="px-8 py-3 rounded-full font-semibold border border-white/20 hover:border-[#ff6b35] hover:text-[#ff6b35] transition-all"
          >
            Contact Support
          </Link>
        </motion.div>
      </motion.div>

      {/* --- Footer --- */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-6 text-sm text-white/50"
      >
        © 2025 Syndicate HRs. All rights reserved.
      </motion.p>
    </div>
  );
}

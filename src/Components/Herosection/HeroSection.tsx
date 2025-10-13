"use client";

import React, { useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import dynamic from "next/dynamic";
import BulletsLayer from "./OrbitAnimation";
import { OrbitProvider } from "./OrbitContext";
import { FIELDS } from "./BulletLinks";
import config from "./config";

const BulletModal = dynamic(() => import("./BulletModal"), { ssr: false });

export default function HeroSection() {
  // Ensure a strict boolean for TypeScript; useReducedMotion() can return null
  const reduced = useReducedMotion();
  const prefersReduced: boolean = !!reduced;

  // Memoize the bullets layer props to prevent unnecessary re-renders
  const bulletsLayerProps = useMemo(
    () => ({ prefersReduced, fields: FIELDS, config }),
    [prefersReduced]
  );

  return (
    <OrbitProvider>
      <section className="relative w-full min-h-screen bg-[#060607] text-white overflow-x-hidden overflow-y-scroll flex items-center justify-center px-6 py-16 md:py-24">
        {/* Background layers */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0b0d] via-[#0c1117] to-[#060607] opacity-90" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06)_0%,transparent_70%)]" />

        {/* Grid Layout */}
        <div className="relative z-20 grid grid-cols-1 md:flex gap-4 w-full max-w-7xl items-center">
          {/* TEXT (Left) */}
          <div className="text-center md:text-left md:max-w-3xl space-y-6 px-2 md:px-0">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight">
              Empowering <span className="text-[#ff6b35]">People</span> &{" "}
              <span className="text-[#ff6b35]">Businesses</span>
            </h1>

            <p className="text-white/70 text-sm sm:text-base md:text-lg leading-relaxed max-w-xl mx-auto md:mx-0">
              Build, manage, and scale your workforce with intelligent HR
              solutions designed for modern teams.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link href="/hire">
                <button className="px-6 py-3 bg-[#ff6b35] text-black font-semibold rounded-full hover:bg-[#ff6b35]/90 transition focus:ring-2 focus:ring-offset-2 focus:ring-[#ff6b35]">
                  Hire Talent
                </button>
              </Link>
              <Link href="/jobs">
                <button className="px-6 py-3 border border-white/30 text-white hover:text-black font-semibold rounded-full hover:bg-[#ff6b35]/90 transition focus:ring-2 focus:ring-offset-2 focus:ring-[#ff6b35]">
                  Find Jobs
                </button>
              </Link>
            </div>
          </div>

          {/* ORBITS (Right) */}
          <div className="flex justify-center md:justify-end mt-16 md:mt-0 relative">
            <motion.div
              className="relative w-[150px] h-[150px] sm:w-[180px] sm:h-[180px] md:w-[240px] md:h-[240px] rounded-full border border-white/10 bg-black/40 backdrop-blur-xl flex items-center justify-center shadow-[0_0_80px_rgba(255,255,255,0.06)]"
              animate={{ scale: [1, 0.98, 1.02, 1], rotate: [0, -0.6, 0.6, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <Image
                src="/syndicate.jpeg"
                alt="Syndicate Core Logo"
                width={160}
                height={160}
                sizes="(max-width:768px) 120px, 200px"
                className="rounded-full object-cover"
                priority
              />

              {/* Memoized Bullets Layer */}
              <BulletsLayer {...bulletsLayerProps} />
            </motion.div>
          </div>
        </div>

        {/* Lazy Modal */}
        <BulletModal />
      </section>
    </OrbitProvider>
  );
}

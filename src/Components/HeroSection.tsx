"use client";

import React, { useState, useEffect, useRef, JSX } from "react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import Image from "next/image";

type RecruitmentField = {
  name: string;
  color: string;
};

const recruitmentFields: RecruitmentField[] = [
  { name: "Fintech", color: "from-[#ff6b35] to-orange-500" },
  { name: "Web3", color: "from-orange-400 to-[#ff6b35]" },
  { name: "iGaming", color: "from-[#ff6b35] to-amber-500" },
  { name: "Healthcare", color: "from-amber-500 to-[#ff6b35]" },
  { name: "Legal", color: "from-orange-500 to-[#ff6b35]" },
  { name: "Marketing & PR", color: "from-[#ff6b35] to-orange-400" },
  { name: "Hospitality", color: "from-amber-400 to-[#ff6b35]" },
  { name: "Engineering", color: "from-orange-400 to-[#ff6b35]" },
  { name: "Other", color: "from-[#ff6b35] to-amber-500" },
];

export default function HRHeroPage(): JSX.Element {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showShooter, setShowShooter] = useState(false);
  const shooterBoxRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setShowShooter(true);
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % recruitmentFields.length);
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  const visibleBullet = currentIndex % recruitmentFields.length;

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/HR Syndicate HeroVideo.mp4"
        autoPlay
        loop
        muted
        playsInline
      ></video>

      {/* Cinematic Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent mix-blend-multiply"></div>

      {/* Hero Section */}
      <div className="relative z-10 mx-auto px-6 md:px-10 lg:px-16 pt-20 md:pt-28 pb-20 md:mt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center text-center lg:text-left">
          {/* LEFT SIDE */}
          <div className="lg:px-6">
            <h1 className="text-2xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 leading-tight">
              Precision Hiring{" "}
              <span className="bg-gradient-to-r from-[#ff6b35] to-orange-400 bg-clip-text text-transparent">
                Across All Industries
              </span>
            </h1>

            <p className="text-sm sm:text-base lg:text-lg text-gray-300 mb-8 leading-relaxed">
              Hit your recruitment targets with laser-focused talent
              acquisition. From Fintech to Healthcare, we deliver top-tier
              candidates across every sector fast, precise, and trusted.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12 items-center justify-center lg:justify-start">
              <button className="group bg-gradient-to-r from-[#ff6b35] to-orange-500 hover:from-[#ff6b35] hover:to-orange-400 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium text-base sm:text-lg transition-all hover:scale-105 hover:shadow-[0_0_25px_#ff6b35] flex items-center justify-center space-x-2">
                <span>Start Hiring</span>
                <Icon
                  icon="mdi:arrow-right"
                  className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform"
                />
              </button>
              <button className="border border-[#ff6b35]/40 hover:border-[#ff6b35]/70 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium text-base sm:text-lg transition-all hover:bg-[#ff6b35]/10 backdrop-blur-sm">
                View Industries
              </button>
            </div>

            {/* Stats Section */}
            <div className="mt-6 w-full max-w-2xl mx-auto">
              <div className="bg-neutral-900/70 backdrop-blur-xl rounded-2xl border border-neutral-800 p-4 sm:p-6 flex flex-wrap justify-around items-center gap-4">
                {[
                  { value: "9", label: "Industries" },
                  { value: "10K+", label: "Placements" },
                  { value: "98%", label: "Success Rate" },
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.2 }}
                    className="flex flex-col items-center flex-1 text-center"
                  >
                    <motion.div
                      whileHover={{ scale: 1.08 }}
                      className="text-lg sm:text-xl font-semibold text-white"
                    >
                      {stat.value}
                    </motion.div>
                    <div className="text-gray-400 text-xs sm:text-sm tracking-wide mt-1">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="relative flex flex-col items-center justify-center md:ml-12">
            <div
              ref={shooterBoxRef}
              className="relative border border-[#ff6b35]/30 rounded-3xl p-4 sm:p-6 
                         w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-2xl
                         h-[280px] sm:h-[350px] md:h-[500px] flex items-center justify-center mx-auto overflow-hidden hover:scale-[1.02] transition-transform duration-500"
            >
              {/* Shooter */}
              <div
                className={`relative left-[-30%] bottom-[-14%] transition-all duration-700 ${
                  showShooter
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-6"
                } scale-100`}
                style={{ zIndex: 30 }}
              >
                <Image
                  src="/HR Syndicate sniper image.png"
                  width={480}
                  height={350}
                  alt="Hr syndicate Shooter"
                  className="rounded-lg"
                />
              </div>

              {/* Bullets */}
              {recruitmentFields.map((field, idx) => {
                const isVisible = visibleBullet === idx;

                return (
                  <div
                    key={idx}
                    className={`absolute top-1/2 left-[40%] transform -translate-y-1/2 transition-transform duration-[900ms] ease-out`}
                    style={{
                      zIndex: isVisible ? 20 + idx : 5 + idx,
                    }}
                  >
                    <div
                      className={`w-20 sm:w-24 h-6 sm:h-7 bg-gradient-to-r ${
                        field.color
                      } rounded-full flex items-center justify-center 
                    shadow-[0_0_10px_#ff6b35]/40 border border-[#ff6b35]/20
                    transition-all duration-[900ms] ease-out
                    ${
                      isVisible
                        ? "translate-x-[200px] opacity-100"
                        : "translate-x-[100px] opacity-0"
                    }`}
                    >
                      <span className="text-white font-medium text-[10px] sm:text-[11px] tracking-wide">
                        {field.name}
                      </span>
                    </div>
                  </div>
                );
              })}

              {/* Target */}
              <div className="absolute right-[2%] top-1/2 transform -translate-y-1/2 opacity-60 scale-100">
                <div className="w-28 sm:w-36 lg:w-76 h-28 sm:h-36 lg:h-76 border-2 sm:border-4 border-[#393635] rounded-full flex items-center justify-center">
                  <div className="w-20 sm:w-28 lg:w-40 h-20 sm:h-28 lg:h-40 border-2 sm:border-4 border-[#393635] rounded-full flex items-center justify-center">
                    <div className="w-12 sm:w-16 lg:w-32 h-12 sm:h-16 lg:h-32 border-2 sm:border-4 border-[#393635] rounded-full flex items-center justify-center">
                      <div className="w-5 sm:w-8 lg:w-20 h-5 sm:h-8 lg:h-20 bg-[#ff6b35] rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Metrics Box */}
            <div
              className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-2xl mt-4 border-t border-[#ff6b35]/20 bg-[#1a1a1a]/60 rounded-b-2xl p-3 sm:p-4 flex items-center justify-center gap-4 sm:gap-8 text-xs sm:text-sm text-gray-300 backdrop-blur-md"
              style={{ boxShadow: "inset 0 2px 6px rgba(255,107,53,0.05)" }}
            >
              <div className="flex items-center gap-1.5">
                <Icon icon="mdi:target" className="text-[#ff6b35] w-4 h-4" />
                <span>Target Locked</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Icon
                  icon="mdi:chart-line"
                  className="text-[#ff6b35] w-4 h-4"
                />
                <span>Accuracy 98%</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Icon
                  icon="mdi:clock-outline"
                  className="text-[#ff6b35] w-4 h-4"
                />
                <span>Realtime</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

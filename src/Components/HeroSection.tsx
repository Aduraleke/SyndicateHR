"use client";

import React, { useState, useEffect, useRef, JSX } from "react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

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

  // continuous single bullet shooting
  useEffect(() => {
    setShowShooter(true);
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % recruitmentFields.length);
    }, 1200); // one bullet every 1.2s
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

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Hero Section */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 pt-20 pb-20 md:mt-20 overflow-x-hidden">
        <div className="grid lg:grid-cols-2 gap-12 items-center text-center lg:text-left">
          {/* LEFT SIDE */}
          <div>
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold  text-white mb-6 leading-tight">
              Precision Hiring{" "}
              <span className="bg-gradient-to-r from-[#ff6b35] to-orange-400 bg-clip-text text-transparent">
                Across All Industries
              </span>
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-gray-300 mb-8 leading-relaxed">
              Hit your recruitment targets with laser-focused talent
              acquisition. From Fintech to Healthcare, we deliver top-tier
              candidates across every sector.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12 items-center justify-center lg:justify-start">
              <button className="group bg-gradient-to-r from-[#ff6b35] to-orange-500 hover:from-[#ff6b35] hover:to-orange-400 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all hover:scale-105 hover:shadow-[0_0_25px_#ff6b35] flex items-center justify-center space-x-2">
                <span>Start Hiring</span>
                <Icon
                  icon="mdi:arrow-right"
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                />
              </button>
              <button className="border-2 border-[#ff6b35]/40 hover:border-[#ff6b35]/70 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all hover:bg-[#ff6b35]/10 backdrop-blur-sm">
                View Industries
              </button>
            </div>
            {/* Stats Section */}
            <div className="mt-10 w-full max-w-3xl mx-auto">
              <div className="bg-neutral-900/70 backdrop-blur-lg rounded-2xl shadow-md border border-neutral-800 p-6 flex flex-wrap justify-between items-center gap-6">
                {[
                  { value: "9", label: "Industries" },
                  { value: "10K+", label: "Placements" },
                  { value: "98%", label: "Success Rate" },
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.2 }}
                    className="flex flex-col items-center flex-1 text-center"
                  >
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="text-xl font-semibold text-white"
                    >
                      {stat.value}
                    </motion.div>
                    <div className="text-gray-400 text-xs tracking-wide mt-1">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="relative flex items-center justify-center">
            <div
              ref={shooterBoxRef}
              className="relative  border border-[#ff6b35]/30 rounded-3xl p-8 
                         w-full max-w-md sm:max-w-lg lg:max-w-xl 
                         h-[460px] flex items-center justify-center mx-auto overflow-hidden hover:scale-[1.02] transition-transform duration-500"
            >
              {/* Shooter - larger on desktop */}
              <div
                className={`absolute left-[12%] transition-all duration-700 ${
                  showShooter
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-6"
                } scale-100 lg:scale-125`}
                style={{ zIndex: 30 }}
              >
                <div className="relative">
                  <div className="w-16 h-20 bg-gradient-to-b from-gray-800 to-black rounded-t-full relative">
                    {/* Head */}
                    <div
                      className="absolute -top-8 left-1/2 transform -translate-x-1/2 
                                w-10 h-10 bg-gradient-to-b from-gray-700 to-gray-400 rounded-full border-2 border-gray-800"
                    >
                      <div className="absolute top-2 left-1.5 w-1 h-1 bg-black rounded-full"></div>
                      <div className="absolute top-2 right-1.5 w-1 h-1 bg-black rounded-full"></div>
                    </div>

                    {/* Arm */}
                    <div className="absolute top-6 -right-8 w-12 h-2 bg-gray-700 rounded-full origin-left">
                      <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
                        <div className="w-8 h-3 bg-gray-900 rounded-r-lg"></div>
                        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-3">
                          <div className="w-6 h-6 bg-[#ff6b35] rounded-full opacity-70 animate-pulse"></div>
                        </div>
                      </div>
                    </div>

                    {/* Legs */}
                    <div className="absolute -bottom-10 left-1 w-5 h-10 bg-gradient-to-b from-gray-800 to-black rounded-b-lg"></div>
                    <div className="absolute -bottom-10 right-1 w-5 h-10 bg-gradient-to-b from-gray-800 to-black rounded-b-lg"></div>
                  </div>
                </div>
              </div>

              {/* Bullets (continuous one at a time) */}
              {recruitmentFields.map((field, idx) => {
                const isVisible = visibleBullet === idx;

                return (
                  <div
                    key={idx}
                    className={`absolute top-1/2 left-[30%] transform -translate-y-1/2 transition-all ease-out ${
                      isVisible
                        ? "opacity-100 translate-x-[220px] scale-100"
                        : "opacity-0 translate-x-0 scale-75"
                    }`}
                    style={{
                      zIndex: isVisible ? 20 + idx : 5 + idx,
                      transitionDuration: "900ms",
                    }}
                  >
                    <div
                      className={`w-28 h-8 bg-gradient-to-r ${field.color} rounded-full flex items-center justify-center shadow-[0_0_10px_#ff6b35] border border-[#ff6b35]/30`}
                    >
                      <span className="text-white font-semibold text-[12px] tracking-wide">
                        {field.name}
                      </span>
                    </div>
                  </div>
                );
              })}

              {/* Target */}
              <div className="absolute right-[10%] top-1/2 transform -translate-y-1/2 opacity-60 scale-100">
                <div className="w-44 h-44 border-4 border-[#393635] rounded-full flex items-center justify-center">
                  <div className="w-32 h-32 border-4 border-[#393635] rounded-full flex items-center justify-center">
                    <div className="w-20 h-20 border-4 border-[#393635] rounded-full flex items-center justify-center">
                      <div className="w-10 h-10 bg-[#ff6b35] rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Glow */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#ff6b35]/10 via-orange-400/10 to-transparent blur-3xl -z-10"></div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-"></div>
    </div>
  );
}

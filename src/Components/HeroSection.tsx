"use client";

import React, { useState, useEffect, JSX } from "react";
import { Icon } from "@iconify/react";

type RecruitmentField = {
  name: string;
  color: string;
  delay: number;
};

const recruitmentFields: RecruitmentField[] = [
    { name: "Fintech", color: "from-[#ff6b35] to-orange-500", delay: 0 },
    { name: "Web3", color: "from-orange-400 to-[#ff6b35]", delay: 150 },
    { name: "iGaming", color: "from-[#ff6b35] to-amber-500", delay: 300 },
    { name: "Healthcare", color: "from-amber-500 to-[#ff6b35]", delay: 450 },
    { name: "Legal", color: "from-orange-500 to-[#ff6b35]", delay: 600 },
    { name: "Marketing & PR", color: "from-[#ff6b35] to-orange-400", delay: 750 },
    { name: "Hospitality", color: "from-amber-400 to-[#ff6b35]", delay: 900 },
    { name: "Engineering", color: "from-orange-400 to-[#ff6b35]", delay: 1050 },
    { name: "Other", color: "from-[#ff6b35] to-amber-500", delay: 1200 },
  ];

export default function HRHeroPage(): JSX.Element {
  const [bulletsVisible, setBulletsVisible] = useState<number[]>([]);
  const [showShooter, setShowShooter] = useState(false);

  

  useEffect(() => {
    setShowShooter(true);
    recruitmentFields.forEach((field, index) => {
      setTimeout(() => {
        setBulletsVisible((prev) => [...prev, index]);
      }, field.delay);
    });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-[#1a1a1a] to-black relative overflow-hidden ">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#ff6b35] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      </div>

  

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pt-12 pb-20 md:mt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div>
            {/* <div className="inline-flex items-center space-x-2 bg-[#ff6b35]/10 border border-[#ff6b35]/30 rounded-full px-4 py-2 mb-6">
              <div className="w-2 h-2 bg-[#ff6b35] rounded-full animate-pulse"></div>
              <span className="text-[#ff6b35] text-sm font-medium">
                Targeted Recruitment Excellence
              </span>
            </div> */}

            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Precision Hiring{" "}
              <span className="bg-gradient-to-r from-[#ff6b35] to-orange-400 bg-clip-text text-transparent">
                Across All Industries
              </span>
            </h1>

            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Hit your recruitment targets with laser-focused talent acquisition. From Fintech to
              Healthcare, we deliver top-tier candidates across every sector.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
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

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8">
              {[
                { value: "9", label: "Industries" },
                { value: "10K+", label: "Placements" },
                { value: "98%", label: "Success Rate" },
              ].map((stat, i) => (
                <div key={i}>
                  <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right content */}
          <div className="relative h-[600px] flex items-center justify-center">
            {/* Shooter */}
            <div
              className={`absolute left-0 transition-all duration-1000 ${
                showShooter ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"
              }`}
              style={{ zIndex: 20 }}
            >
              <div className="relative">
                {/* Body */}
                <div className="w-24 h-32 bg-gradient-to-b from-gray-800 to-black rounded-t-full relative">
                  {/* Head */}
                  <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-b from-[#ff6b35] to-orange-400 rounded-full border-4 border-gray-800">
                    <div className="absolute top-5 left-3 w-2 h-2 bg-black rounded-full"></div>
                    <div className="absolute top-5 right-3 w-2 h-2 bg-black rounded-full"></div>
                  </div>

                  {/* Arm */}
                  <div className="absolute top-8 -right-12 w-16 h-3 bg-gray-700 rounded-full origin-left">
                    <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
                      <div className="w-12 h-4 bg-gray-900 rounded-r-lg"></div>
                      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4">
                        <div className="w-8 h-8 bg-[#ff6b35] rounded-full opacity-70 animate-pulse"></div>
                      </div>
                    </div>
                  </div>

                  {/* Legs */}
                  <div className="absolute -bottom-16 left-2 w-8 h-16 bg-gradient-to-b from-gray-800 to-black rounded-b-lg"></div>
                  <div className="absolute -bottom-16 right-2 w-8 h-16 bg-gradient-to-b from-gray-800 to-black rounded-b-lg"></div>
                </div>
              </div>
            </div>

            {/* Bullets */}
            {recruitmentFields.map((field, index) => (
              <div
                key={index}
                className={`absolute left-32 transition-all duration-1000 ${
                  bulletsVisible.includes(index) ? "opacity-100" : "opacity-0"
                }`}
                style={{
                  transform: bulletsVisible.includes(index)
                    ? `translate(${300 + (index % 3) * 80}px, ${
                        -150 + (index % 3) * 120
                      }px) rotate(${-15 + (index % 3) * 15}deg)`
                    : "translate(0, 0) rotate(0deg)",
                  top: `${150 + index * 35}px`,
                  transitionDelay: `${field.delay}ms`,
                  zIndex: 10 + index,
                }}
              >
                <div className="relative group">
                  <div
                    className={`w-28 h-10 bg-gradient-to-r ${field.color} rounded-full flex items-center justify-center shadow-[0_0_15px_#ff6b35] border border-[#ff6b35]/30 hover:scale-110 transition-transform`}
                  >
                    <span className="text-white font-bold text-sm px-2 text-center">
                      {field.name}
                    </span>
                  </div>
                </div>
              </div>
            ))}

            {/* Target */}
            <div className="absolute right-0 top-1/2 transform -translate-y-1/2 opacity-30">
              <div className="w-64 h-64 border-4 border-[#ff6b35] rounded-full flex items-center justify-center">
                <div className="w-48 h-48 border-4 border-[#ff6b35] rounded-full flex items-center justify-center">
                  <div className="w-32 h-32 border-4 border-[#ff6b35] rounded-full flex items-center justify-center">
                    <div className="w-16 h-16 bg-[#ff6b35] rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-[#ff6b35] via-orange-500 to-[#ff6b35]"></div>
    </div>

    
  );
}

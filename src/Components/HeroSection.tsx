"use client";

import React, { JSX } from "react";
import { Icon } from "@iconify/react";

export default function HRHeroPage(): JSX.Element {
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

          {/* Right side: Hero Video */}
          <div className="relative h-[600px] flex items-center justify-center">
            <video
              className="w-full h-full rounded-3xl object-cover"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src="/heroVideo.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Optional gradient overlay for better readability */}
            <div className="absolute inset-0 bg-gradient-to-tr from-black/40 to-transparent rounded-3xl"></div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-[#ff6b35] via-orange-500 to-[#ff6b35]"></div>
    </div>
  );
}

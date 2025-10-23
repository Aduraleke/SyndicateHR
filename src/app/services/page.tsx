"use client";

import React from "react";
import { motion } from "framer-motion";

export default function ServicesPage() {
  const services = [
    {
      title: "Executive Search",
      desc: "Find leadership and C-level talent with precision.",
    },
    {
      title: "Specialist & Mid-Level Hiring",
      desc: "Access skilled professionals who fit your team and culture.",
    },
    {
      title: "Mass & Project Recruitment",
      desc: "Rapid hiring for expansions or project-based needs.",
    },
    {
      title: "Talent Mapping & Market Insights",
      desc: "Data-driven strategies to guide your hiring.",
    },
    {
      title: "Employer Branding & RPO",
      desc: "Attract, engage, and retain top talent seamlessly.",
    },
    {
      title: "Contract & Temporary Staffing",
      desc: "Flexible, compliant workforce solutions.",
    },
  ];

  return (
    <main className="relative min-h-screen bg-[#050505] text-white overflow-hidden flex flex-col">
      {/* --- Background Glow --- */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-[#FF6B35]/20 blur-[160px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#FF6B35]/10 blur-[200px]" />
      </div>

      {/* --- Header Section --- */}
      <section className="text-center pt-24 pb-12 px-6 mt-10">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-[#FF6B35] to-orange-200 bg-clip-text text-transparent"
        >
          Our Services
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-gray-400 text-lg md:text-xl mt-6 max-w-2xl mx-auto leading-relaxed"
        >
          At HR Syndicate, we connect businesses with top talent — from
          executives to specialists — through strategic, results-driven
          recruitment.
        </motion.p>
      </section>

      {/* --- Services Grid --- */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10 px-6 lg:px-20 pb-24">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="relative rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_25px_rgba(255,107,53,0.15)]"
          >
            {/* --- Split Blended Background --- */}
            <div className="absolute inset-0 bg-[linear-gradient(110deg,#0a0a0a_40%,#FF6B35_100%)]" />

            {/* --- Subtle Overlay for Texture & Depth --- */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent mix-blend-overlay opacity-60" />

            {/* --- Card Content --- */}
            <div className="relative z-10 p-10 flex flex-col justify-center min-h-[260px]">
              <h3 className="text-2xl md:text-3xl font-semibold mb-4 tracking-tight text-white">
                <span className="bg-gradient-to-r from-[#FF6B35] to-orange-300 bg-clip-text text-transparent">
                  {service.title}
                </span>
              </h3>
              <p className="text-gray-200 text-base md:text-lg leading-relaxed max-w-sm">
                {service.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </section>

      {/* --- Footer Tagline --- */}
      <footer className="text-center pb-16 px-6">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-gray-400 text-lg font-medium tracking-wide"
        >
          <span className="text-[#FF6B35] font-semibold">HR Syndicate</span>{" "}
          — Where Top Talent Meets Opportunity
        </motion.p>
      </footer>
    </main>
  );
}

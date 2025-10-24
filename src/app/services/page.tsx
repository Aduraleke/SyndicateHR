"use client";

import React from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

export default function ServicesPage() {
  const services = [
    {
      title: "Executive Search",
      desc: "We identify and secure top-tier executives who lead your business toward growth and innovation.",
      icon: "mdi:briefcase-account-outline",
    },
    {
      title: "Specialist & Mid-Level Hiring",
      desc: "Connect with skilled professionals who fit your culture and drive your business performance.",
      icon: "mdi:account-group-outline",
    },
    {
      title: "Mass & Project Recruitment",
      desc: "Scale efficiently with large-volume hiring strategies designed to meet expansion or project demands.",
      icon: "mdi:target-variant",
    },
    {
      title: "Talent Mapping & Market Insights",
      desc: "Make informed hiring decisions with actionable data, analytics, and competitive intelligence.",
      icon: "mdi:chart-line",
    },
    {
      title: "Employer Branding & RPO",
      desc: "Strengthen your employer identity and streamline recruitment processes with end-to-end RPO solutions.",
      icon: "mdi:office-building-outline",
    },
    {
      title: "Contract & Temporary Staffing",
      desc: "Build agile teams with flexible, compliant workforce solutions tailored to your needs.",
      icon: "mdi:account-check-outline",
    },
  ];

  return (
    <main className="relative min-h-screen bg-[#050505] text-white overflow-hidden flex flex-col">
      {/* Animated Background Blobs */}
      <motion.div
        animate={{ y: [0, 40, 0], opacity: [0.7, 1, 0.7] }}
        transition={{ repeat: Infinity, duration: 12 }}
        className="absolute top-[-10%] left-[-10%] w-[420px] h-[420px] rounded-full bg-[#FF6B35]/30 blur-[180px] -z-10"
      />
      <motion.div
        animate={{ y: [40, 0, 40], opacity: [0.6, 1, 0.6] }}
        transition={{ repeat: Infinity, duration: 10 }}
        className="absolute bottom-[-10%] right-[-10%] w-[520px] h-[520px] rounded-full bg-[#FF6B35]/10 blur-[220px] -z-10"
      />

      {/* Hero Section */}
      <section className="flex flex-col justify-center items-center text-center pt-32 pb-20 px-6">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-[#FF6B35] via-orange-200 to-white bg-clip-text text-transparent leading-tight"
        >
          Discover Our Services
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-gray-300 mt-6 text-lg md:text-xl max-w-3xl leading-relaxed"
        >
          We deliver recruitment excellence through strategy, insight, and innovation — matching organizations with talent that drives transformation.
        </motion.p>
      </section>

      {/* Services Grid */}
      <section className="flex flex-wrap justify-center gap-10 px-6 md:px-12 lg:px-20 pb-28">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.04 }}
            className="relative p-8 md:p-10 rounded-3xl 
                       bg-gradient-to-br from-[#0A0A0A] via-[#14100F] to-[#FF6B35]/20 
                       backdrop-blur-md border border-[#FF6B35]/20 
                       transition-all duration-300 
                       w-full sm:w-[90%] md:w-[45%] lg:w-[45%] 
                       max-w-[600px]"
          >
            <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-[#FF6B35] to-transparent opacity-80 rounded-t-3xl" />
            <div className="flex flex-col items-start text-left">
              <Icon icon={service.icon} className="text-[#FF6B35] w-12 h-12 mb-5" />
              <h3 className="text-2xl md:text-3xl font-bold mb-3 text-white tracking-tight">
                {service.title}
              </h3>
              <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                {service.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </section>
      {/* Footer */}
      <footer className="text-center pb-10">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-gray-500 text-base md:text-lg font-medium tracking-wide"
        >
          <span className="text-[#FF6B35] font-semibold">HR Syndicate</span>{" "}
          — Empowering Businesses Through People
        </motion.p>
      </footer>
    </main>
  );
}

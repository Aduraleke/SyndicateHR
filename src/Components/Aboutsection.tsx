"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";

const milestones = [
  {
    title: "How We Started",
    text: "We began as a small, determined team, driven by the idea that technology should make people’s lives easier, not more complicated. That belief shaped our first product and every decision since.",
    icon: "mdi:seed-outline",
    image: "/about-start.jpg",
  },
  {
    title: "Why We Build",
    text: "Our purpose has always been to empower creators, teams, and dreamers to do their best work. We design solutions that scale ethically, inspire trust, and strengthen human collaboration.",
    icon: "mdi:lightbulb-on-outline",
    image: "/about-why.jpg",
  },
  {
    title: "Where We’re Going",
    text: "The journey continues toward a digital future that blends innovation, transparency, and personal growth. We’re building the ecosystem that helps everyone grow together.",
    icon: "mdi:rocket-launch-outline",
    image: "/about-future.jpg",
  },
];

export default function AboutSection() {
  return (
    <section className="relative w-full bg-[#060607] text-white py-16 md:py-24">
      <div className="max-w-5xl mx-auto px-6 md:px-10 relative">
        {/* SECTION HEADER */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-3"
          >
            Our <span className="text-[#ff6b35]">Story</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            viewport={{ once: true }}
            className="text-white/70 max-w-2xl mx-auto text-base sm:text-lg"
          >
            A journey fueled by purpose, how we started, what drives us, and
            where we’re headed next.
          </motion.p>
        </div>

        {/* TIMELINE LINE */}
        <div className="absolute left-1/2 transform -translate-x-1/2 top-0 h-full w-[1.5px] bg-gradient-to-b from-[#ff6b35] via-white/10 to-transparent pointer-events-none" />

        {/* MILESTONES */}
        <div className="space-y-20 md:space-y-28">
          {milestones.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.4 }}
              className={`relative flex flex-col md:flex-row items-center gap-8 md:gap-12 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Connector Dot */}
              <div className="absolute left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-[#ff6b35] shadow-[0_0_20px_rgba(255,107,53,0.5)] z-10" />

              {/* IMAGE */}
              <motion.div
                whileHover={{ rotateY: 5, rotateX: -3, scale: 1.03 }}
                transition={{ type: "spring", stiffness: 200, damping: 12 }}
                className="w-full md:w-1/2 relative rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(255,255,255,0.05)]"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  width={500}
                  height={500}
                  className="w-full h-56 md:h-72 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </motion.div>

              {/* CONTENT */}
              <div className="w-full md:w-1/2 text-center md:text-left space-y-3">
                <div className="flex justify-center md:justify-start items-center gap-3">
                  <Icon
                    icon={item.icon}
                    className="text-[#ff6b35] text-3xl md:text-4xl"
                  />
                  <h3 className="text-2xl sm:text-3xl font-bold">
                    {item.title}
                  </h3>
                </div>
                <p className="text-white/80 leading-relaxed text-base sm:text-lg">
                  {item.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA BUTTON */}
        <div className="text-center mt-20">
          <Link href="/about">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="px-8 py-3 rounded-full bg-[#ff6b35] text-black font-semibold hover:bg-[#ff6b35]/90 transition focus:ring-2 focus:ring-[#ff6b35]"
            >
              Learn More About Us
            </motion.button>
          </Link>
        </div>
      </div>
    </section>
  );
}

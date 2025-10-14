"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";

const milestones = [
  {
    title: "How We Started",
    text: "We began as a small, determined team, driven by the idea that technology should make people’s lives easier, not more complicated. That belief shaped our first product and every decision since.",
    icon: "mdi:seed-outline",
    image: "/HR Syndicate about-start.jpg",
  },
  {
    title: "Why We Build",
    text: "Our purpose has always been to empower creators, teams, and dreamers to do their best work. We design solutions that scale ethically, inspire trust, and strengthen human collaboration.",
    icon: "mdi:lightbulb-on-outline",
    image: "/HR Syndicate Why We Build.jpg",
  },
  {
    title: "Where We’re Going",
    text: "The journey continues toward a digital future that blends innovation, transparency, and personal growth. We’re building the ecosystem that helps everyone grow together.",
    icon: "mdi:rocket-launch-outline",
    image: "/HR Syndicate where we are going.jpeg",
  },
];

export default function AboutSection() {
  return (
    <section className="relative w-full bg-white text-black py-12 overflow-hidden">
      {/* GLOWING BACKGROUND */}
      <motion.div
        animate={{ opacity: [0.1, 0.25, 0.1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,107,53,0.25),_transparent_70%)] blur-3xl"
      />

      {/* SECTION HEADER */}
      <div className="text-center mb-20 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-3"
        >
          Our <span className="text-[#ff6b35]">Story</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-black/70 max-w-2xl mx-auto text-lg md:text-xl"
        >
          A journey fueled by purpose — how we started, what drives us, and
          where we’re headed next.
        </motion.p>
      </div>

      {/* TIMELINE */}
      <div className="max-w-6xl mx-auto px-6 md:px-12 relative">
        <motion.div
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-0 w-[3px] h-full origin-top bg-gradient-to-b from-[#ff6b35] via-[#ff6b35]/40 to-transparent"
        />

        {/* MILESTONE CARDS */}
        <div className="space-y-44 md:space-y-52">
          {milestones.map((item, index) => (
            <MilestoneCard key={index} item={item} index={index} />
          ))}
        </div>

        {/* CTA BUTTON */}
        <div className="text-center mt-28">
          <Link href="/about">
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.97 }}
              className="px-10 py-4 rounded-full bg-gradient-to-r from-[#ff6b35] to-orange-500 text-black font-semibold text-lg transition"
            >
              Learn More About Us
            </motion.button>
          </Link>
        </div>
      </div>
    </section>
  );
}

type MilestoneProps = {
  item: {
    title: string;
    text: string;
    icon: string;
    image: string;
  };
  index: number;
};

function MilestoneCard({ item, index }: MilestoneProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.6, 0.3]);

  return (
    <motion.div
      ref={ref}
      style={{ y, scale, opacity }}
      className={`relative flex flex-col md:flex-row items-center gap-10 md:gap-16 ${
        index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
      } transition-all duration-700`}
    >
      {/* TIMELINE DOT */}
      <motion.div
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-[#ff6b35] z-10"
      />

      {/* IMAGE CARD */}
      <motion.div
        whileHover={{
          scale: 1.05,
          rotateX: 3,
          rotateY: index % 2 === 0 ? 5 : -5,
        }}
        transition={{ type: "spring", stiffness: 150, damping: 12 }}
        className="w-full md:w-1/2 relative rounded-3xl overflow-hidden group shadow-lg"
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-tr from-black/60 to-transparent z-10"
          whileHover={{ opacity: 0.3 }}
        />
        <Image
          src={item.image}
          alt={item.title}
          width={600}
          height={400}
          quality={60}
          className="w-full h-64 md:h-80 object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <motion.div
          animate={{
            opacity: [0.1, 0.3, 0.1],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -inset-10 bg-[#ff6b35]/20 blur-3xl rounded-full z-0"
        />
      </motion.div>

      {/* CONTENT */}
      <div className="w-full md:w-1/2 text-center md:text-left space-y-4 relative z-10">
        <motion.div
          whileHover={{ x: 5 }}
          transition={{ duration: 0.3 }}
          className="flex justify-center md:justify-start items-center gap-3"
        >
          <Icon
            icon={item.icon}
            className="text-[#ff6b35] text-4xl drop-shadow-[0_0_10px_#ff6b35]"
          />
          <h3 className="text-2xl md:text-3xl font-bold tracking-tight">
            {item.title}
          </h3>
        </motion.div>
        <p className="text-black/80 leading-relaxed text-lg">{item.text}</p>
      </div>
    </motion.div>
  );
}

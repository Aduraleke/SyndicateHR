"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export default function Footer() {
  return (
    <footer className="relative bg-black border-t border-white/10 overflow-hidden">
      {/* Background Glow */}
      <motion.div
        animate={{ opacity: [0.1, 0.25, 0.1], scale: [1, 1.05, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,107,53,0.12),transparent_70%)] blur-3xl"
      />

      {/* Main Grid */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-12 text-center md:text-left">
        {/* Logo & Tagline */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="show">
          <div className="flex justify-center md:justify-start mb-5">
            <motion.div
              whileHover={{ scale: 1.07, rotate: 1 }}
              transition={{ type: "spring", stiffness: 250, damping: 18 }}
              className="w-[70px] h-[70px] rounded-full overflow-hidden border border-white/10 shadow-[0_0_25px_rgba(255,107,53,0.25)]"
            >
              <Image
                src="/syndicate.jpeg"
                alt="Syndicate HRs Logo"
                width={70}
                height={70}
                className="object-cover w-full h-full"
              />
            </motion.div>
          </div>
          <p className="text-white/70 text-sm leading-relaxed max-w-xs mx-auto md:mx-0">
            Connecting ambition with opportunity empowering people and
            organizations to grow together.
          </p>
        </motion.div>

        {/* Company */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" transition={{ delay: 0.1 }}>
          <h3 className="text-white font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-white/70 text-sm">
            {["About Us", "Our Team", "Careers", "Contact"].map((item, i) => (
              <li key={i}>
                <Link href="/" className="hover:text-[#ff6b35] transition-colors">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Resources */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" transition={{ delay: 0.2 }}>
          <h3 className="text-white font-semibold mb-4">Resources</h3>
          <ul className="space-y-2 text-white/70 text-sm">
            {["Blog", "FAQs", "Case Studies", "Partnerships"].map((item, i) => (
              <li key={i}>
                <Link href="/" className="hover:text-[#ff6b35] transition-colors">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Social / Connect */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" transition={{ delay: 0.3 }}>
          <h3 className="text-white font-semibold mb-4">Connect</h3>
          <div className="flex justify-center md:justify-start gap-5">
            {[
              { icon: "mdi:linkedin", href: "#" },
              { icon: "mdi:twitter", href: "#" },
              { icon: "mdi:github", href: "#" },
            ].map((social, i) => (
              <motion.a
                key={i}
                href={social.href}
                whileHover={{ scale: 1.2, y: -3 }}
                transition={{ type: "spring", stiffness: 250, damping: 14 }}
                className="text-white/60 hover:text-[#ff6b35] text-2xl"
              >
                <Icon icon={social.icon} />
              </motion.a>
            ))}
          </div>
          <p className="mt-4 text-white/60 text-sm">Info@athrsyndicate.com</p>
        </motion.div>
      </div>

      {/* Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

      {/* Bottom Bar */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between text-white/50 text-xs md:text-sm">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          © {new Date().getFullYear()} HR Syndicate  All Rights Reserved.
        </motion.div>
        <div className="flex gap-4 mt-3 md:mt-0">
          <Link href="/privacy" className="hover:text-[#ff6b35] transition">
            Privacy Policy
          </Link>
          <Link href="/terms" className="hover:text-[#ff6b35] transition">
            Terms
          </Link>
        </div>
      </div>

      {/* Floating Accent Orb */}
      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 right-10 w-16 h-16 bg-[#ff6b35]/20 rounded-full blur-2xl"
      />
    </footer>
  );
}

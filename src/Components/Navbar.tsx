"use client";

import React, { useEffect } from "react";
import { motion, useMotionValue } from "framer-motion";
import { Icon } from "@iconify/react";
import Link from "next/link";
import Image from "next/image";

const links = [
  { name: "About", icon: "solar:info-square-broken", href: "/about" },
  { name: "Services", icon: "solar:settings-broken", href: "/services" },
  { name: "Industries", icon: "mdi:briefcase-outline", href: "/industries" },
  { name: "Contact", icon: "solar:chat-round-dots-broken", href: "/contact" },
];

export default function NavBar() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      x.set((e.clientX - window.innerWidth / 2) / 50);
      y.set((e.clientY - window.innerHeight / 2) / 50);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);

  return (
    <motion.nav
      className="
        fixed z-50 w-[94vw] max-w-[850px]
        left-1/2 -translate-x-1/2
        top-3 bottom-auto
      "
    >
      
      {/* Background glow */}
      <motion.div
        animate={{ opacity: [0.4, 0.7, 0.4], scale: [1, 1.02, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 rounded-full blur-3xl bg-gradient-to-r from-[#ff6b35]/25 via-[#ffb987]/10 to-[#ff6b35]/25"
      />

      <div
        className="
          relative flex items-center justify-evenly flex-wrap
          py-1 px-4 md:px-6 
          bg-[#0b0b0b]/80 backdrop-blur-2xl 
          rounded-full border border-white/10 

        "
      >
        <motion.div
          whileHover={{ scale: 1.08, rotate: 2 }}
          transition={{ type: 'spring', stiffness: 220, damping: 15 }}
          className="
            w-[40px] h-[40px] md:w-[65px] md:h-[65px]
            rounded-2xl flex items-center justify-center 


             cursor-pointer
             md:left-1/2 md:-translate-x-1/2
          "
        >
          <Link href="/" className="w-full h-full flex items-center justify-center">
            <motion.div
              animate={{
                scale: [1, 1.05, 1],
                boxShadow: [
                  // "0 0 15px rgba(255,107,53,0.3)",
                  // "0 0 35px rgba(255,107,53,0.45)",
                  // "0 0 15px rgba(255,107,53,0.3)",
                ],
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <Image
                src="/syndicate.jpeg"
                alt="Syndicate HRs Logo"
                width={60}
                height={60}
                className="rounded-full object-contain  border border-white/10"
              />
            </motion.div>
          </Link>
        </motion.div>
        
        {links.map((link) => (
          <NavItem key={link.name} link={link} />
        ))}
      </div>
    </motion.nav>
  );
}

function NavItem({
  link,
}: {
  link: { name: string; icon: string; href: string };
}) {
  return (
    <motion.div
      whileTap={{ scale: 0.9 }}
      whileHover={{ scale: 1.1, y: -2 }}
      transition={{ type: "spring", stiffness: 250, damping: 15 }}
      className="relative cursor-pointer select-none group  py-1"
    >
      <Link
        href={link.href}
        className="flex flex-col items-center justify-center gap-1 text-white/80 hover:text-[#ff6b35] transition-all"
      >
        <Icon icon={link.icon} className="text-xl md:text-[1rem]" />
        <motion.span
          className="
            text-[0.5rem] md:text-xs font-semibold text-[#ffb987]
            block md:relative md:top-full md:pt-1
          "
          initial={{ opacity: 0, y: 8 }}
          whileHover={{ opacity: 1, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {link.name}
        </motion.span>
      </Link>
    </motion.div>
  );
}

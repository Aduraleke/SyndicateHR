'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';
import Image from 'next/image';
import Link from 'next/link';

const ACCENT = '#FF6B35';

export default function AboutPage() {
  return (
    <main className="relative bg-[#F9F7F5] text-[#1A1A1A] min-h-screen overflow-hidden dark:bg-[#050505] dark:text-white transition-colors duration-500">
      {/* Background glow and texture */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,107,53,0.08),transparent_40%)]" />
        <div className="absolute inset-0 opacity-10 bg-[url('/grid-light.svg')] bg-center bg-[length:56px_56px]" />
      </div>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24 space-y-32 mt-12">
        {/* HERO */}
        <header className="text-center max-w-3xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#FF6B35] to-[#FFB347] tracking-tight"
          >
            Where People Meet Purpose
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mt-5 text-neutral-700 dark:text-gray-300 text-lg leading-relaxed"
          >
            HR’s Syndicate connects human ambition with visionary companies. 
            We believe hiring should be fast, thoughtful, and deeply human, built on understanding, not algorithms.
          </motion.p>
        </header>

        {/* OUR STORY */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Our Story</h2>
            <p className="text-neutral-700 dark:text-gray-300 leading-relaxed">
              HR’s Syndicate began from a simple truth, great people were being lost in automated systems. 
              We set out to change that by rebuilding recruitment around empathy, precision, and trust.
            </p>
            <p className="text-neutral-700 dark:text-gray-300 leading-relaxed">
              A decade later, we’ve helped connect thousands of professionals to companies who see their potential, 
              not just their résumé. Across fintech, healthcare, and engineering, we make hiring human again.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden border border-[#00000010] dark:border-[#ffffff10] shadow-[0_10px_30px_rgba(0,0,0,0.1)]"
          >
            <Image
              src="/HR Syndicate Why We Build.jpg"
              alt="HR's Syndicate Team"
              width={1200}
              height={800}
              className="object-cover w-full h-96"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          </motion.div>
        </section>

        {/* VALUES */}
        <section className="relative text-center">
          <div
            className="absolute inset-0 -z-10 blur-3xl opacity-30"
            style={{ background: `radial-gradient(circle, ${ACCENT}20 0%, transparent 60%)` }}
          />
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl font-bold mb-12 tracking-tight"
          >
            What We Stand For
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-left">
            {[
              {
                icon: 'mdi:account-group-outline',
                title: 'Human First',
                desc: 'Relationships over algorithms. Every placement starts with real conversation and care.',
              },
              {
                icon: 'mdi:lightning-bolt-outline',
                title: 'Speed & Precision',
                desc: 'We move fast, but never rush. Each match is backed by intent and understanding.',
              },
              {
                icon: 'mdi:handshake-outline',
                title: 'Partnership for Growth',
                desc: 'We don’t just fill roles, we nurture long-term partnerships that empower success.',
              },
            ].map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03, boxShadow: '0 0 30px rgba(255,107,53,0.15)' }}
                className="bg-white dark:bg-[#111] p-10 rounded-3xl border border-[#00000010] dark:border-[#ffffff10] transition shadow-sm"
              >
                <div className="text-[#FF6B35] text-4xl mb-4">
                  <Icon icon={value.icon} />
                </div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-neutral-700 dark:text-gray-400 leading-relaxed">
                  {value.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* STATS */}
        <section className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl font-bold mb-12 tracking-tight"
          >
            Proven Impact
          </motion.h2>
          <div className="flex flex-wrap justify-center gap-10 md:gap-20">
            {[
              { label: 'Placements', value: '10K+' },
              { label: 'Industries Served', value: '12+' },
              { label: 'Client Satisfaction', value: '96%' },
              { label: 'Years of Experience', value: '10+' },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center"
              >
                <div className="text-4xl font-extrabold text-[#1A1A1A] dark:text-white">
                  {stat.value}
                </div>
                <div className="text-sm text-neutral-600 dark:text-gray-400 mt-1">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="relative rounded-3xl overflow-hidden text-center">
          <div
            className="absolute inset-0 -z-10 blur-3xl opacity-30"
            style={{ background: `radial-gradient(circle, ${ACCENT} 0%, transparent 50%)` }}
          />
          <div className="bg-gradient-to-br from-[#FF6B35] via-[#ffb347] to-[#ffd580] p-12 rounded-2xl text-black shadow-[0_10px_40px_rgba(255,107,53,0.25)] relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 mix-blend-overlay" />
            <h3 className="text-3xl md:text-4xl font-extrabold mb-4 tracking-tight">
              Let’s Build What’s Next
            </h3>
            <p className="text-md md:text-lg mb-8 text-black/80 max-w-xl mx-auto leading-relaxed">
              Partner with recruiters who understand people, and potential. Together, 
              we’ll create teams that make an impact.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-black text-white px-10 py-4 rounded-full font-semibold cursor-pointer shadow-lg hover:scale-105 transition"
            >
              Get in Touch
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}

"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import Link from "next/link";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSent(true);
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setSent(false), 3000);
    }, 1600);
  };

  return (
    <main className="relative min-h-screen bg-[#050505] text-white overflow-hidden flex flex-col">
      {/* --- Animated Grid Background --- */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,107,53,0.12),transparent_70%)]" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center bg-[length:60px_60px] opacity-10 animate-[pulse_6s_ease-in-out_infinite]" />
      </div>

      {/* --- Hero --- */}
      <section className="text-center pt-28 pb-12 px-6 relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-[#FF6B35] to-yellow-300 bg-clip-text text-transparent"
        >
          Let’s Build Something Extraordinary
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-gray-400 text-lg md:text-xl mt-6 max-w-2xl mx-auto leading-relaxed"
        >
          Whether you’re scaling your team or joining one, we’re ready to connect the right people to the right mission.
        </motion.p>
      </section>

      {/* --- Contact Section --- */}
      <section className="relative z-10 flex flex-col lg:flex-row items-center justify-center gap-16 px-6 lg:px-16 pb-24">
        {/* Info Panel */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2 space-y-10"
        >
          <h2 className="text-3xl font-semibold mb-4">Get in Touch</h2>
          <p className="text-gray-400 leading-relaxed">
            Talk directly with our consultants for partnerships, recruitment,
            or collaboration opportunities. Let’s discuss your next great hire or idea.
          </p>

          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <Icon icon="mdi:email-outline" className="text-[#FF6B35] text-2xl" />
              <a
                href="mailto:hello@hrsyndicate.com"
                className="hover:text-[#FF6B35] transition"
              >
                hello@hrsyndicate.com
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Icon icon="mdi:phone-outline" className="text-[#FF6B35] text-2xl" />
              <a href="tel:+447708303366" className="hover:text-[#FF6B35] transition">
                +44 7708 303366
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Icon icon="mdi:whatsapp" className="text-[#25D366] text-2xl" />
              <Link
                href="https://wa.me/447708303366"
                target="_blank"
                className="hover:text-[#25D366] transition"
              >
                Chat on WhatsApp
              </Link>
            </div>
            <div className="flex items-center gap-3">
              <Icon icon="mdi:map-marker-outline" className="text-[#FF6B35] text-2xl" />
              <span>Global — Remote First</span>
            </div>
          </div>

          <div className="flex gap-6 mt-8">
            {["linkedin", "twitter", "instagram"].map((platform) => (
              <Link
                key={platform}
                href="#"
                className="w-11 h-11 flex items-center justify-center rounded-full border border-[#FF6B35]/40 hover:border-[#FF6B35] hover:text-[#FF6B35] transition duration-300"
              >
                <Icon icon={`mdi:${platform}`} className="text-xl" />
              </Link>
            ))}
          </div>
        </motion.div>

        {/* Form Panel */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative w-full lg:w-1/2 bg-white/10 rounded-3xl p-8  backdrop-blur-xl"
        >


          <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
          <div className="space-y-5">
            <div>
              <label className="block text-gray-400 mb-1">Name</label>
              <input
                name="name"
                type="text"
                required
                value={form.name}
                onChange={handleChange}
                className="w-full bg-neutral-900/80 border border-gray-700 rounded-xl px-4 py-3 focus:border-[#FF6B35] outline-none transition"
              />
            </div>
            <div>
              <label className="block text-gray-400 mb-1">Email</label>
              <input
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                className="w-full bg-neutral-900/80 border border-gray-700 rounded-xl px-4 py-3 focus:border-[#FF6B35] outline-none transition"
              />
            </div>
            <div>
              <label className="block text-gray-400 mb-1">Message</label>
              <textarea
                name="message"
                required
                rows={5}
                value={form.message}
                onChange={handleChange}
                className="w-full bg-neutral-900/80 border border-gray-700 rounded-xl px-4 py-3 focus:border-[#FF6B35] outline-none transition resize-none"
              />
            </div>
          </div>

          <motion.button
            type="submit"
            whileTap={{ scale: 0.97 }}
            disabled={loading}
            className="w-full mt-6 bg-[#FF6B35] text-white py-3 rounded-xl font-semibold text-lg hover:bg-[#e85f2f] transition duration-300 disabled:opacity-50"
          >
            {loading ? "Sending..." : "Send Message"}
          </motion.button>

          {sent && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center mt-4 text-green-400"
            >
              ✅ Message sent successfully!
            </motion.div>
          )}
        </motion.form>
      </section>
    </main>
  );
}

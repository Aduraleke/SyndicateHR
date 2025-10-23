"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import Link from "next/link";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm({ ...form, [e.target.name]: e.target.value });

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
    <main className="relative min-h-screen flex flex-col lg:flex-row bg-[#050505] text-white overflow-hidden">
      {/* --- Background Layers --- */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,107,53,0.15),transparent_70%)]" />
        <div className="absolute top-[30%] right-[-10%] w-[600px] h-[600px] bg-[#FF6B35]/20 blur-[180px] rounded-full" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.08]" />
      </div>

      {/* --- LEFT SIDE: Contact Form --- */}
      <section className="flex-1 flex items-center justify-center py-24 px-6 lg:px-16 bg-transparent relative">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-lg bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-10 shadow-xl"
        >
          <h1 className="text-3xl font-bold bg-gradient-to-r from-[#FF6B35] to-yellow-300 bg-clip-text text-transparent mb-2">
            Send Us a Message
          </h1>
          <p className="text-gray-400 mb-8 text-base">
            Have a question or proposal? Let’s make something great together.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-gray-400 mb-2 text-sm">
                Full Name
              </label>
              <input
                name="name"
                type="text"
                required
                value={form.name}
                onChange={handleChange}
                className="w-full bg-neutral-900/60 border border-gray-700 rounded-xl px-4 py-3 text-sm focus:border-[#FF6B35] focus:ring-2 focus:ring-[#FF6B35]/30 outline-none transition"
              />
            </div>

            <div>
              <label className="block text-gray-400 mb-2 text-sm">
                Email Address
              </label>
              <input
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                className="w-full bg-neutral-900/60 border border-gray-700 rounded-xl px-4 py-3 text-sm focus:border-[#FF6B35] focus:ring-2 focus:ring-[#FF6B35]/30 outline-none transition"
              />
            </div>

            <div>
              <label className="block text-gray-400 mb-2 text-sm">
                Message
              </label>
              <textarea
                name="message"
                rows={5}
                required
                value={form.message}
                onChange={handleChange}
                className="w-full bg-neutral-900/60 border border-gray-700 rounded-xl px-4 py-3 text-sm focus:border-[#FF6B35] focus:ring-2 focus:ring-[#FF6B35]/30 outline-none transition resize-none"
              />
            </div>

            <motion.button
              whileTap={{ scale: 0.97 }}
              disabled={loading}
              className="w-full bg-gradient-to-r from-[#FF6B35] to-[#ff914d] text-white py-3 rounded-xl font-semibold text-base shadow-lg hover:shadow-[#FF6B35]/30 transition duration-300 disabled:opacity-50"
            >
              {loading ? "Sending..." : "Send Message"}
            </motion.button>

            {sent && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center mt-3 text-green-400 text-sm"
              >
                ✅ Message sent successfully!
              </motion.div>
            )}
          </form>
        </motion.div>
      </section>

      {/* --- RIGHT SIDE: Info & Socials --- */}
      <motion.aside
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex-1 flex flex-col justify-center px-10 lg:px-16 py-24 space-y-10"
      >
        <div>
          <h2 className="text-3xl font-bold text-white mb-3">
            Let’s Connect
          </h2>
          <p className="text-gray-400 text-base max-w-sm">
            We operate globally with a remote-first approach. Reach us directly
            through any of the channels below.
          </p>
        </div>

        {/* --- Contact Details --- */}
        <div className="space-y-6">
          {[
            {
              icon: "mdi:email-outline",
              text: "hello@hrsyndicate.com",
              href: "mailto:hello@hrsyndicate.com",
            },
            {
              icon: "mdi:phone-outline",
              text: "+44 7708 303366",
              href: "tel:+447708303366",
            },
            {
              icon: "mdi:whatsapp",
              text: "Chat on WhatsApp",
              href: "https://wa.me/447708303366",
            },
          ].map((item, i) => (
            <Link
              key={i}
              href={item.href}
              target="_blank"
              className="flex items-center gap-4 group"
            >
              <Icon
                icon={item.icon}
                className="text-2xl text-[#FF6B35] group-hover:scale-110 transition-transform"
              />
              <span className="text-gray-300 group-hover:text-[#FF6B35] transition">
                {item.text}
              </span>
            </Link>
          ))}
        </div>

        {/* --- Social Icons --- */}
        <div className="flex gap-5 pt-8">
          {[
            { icon: "mdi:linkedin", href: "#" },
            { icon: "mdi:twitter", href: "#" },
            { icon: "mdi:instagram", href: "#" },
          ].map((platform, i) => (
            <Link
              key={i}
              href={platform.href}
              className="w-12 h-12 flex items-center justify-center rounded-xl border border-white/10 hover:border-[#FF6B35] hover:bg-[#FF6B35]/10 transition duration-300"
            >
              <Icon icon={platform.icon} className="text-xl" />
            </Link>
          ))}
        </div>

        {/* --- Location Card --- */}
        <div className="pt-8">
          <div className="bg-neutral-900/50 border border-white/10 rounded-2xl p-6">
            <h4 className="font-semibold text-lg mb-2 text-white">
              Headquarters
            </h4>
            <p className="text-gray-400 text-sm">
              Remote • Operating across Europe, Africa, and North America
            </p>
          </div>
        </div>
      </motion.aside>
    </main>
  );
}

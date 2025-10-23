"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import Link from "next/link";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [sent, ] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm({ ...form, [e.target.name]: e.target.value });
const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  setLoading(true);

  setTimeout(() => {
    const { name, email, message } = form;
    const mailtoLink = `mailto:hello@hrsyndicate.com?subject=${encodeURIComponent(
      `New Contact Message from ${name}`
    )}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    )}`;
    window.location.href = mailtoLink;
    setLoading(false);
  }, 1000);
};


  return (
    <main className="flex flex-col lg:flex-row min-h-screen text-white bg-black">
      
      {/* === LEFT SIDE: CONTACT FORM === */}
      <section className="flex-1 flex items-center justify-center p-6 lg:p-16 bg-black relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-lg bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-10 shadow-2xl"
        >
          <h1 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-[#FF6B35] to-yellow-300 bg-clip-text text-transparent mb-3">
            Let’s Work Together
          </h1>
          <p className="text-gray-300 mb-8 text-base leading-relaxed">
            Got a question, idea, or collaboration proposal? We’d love to hear from you.
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-gray-400 text-sm mb-2">Full Name</label>
              <input
                type="text"
                name="name"
                required
                value={form.name}
                onChange={handleChange}
                className="w-full bg-black/40 border border-gray-700 rounded-xl px-4 py-3 text-sm focus:border-[#FF6B35] focus:ring-2 focus:ring-[#FF6B35]/30 outline-none"
              />
            </div>

            <div>
              <label className="block text-gray-400 text-sm mb-2">Email Address</label>
              <input
                type="email"
                name="email"
                required
                value={form.email}
                onChange={handleChange}
                className="w-full bg-black/40 border border-gray-700 rounded-xl px-4 py-3 text-sm focus:border-[#FF6B35] focus:ring-2 focus:ring-[#FF6B35]/30 outline-none"
              />
            </div>

            <div>
              <label className="block text-gray-400 text-sm mb-2">Message</label>
              <textarea
                name="message"
                rows={5}
                required
                value={form.message}
                onChange={handleChange}
                className="w-full bg-black/40 border border-gray-700 rounded-xl px-4 py-3 text-sm focus:border-[#FF6B35] focus:ring-2 focus:ring-[#FF6B35]/30 outline-none resize-none"
              />
            </div>

            <motion.button
              whileTap={{ scale: 0.97 }}
              disabled={loading}
              className="w-full bg-gradient-to-r from-[#FF6B35] to-[#ff914d] text-white py-3 rounded-xl font-semibold shadow-md hover:shadow-[#FF6B35]/30 transition duration-300 disabled:opacity-60"
            >
              {loading ? "Sending..." : "Send Message"}
            </motion.button>

            {sent && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center text-green-400 text-sm mt-3"
              >
                ✅ Your message has been sent successfully!
              </motion.div>
            )}
          </form>
        </motion.div>
      </section>

      {/* === RIGHT SIDE: VIDEO + CONTACT INFO === */}
      <motion.aside
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9, delay: 0.2 }}
        className="flex-1 relative flex flex-col justify-end"
      >
        {/* === VIDEO SECTION === */}
        <div className="absolute inset-0">
          <video
            className="w-full h-full object-cover"
            src="/HR%20Syndicate%20Contact%20Video.mp4"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
          />
          {/* gradient overlay for legibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
        </div>

        {/* === INFO OVERLAY === */}
        <div className="relative z-10 p-10 lg:p-16 space-y-8 bg-gradient-to-t from-black/80 via-black/60 to-transparent">
          <div>
            <h2 className="text-3xl font-bold mb-3">Get in Touch</h2>
            <p className="text-gray-300 max-w-sm">
              Whether you&apos;re looking to hire, partner, or learn more, we’re always ready to connect.
            </p>
          </div>

          <div className="space-y-5">
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
                className="flex items-center gap-3 group"
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

          <div className="flex gap-5 pt-6">
            {[
              { icon: "mdi:linkedin", href: "#" },
              { icon: "mdi:twitter", href: "#" },
              { icon: "mdi:instagram", href: "#" },
            ].map((platform, i) => (
              <Link
                key={i}
                href={platform.href}
                target="_blank"
                className="w-12 h-12 flex items-center justify-center rounded-xl border border-white/10 hover:border-[#FF6B35] hover:bg-[#FF6B35]/10 transition duration-300"
              >
                <Icon icon={platform.icon} className="text-xl" />
              </Link>
            ))}
          </div>

          <div className="bg-black/60 border border-white/10 rounded-2xl p-6 mt-8">
            <h4 className="font-semibold text-lg mb-2">Headquarters</h4>
            <p className="text-gray-400 text-sm">
              Remote • Operating across Europe, Africa, and North America
            </p>
          </div>
        </div>
      </motion.aside>
    </main>
  );
}

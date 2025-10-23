"use client";

import { Icon } from "@iconify/react";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/447708303366"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#FF6B35] text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform duration-300"
      aria-label="Chat on WhatsApp"
    >
      <Icon icon="ic:baseline-whatsapp" className="text-3xl" />
    </a>
  );
}

"use client";
import React, { useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useOrbit } from "./OrbitContext";

export default function FieldModal() {
  const { modalField, openModal, lastFocusedIdRef } = useOrbit();
  const dialogRef = useRef<HTMLDivElement | null>(null);
  const closeBtnRef = useRef<HTMLButtonElement | null>(null);

  // --- Handle keyboard escape
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") openModal(null);
    },
    [openModal]
  );

  // --- Focus and scroll control
  useEffect(() => {
    if (modalField) {
      setTimeout(() => closeBtnRef.current?.focus(), 40);
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);

      const id = lastFocusedIdRef.current;
      if (id) {
        document.getElementById(id)?.focus();
        lastFocusedIdRef.current = null;
      }
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [modalField, handleKeyDown, lastFocusedIdRef]);

  if (!modalField) return null;

  const slug = modalField.toLowerCase().replace(/\s+/g, "-");

  return (
    <AnimatePresence>
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-label={`${modalField} preview`}
        className="fixed inset-0 z-50 flex items-center justify-center px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* Overlay */}
        <motion.div
          className="absolute inset-0 bg-black/70 backdrop-blur-sm"
          onClick={() => openModal(null)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        />

        {/* Modal content */}
        <motion.div
          ref={dialogRef}
          initial={{ scale: 0.92, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.92, opacity: 0, y: 20 }}
          transition={{ type: "spring", stiffness: 220, damping: 18 }}
          className="relative z-10 w-full max-w-lg rounded-2xl bg-[#0b0b0d]/95 border border-white/10 p-6 md:p-8 shadow-[0_0_40px_rgba(255,107,53,0.25)] text-white"
        >
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold text-white tracking-tight">
                {modalField}
              </h2>
              <p className="text-white/70 mt-2 leading-relaxed">
                Quick preview for <span className="font-medium">{modalField}</span>.  
                This modal can include an overview, metrics, or a CTA.
              </p>
            </div>

            {/* Actions */}
            <div className="flex flex-col items-end gap-3">
              <button
                ref={closeBtnRef}
                onClick={() => openModal(null)}
                className="px-4 py-2 text-sm rounded-md bg-white/10 hover:bg-white/20 focus:ring-2 focus:ring-[#ff6b35] transition"
                aria-label="Close preview"
              >
                Close
              </button>
              <Link href={`/fields/${slug}`} className="w-full">
                <button
                  onClick={() => openModal(null)}
                  className="w-full px-5 py-2 rounded-md bg-[#ff6b35] text-black font-semibold hover:bg-[#ff6b35]/90 focus:ring-2 focus:ring-[#ff6b35] transition"
                >
                  Open Page
                </button>
              </Link>
            </div>
          </div>

          <div className="mt-6 border-t border-white/10 pt-5">
            <p className="text-sm font-semibold text-[#ffb987] mb-2">
              Example Highlights
            </p>
            <ul className="text-sm text-white/80 list-disc pl-5 space-y-1">
              <li>Trusted recruitment partners in the industry</li>
              <li>Specialized screening & assessment workflows</li>
              <li>Custom placement packages and retainers</li>
            </ul>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

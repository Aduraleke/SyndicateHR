"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, useMotionValue } from "framer-motion";

const ACCENT = "#FF6B35";

type Industry = {
  name: string;
  slug: string;
  tagline: string;
  image: string;
  description: string;
  focus: string[];
  stats: { placements: string; satisfaction: string };
};

const industries: Industry[] = [
  {
    name: "Fintech",
    slug: "fintech",
    tagline: "Fast-moving finance teams and product labs",
    image: "/HR Syndicate Fintech.jpg",
    description:
      "We partner with Fintech innovators shaping the future of digital payments, lending, and wealth management. From compliance engineers to growth marketers, we place teams that build trust and scale rapidly.",
    focus: [
      "Blockchain & DeFi Specialists",
      "Risk & Compliance Officers",
      "Data Analysts & Product Designers",
      "Growth Marketers",
    ],
    stats: { placements: "2.5K+", satisfaction: "97%" },
  },
  {
    name: "Healthcare",
    slug: "healthcare",
    tagline: "Patient-first operations & clinical tech",
    image: "/HR Syndicate Healthcare.jpg",
    description:
      "Empowering healthcare organizations with skilled professionals who ensure patient safety, operational excellence, and the integration of health tech for modern care delivery.",
    focus: [
      "Medical Data Analysts",
      "Telehealth Engineers",
      "Healthcare Administrators",
      "Clinical Product Managers",
    ],
    stats: { placements: "1.2K+", satisfaction: "95%" },
  },
  {
    name: "Web3",
    slug: "web3",
    tagline: "Blockchain teams building the next web",
    image: "/HR Syndicate Web3.jpg",
    description:
      "We connect visionary teams in Web3, gaming, and decentralized finance with engineers, product thinkers, and community managers who build trustless ecosystems.",
    focus: [
      "Smart Contract Developers",
      "Solidity & Rust Engineers",
      "DAO Managers",
      "Community Growth Leads",
    ],
    stats: { placements: "1.1K+", satisfaction: "96%" },
  },
  {
    name: "Engineering",
    slug: "engineering",
    tagline: "High-performance engineering orgs",
    image: "/HR Syndicate Engineering.jpg",
    description:
      "Partnering with world-class engineering companies to source and place elite technical teams across software, hardware, and infrastructure disciplines.",
    focus: [
      "Mechanical & Electrical Engineers",
      "Software Developers & DevOps",
      "Systems Architects",
      "Project Managers",
    ],
    stats: { placements: "3.0K+", satisfaction: "98%" },
  },
  {
    name: "Marketing & PR",
    slug: "marketing-pr",
    tagline: "Creative studios & data-driven marketing",
    image: "/HR Syndicate Marketing.jpg",
    description:
      "We support brands and agencies with the creative, analytical, and strategic talent needed to build awareness, scale impact, and connect with audiences authentically.",
    focus: [
      "Digital Marketing Strategists",
      "Brand & Communications Managers",
      "SEO & SEM Specialists",
      "Public Relations Officers",
    ],
    stats: { placements: "1.8K+", satisfaction: "94%" },
  },
  {
    name: "Hospitality",
    slug: "hospitality",
    tagline: "Service-led teams & customer experience",
    image: "/HR Syndicate Hospitality.jpg",
    description:
      "Delivering exceptional talent for hospitality, travel, and service sectors — where guest experience, efficiency, and leadership make all the difference.",
    focus: [
      "Hotel & Resort Managers",
      "Customer Experience Leads",
      "Culinary Professionals",
      "Operations Coordinators",
    ],
    stats: { placements: "2.0K+", satisfaction: "93%" },
  },
  {
    name: "Legal",
    slug: "legal",
    tagline: "Corporate counsel & compliance teams",
    image: "/HR Syndicate Legal.jpeg",
    description:
      "We connect top-tier legal professionals with firms and corporations seeking strategic advisors in compliance, IP, and business law.",
    focus: [
      "Corporate Counsel",
      "Compliance Specialists",
      "Legal Assistants",
      "Intellectual Property Experts",
    ],
    stats: { placements: "900+", satisfaction: "96%" },
  },
  {
    name: "iGaming",
    slug: "igaming",
    tagline: "Real-time platforms and ops",
    image: "/HR Syndicate iGaming.jpeg",
    description:
      "Empowering iGaming operators and studios with product, data, and marketing teams to scale responsibly and engage players globally.",
    focus: [
      "Game Developers & Designers",
      "Player Acquisition Managers",
      "Risk & Fraud Analysts",
      "Data Scientists",
    ],
    stats: { placements: "1.5K+", satisfaction: "95%" },
  },
  {
    name: "Others",
    slug: "others",
    tagline: "All other industries we serve",
    image: "/HR Syndicate Other.jpg",
    description:
      "From education to logistics, retail to manufacturing, our recruitment services adapt to every industry’s talent needs with precision and care.",
    focus: [
      "Operations Managers",
      "Data & Logistics Coordinators",
      "Customer Success Teams",
      "Strategy Consultants",
    ],
    stats: { placements: "4.0K+", satisfaction: "92%" },
  },
];


export default function IndustriesPage() {
  // refs for sections
  const sectionRefs = useRef<Array<HTMLElement | null>>([]);
  const [active, setActive] = useState<string | null>(industries[0]?.slug ?? null);
  const prefersReducedMotion = typeof window !== "undefined" && window.matchMedia
    ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
    : false;

  // IntersectionObserver to set active item
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.getAttribute("data-slug"));
          }
        });
      },
      { root: null, rootMargin: "0px 0px -30% 0px", threshold: 0.25 }
    );

    sectionRefs.current.forEach((el) => el && obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <main className="relative bg-[#050505] text-white min-h-screen">
      {/* Background grid + radial ambient glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,107,53,0.06),transparent_40%)]" />
        <div className="absolute inset-0 opacity-5 bg-[url('/grid.svg')] bg-center bg-[length:56px_56px]" />
      </div>

      {/* Layout: sticky left nav + main content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-12 gap-8 py-20 mt-8">
        {/* Sticky Sidebar (desktop) */}
        <aside className="hidden lg:col-span-3 lg:block">
          <div className="sticky top-24 space-y-6">
            <div>
              <h3 className="text-sm font-semibold text-gray-300">Explore</h3>
              <h2 className="text-2xl font-extrabold text-white">Industries</h2>
            </div>

            <nav aria-label="Industries navigation" className="space-y-3">
              {industries.map((ind, ) => {
                const isActive = active === ind.slug;
                return (
                  <a
                    key={ind.slug}
                    href={`#${ind.slug}`}
                    onClick={(e) => {
                      // smooth scroll for modern browsers
                      e.preventDefault();
                      const el = document.getElementById(ind.slug);
                      el?.scrollIntoView({ behavior: "smooth", block: "start" });
                    }}
                    className={`group flex items-center gap-3 text-sm transition ${
                      isActive ? "text-white" : "text-gray-400 hover:text-white"
                    }`}
                  >
                    <span
                      aria-hidden
                      className={`w-3 h-3 rounded-full shrink-0 transition-all ${
                        isActive ? "bg-[#FF6B35] scale-110 shadow-[0_0_12px_rgba(255,107,53,0.35)]" : "bg-gray-700 group-hover:bg-[#FF6B35]/60"
                      }`}
                    />
                    <div>
                      <div className="font-medium">{ind.name}</div>
                      <div className="text-xs text-gray-500">{ind.tagline}</div>
                    </div>
                  </a>
                );
              })}
            </nav>

            {/* Vertical progress indicator */}
            <div className="mt-8">
              <ScrollProgressIndicator />
            </div>
          </div>
        </aside>

        {/* Main content */}
        <div className="col-span-12 lg:col-span-9 space-y-20">
          {/* Hero */}
          <header className="text-center max-w-3xl mx-auto">
            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#FF6B35] to-yellow-300 tracking-tight"
            >
              Industries We Empower
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.15, duration: 0.6 }}
              className="mt-4 text-gray-300 text-base md:text-lg"
            >
              Precision hiring at scale, deep industry knowledge, curated talent,
              and measurable outcomes. Scroll to explore each sector.
            </motion.p>
          </header>

          {/* Sections */}
          {industries.map((ind, i) => (
            <IndustrySection
              key={ind.slug}
              industry={ind}
              index={i}
              sectionRefs={sectionRefs}
              prefersReducedMotion={prefersReducedMotion}
            />
          ))}

          {/* CTA */}
          <section className="relative rounded-3xl overflow-hidden">
            <div className="absolute inset-0 -z-10 blur-3xl opacity-30" style={{ background: `radial-gradient(circle, ${ACCENT} 0%, transparent 40%)` }} />
            <div className="bg-gradient-to-r from-[#ff6b35] via-orange-500 to-yellow-400 p-10 rounded-2xl text-black text-center">
              <h3 className="text-3xl md:text-4xl font-extrabold">Ready to build your dream team?</h3>
              <p className="text-md md:text-lg mt-3 mb-6">We’ll match you with people who ship on day one.</p>
              <Link href="/contact" className="inline-block bg-black text-white px-8 py-3 rounded-full font-semibold shadow-lg">
                Start Hiring
              </Link>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}

/* -----------------------
   ScrollProgressIndicator
   small vertical progress indicator computed from window scroll
   ----------------------- */
function ScrollProgressIndicator() {
  const progress = useMotionValue(0);
  useEffect(() => {
    const onScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      if (total > 0) {
        progress.set(window.scrollY / total);
      } else progress.set(0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [progress]);

  return (
    <div className="w-2 h-48 bg-white/6 rounded-full relative overflow-hidden">
      <motion.div
        style={{ scaleY: progress }}
        className="origin-top left-0 top-0 absolute inset-0 bg-gradient-to-b from-[#FF6B35] to-orange-400"
      />
    </div>
  );
}

/* -----------------------
   IndustrySection
   - parallax image using framer useScroll on the section element
   - 3D tilt on pointer with motion values
   - sticky mini header on small screens
   ----------------------- */
function IndustrySection({
  industry,
  index,
  sectionRefs,
  prefersReducedMotion,
}: {
  industry: Industry;
  index: number;
  sectionRefs: React.MutableRefObject<Array<HTMLElement | null>>;
  prefersReducedMotion: boolean;
}) {
  const ref = useRef<HTMLElement | null>(null);
  // collect ref
  useEffect(() => {
    sectionRefs.current[index] = ref.current;
    // cleanup optional
    return () => {

    };
  }, [index, sectionRefs]);

  // framer scroll hooks for this section
  // useScroll bound to the element gives us progress inside the section
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"], // progress from fully below to fully above
  });

  // map progress to small parallax Y shifts
  const imgY = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.6, 1], [0.65, 0.4, 0.25]);

  // 3D tilt on image card
  const tiltX = useMotionValue(0);
  const tiltY = useMotionValue(0);

  const onPointerMove = (e: React.PointerEvent) => {
    if (prefersReducedMotion) return;
    const el = e.currentTarget as HTMLElement;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width; // 0 - 1
    const py = (e.clientY - rect.top) / rect.height; // 0 - 1
    const rotateY = (px - 0.5) * 8; // -4 -> 4 deg
    const rotateX = (0.5 - py) * 8; // -4 -> 4 deg
    tiltX.set(rotateX);
    tiltY.set(rotateY);
  };
  const onPointerLeave = () => {
    tiltX.set(0);
    tiltY.set(0);
  };

  return (
    <section
      id={industry.slug}
      ref={ref}
      data-slug={industry.slug}
      className="relative z-0 py-16 lg:py-24"
      aria-labelledby={`${industry.slug}-title`}
    >
      {/* Background parallax image (covers whole section, subtle) */}
      <motion.div
        style={{ translateY: imgY }}
        className="pointer-events-none absolute inset-0 opacity-10 -z-10"
        aria-hidden
      >
        <Image src={industry.image} alt={industry.name} fill className="object-cover" />
        <motion.div style={{ opacity: overlayOpacity }} className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />
      </motion.div>

      {/* Content grid */}
      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center px-4 sm:px-6">
        {/* Text column */}
        <div>
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="w-3 h-3 rounded-full bg-[#FF6B35] shadow-[0_0_12px_rgba(255,107,53,0.25)]" />
            <span className="text-sm font-medium text-gray-300">{industry.tagline}</span>
          </div>

          <h3 id={`${industry.slug}-title`} className="text-3xl md:text-4xl font-bold mb-4">
            {industry.name}
          </h3>

          <p className="text-gray-300 mb-6 leading-relaxed">{industry.description}</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            {industry.focus.map((f) => (
              <div key={f} className="flex items-start gap-3">
                <div className="mt-1 w-2 h-2 rounded-full bg-[#FF6B35]" />
                <div className="text-sm text-gray-300">{f}</div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-8 items-center">
            <div>
              <div className="text-3xl md:text-4xl font-extrabold">{industry.stats.placements}</div>
              <div className="text-sm text-gray-400">Placements</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-extrabold">{industry.stats.satisfaction}</div>
              <div className="text-sm text-gray-400">Client Satisfaction</div>
            </div>
          </div>
        </div>

        {/* Visual column */}
        <motion.div
          onPointerMove={onPointerMove}
          onPointerLeave={onPointerLeave}
          style={{ rotateX: tiltX, rotateY: tiltY }}
          className="relative rounded-3xl overflow-hidden border border-[#ffffff08] shadow-[0_10px_40px_rgba(0,0,0,0.8)] bg-gradient-to-br from-black/40 to-black/20"
        >
          <div className="absolute inset-0 -z-10">
            <Image src={industry.image} alt={industry.name} fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          </div>

          {/* Image card content */}
          <div className="relative p-6 md:p-8 lg:p-10">
            <div className="rounded-xl overflow-hidden border border-[#FF6B35]/10">
              <Image src={industry.image} alt={industry.name} width={1200} height={700} className="object-cover w-full h-56 md:h-64 lg:h-72" />
            </div>

            {/* micro-overlay CTA */}
            <div className="mt-4 flex items-center justify-between">
              <div>
                <div className="text-sm text-gray-300 font-medium">{industry.name} — Highlights</div>
                <div className="text-xs text-white mt-1">Case studies, hiring profiles & playbooks</div>
              </div>
              <Link
                href={`/contact`}
                className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-[#FF6B35] text-black font-semibold hover:scale-105 transition"
                aria-label={`Learn more about ${industry.name}`}
              >
                Explore
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="opacity-90">
                  <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

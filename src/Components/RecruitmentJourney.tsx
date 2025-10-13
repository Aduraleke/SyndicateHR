import React from 'react'

const ACCENT = "#FF6B35";


export default function RecruitmentJourney() {
  return (
    <div>
      <section
        className="relative py-20 px-6 lg:px-12 overflow-hidden bg-black"
        aria-labelledby="journey-heading"
      >
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute left-0 top-20 rounded-full filter blur-3xl opacity-25"
            style={{
              width: 500,
              height: 500,
              background: `radial-gradient(circle at 10% 10%, rgba(255,107,53,0.14), transparent 30%)`,
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto z-10">
          <div className="text-center mb-10">
            <h2 id="journey-heading" className="text-4xl font-bold" style={{ color: "white" }}>
              Your Recruitment Journey with Us
            </h2>
            <p className="mt-4 max-w-3xl mx-auto" style={{ color: "#cbe7df" }}>
              We partner with you through discovery, sourcing, assessment, coordination, and onboarding — ensuring placements that stick.
            </p>
          </div>

          <div className="relative">
            {/* center vertical line on large screens */}
            <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-white/6 h-full top-0" />

            {/* Steps list */}
            <div className="space-y-12">
              {[
                {
                  step: "Step 1",
                  title: "Discovery & Consultation",
                  desc:
                    "We begin with an in-depth consultation to understand your organization's culture, hiring goals, and role requirements.",
                },
                {
                  step: "Step 2",
                  title: "Strategic Talent Sourcing",
                  desc:
                    "Leveraging our network, we launch targeted searches across channels to surface both active and passive candidates.",
                },
                {
                  step: "Step 3",
                  title: "Rigorous Screening & Assessment",
                  desc:
                    "Technical assessments, cultural fit checks, and behavioral interviews ensure candidates are a strong match.",
                },
                {
                  step: "Step 4",
                  title: "Curated Candidate Presentation",
                  desc:
                    "We present shortlists with deep insights, salary guidance, and readiness markers to help you decide quickly.",
                },
                {
                  step: "Step 5",
                  title: "Interview Coordination & Support",
                  desc:
                    "We handle scheduling, brief candidates, and support the interview process to keep momentum high.",
                },
                {
                  step: "Step 6",
                  title: "Offer Negotiation & Onboarding",
                  desc:
                    "We facilitate offers and onboarding, and check in during the first 90 days to ensure long-term success.",
                },
              ].map((item, idx) => {
                const left = idx % 2 === 0;
                return (
                  <div key={item.step} className="relative lg:grid lg:grid-cols-2 lg:gap-8 items-center">
                    {/* text */}
                    <div className={left ? "lg:col-start-1 lg:text-right pr-6" : "lg:col-start-2 lg:text-left pl-6"}>
                      <div className="inline-flex items-center rounded-full px-4 py-2 mb-4" style={{ background: "rgba(255,255,255,0.03)" }}>
                        <span style={{ color: ACCENT, fontWeight: 700 }}>{item.step}</span>
                      </div>
                      <h3 className="text-2xl font-bold" style={{ color: "white" }}>{item.title}</h3>
                    </div>

                    {/* card */}
                    <div className={left ? "lg:col-start-2" : "lg:col-start-1"}>
                      <div
                        className="mt-4 lg:mt-0 rounded-2xl p-6 border"
                        style={{
                          background: "rgba(255,255,255,0.02)",
                          borderColor: "rgba(255,255,255,0.04)",
                        }}
                      >
                        <p style={{ color: "#d2f6ed", lineHeight: 1.6 }}>{item.desc}</p>
                      </div>
                    </div>

                    {/* timeline circle for lg */}
                    <div className="hidden lg:block absolute top-1/2 transform -translate-y-1/2" style={{ left: "50%", marginLeft: -40 }}>
                      <div
                        style={{
                          width: 64,
                          height: 64,
                          borderRadius: 9999,
                          background: `linear-gradient(135deg, ${ACCENT}, rgba(255,107,53,0.9))`,
                          border: "4px solid rgba(0,0,0,0.6)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          boxShadow: `0 8px 28px ${ACCENT}44`,
                        }}
                      >
                        <div style={{ width: 12, height: 12, borderRadius: 9999, background: "white" }} />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA */}
            <div className="mt-14 text-center">
              <div
                className="inline-block rounded-3xl p-10 border"
                style={{
                  background: "rgba(255,255,255,0.02)",
                  borderColor: "rgba(255,255,255,0.04)",
                }}
              >
                <h3 className="text-2xl font-bold mb-3" style={{ color: "white" }}>
                  Ready to Start Your Recruitment Journey?
                </h3>
                <p className="mb-6" style={{ color: "#cbe7df" }}>
                  Let&apos;s discuss how we can help you build your dream team with precision-targeted talent acquisition.
                </p>
                <button
                  className="rounded-full px-8 py-3 font-bold shadow transform hover:scale-105"
                  style={{
                    background: "white",
                    color: "#111827",
                    boxShadow: `0 12px 30px ${ACCENT}22`,
                  }}
                >
                  Schedule a Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}



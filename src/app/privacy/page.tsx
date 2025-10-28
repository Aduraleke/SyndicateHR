"use client";

import React from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

export default function PrivacyPolicyPage() {
  const sections = [
    {
      title: "1. Introduction",
      icon: "mdi:shield-check",
      content: `
        At HR Syndicate, your privacy is not just a policy, it’s a commitment. 
        This Privacy Policy explains how we handle your information when you use our platform, 
        apply for roles, or engage with our services. By accessing HR Syndicate, you agree to the practices 
        described here.
      `,
    },
    {
      title: "2. Information We Collect",
      icon: "mdi:database-outline",
      content: `
        We collect both personal and non-personal information, including:
        <ul class="list-disc pl-6 mt-3 space-y-1">
          <li><strong>Personal Information:</strong> Name, email address, phone number, professional title, resume details, LinkedIn profile links, and employment history.</li>
          <li><strong>Usage Data:</strong> Browser type, IP address, device identifiers, and how you interact with our website.</li>
          <li><strong>Cookies & Tracking:</strong> We use cookies and analytics tools to enhance your experience and personalize content.</li>
        </ul>
      `,
    },
    {
      title: "3. How We Use Your Information",
      icon: "mdi:file-document-edit-outline",
      content: `
        Your data is used to:
        <ul class="list-disc pl-6 mt-3 space-y-1">
          <li>Facilitate job matching and recruitment processes.</li>
          <li>Communicate with you about opportunities, updates, or policy changes.</li>
          <li>Improve the usability and security of our platform.</li>
          <li>Comply with applicable laws and enforce our terms of service.</li>
        </ul>
      `,
    },
    {
      title: "4. Data Protection & Security",
      icon: "mdi:lock-outline",
      content: `
        Your security is our priority. We apply strict technical and organizational measures such as:
        <ul class="list-disc pl-6 mt-3 space-y-1">
          <li>Encryption of sensitive data during transfer and storage.</li>
          <li>Access controls and secure authentication mechanisms.</li>
          <li>Routine security audits and system monitoring.</li>
        </ul>
        However, no online system is entirely immune to risk, so we encourage you to practice digital caution as well.
      `,
    },
    {
      title: "5. Data Retention",
      icon: "mdi:clock-time-four-outline",
      content: `
        We retain your data only as long as necessary to fulfill the purposes outlined in this policy or as required by law. 
        Once data is no longer needed, it is securely deleted or anonymized.
      `,
    },
    {
      title: "6. Your Rights & Choices",
      icon: "mdi:account-check-outline",
      content: `
        You have the right to:
        <ul class="list-disc pl-6 mt-3 space-y-1">
          <li>Access or request a copy of your personal data.</li>
          <li>Request correction, deletion, or restriction of your data.</li>
          <li>Withdraw consent for data processing.</li>
          <li>Opt out of marketing communications.</li>
        </ul>
        To exercise these rights, please reach out to our support team.
      `,
    },
    {
      title: "7. Third-Party Services & Sharing",
      icon: "mdi:share-variant-outline",
      content: `
        We may share limited data with trusted third parties such as:
        <ul class="list-disc pl-6 mt-3 space-y-1">
          <li>Employers, analytics providers, or technology partners.</li>
        </ul>
        These parties are vetted for compliance with data protection laws.  
        We never sell your data under any circumstances.
      `,
    },
    {
      title: "8. International Data Transfers",
      icon: "mdi:earth",
      content: `
        Your data may be processed or stored in countries outside your jurisdiction.  
        In such cases, we ensure adequate safeguards — such as Standard Contractual Clauses, to maintain privacy and compliance.
      `,
    },
    {
      title: "9. Updates to This Policy",
      icon: "mdi:update",
      content: `
        We may revise this Privacy Policy periodically to reflect operational, legal, or technological changes.  
        All updates will be posted here, and the date below will reflect the latest revision.
      `,
    },
    {
      title: "10. Contact Us",
      icon: "mdi:email-outline",
      content: `
        For any inquiries regarding this Privacy Policy, please contact us at:
        <div class="mt-3 space-y-1">
          <p><strong>Email:</strong> hello@hrsyndicate.com</p>
          <p><strong>Address:</strong> HR Syndicate, Innovation House, Lagos, Nigeria</p>
        </div>
      `,
    },
  ];

  return (
    <div className="min-h-screen  text-gray-200">
      {/* Hero Section */}
      <header className="relative flex flex-col items-center justify-center text-center mt-28 mb-16 px-6">
        {/* Background glow ring */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0.2, scale: 0.9 }}
            animate={{ opacity: [0.2, 0.4, 0.2], scale: [0.9, 1, 0.9] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="w-[350px] h-[350px] rounded-full blur-3xl bg-[#ff6b35]/20"
          />
        </div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold text-white relative z-10 tracking-wide"
        >
          Privacy Policy
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-gray-400 text-base md:text-lg mt-4 max-w-2xl relative z-10"
        >
          Learn how HR Syndicate collects, uses, and protects your personal information.
        </motion.p>
      </header>

      {/* Divider */}
      <div className="w-24 h-[2px] mx-auto mb-12 bg-gradient-to-r from-transparent via-[#ff6b35] to-transparent opacity-60" />

      {/* Content Section */}
      <main className="max-w-5xl mx-auto px-6 pb-20 space-y-10">
        {sections.map((section, i) => (
          <motion.section
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.05 }}
            viewport={{ once: true }}
            className="bg-[#111111]/80 p-8 md:p-10 rounded-2xl border border-gray-800 hover:border-[#ff6b35]/40 shadow-lg transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-4">
              <Icon icon={section.icon} width={30} height={30} className="text-[#ff6b35]" />
              <h2 className="text-2xl md:text-3xl font-semibold text-[#ff6b35]">
                {section.title}
              </h2>
            </div>
            <div
              className="text-base md:text-lg text-gray-300 leading-relaxed space-y-3"
              dangerouslySetInnerHTML={{ __html: section.content }}
            />
          </motion.section>
        ))}

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center text-gray-500 text-sm mt-20"
        >
          Last updated: <span className="text-gray-400">October 2025</span>
        </motion.p>
      </main>
    </div>
  );
}

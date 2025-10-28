"use client";

import React from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

export default function TermsAndConditionsPage() {
  const sections = [
    {
      title: "1. Introduction",
      icon: "mdi:book-open-page-variant-outline",
      content: `
        Welcome to <strong>HR Syndicate</strong>. These Terms and Conditions ("Terms") govern your access to and use of our website, 
        applications, and services. By using HR Syndicate, you confirm that you have read, understood, and agreed to these Terms.
      `,
    },
    {
      title: "2. Eligibility & Account Responsibilities",
      icon: "mdi:account-badge-outline",
      content: `
        To use our services, you must be at least 18 years old and capable of entering into a legally binding agreement. 
        You are responsible for maintaining the confidentiality of your account credentials and ensuring all provided 
        information is accurate and up to date.
      `,
    },
    {
      title: "3. Acceptable Use",
      icon: "mdi:handshake-outline",
      content: `
        You agree not to misuse HR Syndicate’s platform or engage in any activity that could disrupt or compromise our systems. 
        Examples of prohibited activities include:
        <ul class="list-disc pl-6 mt-3 space-y-1">
          <li>Uploading harmful or unlawful content.</li>
          <li>Attempting to hack, bypass security, or scrape data.</li>
          <li>Using the platform for fraudulent or deceptive purposes.</li>
        </ul>
      `,
    },
    {
      title: "4. Intellectual Property",
      icon: "mdi:lightbulb-outline",
      content: `
        All intellectual property rights related to HR Syndicate—including logos, trademarks, graphics, and platform code—are 
        the exclusive property of HR Syndicate or its licensors. Unauthorized use, reproduction, or redistribution is prohibited.
      `,
    },
    {
      title: "5. Service Availability",
      icon: "mdi:server-network-outline",
      content: `
        We strive to maintain continuous access to our platform but cannot guarantee uninterrupted or error-free service. 
        We reserve the right to modify, suspend, or discontinue any part of the service at any time, without prior notice.
      `,
    },
    {
      title: "6. Limitation of Liability",
      icon: "mdi:alert-circle-outline",
      content: `
        HR Syndicate shall not be held liable for any indirect, incidental, or consequential damages resulting from your use of 
        or inability to access our services. Our total liability shall not exceed the amount paid, if any, for using the platform.
      `,
    },
    {
      title: "7. Third-Party Links",
      icon: "mdi:link-variant",
      content: `
        Our platform may include links to third-party websites or services. HR Syndicate does not endorse or take responsibility 
        for the content, accuracy, or privacy practices of such third parties. Please review their terms independently.
      `,
    },
    {
      title: "8. Modifications to Terms",
      icon: "mdi:update",
      content: `
        We may revise these Terms periodically to reflect changes in our operations or legal obligations. Updates will be posted 
        on this page, with the “Last Updated” date revised accordingly. Continued use of our services signifies acceptance of changes.
      `,
    },
    {
      title: "9. Governing Law",
      icon: "mdi:gavel",
      content: `
        These Terms are governed by and construed in accordance with the laws of the Federal Republic of Nigeria. Any disputes 
        shall be resolved exclusively within the competent courts of Lagos, Nigeria.
      `,
    },
    {
      title: "10. Contact Us",
      icon: "mdi:email-outline",
      content: `
        For any inquiries or concerns regarding these Terms, you can reach out to us via:
        <div class="mt-3 space-y-1">
          <p><strong>Email:</strong> hello@hrsyndicate.com</p>
          <p><strong>Address:</strong> HR Syndicate, Innovation House, Lagos, Nigeria</p>
        </div>
      `,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#111111] via-[#0a0a0a] to-[#0a0a0a] text-gray-200 pt-28">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="text-4xl md:text-6xl font-bold text-white tracking-wide"
        >
          Terms & Conditions
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-gray-400 text-base md:text-lg mt-4 max-w-2xl mx-auto px-4"
        >
          Please read these Terms carefully to understand your rights, responsibilities, and our legal obligations.
        </motion.p>
      </div>

      {/* Content Section */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.3 }}
        className="max-w-5xl mx-auto px-6 pb-24 space-y-8"
      >
        {sections.map((section, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="bg-[#111111] p-8 rounded-2xl shadow-md border border-gray-800 hover:border-[#ff6b35]/50 transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-4">
              <Icon icon={section.icon} width={28} height={28} className="text-[#ff6b35]" />
              <h2 className="text-2xl md:text-3xl font-semibold text-[#ff6b35]">
                {section.title}
              </h2>
            </div>
            <div
              className="text-base md:text-lg text-gray-300 leading-relaxed space-y-3"
              dangerouslySetInnerHTML={{ __html: section.content }}
            />
          </motion.div>
        ))}

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-center text-gray-500 text-sm mt-20"
        >
          Last updated: <span className="text-gray-400">October 2025</span>
        </motion.p>
      </motion.div>
    </div>
  );
}

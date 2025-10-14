import AboutSection from "@/Components/Aboutsection";
import Footer from "@/Components/Footer";
import HeroSection from "@/Components/HeroSection";
import IndustriesShowcase from "@/Components/IndustryShowcase";
import RecruitmentJourney from "@/Components/RecruitmentJourney";

import React from "react";

export default function page() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <IndustriesShowcase />
      <RecruitmentJourney />
      <Footer />
    </div>
  );
}

"use client";

import Footer from "@/components/footer/footer";
import FaqSection from "@/components/sections/faq-section/faq-section";
import FooterSection from "@/components/sections/footer-section/footer-section";
import Header from "@/components/sections/hero-section/header";
import HeroSection from "@/components/sections/hero-section/hero-section";
import MatchingSection from "@/components/sections/matching-section/matching-section";
import SecuritySection from "@/components/sections/security-section/security-section";
import SubHeroSection from "@/components/sections/sub-hero-section/sub-hero-section";
import ValuePickSection from "@/components/sections/value-pick-section/value-pick-section";
import ValueShareSection from "@/components/sections/value-share-section/value-share-section";
import ValueTalkSection from "@/components/sections/value-talk-section/value-talk-section";

export default function Page() {
  return (
    <div className="relative">
      <Header />
      <HeroSection />
      <SubHeroSection />
      <MatchingSection />
      <ValueTalkSection />
      <ValuePickSection />
      <ValueShareSection />
      <SecuritySection />
      <FaqSection />
      <FooterSection />
      <Footer />
    </div>
  );
}

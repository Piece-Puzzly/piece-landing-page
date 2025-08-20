"use client";

import { Fab } from "@/components";
import Footer from "@/components/footer/footer";
import FaqSection from "@/components/sections/faq-section/faq-section";
import FooterSection from "@/components/sections/footer-section/footer-section";
import Header from "@/components/sections/hero-section/header";
import HeroSection from "@/components/sections/hero-section/hero-section";
import MatchingSection from "@/components/sections/matching-section/matching-section";
import SubHeroSection from "@/components/sections/sub-hero-section/sub-hero-section";
import ValuePickSection from "@/components/sections/value-pick-section/value-pick-section";
import ValueShareSection from "@/components/sections/value-share-section/value-share-section";
import ValueTalkSection from "@/components/sections/value-talk-section/value-talk-section";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Page() {
  const [authorized, setAuthorized] = useState(false);
  const [password, setPassword] = useState("");

  if (!authorized) {
    return (
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <input
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            if (password === "0414") setAuthorized(true);
            else alert("비밀번호가 틀렸습니다.");
          }
        }}
          autoFocus
          type="password"
          value={password}
          className="text-center border rounded-lg"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="비밀번호"
          style={{ padding: "8px", fontSize: "16px", marginBottom: "12px" }}
        />
        <Button
          onClick={() => {
            if (password === "0414") setAuthorized(true);
            else alert("비밀번호가 틀렸습니다.");
          }}
          style={{ padding: "8px 16px", fontSize: "16px" }}
        >
          확인
        </Button>
      </div>
    );
  }
  return (
    <div className="relative">
      <Header />
      <HeroSection />
      <SubHeroSection />
      <MatchingSection />
      <ValueTalkSection />
      <ValuePickSection />
      <ValueShareSection />
      <FaqSection />
      <FooterSection />
      <Footer />
      <Fab />
    </div>
  );
}

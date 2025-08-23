"use client";

import Section from "@/components/section";
import SectionDescription from "@/components/section-description";
import SectionHeader from "@/components/section-header";
import SectionTitle from "@/components/section-title";
import { useMediaQuery } from "@/hooks/use-media-query";
import { useIsMobile } from "@/hooks/use-mobile";
import ScrollContainer from "./scroll-container";

const textInfo = {
  pc: [
    "연애 스타일, 관계의 중요 요소 등 자신의 생각을 고르면,",
    "상대방과 나의 가치관이 얼마나 일치하는지 한눈에 확인할 수 있어요.",
  ],
  mobile: [
    "연애 스타일, 관계의 중요 요소 등 자신의",
    "생각을 고르면, 상대방과 나의 가치관이 얼마나",
    "일치하는지 한눈에 확인할 수 있어요.",
  ],
};

export default function ValuePickSection() {
  // 1. Framer Motion hooks and state for the animation

  const isTablet = useMediaQuery(1024);
  const isMobile = useIsMobile();
  return (
    <Section className="pb-0 lg:pb-0">
      <SectionHeader>
        <SectionTitle>
          <p className="flex items-center gap-4">
            <span className="text-primary">가치관 PICK,</span>
            <span className="font-medium py-2 lg:py-3 px-3 lg:px-4 text-xs lg:text-base leading-4 text-[#FF7490] bg-[#FFE3E9] rounded-full align-middle">
              나와 같은
            </span>
          </p>
          <p>나와 닮은 마음을 쉽게 찾아봐요!</p>
        </SectionTitle>
        <SectionDescription>
          {textInfo[isTablet ? "mobile" : "pc"].map((text, index) => (
            <p key={index}>{text}</p>
          ))}
        </SectionDescription>
      </SectionHeader>
      <ScrollContainer />
    </Section>
  );
}

"use client";

import Section from "@/components/section";
import SectionDescription from "@/components/section-description";
import SectionHeader from "@/components/section-header";
import SectionTitle from "@/components/section-title";
import { useIsMobile } from "@/hooks/use-mobile";
import ScrollContainer from "./scroll-container";
import ScrollContainerScrollPinnning from "./scroll-container-scroll-pinning";

export default function MatchingSection() {
  const isMobile = useIsMobile();
  return (
    <Section className="space-y-12.5 md:space-y-0 lg:space-y-0">
      <SectionHeader>
        <SectionTitle>
          <p>나의 이야기를 분석해,</p>
          <p>
            AI가 <span className="text-primary">마음이 닮은 인연</span>을
            이어줘요
          </p>
        </SectionTitle>
        <SectionDescription>
          <p>매일 밤 10시, 새로운 인연이 도착해요.</p>
          <p>내 운명의 상대를 찾을지도 몰라요.</p>
        </SectionDescription>
      </SectionHeader>
      {isMobile ? <ScrollContainerScrollPinnning /> : <ScrollContainer />}
    </Section>
  );
}

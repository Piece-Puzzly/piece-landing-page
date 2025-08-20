"use client";

import { useIsMobile } from "@/hooks/use-mobile";
import { ReactNode } from "react";

const textInfo: Record<string, ReactNode[]>  = {
  pc: [
    <p key={0}>
      우리 모두 다 다른 모양과 크기를 가졌지만,{" "}
      <span className="text-primary">퍼즐</span>처럼
    </p>,
    <p key={1}>빈 곳을 채우며 맞물리는 인연이 있습니다.</p>,
    <p key={2}>
      피스는 당신의{" "}
      <span className="text-primary">
        가치관과 마음이 서로 연결되는 특별한 순간
      </span>
      을 만들어드립니다.
    </p>,
  ],
  mobile: [
    <p key={0}>우리 모두 다 다른 모양과 크기를 가졌지만,</p>,
    <p key={1}>
      <span className="text-primary">퍼즐</span>처럼 빈 곳을 채우며 맞물리는
    </p>,
    <p key={2}>인연이 있습니다.</p>,
    <p key={3}>
      피스는 당신의 <span className="text-primary">가치관과 마음이 서로 </span>
    </p>,
    <p key={4}>
      <span className="text-primary">연결되는 특별한 순간</span>을
      만들어드립니다.
    </p>,
  ],
};

export default function SubHeroSection() {
  const isMobile = useIsMobile();
  return (
    <div
      className="py-20 lg:py-45 flex items-center justify-center bg-white px-10"
      id="sub-hero-section"
    >
      <div className="text-[1.25rem] leading-6 lg:text-[2rem] lg:leading-11 font-medium text-center">
        {isMobile ? textInfo.mobile : textInfo.pc}
      </div>
    </div>
  );
}

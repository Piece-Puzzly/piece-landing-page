"use client";

import AppDownloadButton from "@/components/app-download-button";
import { useIsMobile } from "@/hooks/use-mobile";

const textInfo = {
  pc: [
    <p key={0}>진짜 나와 잘 맞는 사람을 만나고 싶다면?</p>,
    <p key={1}>
      <span className="text-primary">Piece</span>에서 내 조각을 찾아보세요.
    </p>,
  ],
  mobile: [
    <p key={0}>진짜 나와 잘 맞는 사람을</p>,
    <p key={1}>만나고 싶다면?</p>,
    <p key={2}>
      <span className="text-primary">Piece</span>에서 내 조각을
    </p>,
    <p key={3}>찾아보세요.</p>,
  ],
};

export default function FooterSection() {
  const isMobile = useIsMobile();
  return (
    <div className="bg-[#F6EFFF] py-45 gap-15 flex items-center flex-col justify-center">
      <div className="font-semibold text-2xl lg:text-4xl text-[#484B4D] leading-8 lg:leading-12 text-center break-keep text-balance">
        {textInfo[isMobile ? "mobile" : "pc"]}
      </div>
      <AppDownloadButton />
    </div>
  );
}

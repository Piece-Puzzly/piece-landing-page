"use client";

import ArrowIcon from "@/assets/arrow.svg";
import AppDownloadButton from "@/components/app-download-button";
import { Button } from "@/components/ui/button";
import Image from "next/image";
export default function HeroSection() {
  return (
    <div className="h-dvh bg-piece-gradient flex justify-center items-center relative">
      <div className="absolute bottom-0 z-0">
        <Image
          src={"/bg-logo.svg"}
          width={1071}
          height={400}
          alt=""
          className="w-[66.938rem] h-auto"
        />
      </div>
      <div className="absolute bottom-10 z-10">
        <Button
          variant="ghost"
          className="size-16 -m-3 hover:bg-transparent text-primary hover:text-primary hover:opacity-50 transition-colors rounded-full"
          size="icon"
          onClick={() => {
            document.getElementById("sub-hero-section")?.scrollIntoView({
              behavior: "smooth", // 부드럽게
              block: "start", // 요소의 시작 지점 맞춤
            });
          }}
        >
          <ArrowIcon className="size-10" />
        </Button>
      </div>

      <div className="text-center text-white font-semibold relative z-10">
        <div className="text-[1.75rem] leading-10 lg:text-5xl lg:leading-16 mb-9">
          <p>가치관 기반의 성숙한 만남을</p>
          <p>지향하는 이반 소개팅 서비스</p>
        </div>
        <div className="text-base leading-6 lg:text-2xl lg:leading-8 font-medium mb-20">
          가치관 기반 게이 소개팅: 피스(Piece)
        </div>
        <AppDownloadButton />
      </div>
    </div>
  );
}

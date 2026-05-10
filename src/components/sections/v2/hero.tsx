"use client";

import Arrow from "@/assets/arrow.svg";
import AppDownloadButton from "@/components/app-download-button";

export default function Hero() {
  return (
    <section
      aria-label="피스 소개"
      className="relative isolate overflow-hidden text-white"
      style={{
        background:
          "linear-gradient(180deg, #1A0033 0%, #4A1B8C 30%, #C9B0F5 80%)",
      }}
    >
      <div className="relative mx-auto flex min-h-[600px] w-full max-w-[1920px] flex-col items-center justify-center px-6 pt-32 pb-24 md:min-h-[600px] md:pt-36 lg:min-h-[920px] lg:pt-40 lg:pb-32">
        <div className="relative z-10 flex flex-col items-center text-center">
          <h1 className="text-[28px] leading-[40px] font-semibold tracking-tight sm:text-[36px] sm:leading-[52px] lg:text-[48px] lg:leading-[64px]">
            마음이 닮은 이쪽 인연,
            <br />
            AI가 매일 밤 10시에 데려와요
          </h1>

          <p className="mt-4 text-base leading-6 font-medium text-white/85 sm:text-lg sm:leading-7 lg:mt-6 lg:text-xl lg:leading-8">
            가치관 기반 게이 소개팅: 피스(Piece)
          </p>

          <div className="mt-8 lg:mt-10">
            <AppDownloadButton />
          </div>
        </div>

        <img
          src="/hero-typeface.svg"
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-16 z-0 mx-auto w-[112%] max-w-none select-none sm:w-[90%] lg:bottom-28 lg:w-[60%]"
        />

        <a
          href="#stats"
          aria-label="다음 섹션으로 스크롤"
          className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-primary transition-opacity hover:opacity-70 lg:bottom-10"
        >
          <Arrow className="size-6 lg:size-8" />
        </a>
      </div>
    </section>
  );
}

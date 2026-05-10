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
          "linear-gradient(180deg, #00001A 0.91%, #281F4E 17.85%, #7257A5 37.78%, #D0ABFD 61.86%, #E6D3FE 80.13%, #FFFFFF 100%)",
      }}
    >
      <div className="relative mx-auto flex h-[600px] w-full max-w-[1920px] flex-col items-center justify-center px-6 pb-0 lg:h-[920px]">
        <div className="relative z-10 flex flex-col items-center text-center lg:w-[710px]">
          <h1 className="text-[28px] leading-[40px] font-semibold tracking-tight lg:text-[40px] lg:leading-[56px]">
            마음이 닮은 이쪽 인연,
            <br />
            AI가 매일 밤 10시에 데려와요
          </h1>

          <p className="mt-7 text-center text-base leading-6 font-medium text-white lg:mt-9 lg:text-xl lg:leading-8">
            가치관 기반 게이 소개팅: 피스(Piece)
          </p>

          <div className="mt-7 lg:mt-20">
            <AppDownloadButton />
          </div>
        </div>

        <img
          src="/hero-typeface.svg"
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 z-0 mx-auto w-[420px] max-w-none select-none lg:w-[1080px]"
        />

        <a
          href="#stats"
          aria-label="다음 섹션으로 스크롤"
          className="absolute bottom-7 left-1/2 z-10 -translate-x-1/2 text-primary transition-opacity hover:opacity-70 lg:bottom-9"
        >
          <Arrow className="size-10" />
        </a>
      </div>
    </section>
  );
}

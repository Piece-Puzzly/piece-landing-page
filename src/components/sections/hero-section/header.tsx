"use client";

import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import LogoButton from "./logo-button";
import Portals from "./portals";

export default function Header() {
  const [show, setShow] = useState(true); // 헤더 표시 여부
  const [lastScroll, setLastScroll] = useState(0);
  const [top, setTop] = useState(true); // 배경 투명 여부

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      // 헤더 숨김/보임
      if (currentScroll > lastScroll && currentScroll > 100) {
        setShow(false);
      } else {
        setShow(true);
      }
      setLastScroll(currentScroll);

      // 배경 투명/블러 처리
      if (currentScroll < 160) {
        // 10rem = 160px
        setTop(true);
      } else {
        setTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  return (
    <div
      className={cn(
        `w-full flex fixed top-0 z-20 transition-transform duration-300`,
        show ? "translate-y-0" : "-translate-y-full",
        top
          ? "text-[#D0ABFD] [&_a]:hover:text-[#F6EFFF]"
          : " text-primary [&_a]:hover:text-primary/50",
        "bg-transparent backdrop-blur-sm"
      )}
    >
      <div className="py-6 px-6 md:px-10 lg:px-15 flex justify-between w-full mx-auto max-w-[1920px]">
        <LogoButton />
        <Portals />
      </div>
    </div>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";

export default function NightTen() {
  const phonesRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia("(max-width: 767px)");
    const sync = () => setIsMobile(mql.matches);
    sync();
    mql.addEventListener("change", sync);
    return () => mql.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    const el = phonesRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
            break;
          }
        }
      },
      { threshold: 0.2 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isMobile) {
      setScrollProgress(0);
      return;
    }
    const el = phonesRef.current;
    if (!el) return;

    let ticking = false;
    const update = () => {
      const rect = el.getBoundingClientRect();
      const wh = window.innerHeight;
      const progress = (wh - rect.top) / (wh + rect.height);
      setScrollProgress(Math.max(0, Math.min(1, progress)));
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(update);
        ticking = true;
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isMobile]);

  const mobileShiftVw = isMobile ? -20 * scrollProgress : 0;

  return (
    <section
      id="night-ten"
      aria-labelledby="night-ten-heading"
      className="relative overflow-hidden bg-[#f4f6fa]"
    >
      <div className="flex flex-col items-start gap-[50px] px-6 py-16 md:items-end md:px-10 xl:items-end xl:gap-0 xl:px-12 xl:py-[120px]">
        <h2
          id="night-ten-heading"
          className="self-stretch text-[24px] leading-[32px] font-semibold xl:text-[36px] xl:leading-[48px]"
        >
          <span className="text-primary">매일 밤 10시,</span>
          <br />
          <span className="text-[#1b1a2a]">새로운 인연이 도착해요</span>
        </h2>

        <div
          ref={phonesRef}
          className="relative grid grid-cols-1 grid-rows-1 place-items-start will-change-transform"
          style={{ transform: `translateX(${mobileShiftVw}vw)` }}
        >
          <img
            src="/night-phone-2.png"
            alt="피스 매칭 리스트 화면"
            className={`col-start-1 row-start-1 mt-0 ml-[280px] w-[240px] drop-shadow-xl transition-all duration-700 ease-out xl:ml-[400px] xl:w-[340px] ${
              visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
            style={{ transitionDelay: visible ? "280ms" : "0ms" }}
          />
          <img
            src="/night-phone-1.png"
            alt="매일 밤 10시 새로운 매칭이 도착했다는 알림 화면"
            className={`relative z-10 col-start-1 row-start-1 mt-[160px] ml-0 w-[240px] drop-shadow-2xl transition-all duration-700 ease-out xl:w-[340px] ${
              visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          />
        </div>
      </div>
    </section>
  );
}

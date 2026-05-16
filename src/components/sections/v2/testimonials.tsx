"use client";

import { useEffect, useRef, useState } from "react";

const testimonials = [
  {
    body: "다른 이쪽 앱들은 가벼운 사람들이 많았는데\n피스는 진지하게 임하시는 분들이 많아서 좋아요",
    caption: "20대 / 전문직",
  },
  {
    body: "연애가 급하지는 않으니,\n가치관과 성격이 잘 맞는 사람을 만나고 싶었어요",
    caption: "30대 / 사업가",
  },
  {
    body: "자판기에서 사람 고르는 느낌이 싫었는데\n피스는 하루 한 명이라 신중해져요",
    caption: "20대 / 대학생",
  },
];

export default function Testimonials() {
  const listRef = useRef<HTMLUListElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = listRef.current;
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

  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="relative overflow-hidden bg-[#F6EFFF]"
    >
      <div className="mx-auto w-full max-w-[1920px] px-6 py-20 sm:py-24 lg:grid lg:grid-cols-12 lg:gap-8 lg:px-15 lg:py-32">
        <h2
          id="testimonials-heading"
          className="text-[24px] leading-[32px] font-semibold tracking-tight text-[#1b1a2a] sm:text-[28px] sm:leading-[40px] lg:col-span-4 lg:text-[36px] lg:leading-[52px]"
        >
          피스 유저들은,
          <br />
          이렇게 말했어요
        </h2>

        <ul
          ref={listRef}
          className="mt-12 flex flex-col gap-10 md:items-end md:gap-[52px] lg:col-span-8 lg:mt-0 lg:w-full lg:max-w-[774px] lg:justify-self-end lg:items-end lg:gap-[52px]"
        >
          {testimonials.map((t, idx) => (
            <li
              key={t.caption}
              className={`w-full transition-all duration-700 ease-out md:w-[480px] lg:w-[660px] lg:max-w-full ${
                idx !== 1 ? "lg:self-start" : ""
              } ${
                visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: visible ? `${idx * 200}ms` : "0ms" }}
            >
              <figure className="relative flex flex-col items-end justify-center gap-1 rounded-[20px] bg-white pt-5 pr-5 pb-3 pl-5 shadow-[0_4px_20px_rgba(111,0,251,0.06)] sm:px-8 sm:py-7 lg:pt-8 lg:pr-10 lg:pb-6 lg:pl-10">
                <blockquote className="self-stretch whitespace-pre-line text-[18px] leading-[22px] font-medium text-primary sm:leading-[28px] lg:text-[28px] lg:leading-[40px]">
                  {t.body}
                </blockquote>
                <figcaption className="text-center text-base leading-6 font-semibold text-[#6c7073] lg:text-[20px] lg:leading-[32px]">
                  {t.caption}
                </figcaption>

                <svg
                  aria-hidden="true"
                  width="40"
                  height="28"
                  viewBox="0 0 40 28"
                  fill="none"
                  className="absolute -bottom-[28px] right-10"
                >
                  <path
                    d="M40 0H0L33.5012 26.801C36.1203 28.8962 40 27.0315 40 23.6775V0Z"
                    fill="white"
                  />
                </svg>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

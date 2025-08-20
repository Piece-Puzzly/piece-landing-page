"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

import Section from "@/components/section";
import SectionDescription from "@/components/section-description";
import SectionHeader from "@/components/section-header";
import SectionTitle from "@/components/section-title";
import ValuePickCards from "./value-pick-cards";
import ValuePickKeywords from "./value-pick-keywords";

// const textInfo

export default function ValuePickSection() {
  // 1. Framer Motion hooks and state for the animation
  const targetRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [horizontalOffset, setHorizontalOffset] = useState(0);

  // 2. Effect to measure content width and handle resizing
  useEffect(() => {
    const contentEl = contentRef.current;
    const targetEl = targetRef.current;
    if (!contentEl || !targetEl) return;

    const resizeObserver = new ResizeObserver(() => {
      const offset = contentEl.scrollWidth - targetEl.clientWidth;
      setHorizontalOffset(offset);
    });

    resizeObserver.observe(contentEl);
    resizeObserver.observe(targetEl);

    return () => resizeObserver.disconnect();
  }, []);

  // 3. Hook to track scroll progress
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "start 10%"],
  });

  // 4. Hook to map vertical scroll to horizontal movement
  const x = useTransform(scrollYProgress, [0, 1], [0, -horizontalOffset]);
  return (
    <Section>
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
          <p>연애 스타일, 관계의 중요 요소 등 자신의 생각을 고르면,</p>
          <p>
            상대방과 나의 가치관이 얼마나 일치하는지 한눈에 확인할 수 있어요.
          </p>
        </SectionDescription>
      </SectionHeader>

      {/* --- ScrollArea is replaced with the structure below --- */}
      <div ref={targetRef} className="relative">
        <div className="flex items-center overflow-hidden">
          <motion.div
            ref={contentRef}
            style={{ x }}
            // A flex container is used to ensure the content inside aligns properly
            className="flex items-center shrink-0 min-w-full"
          >
            {/* This is the original content from inside the ScrollArea */}
            <div className="px-6 md:px-10 lg:px-12 relative h-90 lg:h-[36.9375rem] w-fit shrink-0 mx-auto">
              <ValuePickKeywords />
              <ValuePickCards />
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}

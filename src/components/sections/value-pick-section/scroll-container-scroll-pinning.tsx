"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

import ValuePickCards from "./value-pick-cards";
import ValuePickKeywords from "./value-pick-keywords";

export default function ScrollContainerScrollPinnning() {
  // 1. Refs: targetRef는 이제 전체 스크롤 영역을, contentRef는 가로로 움직일 콘텐츠를 가리킵니다.
  const targetRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [horizontalOffset, setHorizontalOffset] = useState(0);

  // 2. Effect: 가로로 스크롤될 콘텐츠의 전체 너비를 계산하는 로직은 동일하게 유지합니다.
  useEffect(() => {
    const contentEl = contentRef.current;
    // targetEl 대신 viewport 너비를 사용하는 것이 더 정확할 수 있으나, 기존 로직을 유지합니다.
    const containerEl = targetRef.current;
    if (!contentEl || !containerEl) return;

    const resizeObserver = new ResizeObserver(() => {
      // 스크롤될 총 가로 거리 = 콘텐츠 전체 너비 - 보이는 영역 너비
      const offset = contentEl.scrollWidth - containerEl.clientWidth;
      setHorizontalOffset(offset);
    });

    resizeObserver.observe(contentEl);
    resizeObserver.observe(containerEl);

    return () => resizeObserver.disconnect();
  }, []);

  // 3. useScroll: targetRef(스크롤 영역 전체)의 스크롤 진행도를 추적합니다.
  // offset: 'start start' -> target의 시작점이 화면의 시작점에 닿을 때 애니메이션 시작
  //         'end end'   -> target의 끝점이 화면의 끝점에 닿을 때 애니메이션 종료
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  // 4. useTransform: 세로 스크롤 진행도(0 to 1)를 가로 이동 값(0 to -offset)으로 변환합니다.
  const x = useTransform(scrollYProgress, [0, 1], [0, -horizontalOffset]);

  return (
    // 📌 STEP 1: 애니메이션 지속 시간을 결정하는 외부 컨테이너입니다.
    // 높이(h-[300vh])가 길수록 피닝된 상태로 더 오래 스크롤하게 됩니다.
    <section ref={targetRef} className="relative h-[300vh]">
      {/* 📌 STEP 2: 화면에 고정될 sticky 컨테이너입니다. */}
      {/* 이 컨테이너가 화면 상단(top-0)에 고정되어 스크롤을 '붙잡아' 줍니다. */}
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        {/* 📌 STEP 3: 실제로 가로로 움직일 콘텐츠입니다. */}
        <motion.div
          ref={contentRef}
          style={{ x }}
          className="flex items-center shrink-0 min-w-full"
        >
          {/* 기존 콘텐츠 구조는 그대로 유지합니다. */}
          <div className="px-6 md:px-10 lg:px-12 relative h-[24.188rem] lg:h-[34.563rem] w-fit shrink-0 mx-auto">
            <ValuePickKeywords />
            <ValuePickCards />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

"use client";
import { cn } from "@/lib/utils";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const imgInfo = [
  {
    id: 1,
    src: "/matching-1.png",
    className: "pt-40",
  },
  {
    id: 2,
    src: "/matching-2.png",
    className: "pt-0",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
} as const;

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
} as const;

export default function ScrollContainerScrollPinnning() {
  const targetRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [horizontalOffset, setHorizontalOffset] = useState(0);

  // 가로 스크롤될 콘텐츠의 총 길이를 계산하는 로직은 동일하게 유지됩니다.
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

  // 📌 useScroll: 이제 전체 스크롤 영역(`targetRef`)을 기준으로 진행도를 추적합니다.
  const { scrollYProgress } = useScroll({
    target: targetRef,
    // offset: 'start start' -> 섹션의 상단이 뷰포트 상단에 닿을 때 애니메이션 시작 (핀 시작)
    //         'end end'   -> 섹션의 하단이 뷰포트 하단에 닿을 때 애니메이션 종료 (핀 해제)
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 1], [0, -horizontalOffset]);

  return (
    // 📌 STEP 1: 스크롤 피닝의 지속 시간을 결정하는 외부 컨테이너입니다.
    // 높이가 길수록 사용자가 더 오래 스크롤해야 애니메이션이 완료됩니다.
    <section ref={targetRef} className="relative h-[200vh]">
      {/* 📌 STEP 2: 화면에 고정될 컨테이너입니다. `sticky top-0` 속성이 핵심입니다. */}
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        {/* 📌 STEP 3: 실제로 가로로 움직일 콘텐츠입니다. */}
        <motion.div
          ref={contentRef}
          style={{ x }}
          className="flex items-center shrink-0  min-w-full"
        >
          <motion.div
            className="w-fit px-6 sm:px-10 md:px-12 lg:gap-15 gap-10 ml-auto flex"
            variants={containerVariants}
            initial="hidden"
            // `whileInView`는 그대로 유지하여 이미지가 처음 나타날 때 애니메이션을 재생합니다.
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            {imgInfo.map((e) => (
              <motion.div
                key={e.id}
                className="h-full relative flex-shrink-0 flex items-start"
                variants={itemVariants}
              >
                <Image
                  src={e.src}
                  alt={`Matching Image ${e.id}`}
                  height={704}
                  width={340}
                  className={cn(
                    "w-60 md:w-85 h-auto pointer-events-none",
                    e.className
                  )}
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

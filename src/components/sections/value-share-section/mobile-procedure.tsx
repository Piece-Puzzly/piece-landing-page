"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

// 이 컴포넌트들은 사용하시는 경로에 맞게 수정해주세요.
import { Indicator } from "./indicator";
import { ProcedureInfo } from "./procedure";

export function MobileProcedure({
  procedureInfo,
}: {
  procedureInfo: ProcedureInfo[];
}) {
  const targetRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [horizontalOffset, setHorizontalOffset] = useState(0);

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

  const { scrollYProgress } = useScroll({
    target: targetRef,
    // --- ⬇️ 이 부분이 수정되었습니다 ⬇️ ---
    // 애니메이션의 시작과 끝 지점을 명확하게 설정
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 1], [0, -horizontalOffset]);

  return (
    <div
      ref={targetRef}
      className="relative"
      // --- ⬇️ 이 부분이 다시 추가되었습니다 (필수!) ⬇️ ---
      // 컨테이너의 높이를 동적으로 설정
      style={{ height: `calc(100vh + ${horizontalOffset}px)` }}
    >
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div
          ref={contentRef}
          style={{ x }}
          className="flex gap-10 px-10"
        >
          {procedureInfo.map((e, i) => (
            <div
              key={e.phoneSrc}
              className="flex flex-col items-center gap-12.5"
            >
              <Indicator {...e} />
              <Image
                width={340}
                height={704}
                src={e.phoneSrc}
                alt={`아이폰 이미지 ${i}`}
                className="shrink-0 w-60 min-w-60 lg:w-[21.25rem] h-auto pointer-events-none"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

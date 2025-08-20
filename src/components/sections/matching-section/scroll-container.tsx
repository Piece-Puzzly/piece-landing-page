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

export default function ScrollContainer() {
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
    // 컴포넌트가 화면에 보이기 시작할 때부터 사라질 때까지 애니메이션을 진행
    offset: ["end end", "start start"],
  });

  const x = useTransform(scrollYProgress, [0, 1], [0, -horizontalOffset]);
  return (
    <div
      ref={targetRef}
      className="relative flex overflow-hidden lg:gap-15 gap-10 ml-auto w-fit"
    >
      <motion.div
        ref={contentRef}
        style={{ x }}
        className="flex items-center shrink-0 "
      >
        <div className="w-fit px-6 sm:px-10 md:px-12  lg:gap-15 gap-10 ml-auto flex">
          {imgInfo.map((e, i) => (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: i * 0.2,
                ease: "easeOut",
              }}
              viewport={{ once: true, amount: 0.5 }} // 👈 여기서 50% 이상 보일 때 실행
              key={e.id}
              className="h-full relative flex-shrink-0 flex items-start "
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
        </div>
      </motion.div>
    </div>
  );
}

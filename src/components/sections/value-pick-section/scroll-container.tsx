"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

import ValuePickCards from "./value-pick-cards";
import ValuePickKeywords from "./value-pick-keywords";

export default function ScrollContainer() {
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
    offset: ["80% end", "start start"],
  });

  // 4. Hook to map vertical scroll to horizontal movement
  const x = useTransform(scrollYProgress, [0, 1], [0, -horizontalOffset]);
  return (
    <div ref={targetRef} className="relative">
      <div className="flex items-center overflow-hidden">
        <motion.div
          ref={contentRef}
          style={{ x }}
          // A flex container is used to ensure the content inside aligns properly
          className="flex items-center shrink-0 min-w-full"
        >
          {/* This is the original content from inside the ScrollArea */}
          <div className="px-6 md:px-10 lg:px-12 relative h-[24.188rem] lg:h-[34.563rem] w-fit shrink-0 mx-auto">
            <ValuePickKeywords />
            <ValuePickCards />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

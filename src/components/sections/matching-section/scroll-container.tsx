"use client";
import { cn } from "@/lib/utils";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const imgInfo = [
  {
    id: 1,
    src: "/matching-1.png",
    className: "pt-0 md:pt-40",
  },
  {
    id: 2,
    src: "/matching-2.png",
    className: "pt-0",
  },
];

// Add 'as const' for strict type inference
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
} as const;

// Add 'as const' here as well to fix the TypeScript error
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
    offset: ["90% end", "start 10%"],
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
        <motion.div
          className="w-fit px-6 sm:px-10 md:px-12 lg:gap-15 gap-10 ml-auto flex"
          variants={containerVariants}
          initial="hidden"
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
  );
}

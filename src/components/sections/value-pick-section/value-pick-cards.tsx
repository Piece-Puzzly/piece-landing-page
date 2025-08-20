"use client";

import { cn } from "@/lib/utils";
import { easeOut, motion } from "framer-motion";
import Image from "next/image";

export default function ValuePickCards() {
  const valuePickData: { src: string; alt: string; className: string }[] = [
    {
      src: "/value-pick-1.png",
      alt: "가치관 PICK 1",
      className: "pt-10 lg:pt-15",
    },
    {
      src: "/value-pick-2.png",
      alt: "가치관 PICK 2",
      className: "pt-25 lg:pt-40",
    },
    { src: "/value-pick-3.png", alt: "가치관 PICK 3", className: "pt-0" },
  ];

  const containerVariants = {
    hidden: {},
    show: {},
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    show: (order: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: order * 0.2, // customOrder 기반으로 지연
        duration: 0.6,
        ease: easeOut,
      },
    }),
  };

  return (
    <motion.div
      className="z-10 flex gap-10 lg:gap-15 w-fit relative"
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      {valuePickData.map(({ src, alt, className }, i) => {
        const customOrder = [1, 0, 2][i]; // 순서 제어: 2 → 1 → 3
        return (
          <motion.div
            key={src}
            variants={itemVariants}
            custom={customOrder}
            className={cn("shrink-0", className)}
          >
            <Image
              src={src}
              width={400}
              height={254.16}
              className="w-80 lg:w-102 h-auto pointer-events-none"
              alt={alt}
            />
          </motion.div>
        );
      })}
    </motion.div>
  );
}

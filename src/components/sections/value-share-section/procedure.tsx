"use client";

import { cn } from "@/lib/utils";
import { easeOut, motion } from "framer-motion";
import Image from "next/image";

const procedureInfo = [
  {
    title: "홈",
    accent: false,
    src: "/step-0.svg",
    phoneSrc: "/step-0-phone.png",
  },
  {
    title: "기본 정보",
    accent: false,
    src: "/step-1.svg",
    phoneSrc: "/step-1-phone.png",
  },
  {
    title: "가치관 Pick",
    accent: true,
    src: "/step-2.svg",
    phoneSrc: "/step-2-phone.png",
  },
  {
    title: "가치관 Talk",
    accent: true,
    src: "/step-3.svg",
    phoneSrc: "/step-3-phone.png",
  },
  {
    title: "사진",
    accent: false,
    src: "/step-4.svg",
    phoneSrc: "/step-4-phone.png",
  },
  {
    title: "연락처",
    accent: false,
    src: "/step-5.svg",
    phoneSrc: "/step-5-phone.png",
  },
];

export default function Procedure() {
  const containerVariants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.15 } }, // 내부 요소 순차 등장
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } },
  };

  return (
    <motion.div
      className="space-y-20"
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* 상단 절차 아이콘 + 타이틀 */}
      <motion.div
        className="flex items-center gap-15 justify-center"
        variants={itemVariants}
      >
        {procedureInfo.map(({ title, src, accent }, i) => (
          <div
            className={cn(
              "flex flex-col gap-3.5 w-[6.3rem] items-center leading-8 text-[#6C7073] text-2xl",
              { "text-primary": accent }
            )}
            key={title}
          >
            <Image
              src={src}
              width={52}
              height={52}
              className="size-13"
              alt={`${i}`}
            />
            <div className="font-semibold text-2xl whitespace-nowrap">
              {title}
            </div>
          </div>
        ))}
      </motion.div>

      {/* 하단 핸드폰 이미지 */}
      <motion.div className="flex justify-center" variants={itemVariants}>
        <div className="grid grid-cols-3 gap-15">
          {procedureInfo.map(({ phoneSrc }, i) => (
            <Image
              width={340}
              height={704}
              src={phoneSrc}
              key={phoneSrc}
              alt={`아이폰 이미지 ${i}`}
              className="w-[21.25rem] h-auto"
            />
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

"use client";

import { useMediaQuery } from "@/hooks/use-media-query";
import { easeOut, motion } from "framer-motion";

const keyWordsDataLg = [
  ["만남 빈도,", "음주,", "연락 빈도,", "연락 방식,", "데이트,"],
  ["장거리 연애 가능 여부,", "SNS,", "갈등 해결 방식,", "일 중요도,"],
  ["음주", "연락 빈도,", "연락 방식,", "커밍아웃 범위,"],
];
const keyWordsDataSm = [
  [
    "만남 빈도,",
    "음주,",
    "연락 빈도,",
    "연락 방식,",
    "데이트,",
    "장거리 연애 가능 여부,",
    "SNS,",
  ],
  [
    "갈등 해결 방식,",
    "일 중요도,",
    "연락 빈도,",
    "연락 방식,",
    "커밍아웃 범위,",
  ],
];
const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15 }, // 한 줄씩 순차 등장
  },
};
const rowVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeOut }, // ✅ 문자열 대신 easeOut
  },
};

export default function ValuePickKeywords() {
  const isMobile = useMediaQuery(1024);

  return (
    <motion.div
      className="flex flex-col gap-3 absolute left-1/2 -translate-x-1/2 bottom-0 leading-8 text-2xl lg:text-4xl lg:leading-12 text-[#6C7073] font-semibold [mask-image:linear-gradient(to_bottom,black,transparent)] [mask-repeat:no-repeat] [mask-size:100%_100%] z-0"
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      {(isMobile ? keyWordsDataSm : keyWordsDataLg).map((row, i) => (
        <motion.div
          key={i}
          className="flex gap-3 lg:gap-9 justify-center whitespace-nowrap mx-auto"
          variants={rowVariants}
        >
          {row.map((e) => (
            <div key={e}>{e}</div>
          ))}
        </motion.div>
      ))}
    </motion.div>
  );
}

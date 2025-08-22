"use client";

import Step0 from "@/assets/step-0.svg";
import Step1 from "@/assets/step-1.svg";
import Step2 from "@/assets/step-2.svg";
import Step3 from "@/assets/step-3.svg";
import Step4 from "@/assets/step-4.svg";
import Step5 from "@/assets/step-5.svg";
import { useMediaQuery } from "@/hooks/use-media-query";
import { easeOut, motion } from "framer-motion";
import Image from "next/image";
import Indicator from "./indicator";
import MobileProcedure from "./mobile-procedure";

export type ProcedureInfo = {
  title: string;
  accent: boolean;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  phoneSrc: string;
};

const procedureInfo: ProcedureInfo[] = [
  { title: "홈", accent: false, icon: Step0, phoneSrc: "/step-0-phone.png" },
  {
    title: "기본 정보",
    accent: false,
    icon: Step1,
    phoneSrc: "/step-1-phone.png",
  },
  {
    title: "가치관 Pick",
    accent: true,
    icon: Step2,
    phoneSrc: "/step-2-phone.png",
  },
  {
    title: "가치관 Talk",
    accent: true,
    icon: Step3,
    phoneSrc: "/step-3-phone.png",
  },
  { title: "사진", accent: false, icon: Step4, phoneSrc: "/step-4-phone.png" },
  {
    title: "연락처",
    accent: false,
    icon: Step5,
    phoneSrc: "/step-5-phone.png",
  },
];

export default function Procedure() {
  const containerVariants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } },
  };

  const isMobile = useMediaQuery(1024);

  return !isMobile ? (
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
        {procedureInfo.map((e, i) => (
          <Indicator key={i} {...e} />
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
              className="w-[21.25rem] h-auto pointer-events-none"
            />
          ))}
        </div>
      </motion.div>
    </motion.div>
  ) : (
    <MobileProcedure procedureInfo={procedureInfo} />
  );
}

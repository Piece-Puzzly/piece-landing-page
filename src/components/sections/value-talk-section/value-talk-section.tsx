"use client";
import SectionDescription from "@/components/section-description";
import SectionHeader from "@/components/section-header";
import SectionTitle from "@/components/section-title";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Image from "next/image";

const imgInfo = [
  { src: "/talk-card1.png", alt: "가치관 TALK 1" },
  { src: "/talk-card2.png", alt: "가치관 TALK 2" },
  { src: "/talk-card3.png", alt: "가치관 TALK 3" },
];

export default function ValueTalkSection() {
  return (
    <div
      className={cn(
        "w-full flex relative",
        "bg-[radial-gradient(ellipse_62.5rem_62.5rem_at_50%_50%,_#D0ABFD80_0%,_#D0ABFD20_20%,_#D0ABFD00_80%)]",
        "lg:bg-[radial-gradient(ellipse_100%_50%_at_50%_100%,_#D0ABFD80_0%,_#D0ABFD20_40%,_#D0ABFD00_100%)]"
      )}
    >
      <div
        className={cn(
          "max-w-screen-2xl w-full mx-auto lg:pb-45 pb-20 space-y-12.5 lg:space-y-20 relative z-10"
        )}
      >
        <SectionHeader>
          <SectionTitle>
            <p>
              <span className="text-primary">가치관 TALK,</span>
            </p>
            <p>진솔하게 서로를 알아가요!</p>
          </SectionTitle>
          <SectionDescription>
            <p>나를 가장 잘 표현하는 답변을 작성해보세요.</p>
            <p>AI가 이를 요약해 더 매력적으로 보일 수 있도록 도와줄 거에요!</p>
          </SectionDescription>
        </SectionHeader>

        <div className="flex flex-col lg:flex-row gap-10 lg:gap-15 mx-auto justify-center items-center px-6 sm:px-10 md:px-12">
          {imgInfo.map((img, index) => (
            // --- ⬇️ ref와 animate prop 대신 whileInView와 viewport prop을 사용합니다. ⬇️ ---
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.5, once: true }} // 50% 보였을 때, 한 번만 실행
              transition={{
                duration: 0.5,
                delay: index * 0.2,
                ease: "easeOut",
              }}
              className="lg:w-85 h-auto pointer-events-none"
            >
              <Image
                src={img.src}
                alt={img.alt}
                height={428}
                width={340}
                className="w-full h-auto"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

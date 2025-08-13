import { Button } from "@/components/ui/button";
import Image from "next/image";
import Header from "./header";

export default function HeroSection() {
  return (
    <div className="h-dvh bg-piece-gradient flex justify-center items-center relative">
      <div className="absolute bottom-0 z-0">
        <Image src={"/bg-logo.svg"} width={1071} height={400} alt="" />
      </div>
      <div className="absolute bottom-10 z-10 animate-bounce">
        <Image src={"/arrow.svg"} width={40} height={40} alt="" />
      </div>
      
      <div className="text-center text-white font-semibold relative z-10">
        <div className="text-5xl leading-16 mb-9">
          <p>가치관 기반의 성숙한 만남을</p>
          <p>지향하는 이반 소개팅 서비스</p>
        </div>
        <div className="text-2xl leading-8 font-medium mb-20">
          가치관 기반 게이 소개팅: 피스(Piece)
        </div>
        <Button className="rounded-full py-3.5 px-7 h-auto text-2xl leading-8">
          앱 다운로드
        </Button>
      </div>
    </div>
  );
}

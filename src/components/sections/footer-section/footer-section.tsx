import { Button } from "@/components/ui/button";

export default function FooterSection() {
  return (
    <div className="bg-[#F6EFFF] py-45 gap-15 flex items-center flex-col justify-center">
      <div className="font-semibold text-[2rem] text-[#484B4D] leading-11 text-center">
        <p>진짜 나와 잘 맞는 사람을 만나고 싶다면?</p>
        <p>
          <span className="text-primary">Piece</span>에서 내 조각을 찾아보세요.
        </p>
      </div>
      <Button className="py-5 px-9 rounded-full text-2xl leading-8 h-auto">
        앱 다운로드
      </Button>
    </div>
  );
}

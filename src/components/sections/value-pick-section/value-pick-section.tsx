import SectionDescription from "@/components/section-description";
import SectionHeader from "@/components/section-header";
import SectionTitle from "@/components/section-title";
import ValuePickCards from "./value-pick-cards";
import ValuePickKeywords from "./value-pick-keywords";

export default function ValuePickSection() {
  return (
    <div className="flex">
      <div className="pt-20 lg:pt-45  space-y-12.5 lg:space-y-20 mb-45 mx-auto max-w-screen-2xl w-full">
        <SectionHeader className="px-6 md:px-10 lg:px-12">
          <SectionTitle>
            <p>
              <span className="text-primary">가치관 PICK,</span>
            </p>
            <p>나와 닮은 마음을 쉽게 찾아봐요!</p>
          </SectionTitle>
          <SectionDescription>
            <p>연애 스타일, 관계의 중요 요소 등 자신의 생각을 고르면,</p>
            <p>
              상대방과 나의 가치관이 얼마나 일치하는지 한눈에 확인할 수 있어요.
            </p>
          </SectionDescription>
        </SectionHeader>
        <div className="overflow-auto no-scrollbar max-w-full">
          <div className="px-6 md:px-10 lg:px-12 h-90 lg:h-[36.9375rem] relative flex flex-col items-center w-fit">
            <ValuePickCards />
            <ValuePickKeywords />
          </div>
        </div>
      </div>
    </div>
  );
}

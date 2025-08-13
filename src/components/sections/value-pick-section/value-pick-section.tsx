import SectionDescription from "@/components/section-description";
import SectionHeader from "@/components/section-header";
import SectionTitle from "@/components/section-title";

export default function ValuePickSection() {
  return (
    <div className="pt-45 px-60 space-y-20">
      <SectionHeader>
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
      <div>asdf</div>
    </div>
  );
}

import SectionDescription from "@/components/section-description";
import SectionHeader from "@/components/section-header";
import SectionTitle from "@/components/section-title";
import Procedure from "./procedure";

export default function ValueShareSection() {
  return (
    <div className="flex">
      <div className="pt-20 lg:pt-45  space-y-12.5 lg:space-y-20 mx-auto max-w-screen-2xl w-full value-share-gradient">
        <SectionHeader className="px-6 md:px-10 lg:px-12">
          <SectionTitle>
            <p>사진보다 마음이 먼저,</p>
            <p>
              <span className="text-primary">다양한 가치관</span>을 공유해요!
            </p>
          </SectionTitle>
          <SectionDescription>
            <p>겉모습뿐만 아니라 생각과 경험을 공유하며</p>
            <p>진실된 서로를 알아갈 수 있습니다.</p>
          </SectionDescription>
        </SectionHeader>

        <Procedure />
      </div>
    </div>
  );
}

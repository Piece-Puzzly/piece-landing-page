import Section from "@/components/section";
import SectionHeader from "@/components/section-header";
import SectionTitle from "@/components/section-title";
import Image from "next/image";

const cardInfo = [
  {
    img: "/security-1.png",
    title: "아는 사람 차단, 불편함 없이",
    desc: [
      "전화번호 기반 차단으로 지인에게는 닫아두고",
      "진짜 새로운 인연에게만 나를 열어둘 수 있어요.",
    ],
  },
  {
    img: "/security-2.png",
    title: "가입 심사, 꼼꼼하게",
    desc: [
      "가볍지 않은 만남을 위해, 처음부터 꼼꼼히 살펴요.",
      "부적절한 프로필은 머무를 수 없도록 차단해요.",
    ],
  },
  {
    img: "/security-3.png",
    title: "캡처 방지, 정보를 안전하게",
    desc: [
      "정보가 흘러나갈 걱정 없이, 오롯이 만남에",
      "집중할 수 있도록 캡처 방지 기술을 담았어요.",
    ],
  },
];

export default function SecuritySection() {
  return (
    <Section className="lg:pt-60 pt-30">
      <SectionHeader>
        <SectionTitle>
          <p>
            <span className="text-primary">안심하고, 마음을 열 수 있는</span>
          </p>
          <p>공간을 만들었어요</p>
        </SectionTitle>
      </SectionHeader>
      <div className="flex flex-col lg:grid lg:grid-cols-3 gap-10 px-6 sm:px-10 md:px-12 ">
        {cardInfo.map(({ img, title, desc }, i) => (
          <div
            className="pt-12.5 pb-10 flex flex-col items-center gap-12.5 bg-white rounded-[1.25rem]"
            key={img}
          >
            <Image
              src={img}
              width={240}
              height={240}
              className="size-50 lg:size-60"
              alt={`이미지 ${i + 1}`}
            />
            <div className="flex flex-col items-center gap-2.5">
              <div className="text-lg leading-5.5 font-semibold">{title}</div>
              <div className="text-sm leading-5">
                {desc.map((e) => (
                  <div key={e} className="font-medium">
                    {e}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

import FaqIcon1 from "@/assets/faq-1.svg";
import FaqIcon2 from "@/assets/faq-2.svg";
import FaqIcon3 from "@/assets/faq-3.svg";
import FaqIcon4 from "@/assets/faq-4.svg";
import FaqIcon5 from "@/assets/faq-5.svg";
import Section from "@/components/section";
import { useMediaQuery } from "@/hooks/use-media-query";

const faqInfo = [
  {
    title: "인연은 어떤 기준으로 매칭되나요?",
    desc: [
      "피스는 AI 기반으로,  지역과 가치관이 마치 퍼즐 조각처럼 꼭 맞는 인연을 찾아 연결합니다.",
      "추후에 연령대 등 내가 원하는 만남 성사 기준을 직접 설정할 수 있도록 업데이트될 예정입니다.",
    ],
    icon: FaqIcon1,
  },
  {
    title: "지인을 만나거나 아웃팅될 위험은 없나요?",
    desc: [
      "모든 개인정보는 암호화되어 보안 서버에 안전하게 저장됩니다.",
      "아는 사람 차단 기능을 이용하면, 연락처에 포함된 지인에게 프로필이 노출되지 않습니다.",
      "또한 캡처 방지 기술이 적용되어 있어, 개인정보 유출 위험 없이 안심하고 이용하실 수 있습니다.",
      "여러분의 안전한 커뮤니티 이용을 위해 최선을 다하겠습니다.",
    ],
    icon: FaqIcon2,
  },
  {
    title: "가입 심사는 어떻게 진행되나요?",
    desc: [
      "피스는 안전하고 신뢰할 수 있는 커뮤니티를 만들기 위해 철저하게 가입 심사를 진행합니다.",
      "얼굴이 잘 보이는 사진이 필수이며, 무성의한 소개글이나 선정적·부적절한 내용이 포함된 프로필은 반려됩니다.",
      "첫 심사에서 거절되더라도 프로필을 수정하여 재심사를 신청할 수 있습니다.",
    ],
    icon: FaqIcon3,
  },
  {
    title: "이용 요금은 얼마인가요?",
    desc: [
      "매일 22시, 나에게 꼭 맞는 인연 1명이 무료로 매칭됩니다. ",
      "더 많은 인연을 만날 수 있는 유료 기능도 추후 업데이트될 예정이니, 많은 기대 부탁드립니다.",
    ],
    icon: FaqIcon4,
  },
  {
    title: "안전 관리는 어떻게 하고 있나요?",
    desc: [
      "전담 안전팀이 24시간 모니터링하며, 신고가 접수되면 즉시 검토 후 필요한 조치를 취합니다.",
      "부적절한 이용이 발견된 사용자는 신속하게 경고 혹은 이용이 제한됩니다.",
      "여러분의 적극적인 신고 부탁드립니다.",
    ],
    icon: FaqIcon5,
  },
];

export default function FaqSection() {
  const isTablet = useMediaQuery(1024);
  return (
    <Section bgClassName="bg-white" className="px-6 sm:px-10 md:px-12">
      <div className="font-semibold text-2xl leading-8 lg:text-4xl lg:leading-12 text-[#484B4D]">
        자주 묻는 질문
      </div>
      <div className="space-y-4 lg:space-y-6">
        {faqInfo.map(({ title, desc, icon: Icon }, i) => (
          <div
            className="bg-[#F4F6FA] p-10 lg:p-15 rounded-2xl flex flex-col gap-6 lg:flex lg:flex-row lg:gap-25 lg:items-start"
            key={i}
          >
            <div className="flex flex-col lg:flex-row lg:items-center gap-3 lg:gap-4 lg:w-126 shrink-0">
              <Icon className="size-8 shrink-0" />
              <div className="font-semibold text-lg lg:text-[1.75rem] text-[#1B1A2A] leading-5.5 lg:leading-10 tracking-[-2%]">
                {title}
              </div>
            </div>
            <div className="break-all lg:break-keep">
              {isTablet ? (
                <p
                  key={i}
                  className="text-[#484B4D] font-medium text-sm leading-5 lg:text-base lg:leading-[150%] tracking-[-2%]"
                >
                  {desc.join(" ")}
                </p>
              ) : (
                desc.map((e, i) => (
                  <p
                    key={i}
                    className="text-[#484B4D] font-medium text-sm leading-5 lg:text-base lg:leading-[150%] tracking-[-2%]"
                  >
                    {e}
                  </p>
                ))
              )}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

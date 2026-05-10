import FaqIcon1 from "@/assets/faq-1.svg";
import FaqIcon2 from "@/assets/faq-2.svg";
import FaqIcon3 from "@/assets/faq-3.svg";
import FaqIcon4 from "@/assets/faq-4.svg";
import FaqIcon5 from "@/assets/faq-5.svg";

const faqs = [
  {
    icon: FaqIcon1,
    question: "인연은 어떤 기준으로 매칭되나요?",
    answer:
      "피스는 AI 기반으로 가치관, 지역, 나이 등 여러 요소들을 종합적으로 고려해 마치 퍼즐 조각처럼 꼭 맞는 인연을 찾아 연결합니다.",
  },
  {
    icon: FaqIcon2,
    question: "지인을 만나거나 아웃팅될 위험은 없나요?",
    answer:
      "모든 개인정보는 암호화되어 보안 서버에 안전하게 저장됩니다. 아는 사람 차단 기능을 이용하면, 연락처에 포함된 지인에게 프로필이 노출되지 않습니다. 또한 캡처 방지 기술이 적용되어 있어, 개인정보 유출 위험 없이 안심하고 이용하실 수 있습니다. 여러분의 안전한 커뮤니티 이용을 위해 최선을 다하겠습니다.",
  },
  {
    icon: FaqIcon3,
    question: "가입 심사는 어떻게 진행되나요?",
    answer:
      "피스는 안전하고 신뢰할 수 있는 커뮤니티를 만들기 위해 철저하게 가입 심사를 진행합니다. 얼굴이 잘 보이는 사진이 필수이며, 무성의한 소개글이나 선정적·부적절한 내용이 포함된 프로필은 반려됩니다. 첫 심사에서 거절되더라도 프로필을 수정하여 재심사를 신청할 수 있습니다.",
  },
  {
    icon: FaqIcon4,
    question: "이용 요금은 얼마인가요?",
    answer:
      "매일 밤 10시, 나에게 꼭 맞는 인연 1명이 무료로 매칭됩니다. 더 많은 인연을 만나고 싶다면, 퍼즐을 구매해 원하는 만큼 더 많이 이어갈 수 있습니다.",
  },
  {
    icon: FaqIcon5,
    question: "안전 관리는 어떻게 하고 있나요?",
    answer:
      "24시간 모니터링하며, 신고가 접수되면 즉시 검토 후 필요한 조치를 취합니다. 부적절한 이용이 발견된 사용자는 신속하게 경고 혹은 이용이 제한됩니다. 여러분의 적극적인 신고 부탁드립니다.",
  },
];

export default function Faq() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="relative overflow-hidden bg-white"
    >
      <div className="mx-auto w-full max-w-[1920px] px-6 py-20 sm:py-24 lg:px-15 lg:py-32">
        <h2
          id="faq-heading"
          className="text-[24px] leading-[32px] font-semibold tracking-tight text-[#484b4d] sm:text-[28px] sm:leading-[40px] lg:text-[36px] lg:leading-[52px]"
        >
          자주 묻는 질문
        </h2>

        <ul className="mt-12 space-y-4 lg:mt-16 lg:space-y-5">
          {faqs.map(({ icon: Icon, question, answer }) => (
            <li
              key={question}
              className="rounded-2xl bg-[#F4F6FA] p-6 sm:p-8 lg:flex lg:items-start lg:gap-12 lg:p-10"
            >
              <div className="flex items-center gap-3 lg:w-[44%] lg:shrink-0 lg:gap-4">
                <Icon
                  className="size-8 shrink-0"
                  aria-hidden="true"
                />
                <h3 className="text-[18px] leading-[24px] font-semibold tracking-tight text-[#1b1a2a] sm:text-[20px] sm:leading-[28px]">
                  {question}
                </h3>
              </div>
              <p className="mt-4 text-[14px] leading-[22px] font-medium text-[#484b4d] sm:text-[15px] sm:leading-[24px] lg:mt-0 lg:flex-1 lg:text-[15px]">
                {answer}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

import { CircleDot } from "lucide-react";

export default function ValueCardPick() {
  return (
    <section
      id="value-card-pick"
      aria-labelledby="value-card-pick-heading"
      className="relative overflow-hidden bg-[#F4F6FA]"
    >
      <div className="mx-auto w-full max-w-[1920px] px-6 pt-8 pb-20 sm:pt-12 sm:pb-24 lg:px-15 lg:pt-16 lg:pb-32">
        <div className="mx-auto max-w-[440px]">
          <article className="rounded-3xl bg-white p-6 shadow-[0_8px_32px_rgba(27,26,42,0.06)] sm:p-8">
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center gap-1.5 text-sm font-medium text-[#6c7073]">
                <CircleDot
                  className="size-4 text-[#6c7073]"
                  strokeWidth={2}
                  aria-hidden="true"
                />
                데이트
              </span>
              <span className="inline-flex items-center rounded-full bg-[#FFE3E9] px-2.5 py-0.5 text-xs font-semibold text-[#FF7490]">
                나와 같은
              </span>
            </div>

            <p className="mt-5 text-[16px] leading-[24px] font-medium text-[#1b1a2a] sm:text-[17px] sm:leading-[26px]">
              공공장소에서 연인 티를 내는 것에 대해 어떻게 생각하나요?
            </p>

            <ul className="mt-6 space-y-2.5">
              <li className="rounded-xl bg-[#F4F6FA] px-4 py-3 text-sm leading-6 text-[#6c7073] sm:text-base">
                밖에서 연인 티내는건 조금 부담스러워요
              </li>
              <li
                aria-label="선택된 답변"
                className="rounded-xl bg-[#F6EFFF] px-4 py-3 text-sm leading-6 font-semibold text-primary sm:text-base"
              >
                밖에서도 자연스럽게 연인 티내고 싶어요
              </li>
            </ul>
          </article>

          <header className="mt-8 text-center">
            <p className="text-sm font-semibold tracking-wider text-primary sm:text-base">
              가치관 PICK
            </p>
            <h2
              id="value-card-pick-heading"
              className="mt-2 text-[20px] leading-[28px] font-semibold tracking-tight text-[#1b1a2a] sm:text-[24px] sm:leading-[32px] lg:text-[28px] lg:leading-[40px]"
            >
              당신의 생각과 가까운 답을 골라요
            </h2>
          </header>
        </div>
      </div>
    </section>
  );
}

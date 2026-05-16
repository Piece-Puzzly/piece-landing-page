export default function ValueCards() {
  return (
    <section
      id="value-cards"
      aria-labelledby="value-cards-heading"
      className="relative overflow-hidden bg-[#f4f6fa]"
    >
      <img
        src="/value-cards-bg-mobile.png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 size-full object-cover select-none xl:hidden"
      />
      <img
        src="/value-cards-bg-pc.png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 hidden size-full object-cover select-none xl:block"
      />

      <div className="relative z-10 mx-auto flex w-full max-w-[1440px] flex-col items-center gap-[64px] px-6 py-16 md:px-10 md:py-20 xl:gap-[96px] xl:px-12 xl:py-[120px]">
        <h2
          id="value-cards-heading"
          className="self-stretch text-[24px] leading-[32px] font-semibold text-[#1b1a2a] xl:text-[36px] xl:leading-[48px]"
        >
          <span className="text-primary">AI</span>가 당신의 이야기를 모두 읽고,
          <br />
          마음이 닮은 <span className="text-primary">한 사람</span>을 찾아줘요
        </h2>

        <div className="flex w-full flex-col items-center gap-[64px] xl:max-w-[960px] xl:flex-row xl:items-start xl:justify-between xl:gap-[40px]">
          <article className="flex w-full max-w-[440px] flex-col items-center gap-6 xl:w-[420px] xl:max-w-none xl:flex-none xl:gap-8">
            <img
              src="/talk-card.png"
              alt="연애관 카드: 일상을 함께 나눌 사람을 찾고 있어요. 평일은 각자의 자리에서 단단하게, 저녁이 되면 서로의 하루를 나누는 사이가 되고 싶어요. 주말은 가능한 함께 보내며 같은 풍경을 오래 바라보고 싶어요. 한 사람과 깊이 알아가면서 서로를 잘 챙겨주는 사이였으면 좋겠어요."
              className="block w-full"
            />
            <header className="text-center">
              <p className="text-sm font-semibold tracking-wider text-primary sm:text-base">
                가치관 TALK
              </p>
              <h3 className="mt-2 text-[20px] leading-[28px] font-semibold tracking-tight text-[#1b1a2a] sm:text-[24px] sm:leading-[32px] xl:text-[28px] xl:leading-[40px]">
                당신의 생각을 자유롭게 적어요
              </h3>
            </header>
          </article>

          <article className="flex w-full max-w-[440px] flex-col items-center gap-6 xl:mt-[120px] xl:w-[420px] xl:max-w-none xl:flex-none xl:gap-8">
            <img
              src="/pick-card.png"
              alt="데이트 카드: 공공장소에서 연인 티를 내는 것에 대해 어떻게 생각하나요? 옵션 — 밖에서 연인 티내는건 조금 부담스러워요 / 선택됨 — 밖에서도 자연스럽게 연인 티내고 싶어요"
              className="block w-full"
            />
            <header className="text-center">
              <p className="text-sm font-semibold tracking-wider text-primary sm:text-base">
                가치관 PICK
              </p>
              <h3 className="mt-2 text-[20px] leading-[28px] font-semibold tracking-tight text-[#1b1a2a] sm:text-[24px] sm:leading-[32px] xl:text-[28px] xl:leading-[40px]">
                당신의 생각과 가까운 답을 골라요
              </h3>
            </header>
          </article>
        </div>
      </div>
    </section>
  );
}

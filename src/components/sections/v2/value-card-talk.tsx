export default function ValueCardTalk() {
  return (
    <section
      id="value-card-talk"
      aria-labelledby="value-card-talk-heading"
      className="relative overflow-hidden bg-[#F4F6FA]"
    >
      <div className="mx-auto w-full max-w-[1920px] px-6 pt-8 pb-16 sm:pt-12 sm:pb-20 lg:px-15 lg:pt-16 lg:pb-24">
        <div className="mx-auto max-w-[440px]">
          <article className="rounded-3xl bg-white p-8 shadow-[0_8px_32px_rgba(27,26,42,0.06)] sm:p-10">
            <span className="inline-flex items-center rounded-full bg-[#EDE9FE] px-3 py-1 text-xs font-semibold tracking-wide text-primary">
              연애관
            </span>

            <div className="mt-6">
              <img
                src="/puzzle-icon.svg"
                alt=""
                aria-hidden="true"
                className="size-14"
              />
            </div>

            <p className="mt-6 text-[20px] leading-[28px] font-semibold tracking-tight text-[#1b1a2a] sm:text-[22px] sm:leading-[32px]">
              일상을 함께 나눌 사람을 찾고 있어요
            </p>

            <p className="mt-4 text-[15px] leading-[26px] text-[#484b4d]">
              평일은 각자의 자리에서 단단하게, 저녁이 되면 서로의 하루를 나누는
              사이가 되고 싶어요. 주말은 가능한 함께 보내며 같은 풍경을 오래
              바라보고 싶어요. 한 사람과 깊이 알아가면서 서로를 잘 챙겨주는
              사이였으면 좋겠어요.
            </p>
          </article>

          <header className="mt-8 text-center">
            <p className="text-sm font-semibold tracking-wider text-primary sm:text-base">
              가치관 TALK
            </p>
            <h2
              id="value-card-talk-heading"
              className="mt-2 text-[20px] leading-[28px] font-semibold tracking-tight text-[#1b1a2a] sm:text-[24px] sm:leading-[32px] lg:text-[28px] lg:leading-[40px]"
            >
              당신의 생각을 자유롭게 적어요
            </h2>
          </header>
        </div>
      </div>
    </section>
  );
}

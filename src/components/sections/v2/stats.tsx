export default function Stats() {
  return (
    <section
      id="stats"
      aria-labelledby="stats-heading"
      className="relative overflow-hidden bg-white"
    >
      <picture aria-hidden="true">
        <source media="(min-width: 1280px)" srcSet="/stats-bg-pc.png" />
        <img
          src="/stats-bg-mobile.png"
          alt=""
          className="pointer-events-none absolute inset-0 z-0 size-full object-cover object-right-top select-none"
        />
      </picture>

      <div className="relative z-10 mx-auto flex w-full max-w-[1440px] flex-col gap-[50px] px-6 py-16 md:px-10 xl:gap-[40px] xl:px-12 xl:pt-[120px] xl:pb-[180px]">
        <header className="flex flex-col items-start gap-[10px]">
          <h2
            id="stats-heading"
            className="text-[24px] leading-[32px] font-semibold tracking-tight text-[#1b1a2a] xl:text-[36px] xl:leading-[48px]"
          >
            조용히 인연을 기다리는 사람들이,
            <br />
            이미 피스에 모여있어요
          </h2>
          <p className="text-base leading-6 font-medium text-[#6c7073] xl:text-xl xl:leading-8">
            26년 4월 기준
          </p>
        </header>

        <dl className="flex flex-col gap-8 xl:flex-row xl:flex-wrap xl:gap-x-6 xl:gap-y-10 xl:pl-[687px]">
          <div className="xl:w-[318px]">
            <dt className="text-base leading-6 font-medium text-[#484b4d] xl:text-xl xl:leading-8">
              피스가 만난 사람들
            </dt>
            <dd className="mt-1 text-[48px] leading-normal font-bold tracking-tight text-[#1b1a2a] xl:mt-[10px] xl:text-[72px]">
              1,800+
            </dd>
          </div>

          <div className="xl:w-[205px]">
            <dt className="text-base leading-6 font-medium text-[#484b4d] xl:text-xl xl:leading-8">
              피스가 이어준 인연들
            </dt>
            <dd className="mt-1 text-[48px] leading-normal font-bold tracking-tight text-[#1b1a2a] xl:mt-[10px] xl:text-[72px]">
              400+
            </dd>
          </div>

          <div className="xl:w-[570px]">
            <dt className="text-base leading-6 font-medium text-[#484b4d] xl:text-xl xl:leading-8">
              그리고
            </dt>
            <dd className="mt-1 text-[40px] leading-[1.4] font-bold tracking-tight text-[#1b1a2a] xl:mt-[10px] xl:text-[60px]">
              당신이 만날
              <br className="md:hidden" />
              {" "}단 <span className="text-primary">한 사람</span>
            </dd>
          </div>
        </dl>
      </div>
    </section>
  );
}

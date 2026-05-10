export default function Stats() {
  return (
    <section
      id="stats"
      aria-labelledby="stats-heading"
      className="relative overflow-hidden bg-[#F4F6FA]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 -right-40 size-[480px] rounded-full opacity-60 blur-3xl sm:-top-40 sm:-right-32 sm:size-[640px] lg:top-1/2 lg:right-[20%] lg:size-[720px] lg:-translate-y-1/2"
        style={{
          background:
            "radial-gradient(circle at center, #C9B0F5 0%, rgba(201,176,245,0.4) 45%, rgba(255,255,255,0) 75%)",
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-[1920px] px-6 py-20 sm:py-24 lg:grid lg:grid-cols-2 lg:gap-12 lg:px-15 lg:py-32">
        <header>
          <h2
            id="stats-heading"
            className="text-[24px] leading-[32px] font-semibold tracking-tight text-[#1b1a2a] sm:text-[28px] sm:leading-[40px] lg:text-[36px] lg:leading-[52px]"
          >
            조용히 인연을 기다리는 사람들이,
            <br />
            이미 피스에 모여있어요
          </h2>
          <p className="mt-3 text-sm text-[#6c7073] lg:mt-4 lg:text-base">
            26년 4월 기준
          </p>
        </header>

        <dl className="mt-12 flex flex-col gap-10 lg:mt-0 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-12">
          <div>
            <dt className="text-base leading-6 font-medium text-[#484b4d]">
              피스가 만난 사람들
            </dt>
            <dd className="mt-2 text-[56px] leading-[1.1] font-semibold tracking-tight text-[#1b1a2a] lg:text-[72px]">
              1,800+
            </dd>
          </div>

          <div>
            <dt className="text-base leading-6 font-medium text-[#484b4d]">
              피스가 이어준 인연들
            </dt>
            <dd className="mt-2 text-[56px] leading-[1.1] font-semibold tracking-tight text-[#1b1a2a] lg:text-[72px]">
              400+
            </dd>
          </div>

          <div className="lg:col-span-2">
            <dt className="text-base leading-6 font-medium text-[#484b4d]">
              그리고
            </dt>
            <dd className="mt-2 text-[40px] leading-[1.2] font-semibold tracking-tight text-[#1b1a2a] lg:text-[56px]">
              당신이 만날 단{" "}
              <span className="text-primary">한 사람</span>
            </dd>
          </div>
        </dl>
      </div>
    </section>
  );
}

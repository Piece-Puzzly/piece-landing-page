export default function NightTen() {
  return (
    <section
      id="night-ten"
      aria-labelledby="night-ten-heading"
      className="relative overflow-hidden bg-[#F4F6FA]"
    >
      <div className="mx-auto w-full max-w-[1920px] px-6 pt-20 pb-12 sm:pt-24 sm:pb-16 lg:grid lg:grid-cols-2 lg:items-center lg:gap-12 lg:px-15 lg:pt-32 lg:pb-20">
        <header className="lg:pr-8">
          <h2
            id="night-ten-heading"
            className="text-[24px] leading-[32px] font-semibold tracking-tight sm:text-[28px] sm:leading-[40px] lg:text-[40px] lg:leading-[56px]"
          >
            <span className="text-primary">매일 밤 10시,</span>
            <br />
            <span className="text-[#1b1a2a]">새로운 인연이 도착해요</span>
          </h2>
        </header>

        <div className="relative mt-12 flex items-start justify-start gap-6 lg:mt-0 lg:justify-end lg:gap-10">
          <img
            src="/night-phone-1.svg"
            alt="매일 밤 10시 새로운 매칭이 도착했다는 알림 화면"
            className="relative z-10 w-[200px] flex-shrink-0 drop-shadow-2xl sm:w-[260px] lg:w-[360px]"
          />
          <img
            src="/night-phone-2.svg"
            alt="피스 매칭 리스트 화면"
            className="relative mt-12 w-[180px] flex-shrink-0 drop-shadow-xl sm:mt-16 sm:w-[240px] lg:mt-0 lg:w-[320px]"
          />
        </div>
      </div>

      <div className="mx-auto w-full max-w-[1920px] px-6 pb-20 sm:pb-24 lg:px-15 lg:pb-32">
        <h3 className="mx-auto max-w-3xl text-center text-[20px] leading-[30px] font-semibold tracking-tight text-[#1b1a2a] sm:text-[24px] sm:leading-[36px] lg:text-[28px] lg:leading-[42px]">
          AI가 당신의 이야기를 모두 읽고,
          <br className="sm:hidden" />{" "}
          마음이 닮은 <span className="text-primary">한 사람</span>을 찾아줘요
        </h3>
      </div>
    </section>
  );
}

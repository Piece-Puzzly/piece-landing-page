export default function NightTen() {
  return (
    <section
      id="night-ten"
      aria-labelledby="night-ten-heading"
      className="relative overflow-hidden bg-[#f4f6fa]"
    >
      <div className="flex flex-col items-start gap-[50px] px-6 py-16 md:items-end md:px-10 xl:items-end xl:gap-0 xl:px-12 xl:py-[120px]">
        <h2
          id="night-ten-heading"
          className="self-stretch text-[24px] leading-[32px] font-semibold tracking-tight xl:text-[36px] xl:leading-[48px]"
        >
          <span className="text-primary">매일 밤 10시,</span>
          <br />
          <span className="text-[#1b1a2a]">새로운 인연이 도착해요</span>
        </h2>

        <div className="relative grid grid-cols-1 grid-rows-1 place-items-start">
          <img
            src="/night-phone-2.svg"
            alt="피스 매칭 리스트 화면"
            className="col-start-1 row-start-1 ml-[280px] mt-0 w-[240px] drop-shadow-xl xl:ml-[400px] xl:w-[340px]"
          />
          <img
            src="/night-phone-1.svg"
            alt="매일 밤 10시 새로운 매칭이 도착했다는 알림 화면"
            className="relative z-10 col-start-1 row-start-1 ml-0 mt-[160px] w-[240px] drop-shadow-2xl xl:w-[340px]"
          />
        </div>
      </div>

      <div className="px-6 pb-16 md:px-10 xl:px-12 xl:pb-[120px]">
        <h3 className="mx-auto max-w-3xl text-center text-[20px] leading-[30px] font-semibold tracking-tight text-[#1b1a2a] xl:text-[28px] xl:leading-[42px]">
          AI가 당신의 이야기를 모두 읽고,
          <br className="md:hidden" />{" "}
          마음이 닮은 <span className="text-primary">한 사람</span>을 찾아줘요
        </h3>
      </div>
    </section>
  );
}

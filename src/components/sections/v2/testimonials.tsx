const testimonials = [
  {
    body: "다른 이쪽 앱들은 가벼운 사람들이 많았는데 피스는 진지하게 임하시는 분들이 많아서 좋아요",
    caption: "20대 / 전문직",
  },
  {
    body: "연애가 급하지는 않으니, 가치관과 성격이 잘 맞는 사람을 만나고 싶었어요",
    caption: "30대 / 사업가",
  },
  {
    body: "자판기에서 사람 고르는 느낌이 싫었는데 피스는 하루 한 명이라 신중해져요",
    caption: "20대 / 대학생",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="relative overflow-hidden bg-[#F6EFFF]"
    >
      <div className="mx-auto w-full max-w-[1920px] px-6 py-20 sm:py-24 lg:grid lg:grid-cols-12 lg:gap-8 lg:px-15 lg:py-32">
        <h2
          id="testimonials-heading"
          className="text-[24px] leading-[32px] font-semibold tracking-tight text-[#1b1a2a] sm:text-[28px] sm:leading-[40px] lg:col-span-4 lg:text-[36px] lg:leading-[52px]"
        >
          피스 유저들은,
          <br />
          이렇게 말했어요
        </h2>

        <ul className="mt-12 flex flex-col gap-10 lg:col-span-8 lg:mt-0 lg:items-end lg:gap-12">
          {testimonials.map((t, idx) => (
            <li
              key={t.caption}
              className={`w-full ${
                idx === 1 ? "lg:max-w-[78%]" : "lg:max-w-[88%]"
              }`}
            >
              <figure className="relative rounded-[20px] bg-white px-6 py-6 shadow-[0_4px_20px_rgba(111,0,251,0.06)] sm:px-8 sm:py-7 lg:flex lg:flex-col lg:items-end lg:justify-center lg:gap-1 lg:pt-8 lg:pr-10 lg:pb-6 lg:pl-10">
                <blockquote className="text-[16px] leading-[26px] font-medium text-primary sm:text-[18px] sm:leading-[28px] lg:self-stretch lg:text-[28px] lg:leading-[40px]">
                  {t.body}
                </blockquote>
                <figcaption className="mt-3 text-right text-sm font-semibold text-[#6c7073] sm:text-base lg:mt-0 lg:text-center lg:text-[20px] lg:leading-[32px]">
                  {t.caption}
                </figcaption>

                <svg
                  aria-hidden="true"
                  width="40"
                  height="28"
                  viewBox="0 0 40 28"
                  fill="none"
                  className="absolute -bottom-[28px] right-10"
                >
                  <path
                    d="M40 0H0L33.5012 26.801C36.1203 28.8962 40 27.0315 40 23.6775V0Z"
                    fill="white"
                  />
                </svg>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

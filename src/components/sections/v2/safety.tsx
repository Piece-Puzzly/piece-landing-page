import Image from "next/image";

const items = [
  {
    title: "아는 사람 차단, 불편함 없이",
    description: "지인 마주칠 걱정 없이, 편하게 둘러봐요",
    image: "/safety-block.png",
    alt: "지인 차단을 의미하는 일러스트",
  },
  {
    title: "가입 심사, 꼼꼼하게",
    description: "가볍지 않은 만남을 위해, 처음부터 꼼꼼히 살펴요",
    image: "/safety-profile.png",
    alt: "가입 심사를 의미하는 일러스트",
  },
  {
    title: "캡처 방지, 정보를 안전하게",
    description: "아웃팅 걱정 없이 인연을 찾아요",
    image: "/safety-noscreenshot.png",
    alt: "캡처 방지를 의미하는 일러스트",
  },
];

export default function Safety() {
  return (
    <section
      id="safety"
      aria-labelledby="safety-heading"
      className="relative overflow-hidden bg-white"
    >
      <div className="mx-auto w-full max-w-[1920px] px-6 py-20 sm:py-24 lg:px-15 lg:py-32">
        <h2
          id="safety-heading"
          className="text-[24px] leading-[32px] font-semibold tracking-tight sm:text-[28px] sm:leading-[40px] lg:text-[36px] lg:leading-[52px]"
        >
          <span className="text-primary">안심하고, 마음을 열 수 있는</span>
          <br />
          <span className="text-[#1b1a2a]">공간을 만들었어요</span>
        </h2>

        <ul className="mt-12 grid grid-cols-1 gap-6 sm:gap-8 lg:mt-16 lg:grid-cols-3 lg:gap-10">
          {items.map((item) => (
            <li
              key={item.title}
              className="rounded-[20px] bg-[#F4F6FA] px-6 py-10 text-center"
            >
              <div className="mx-auto flex size-[200px] items-center justify-center">
                <Image
                  src={item.image}
                  alt={item.alt}
                  width={200}
                  height={200}
                  className="size-full object-contain"
                />
              </div>
              <h3 className="mt-6 text-[18px] leading-[22px] font-semibold text-[#1b1a2a]">
                {item.title}
              </h3>
              <p className="mt-2 text-[14px] leading-[20px] font-medium text-[#909599]">
                {item.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

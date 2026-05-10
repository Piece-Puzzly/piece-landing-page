import AppDownloadButton from "@/components/app-download-button";

export default function FinalCTA() {
  return (
    <section
      id="final-cta"
      aria-labelledby="final-cta-heading"
      className="relative overflow-hidden bg-[#F6EFFF]"
    >
      <div className="mx-auto flex w-full max-w-[1920px] flex-col items-center px-6 py-16 text-center sm:py-20 lg:px-15 lg:py-24">
        <h2
          id="final-cta-heading"
          className="text-[18px] leading-[28px] font-semibold tracking-tight text-[#1b1a2a] sm:text-[22px] sm:leading-[34px] lg:text-[28px] lg:leading-[40px]"
        >
          가치관까지 잘 맞는 이상형,
          <br />
          오늘 밤 10시 피스에서 만나요
        </h2>

        <div className="mt-8 lg:mt-10">
          <AppDownloadButton />
        </div>
      </div>
    </section>
  );
}

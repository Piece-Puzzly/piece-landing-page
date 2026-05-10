import Footer from "@/components/footer/footer";
import Faq from "@/components/sections/v2/faq";
import FinalCTA from "@/components/sections/v2/final-cta";
import Hero from "@/components/sections/v2/hero";
import NightTen from "@/components/sections/v2/night-ten";
import Safety from "@/components/sections/v2/safety";
import Stats from "@/components/sections/v2/stats";
import Testimonials from "@/components/sections/v2/testimonials";
import ValueCardPick from "@/components/sections/v2/value-card-pick";
import ValueCardTalk from "@/components/sections/v2/value-card-talk";
import Header from "@/components/sections/hero-section/header";

export default function Page() {
  return (
    <main className="relative">
      <Header />
      <Hero />
      <Stats />
      <NightTen />
      <ValueCardTalk />
      <ValueCardPick />
      <Safety />
      <Testimonials />
      <Faq />
      <FinalCTA />
      <Footer />
    </main>
  );
}

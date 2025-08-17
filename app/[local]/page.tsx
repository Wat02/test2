import HeroSection from "@/components/HeroSection/HeroSection";
import OurServices from "@/components/OurServices/OurServices";
import WhyUsSection from "@/components/WhyUs/WhyUsSection";
import OurFor from "@/components/OurFor/ForWho";
import Numbers from "@/components/Numbers/Numbers";
import Testamonial from "@/components/Testamonial/testamonial";
import Faq from "@/components/Faq/faq";
import How from "@/components/HowToStart/How";

export default async function Home() {
  return (
    <section>
      <div>
        <HeroSection />
        <WhyUsSection />
        <OurServices />
        <OurFor />
        <Numbers />
        <Testamonial />
        <How />
        <Faq />
      </div>
    </section>
  );
}

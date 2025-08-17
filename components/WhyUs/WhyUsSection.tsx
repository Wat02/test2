import React from "react";
import BentoGrid from "./BentoGrid";
import { ScrollAreaHorizontalDemo } from "./Horizontal";

function WhyUsSection() {
  return (
    <section className="bg-[#F9F6F2] pt-[1rem] md:pt-[1rem]">
      <div>
        <BentoGrid />
        <div className="pt-[2rem]">
          <h2 className="text-center text-[1.5rem] md;text-[2rem] font-medium leading-[1.6em] uppercase">
            Awesome Creators We Work With
          </h2>
          <ScrollAreaHorizontalDemo />
        </div>
      </div>
    </section>
  );
}

export default WhyUsSection;

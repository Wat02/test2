import React from "react";
import { AccordionDemo } from "@/components/Faq/Accordion";

function faq() {
  return (
    <section className="pt-[5rem] md:pt-[10rem] bg-[#F9F6F2] pb-[5rem]">
      <div className="container mx-auto">
        <div className="grid grid-cols-12 gap-1">
          <div className="col-span-12 md:col-span-12  text-center mx-auto justify-center pb-[5rem]">
            <h3 className="text-[1.5rem] md:text-[2.5rem] leading-[1.1em] font-semibold">
              in case you were wondering
            </h3>
          </div>
          <div className="col-span-12 md:col-span-12  mr-[1rem] ml-[1rem]">
            <AccordionDemo />
          </div>
        </div>
      </div>
    </section>
  );
}

export default faq;

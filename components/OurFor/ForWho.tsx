import React from "react";
import ForWhoStru from "@/components/OurFor/ForWhoStru";
import TestamonialText from "../ui/Testamonial";

function forWho() {
  return (
    <section className="bg-[#F8F6F0]">
      <div>
        <ForWhoStru />
      </div>
      <div className="mr-[1rem] md:mr-[3rem] ml-[1rem] md:ml-[3rem] mx-auto pt-[5rem]">
        <div className="grid grid-cols-12 gap-1">
          <div className="col-span-12 md:col-span-4">
            <TestamonialText
              title="Tahlia Gia "
              text="I completed the TetraFlow Design course, which laid out all the fundamentals of design specifically for UI design, thanks to Wat. The comprehensive content provided a solid foundation, making complex concepts easy to understand."
              className="bg-[#214130] text-white font-medium pt-[1px] uppercase pb-[1px] pr-[0.25rem] pl-[0.10rem]"
              text2=" This course has been an invaluable resource, boosting my confidence to continue seeking out more knowledge and challenging myself to improve."
              title2="Design - Canva"
            />
          </div>
          <div className="col-span-12 md:col-span-4">
            <TestamonialText
              title="Tahlia Gia "
              text="I completed the TetraFlow Design course, which laid out all the fundamentals of design specifically for UI design, thanks to Wat. The comprehensive content provided a solid foundation, making complex concepts easy to understand."
              className="bg-[#00E499] text-[#000000] font-medium pt-[1px]  uppercase  pb-[1px] pr-[0.25rem] pl-[0.10rem]"
              text2=" This course has been an invaluable resource, boosting my confidence to continue seeking out more knowledge and challenging myself to improve."
              title2="Design - Canva"
            />
          </div>
          <div className="col-span-12 md:col-span-4">
            <TestamonialText
              title="Tahlia Gia "
              text="I completed the TetraFlow Design course, which laid out all the fundamentals of design specifically for UI design, thanks to Wat. The comprehensive content provided a solid foundation, making complex concepts easy to understand."
              className="bg-[#00E499] text-[#000000] font-medium pt-[1px]  uppercase  pb-[1px] pr-[0.25rem] pl-[0.10rem]"
              text2=" This course has been an invaluable resource, boosting my confidence to continue seeking out more knowledge and challenging myself to improve."
              title2="Design - Canva"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default forWho;

import { section } from "motion/react-client";
import React from "react";

function TestamonialText({
  title,
  title2,
  text,
  text2,
  className,
}: {
  title: string;
  text: string;
  className: string;
  text2: string;
  title2: string;
}) {
  return (
    <section>
      <div className="container mx-auto">
        <div className="grid grid-cols-12 gap-1">
          <div className="col-span-12 md:col-span-12">
            <p className="text-[1rem] md:text-[1.2rem] leading-[1.6em] w-full md:w-[95%] font-normal z-[2]  transition-all ease-out hover:text-[#EBE9E3] cursor-default ">
              {text}
              <span className={className}>{text2}</span>
            </p>
            <div className="pt-[50px]">
              <h5 className="leading-[1.1em] pb-[0.125rem] text-black text-[1.4rem] uppercase">
                {title}
              </h5>
              <h5 className="text-[#747474] leading-[1.6em] text-[1.1rem] uppercase">
                {title2}
              </h5>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TestamonialText;

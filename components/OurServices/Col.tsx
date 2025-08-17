import React from "react";
import Image from "next/image";
import Illustration from "@/public/illustration3.png";

function Col() {
  return (
    <section className="text-[#F8F6F0]">
      <div className="container mx-auto">
        <div className="grid grid-cols-12 gap-1">
          <div className="col-span-12 md:col-span-12 ">
            <h2 className="text-[#F8F6F1] text-[1rem] md:text-[2rem] font-medium text-center justify-center mx-auto w-full md:w-[70%] pt-[5rem]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
              commodi, reiciendis magnam
            </h2>
          </div>
          <div className="col-span-12 md:col-span-6 pt-[3rem] md:pt-[10rem]">
            <h4 className="text-[1.3rem] md:text-[2rem] leading-[1.1em] text-center md:text-start font-semibold pb-[2rem]">
              {" "}
              Strategy & Planning
            </h4>
            <p className="text-[0.9rem] md:text-[1rem]  text-center md:text-start w-full md:w-[80%] leading-[1.6em] font-normal">
              Success starts with a solid plan. We dive deep into your brand,
              market, and goals to create a data-driven strategy that sets the
              foundation for long-term growth. From competitor analysis and
              customer insights to campaign roadmaps and KPIs—we build a clear,
              actionable path that ensures every marketing move has purpose and
              impact.
            </p>
          </div>
          <div className="col-span-12 md:col-span-6 pt-[3rem] text-center justify-center mx-auto">
            <Image
              src={Illustration}
              width={450}
              height={450}
              alt="illustration"
            />
          </div>
          <div className="col-span-12 md:col-span-6 pt-[3rem] ">
            <Image
              src={Illustration}
              width={450}
              height={450}
              alt="illustration"
            />
          </div>
          <div className="col-span-12 md:col-span-6 pt-[10rem] ml-[0] md:ml-[7rem] ">
            <h4 className="text-[1.3rem] md:text-[2rem] leading-[1.1em] text-center md:text-start font-semibold pb-[2rem]">
              {" "}
              Strategy & Planning
            </h4>
            <p className="text-[0.9rem] md:text-[1rem]  text-center md:text-start w-full md:w-[80%] leading-[1.6em] font-normal">
              Success starts with a solid plan. We dive deep into your brand,
              market, and goals to create a data-driven strategy that sets the
              foundation for long-term growth. From competitor analysis and
              customer insights to campaign roadmaps and KPIs—we build a clear,
              actionable path that ensures every marketing move has purpose and
              impact.
            </p>
          </div>
          <div className="col-span-12 md:col-span-6 pt-[10rem]">
            <h4 className="text-[1.3rem] md:text-[2rem] leading-[1.1em] text-center md:text-start font-semibold pb-[2rem]">
              {" "}
              Strategy & Planning
            </h4>
            <p className="text-[0.9rem] md:text-[1rem]  text-center md:text-start w-full md:w-[80%] leading-[1.6em] font-normal">
              Success starts with a solid plan. We dive deep into your brand,
              market, and goals to create a data-driven strategy that sets the
              foundation for long-term growth. From competitor analysis and
              customer insights to campaign roadmaps and KPIs—we build a clear,
              actionable path that ensures every marketing move has purpose and
              impact.
            </p>
          </div>
          <div className="col-span-12 md:col-span-6 pt-[3rem] text-center justify-center mx-auto">
            <Image
              src={Illustration}
              width={450}
              height={450}
              alt="illustration"
            />
          </div>
          <div className="col-span-12 md:col-span-6 pt-[3rem] ">
            <Image
              src={Illustration}
              width={450}
              height={450}
              alt="illustration"
            />
          </div>
          <div className="col-span-12 md:col-span-6 pt-[10rem] ml-[0] md:ml-[7rem]">
            <h4 className="text-[1.3rem] md:text-[2rem] leading-[1.1em] text-center md:text-start font-semibold pb-[2rem]">
              {" "}
              Strategy & Planning
            </h4>
            <p className="text-[0.9rem] md:text-[1rem] text-center md:text-start w-full md:w-[90%] leading-[1.6em] font-normal">
              Success starts with a solid plan. We dive deep into your brand,
              market, and goals to create a data-driven strategy that sets the
              foundation for long-term growth. From competitor analysis and
              customer insights to campaign roadmaps and KPIs—we build a clear,
              actionable path that ensures every marketing move has purpose and
              impact.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Col;

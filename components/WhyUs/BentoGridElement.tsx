import React from "react";
import Ilustration from "@/public/illustration2.png";
import Image from "next/image";
import arrow from "@/public/arrow2.png";

function BentoGridElement() {
  return (
    <section className="pt-[5rem]">
      <div className="container mx-auto">
        <div className="grid grid-cols-12 gap-1">
          <div className="col-span-12 md:col-span-3 border-2   border-[#214130] hover:border-[#86B4BB] transition-colors duration-500 ease-[cubic-bezier(0.4, 0, 0.2, 1)] rounded-[0.5rem] pt-[4rem] pr-[1rem] pl-[2rem] pb-[4rem] text-start mr-[1rem] md:mr-[0px] ml-[1rem] md:ml-[0px]">
            <h3 className="md:text-[1.2em] font-medium leading-[1.6em] mb-[0.5rem]">
              Productize your Expertise
            </h3>
            <p className="text-[0.9rem] w-[90%]">
              Choose a way to turn your knowledge into a digital product, such
              as an eBook, video course, membership group, cohort, etc.
            </p>
          </div>
          <div className="col-span-12 md:col-span-6 border-2 ml-[0.2rem] mr-[0.2rem]  border-[#214130] hover:border-[#86B4BB] transition-colors duration-500 ease-[cubic-bezier(0.4, 0, 0.2, 1)] rounded-[0.5rem] pt-[4rem] pr-[1rem] pl-[2rem] pb-[4rem] text-start  mr-[1rem] md:mr-[0px] ml-[1rem] md:ml-[0px]">
            <h5 className="text-[1.2rem] font-thin leading-[1.6em] mb-[0.5rem] text-center">
              The 4 Core Pillars of Our Partnership
            </h5>
          </div>
          <div className="col-span-12 md:col-span-3 border-2   border-[#214130] hover:border-[#86B4BB] transition-colors duration-500 ease-[cubic-bezier(0.4, 0, 0.2, 1)] rounded-[0.5rem] pt-[4rem] pr-[1rem] pl-[2rem] pb-[4rem] text-start  mr-[1rem] md:mr-[0px] ml-[1rem] md:ml-[0px]">
            <h3 className="text-[1.2rem] font-medium leading-[1.6em] mb-[0.5rem]">
              Build and Grow Personal Brand
            </h3>
            <p className="text-[0.9rem] w-[90%]">
              Produce content that shows who you are and what experience you
              have. Be consistent and establish yourself as an authority.
            </p>
          </div>
          <div className="col-span-12 md:col-span-6 border-2 flex flex-col md:flex-row   border-[#214130] hover:border-[#86B4BB] transition-colors duration-500 ease-[cubic-bezier(0.4, 0, 0.2, 1)] rounded-[0.5rem] pt-[4rem] pr-[1rem] pl-[2rem] pb-[4rem] text-start mt-[0.2rem]  mr-[1rem] md:mr-[0px] ml-[1rem] md:ml-[0px]">
            <Image
              src={Ilustration}
              width={800}
              height={800}
              alt="ilustratjon"
            />
            <div className="flex flex-col pt-[3rem]">
              <h3 className="text-[1.3rem] text-start font-medium leading-[1.6em] mb-[0.5rem]">
                Make money while you sleep
              </h3>
              <p className="text-[0.9rem] w-[90%]">
                Let automation handle your sales while you sleep. Focus on
                staying engaged and consistently creating valuable content for
                your audience.
              </p>
            </div>
          </div>
          <div className="col-span-12 md:col-span-6 border-2 flex flex-col md:flex-row   border-[#214130] hover:border-[#86B4BB] transition-colors duration-500 ease-[cubic-bezier(0.4, 0, 0.2, 1)] rounded-[0.5rem] pt-[4rem] pr-[1rem] pl-[2rem] pb-[4rem] text-start mt-[0.2rem]  mr-[1rem] md:mr-[0px] ml-[1rem] md:ml-[0px]">
            <Image
              src={Ilustration}
              width={800}
              height={800}
              alt="ilustratjon"
            />
            <div className="flex flex-col pt-[3rem]">
              <h3 className="text-[2rem] text-start font-medium leading-[1.6em] mb-[0.5rem]">
                Lorem
              </h3>
              <p className="text-[0.9rem] w-[90%]">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Expedita, consequuntur porro. Odio, atque ipsa! Consequuntur ea
                at explicabo, reprehenderit suscipit optio numquam blanditiis
                est libero voluptatibus impedit non quidem a?
              </p>
            </div>
          </div>
          <div className="col-span-12 md:col-span-12 border-2 border-[#214130] hover:border-[#86B4BB] transition-colors duration-500 ease-[cubic-bezier(0.4, 0, 0.2, 1)] rounded-[0.5rem] pt-[4rem] pr-[1rem] pl-[2rem] pb-[4rem] text-start mt-[0.2rem] ml-[1rem] md:ml-[0px]  mr-[1rem] md:mr-[0px]">
            <h3 className="text-[1.5rem] md:text-[2rem] font-medium leading-[1.6em] mb-[0.5rem] text-center">
              Lorem ipsum, dolor sit amet consectetur
            </h3>
            <div className="text-center justify-center mx-auto pt-[1rem]">
              <button className="bg-[#214130] pr-[2rem] md:pr-[6rem] pl-[2rem] md:pl-[6rem] pt-[1rem] pb-[1rem] rounded-[0.5rem] text-[#F8F6F1] text-[1rem] md:text-[1.2rem] font-bold uppercase">
                Get Started
              </button>
            </div>
          </div>
        </div>
        <div className="pt-[1rem] ml-[4.5rem] md:ml-[4.5rem]">
          <Image
            src={arrow}
            width={120}
            height={120}
            alt="arrow"
            className="text-center justify-center mx-auto"
          />
        </div>
      </div>
    </section>
  );
}

export default BentoGridElement;

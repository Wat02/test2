import React from "react";
import RightText from "./RightText";
import Ui from "@/public/HeroImg.jpg";
import Image from "next/image";
import WhoForyou from "@/components/OurFor/WhyForyou";

function ForWhoStru() {
  return (
    <section className="pt-[10rem] mr-[1rem] ml-[1rem] md:mr-[1rem] md:ml-[1rem]">
      <div className="container mx-auto">
        <div className="grid grid-cols-12 gap-1">
          <div className="col-span-12 md:col-span-12">
            <h2 className="text-[2rem] md:text-[5rem] font-semibold leading-[1.1em] uppercase">
              Right?
            </h2>
            <p className="mt-[1rem] w-full md:w-[45%] text-[0.9rem] md:text-[1.1rem] leading-[1.6em] font-medium">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
              libero corporis error sint expedita iusto eius fuga iste doloribus
              optio accusamus temporibus quae asperiores veritatis dolores
              earum, dignissimos incidunt ea!
            </p>
          </div>
          <div className="col-span-12 md:col-span-4 pt-[1rem] md:pt-[1.5rem]">
            <RightText
              text="Youve built something great, but growth feels slow and unpredictable. Well plug in proven strategies and content systems to help you scale faster—with less guesswork."
              title="Startup Founders"
              emoji="🚀"
            />
          </div>
          <div className="col-span-12 md:col-span-4 pt-[1.5rem]">
            <RightText
              text="You wear all the hats, and marketing keeps falling to the bottom of the list. We take it off your plate completely—so you can focus on what you do best."
              title="Business Owners"
              emoji="🧑‍💼"
            />
          </div>
          <div className="col-span-12 md:col-span-4 pt-[1.5rem]">
            <RightText
              text="Youve built something great, but growth feels slow and unpredictable. Well plug in proven strategies and content systems to help you scale faster—with less guesswork."
              title="Content Creators & Influencers"
              emoji="🚀"
            />
          </div>
          <div className="col-span-12 md:col-span-4 pt-[1.5rem]">
            <RightText
              text="Youve built something great, but growth feels slow and unpredictable. Well plug in proven strategies and content systems to help you scale faster—with less guesswork."
              title="Coaches & Course Creators"
              emoji="🚀"
            />
          </div>
          <div className="col-span-12 md:col-span-4 pt-[1.5rem]">
            <RightText
              text="You wear all the hats, and marketing keeps falling to the bottom of the list. We take it off your plate completely—so you can focus on what you do best."
              title="Marketing Teams"
              emoji="🧑‍💼"
            />
          </div>
          <div className="col-span-12 md:col-span-4 pt-[1.5rem]">
            <RightText
              text="Youve built something great, but growth feels slow and unpredictable. Well plug in proven strategies and content systems to help you scale faster—with less guesswork."
              title="Agencies & Freelancers"
              emoji="🚀"
            />
          </div>
          <div className="col-span-12 pt-[2rem] md:pt-[4rem] bg-no-repeat bg-contain pb-[2rem] md:pb-[6rem] ">
            <div className="flex justify-center items-center ">
              <Image
                src={Ui}
                height={1500}
                width={1500}
                alt="team"
                className="rounded-[20px] pr-[0rem] pl-[0rem] md:pr-[1rem] md:pl-[1rem]"
              />
            </div>
            <WhoForyou />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ForWhoStru;

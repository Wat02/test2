import React from "react";
import { PlaceholdersAndVanishInputDemo } from "./Placeholders";
import Ui from "@/public/HeroImg.jpg";
import Image from "next/image";
import { getTranslations } from "next-intl/server";

async function HeroSection() {
  const t = await getTranslations("HomePage");
  return (
    <section className="pt-[5rem] bg-[#F9F6F2]">
      <div className="container mx-auto ">
        <div className="grid grid-cols-12 gap-1">
          <div className="col-span-12 md:col-span-12 mb-[2rem]">
            <h1 className="text-[2.2rem] md:text-[5rem] leading-[1.3em] justify-center mx-auto text-center w-[100%] text-[#214130] font-medium uppercase tracking-[-.05em] ">
              {t("FirstHeroH1")}
              <span className="relative  text-[0%] md:text-[75%] leading-[0] items-baseline top-[-.5em] left-[-.2em] text-[#86b4bb]">
                {" "}
                *
              </span>
            </h1>
            <h1 className="text-[2.2rem] md:text-[5rem] leading-[.94] justify-center mx-auto text-center w-[100%] text-[#214130] font-medium uppercase tracking-[-.05em] -ml-0 md:-ml-4">
              {t("SecondHeroH1")}
            </h1>
            <p className="mx-auto justify-center text-center w-full md:w-[50%] mt-[1rem] font-medium leading-[1.2em] text-[0.9rem] md:text-[1.2rem] text-[#605e5e]">
              {t("HeroP")}
            </p>

            <div className="justify-center text-center mx-auto mt-[2rem] ">
              <PlaceholdersAndVanishInputDemo />
            </div>
            <div className="flex flex-row gap-1 md:gap-3 justify-center mx-auto text-center mt-[1rem]">
              <p className="text-[0.9rem] font-medium leading-[1.2em]">
                {" "}
                {t("InputText1")}
              </p>
              <p className="text-[0.9rem] font-medium leading-[1.3em]">
                {t("InputText2")}
              </p>
            </div>
            <div className="col-span-12 pt-[2rem] md:pt-[4rem] bg-no-repeat bg-contain pb-[2rem] md:pb-[6rem] ">
              <div className="flex justify-center items-center ">
                <Image
                  src={Ui}
                  height={1500}
                  width={1500}
                  alt="team"
                  className="rounded-[20px] pr-[1rem] pl-[1rem] md:pr-[1rem] md:pl-[1rem]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;

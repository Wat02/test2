import Image from "next/image";
import React from "react";
import Illustration from "@/public/illustration4.png";
import Illustration2 from "@/public/illustration5.png";

function FirstText() {
  return (
    <section>
      <div className="containe mx-auto">
        <div className="grid grid-cols-12 gap-1">
          <div className="col-span-12 md:col-span-12">
            <h2 className="text-center justify-center mx-auto text-[1.5rem] md:text-[2.5rem] leading-[1.6em] md:leading-[1.3em] w-full md:w-[70%] font-medium underline underline-offset-8 decoration-4 underline-[#214130] ">
              Making real growth happen online? Its way harder than you think.
              Still with me so far?{" "}
            </h2>
            <div>
              <Image
                src={Illustration}
                width={800}
                height={800}
                alt="illustration"
                className="text-center justify-center mx-auto"
              />
            </div>
            <h2 className="text-center justify-center mx-auto text-[2rem] md:text-[3rem] leading-[1.1em] w-full md:w-[60%] font-semibold pt-[4rem] uppercase">
              We do it all—so you dont have to.
            </h2>
            <p className="text-center justify-center mx-auto w-full md:w-[50%] pt-[1rem] pb-[1rem] font-medium text-[0.9rem] md:text-[1.2rem] leading-[1.6em] pr-[1rem] pl-[1rem]  md:pr-[0rem] md:pl-[0rem]">
              The world needs more educators—people who have valuable knowledge
              and a passion to share it. Our mission? To help as many
              high-quality educators as possible claim their place and become
              the number one authority in their niche. Do you see yourself as
              one of them?
            </p>
            <p className="text-center justify-center mx-auto w-full md:w-[50%] pt-[1rem] pb-[2rem] md:pb-[4rem] font-normal text-[0.8rem] md:text-[1rem] leading-[1.6em] pr-[1rem] pl-[1rem]  md:pr-[0rem] md:pl-[0rem]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
              exercitationem suscipit! Laboriosam doloribus, similique vel ab,
              dignissimos quaerat consequuntur reiciendis fuga porro eos,
              inventore voluptate et enim aperiam consectetur culpa.
            </p>
            <h3 className="text-center justify-center mx-auto pb-[2rem] text-[1.2rem] font-semibold leading-[1.6em] underline underline-offset-8 ">
              No more woring about
            </h3>
            <div>
              <Image
                src={Illustration2}
                width={1000}
                height={1000}
                alt="illustration"
                className="text-center justify-center mx-auto pb-[5rem]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FirstText;

import React from "react";
import Ui from "@/public/HeroImg.jpg";
import Image from "next/image";

function How() {
  const steps = [
    "access",
    "step two",
    "step three",
    "step four",
    "step five",
    "step six",
  ];

  return (
    <section className="pt-[5rem] bg-[#F9F6F2] pb-[5rem]">
      <div className="container mx-auto">
        <div className="grid grid-cols-12 gap-1">
          <div className="col-span-12 md:col-span-12">
            <h4 className="text-[2rem] md:text-[4rem]">How</h4>
          </div>

          <div className="col-span-12 pt-[2rem] md:pt-[1rem] bg-no-repeat bg-contain pb-[2rem] md:pb-[2rem]">
            <div className="flex justify-center items-center">
              <Image
                src={Ui}
                height={1500}
                width={1500}
                alt="team"
                className="rounded-[20px] pr-[1rem] pl-[1rem] md:pr-[1rem] md:pl-[1rem]"
              />
            </div>
          </div>

          <div className="col-span-12 md:col-span-6">
            <h4 className="text-[1rem] md:text-[1.3rem] leading-[1.6em] font-medium">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam
              commodi animi aperiam explicabo unde, excepturi, quibusdam
              voluptatem labore totam perferendis iusto facilis inventore
              deleniti atque veniam facere dolores eos nam!
            </h4>
          </div>

          <div className="col-span-12 md:col-span-6 ml-[1rem] md:ml-[5rem] gap-3">
            <p className="w-full md:w-[90%] text-[1.1rem] pb-[0.5rem] leading-[1.6em] font-medium">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur
              aliquam error minima deserunt architecto quas adipisci, cum
              exercitationem. Praesentium aut facere voluptatibus dolorem dolor
              recusandae et. Delectus obcaecati repellat quas.
            </p>
            <p className="w-[90%] text-[1.1rem] pb-[1rem] pt-[1rem] leading-[1.6em] font-medium">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur
              aliquam error minima deserunt architecto quas adipisci, cum
              exercitationem. Praesentium aut facere voluptatibus dolorem dolor
              recusandae et. Delectus obcaecati repellat quas.
            </p>
            <p className="w-[90%] text-[1.1rem] pb-[0.5rem] leading-[1.6em] font-medium">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur
              aliquam error minima deserunt architecto quas adipisci, cum
              exercitationem. Praesentium aut facere voluptatibus dolorem dolor
              recusandae et. Delectus obcaecati repellat quas.
            </p>
          </div>

          {steps.map((step, index) => (
            <div
              key={index}
              className="col-span-12 md:col-span-4 pt-[5rem] relative"
            >
              <div className="absolute text-[6rem] md:text-[8rem] font-extrabold text-[#e0dcd7] top-0 left-0 z-0 leading-none pointer-events-none">
                {index + 1}
              </div>

              <div className="relative z-10">
                <h4 className="text-[1.5rem] pb-[1rem] capitalize">{step}</h4>
                <p className="w-[80%] text-[1rem] leading-[1.6em]">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Itaque facilis consectetur, repudiandae similique adipisci
                  nemo aut sequi nostrum perferendis quibusdam
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default How;

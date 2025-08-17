import React from "react";
import ChartAreaStackedExpand from "./BentonNumbers";

function mainNumbers() {
  return (
    <section className="pt-[7rem] mr-[1rem] ml-[1rem]">
      <div className="container mx-auto">
        <div className="grid grid-cols-12 gap-1">
          <div className="col-span-12 md:col-span-12">
            <h4 className="text-[2rem] md:text-[4.5rem] uppercase">Numbers</h4>
            <p className="mt-[0.5rem] w-full md:w-[45%] text-[0.9rem] md:text-[1.1rem] leading-[1.6em] font-medium">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Perferendis nesciunt maiores a ullam qui inventore excepturi quae
              numquam, possimus aspernatur, omnis modi dolore doloremque
              deserunt exercitationem ex dicta veniam delectus!
            </p>
          </div>
          <div className="col-span-12 md:col-span-12">
            <ChartAreaStackedExpand />
          </div>
        </div>
      </div>
    </section>
  );
}

export default mainNumbers;

import React from "react";
import BentoGridElement from "./BentoGridElement";

function BentoGrid() {
  return (
    <section>
      <div className="container mx-auto">
        <div className="grid grid-cols-12 gap-1">
          <div className="col-span-12 md:col-span-6">
            <h2 className="text-[2rem] md:text-[3rem] ml-[1rem] uppercase font-semibold leading-[1.6em] pt-[4%]">
              Why us?
            </h2>
          </div>
          <div className="col-span-12 md:col-span-6">
            <p className="text-[0.9rem] md:text-[1.1rem]  ml-[1rem] font-normal w-[90%] md:w-full leading-[1.6em]">
              We don’t connect highways — we connect you with your ideal
              audience. A network of potential clients. A gold mine of
              opportunity. What is Kliker? We’re a Direct-Response Personal
              Brand Agency. (Don’t worry if that sounds technical — your
              competitors will understand it, but you just need to focus on what
              really matters: results.)
              <span className="text-[1.3rem] font-bold">
                {" "}
                What results? More leads More revenue More free time More love
                and quality moments with your family And much more.
              </span>
            </p>
          </div>
          <div className="col-span-12 md:col-span-12">
            <BentoGridElement />
          </div>
        </div>
      </div>
    </section>
  );
}

export default BentoGrid;

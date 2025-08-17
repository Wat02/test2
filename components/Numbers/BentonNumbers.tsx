import React from "react";
import { ChartAreaInteractive } from "@/components/ui/component/chart";
import { ChartBarDefault } from "@/components/ui/component/Bar130";
import { ChartPieSimple } from "@/components/ui/piechart";
import { ChartLineDefault } from "@/components/ui/linechart";

function BentonNumbers() {
  return (
    <section>
      <div className="container mx-auto">
        <div className="grid grid-cols-12 gap-1">
          <div className="col-span-12 md:col-span-4">
            <div className="pb-[2rem] mt-[2rem] rounded-[1rem] mr-[0.5rem]">
              <ChartBarDefault />
            </div>
          </div>
          <div className="col-span-12 md:col-span-4">
            <div className=" pb-[2rem] mt-[2rem] rounded-[1rem] mr-[0.5rem]">
              <ChartLineDefault />
            </div>
          </div>
          <div className="col-span-12 md:col-span-4">
            <div className="pb-[2rem] mt-[2rem] rounded-[1rem] mr-[0.5rem]">
              <ChartPieSimple />
            </div>
          </div>
          <div className="col-span-12 md:col-span-12">
            <div className=" rounded-[1rem] mr-[0.5rem] md:mr-[0]">
              <ChartAreaInteractive />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BentonNumbers;

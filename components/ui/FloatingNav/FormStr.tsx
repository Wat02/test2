import React from "react";
import Form from "../Form";

function FormStr() {
  return (
    <section className="text-[#F8F6F0]">
      <div className="container mx-auto">
        <div className="grid grid-cols-12 gap-1">
          <div className="col-span-12 md:col-span-6">
            <h2 className="text-[3rem] leading-[1.3em] font-semibold uppercase pt-[3rem]">
              Lets work together?
            </h2>
            <p className="w-[75%] pt-[1rem] text-[1.1rem] leading-[1.6em]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit, harum doloribus explicabo recusandae eaque
            </p>
            <div className="flex flex-row gap-8 pt-[1rem]">
              <div>
                <h4>give us a call</h4>
                <p>+1 415 867 5309</p>
              </div>
              <div>
                <h4>give us a call</h4>
                <p>+1 415 867 5309</p>
              </div>
              <div>
                <h4>give us a call</h4>
                <p>+1 415 867 5309</p>
              </div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-6">
            <Form />
          </div>
        </div>
      </div>
    </section>
  );
}

export default FormStr;

import React from "react";

function RightText({
  text,
  title,
  emoji,
}: {
  text: string;
  title: string;
  emoji: string;
}) {
  return (
    <section>
      <div className="container mx-auto">
        <div className="grid grid-cols-12 gap-1">
          <div className="col-span-12 pt-[3rem] md:pt-[5rem]">
            <p className="text-[3em]">{emoji}</p>
            <h4 className="text-[1.4rem] md:text-[1.3rem] leading-[1.6em] font-semibold pt-[0] md:pt-[20px] pb-[0] md:pb-[15px] ">
              {title}
            </h4>
            <p className=" w-full md:w-[80%] text-[1rem] leading-[1.6em] font-medium text-[#747474]">
              {text}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RightText;

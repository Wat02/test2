"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Banner() {
  const [visible, setVisible] = useState(true);

  return (
    <AnimatePresence>
      {visible && (
        <motion.section
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.3 } }}
          className="pt-[1.2rem] bg-[#214130] pb-[1.2rem] relative"
        >
          <div className="container mx-auto">
            <div className="grid grid-cols-12 gap-1 items-center">
              <div className="col-span-12 md:col-span-12 text-center">
                <div className="flex flex-row">
                  <div className=" justify-center text-center mx-auto">
                    <h4 className="text-white text-[0.9rem] md:text-[1.1rem] leading-[1.1em] font-medium">
                      Click here and get free book
                    </h4>
                  </div>
                  <div className=" justify-end items-center mr-[1rem]">
                    <button
                      onClick={() => setVisible(false)}
                      className="text-white font-bold text-xl leading-none focus:outline-none"
                      aria-label="Close banner"
                    >
                      x
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>
      )}
    </AnimatePresence>
  );
}

export default Banner;

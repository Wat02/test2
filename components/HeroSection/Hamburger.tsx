"use client";

import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { Example } from "./Navigation";
import LocaleSwitcher from "../ui/component/LocaleSwitcher";

const overlayVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3 } },
};

const liquidVariants: Variants = {
  initial: { scaleY: 0 },
  animate: { scaleY: 1, transition: { duration: 0.4, ease: "easeInOut" } },
  exit: { scaleY: 0, transition: { duration: 0.3, ease: "easeInOut" } },
};

export default function LiquidSideNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {!isOpen && (
        <button
          aria-label="Open Menu"
          className="text-black z-50"
          onClick={() => setIsOpen(true)}
        >
          <Example />
        </button>
      )}

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-[#F8F6F1] z-40"
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <motion.div
              className="absolute inset-0 bg-[#F8F6F1] origin-top scale-y-0"
              variants={liquidVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            />

            <div className="text-start justify-start mx-auto pl-[5%]">
              <button
                aria-label="Close Menu"
                className="absolute top-6 right-6 text-black text-3xl"
                onClick={() => setIsOpen(false)}
              >
                ✕
              </button>
              <div className="pt-[5rem]">
                <h3 className="text-[1.5rem] md:text-[2.5rem] font-medium leading-[1.6em] text-center md:text-start pb-[1.5rem] md:pb-[0] uppercase">
                  Why Us?
                </h3>
                <h3 className="text-[1.5rem] md:text-[2.5rem] font-medium leading-[1.6em]  text-center md:text-start pb-[1.5rem] md:pb-[0]  uppercase">
                  Our Services
                </h3>
                <h3 className="text-[1.5rem] md:text-[2.5rem] font-medium leading-[1.6em]  text-center md:text-start pb-[1.5rem] md:pb-[0]   uppercase">
                  Testimonial
                </h3>
                <h3 className="text-[1.5rem] md:text-[2.5rem] font-medium leading-[1.6em]  text-center md:text-start pb-[1.5rem] md:pb-[0]   uppercase">
                  Contact Us
                </h3>

                <LocaleSwitcher />
                <div className="pt-[1rem] text-center md:text-start justify-center md:justify-start">
                  <button className="pt-[1rem] pb-[1rem] pr-[5.5rem] font-bold pl-[5.5rem] bg-[#214130] rounded-[10rem] text-[#FFFFFF] text-[1.5rem] leading-[1.1em]">
                    Lets Talk
                  </button>
                  <h4 className="text-[1rem] font-normal leading-[1.6em] pt-[3rem] uppercase">
                    Say Hello
                  </h4>
                  <p className="text-[0.9rem] md:text-[1.4rem]  font-medium leading-[1.6em] pt-[1rem]">
                    +1 415 867 5309
                  </p>
                  <p className="text-[0.9rem] md:text-[1.4rem] font-medium leading-[1.6em] ">
                    Example@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

"use client";

import Image, { StaticImageData } from "next/image";
import React, { useEffect, useRef, useState } from "react";
import {
  motion,
  AnimatePresence,
  useSpring,
  useTransform,
} from "framer-motion";
import type { Variants, Target } from "framer-motion";

import marketingImage from "@/public/marketing.jpg";

type Metric = {
  label: string;
  value: string;
};

type TestimonialType = {
  company: string;
  image: StaticImageData;
  quote: string;
  highlight: string;
  metrics: Metric[];
};

const testimonials: TestimonialType[] = [
  {
    company: "TetraFlow",
    image: marketingImage,
    quote:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero rem beatae, similique voluptatum obcaecati veritatis nemo dolores. Minus repellendus rerum expedita iusto atque ipsam voluptates tempore itaque, sunt non eos.",
    highlight: "Totam laborum perferendis aut nisi modi.",
    metrics: [
      { label: "Increased traffic", value: "150%" },
      { label: "Conversion rate", value: "3.4x" },
    ],
  },
  {
    company: "NovaX",
    image: marketingImage,
    quote:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero rem beatae, similique voluptatum obcaecati veritatis nemo dolores. Minus repellendus rerum expedita iusto atque ipsam voluptates tempore itaque, sunt non eos.",
    highlight: "Massive 200% boost in engagement.",
    metrics: [
      { label: "Engagement boost", value: "200%" },
      { label: "User Retention", value: "89%" },
    ],
  },
  {
    company: "AlphaCore",
    image: marketingImage,
    quote: "Their strategy changed our growth game.",
    highlight: "Revenue doubled in 6 months.",
    metrics: [
      { label: "Revenue", value: "2x" },
      { label: "Customer base", value: "3.1x" },
    ],
  },
];

const slideVariants: Variants = {
  enter: (direction: number): Target => ({
    opacity: 0,
    x: direction > 0 ? 120 : -120,
    y: 40,
    scale: 0.9,
    rotateY: direction > 0 ? 15 : -15,
    filter: "blur(8px)",
  }),
  center: {
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
    rotateY: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94],
      opacity: { duration: 0.6 },
      filter: { duration: 0.6 },
    },
  },
  exit: (direction: number): Target => ({
    opacity: 0,
    x: direction < 0 ? 120 : -120,
    y: -40,
    scale: 0.9,
    rotateY: direction < 0 ? 15 : -15,
    filter: "blur(8px)",
  }),
};

const mobileSlideVariants: Variants = {
  enter: (direction: number): Target => ({
    opacity: 0,
    y: direction > 0 ? 60 : -60,
    scale: 0.95,
    filter: "blur(4px)",
  }),
  center: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
  exit: (direction: number): Target => ({
    opacity: 0,
    y: direction < 0 ? 60 : -60,
    scale: 0.95,
    filter: "blur(4px)",
  }),
};

const imageVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
    rotateY: -20,
    y: 50,
    filter: "blur(10px)",
  },
  visible: {
    opacity: 1,
    scale: 1,
    rotateY: 0,
    y: 0,
    filter: "blur(0px)",
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 25,
      duration: 1,
      delay: 0.2,
    },
  },
  hover: {
    scale: 1.02,
    rotateY: 2,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20,
    },
  },
};

const mobileImageVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.9,
    y: 30,
    filter: "blur(6px)",
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
  hover: {
    scale: 1.01,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

const contentVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
    scale: 0.98,
    filter: "blur(2px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 25,
      duration: 0.5,
    },
  },
};

const quoteVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.98,
    y: 15,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 20,
      duration: 0.6,
    },
  },
};

const highlightVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.95,
    backgroundColor: "#214130",
  },
  visible: {
    opacity: 1,
    scale: 1,
    backgroundColor: "#214130",
    transition: {
      duration: 0.5,
      delay: 0.6,
      backgroundColor: {
        duration: 0.3,
        delay: 0.8,
      },
    },
  },
};

const CounterAnimation: React.FC<{ value: string; delay: number }> = ({
  value,
  delay,
}) => {
  const [displayValue, setDisplayValue] = useState("0");
  const isNumber = /^\d+/.test(value);

  useEffect(() => {
    if (!isNumber) {
      setTimeout(() => setDisplayValue(value), delay * 1000);
      return;
    }

    const numericValue = parseInt(value);
    const timer = setTimeout(() => {
      let current = 0;
      const increment = numericValue / 20;
      const counter = setInterval(() => {
        current += increment;
        if (current >= numericValue) {
          setDisplayValue(value);
          clearInterval(counter);
        } else {
          setDisplayValue(Math.floor(current) + value.replace(/^\d+/, ""));
        }
      }, 40);
    }, delay * 1000);

    return () => clearTimeout(timer);
  }, [value, delay, isNumber]);

  return <span>{displayValue}</span>;
};

const metricVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.9,
    rotateX: -10,
  },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    rotateX: 0,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 20,
      delay: 0.4 + i * 0.15,
      duration: 0.6,
    },
  }),
  hover: {
    y: -5,
    scale: 1.02,
    boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 25,
    },
  },
};

const indicatorVariants: Variants = {
  inactive: {
    scale: 1,
    backgroundColor: "#9CA3AF",
  },
  active: {
    scale: 1.2,
    backgroundColor: "#000000",
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20,
    },
  },
};

const buttonVariants: Variants = {
  rest: {
    scale: 1,
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
  },
  hover: {
    scale: 1.02,
    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.15)",
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 25,
    },
  },
  tap: {
    scale: 0.98,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 25,
    },
  },
};

const useResponsive = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      setIsMobile(window.innerWidth < 768);
      setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1024);
    };

    checkDevice();
    window.addEventListener("resize", checkDevice);
    return () => window.removeEventListener("resize", checkDevice);
  }, []);

  return { isMobile, isTablet };
};

const Testimonial: React.FC = () => {
  const [[index, direction], setIndex] = useState<[number, number]>([0, 0]);
  const [isPaused, setIsPaused] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const { isMobile } = useResponsive();

  const progress = useSpring(0, { stiffness: 100, damping: 30 });
  const progressWidth = useTransform(progress, [0, 1], ["0%", "100%"]);

  const paginate = (newDirection: number) => {
    setIndex(([prev]) => [
      (prev + newDirection + testimonials.length) % testimonials.length,
      newDirection,
    ]);
    progress.set(0);
  };

  useEffect(() => {
    const autoAdvanceTime = isMobile ? 8000 : 6000;

    if (!isPaused) {
      progress.set(1);
      timeoutRef.current = setTimeout(() => {
        paginate(1);
      }, autoAdvanceTime);
    } else {
      progress.stop();
    }
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [index, isPaused, progress, isMobile]);

  const current = testimonials[index];

  const currentSlideVariants = isMobile ? mobileSlideVariants : slideVariants;
  const currentImageVariants = isMobile ? mobileImageVariants : imageVariants;

  return (
    <section className="pt-16 sm:pt-20 md:pt-32 lg:pt-40 bg-[#F9F6F2] overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="pb-8 sm:pb-12 md:pb-16 lg:pb-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 20,
            duration: 0.8,
          }}
        >
          <h4 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight font-semibold bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent px-4">
            World class clients
          </h4>

          <div className="w-20 sm:w-24 md:w-32 h-1 bg-gray-300 rounded-full mx-auto mt-4 sm:mt-6 overflow-hidden">
            <motion.div
              className="h-full bg-black rounded-full"
              style={{ width: progressWidth }}
            />
          </div>
        </motion.div>

        <div
          className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center min-h-[400px] sm:min-h-[500px] lg:min-h-[600px]"
          onMouseEnter={() => !isMobile && setIsPaused(true)}
          onMouseLeave={() => !isMobile && setIsPaused(false)}
        >
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={index}
              custom={direction}
              variants={currentSlideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="col-span-1 lg:col-span-12 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8"
              drag={!isMobile ? "x" : false}
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.4}
              whileDrag={!isMobile ? { scale: 0.98 } : {}}
              onDragEnd={(_, info) => {
                if (!isMobile) {
                  if (info.offset.x < -100) paginate(1);
                  else if (info.offset.x > 100) paginate(-1);
                }
              }}
            >
              <motion.div
                key={`image-${index}`}
                variants={currentImageVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                className="col-span-1 lg:col-span-5 perspective-1000 order-2 lg:order-1"
              >
                <div className="relative group max-w-sm mx-auto lg:max-w-none">
                  <motion.div
                    className="absolute -inset-2 sm:-inset-3 lg:-inset-4 bg-[#214130] rounded-xl lg:rounded-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-300"
                    animate={{
                      rotate: [0, 0.5, 0],
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                  <Image
                    src={current.image}
                    width={1000}
                    height={1000}
                    alt={current.company}
                    className="rounded-lg lg:rounded-xl object-cover relative z-10 shadow-xl lg:shadow-2xl w-full"
                    sizes="(max-width: 768px) 90vw, (max-width: 1024px) 50vw, 40vw"
                    priority={true}
                  />
                </div>
              </motion.div>

              <motion.div
                key={`content-${index}`}
                variants={contentVariants}
                initial="hidden"
                animate="visible"
                className="col-span-1 lg:col-span-7 pt-4 sm:pt-6 lg:pt-8 lg:ml-8 order-1 lg:order-2"
              >
                <motion.h3
                  variants={itemVariants}
                  className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold bg-black bg-clip-text text-transparent text-center lg:text-left"
                >
                  {current.company}
                </motion.h3>

                <motion.div
                  variants={quoteVariants}
                  className="mt-4 sm:mt-6 lg:mt-8 border-2 border-gray-100 p-4 sm:p-5 lg:p-6 rounded-lg lg:rounded-xl text-sm sm:text-base lg:text-lg leading-relaxed bg-white/80 backdrop-blur-sm shadow-lg relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent" />

                  <p className="relative z-10 text-center lg:text-left">
                    {current.quote}
                  </p>

                  <motion.span
                    variants={highlightVariants}
                    initial="hidden"
                    animate="visible"
                    className="block mt-3 p-2 sm:p-3 font-medium text-white rounded-md lg:rounded-lg relative z-10 text-center lg:text-left text-sm sm:text-base"
                  >
                    {current.highlight}
                  </motion.span>
                </motion.div>

                <motion.div
                  variants={itemVariants}
                  className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4 sm:pt-6 lg:pt-8 justify-center"
                >
                  {current.metrics.map((metric, idx) => (
                    <motion.div
                      key={`metric-${index}-${idx}`}
                      custom={idx}
                      variants={metricVariants}
                      initial="hidden"
                      animate="visible"
                      whileHover="hover"
                      className="border-2 border-gray-100 px-4 sm:px-5 lg:px-6 py-3 sm:py-4 text-center rounded-lg lg:rounded-xl bg-white/90 backdrop-blur-sm w-full shadow-lg relative overflow-hidden group"
                    >
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-br  opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        layoutId={`metric-bg-${idx}`}
                      />

                      <h4 className="text-xs sm:text-sm lg:text-base uppercase text-gray-600 relative z-10 font-semibold tracking-wider">
                        {metric.label}
                      </h4>
                      <p className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black text-black relative z-10 leading-none mt-1">
                        <CounterAnimation
                          value={metric.value}
                          delay={0.6 + idx * 0.15}
                        />
                      </p>
                    </motion.div>
                  ))}
                </motion.div>

                <motion.div
                  variants={itemVariants}
                  className="flex justify-center gap-2 sm:gap-3 mt-4 sm:mt-6"
                >
                  {testimonials.map((_, i) => (
                    <motion.button
                      key={i}
                      onClick={() => setIndex([i, i > index ? 1 : -1])}
                      variants={indicatorVariants}
                      animate={i === index ? "active" : "inactive"}
                      whileHover={{ scale: isMobile ? 1.1 : 1.2 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full transition-all duration-300 touch-manipulation"
                      aria-label={`Go to testimonial ${i + 1}`}
                    />
                  ))}
                </motion.div>

                <motion.div
                  variants={itemVariants}
                  className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3 sm:gap-4 mt-6 sm:mt-8 lg:mt-12"
                >
                  <motion.button
                    variants={buttonVariants}
                    initial="rest"
                    whileHover="hover"
                    whileTap="tap"
                    onClick={() => paginate(-1)}
                    className="px-6 sm:px-7 lg:px-8 py-2.5 sm:py-3 bg-black text-white rounded-full font-semibold relative overflow-hidden group text-sm sm:text-base touch-manipulation"
                  >
                    <span className="absolute inset-0  opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span className="relative z-10">← Previous</span>
                  </motion.button>

                  <motion.button
                    variants={buttonVariants}
                    initial="rest"
                    whileHover="hover"
                    whileTap="tap"
                    onClick={() => paginate(1)}
                    className="px-6 sm:px-7 lg:px-8 py-2.5 sm:py-3 bg-black text-white rounded-full font-semibold relative overflow-hidden group text-sm sm:text-base touch-manipulation"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span className="relative z-10">Next →</span>
                  </motion.button>
                </motion.div>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;

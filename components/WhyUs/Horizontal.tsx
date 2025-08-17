"use client";

import * as React from "react";
import Image from "next/image";
import {
  motion,
  Variants,
  useMotionValue,
  useTransform,
  useSpring,
} from "framer-motion";
import { ScrollArea } from "@/components/ui/scroll-area";

export interface Artwork {
  artist: string;
  art: string;
}

export const works: Artwork[] = [
  { artist: "Uros", art: "/ui.jpg" },
  { artist: "Dusan", art: "/ui.jpg" },
  { artist: "Dejan", art: "/ui.jpg" },
  { artist: "Nikola", art: "/ui.jpg" },
  { artist: "Nemanja", art: "/ui.jpg" },
  { artist: "Jovan", art: "/ui.jpg" },
  { artist: "Ilija", art: "/ui.jpg" },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
      duration: 0.6,
    },
  },
};

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
    y: 60,
    rotateY: -25,
    filter: "blur(8px)",
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    rotateY: 0,
    filter: "blur(0px)",
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 25,
      duration: 0.8,
    },
  },
  hover: {
    scale: 1.05,
    y: -10,
    rotateY: 5,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 20,
    },
  },
};

const imageVariants: Variants = {
  hidden: {
    scale: 1.2,
    filter: "brightness(0.7) blur(4px)",
  },
  visible: {
    scale: 1,
    filter: "brightness(1) blur(0px)",
    transition: {
      duration: 1,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
  hover: {
    scale: 1.1,
    filter: "brightness(1.1) blur(0px)",
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

const textVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
    filter: "blur(2px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      delay: 0.4,
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const nameVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -10,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      delay: 0.6,
      duration: 0.5,
      type: "spring",
      stiffness: 300,
      damping: 25,
    },
  },
  hover: {
    scale: 1.1,
    x: 2,
    transition: {
      duration: 0.2,
      ease: "easeOut",
    },
  },
};

const ArtworkCard: React.FC<{ artwork: Artwork; index: number }> = ({
  artwork,
  index,
}) => {
  const [isHovered, setIsHovered] = React.useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [-100, 100], [5, -5]);
  const rotateY = useTransform(mouseX, [-100, 100], [-5, 5]);

  const springRotateX = useSpring(rotateX, { stiffness: 300, damping: 30 });
  const springRotateY = useSpring(rotateY, { stiffness: 300, damping: 30 });

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    mouseX.set(event.clientX - centerX);
    mouseY.set(event.clientY - centerY);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setIsHovered(false);
  };

  return (
    <motion.figure
      className="shrink-0 group perspective-1000"
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true, amount: 0.3 }}
      variants={cardVariants}
      style={{
        rotateX: springRotateX,
        rotateY: springRotateY,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative overflow-hidden rounded-xl">
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-pink-500/20 to-blue-500/20 z-10 opacity-0 group-hover:opacity-100"
          animate={{
            background: isHovered
              ? [
                  "linear-gradient(45deg, rgba(147,51,234,0.2), rgba(236,72,153,0.2), rgba(59,130,246,0.2))",
                  "linear-gradient(90deg, rgba(236,72,153,0.2), rgba(59,130,246,0.2), rgba(147,51,234,0.2))",
                  "linear-gradient(135deg, rgba(59,130,246,0.2), rgba(147,51,234,0.2), rgba(236,72,153,0.2))",
                ]
              : "linear-gradient(45deg, rgba(147,51,234,0), rgba(236,72,153,0), rgba(59,130,246,0))",
          }}
          transition={{
            duration: 2,
            repeat: isHovered ? Infinity : 0,
            repeatType: "reverse",
          }}
        />

        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent z-20"
          initial={{ x: "-100%" }}
          animate={isHovered ? { x: "100%" } : { x: "-100%" }}
          transition={{
            duration: 1,
            ease: "easeInOut",
            repeat: isHovered ? Infinity : 0,
            repeatDelay: 2,
          }}
        />

        <motion.div
          variants={imageVariants}
          className="overflow-hidden rounded-xl"
        >
          <Image
            src={artwork.art}
            alt={`Photo by ${artwork.artist}`}
            className="aspect-[3/4] object-cover rounded-xl transition-all duration-500 group-hover:shadow-2xl"
            width={300}
            height={400}
            sizes="(max-width: 640px) 150px, 300px"
            priority={index < 3}
          />
        </motion.div>

        <motion.div
          className="absolute top-4 right-4 w-3 h-3 bg-white/60 rounded-full backdrop-blur-sm"
          animate={
            isHovered
              ? {
                  scale: [1, 1.5, 1],
                  opacity: [0.6, 1, 0.6],
                }
              : {}
          }
          transition={{
            duration: 2,
            repeat: isHovered ? Infinity : 0,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute top-8 right-8 w-2 h-2 bg-blue-300/60 rounded-full backdrop-blur-sm"
          animate={
            isHovered
              ? {
                  scale: [1, 2, 1],
                  opacity: [0.4, 0.8, 0.4],
                }
              : {}
          }
          transition={{
            duration: 2.5,
            repeat: isHovered ? Infinity : 0,
            ease: "easeInOut",
            delay: 0.5,
          }}
        />
      </div>

      <motion.figcaption
        className="pt-3 text-xs text-muted-foreground relative"
        variants={textVariants}
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-purple-100/0 via-pink-100/50 to-blue-100/0 rounded-lg opacity-0 group-hover:opacity-100 -z-10"
          transition={{ duration: 0.3 }}
        />

        <motion.span
          className="relative z-10"
          whileHover={{
            textShadow: "0 0 8px rgba(147,51,234,0.3)",
          }}
        >
          klikergroup{" "}
        </motion.span>

        <motion.span
          className="text-black text-[1rem] font-bold ml-[0.2rem] relative z-10 inline-block"
          variants={nameVariants}
          whileHover="hover"
        >
          <motion.span
            className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 origin-left"
            initial={{ scaleX: 0 }}
            animate={isHovered ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            style={{ width: "100%" }}
          />

          <motion.span
            className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-blue-500/20 rounded opacity-0 blur-sm"
            animate={isHovered ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.3 }}
          />

          <span className="relative z-10">{artwork.artist}</span>
        </motion.span>
      </motion.figcaption>
    </motion.figure>
  );
};

export function ScrollAreaHorizontalDemo() {
  const [scrollProgress, setScrollProgress] = React.useState(0);
  const scrollRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current) {
        const scrollLeft = scrollRef.current.scrollLeft;
        const maxScroll =
          scrollRef.current.scrollWidth - scrollRef.current.clientWidth;
        const progress = maxScroll > 0 ? scrollLeft / maxScroll : 0;
        setScrollProgress(progress);
      }
    };

    const scrollElement = scrollRef.current?.querySelector(
      "[data-radix-scroll-area-viewport]"
    );
    scrollElement?.addEventListener("scroll", handleScroll);

    return () => {
      scrollElement?.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
      className="relative"
    >
      <motion.div
        className="h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-full mb-4 origin-left"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: scrollProgress }}
        transition={{ duration: 0.2 }}
      />

      <motion.div
        className="absolute -top-8 right-4 text-xs text-muted-foreground flex items-center gap-2 z-10"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <motion.span
          animate={{ x: [0, 5, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          ←→ Scroll horizontally
        </motion.span>
      </motion.div>

      <ScrollArea className="whitespace-nowrap rounded-md touch-pan-x overflow-x-auto">
        <motion.div
          className="flex w-full space-x-6 pt-[1.5rem] pb-4 px-2"
          variants={containerVariants}
        >
          {works.map((artwork, index) => (
            <ArtworkCard key={artwork.artist} artwork={artwork} index={index} />
          ))}
        </motion.div>
      </ScrollArea>

      <div className="absolute top-0 left-0 w-8 h-full bg-gradient-to-r from-white to-transparent pointer-events-none z-10" />
      <div className="absolute top-0 right-0 w-8 h-full bg-gradient-to-l from-white to-transparent pointer-events-none z-10" />
    </motion.div>
  );
}

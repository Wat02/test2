"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type Props = {
  placeholders: string[];
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

type Dot = {
  x: number;
  y: number;
  r: number;
  color: string;
};

export function PlaceholdersAndVanishInput({
  placeholders,
  onChange,
  onSubmit,
}: Props) {
  const [currentPlaceholder, setCurrentPlaceholder] = useState(0);
  const [value, setValue] = useState("");
  const [animating, setAnimating] = useState(false);

  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const newDataRef = useRef<Dot[]>([]);

  const startPlaceholderAnimation = useCallback(() => {
    clearInterval(intervalRef.current!);
    intervalRef.current = setInterval(() => {
      setCurrentPlaceholder((prev) => (prev + 1) % placeholders.length);
    }, 3000);
  }, [placeholders]);

  useEffect(() => {
    startPlaceholderAnimation();

    const handleVisibilityChange = () => {
      if (document.visibilityState !== "visible") {
        clearInterval(intervalRef.current!);
      } else {
        startPlaceholderAnimation();
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      clearInterval(intervalRef.current!);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [startPlaceholderAnimation]);

  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    const input = inputRef.current;
    if (!canvas || !input) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = 800;
    canvas.height = 800;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const computedStyles = getComputedStyle(input);
    const fontSize = parseFloat(computedStyles.getPropertyValue("font-size"));
    ctx.font = `${fontSize * 2}px ${computedStyles.fontFamily}`;
    ctx.fillStyle = "#FFF";
    ctx.fillText(value, 16, 40);

    const imageData = ctx.getImageData(0, 0, 800, 800).data;
    const newData: Dot[] = [];

    for (let y = 0; y < 800; y++) {
      for (let x = 0; x < 800; x++) {
        const i = (y * 800 + x) * 4;
        if (imageData[i + 3] > 0) {
          newData.push({
            x,
            y,
            r: 1,
            color: `rgba(${imageData[i]}, ${imageData[i + 1]}, ${
              imageData[i + 2]
            }, ${imageData[i + 3]})`,
          });
        }
      }
    }

    newDataRef.current = newData;
  }, [value]);

  const animate = (startX: number) => {
    const frame = (pos: number = startX) => {
      requestAnimationFrame(() => {
        const ctx = canvasRef.current?.getContext("2d");
        if (!ctx) return;

        const updated = newDataRef.current.map((dot) => {
          if (dot.x < pos) return dot;

          dot.x += Math.random() > 0.5 ? 1 : -1;
          dot.y += Math.random() > 0.5 ? 1 : -1;
          dot.r = Math.max(dot.r - 0.05 * Math.random(), 0);
          return dot;
        });

        newDataRef.current = updated.filter((d) => d.r > 0);

        ctx.clearRect(pos, 0, 800, 800);
        newDataRef.current.forEach(({ x, y, r, color }) => {
          ctx.beginPath();
          ctx.rect(x, y, r, r);
          ctx.fillStyle = color;
          ctx.fill();
        });

        if (newDataRef.current.length > 0) frame(pos - 8);
        else {
          setValue("");
          setAnimating(false);
        }
      });
    };

    frame(startX);
  };

  const vanishAndSubmit = () => {
    setAnimating(true);
    draw();
    const maxX = newDataRef.current.reduce(
      (max, dot) => Math.max(dot.x, max),
      0
    );
    animate(maxX);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (value.trim() === "") return;
    vanishAndSubmit();
    onSubmit?.(e);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={cn(
        "w-full relative max-w-full md:max-w-[50%] mx-auto h-[3.5rem] rounded-full overflow-hidden shadow transition duration-200 bg-[#EBE9E3] dark:bg-zinc-800",
        animating && "pointer-events-none"
      )}
    >
      <canvas
        ref={canvasRef}
        className={cn(
          "absolute top-[20%] left-2 sm:left-8 transform scale-50 origin-top-left pointer-events-none filter invert dark:invert-0",
          animating ? "opacity-100" : "opacity-0"
        )}
      />

      <input
        ref={inputRef}
        type="text"
        value={value}
        disabled={animating}
        onChange={(e) => {
          if (!animating) {
            setValue(e.target.value);
            onChange?.(e);
          }
        }}
        onKeyDown={(e) => e.key === "Enter" && vanishAndSubmit()}
        placeholder=""
        className={cn(
          "w-full h-full px-4 sm:pl-10 pr-20 text-sm sm:text-base bg-transparent border border-[#214130] text-black dark:text-white rounded-full z-10 relative focus:outline-none",
          animating && "text-transparent dark:text-transparent"
        )}
      />

      <button
        type="submit"
        disabled={!value}
        className="absolute right-2 top-1/2 -translate-y-1/2 h-[70%] w-[10%] mr-[0.2rem] rounded-full disabled:bg-[#214130] bg-[#a9a9a8] text-white flex items-center justify-center transition duration-200 "
      >
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-5 h-5"
        >
          <motion.path
            d="M5 12l14 0"
            initial={{ strokeDasharray: "50%", strokeDashoffset: "50%" }}
            animate={{ strokeDashoffset: value ? 0 : "50%" }}
            transition={{ duration: 0.3, ease: "linear" }}
          />
          <path d="M13 18l6 -6" />
          <path d="M13 6l6 6" />
        </motion.svg>
      </button>

      <div className="absolute inset-0 flex items-center pl-4 sm:pl-12 pointer-events-none">
        <AnimatePresence mode="wait">
          {!value && !animating && (
            <motion.p
              key={currentPlaceholder}
              initial={{ y: 5, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -15, opacity: 0 }}
              transition={{ duration: 0.3, ease: "linear" }}
              className="text-[#214130] dark:text-zinc-500 text-[0.9rem] md:text-[1.1rem] w-[85%] truncate"
            >
              {placeholders[currentPlaceholder]}
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </form>
  );
}

"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

type ScrollAreaProps = {
  className?: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
  orientation?: "horizontal" | "vertical";
};

function ScrollArea({ className, children, style }: ScrollAreaProps) {
  return (
    <div
      className={cn(
        "relative overflow-auto rounded-md",
        "scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-border scrollbar-track-transparent",
        className
      )}
      style={style}
    >
      {children}
    </div>
  );
}

// You can omit ScrollBar entirely or build a fake one if needed
const ScrollBar = () => null;

export { ScrollArea, ScrollBar };

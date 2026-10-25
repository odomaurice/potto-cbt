"use client";

import type { ReactNode } from "react";
import { motion, type HTMLMotionProps } from "framer-motion";

type Props = Omit<HTMLMotionProps<"p">, "children"> & {
  tone?: "light" | "dark";
  /** The page is laid out like an exam paper; each section is a numbered question. */
  question?: number;
  align?: "left" | "center";
  children: ReactNode;
};

export default function SectionCaption({
  tone = "light",
  question,
  align = "left",
  className = "",
  children,
  ...rest
}: Props) {
  const onDark = tone === "dark";

  return (
    <motion.p
      {...rest}
      className={`flex items-center gap-3 text-xs font-semibold tracking-[0.2em] uppercase ${
        align === "center" ? "justify-center" : ""
      } ${onDark ? "text-white/90" : "text-soft"} ${className}`}
    >
      {question !== undefined && (
        <span
          className={`inline-flex h-8 items-center rounded-lg px-2.5 font-mono text-[0.8rem] font-bold tracking-normal ${
            onDark ? "bg-brand-yellow text-ink" : "bg-ink text-white"
          }`}
        >
          Q{String(question).padStart(2, "0")}
        </span>
      )}
      {children}
    </motion.p>
  );
}

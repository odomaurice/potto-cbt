"use client";

import type { ReactNode } from "react";
import { motion, type HTMLMotionProps } from "framer-motion";

type Props = Omit<HTMLMotionProps<"p">, "children"> & {
  tone?: "light" | "dark";
  /** The page is laid out like a course; each section is a numbered lesson. */
  lesson?: number;
  align?: "left" | "center";
  children: ReactNode;
};

export default function SectionCaption({
  tone = "light",
  lesson,
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
      {lesson !== undefined && (
        <span
          className={`inline-flex h-8 items-center rounded-full px-3 font-display text-[0.8rem] font-bold tracking-normal normal-case ${
            onDark ? "bg-brand-yellow text-ink" : "bg-brand text-brand-fg"
          }`}
        >
          Lesson {String(lesson).padStart(2, "0")}
        </span>
      )}
      {children}
    </motion.p>
  );
}

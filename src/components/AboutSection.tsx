"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Analytics01Icon,
  Clock01Icon,
  LibraryIcon,
} from "@hugeicons/core-free-icons";
import SectionCaption from "@/components/SectionCaption";

// The problems in PRD 1.4, grouped into the three things Flip changes.
const POINTS = [
  {
    icon: LibraryIcon,
    title: "One home for learning materials",
    body: "Lessons, resources and assignments live in one place instead of across books, handouts, messaging apps and separate platforms",
  },
  {
    icon: Clock01Icon,
    title: "Learning beyond school hours",
    body: "Students revisit lessons at their own pace and resume where they stopped, and those who miss a class can catch up",
  },
  {
    icon: Analytics01Icon,
    title: "Progress you can act on",
    body: "Lesson completion, submissions and quiz results show who is on track, who needs support and which topics students find hard",
  },
];

const FITS = [
  "Complements classroom teaching rather than replacing it",
  "The teaching and learning layer of the Potto ecosystem",
  "Focused on learning — school records, exams and results stay in their own Potto products",
];

const ease = [0.22, 1, 0.36, 1] as const;

export default function AboutSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });

  const reveal = (delay: number) => ({
    initial: { opacity: 0, y: 22 },
    animate: inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 22 },
    transition: { duration: 0.65, delay, ease },
  });

  return (
    <section
      id="about"
      data-nav-tone="light"
      data-nav-bg="var(--canvas)"
      className="relative py-24 text-ink md:py-32"
    >
      <div ref={ref} className="mx-auto w-full max-w-7xl px-5 md:px-6 lg:px-8">
        <SectionCaption {...reveal(0)}>What is Potto Flip?</SectionCaption>

        <div className="mt-12 grid gap-14 lg:grid-cols-[7fr_5fr] lg:gap-16">
          <div>
            <motion.h2
              {...reveal(0.12)}
              className="max-w-2xl font-header text-4xl leading-[1.06] font-extrabold tracking-tight sm:text-5xl lg:text-6xl"
            >
              Teaching and learning, in{" "}
              <span className="text-brand">one place</span>
            </motion.h2>

            <motion.p
              {...reveal(0.2)}
              className="mt-6 max-w-xl text-base leading-8 text-soft sm:text-lg"
            >
              Potto Flip is an e-learning platform that helps schools deliver,
              organise, manage and monitor digital learning. Teachers publish
              courses, students work through them, and the school sees how
              learning is going.
            </motion.p>

            <ul className="mt-12 space-y-9">
              {POINTS.map((point, i) => (
                <motion.li
                  key={point.title}
                  {...reveal(0.3 + i * 0.12)}
                  className="flex items-start gap-4"
                >
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-brand text-brand-fg lg:h-14 lg:w-14">
                    <HugeiconsIcon
                      icon={point.icon}
                      size={26}
                      strokeWidth={1.9}
                    />
                  </span>
                  <div>
                    <h3 className="font-header text-lg font-extrabold tracking-tight lg:text-xl">
                      {point.title}
                    </h3>
                    <p className="mt-1.5 max-w-xl text-[0.95rem] leading-7 text-soft">
                      {point.body}
                    </p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* A tinted fill, not a bordered card: the page avoids frames. */}
          <motion.aside
            {...reveal(0.5)}
            className="self-start rounded-3xl bg-brand/8 p-8 sm:p-10"
          >
            <p className="text-xs font-semibold tracking-[0.22em] text-brand uppercase">
              Our vision
            </p>
            <p className="mt-3 font-header text-2xl leading-snug font-extrabold tracking-tight sm:text-3xl">
              Make learning more accessible, engaging, organised and
              measurable.
            </p>

            <p className="mt-8 text-xs font-semibold tracking-[0.22em] text-soft uppercase">
              Where Flip fits
            </p>
            <ul className="mt-5 space-y-3">
              {FITS.map((line) => (
                <li
                  key={line}
                  className="flex gap-3.5 text-[0.95rem] leading-7 text-ink"
                >
                  <span
                    aria-hidden
                    className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-gold"
                  />
                  {line}
                </li>
              ))}
            </ul>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}

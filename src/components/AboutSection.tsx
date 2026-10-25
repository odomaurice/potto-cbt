"use client";

import { useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { HugeiconsIcon } from "@hugeicons/react";
import { RepeatIcon } from "@hugeicons/core-free-icons";
import SectionCaption from "@/components/SectionCaption";

// The eight problems of PRD 1.4, each with the part of Flip that answers it.
const CARDS = [
  {
    problem:
      "Learning materials are spread across books, handouts, messaging apps and separate platforms.",
    answer: "One structured home for every course, lesson and resource.",
  },
  {
    problem:
      "Students struggle to reach learning materials outside school hours.",
    answer:
      "Lessons and permitted downloads are there whenever a student signs in.",
  },
  {
    problem:
      "Teachers have no single place for lessons, assignments and digital resources.",
    answer:
      "Courses, modules, a resource library and assignments on one platform.",
  },
  {
    problem:
      "Lesson completion and assignment participation are hard to track.",
    answer:
      "Completion and submissions are recorded — and opening a lesson is not counted as finishing it.",
  },
  {
    problem: "Feedback on learning activities arrives late, or not at all.",
    answer:
      "Objective questions are graded automatically, and teacher feedback is released in one place.",
  },
  {
    problem: "Schools have little visibility into digital learning.",
    answer:
      "School-level reports on participation and completion, by class, subject and course.",
  },
  {
    problem: "Students who miss a class find it hard to catch up.",
    answer:
      "Every published lesson can be revisited, and resumed from where they stopped.",
  },
  {
    problem:
      "Teachers struggle to see which topics students find difficult.",
    answer:
      "Quiz results and completion rates point to the topics students struggle with.",
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

export default function AboutSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });
  const reduced = useReducedMotion();
  const [flipped, setFlipped] = useState<Set<number>>(() => new Set());

  const allFlipped = flipped.size === CARDS.length;
  const toggle = (i: number) =>
    setFlipped((current) => {
      const next = new Set(current);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });

  const reveal = (delay: number) => ({
    initial: { opacity: 0, y: 22 },
    animate: inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 22 },
    transition: { duration: 0.65, delay, ease },
  });

  return (
    <section
      id="about"
      data-nav-tone="dark"
      data-nav-bg="var(--color-brand-teal-dark)"
      className="relative isolate overflow-hidden rounded-t-[2.5rem] bg-brand-teal-dark py-24 text-white md:rounded-t-[4rem] md:py-32"
    >

      <div ref={ref} className="mx-auto w-full max-w-7xl px-5 md:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[7fr_5fr] lg:items-end">
          <div>
            <SectionCaption tone="dark" lesson={1} {...reveal(0)}>
              Why PottoFlip
            </SectionCaption>
            <motion.h2
              {...reveal(0.1)}
              className="mt-6 max-w-3xl font-display text-4xl leading-[1.02] font-extrabold tracking-[-0.03em] sm:text-5xl lg:text-6xl"
            >
              Every classroom problem has a{" "}
              <span className="text-brand-yellow-light">flip side</span>
            </motion.h2>
          </div>

          <motion.div {...reveal(0.2)}>
            <p className="text-lg leading-8 text-white/90">
              PottoFlip is an e-learning platform that helps schools deliver,
              organise and monitor digital learning. It complements the
              classroom — it does not replace it.
            </p>
            <button
              type="button"
              onClick={() =>
                setFlipped(
                  allFlipped ? new Set() : new Set(CARDS.map((_, i) => i)),
                )
              }
              className="mt-6 inline-flex cursor-pointer items-center gap-2 rounded-full bg-white/10 px-5 py-3 text-sm font-semibold transition hover:bg-white/20"
            >
              <HugeiconsIcon icon={RepeatIcon} size={16} strokeWidth={2} />
              {allFlipped ? "Show the problems" : "Flip them all"}
            </button>
          </motion.div>
        </div>

        <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {CARDS.map((card, i) => {
            const isFlipped = flipped.has(i);
            return (
              <motion.li
                key={card.problem}
                {...reveal(0.25 + i * 0.06)}
                className="perspective-[1200px]"
              >
                <button
                  type="button"
                  onClick={() => toggle(i)}
                  aria-pressed={isFlipped}
                  className="group block h-full w-full cursor-pointer text-left"
                >
                  {/* Both faces share one grid cell, so the card is as tall
                      as its longer side and nothing needs a fixed height. */}
                  <span
                    className={`grid h-full transform-3d ${
                      reduced
                        ? ""
                        : "transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
                    } ${isFlipped ? "rotate-y-180" : "group-hover:rotate-y-6"}`}
                  >
                    <span
                      aria-hidden={isFlipped}
                      className="dog-ear relative flex min-h-60 flex-col justify-between rounded-[1.75rem] bg-white/10 p-6 backface-hidden [grid-area:1/1] [--ear:2rem]"
                    >
                      <span>
                        <span className="text-xs font-semibold tracking-[0.2em] text-white/90 uppercase">
                          Problem {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="mt-4 block text-lg leading-7 font-medium">
                          {card.problem}
                        </span>
                      </span>
                      <span className="mt-6 inline-flex items-center gap-2 font-note text-xl text-brand-yellow-light">
                        <HugeiconsIcon
                          icon={RepeatIcon}
                          size={18}
                          strokeWidth={2}
                        />
                        flip it
                      </span>
                    </span>

                    <span
                      aria-hidden={!isFlipped}
                      className="dog-ear relative flex min-h-60 rotate-y-180 flex-col justify-between rounded-[1.75rem] bg-brand-yellow p-6 text-ink backface-hidden [grid-area:1/1] [--ear:2rem]"
                    >
                      <span>
                        <span className="text-xs font-semibold tracking-[0.2em] text-ink/70 uppercase">
                          With PottoFlip
                        </span>
                        <span className="mt-4 block font-display text-xl leading-snug font-bold">
                          {card.answer}
                        </span>
                      </span>
                      <span className="mt-6 font-note text-xl text-ink/70">
                        flip back
                      </span>
                    </span>
                  </span>
                </button>
              </motion.li>
            );
          })}
        </ul>

        <motion.p
          {...reveal(0.8)}
          className="mt-16 max-w-3xl font-display text-2xl leading-snug font-bold sm:text-3xl"
        >
          Our vision:{" "}
          <span className="text-white/90">
            make learning more accessible, engaging, organised and
            measurable.
          </span>
        </motion.p>
      </div>
    </section>
  );
}

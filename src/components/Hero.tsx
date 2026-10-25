"use client";

import Link from "next/link";
import { useEffect, useState, useSyncExternalStore } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  ArrowLeft01Icon,
  ArrowRight01Icon,
  CloudSavingDone01Icon,
  Flag01Icon,
  SchoolIcon,
  StudentIcon,
  TeacherIcon,
  Tick02Icon,
} from "@hugeicons/core-free-icons";

const ROLES = [
  { icon: StudentIcon, label: "Students" },
  { icon: TeacherIcon, label: "Teachers" },
  { icon: SchoolIcon, label: "School admins" },
];

// An imaginary candidate working through part of a paper, drawn from the
// exam-interface components of PRD 4.9 and the Phase 1 question types
// (multiple choice, true or false). It is labelled as an illustration on the
// page — there is no CBT screenshot yet.
const PAPER = [
  {
    text: "Which of these numbers is prime?",
    options: ["21", "27", "29", "33"],
    pick: 2,
  },
  {
    text: "What is the capital of Nigeria?",
    options: ["Lagos", "Abuja", "Kano", "Enugu"],
    pick: 1,
  },
  {
    text: "At sea level, pure water boils at 100 °C.",
    options: ["True", "False"],
    pick: 0,
  },
  {
    text: "Solve for x:  3x + 4 = 19",
    options: ["x = 3", "x = 5", "x = 6", "x = 7"],
    pick: 1,
    flag: true,
  },
  {
    text: "Which gas do green plants take in for photosynthesis?",
    options: ["Oxygen", "Nitrogen", "Carbon dioxide", "Hydrogen"],
    pick: 2,
  },
];

const FIRST = 12; // the paper's question number for PAPER[0]
const TOTAL = 40;
const BEATS = 4; // ticks per question: read, read, answer + save, saved
const START = 42 * 60 + 18;
const LETTERS = ["A", "B", "C", "D"];

const ease = [0.22, 1, 0.36, 1] as const;

const subscribeToMotionPref = (notify: () => void) => {
  const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
  mq.addEventListener("change", notify);
  return () => mq.removeEventListener("change", notify);
};

const clock = (seconds: number) =>
  [Math.floor(seconds / 60), seconds % 60].map((n) =>
    String(n).padStart(2, "0"),
  );

export default function Hero() {
  const [tick, setTick] = useState(0);
  const reduced = useSyncExternalStore(
    subscribeToMotionPref,
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    () => true,
  );

  useEffect(() => {
    if (reduced) return;
    const id = window.setInterval(() => setTick((t) => t + 1), 1000);
    return () => window.clearInterval(id);
  }, [reduced]);

  // Reduced motion shows one still frame: the first question, answered.
  const t = reduced ? BEATS - 1 : tick;
  const index = Math.floor(t / BEATS) % PAPER.length;
  const beat = t % BEATS;
  const q = PAPER[index];
  const answered = beat >= 2;
  const saving = beat === 2;
  const number = FIRST + index;
  const [mm, ss] = clock(START - (t % START));

  const reveal = (delay: number) => ({
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, delay, ease },
  });

  return (
    <section
      data-nav-tone="light"
      data-nav-bg="var(--canvas)"
      className="relative isolate overflow-hidden pt-32 pb-24 md:pt-40 md:pb-32"
    >
      <div className="mx-auto grid w-full max-w-7xl items-center gap-16 px-5 md:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12 lg:px-8">
        <div>
          <motion.p
            {...reveal(0.05)}
            className="inline-flex items-center gap-2 rounded-lg bg-brand/10 px-3 py-1.5 font-mono text-xs font-semibold tracking-wider text-brand uppercase"
          >
            <span className="h-2 w-2 rounded-full bg-brand" />
            Computer-based testing for schools
          </motion.p>

          <motion.h1
            {...reveal(0.15)}
            className="mt-6 font-display text-[2.4rem] leading-[1.08] font-bold tracking-[-0.03em] sm:text-6xl lg:text-[4.1rem]"
          >
            Smarter exams.
            <br />
            <span className="marker">Reliable</span>{" "}
            <span className="text-brand">assessment.</span>
            <br />
            Better insights.
          </motion.h1>

          <motion.p
            {...reveal(0.3)}
            className="mt-8 max-w-xl text-lg leading-8 text-soft sm:text-xl sm:leading-9"
          >
            Potto CBT helps schools set, schedule, deliver and mark
            computer-based exams — with answers saved as students work, a
            timer kept by the server, and results released only when the
            school says so.
          </motion.p>

          <motion.div
            {...reveal(0.42)}
            className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
          >
            <Link
              href="/#exam-day"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand-yellow px-8 py-4 text-base font-bold text-ink transition duration-300 hover:-translate-y-0.5 hover:bg-brand-yellow-light"
            >
              Walk through exam day
              <HugeiconsIcon icon={ArrowRight01Icon} size={18} strokeWidth={2} />
            </Link>
            <Link
              href="/#contact"
              className="group inline-flex items-center justify-center gap-2 rounded-xl px-4 py-4 text-base font-bold text-ink transition hover:text-brand"
            >
              Talk to us
              <HugeiconsIcon
                icon={ArrowRight01Icon}
                size={18}
                strokeWidth={2}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </motion.div>

          <motion.ul
            {...reveal(0.55)}
            aria-label="Who Potto CBT is for"
            className="mt-12 flex flex-wrap gap-2"
          >
            {ROLES.map((role) => (
              <li
                key={role.label}
                className="inline-flex items-center gap-2 rounded-lg bg-surface-2 px-3.5 py-2 text-sm font-semibold text-ink/80"
              >
                <HugeiconsIcon
                  icon={role.icon}
                  size={16}
                  strokeWidth={2}
                  className="text-brand"
                />
                {role.label}
              </li>
            ))}
          </motion.ul>
        </div>

        <motion.figure
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.35, ease }}
          className="relative mx-auto w-full max-w-md lg:max-w-none"
        >
          <div className="relative">
            {/* A flat yellow slab behind the screen — offset, not a shadow. */}
            <div
              aria-hidden
              className="absolute inset-0 translate-x-4 translate-y-4 rounded-[2rem] bg-brand-yellow"
            />

            <div
              aria-hidden
              className="relative overflow-hidden rounded-[2rem] bg-ink text-white"
            >
              {/* Title bar: paper, subject, timer. */}
              <div className="flex items-center justify-between gap-4 bg-white/6 px-6 py-4 sm:px-7">
                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold">
                    General Paper · Mock exam
                  </p>
                  <p className="font-mono text-[0.7rem] text-white/60">
                    JSS 3 · 60 minutes · 40 marks
                  </p>
                </div>
                <span className="shrink-0 rounded-lg bg-white/10 px-3 py-1.5 font-mono text-xl font-bold tabular-nums">
                  {mm}
                  <span className="animate-blink">:</span>
                  {ss}
                </span>
              </div>

              <div className="px-6 pt-6 pb-6 sm:px-7">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-semibold tracking-wider text-brand-yellow-light">
                    QUESTION {number} OF {TOTAL}
                  </span>
                  <span
                    className={`inline-flex items-center gap-1.5 rounded-md px-2 py-1 font-mono text-[0.65rem] font-bold transition-colors duration-300 ${
                      q.flag && answered
                        ? "bg-brand-yellow text-ink"
                        : "bg-white/8 text-white/60"
                    }`}
                  >
                    <HugeiconsIcon icon={Flag01Icon} size={12} strokeWidth={2.2} />
                    {q.flag && answered ? "For review" : "Flag"}
                  </span>
                </div>

                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={index}
                    initial={reduced ? false : { opacity: 0, x: 18 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -14 }}
                    transition={{ duration: 0.35, ease }}
                  >
                    <p className="mt-4 min-h-14 text-lg leading-snug font-semibold sm:text-xl">
                      {q.text}
                    </p>

                    <ul className="mt-5 grid gap-2">
                      {q.options.map((option, i) => {
                        const chosen = answered && i === q.pick;
                        return (
                          <li
                            key={option}
                            className={`flex items-center gap-3 rounded-xl px-3.5 py-2.5 text-sm font-medium transition-colors duration-300 sm:text-[0.95rem] ${
                              chosen ? "bg-brand-teal text-white" : "bg-white/6 text-white/85"
                            }`}
                          >
                            <span
                              className={`grid h-7 w-7 shrink-0 place-items-center rounded-full font-mono text-xs font-bold transition-colors duration-300 ${
                                chosen ? "bg-white text-brand-teal-dark" : "bg-white/10"
                              }`}
                            >
                              {chosen ? (
                                <HugeiconsIcon icon={Tick02Icon} size={14} strokeWidth={3} />
                              ) : (
                                LETTERS[i]
                              )}
                            </span>
                            {option}
                          </li>
                        );
                      })}
                    </ul>
                  </motion.div>
                </AnimatePresence>

                {/* Previous / save status / next. */}
                <div className="mt-6 flex items-center justify-between gap-3">
                  <span className="inline-flex items-center gap-1 rounded-lg bg-white/8 px-3 py-2 text-xs font-semibold text-white/70">
                    <HugeiconsIcon icon={ArrowLeft01Icon} size={14} strokeWidth={2} />
                    Previous
                  </span>
                  <span
                    className={`inline-flex items-center gap-1.5 font-mono text-[0.7rem] font-semibold transition-colors duration-300 ${
                      saving ? "text-white/60" : "text-brand-yellow-light"
                    }`}
                  >
                    <HugeiconsIcon icon={CloudSavingDone01Icon} size={14} strokeWidth={2} />
                    {saving ? "Saving…" : "All answers saved"}
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-lg bg-brand-yellow px-3 py-2 text-xs font-bold text-ink">
                    Next
                    <HugeiconsIcon icon={ArrowRight01Icon} size={14} strokeWidth={2} />
                  </span>
                </div>
              </div>

              {/* Question palette for the whole paper. */}
              <ol className="grid grid-cols-20 gap-1 bg-white/6 px-6 py-4 sm:px-7">
                {Array.from({ length: TOTAL }, (_, i) => {
                  const n = i + 1;
                  const done = n < number || (n === number && answered);
                  const flagged = done && PAPER[n - FIRST]?.flag === true;
                  return (
                    <li
                      key={n}
                      className={`aspect-square rounded-[3px] transition-colors duration-300 ${
                        n === number && !answered
                          ? "bg-white"
                          : flagged
                            ? "bg-brand-yellow"
                            : done
                              ? "bg-brand-teal"
                              : "bg-white/15"
                      }`}
                    />
                  );
                })}
              </ol>
            </div>
          </div>

          <figcaption className="relative mt-8 text-sm leading-6 text-soft">
            An illustration of the exam screen — not a product screenshot.
          </figcaption>
        </motion.figure>
      </div>
    </section>
  );
}

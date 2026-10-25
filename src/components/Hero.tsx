"use client";

import Link from "next/link";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { motion } from "framer-motion";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Analytics01Icon,
  ArrowRight01Icon,
  Comment01Icon,
  PlayIcon,
  QuizIcon,
  SchoolIcon,
  StudentIcon,
  Task01Icon,
  TeacherIcon,
  UserMultipleIcon,
} from "@hugeicons/core-free-icons";

// The learning loop of PRD 6.2 – 6.4. A concept, drawn as type and icons —
// there is no Flip screenshot yet, and this is not pretending to be one.
const LOOP = [
  {
    icon: PlayIcon,
    word: "Learn",
    line: "Watch, read and listen to lessons at your own pace.",
  },
  {
    icon: QuizIcon,
    word: "Practise",
    line: "Low-stakes quizzes that explain the answers.",
  },
  {
    icon: Task01Icon,
    word: "Submit",
    line: "Hand in assignments before the deadline.",
  },
  {
    icon: Comment01Icon,
    word: "Feedback",
    line: "Grades and comments, released by your teacher.",
  },
  {
    icon: Analytics01Icon,
    word: "Progress",
    line: "See what is done, and what comes next.",
  },
];

const ROLES = [
  { icon: StudentIcon, label: "Students" },
  { icon: TeacherIcon, label: "Teachers" },
  { icon: SchoolIcon, label: "School admins" },
  { icon: UserMultipleIcon, label: "Parents" },
];

const STICKERS = [
  { label: "Video", className: "-top-4 left-6 -rotate-6 bg-brand-yellow text-ink" },
  { label: "PDF", className: "top-1/3 -right-6 rotate-6 bg-ink text-white" },
  { label: "Audio", className: "bottom-24 -left-8 rotate-3 bg-white text-ink shadow-lg" },
  { label: "Quiz", className: "-bottom-4 right-10 -rotate-3 bg-brand text-brand-fg" },
];

const FLIP_EVERY = 3200;
const ease = [0.22, 1, 0.36, 1] as const;

const subscribeToMotionPref = (notify: () => void) => {
  const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
  mq.addEventListener("change", notify);
  return () => mq.removeEventListener("change", notify);
};

export default function Hero() {
  const [turn, setTurn] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduced = useSyncExternalStore(
    subscribeToMotionPref,
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    () => true,
  );
  const timer = useRef<number | undefined>(undefined);

  useEffect(() => {
    if (reduced || paused) return;
    timer.current = window.setInterval(
      () => setTurn((t) => t + 1),
      FLIP_EVERY,
    );
    return () => window.clearInterval(timer.current);
  }, [reduced, paused]);

  // One two-faced card, turned 180 degrees per step. The face turned away is
  // refilled with the next step, so five steps cycle through two faces.
  const n = LOOP.length;
  const frontStep = (turn % 2 === 0 ? turn : turn + 1) % n;
  const backStep = (turn % 2 === 1 ? turn : turn + 1) % n;
  const current = turn % n;

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
      <div className="mx-auto grid w-full max-w-7xl items-center gap-16 px-5 md:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10 lg:px-8">
        <div>
          <motion.p
            {...reveal(0.05)}
            className="font-note text-2xl text-brand sm:text-[1.7rem]"
          >
            a fresh page for your school&apos;s learning
          </motion.p>

          <motion.h1
            {...reveal(0.15)}
            className="mt-4 font-display text-[3rem] leading-[0.98] font-extrabold tracking-[-0.03em] sm:text-7xl lg:text-[5.4rem]"
          >
            Flip the way your school{" "}
            <span className="marker">teaches</span> and{" "}
            <span className="relative inline-block text-brand">
              learns
              <svg
                aria-hidden
                viewBox="0 0 220 24"
                className="absolute -bottom-3 left-0 w-full text-brand-yellow"
                preserveAspectRatio="none"
              >
                <path
                  d="M4 16 C 60 4, 140 4, 216 14"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="6"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            .
          </motion.h1>

          <motion.p
            {...reveal(0.3)}
            className="mt-8 max-w-xl text-lg leading-8 text-soft sm:text-xl sm:leading-9"
          >
            PottoFlip is one place for courses, lessons, assignments, practice
            quizzes and feedback — so learning carries on beyond the classroom,
            and everyone can see how it is going.
          </motion.p>

          <motion.div
            {...reveal(0.42)}
            className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
          >
            <Link
              href="/#how-it-works"
              className="inline-flex animate-glow items-center justify-center gap-2 rounded-full bg-brand-yellow px-8 py-4 text-base font-semibold text-ink [--glow:var(--color-brand-yellow)] transition duration-300 hover:-translate-y-0.5 hover:bg-brand-yellow-light"
            >
              See how it works
              <HugeiconsIcon icon={ArrowRight01Icon} size={18} strokeWidth={2} />
            </Link>
            <Link
              href="/#contact"
              className="group inline-flex items-center justify-center gap-2 rounded-full px-4 py-4 text-base font-semibold text-ink transition hover:text-brand"
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
            aria-label="Who PottoFlip is for"
            className="mt-12 flex flex-wrap gap-2"
          >
            {ROLES.map((role) => (
              <li
                key={role.label}
                className="inline-flex items-center gap-2 rounded-full bg-brand/8 px-4 py-2 text-sm font-semibold text-brand"
              >
                <HugeiconsIcon icon={role.icon} size={16} strokeWidth={2} />
                {role.label}
              </li>
            ))}
          </motion.ul>
        </div>

        <motion.div
          initial={{ opacity: 0, rotate: 4, y: 40 }}
          animate={{ opacity: 1, rotate: 0, y: 0 }}
          transition={{ duration: 1, delay: 0.35, ease }}
          className="relative mx-auto w-full max-w-sm sm:max-w-md"
        >
          {/* Two pages under the card: the stack it is flipped from. */}
          <div
            aria-hidden
            className="absolute inset-0 translate-x-5 translate-y-5 rotate-6 rounded-[2.25rem] bg-brand-yellow/40"
          />
          <div
            aria-hidden
            className="absolute inset-0 translate-x-2 translate-y-2 rotate-3 rounded-[2.25rem] bg-brand/20"
          />

          <button
            type="button"
            onClick={() => setTurn((t) => t + 1)}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onFocus={() => setPaused(true)}
            onBlur={() => setPaused(false)}
            aria-label={`The learning loop, step ${current + 1} of ${n}: ${LOOP[current].word}. ${LOOP[current].line} Press to flip to the next step.`}
            className="relative block aspect-[4/5] w-full cursor-pointer perspective-[1400px]"
          >
            <span
              style={{ transform: `rotateY(${turn * 180}deg)` }}
              className={`absolute inset-0 transform-3d ${
                reduced ? "" : "transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
              }`}
            >
              <Face step={frontStep} tone="teal" />
              <Face step={backStep} tone="yellow" back />
            </span>
          </button>

          {STICKERS.map((sticker) => (
            <span
              key={sticker.label}
              aria-hidden
              className={`absolute hidden rounded-full px-4 py-2 text-sm font-bold sm:block ${sticker.className}`}
            >
              {sticker.label}
            </span>
          ))}

          <div
            aria-hidden
            className="absolute -bottom-16 left-0 hidden items-center gap-2 font-note text-xl text-brand lg:flex"
          >
            <svg viewBox="0 0 60 40" className="h-8 w-12 -scale-y-100">
              <path
                d="M4 6 C 20 30, 40 34, 54 20 M54 20 l-10 -1 M54 20 l-2 10"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
            </svg>
            tap the card to flip it
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Face({
  step,
  tone,
  back = false,
}: {
  step: number;
  tone: "teal" | "yellow";
  back?: boolean;
}) {
  const item = LOOP[step];
  const teal = tone === "teal";

  return (
    <span
      aria-hidden
      className={`dog-ear absolute inset-0 flex flex-col justify-between overflow-hidden rounded-[2.25rem] p-8 text-left backface-hidden [--ear:3.5rem] sm:p-10 ${
        back ? "rotate-y-180" : ""
      } ${teal ? "bg-brand-teal-dark text-white" : "bg-brand-yellow text-ink"}`}
    >
      <span className="relative flex items-center justify-between">
        <span
          className={`text-xs font-semibold tracking-[0.2em] uppercase ${
            teal ? "text-white/90" : "text-ink/70"
          }`}
        >
          The learning loop
        </span>
      </span>

      <span className="relative">
        <span
          className={`grid h-20 w-20 place-items-center rounded-3xl ${
            teal ? "bg-white/15 text-white" : "bg-ink text-brand-yellow"
          }`}
        >
          <HugeiconsIcon icon={item.icon} size={40} strokeWidth={1.8} />
        </span>
        <span className="mt-8 block font-display text-6xl font-extrabold tracking-[-0.03em] sm:text-7xl">
          {item.word}
        </span>
        <span
          className={`mt-4 block max-w-xs text-lg leading-7 ${
            teal ? "text-white/90" : "text-ink/80"
          }`}
        >
          {item.line}
        </span>
      </span>

      <span className="relative flex items-center gap-2">
        {LOOP.map((s, i) => (
          <span
            key={s.word}
            className={`h-2 rounded-full transition-all ${
              i === step
                ? `w-8 ${teal ? "bg-brand-yellow" : "bg-ink"}`
                : `w-2 ${teal ? "bg-white/30" : "bg-ink/25"}`
            }`}
          />
        ))}
        <span
          className={`ml-auto font-display text-sm font-bold ${
            teal ? "text-white/90" : "text-ink/70"
          }`}
        >
          {String(step + 1).padStart(2, "0")} / {String(LOOP.length).padStart(2, "0")}
        </span>
      </span>
    </span>
  );
}

"use client";

import { useRef, useState, type KeyboardEvent } from "react";
import {
  AnimatePresence,
  motion,
  useInView,
  useReducedMotion,
} from "framer-motion";
import SectionCaption from "@/components/SectionCaption";

// The recommended lifecycle of PRD section 13, stage for stage, with the
// rules from 4.4 – 4.14 that apply at each one.
const STAGES = [
  {
    name: "Draft",
    body: "Questions are chosen and rules set. Nothing is visible to students yet.",
  },
  {
    name: "Review",
    body: "The paper is checked, and approved where your school requires approval.",
  },
  {
    name: "Scheduled",
    body: "It gets a date, an availability window and its eligible classes or candidates, in the school's own time zone.",
  },
  {
    name: "Published",
    body: "Eligible students can see it. An exam with missing questions, invalid scoring rules or no valid window can't be published by accident.",
  },
  {
    name: "In progress",
    body: "Candidates are sitting it, each in their own session. The marking rules are now fixed for every attempt.",
  },
  {
    name: "Submitted",
    body: "Each paper is in, once. Repeated requests and network retries never create a second attempt.",
  },
  {
    name: "Marked",
    body: "Objective questions are marked automatically. Anything that needs judgement waits for a teacher.",
  },
  {
    name: "Finalised",
    body: "Only when every required mark and review is complete. Any later score change records the old score, the new one, who changed it and why.",
  },
  {
    name: "Released",
    body: "Students see their scores: at once for practice, after review for formal exams, as the school decides.",
  },
  {
    name: "Archived",
    body: "Kept intact, with the exact question versions each candidate answered.",
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

export default function LifecycleSection() {
  const [index, setIndex] = useState(0);
  const reduced = useReducedMotion();
  const stops = useRef<(HTMLButtonElement | null)[]>([]);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });

  const reveal = (delay: number) => ({
    initial: { opacity: 0, y: 22 },
    animate: inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 22 },
    transition: { duration: 0.65, delay, ease },
  });

  const onKeyDown = (event: KeyboardEvent) => {
    const forward = event.key === "ArrowRight" || event.key === "ArrowDown";
    const back = event.key === "ArrowLeft" || event.key === "ArrowUp";
    if (!forward && !back) return;
    event.preventDefault();
    const next = Math.max(0, Math.min(STAGES.length - 1, index + (forward ? 1 : -1)));
    setIndex(next);
    stops.current[next]?.focus();
  };

  const stage = STAGES[index];

  return (
    <section
      id="lifecycle"
      data-nav-tone="dark"
      data-nav-bg="var(--color-brand-teal-dark)"
      className="relative isolate overflow-hidden bg-brand-teal-dark py-24 text-white md:py-32"
    >
      <div ref={ref} className="mx-auto w-full max-w-7xl px-5 md:px-6 lg:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <SectionCaption tone="dark" question={5} {...reveal(0)}>
              The exam lifecycle
            </SectionCaption>
            <motion.h2
              {...reveal(0.1)}
              className="mt-6 max-w-3xl font-display text-4xl leading-[1.08] font-bold tracking-[-0.03em] sm:text-5xl lg:text-[3.5rem]"
            >
              From draft to archive,{" "}
              <span className="text-brand-yellow-light">no shortcuts</span>
            </motion.h2>
          </div>
          <motion.p {...reveal(0.2)} className="max-w-sm text-lg leading-8 text-white/90">
            Every exam moves through clear stages, and only the right roles
            can move it on. Step through them.
          </motion.p>
        </div>

        {/* The track: stops filled up to the current stage. */}
        <motion.div
          {...reveal(0.3)}
          role="tablist"
          aria-label="Exam lifecycle stages"
          onKeyDown={onKeyDown}
          className="relative -mx-5 mt-14 overflow-x-auto px-5 pb-2 [scrollbar-width:none] lg:mx-0 lg:px-0 [&::-webkit-scrollbar]:hidden"
        >
          <ol className="relative flex min-w-[56rem] justify-between">
            <span
              aria-hidden
              className="absolute top-5 right-5 left-5 h-1 rounded-full bg-white/15"
            />
            <span
              aria-hidden
              style={{ width: `calc((100% - 2.5rem) * ${index / (STAGES.length - 1)})` }}
              className="absolute top-5 left-5 h-1 rounded-full bg-brand-yellow transition-[width] duration-500"
            />
            {STAGES.map((s, i) => {
              const state = i < index ? "done" : i === index ? "current" : "todo";
              return (
                <li key={s.name} className="relative flex w-20 flex-col items-center">
                  <button
                    ref={(el) => {
                      stops.current[i] = el;
                    }}
                    type="button"
                    role="tab"
                    id={`stage-tab-${i}`}
                    aria-selected={i === index}
                    aria-controls="stage-panel"
                    tabIndex={i === index ? 0 : -1}
                    onClick={() => setIndex(i)}
                    className="group flex cursor-pointer flex-col items-center gap-3"
                  >
                    <span
                      className={`grid h-11 w-11 place-items-center rounded-full font-mono text-sm font-bold transition-colors duration-300 ${
                        state === "current"
                          ? "bg-brand-yellow text-ink"
                          : state === "done"
                            ? "bg-white text-brand-teal-dark"
                            : "bg-brand-teal-dark text-white/80 ring-0 group-hover:text-white"
                      }`}
                    >
                      <span
                        className={`grid h-full w-full place-items-center rounded-full ${
                          state === "todo" ? "bg-white/15" : ""
                        }`}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </span>
                    <span
                      className={`text-center text-sm font-semibold whitespace-nowrap ${
                        state === "current" ? "text-white" : "text-white/80"
                      }`}
                    >
                      {s.name}
                    </span>
                  </button>
                </li>
              );
            })}
          </ol>
        </motion.div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[7fr_5fr] lg:items-start">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={stage.name}
              id="stage-panel"
              role="tabpanel"
              aria-labelledby={`stage-tab-${index}`}
              initial={reduced ? { opacity: 0 } : { opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={reduced ? { opacity: 0 } : { opacity: 0, x: -14 }}
              transition={{ duration: 0.35, ease }}
              className="rounded-[2rem] bg-ink p-8 sm:p-10"
            >
              <p className="font-mono text-sm font-bold text-brand-yellow-light">
                STAGE {String(index + 1).padStart(2, "0")} / {STAGES.length}
              </p>
              <h3 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
                {stage.name}
              </h3>
              <p className="mt-4 max-w-2xl text-lg leading-8 text-white/90">
                {stage.body}
              </p>
            </motion.div>
          </AnimatePresence>

          <motion.p
            {...reveal(0.4)}
            className="rounded-[2rem] bg-white/10 p-8 text-base leading-7 text-white/90"
          >
            Not every exam needs every stage. A practice quiz can be marked
            and released the moment it is submitted; an end-of-term paper
            waits for review before anyone sees a score.
          </motion.p>
        </div>
      </div>
    </section>
  );
}

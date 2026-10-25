"use client";

import { useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useInView,
  useReducedMotion,
} from "framer-motion";
import { HugeiconsIcon } from "@hugeicons/react";
import { Tick02Icon } from "@hugeicons/core-free-icons";
import SectionCaption from "@/components/SectionCaption";

// The ten problems of PRD 1.4, each with the part of CBT that answers it.
// Where the answer leans on a Phase 2 item, the copy says so.
const CARDS = [
  {
    problem: "Preparing and printing large volumes of exam papers.",
    answer:
      "Questions are written once into a question bank and delivered on screen. Nothing to print, nothing to collect.",
  },
  {
    problem: "Hours spent marking objective questions by hand.",
    answer:
      "Objective questions are marked automatically, against the answer key and scoring rules you set.",
  },
  {
    problem: "Keeping exam timetables and student eligibility straight.",
    answer:
      "Each exam has a set window, and only eligible classes and candidates can see it or start it.",
  },
  {
    problem: "Stopping questions leaking before the exam.",
    answer:
      "Unpublished exams stay locked, permissions are checked on the server, and answer keys never reach a student's browser.",
  },
  {
    problem: "Keeping an eye on students during a computer-based exam.",
    answer:
      "Every attempt is a tracked session, so staff can see who has started, who has submitted and whose session was interrupted.",
  },
  {
    problem: "Power cuts, network drops and interrupted sessions.",
    answer:
      "Answers save as students work. After a drop they are restored — and the original deadline still stands.",
  },
  {
    problem: "Calculating scores accurately and consistently.",
    answer:
      "Marking rules are fixed once an exam begins, and every final score keeps the detail to explain how it was reached.",
  },
  {
    problem: "Compiling results across subjects and classes.",
    answer:
      "Results sit in one place, tied to the right session, class and subject — and each one shows whether it is marked, finalised or released.",
  },
  {
    problem: "Spotting performance trends.",
    answer:
      "Reports show averages, highest and lowest scores, pass rates and the questions students found hardest.",
  },
  {
    problem: "Keeping reliable exam records and audit trails.",
    answer:
      "Publication, rule changes, submissions, score changes and releases are all logged: who, what, when and why.",
  },
];

const BUBBLES = ["A", "B", "C", "D"];
const ease = [0.22, 1, 0.36, 1] as const;
const pad = (n: number) => String(n).padStart(2, "0");

export default function AboutSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });
  const reduced = useReducedMotion();
  const [picked, setPicked] = useState(0);

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
            <SectionCaption tone="dark" question={1} {...reveal(0)}>
              Why Potto CBT
            </SectionCaption>
            <motion.h2
              {...reveal(0.1)}
              className="mt-6 max-w-3xl font-display text-4xl leading-[1.08] font-bold tracking-[-0.03em] sm:text-5xl lg:text-[3.5rem]"
            >
              Ten exam-day headaches.{" "}
              <span className="text-brand-yellow-light">Ten answers.</span>
            </motion.h2>
          </div>

          <motion.p {...reveal(0.2)} className="text-lg leading-8 text-white/90">
            Potto CBT replaces or sits alongside paper exams — class tests,
            continuous assessment, mocks, entrance and end-of-term exams. Pick
            a problem to see how it is handled.
          </motion.p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-[6fr_5fr] lg:gap-12">
          <motion.ol {...reveal(0.25)} className="space-y-2">
            {CARDS.map((card, i) => {
              const selected = picked === i;
              return (
                <li key={card.problem}>
                  <button
                    type="button"
                    onClick={() => setPicked(i)}
                    aria-pressed={selected}
                    className={`flex w-full cursor-pointer items-start gap-4 rounded-2xl px-5 py-4 text-left transition-colors duration-300 ${
                      selected
                        ? "bg-brand-yellow text-ink"
                        : "bg-white/8 text-white hover:bg-white/15"
                    }`}
                  >
                    <span
                      className={`mt-0.5 font-mono text-sm font-bold ${
                        selected ? "text-ink/70" : "text-brand-yellow-light"
                      }`}
                    >
                      {pad(i + 1)}
                    </span>
                    <span className="flex-1 text-base leading-7 font-medium">
                      {card.problem}
                    </span>
                    <span
                      aria-hidden
                      className={`mt-1 grid h-5 w-5 shrink-0 place-items-center rounded-full transition-colors ${
                        selected ? "bg-ink text-brand-yellow" : "bg-white/15"
                      }`}
                    >
                      {selected && (
                        <HugeiconsIcon icon={Tick02Icon} size={12} strokeWidth={3} />
                      )}
                    </span>
                  </button>

                  {/* On phones the answer opens under its problem. */}
                  {selected && (
                    <p className="px-5 pt-3 pb-2 text-base leading-7 text-white/90 lg:hidden">
                      {card.answer}
                    </p>
                  )}
                </li>
              );
            })}
          </motion.ol>

          <motion.div
            {...reveal(0.35)}
            className="hidden lg:sticky lg:top-32 lg:block lg:self-start"
          >
            <div className="rounded-[2rem] bg-ink p-10">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={picked}
                  initial={reduced ? { opacity: 0 } : { opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reduced ? { opacity: 0 } : { opacity: 0, y: -10 }}
                  transition={{ duration: 0.3, ease }}
                  aria-live="polite"
                >
                  <p className="font-mono text-sm font-semibold text-brand-yellow-light">
                    ANSWER {pad(picked + 1)}
                  </p>
                  <p className="mt-6 text-2xl leading-snug font-semibold">
                    {CARDS[picked].answer}
                  </p>
                </motion.div>
              </AnimatePresence>

              {/* Answer-sheet bubbles: one shaded in, as on an OMR sheet. */}
              <div aria-hidden className="mt-10 flex gap-3">
                {BUBBLES.map((b, i) => (
                  <span
                    key={b}
                    className={`grid h-11 w-11 place-items-center rounded-full font-mono text-sm font-bold transition-colors duration-300 ${
                      i === picked % BUBBLES.length
                        ? "bg-brand-yellow text-ink"
                        : "bg-white/10 text-white/70"
                    }`}
                  >
                    {b}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <motion.p
          {...reveal(0.6)}
          className="mt-16 max-w-3xl font-display text-2xl leading-snug font-semibold sm:text-3xl"
        >
          Our vision:{" "}
          <span className="text-white/90">
            digital exams that are accessible, reliable, efficient and
            transparent — for schools, teachers and students.
          </span>
        </motion.p>
      </div>
    </section>
  );
}

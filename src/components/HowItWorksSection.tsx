"use client";

import { useRef, useState, type KeyboardEvent } from "react";
import {
  AnimatePresence,
  motion,
  useInView,
  useReducedMotion,
} from "framer-motion";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  CourseIcon,
  PlayIcon,
  QuizIcon,
  Task01Icon,
} from "@hugeicons/core-free-icons";
import SectionCaption from "@/components/SectionCaption";

// The four learning workflows of PRD section 6, step for step.
const FLOWS = [
  {
    id: "course",
    icon: CourseIcon,
    label: "Create a course",
    role: "Teacher",
    summary:
      "Where the school requires it, publishing follows its approval process.",
    steps: [
      "Open course management and create a new course.",
      "Enter the course details — title, subject, class and objectives.",
      "Add modules and lessons.",
      "Upload or attach learning resources.",
      "Preview the course.",
      "Save it as a draft, or publish it to its authorised students.",
    ],
  },
  {
    id: "lesson",
    icon: PlayIcon,
    label: "Complete a lesson",
    role: "Student",
    summary:
      "Course progress updates according to the completion rules the teacher set.",
    steps: [
      "Sign in and open the learning dashboard.",
      "Select an enrolled course.",
      "Open a lesson and study its content.",
      "Complete the lesson's required activities.",
      "PottoFlip records the progress.",
      "Move straight on to the next lesson.",
    ],
  },
  {
    id: "assignment",
    icon: Task01Icon,
    label: "Set an assignment",
    role: "Teacher and students",
    summary:
      "Submission times are recorded, so late and missing work is easy to see.",
    steps: [
      "Create an assignment from a course or class.",
      "Add instructions and supporting resources.",
      "Set the submission rules and deadline, then publish.",
      "Students submit their work.",
      "Review submissions, grade them and write feedback.",
      "Students read the feedback once it is released.",
    ],
  },
  {
    id: "quiz",
    icon: QuizIcon,
    label: "Run a practice quiz",
    role: "Teacher and students",
    summary:
      "Quiz feedback explains the answers, so students learn from it rather than just see a score.",
    steps: [
      "Create a quiz and add questions and answer options.",
      "Configure scoring and availability, then publish.",
      "Students complete the quiz.",
      "Objective questions are graded automatically.",
      "Answers that need a teacher's judgement go to the teacher.",
      "Results are released, and show where the learning gaps are.",
    ],
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

export default function HowItWorksSection() {
  const [index, setIndex] = useState(0);
  const reduced = useReducedMotion();
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });

  const reveal = (delay: number) => ({
    initial: { opacity: 0, y: 22 },
    animate: inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 22 },
    transition: { duration: 0.65, delay, ease },
  });

  // The tab list is vertical on large screens and a row on phones, so both
  // arrow pairs move between tabs.
  const onKeyDown = (event: KeyboardEvent) => {
    const forward = event.key === "ArrowDown" || event.key === "ArrowRight";
    const back = event.key === "ArrowUp" || event.key === "ArrowLeft";
    if (!forward && !back) return;
    event.preventDefault();
    const next = (index + (forward ? 1 : -1) + FLOWS.length) % FLOWS.length;
    setIndex(next);
    tabs.current[next]?.focus();
  };

  const flow = FLOWS[index];

  return (
    <section
      id="how-it-works"
      data-nav-tone="dark"
      data-nav-bg="var(--color-brand-teal-dark)"
      className="relative isolate overflow-hidden bg-brand-teal-dark py-24 text-white md:py-32"
    >

      <div ref={ref} className="mx-auto w-full max-w-7xl px-5 md:px-6 lg:px-8">
        <SectionCaption tone="dark" lesson={4} {...reveal(0)}>
          How it works
        </SectionCaption>
        <motion.h2
          {...reveal(0.1)}
          className="mt-6 max-w-3xl font-display text-4xl leading-[1.02] font-extrabold tracking-[-0.03em] sm:text-5xl lg:text-6xl"
        >
          Four everyday workflows,{" "}
          <span className="text-brand-yellow-light">step by step</span>
        </motion.h2>

        <div className="mt-14 grid gap-10 lg:grid-cols-[4fr_8fr] lg:gap-16">
          <motion.div
            {...reveal(0.2)}
            role="tablist"
            aria-label="PottoFlip workflows"
            aria-orientation="vertical"
            onKeyDown={onKeyDown}
            className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-2 [scrollbar-width:none] lg:mx-0 lg:flex-col lg:overflow-visible lg:px-0 [&::-webkit-scrollbar]:hidden"
          >
            {FLOWS.map((f, i) => {
              const selected = i === index;
              return (
                <button
                  key={f.id}
                  ref={(el) => {
                    tabs.current[i] = el;
                  }}
                  type="button"
                  role="tab"
                  id={`flow-tab-${f.id}`}
                  aria-selected={selected}
                  aria-controls={`flow-panel-${f.id}`}
                  tabIndex={selected ? 0 : -1}
                  onClick={() => setIndex(i)}
                  className={`flex shrink-0 cursor-pointer items-center gap-4 rounded-2xl px-5 py-4 text-left transition-all duration-300 lg:px-6 lg:py-5 ${
                    selected
                      ? "bg-brand-yellow text-ink lg:translate-x-2"
                      : "bg-white/10 text-white hover:bg-white/15"
                  }`}
                >
                  <span
                    className={`grid h-11 w-11 shrink-0 place-items-center rounded-xl ${
                      selected ? "bg-ink text-brand-yellow" : "bg-white/10"
                    }`}
                  >
                    <HugeiconsIcon icon={f.icon} size={22} strokeWidth={1.9} />
                  </span>
                  <span>
                    <span className="block font-display text-lg font-bold whitespace-nowrap">
                      {f.label}
                    </span>
                    <span
                      className={`block text-xs font-semibold tracking-[0.14em] uppercase ${
                        selected ? "text-ink/70" : "text-white/80"
                      }`}
                    >
                      {f.role}
                    </span>
                  </span>
                </button>
              );
            })}
          </motion.div>

          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={flow.id}
              id={`flow-panel-${flow.id}`}
              role="tabpanel"
              aria-labelledby={`flow-tab-${flow.id}`}
              initial={reduced ? { opacity: 0 } : { opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={reduced ? { opacity: 0 } : { opacity: 0, x: -16 }}
              transition={{ duration: 0.35, ease }}
            >
              <p className="max-w-xl font-note text-2xl text-brand-yellow-light">
                {flow.summary}
              </p>

              <ol className="relative mt-8">
                {/* The track the steps run down. */}
                <span
                  aria-hidden
                  className="absolute top-5 bottom-5 left-5 w-0.5 bg-white/20"
                />
                {flow.steps.map((step, i) => (
                  <motion.li
                    key={step}
                    initial={reduced ? false : { opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.08 * i, ease }}
                    className="relative flex items-start gap-5 py-3"
                  >
                    <span
                      className={`relative grid h-10 w-10 shrink-0 place-items-center rounded-full font-display text-sm font-bold ${
                        i === flow.steps.length - 1
                          ? "bg-brand-yellow text-ink"
                          : "bg-brand-teal text-white"
                      }`}
                    >
                      {i + 1}
                    </span>
                    <span className="pt-1.5 text-lg leading-7 text-white/90">
                      {step}
                    </span>
                  </motion.li>
                ))}
              </ol>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

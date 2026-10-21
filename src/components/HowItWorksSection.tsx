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
    title: "A teacher creates a course",
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
    title: "A student completes a lesson",
    summary:
      "Course progress updates according to the completion rules the teacher set.",
    steps: [
      "Sign in and open the learning dashboard.",
      "Select an enrolled course.",
      "Open a lesson and study its content.",
      "Complete the lesson's required activities.",
      "Flip records the progress.",
      "Move straight on to the next lesson.",
    ],
  },
  {
    id: "assignment",
    icon: Task01Icon,
    label: "Set an assignment",
    role: "Teacher and students",
    title: "A teacher sets an assignment",
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
    title: "A teacher runs a practice quiz",
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

  // Arrow keys move between tabs, as the WAI-ARIA tabs pattern expects.
  const onKeyDown = (event: KeyboardEvent) => {
    const step =
      event.key === "ArrowRight" ? 1 : event.key === "ArrowLeft" ? -1 : 0;
    if (!step) return;
    event.preventDefault();
    const next = (index + step + FLOWS.length) % FLOWS.length;
    setIndex(next);
    tabs.current[next]?.focus();
  };

  const flow = FLOWS[index];

  return (
    <section
      id="how-it-works"
      data-nav-tone="light"
      data-nav-bg="var(--canvas)"
      className="relative py-24 text-ink md:py-32"
    >
      <div ref={ref} className="mx-auto w-full max-w-7xl px-5 md:px-6 lg:px-8">
        <SectionCaption {...reveal(0)}>Using Potto Flip</SectionCaption>

        <motion.h2
          {...reveal(0.12)}
          className="mx-auto mt-7 max-w-4xl text-center font-header text-4xl leading-[1.06] font-extrabold tracking-tight sm:text-5xl lg:text-6xl"
        >
          How it works, <span className="text-brand">step by step</span>
        </motion.h2>

        <motion.p
          {...reveal(0.2)}
          className="mx-auto mt-5 max-w-2xl text-center text-base leading-7 text-soft sm:text-lg sm:leading-8"
        >
          Four everyday workflows, from building a course to learning from a
          quiz.
        </motion.p>

        <motion.div
          {...reveal(0.3)}
          role="tablist"
          aria-label="Potto Flip workflows"
          onKeyDown={onKeyDown}
          className="mx-auto mt-12 flex max-w-full gap-2 overflow-x-auto pb-2 [scrollbar-width:none] sm:justify-center [&::-webkit-scrollbar]:hidden"
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
                className={`flex shrink-0 cursor-pointer items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-colors duration-300 ${
                  selected
                    ? "bg-brand text-brand-fg"
                    : "bg-surface-2 text-soft hover:bg-brand/10 hover:text-ink"
                }`}
              >
                <HugeiconsIcon icon={f.icon} size={18} strokeWidth={2} />
                {f.label}
              </button>
            );
          })}
        </motion.div>

        {/* No min-height: every workflow has six steps, so the panels are
            already the same height and switching tabs does not jump. */}
        <div className="mt-14 md:mt-16">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={flow.id}
              id={`flow-panel-${flow.id}`}
              role="tabpanel"
              aria-labelledby={`flow-tab-${flow.id}`}
              initial={reduced ? { opacity: 0 } : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduced ? { opacity: 0 } : { opacity: 0, y: -12 }}
              transition={{ duration: 0.4, ease }}
              className="grid items-start gap-10 md:grid-cols-[5fr_7fr] md:gap-10 lg:gap-16"
            >
              {/* A tinted fill, not a bordered card. */}
              <div className="rounded-3xl bg-brand/8 p-8 sm:p-10">
                <p className="text-xs font-semibold tracking-[0.22em] text-brand uppercase">
                  {flow.role}
                </p>
                <h3 className="mt-3 font-header text-3xl leading-tight font-extrabold tracking-tight sm:text-4xl">
                  {flow.title}
                </h3>
                <p className="mt-5 text-base leading-7 text-soft">
                  {flow.summary}
                </p>
              </div>

              <ol className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
                {flow.steps.map((step, i) => (
                  <li key={step} className="flex items-start gap-4">
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-brand text-sm font-bold text-brand-fg">
                      {i + 1}
                    </span>
                    <span className="pt-1.5 text-base leading-7 text-ink">
                      {step}
                    </span>
                  </li>
                ))}
              </ol>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

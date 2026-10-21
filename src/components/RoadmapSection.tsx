"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import SectionCaption from "@/components/SectionCaption";

// PRD section 10. The PRD is explicit that these are proposed priorities, not
// development status, and the section says so on the page.
const PHASES = [
  {
    phase: "Phase 1",
    title: "The core",
    body: "The complete teaching and learning workflow.",
    items: [
      "Role-based, school-aware sign-in",
      "Courses, modules and lessons",
      "Text, video, PDF and other resources",
      "Progress tracking and lesson navigation",
      "Assignments, submissions and feedback",
      "Quizzes with automatic grading",
      "Student and teacher dashboards",
      "Course and student progress reports",
    ],
  },
  {
    phase: "Phase 2",
    title: "Enhanced learning",
    body: "More ways to practise, follow up and stay informed.",
    items: [
      "Notifications and reminders",
      "Course discussions",
      "Reusable question banks",
      "Advanced question types",
      "Parent progress visibility",
      "Deeper analytics and teacher reports",
      "Better course discovery",
      "Wider integration with Potto",
    ],
  },
  {
    phase: "Phase 3",
    title: "Going further",
    body: "Capabilities added where they are justified.",
    items: [
      "An AI learning assistant",
      "Personalised revision recommendations",
      "Adaptive practice activities",
      "Gamification — points, badges and streaks",
      "Offline learning and sync",
      "Course completion certificates",
      "Advanced learning analytics",
    ],
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

export default function RoadmapSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });

  const reveal = (delay: number) => ({
    initial: { opacity: 0, y: 22 },
    animate: inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 22 },
    transition: { duration: 0.65, delay, ease },
  });

  return (
    <section
      id="roadmap"
      data-nav-tone="light"
      data-nav-bg="var(--canvas)"
      className="relative py-24 text-ink md:py-32"
    >
      <div ref={ref} className="mx-auto w-full max-w-7xl px-5 md:px-6 lg:px-8">
        <SectionCaption {...reveal(0)}>Roadmap</SectionCaption>

        <motion.h2
          {...reveal(0.12)}
          className="mx-auto mt-7 max-w-4xl text-center font-header text-4xl leading-[1.06] font-extrabold tracking-tight sm:text-5xl lg:text-6xl"
        >
          A dependable core, <span className="text-brand">then more</span>
        </motion.h2>

        <motion.p
          {...reveal(0.2)}
          className="mx-auto mt-5 max-w-2xl text-center text-base leading-7 text-soft sm:text-lg sm:leading-8"
        >
          The learning experience comes first; everything else is built on top
          of it. These are our proposed priorities, not a promise of dates.
        </motion.p>

        <ol className="mt-16 grid gap-x-10 gap-y-14 md:grid-cols-3 lg:gap-x-14">
          {PHASES.map((phase, i) => (
            <motion.li key={phase.phase} {...reveal(0.3 + i * 0.12)}>
              <div className="flex items-center gap-4">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-brand font-header text-lg font-extrabold text-brand-fg">
                  {i + 1}
                </span>
                {/* The phases are linked by a rule, not boxed. */}
                <span aria-hidden className="h-0.5 flex-1 bg-brand/20" />
              </div>

              <p className="mt-6 text-xs font-semibold tracking-[0.22em] text-soft uppercase">
                {phase.phase}
              </p>
              <h3 className="mt-2 font-header text-2xl leading-snug font-extrabold tracking-tight">
                {phase.title}
              </h3>
              <p className="mt-2 text-[0.95rem] leading-7 text-soft">
                {phase.body}
              </p>

              <ul className="mt-6 space-y-3">
                {phase.items.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-[0.95rem] leading-7 text-ink"
                  >
                    <span
                      aria-hidden
                      className={`mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full ${
                        i === 0 ? "bg-brand" : "bg-brand-gold"
                      }`}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}

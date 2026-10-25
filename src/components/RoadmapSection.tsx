"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import SectionCaption from "@/components/SectionCaption";

// PRD section 10. The PRD is explicit that these are proposed priorities, not
// development status, and the section says so on the page.
const PHASES = [
  {
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
      data-nav-tone="dark"
      data-nav-bg="var(--color-ink)"
      className="relative isolate overflow-hidden bg-ink py-24 text-white md:py-32"
    >

      <div ref={ref} className="mx-auto w-full max-w-7xl px-5 md:px-6 lg:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <SectionCaption tone="dark" lesson={6} {...reveal(0)}>
              Roadmap
            </SectionCaption>
            <motion.h2
              {...reveal(0.1)}
              className="mt-6 max-w-3xl font-display text-4xl leading-[1.02] font-extrabold tracking-[-0.03em] sm:text-5xl lg:text-6xl"
            >
              A dependable core,{" "}
              <span className="text-brand-yellow">then more</span>
            </motion.h2>
          </div>
          <motion.p
            {...reveal(0.2)}
            className="max-w-sm font-note text-2xl leading-snug text-brand-yellow-light"
          >
            proposed priorities — not a promise of dates
          </motion.p>
        </div>

        {/* One track runs under all three phases; the stops sit on it. */}
        <div className="relative mt-16">
          <motion.span
            aria-hidden
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 1.2, delay: 0.3, ease }}
            className="absolute top-6 right-0 left-0 hidden h-1 origin-left rounded-full bg-white/20 md:block"
          />

          <ol className="grid gap-12 md:grid-cols-3 md:gap-10">
            {PHASES.map((phase, i) => (
              <motion.li
                key={phase.title}
                {...reveal(0.35 + i * 0.15)}
                className="relative"
              >
                <span
                  className={`relative grid h-13 w-13 place-items-center rounded-full font-display text-lg font-extrabold ${
                    i === 0
                      ? "bg-brand-yellow text-ink"
                      : i === 1
                        ? "bg-brand-teal text-white"
                        : "bg-white/15 text-white"
                  }`}
                >
                  {i + 1}
                </span>

                <span
                  aria-hidden
                  className="pointer-events-none absolute top-16 right-0 font-display text-[7rem] leading-none font-extrabold text-white/6 select-none"
                >
                  0{i + 1}
                </span>

                <p className="mt-8 text-xs font-semibold tracking-[0.2em] text-white/80 uppercase">
                  Phase {i + 1}
                </p>
                <h3 className="mt-2 font-display text-3xl font-extrabold tracking-tight">
                  {phase.title}
                </h3>
                <p className="mt-2 text-[0.95rem] leading-7 text-white/80">
                  {phase.body}
                </p>

                <ul className="mt-6 space-y-3">
                  {phase.items.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 text-[0.95rem] leading-7 text-white/90"
                    >
                      <span
                        aria-hidden
                        className={`mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full ${
                          i === 0 ? "bg-brand-yellow" : "bg-white/40"
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
      </div>
    </section>
  );
}

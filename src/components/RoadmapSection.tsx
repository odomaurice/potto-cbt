"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import SectionCaption from "@/components/SectionCaption";

// PRD section 9. The PRD is explicit that these are proposed priorities, not
// development status, and the section says so on the page.
const PHASES = [
  {
    title: "Core CBT",
    body: "A complete, dependable exam workflow.",
    items: [
      "Role-based sign-in, school by school",
      "School, class, subject and student mapping",
      "Question bank — multiple choice and true or false",
      "Exam creation, configuration, scheduling and publication",
      "Eligibility checks and the student exam dashboard",
      "Server-side timer, navigation and automatic saving",
      "Automatic marking of objective questions",
      "Results, dashboards and basic reports",
      "Audit logs and recovery from interrupted sessions",
    ],
  },
  {
    title: "Advanced management",
    body: "More question types, marking by hand, supervision.",
    items: [
      "Question pools and randomisation",
      "Multiple select and fill in the blanks",
      "Short answer and essay questions",
      "Manual marking workflows",
      "Invigilator dashboards and incident management",
      "Advanced scheduling",
      "Detailed analytics, with CSV, Excel and PDF exports",
      "Wider Potto Learning Suite integration",
    ],
  },
  {
    title: "Advanced assessment",
    body: "Added where they are justified.",
    items: [
      "Advanced question types and accommodations",
      "Deeper question analysis",
      "Large-scale concurrent exam optimisation",
      "Offline exams, after security validation",
      "Advanced proctoring, after privacy and legal review",
      "AI-assisted question drafting",
      "AI marking suggestions, always with human review",
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
            <SectionCaption tone="dark" question={7} {...reveal(0)}>
              Roadmap
            </SectionCaption>
            <motion.h2
              {...reveal(0.1)}
              className="mt-6 max-w-3xl font-display text-4xl leading-[1.08] font-bold tracking-[-0.03em] sm:text-5xl lg:text-[3.5rem]"
            >
              A dependable core,{" "}
              <span className="text-brand-yellow">then more</span>
            </motion.h2>
          </div>
          <motion.p
            {...reveal(0.2)}
            className="inline-flex self-start rounded-lg bg-white/10 px-3 py-1.5 font-mono text-xs text-white/85 lg:self-auto"
          >
            Proposed priorities — not a promise of dates
          </motion.p>
        </div>

        <ol className="mt-16 grid gap-4 md:grid-cols-3">
          {PHASES.map((phase, i) => (
            <motion.li
              key={phase.title}
              {...reveal(0.3 + i * 0.12)}
              className={`rounded-[1.75rem] p-7 sm:p-8 ${
                i === 0 ? "bg-brand-teal-dark" : "bg-white/6"
              }`}
            >
              {/* Three segments, filled up to this phase. */}
              <div aria-hidden className="flex gap-1.5">
                {PHASES.map((_, j) => (
                  <span
                    key={j}
                    className={`h-1.5 flex-1 rounded-full ${
                      j <= i
                        ? i === 0
                          ? "bg-brand-yellow"
                          : "bg-white/60"
                        : "bg-white/15"
                    }`}
                  />
                ))}
              </div>

              <p className="mt-8 font-mono text-xs font-bold text-brand-yellow-light">
                PHASE {String(i + 1).padStart(2, "0")}
                {i > 0 && <span className="text-white/70"> · PLANNED</span>}
              </p>
              <h3 className="mt-2 font-display text-2xl font-bold tracking-tight sm:text-3xl">
                {phase.title}
              </h3>
              <p className="mt-2 text-[0.95rem] leading-7 text-white/80">
                {phase.body}
              </p>

              <ul className="mt-6 space-y-3">
                {phase.items.map((item) => (
                  <li key={item} className="flex gap-3 text-[0.95rem] leading-7 text-white/90">
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
    </section>
  );
}

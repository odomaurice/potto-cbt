"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Analytics01Icon,
  Comment01Icon,
  CourseIcon,
  LibraryIcon,
  PlayIcon,
  QuizIcon,
  SquareLock01Icon,
  Task01Icon,
} from "@hugeicons/core-free-icons";
import SectionCaption from "@/components/SectionCaption";

// The core modules of PRD section 4 — the Phase 1 scope in section 10.
const FEATURES = [
  {
    icon: CourseIcon,
    title: "Courses & modules",
    body: "Organise each course into modules, topics and lessons, and move it from draft to published to archived.",
  },
  {
    icon: PlayIcon,
    title: "Rich lessons",
    body: "Combine text, images, video, audio, PDFs, presentations and links in a distraction-free lesson.",
  },
  {
    icon: LibraryIcon,
    title: "Resource library",
    body: "Upload once, then search, preview and reuse materials across as many lessons as you need.",
  },
  {
    icon: Task01Icon,
    title: "Assignments",
    body: "Set instructions, deadlines and late rules, collect files or text, and see what is missing.",
  },
  {
    icon: QuizIcon,
    title: "Quizzes & practice",
    body: "Multiple choice, true or false, short answer and more — objective questions graded automatically.",
  },
  {
    icon: Comment01Icon,
    title: "Grades & feedback",
    body: "Grade submissions, explain answers and release results to students when you are ready.",
  },
  {
    icon: Analytics01Icon,
    title: "Progress tracking",
    body: "Opening a lesson is not the same as completing it, so progress means something.",
  },
  {
    icon: SquareLock01Icon,
    title: "Secure, school by school",
    body: "Role-based access for every user, and each school's courses and records kept apart.",
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

export default function FeaturesSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  const reveal = (delay: number) => ({
    initial: { opacity: 0, y: 22 },
    animate: inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 22 },
    transition: { duration: 0.65, delay, ease },
  });

  return (
    <section
      id="features"
      data-nav-tone="dark"
      data-nav-bg="var(--color-brand-teal-dark)"
      className="relative isolate bg-brand-teal-dark py-28 text-white md:py-36"
    >
      <div ref={ref} className="mx-auto w-full max-w-7xl px-5 md:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <SectionCaption tone="dark" {...reveal(0)}>
            Core Features
          </SectionCaption>

          <motion.h2
            {...reveal(0.12)}
            className="mt-4 font-header text-3xl leading-[1.1] font-extrabold tracking-tight sm:text-4xl lg:text-5xl"
          >
            Everything a{" "}
            <span className="text-brand-yellow-light">course</span> needs
          </motion.h2>

          <motion.p
            {...reveal(0.24)}
            className="mt-5 text-lg leading-8 text-white/90"
          >
            From the first lesson to the last piece of feedback, in one
            structured learning experience.
          </motion.p>
        </div>

        <div className="mt-20 grid gap-x-10 gap-y-16 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-12">
          {FEATURES.map((feature, i) => (
            <motion.article
              key={feature.title}
              {...reveal(0.36 + i * 0.08)}
              className="text-center"
            >
              <span className="mx-auto grid h-20 w-20 place-items-center rounded-full bg-white/10 text-white">
                <HugeiconsIcon
                  icon={feature.icon}
                  size={34}
                  strokeWidth={1.7}
                />
              </span>

              <h3 className="mt-7 font-header text-xl leading-snug font-extrabold tracking-tight lg:text-2xl">
                {feature.title}
              </h3>
              <p className="mx-auto mt-4 max-w-xs text-[0.95rem] leading-8 text-white/90">
                {feature.body}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

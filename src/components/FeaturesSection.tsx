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
const MEDIA = [
  "Rich text",
  "Images",
  "Video",
  "Audio",
  "PDF",
  "Presentations",
  "Downloads",
  "Links",
];

const QUESTION_TYPES = [
  "Multiple choice",
  "Multiple select",
  "True or false",
  "Short answer",
  "Fill in the blanks",
];

const ease = [0.22, 1, 0.36, 1] as const;

export default function FeaturesSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.08 });

  const reveal = (delay: number) => ({
    initial: { opacity: 0, y: 26 },
    animate: inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 26 },
    transition: { duration: 0.7, delay, ease },
  });

  const tile = "relative overflow-hidden rounded-[1.75rem] p-7 sm:p-8";

  return (
    <section
      id="features"
      data-nav-tone="light"
      data-nav-bg="var(--canvas)"
      className="relative py-24 text-ink md:py-32"
    >
      <div ref={ref} className="mx-auto w-full max-w-7xl px-5 md:px-6 lg:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <SectionCaption lesson={2} {...reveal(0)}>
              Core features
            </SectionCaption>
            <motion.h2
              {...reveal(0.1)}
              className="mt-6 max-w-3xl font-display text-4xl leading-[1.02] font-extrabold tracking-[-0.03em] sm:text-5xl lg:text-6xl"
            >
              Everything a course needs, in{" "}
              <span className="marker">one place</span>
            </motion.h2>
          </div>
          <motion.p
            {...reveal(0.2)}
            className="max-w-sm text-lg leading-8 text-soft"
          >
            From the first lesson to the last piece of feedback, in one
            structured learning experience.
          </motion.p>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {/* Rich lessons — the big tile */}
          <motion.article
            {...reveal(0.25)}
            className={`${tile} dog-ear flex flex-col justify-between bg-brand-teal-dark text-white md:col-span-2 lg:row-span-2 [--ear:3.5rem]`}
          >
            <div className="relative">
              <span className="grid h-14 w-14 place-items-center rounded-2xl bg-white/15">
                <HugeiconsIcon icon={PlayIcon} size={28} strokeWidth={1.8} />
              </span>
              <h3 className="mt-8 font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
                Rich lessons
              </h3>
              <p className="mt-4 max-w-md text-lg leading-8 text-white/90">
                Mix any of these in a distraction-free lesson, with clear
                previous and next navigation.
              </p>
            </div>
            <ul className="relative mt-10 flex flex-wrap gap-2">
              {MEDIA.map((m, i) => (
                <li
                  key={m}
                  className={`rounded-full px-4 py-2 text-sm font-semibold ${
                    i % 3 === 1 ? "bg-brand-yellow text-ink" : "bg-white/15"
                  }`}
                >
                  {m}
                </li>
              ))}
            </ul>
          </motion.article>

          {/* Courses & modules — with the structure drawn as an outline */}
          <motion.article {...reveal(0.32)} className={`${tile} bg-brand/8`}>
            <HugeiconsIcon
              icon={CourseIcon}
              size={30}
              strokeWidth={1.8}
              className="text-brand"
            />
            <h3 className="mt-6 font-display text-xl font-extrabold tracking-tight">
              Courses &amp; modules
            </h3>
            <ul
              aria-label="A course is organised into modules, topics and lessons"
              className="mt-5 space-y-1.5 text-sm font-semibold"
            >
              <li className="text-ink">Course</li>
              <li className="pl-4 text-ink/75">↳ Module</li>
              <li className="pl-8 text-ink/75">↳ Topic</li>
              <li className="pl-12 text-brand">↳ Lesson</li>
            </ul>
            <p className="mt-5 text-sm leading-6 text-soft">
              Draft, published or archived.
            </p>
          </motion.article>

          <motion.article {...reveal(0.38)} className={`${tile} bg-accent`}>
            <HugeiconsIcon
              icon={LibraryIcon}
              size={30}
              strokeWidth={1.8}
              className="text-accent-foreground"
            />
            <h3 className="mt-6 font-display text-xl font-extrabold tracking-tight">
              Resource library
            </h3>
            <p className="mt-3 text-[0.95rem] leading-7 text-ink/75">
              Upload once, then search, preview and reuse materials across
              lessons.
            </p>
          </motion.article>

          <motion.article {...reveal(0.44)} className={`${tile} bg-surface-2`}>
            <HugeiconsIcon
              icon={Task01Icon}
              size={30}
              strokeWidth={1.8}
              className="text-brand"
            />
            <h3 className="mt-6 font-display text-xl font-extrabold tracking-tight">
              Assignments
            </h3>
            <p className="mt-3 text-[0.95rem] leading-7 text-soft">
              Instructions, deadlines and late rules. Collect files or text,
              and see what is missing.
            </p>
          </motion.article>

          <motion.article {...reveal(0.5)} className={`${tile} bg-brand/8`}>
            <HugeiconsIcon
              icon={Comment01Icon}
              size={30}
              strokeWidth={1.8}
              className="text-brand"
            />
            <h3 className="mt-6 font-display text-xl font-extrabold tracking-tight">
              Grades &amp; feedback
            </h3>
            <p className="mt-3 text-[0.95rem] leading-7 text-soft">
              Grade, write feedback and release results when you are ready.
            </p>
          </motion.article>

          {/* Quizzes — wide yellow tile */}
          <motion.article
            {...reveal(0.56)}
            className={`${tile} dog-ear bg-brand-yellow md:col-span-2 [--ear:3rem]`}
          >
            <div className="flex items-start justify-between gap-6">
              <div>
                <HugeiconsIcon icon={QuizIcon} size={30} strokeWidth={1.8} />
                <h3 className="mt-6 font-display text-2xl font-extrabold tracking-tight sm:text-3xl">
                  Quizzes &amp; practice
                </h3>
                <p className="mt-3 max-w-md text-[0.95rem] leading-7 text-ink/80">
                  Low-stakes practice with explanations. Objective questions
                  are graded automatically; the rest go to the teacher.
                </p>
              </div>
            </div>
            <ul className="mt-7 flex flex-wrap gap-2">
              {QUESTION_TYPES.map((q) => (
                <li
                  key={q}
                  className="rounded-full bg-ink/10 px-4 py-2 text-sm font-semibold"
                >
                  {q}
                </li>
              ))}
            </ul>
          </motion.article>

          {/* Progress — the opened ≠ completed idea, drawn */}
          <motion.article
            {...reveal(0.62)}
            className={`${tile} bg-ink text-white md:col-span-2`}
          >
            <HugeiconsIcon
              icon={Analytics01Icon}
              size={30}
              strokeWidth={1.8}
              className="text-brand-yellow"
            />
            <h3 className="mt-6 font-display text-2xl font-extrabold tracking-tight sm:text-3xl">
              Progress that means something
            </h3>
            <div
              aria-label="Opening a lesson is not the same as completing it"
              className="mt-6 flex flex-wrap items-center gap-3 font-display text-lg font-bold"
            >
              <span className="rounded-full bg-white/15 px-4 py-2">
                Opened a lesson
              </span>
              <span className="text-3xl text-brand-yellow">≠</span>
              <span className="rounded-full bg-brand-yellow px-4 py-2 text-ink">
                Completed it
              </span>
            </div>
            <p className="mt-6 max-w-lg text-[0.95rem] leading-7 text-white/80">
              Completion rules are set per lesson, so teachers can see who is
              on track and who has not started.
            </p>
          </motion.article>

          {/* Security — full-width strip */}
          <motion.article
            {...reveal(0.68)}
            className={`${tile} flex flex-col gap-6 bg-brand/8 md:col-span-2 md:flex-row md:items-center lg:col-span-4`}
          >
            <span className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-brand text-brand-fg">
              <HugeiconsIcon
                icon={SquareLock01Icon}
                size={30}
                strokeWidth={1.8}
              />
            </span>
            <div>
              <h3 className="font-display text-2xl font-extrabold tracking-tight">
                Secure, school by school
              </h3>
              <p className="mt-2 max-w-3xl text-[0.95rem] leading-7 text-soft">
                Role-based access for every user, server-side checks, and each
                school&apos;s courses, submissions and grades kept apart from
                every other school&apos;s.
              </p>
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  );
}

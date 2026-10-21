"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  SchoolIcon,
  StudentIcon,
  TeacherIcon,
  UserMultipleIcon,
} from "@hugeicons/core-free-icons";
import SectionCaption from "@/components/SectionCaption";

// PRD section 3. The platform super administrator is Potto's own role, not a
// school's, so it is left off a page written for schools.
const ROLES = [
  {
    icon: StudentIcon,
    title: "Students",
    note: null,
    points: [
      "See enrolled courses and continue where they stopped",
      "Watch, read and download permitted lesson materials",
      "Complete assignments and quizzes before deadlines",
      "Review feedback, released scores and their own progress",
    ],
  },
  {
    icon: TeacherIcon,
    title: "Teachers",
    note: null,
    points: [
      "Build courses from modules, lessons and resources",
      "Assign courses to classes and schedule lessons",
      "Set assignments and quizzes, then grade and give feedback",
      "Spot students who have not started or need support",
    ],
  },
  {
    icon: SchoolIcon,
    title: "School administrators",
    note: null,
    points: [
      "Approve teachers and review published courses",
      "Configure learning settings and permissions",
      "Follow participation and completion across the school",
      "Filter reports by session, class, subject and course",
    ],
  },
  {
    icon: UserMultipleIcon,
    title: "Parents & guardians",
    note: "Optional — your school decides",
    points: [
      "Follow a linked child's learning progress",
      "See completed and outstanding assignments",
      "Read released grades and teacher feedback",
      "Never change submissions or see another family's records",
    ],
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

export default function RolesSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });

  const reveal = (delay: number) => ({
    initial: { opacity: 0, y: 22 },
    animate: inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 22 },
    transition: { duration: 0.65, delay, ease },
  });

  return (
    <section
      id="roles"
      data-nav-tone="light"
      data-nav-bg="var(--canvas)"
      className="relative py-24 text-ink md:py-32"
    >
      <div ref={ref} className="mx-auto w-full max-w-7xl px-5 md:px-6 lg:px-8">
        <SectionCaption {...reveal(0)}>Who it&apos;s for</SectionCaption>

        <motion.h2
          {...reveal(0.12)}
          className="mx-auto mt-7 max-w-4xl text-center font-header text-4xl leading-[1.06] font-extrabold tracking-tight sm:text-5xl lg:text-6xl"
        >
          Built for <span className="text-brand">every role</span> in a school
        </motion.h2>

        <motion.p
          {...reveal(0.2)}
          className="mx-auto mt-5 max-w-2xl text-center text-base leading-7 text-soft sm:text-lg sm:leading-8"
        >
          Everyone signs in to the same platform and sees only the classes,
          courses and records their role allows.
        </motion.p>

        <div className="mt-16 grid gap-x-10 gap-y-14 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-12">
          {ROLES.map((role, i) => (
            <motion.article key={role.title} {...reveal(0.3 + i * 0.12)}>
              <span className="grid h-14 w-14 place-items-center rounded-2xl bg-brand text-brand-fg">
                <HugeiconsIcon icon={role.icon} size={28} strokeWidth={1.8} />
              </span>

              <h3 className="mt-6 font-header text-xl leading-snug font-extrabold tracking-tight">
                {role.title}
              </h3>
              {role.note && (
                <p className="mt-2 inline-block rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">
                  {role.note}
                </p>
              )}

              <ul className="mt-5 space-y-3">
                {role.points.map((point) => (
                  <li
                    key={point}
                    className="flex gap-3 text-[0.95rem] leading-7 text-soft"
                  >
                    <span
                      aria-hidden
                      className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-gold"
                    />
                    {point}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

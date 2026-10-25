"use client";

import { useRef, useState } from "react";
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
    id: "students",
    icon: StudentIcon,
    title: "Students",
    lead: "A dashboard that puts the next thing to do first.",
    note: null,
    fill: "bg-brand-teal-dark text-white",
    points: [
      "See enrolled courses and continue where they stopped",
      "Watch, read and download permitted lesson materials",
      "Complete assignments and quizzes before deadlines",
      "Review feedback, released scores and their own progress",
    ],
  },
  {
    id: "teachers",
    icon: TeacherIcon,
    title: "Teachers",
    lead: "Build once, reuse, and see who needs help.",
    note: null,
    fill: "bg-brand-yellow text-ink",
    points: [
      "Build courses from modules, lessons and resources",
      "Assign courses to classes and schedule lessons",
      "Set assignments and quizzes, then grade and give feedback",
      "Spot students who have not started or need support",
    ],
  },
  {
    id: "admins",
    icon: SchoolIcon,
    title: "School administrators",
    lead: "School-wide visibility without a second records system.",
    note: null,
    fill: "bg-brand/10 text-ink",
    points: [
      "Approve teachers and review published courses",
      "Configure learning settings and permissions",
      "Follow participation and completion across the school",
      "Filter reports by session, class, subject and course",
    ],
  },
  {
    id: "parents",
    icon: UserMultipleIcon,
    title: "Parents & guardians",
    lead: "A window on their own child's learning — nothing more.",
    note: "Optional — your school decides",
    fill: "bg-surface-2 text-ink",
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
  const [active, setActive] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

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
      <div
        ref={ref}
        className="mx-auto grid w-full max-w-7xl gap-12 px-5 md:px-6 lg:grid-cols-[5fr_7fr] lg:gap-16 lg:px-8"
      >
        {/* Sticky on large screens: the heading and role index stay put while
            the role panels scroll past them. */}
        <div className="lg:sticky lg:top-32 lg:self-start">
          <SectionCaption lesson={3} {...reveal(0)}>
            Who it&apos;s for
          </SectionCaption>
          <motion.h2
            {...reveal(0.1)}
            className="mt-6 font-display text-4xl leading-[1.02] font-extrabold tracking-[-0.03em] sm:text-5xl lg:text-6xl"
          >
            Four roles. <span className="text-brand">One platform.</span>
          </motion.h2>
          <motion.p
            {...reveal(0.2)}
            className="mt-6 max-w-md text-lg leading-8 text-soft"
          >
            Everyone signs in to the same PottoFlip and sees only the classes,
            courses and records their role allows.
          </motion.p>

          <motion.ol {...reveal(0.3)} className="mt-10 hidden space-y-1 lg:block">
            {ROLES.map((role, i) => (
              <li key={role.id}>
                <a
                  href={`/#role-${role.id}`}
                  aria-current={active === i ? "true" : undefined}
                  className={`flex items-center gap-4 rounded-2xl px-4 py-3 font-display text-lg font-bold transition-colors duration-300 ${
                    active === i
                      ? "bg-brand text-brand-fg"
                      : "text-ink/60 hover:bg-ink/5 hover:text-ink"
                  }`}
                >
                  <span className="w-6 text-sm">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {role.title}
                </a>
              </li>
            ))}
          </motion.ol>
        </div>

        <div className="space-y-5">
          {ROLES.map((role, i) => (
            // Two jobs, two elements: the outer one tracks which role is in
            // view (every time), the inner one reveals itself (once).
            <motion.div
              key={role.id}
              id={`role-${role.id}`}
              onViewportEnter={() => setActive(i)}
              viewport={{ amount: 0.6 }}
            >
            <motion.article
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.7, ease }}
              className={`dog-ear relative overflow-hidden rounded-[2rem] p-8 sm:p-10 lg:min-h-[26rem] [--ear:3rem] ${role.fill}`}
            >
              <span
                aria-hidden
                className="pointer-events-none absolute -right-4 -bottom-10 font-display text-[11rem] leading-none font-extrabold opacity-10 select-none"
              >
                {String(i + 1).padStart(2, "0")}
              </span>

              <div className="relative flex flex-wrap items-center gap-4">
                <span
                  className={`grid h-14 w-14 place-items-center rounded-2xl ${
                    i === 0
                      ? "bg-white/15"
                      : i === 1
                        ? "bg-ink text-brand-yellow"
                        : "bg-brand text-brand-fg"
                  }`}
                >
                  <HugeiconsIcon icon={role.icon} size={28} strokeWidth={1.8} />
                </span>
                {role.note && (
                  <span className="rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">
                    {role.note}
                  </span>
                )}
              </div>

              <h3 className="relative mt-8 font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
                {role.title}
              </h3>
              <p
                className={`relative mt-3 max-w-lg font-note text-2xl ${
                  i === 0
                    ? "text-brand-yellow-light"
                    : i === 1
                      ? "text-ink/80"
                      : "text-brand"
                }`}
              >
                {role.lead}
              </p>

              <ul className="relative mt-8 grid gap-x-8 gap-y-4 sm:grid-cols-2">
                {role.points.map((point) => (
                  <li
                    key={point}
                    className={`flex gap-3 text-[0.95rem] leading-7 ${
                      i === 0 ? "text-white/90" : "text-ink/80"
                    }`}
                  >
                    <span
                      aria-hidden
                      className={`mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full ${
                        i === 0 ? "bg-brand-yellow" : i === 1 ? "bg-ink" : "bg-brand-gold"
                      }`}
                    />
                    {point}
                  </li>
                ))}
              </ul>
            </motion.article>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

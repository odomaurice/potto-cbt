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
  Cancel01Icon,
  SchoolIcon,
  StudentIcon,
  TeacherIcon,
  Tick02Icon,
} from "@hugeicons/core-free-icons";
import SectionCaption from "@/components/SectionCaption";

// PRD section 3: the three roles every school has. The platform super
// administrator is Potto's own role, so it is left off a page written for
// schools. Each "limit" is a
// restriction the PRD states for that role.
const ROLES = [
  {
    id: "students",
    icon: StudentIcon,
    title: "Students",
    lead: "A calm exam room, and only their own exams in it.",
    points: [
      "See upcoming, available and completed exams",
      "Read the instructions and confirm they are ready",
      "Answer, flag for review and track the time left",
      "Get confirmation that their paper was submitted",
      "See released results and permitted explanations",
    ],
    limit:
      "No restricted questions, answer keys, other students' work or unreleased results.",
  },
  {
    id: "teachers",
    icon: TeacherIcon,
    title: "Teachers",
    lead: "Write once, reuse often, see where students struggle.",
    points: [
      "Build and maintain question banks",
      "Create exams and practice tests, and preview them",
      "Set duration, availability and scoring rules",
      "Review automatic marks and release scores where permitted",
      "Analyse student and class performance",
    ],
    limit: "Only the exams, students and results their permissions cover.",
  },
  {
    id: "admins",
    icon: SchoolIcon,
    title: "School administrators",
    lead: "School-wide policy, oversight and approvals.",
    points: [
      "Configure exam settings and school-wide policies",
      "Schedule exams and set eligibility rules",
      "Approve exams where the school requires it",
      "Follow live sessions, incidents and reports",
      "Decide when results become visible",
    ],
    limit:
      "Can't quietly change a completed score — only through an authorised, traceable process.",
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

export default function RolesSection() {
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

  const onKeyDown = (event: KeyboardEvent) => {
    const forward = event.key === "ArrowRight" || event.key === "ArrowDown";
    const back = event.key === "ArrowLeft" || event.key === "ArrowUp";
    if (!forward && !back) return;
    event.preventDefault();
    const next = (index + (forward ? 1 : -1) + ROLES.length) % ROLES.length;
    setIndex(next);
    tabs.current[next]?.focus();
  };

  const role = ROLES[index];

  return (
    <section
      id="roles"
      data-nav-tone="light"
      data-nav-bg="var(--canvas)"
      className="relative py-24 text-ink md:py-32"
    >
      <div ref={ref} className="mx-auto w-full max-w-7xl px-5 md:px-6 lg:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <SectionCaption question={4} {...reveal(0)}>
              Who it&apos;s for
            </SectionCaption>
            <motion.h2
              {...reveal(0.1)}
              className="mt-6 max-w-3xl font-display text-4xl leading-[1.08] font-bold tracking-[-0.03em] sm:text-5xl lg:text-[3.5rem]"
            >
              Three roles. <span className="text-brand">Clear lines between them.</span>
            </motion.h2>
          </div>
          <motion.p {...reveal(0.2)} className="max-w-sm text-lg leading-8 text-soft">
            Everyone signs in to the same Potto CBT and sees only what their
            role allows — checked on the server, not just hidden on screen.
          </motion.p>
        </div>

        <motion.div
          {...reveal(0.3)}
          role="tablist"
          aria-label="Roles"
          onKeyDown={onKeyDown}
          className="-mx-5 mt-12 flex gap-2 overflow-x-auto px-5 pb-2 [scrollbar-width:none] lg:mx-0 lg:px-0 [&::-webkit-scrollbar]:hidden"
        >
          {ROLES.map((r, i) => {
            const selected = i === index;
            return (
              <button
                key={r.id}
                ref={(el) => {
                  tabs.current[i] = el;
                }}
                type="button"
                role="tab"
                id={`role-tab-${r.id}`}
                aria-selected={selected}
                aria-controls={`role-panel-${r.id}`}
                tabIndex={selected ? 0 : -1}
                onClick={() => setIndex(i)}
                className={`flex shrink-0 cursor-pointer items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold whitespace-nowrap transition-colors duration-300 ${
                  selected
                    ? "bg-ink text-white"
                    : "bg-surface-2 text-ink/70 hover:bg-brand/10 hover:text-ink"
                }`}
              >
                <HugeiconsIcon icon={r.icon} size={18} strokeWidth={2} />
                {r.title}
              </button>
            );
          })}
        </motion.div>

        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={role.id}
            id={`role-panel-${role.id}`}
            role="tabpanel"
            aria-labelledby={`role-tab-${role.id}`}
            initial={reduced ? { opacity: 0 } : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduced ? { opacity: 0 } : { opacity: 0, y: -10 }}
            transition={{ duration: 0.35, ease }}
            className="mt-6 grid gap-4 lg:grid-cols-[5fr_7fr]"
          >
            <div className="relative overflow-hidden rounded-[2rem] bg-brand-teal-dark p-8 text-white sm:p-10">
              <span
                aria-hidden
                className="pointer-events-none absolute -right-2 -bottom-8 font-mono text-[9rem] leading-none font-bold text-white/8 select-none"
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="relative grid h-14 w-14 place-items-center rounded-2xl bg-brand-yellow text-ink">
                <HugeiconsIcon icon={role.icon} size={28} strokeWidth={1.8} />
              </span>
              <h3 className="relative mt-8 font-display text-3xl font-bold tracking-tight sm:text-4xl">
                {role.title}
              </h3>
              <p className="relative mt-3 max-w-sm text-lg leading-8 text-white/90">
                {role.lead}
              </p>
            </div>

            <div className="rounded-[2rem] bg-brand/8 p-8 sm:p-10">
              <p className="font-mono text-xs font-bold tracking-wider text-brand uppercase">
                Can
              </p>
              <ul className="mt-4 space-y-3">
                {role.points.map((point) => (
                  <li key={point} className="flex gap-3 text-base leading-7 text-ink/85">
                    <span className="mt-1 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-brand text-brand-fg">
                      <HugeiconsIcon icon={Tick02Icon} size={12} strokeWidth={3} />
                    </span>
                    {point}
                  </li>
                ))}
              </ul>

              {role.limit && (
                <>
                  <p className="mt-8 font-mono text-xs font-bold tracking-wider text-soft uppercase">
                    Can&apos;t
                  </p>
                  <p className="mt-3 flex gap-3 text-base leading-7 text-ink/85">
                    <span className="mt-1 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-ink text-white">
                      <HugeiconsIcon icon={Cancel01Icon} size={11} strokeWidth={3} />
                    </span>
                    {role.limit}
                  </p>
                </>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

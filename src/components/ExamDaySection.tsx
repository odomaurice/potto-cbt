"use client";

import { useRef } from "react";
import {
  motion,
  useInView,
  useReducedMotion,
  useScroll,
  useSpring,
} from "framer-motion";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  CheckmarkCircle02Icon,
  CloudSavingDone01Icon,
  FileValidationIcon,
  Flag01Icon,
  Login01Icon,
  Note01Icon,
  Timer01Icon,
  WifiDisconnected01Icon,
} from "@hugeicons/core-free-icons";
import SectionCaption from "@/components/SectionCaption";

// One sitting, from the candidate's side: PRD 4.7 – 4.11. The times are an
// example, and the page says so.
const MOMENTS = [
  {
    time: "08:55",
    icon: Login01Icon,
    title: "Sign in",
    body: "The dashboard lists only the exams assigned to this student — upcoming, available, in progress or done.",
  },
  {
    time: "08:58",
    icon: Note01Icon,
    title: "Read the instructions",
    body: "Duration, marks, rules and permitted resources come first. The student confirms they are ready — with an access code too, if the school uses one.",
  },
  {
    time: "09:00",
    icon: Timer01Icon,
    title: "Start — the deadline is set",
    body: "The server fixes the finish at 10:00. The countdown follows it, not the computer's clock.",
  },
  {
    time: "09:14",
    icon: Flag01Icon,
    title: "Answer, flag, move on",
    body: "Each answer saves as it is chosen. Questions can be marked for review, and the palette shows what is answered and what is not.",
  },
  {
    time: "09:31",
    icon: WifiDisconnected01Icon,
    title: "The connection drops",
    body: "The student is told straight away that answers can't sync. Saves keep retrying, and the interruption is recorded for staff.",
    alert: true,
  },
  {
    time: "09:34",
    icon: CloudSavingDone01Icon,
    title: "Back online",
    body: "The latest saved answers are restored. The deadline is still 10:00 — no time gained, none lost.",
  },
  {
    time: "09:52",
    icon: FileValidationIcon,
    title: "Submit",
    body: "A summary shows anything left unanswered. Once confirmed, the paper is in and the answers are locked.",
  },
  {
    time: "10:00",
    icon: CheckmarkCircle02Icon,
    title: "Time's up",
    body: "For anyone still writing, the latest saved answers are submitted under the exam's policy — once, never twice.",
    last: true,
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

export default function ExamDaySection() {
  const ref = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLOListElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });
  const reduced = useReducedMotion();

  // The track fills as the reader scrolls down the timeline.
  const { scrollYProgress } = useScroll({
    target: track,
    offset: ["start 70%", "end 60%"],
  });
  const fill = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  const reveal = (delay: number) => ({
    initial: { opacity: 0, y: 22 },
    animate: inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 22 },
    transition: { duration: 0.65, delay, ease },
  });

  return (
    <section
      id="exam-day"
      data-nav-tone="dark"
      data-nav-bg="var(--color-ink)"
      className="relative isolate overflow-hidden bg-ink py-24 text-white md:py-32"
    >
      <div
        ref={ref}
        className="mx-auto grid w-full max-w-7xl gap-12 px-5 md:px-6 lg:grid-cols-[5fr_7fr] lg:gap-16 lg:px-8"
      >
        <div className="lg:sticky lg:top-32 lg:self-start">
          <SectionCaption tone="dark" question={3} {...reveal(0)}>
            Exam day
          </SectionCaption>
          <motion.h2
            {...reveal(0.1)}
            className="mt-6 font-display text-4xl leading-[1.08] font-bold tracking-[-0.03em] sm:text-5xl lg:text-[3.5rem]"
          >
            One sitting,{" "}
            <span className="text-brand-yellow">minute by minute</span>
          </motion.h2>
          <motion.p {...reveal(0.2)} className="mt-6 max-w-md text-lg leading-8 text-white/90">
            What a student sees from sign-in to submission — including the
            moment the network gives out, which is when an exam platform
            earns its keep.
          </motion.p>
          <motion.p
            {...reveal(0.3)}
            className="mt-8 inline-flex rounded-lg bg-white/10 px-3 py-1.5 font-mono text-xs text-white/80"
          >
            An example exam · 60 minutes · times illustrative
          </motion.p>
        </div>

        <ol ref={track} className="relative">
          {/* The track, and its fill. */}
          <span
            aria-hidden
            className="absolute top-6 bottom-6 left-[1.4rem] w-1 rounded-full bg-white/12"
          />
          <motion.span
            aria-hidden
            style={{ scaleY: reduced ? 1 : fill }}
            className="absolute top-6 bottom-6 left-[1.4rem] w-1 origin-top rounded-full bg-brand-teal"
          />

          {MOMENTS.map((m) => (
            <motion.li
              key={m.time}
              initial={reduced ? false : { opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.55, ease }}
              className="relative flex gap-5 pb-8 last:pb-0 sm:gap-6"
            >
              <span
                className={`relative grid h-12 w-12 shrink-0 place-items-center rounded-2xl ${
                  m.alert
                    ? "bg-brand-yellow text-ink"
                    : m.last
                      ? "bg-white text-ink"
                      : "bg-brand-teal-dark text-white"
                }`}
              >
                <HugeiconsIcon icon={m.icon} size={22} strokeWidth={1.9} />
              </span>
              <div
                className={`flex-1 rounded-2xl p-5 sm:p-6 ${
                  m.alert ? "bg-brand-yellow text-ink" : "bg-white/6"
                }`}
              >
                <p
                  className={`font-mono text-sm font-bold ${
                    m.alert ? "text-ink/70" : "text-brand-yellow-light"
                  }`}
                >
                  {m.time}
                </p>
                <h3 className="mt-1 font-display text-xl font-bold tracking-tight">
                  {m.title}
                </h3>
                <p
                  className={`mt-2 text-[0.95rem] leading-7 ${
                    m.alert ? "text-ink/80" : "text-white/85"
                  }`}
                >
                  {m.body}
                </p>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}

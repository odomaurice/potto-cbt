"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Analytics01Icon,
  CheckListIcon,
  CloudSavingDone01Icon,
  ComputerIcon,
  DatabaseIcon,
  SquareLock01Icon,
  Timer01Icon,
  WifiDisconnected01Icon,
} from "@hugeicons/core-free-icons";
import SectionCaption from "@/components/SectionCaption";

// The core modules of PRD section 4, held to the Phase 1 scope of section 9.
// Anything Phase 2 or later is labelled "planned" on the tile.
const EXAM_ROOM = [
  "Countdown timer",
  "Question navigator",
  "Mark for review",
  "Answered / unanswered",
  "Save status",
  "Submission summary",
];

const QUESTION_FIELDS = ["Subject", "Topic", "Class", "Difficulty", "Marks", "Explanation"];

const QUESTION_TYPES = [
  { label: "Multiple choice", ready: true },
  { label: "True or false", ready: true },
  { label: "Multiple select", ready: false },
  { label: "Fill in the blanks", ready: false },
  { label: "Short answer", ready: false },
  { label: "Essay", ready: false },
];

const RESULT_STATES = ["Auto-marked", "Under review", "Finalised", "Released"];

// The save states of PRD 4.9 and 4.11, cycled on the autosave tile.
const SAVE_STATES = [
  { label: "Saving…", icon: CloudSavingDone01Icon, tone: "bg-ink/10 text-ink" },
  { label: "Saved", icon: CloudSavingDone01Icon, tone: "bg-ink text-white" },
  { label: "Offline — retrying", icon: WifiDisconnected01Icon, tone: "bg-white text-ink" },
  { label: "Restored", icon: CloudSavingDone01Icon, tone: "bg-ink text-white" },
];

// A made-up score distribution, drawn flat, for the reports tile.
const BARS = [12, 28, 46, 72, 90, 64, 38, 18];

const ease = [0.22, 1, 0.36, 1] as const;

export default function FeaturesSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.08 });
  const reduced = useReducedMotion();
  const [save, setSave] = useState(1);

  useEffect(() => {
    if (reduced || !inView) return;
    const id = window.setInterval(
      () => setSave((s) => (s + 1) % SAVE_STATES.length),
      1600,
    );
    return () => window.clearInterval(id);
  }, [reduced, inView]);

  const reveal = (delay: number) => ({
    initial: { opacity: 0, y: 26 },
    animate: inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 26 },
    transition: { duration: 0.7, delay, ease },
  });

  const tile = "relative overflow-hidden rounded-[1.75rem] p-7 sm:p-8";
  const status = SAVE_STATES[save];

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
            <SectionCaption question={2} {...reveal(0)}>
              Core features
            </SectionCaption>
            <motion.h2
              {...reveal(0.1)}
              className="mt-6 max-w-3xl font-display text-4xl leading-[1.08] font-bold tracking-[-0.03em] sm:text-5xl lg:text-[3.5rem]"
            >
              Built for the whole exam,{" "}
              <span className="marker">not just the paper</span>
            </motion.h2>
          </div>
          <motion.p {...reveal(0.2)} className="max-w-sm text-lg leading-8 text-soft">
            From the first question written to the last result released, in
            one dependable workflow.
          </motion.p>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {/* The exam room — the big tile */}
          <motion.article
            {...reveal(0.25)}
            className={`${tile} flex flex-col justify-between bg-brand-teal-dark text-white md:col-span-2 lg:row-span-2`}
          >
            <div>
              <span className="grid h-14 w-14 place-items-center rounded-2xl bg-white/15">
                <HugeiconsIcon icon={ComputerIcon} size={28} strokeWidth={1.8} />
              </span>
              <h3 className="mt-8 font-display text-3xl font-bold tracking-tight sm:text-4xl">
                A distraction-free exam room
              </h3>
              <p className="mt-4 max-w-md text-lg leading-8 text-white/90">
                One question at a time, with everything a candidate needs to
                answer accurately and submit with confidence — and nothing
                else.
              </p>
            </div>
            {/* Answer-sheet bubbles, one shaded in. */}
            <div aria-hidden className="mt-10 flex gap-3">
              {["A", "B", "C", "D"].map((b) => (
                <span
                  key={b}
                  className={`grid h-14 w-14 place-items-center rounded-full font-mono text-lg font-bold sm:h-16 sm:w-16 ${
                    b === "C" ? "bg-brand-yellow text-ink" : "bg-white/12 text-white/80"
                  }`}
                >
                  {b}
                </span>
              ))}
            </div>
            <ul className="mt-10 grid gap-2 sm:grid-cols-2">
              {EXAM_ROOM.map((m, i) => (
                <li
                  key={m}
                  className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold ${
                    i === 0 ? "bg-brand-yellow text-ink" : "bg-white/12"
                  }`}
                >
                  <span className="font-mono text-xs opacity-70">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {m}
                </li>
              ))}
            </ul>
          </motion.article>

          {/* Server-side timer */}
          <motion.article {...reveal(0.32)} className={`${tile} bg-ink text-white`}>
            <HugeiconsIcon
              icon={Timer01Icon}
              size={30}
              strokeWidth={1.8}
              className="text-brand-yellow"
            />
            <p
              aria-hidden
              className="mt-6 font-mono text-5xl font-bold tracking-tight tabular-nums"
            >
              45<span className="animate-blink">:</span>00
            </p>
            <h3 className="mt-4 font-display text-xl font-bold tracking-tight">
              A timer kept by the server
            </h3>
            <p className="mt-2 text-[0.95rem] leading-7 text-white/80">
              The deadline is authoritative — a student&apos;s clock can&apos;t
              stretch it.
            </p>
          </motion.article>

          {/* Autosave */}
          <motion.article {...reveal(0.38)} className={`${tile} bg-brand-yellow`}>
            <span
              aria-hidden
              className={`inline-flex items-center gap-2 rounded-lg px-3 py-1.5 font-mono text-xs font-bold transition-colors duration-300 ${status.tone}`}
            >
              <HugeiconsIcon icon={status.icon} size={14} strokeWidth={2.2} />
              {status.label}
            </span>
            <h3 className="mt-6 font-display text-xl font-bold tracking-tight">
              Saved as they answer
            </h3>
            <p className="mt-2 text-[0.95rem] leading-7 text-ink/80">
              Students always see whether their answers are saved. Failed
              saves retry, and a refresh or reconnect restores their work.
            </p>
          </motion.article>

          {/* Question bank */}
          <motion.article {...reveal(0.44)} className={`${tile} bg-brand/8`}>
            <HugeiconsIcon
              icon={DatabaseIcon}
              size={30}
              strokeWidth={1.8}
              className="text-brand"
            />
            <h3 className="mt-6 font-display text-xl font-bold tracking-tight">
              A question bank that lasts
            </h3>
            <ul className="mt-4 flex flex-wrap gap-1.5">
              {QUESTION_FIELDS.map((f) => (
                <li
                  key={f}
                  className="rounded-md bg-white px-2.5 py-1 text-xs font-semibold text-ink/75"
                >
                  {f}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-[0.95rem] leading-7 text-soft">
              Search, reuse and preview questions. Each attempt keeps the
              version it was sat with.
            </p>
          </motion.article>

          {/* Results release */}
          <motion.article {...reveal(0.5)} className={`${tile} bg-surface-2`}>
            <HugeiconsIcon
              icon={CheckListIcon}
              size={30}
              strokeWidth={1.8}
              className="text-brand"
            />
            <h3 className="mt-6 font-display text-xl font-bold tracking-tight">
              Results on your terms
            </h3>
            <ol className="mt-4 space-y-1.5">
              {RESULT_STATES.map((r, i) => (
                <li key={r} className="flex items-center gap-2.5 text-sm font-semibold">
                  <span
                    className={`h-2.5 w-2.5 rounded-full ${
                      i === RESULT_STATES.length - 1 ? "bg-brand-yellow" : "bg-brand"
                    }`}
                  />
                  {r}
                </li>
              ))}
            </ol>
            <p className="mt-4 text-[0.95rem] leading-7 text-soft">
              Practice scores can show at once; formal ones wait for review.
            </p>
          </motion.article>

          {/* Automatic marking — wide tile */}
          <motion.article
            {...reveal(0.56)}
            className={`${tile} bg-brand/8 md:col-span-2`}
          >
            <h3 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
              Marked against the key
            </h3>
            <p className="mt-3 max-w-lg text-[0.95rem] leading-7 text-soft">
              Objective questions are marked automatically, with marks per
              question and pass marks you configure. Answers that need a
              teacher&apos;s judgement go to a marking queue.
            </p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {QUESTION_TYPES.map((q) => (
                <li
                  key={q.label}
                  className={`inline-flex items-center gap-2 rounded-lg px-3.5 py-2 text-sm font-semibold ${
                    q.ready ? "bg-brand text-brand-fg" : "bg-white text-ink/70"
                  }`}
                >
                  {q.label}
                  {!q.ready && (
                    <span className="font-mono text-[0.65rem] tracking-wider text-soft uppercase">
                      planned
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </motion.article>

          {/* Reports */}
          <motion.article
            {...reveal(0.62)}
            className={`${tile} bg-ink text-white md:col-span-2`}
          >
            <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <HugeiconsIcon
                  icon={Analytics01Icon}
                  size={30}
                  strokeWidth={1.8}
                  className="text-brand-yellow"
                />
                <h3 className="mt-6 font-display text-2xl font-bold tracking-tight sm:text-3xl">
                  Reports that point somewhere
                </h3>
                <p className="mt-3 max-w-sm text-[0.95rem] leading-7 text-white/80">
                  Average, highest and lowest scores, pass rates, and the
                  questions most students got wrong — by exam and class.
                </p>
              </div>
              <div
                aria-hidden
                className="flex h-28 shrink-0 items-end gap-1.5 sm:h-32"
              >
                {BARS.map((h, i) => (
                  <motion.span
                    key={i}
                    initial={{ height: 0 }}
                    animate={inView ? { height: `${h}%` } : { height: 0 }}
                    transition={{ duration: 0.8, delay: 0.7 + i * 0.06, ease }}
                    className={`w-5 rounded-t-md ${
                      i === 4 ? "bg-brand-yellow" : "bg-brand-teal"
                    }`}
                  />
                ))}
              </div>
            </div>
          </motion.article>

          {/* Security — full-width strip */}
          <motion.article
            {...reveal(0.68)}
            className={`${tile} flex flex-col gap-6 bg-brand/8 md:col-span-2 md:flex-row md:items-center lg:col-span-4`}
          >
            <span className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-brand text-brand-fg">
              <HugeiconsIcon icon={SquareLock01Icon} size={30} strokeWidth={1.8} />
            </span>
            <div>
              <h3 className="font-display text-2xl font-bold tracking-tight">
                Secure, school by school — and on the record
              </h3>
              <p className="mt-2 max-w-3xl text-[0.95rem] leading-7 text-soft">
                Role-based access checked on the server, each school&apos;s
                questions, candidates and results kept apart from every other
                school&apos;s, and an audit log of every publication,
                submission, score change and release.
              </p>
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  );
}

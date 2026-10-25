"use client";

import { useCallback, useEffect, useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  ArrowDown01Icon,
  ArrowUp01Icon,
} from "@hugeicons/core-free-icons";

type Section = { id: string | null; label: string };

// The page reads like an exam paper: each section is a numbered question, and
// this widget is the paper's question palette. Keep the list in page.tsx order
// — the index here is the question number printed by each SectionCaption.
const SECTIONS: Section[] = [
  { id: null, label: "Instructions" },
  { id: "about", label: "Why Potto CBT" },
  { id: "features", label: "Core features" },
  { id: "exam-day", label: "Exam day" },
  { id: "roles", label: "Who it's for" },
  { id: "lifecycle", label: "The exam lifecycle" },
  { id: "ecosystem", label: "The Potto Learning Suite" },
  { id: "roadmap", label: "Roadmap" },
  { id: "faq", label: "Questions" },
];

const LAST = SECTIONS.length - 1;
const pad = (n: number) => String(n).padStart(2, "0");

export default function HomeScrollNav() {
  const [active, setActive] = useState(0);

  // Absolute document offset of a section's top (0 for the hero/top entry).
  const topOf = (s: Section) => {
    if (!s.id) return 0;
    const el = document.getElementById(s.id);
    return el
      ? el.getBoundingClientRect().top + window.scrollY
      : Number.POSITIVE_INFINITY;
  };

  useEffect(() => {
    let ticking = false;

    const compute = () => {
      ticking = false;

      const probe = window.scrollY + window.innerHeight * 0.3;
      let idx = 0;
      for (let i = 0; i < SECTIONS.length; i += 1) {
        if (probe >= topOf(SECTIONS[i])) idx = i;
      }

      const max = document.body.scrollHeight - window.innerHeight;
      if (window.scrollY >= max - 4) idx = LAST;
      setActive(idx);
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(compute);
    };

    compute();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const goTo = useCallback((i: number) => {
    const target = SECTIONS[Math.max(0, Math.min(LAST, i))];
    if (!target.id) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    document.getElementById(target.id)?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <nav
      aria-label="Page sections"
      aria-hidden={active === 0 ? true : undefined}
      inert={active === 0}
      // Out of the way on the hero, where it would sit on the content; it
      // slides in once the first question starts.
      className={`fixed bottom-5 left-5 z-40 hidden items-center gap-4 rounded-2xl bg-ink/90 py-2.5 pr-2.5 pl-4 text-white shadow-[0_12px_40px_-12px_rgb(0_0_0/0.5)] backdrop-blur-xl transition duration-500 md:flex ${
        active === 0 ? "pointer-events-none translate-y-6 opacity-0" : ""
      }`}
    >
      <span aria-live="polite" className="w-40 leading-tight">
        <span className="block font-mono text-[0.65rem] font-semibold text-white/70">
          {active === 0
            ? "INSTRUCTIONS"
            : `QUESTION ${pad(active)} OF ${pad(LAST)}`}
        </span>
        <span className="block truncate font-display text-sm font-bold">
          {SECTIONS[active].label}
        </span>
      </span>

      {/* The question palette: done, current, still to come. */}
      <ol className="hidden gap-1 lg:flex">
        {SECTIONS.slice(1).map((s, i) => {
          const n = i + 1;
          const state =
            n < active ? "done" : n === active ? "current" : "todo";
          return (
            <li key={s.id}>
              <button
                type="button"
                onClick={() => goTo(n)}
                aria-label={`Question ${n}: ${s.label}`}
                aria-current={state === "current" ? "true" : undefined}
                className={`grid h-8 w-8 cursor-pointer place-items-center rounded-lg font-mono text-[0.7rem] font-bold transition-colors duration-300 ${
                  state === "done"
                    ? "bg-brand-teal text-white hover:bg-brand-teal-dark"
                    : state === "current"
                      ? "bg-brand-yellow text-ink"
                      : "bg-white/10 text-white/80 hover:bg-white/20"
                }`}
              >
                {pad(n)}
              </button>
            </li>
          );
        })}
      </ol>

      <span className="flex gap-1">
        <button
          type="button"
          onClick={() => goTo(active - 1)}
          disabled={active === 0}
          aria-label="Previous question"
          className="grid h-9 w-9 cursor-pointer place-items-center rounded-lg bg-white/10 transition hover:bg-white/20 disabled:cursor-default disabled:opacity-40"
        >
          <HugeiconsIcon icon={ArrowUp01Icon} size={16} strokeWidth={2.2} />
        </button>
        <button
          type="button"
          onClick={() => goTo(active + 1)}
          disabled={active === LAST}
          aria-label="Next question"
          className="grid h-9 w-9 cursor-pointer place-items-center rounded-lg bg-brand-yellow text-ink transition hover:bg-brand-yellow-light disabled:cursor-default disabled:opacity-40"
        >
          <HugeiconsIcon icon={ArrowDown01Icon} size={16} strokeWidth={2.2} />
        </button>
      </span>
    </nav>
  );
}

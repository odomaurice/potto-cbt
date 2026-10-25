"use client";

import { useCallback, useEffect, useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  ArrowDown01Icon,
  ArrowUp01Icon,
} from "@hugeicons/core-free-icons";

type Section = { id: string | null; label: string };

// The page reads like a course: each section is a numbered lesson, and this
// widget is the course's progress bar. Keep the list in page.tsx order — the
// index here is the lesson number printed by each SectionCaption.
const SECTIONS: Section[] = [
  { id: null, label: "Welcome" },
  { id: "about", label: "Why PottoFlip" },
  { id: "features", label: "Core features" },
  { id: "roles", label: "Who it's for" },
  { id: "how-it-works", label: "How it works" },
  { id: "ecosystem", label: "The Potto Learning Suite" },
  { id: "roadmap", label: "Roadmap" },
  { id: "faq", label: "Questions" },
];

const LAST = SECTIONS.length - 1;
const RING = 2 * Math.PI * 15;

export default function HomeScrollNav() {
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);

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
      setProgress(max > 0 ? Math.min(1, window.scrollY / max) : 0);
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

  const pct = Math.round(progress * 100);

  return (
    <nav
      aria-label="Course progress"
      aria-hidden={active === 0 ? true : undefined}
      inert={active === 0}
      // Out of the way on the hero, where it would sit on the content; it
      // slides in once the first lesson starts.
      className={`fixed bottom-5 left-5 z-40 hidden items-center gap-3 rounded-full bg-ink/90 py-2 pr-2 pl-2 text-white shadow-[0_12px_40px_-12px_rgb(0_0_0/0.5)] backdrop-blur-xl transition duration-500 md:flex ${
        active === 0 ? "pointer-events-none translate-y-6 opacity-0" : ""
      }`}
    >
      <span className="relative grid h-10 w-10 place-items-center">
        <svg viewBox="0 0 36 36" className="absolute inset-0 -rotate-90">
          <circle
            cx="18"
            cy="18"
            r="15"
            fill="none"
            stroke="rgb(255 255 255 / 0.15)"
            strokeWidth="3"
          />
          <circle
            cx="18"
            cy="18"
            r="15"
            fill="none"
            stroke="var(--color-brand-yellow)"
            strokeWidth="3"
            strokeLinecap="round"
            strokeDasharray={RING}
            strokeDashoffset={RING * (1 - progress)}
          />
        </svg>
        <span className="relative text-[0.65rem] font-bold">{pct}%</span>
      </span>

      <span aria-live="polite" className="min-w-36 pr-1 leading-tight">
        <span className="block text-[0.65rem] font-semibold tracking-[0.18em] text-white/70 uppercase">
          {active === 0
            ? "Course intro"
            : `Lesson ${String(active).padStart(2, "0")} of ${String(LAST).padStart(2, "0")}`}
        </span>
        <span className="block font-display text-sm font-bold">
          {SECTIONS[active].label}
        </span>
      </span>

      <span className="flex gap-1">
        <button
          type="button"
          onClick={() => goTo(active - 1)}
          disabled={active === 0}
          aria-label="Previous lesson"
          className="grid h-9 w-9 cursor-pointer place-items-center rounded-full bg-white/10 transition hover:bg-white/20 disabled:cursor-default disabled:opacity-40"
        >
          <HugeiconsIcon icon={ArrowUp01Icon} size={16} strokeWidth={2.2} />
        </button>
        <button
          type="button"
          onClick={() => goTo(active + 1)}
          disabled={active === LAST}
          aria-label="Next lesson"
          className="grid h-9 w-9 cursor-pointer place-items-center rounded-full bg-brand-yellow text-ink transition hover:bg-brand-yellow-light disabled:cursor-default disabled:opacity-40"
        >
          <HugeiconsIcon icon={ArrowDown01Icon} size={16} strokeWidth={2.2} />
        </button>
      </span>
    </nav>
  );
}

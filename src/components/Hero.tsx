"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Analytics01Icon,
  ArrowRight01Icon,
  CourseIcon,
  Layers01Icon,
  PlayIcon,
  TaskDone01Icon,
} from "@hugeicons/core-free-icons";

const PHRASES = [
  "Courses & modules",
  "Video, audio & PDF lessons",
  "Resource library",
  "Assignments",
  "Practice quizzes",
  "Grades & feedback",
  "Progress tracking",
  "Student & teacher dashboards",
];

// There is no Flip screenshot yet, so the hero shows the shape of a course
// (PRD 4.3, 4.4, 4.11) instead of inventing an interface.
const PATH = [
  { icon: CourseIcon, label: "Course" },
  { icon: Layers01Icon, label: "Modules" },
  { icon: PlayIcon, label: "Lessons" },
  { icon: TaskDone01Icon, label: "Activities" },
  { icon: Analytics01Icon, label: "Progress" },
];

export default function Hero() {
  const root = useRef<HTMLElement>(null);
  const marquee = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      gsap.from("[data-hero-item]", {
        y: 24,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.12,
        delay: 0.2,
      });

      gsap.from("[data-hero-step]", {
        scale: 0.6,
        opacity: 0,
        duration: 0.6,
        ease: "back.out(1.8)",
        stagger: 0.12,
        delay: 0.9,
      });

      if (marquee.current) {
        gsap.to(marquee.current, {
          xPercent: -50,
          duration: 38,
          ease: "none",
          repeat: -1,
        });
      }
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={root}
      data-nav-tone="dark"
      data-nav-bg="var(--color-brand-teal-dark)"
      className="relative isolate overflow-hidden rounded-b-[1.75rem] bg-brand-teal-dark pt-36 text-white sm:rounded-b-[2.5rem] md:pt-44"
    >
      <div className="mx-auto w-full max-w-4xl px-5 text-center md:px-6 lg:px-8">
        <p
          data-hero-item
          className="text-xs font-semibold tracking-[0.22em] text-white/90 uppercase"
        >
          E-learning from the Potto ecosystem
        </p>

        <h1
          data-hero-item
          className="mt-6 font-header text-[2.5rem] leading-[1.06] font-extrabold tracking-tight sm:text-6xl lg:text-[4.25rem]"
        >
          Learning that is accessible, organised and{" "}
          <span className="text-brand-yellow-light">measurable</span>
        </h1>

        <p
          data-hero-item
          className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/90 sm:text-lg"
        >
          Potto Flip gives your school one place to deliver lessons, set
          assignments and practice quizzes, give feedback and see learning
          progress — in class and beyond it.
        </p>

        <div
          data-hero-item
          className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <Link
            href="/#how-it-works"
            className="inline-flex animate-glow items-center gap-2 rounded-full bg-brand-yellow px-7 py-3.5 text-sm font-semibold text-ink [--glow:var(--color-brand-yellow)] transition duration-300 hover:bg-brand-yellow-light hover:[--glow:var(--color-brand-yellow-light)] sm:text-base"
          >
            See how it works
            <HugeiconsIcon icon={ArrowRight01Icon} size={18} strokeWidth={2} />
          </Link>
          <Link
            href="/#contact"
            className="inline-flex items-center rounded-full bg-white/10 px-7 py-3.5 text-sm font-semibold text-white transition duration-300 hover:bg-white/20 sm:text-base"
          >
            Talk to us
          </Link>
        </div>
      </div>

      <ol
        aria-label="How a course is organised in Potto Flip"
        className="mx-auto mt-16 flex w-full max-w-4xl items-start px-2 md:mt-20 md:px-6"
      >
        {PATH.map((step, i) => (
          <li
            key={step.label}
            data-hero-step
            className="relative flex flex-1 flex-col items-center"
          >
            {/* The connector runs back to the previous step's centre, stopping
                short of both circles, which are translucent. Phones have no
                room for it between five circles, so it starts at sm. */}
            {i > 0 && (
              <span
                aria-hidden
                className="absolute top-9 right-[calc(50%+2.75rem)] left-[calc(-50%+2.75rem)] hidden h-0.5 bg-white/25 sm:block"
              />
            )}
            <span
              className={`grid h-14 w-14 place-items-center rounded-full sm:h-18 sm:w-18 ${
                i === PATH.length - 1
                  ? "bg-brand-yellow text-ink"
                  : "bg-white/10 text-white"
              }`}
            >
              <HugeiconsIcon icon={step.icon} size={26} strokeWidth={1.8} />
            </span>
            <span className="mt-3 text-[0.7rem] font-semibold tracking-wide text-white/90 uppercase sm:text-xs">
              {step.label}
            </span>
          </li>
        ))}
      </ol>

      <div className="relative mt-14 pb-3 md:mt-16">
        <div className="flex overflow-hidden mask-[linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]">
          <div ref={marquee} className="flex w-max">
            {[0, 1].map((copyIndex) => (
              <div
                key={copyIndex}
                aria-hidden={copyIndex === 1}
                className="flex shrink-0 items-center py-4"
              >
                {PHRASES.map((phrase) => (
                  <div
                    key={phrase}
                    className="flex shrink-0 items-center whitespace-nowrap"
                  >
                    <span className="text-xs font-semibold tracking-[0.22em] text-white/90 uppercase md:text-sm">
                      {phrase}
                    </span>
                    <span
                      aria-hidden
                      className="px-6 text-brand-yellow-light md:px-8"
                    >
                      ✳
                    </span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

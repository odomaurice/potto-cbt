"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight01Icon, Mail01Icon } from "@hugeicons/core-free-icons";
import SectionCaption from "@/components/SectionCaption";

const ease = [0.22, 1, 0.36, 1] as const;

export default function CtaSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  const reveal = (delay: number) => ({
    initial: { opacity: 0, y: 22 },
    animate: inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 22 },
    transition: { duration: 0.65, delay, ease },
  });

  return (
    <section
      data-nav-tone="light"
      data-nav-bg="var(--color-brand-yellow)"
      className="relative isolate overflow-hidden bg-brand-yellow py-24 text-ink md:py-28"
    >
      {/* Answer-sheet bubbles, set large in the corners — flat fills only. */}
      <span
        aria-hidden
        className="absolute -top-16 -right-16 -z-10 hidden h-64 w-64 rounded-full bg-brand-yellow-light md:block"
      />
      <span
        aria-hidden
        className="absolute -bottom-20 -left-12 -z-10 hidden h-48 w-48 rounded-full bg-brand-yellow-dark/25 md:block"
      />

      <div
        ref={ref}
        className="mx-auto w-full max-w-5xl px-5 text-center md:px-6 lg:px-8"
      >
        <SectionCaption align="center" className="text-ink/70!" {...reveal(0)}>
          End of paper
        </SectionCaption>
        <motion.h2
          {...reveal(0.1)}
          className="mt-6 font-display text-4xl leading-[1.05] font-bold tracking-[-0.03em] sm:text-6xl lg:text-[4.2rem]"
        >
          Bring Potto CBT to your school
        </motion.h2>
        <motion.p
          {...reveal(0.2)}
          className="mx-auto mt-6 max-w-xl text-lg leading-8 text-ink/80"
        >
          Tell us about your school and how you run exams today, and our team
          will take it from there.
        </motion.p>

        <motion.div
          {...reveal(0.3)}
          className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <a
            href="mailto:Info@potto.ng?subject=Potto%20CBT"
            className="inline-flex items-center gap-2 rounded-xl bg-ink px-8 py-4 text-base font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-brand-teal-dark"
          >
            <HugeiconsIcon icon={Mail01Icon} size={18} strokeWidth={2} />
            Email Info@potto.ng
          </a>
          <Link
            href="/#contact"
            className="group inline-flex items-center gap-2 rounded-xl bg-ink/10 px-8 py-4 text-base font-semibold transition hover:bg-ink/15"
          >
            All contact details
            <HugeiconsIcon
              icon={ArrowRight01Icon}
              size={18}
              strokeWidth={2}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

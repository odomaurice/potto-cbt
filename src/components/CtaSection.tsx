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
      {/* Two oversized folded pages, purely decorative. */}
      <span
        aria-hidden
        className="dog-ear absolute -top-24 -right-24 -z-10 h-96 w-96 rotate-12 rounded-[3rem] bg-brand-yellow-light [--ear:6rem]"
      />
      <span
        aria-hidden
        className="dog-ear absolute -bottom-32 -left-20 -z-10 h-80 w-80 -rotate-12 rounded-[3rem] bg-brand-yellow-dark/25 [--ear:5rem]"
      />

      <div
        ref={ref}
        className="mx-auto w-full max-w-5xl px-5 text-center md:px-6 lg:px-8"
      >
        <SectionCaption align="center" className="text-ink/70!" {...reveal(0)}>
          End of the course
        </SectionCaption>
        <motion.h2
          {...reveal(0.1)}
          className="mt-6 font-display text-5xl leading-[0.98] font-extrabold tracking-[-0.03em] sm:text-6xl lg:text-7xl"
        >
          Bring PottoFlip to your school
        </motion.h2>
        <motion.p
          {...reveal(0.2)}
          className="mx-auto mt-6 max-w-xl text-lg leading-8 text-ink/80"
        >
          Tell us about your school and how you teach today, and our team will
          take it from there.
        </motion.p>

        <motion.div
          {...reveal(0.3)}
          className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <a
            href="mailto:Info@potto.ng?subject=Potto%20Flip"
            className="inline-flex items-center gap-2 rounded-full bg-ink px-8 py-4 text-base font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-brand-teal-dark"
          >
            <HugeiconsIcon icon={Mail01Icon} size={18} strokeWidth={2} />
            Email Info@potto.ng
          </a>
          <Link
            href="/#contact"
            className="group inline-flex items-center gap-2 rounded-full bg-ink/10 px-8 py-4 text-base font-semibold transition hover:bg-ink/15"
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

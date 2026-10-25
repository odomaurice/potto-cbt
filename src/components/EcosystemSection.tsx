"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  ArrowRight01Icon,
  BookOpen01Icon,
  Building03Icon,
  Certificate01Icon,
} from "@hugeicons/core-free-icons";
import SectionCaption from "@/components/SectionCaption";

// PRD section 6. Every integration there is "potential", to be confirmed
// against the real services, so the copy says "designed to".
const PRODUCTS = {
  admin: {
    icon: Building03Icon,
    name: "Potto Admin",
    role: "School records",
    flow: "Records in",
    body: "CBT is designed to use the school, session, class, subject, student and teacher records Admin already holds to decide who is eligible for each exam.",
  },
  assess: {
    icon: Certificate01Icon,
    name: "Potto Assess",
    role: "Formal results",
    flow: "Approved scores out",
    body: "Finalised scores are designed to pass to Assess under agreed rules. Practice scores never become official results by default.",
  },
  flip: {
    icon: BookOpen01Icon,
    name: "PottoFlip",
    role: "Teaching & learning",
    flow: "Practice links",
    body: "Designed to link course topics to practice tests, so students can move from a finished lesson to revision and exam preparation.",
  },
};

// PRD section 10.
const NOT_CBT = [
  "Courses & lessons",
  "Fees",
  "Payroll",
  "Admissions",
  "School records",
];

const ease = [0.22, 1, 0.36, 1] as const;

function Node({ product }: { product: (typeof PRODUCTS)["admin"] }) {
  return (
    <article className="h-full rounded-[1.75rem] bg-brand/8 p-7">
      <div className="flex items-center gap-4">
        <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-brand text-brand-fg">
          <HugeiconsIcon icon={product.icon} size={24} strokeWidth={1.8} />
        </span>
        <div>
          <p className="text-xs font-semibold tracking-[0.18em] text-brand uppercase">
            {product.role}
          </p>
          <h3 className="font-display text-xl font-bold tracking-tight">
            {product.name}
          </h3>
        </div>
      </div>
      <p className="mt-5 inline-flex items-center gap-1.5 rounded-md bg-brand-yellow px-2.5 py-1 font-mono text-xs font-bold text-ink">
        <HugeiconsIcon icon={ArrowRight01Icon} size={12} strokeWidth={2.5} />
        {product.flow}
      </p>
      <p className="mt-4 text-[0.95rem] leading-7 text-soft">{product.body}</p>
    </article>
  );
}

export default function EcosystemSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });

  const reveal = (delay: number) => ({
    initial: { opacity: 0, y: 22 },
    animate: inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 22 },
    transition: { duration: 0.65, delay, ease },
  });

  return (
    <section
      id="ecosystem"
      data-nav-tone="light"
      data-nav-bg="var(--canvas)"
      className="relative py-24 text-ink md:py-32"
    >
      <div ref={ref} className="mx-auto w-full max-w-7xl px-5 md:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[5fr_7fr] lg:gap-16">
          <div>
            <SectionCaption question={6} {...reveal(0)}>
              The Potto Learning Suite
            </SectionCaption>
            <motion.h2
              {...reveal(0.1)}
              className="mt-6 font-display text-4xl leading-[1.08] font-bold tracking-[-0.03em] sm:text-5xl lg:text-[3.5rem]"
            >
              The exam desk of the <span className="marker">Potto</span> family
            </motion.h2>
            <motion.p {...reveal(0.2)} className="mt-6 max-w-md text-lg leading-8 text-soft">
              Potto CBT runs exams and nothing else. The school&apos;s records,
              its lessons and its official results stay where they already
              live.
            </motion.p>

            {/* The hub: CBT itself, a flat ink tile with the Potto mark. */}
            <motion.div
              {...reveal(0.3)}
              className="mt-10 inline-flex items-center gap-5 rounded-[1.75rem] bg-ink py-5 pr-8 pl-5 text-white"
            >
              <span className="grid h-16 w-16 place-items-center rounded-2xl bg-white/10">
                <Image
                  src="/potto-mark.webp"
                  alt=""
                  width={93}
                  height={160}
                  className="h-9 w-auto brightness-0 invert"
                />
              </span>
              <span>
                <span className="block font-display text-2xl font-bold tracking-tight">
                  Potto CBT
                </span>
                <span className="block font-mono text-xs text-brand-yellow-light">
                  EXAMINATIONS
                </span>
              </span>
            </motion.div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <motion.div {...reveal(0.35)}>
              <Node product={PRODUCTS.admin} />
            </motion.div>
            <motion.div {...reveal(0.45)}>
              <Node product={PRODUCTS.assess} />
            </motion.div>
            <motion.div {...reveal(0.55)} className="sm:col-span-2">
              <Node product={PRODUCTS.flip} />
            </motion.div>
          </div>
        </div>

        <motion.div
          {...reveal(0.65)}
          className="mt-16 flex flex-col gap-4 rounded-[1.75rem] bg-surface-2 p-7 sm:p-8 lg:flex-row lg:items-center lg:justify-between"
        >
          <div>
            <p className="font-mono text-xs font-bold tracking-wider text-soft uppercase">
              Not CBT&apos;s job
            </p>
            <p className="mt-2 max-w-xl text-sm leading-6 text-soft">
              Potto CBT is not a learning management, fees, payroll or
              admissions system, and it doesn&apos;t replace the school&apos;s
              records. It connects to the Potto products that do those jobs.
            </p>
          </div>
          <ul className="flex flex-wrap gap-2">
            {NOT_CBT.map((item) => (
              <li
                key={item}
                className="rounded-lg bg-white px-3.5 py-2 text-sm font-semibold text-soft line-through decoration-brand-gold decoration-2"
              >
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Building03Icon,
  Certificate01Icon,
  LaptopIcon,
} from "@hugeicons/core-free-icons";
import SectionCaption from "@/components/SectionCaption";

// PRD section 7. Every integration there is "potential" and still to be
// validated against the real services, so the copy says "designed to".
const PRODUCTS = [
  {
    icon: Building03Icon,
    name: "Potto Admin",
    role: "School records",
    body: "Flip is designed to use the school, session, class, subject, student and teacher records Admin already holds — so nobody types them in twice.",
  },
  {
    icon: Certificate01Icon,
    name: "Potto Assess",
    role: "Formal results",
    body: "Selected, authorised scores can be shared with Assess. Practice scores never become official results without a workflow your school approves.",
  },
  {
    icon: LaptopIcon,
    name: "Potto CBT",
    role: "Examinations",
    body: "Formal computer-based exams stay in CBT. Flip prepares students for them and can link lessons to authorised CBT activities.",
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

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
      data-nav-tone="dark"
      data-nav-bg="var(--color-brand-teal-dark)"
      className="relative isolate bg-brand-teal-dark py-28 text-white md:py-36"
    >
      <div ref={ref} className="mx-auto w-full max-w-7xl px-5 md:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <SectionCaption tone="dark" {...reveal(0)}>
            The Potto Ecosystem
          </SectionCaption>

          <motion.h2
            {...reveal(0.12)}
            className="mt-4 font-header text-3xl leading-[1.1] font-extrabold tracking-tight sm:text-4xl lg:text-5xl"
          >
            Connected to the rest of{" "}
            <span className="text-brand-yellow-light">Potto</span>
          </motion.h2>

          <motion.p
            {...reveal(0.24)}
            className="mt-5 text-lg leading-8 text-white/90"
          >
            Flip handles teaching and learning. The school&apos;s records,
            exams and official results stay where they already live.
          </motion.p>
        </div>

        <div className="mt-20 grid gap-x-12 gap-y-16 md:grid-cols-3 lg:gap-x-16">
          {PRODUCTS.map((product, i) => (
            <motion.article
              key={product.name}
              {...reveal(0.36 + i * 0.1)}
              className="text-center"
            >
              <span className="mx-auto grid h-20 w-20 place-items-center rounded-full bg-white/10 text-white">
                <HugeiconsIcon
                  icon={product.icon}
                  size={34}
                  strokeWidth={1.7}
                />
              </span>
              <p className="mt-7 text-xs font-semibold tracking-[0.22em] text-brand-yellow-light uppercase">
                {product.role}
              </p>
              <h3 className="mt-2 font-header text-2xl leading-snug font-extrabold tracking-tight">
                {product.name}
              </h3>
              <p className="mx-auto mt-4 max-w-sm text-[0.95rem] leading-8 text-white/90">
                {product.body}
              </p>
            </motion.article>
          ))}
        </div>

        <motion.p
          {...reveal(0.7)}
          className="mx-auto mt-20 max-w-3xl rounded-2xl bg-white/10 px-6 py-5 text-center text-[0.95rem] leading-7 text-white/90"
        >
          Flip is not a fees, payroll, accounting, admissions or timetabling
          system. It shares data with the Potto products that do those jobs,
          through approved integrations.
        </motion.p>
      </div>
    </section>
  );
}

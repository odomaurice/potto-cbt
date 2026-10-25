"use client";

import Image from "next/image";
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
const PRODUCTS = {
  admin: {
    icon: Building03Icon,
    name: "Potto Admin",
    role: "School records",
    body: "PottoFlip is designed to use the school, session, class, subject, student and teacher records Admin already holds — so nobody types them in twice.",
  },
  assess: {
    icon: Certificate01Icon,
    name: "Potto Assess",
    role: "Formal results",
    body: "Selected, authorised scores can be shared with Assess. Practice scores never become official results without a workflow your school approves.",
  },
  cbt: {
    icon: LaptopIcon,
    name: "Potto CBT",
    role: "Examinations",
    body: "Formal computer-based exams stay in CBT. PottoFlip prepares students for them and can link lessons to authorised CBT activities.",
  },
};

// PRD section 11.
const NOT_FLIP = ["Fees", "Payroll", "Accounting", "Admissions", "Timetables"];

const ease = [0.22, 1, 0.36, 1] as const;

function Node({ product }: { product: (typeof PRODUCTS)["admin"] }) {
  return (
    <article className="rounded-[1.75rem] bg-brand/8 p-7">
      <div className="flex items-center gap-4">
        <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-brand text-brand-fg">
          <HugeiconsIcon icon={product.icon} size={24} strokeWidth={1.8} />
        </span>
        <div>
          <p className="text-xs font-semibold tracking-[0.18em] text-brand uppercase">
            {product.role}
          </p>
          <h3 className="font-display text-xl font-extrabold tracking-tight">
            {product.name}
          </h3>
        </div>
      </div>
      <p className="mt-4 text-[0.95rem] leading-7 text-soft">{product.body}</p>
    </article>
  );
}

/** A dashed connector — a line between shapes, not a frame around one. */
function Connector({ vertical = false }: { vertical?: boolean }) {
  return (
    <span
      aria-hidden
      className={
        vertical
          ? "mx-auto block h-10 w-0 border-l-2 border-dashed border-brand/40"
          : "block h-0 w-full border-t-2 border-dashed border-brand/40"
      }
    />
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
        <div className="mx-auto max-w-3xl text-center">
          <SectionCaption lesson={5} align="center" {...reveal(0)}>
            The Potto Learning Suite
          </SectionCaption>
          <motion.h2
            {...reveal(0.1)}
            className="mt-6 font-display text-4xl leading-[1.02] font-extrabold tracking-[-0.03em] sm:text-5xl lg:text-6xl"
          >
            Plugged into the rest of <span className="marker">Potto</span>
          </motion.h2>
          <motion.p
            {...reveal(0.2)}
            className="mt-6 text-lg leading-8 text-soft"
          >
            PottoFlip handles teaching and learning. The school&apos;s records, exams
            and official results stay where they already live.
          </motion.p>
        </div>

        {/* Hub and spokes: Admin and Assess either side of Flip, CBT below. */}
        <div className="mt-16 grid items-center gap-0 lg:grid-cols-[1fr_auto_1fr]">
          <motion.div {...reveal(0.3)} className="lg:flex lg:items-center">
            <Node product={PRODUCTS.admin} />
            <span className="hidden w-12 shrink-0 lg:block">
              <Connector />
            </span>
          </motion.div>

          <div className="py-0 lg:hidden">
            <Connector vertical />
          </div>

          {/* The hub column stretches to the row's height: an empty half above
              the circle and a dashed line below it, so the circle sits level
              with the side connectors and the line runs on down to CBT. */}
          <div className="lg:flex lg:flex-col lg:items-center lg:self-stretch">
          <span aria-hidden className="hidden flex-1 lg:block" />
          <motion.div
            {...reveal(0.4)}
            className="relative mx-auto grid h-48 w-48 shrink-0 place-items-center rounded-full bg-brand-teal-dark text-white sm:h-56 sm:w-56"
          >
            <span
              aria-hidden
              className="absolute inset-0 animate-pulse-ring rounded-full bg-brand/30"
            />
            <span className="relative text-center">
              <Image
                src="/potto-mark.webp"
                alt=""
                width={93}
                height={160}
                className="mx-auto h-10 w-auto brightness-0 invert"
              />
              <span className="mt-3 block font-display text-2xl font-extrabold tracking-tight sm:text-3xl">
                PottoFlip
              </span>
              <span className="mt-1 block text-xs font-semibold tracking-[0.18em] text-white/90 uppercase">
                Teaching &amp; learning
              </span>
            </span>
          </motion.div>
          <span
            aria-hidden
            className="hidden w-0 flex-1 border-l-2 border-dashed border-brand/40 lg:block"
          />
          </div>

          <div className="py-0 lg:hidden">
            <Connector vertical />
          </div>

          <motion.div
            {...reveal(0.5)}
            className="lg:flex lg:flex-row-reverse lg:items-center"
          >
            <Node product={PRODUCTS.assess} />
            <span className="hidden w-12 shrink-0 lg:block">
              <Connector />
            </span>
          </motion.div>
        </div>

        <div className="lg:grid lg:grid-cols-[1fr_minmax(0,28rem)_1fr]">
          <motion.div {...reveal(0.6)} className="lg:col-start-2">
            <Connector vertical />
            <Node product={PRODUCTS.cbt} />
          </motion.div>
        </div>

        <motion.div
          {...reveal(0.7)}
          className="mt-16 flex flex-col items-center gap-4 text-center"
        >
          <p className="font-note text-2xl text-brand">
            and what PottoFlip leaves to others
          </p>
          <ul className="flex flex-wrap justify-center gap-2">
            {NOT_FLIP.map((item) => (
              <li
                key={item}
                className="rounded-full bg-surface-2 px-4 py-2 text-sm font-semibold text-soft line-through decoration-brand-gold decoration-2"
              >
                {item}
              </li>
            ))}
          </ul>
          <p className="max-w-xl text-sm leading-6 text-soft">
            PottoFlip is not a fees, payroll, accounting, admissions or timetabling
            system. It shares data with the Potto products that do those jobs,
            through approved integrations.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

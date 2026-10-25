"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { HugeiconsIcon } from "@hugeicons/react";
import { Add01Icon, Mail01Icon } from "@hugeicons/core-free-icons";
import SectionCaption from "@/components/SectionCaption";

type Group = { title: string; items: { q: string; a: string }[] };

const GROUPS: Group[] = [
  {
    title: "About Potto CBT",
    items: [
      {
        q: "What is Potto CBT?",
        a: "Potto CBT is a computer-based testing platform that helps schools create, schedule, deliver, mark and manage digital exams and assessments. It is the examination service of the Potto Learning Suite.",
      },
      {
        q: "What kinds of exams can we run on it?",
        a: "Practice tests, class tests, continuous assessment, mock exams, midterm and end-of-term exams, entrance exams and other assessments your school defines. The category helps with organisation and reporting without forcing every school into the same structure.",
      },
      {
        q: "Who uses Potto CBT?",
        a: "Students, teachers and school administrators, each with their own dashboard and permissions.",
      },
      {
        q: "Which devices does it work on?",
        a: "Supported desktop and laptop browsers, with tablet and mobile phone support where appropriate. A school may choose a desktop-only setup for formal exams — if so, that is an explicit setting, not an accident.",
      },
    ],
  },
  {
    title: "Exam day",
    items: [
      {
        q: "What happens if the internet drops during an exam?",
        a: "Answers are saved frequently as students work, and the student is told when answers can't be synchronised. Failed saves are retried, the latest saved answers are restored after reconnection, and the original deadline still applies. The interruption is recorded for authorised staff to review.",
      },
      {
        q: "Can students sit exams offline?",
        a: "Not yet. Offline exams are on the roadmap, but they will only be offered once secure local storage, synchronisation and conflict handling have been built and tested.",
      },
      {
        q: "Is the timer based on the student's computer clock?",
        a: "No. The countdown follows the exam deadline held on the server, so changing a device's clock does not buy extra time. When time runs out, the student's latest saved answers are submitted according to the exam's policy.",
      },
      {
        q: "Can a student submit twice, or change answers afterwards?",
        a: "No. Repeated requests and network retries never create a second attempt or a duplicate submission, and once a paper is submitted its answers are locked unless an explicitly authorised process reopens it.",
      },
      {
        q: "Does Potto CBT stop cheating?",
        a: "No software can guarantee that. Potto CBT offers proportionate safeguards — server-side timing, restricted access, controlled session resumption, configurable navigation and audit logs, with randomised questions and question pools planned — and supports your school's own exam rules and supervision.",
      },
    ],
  },
  {
    title: "Marking and results",
    items: [
      {
        q: "Which questions are marked automatically?",
        a: "Objective questions: multiple choice and true or false at first, with multiple select and fill in the blanks planned. Short answers and essays will go to a manual marking queue, where teachers award marks within the allowed range and add feedback.",
      },
      {
        q: "When do students see their scores?",
        a: "When your school allows. A practice test can show its score straight after submission, while a formal exam can hold scores back until teachers have reviewed them. Students only ever see scores that have been released.",
      },
      {
        q: "Can a score be changed after marking?",
        a: "Only by an authorised user, and never silently. Every change records the original score, the new score, who changed it, why and when.",
      },
      {
        q: "Do CBT scores become official results?",
        a: "Not automatically. Practice results are kept apart from official exam marks. Finalised scores are designed to pass to Potto Assess for the school's formal results, under rules the school agrees.",
      },
    ],
  },
  {
    title: "Security and privacy",
    items: [
      {
        q: "Can students see the answer key?",
        a: "No. Answer keys are never sent to the student's browser, unpublished exams stay locked, and every question request is authorised on the server.",
      },
      {
        q: "Can one school see another school's data?",
        a: "No. Each school's questions, candidates and results are kept separate, and exports respect each user's permissions.",
      },
      {
        q: "Do you use webcams or face recognition?",
        a: "No. Any future webcam, screen monitoring or biometric checks would need a separate privacy, security and legal assessment first. Candidate verification is kept proportionate — an exam access code, for example.",
      },
      {
        q: "Do we have to re-enter our classes and students?",
        a: "Potto CBT is designed to use the school, class, subject, student and teacher records already held in Potto Admin, so your school does not have to recreate them.",
      },
    ],
  },
  {
    title: "Getting started",
    items: [
      {
        q: "Who do we contact when we need help?",
        a: "Our support team is here to help. Email support@potto.ng, call one of the numbers at the bottom of this page, or use the WhatsApp button to chat with us.",
      },
      {
        q: "We're interested. How do we get started?",
        a: "Get in touch using the contact details at the bottom of this page and our team will take it from there.",
      },
    ],
  },
];

const ALL = "All";
const TOPICS = [ALL, ...GROUPS.map((group) => group.title)];
const ease = [0.22, 1, 0.36, 1] as const;

const slug = (s: string) =>
  s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 60);

export default function FaqSection() {
  const [topic, setTopic] = useState(ALL);
  // One answer open at a time, so the list never jumps under the reader.
  const [open, setOpen] = useState<string | null>(slug(GROUPS[0].items[0].q));
  const reduced = useReducedMotion();

  const items = useMemo(
    () =>
      GROUPS.filter((group) => topic === ALL || group.title === topic).flatMap(
        (group) => group.items.map((item) => ({ ...item, group: group.title })),
      ),
    [topic],
  );

  return (
    <section
      id="faq"
      data-nav-tone="light"
      data-nav-bg="var(--canvas)"
      className="relative py-24 text-ink md:py-32"
    >
      <div className="mx-auto grid w-full max-w-7xl gap-12 px-5 md:px-6 lg:grid-cols-[5fr_7fr] lg:gap-16 lg:px-8">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <SectionCaption question={8}>Questions</SectionCaption>
          <h2 className="mt-6 font-display text-4xl leading-[1.08] font-bold tracking-[-0.03em] sm:text-5xl lg:text-[3.5rem]">
            Questions, <span className="text-brand">answered</span>
          </h2>
          <p className="mt-6 max-w-md text-lg leading-8 text-soft">
            How exams run on Potto CBT, how marking and results work, how
            student data is kept safe, and how to get started.
          </p>

          <div
            role="group"
            aria-label="Filter questions by topic"
            className="mt-8 flex flex-wrap gap-2"
          >
            {TOPICS.map((t) => (
              <button
                key={t}
                type="button"
                aria-pressed={topic === t}
                onClick={() => setTopic(t)}
                className={`cursor-pointer rounded-lg px-4 py-2 text-sm font-semibold transition-colors duration-300 ${
                  topic === t
                    ? "bg-ink text-white"
                    : "bg-surface-2 text-ink/70 hover:bg-brand/10 hover:text-ink"
                }`}
              >
                {t}
              </button>
            ))}
          </div>

          <div className="mt-10 hidden rounded-[1.75rem] bg-accent p-7 lg:block">
            <p className="font-display text-xl font-bold text-accent-foreground">
              Still curious?
            </p>
            <p className="mt-2 text-[0.95rem] leading-7 text-ink/80">
              Our support team is happy to help.
            </p>
            <a
              href="mailto:support@potto.ng?subject=Potto%20CBT"
              className="mt-4 inline-flex items-center gap-2 font-semibold text-brand underline-offset-4 hover:underline"
            >
              <HugeiconsIcon icon={Mail01Icon} size={18} strokeWidth={2} />
              support@potto.ng
            </a>
          </div>
        </div>

        <ul aria-live="polite" className="space-y-3">
          {items.map((item, i) => {
            const id = slug(item.q);
            const isOpen = open === id;
            return (
              <motion.li
                key={id}
                layout={!reduced}
                initial={reduced ? false : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: Math.min(i, 8) * 0.03, ease }}
                className={`overflow-hidden rounded-[1.5rem] transition-colors duration-300 ${
                  isOpen ? "bg-brand/10" : "bg-surface-2 hover:bg-brand/6"
                }`}
              >
                <button
                  type="button"
                  id={`faq-trigger-${id}`}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${id}`}
                  onClick={() => setOpen(isOpen ? null : id)}
                  className="flex w-full cursor-pointer items-center justify-between gap-5 p-5 text-left sm:p-6"
                >
                  <span>
                    {topic === ALL && (
                      <span className="mb-1 block text-xs font-semibold tracking-[0.16em] text-soft uppercase">
                        {item.group}
                      </span>
                    )}
                    <span className="font-display text-lg leading-snug font-bold sm:text-xl">
                      {item.q}
                    </span>
                  </span>
                  <span
                    aria-hidden
                    className={`grid h-10 w-10 shrink-0 place-items-center rounded-full transition duration-300 ${
                      isOpen
                        ? "rotate-45 bg-brand text-brand-fg"
                        : "bg-white text-brand"
                    }`}
                  >
                    <HugeiconsIcon icon={Add01Icon} size={20} strokeWidth={2.4} />
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="panel"
                      id={`faq-panel-${id}`}
                      role="region"
                      aria-labelledby={`faq-trigger-${id}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: reduced ? 0 : 0.32, ease }}
                      className="overflow-hidden"
                    >
                      <p className="max-w-2xl px-5 pb-6 text-base leading-7 text-ink/80 sm:px-6">
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

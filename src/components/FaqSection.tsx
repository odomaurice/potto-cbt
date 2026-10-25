"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { HugeiconsIcon } from "@hugeicons/react";
import { Add01Icon, Mail01Icon } from "@hugeicons/core-free-icons";
import SectionCaption from "@/components/SectionCaption";

type Group = { title: string; items: { q: string; a: string }[] };

const GROUPS: Group[] = [
  {
    title: "About PottoFlip",
    items: [
      {
        q: "What is PottoFlip?",
        a: "PottoFlip is an e-learning platform that helps schools deliver, organise, manage and monitor digital learning. Teachers create and share courses, students work through lessons and activities, and the school can see participation and progress. It is the teaching and learning layer of the Potto Learning Suite.",
      },
      {
        q: "Does PottoFlip replace classroom teaching?",
        a: "No. PottoFlip complements classroom teaching. It makes learning materials available digitally, so students can revisit lessons at their own pace, catch up on a class they missed and keep learning outside school hours.",
      },
      {
        q: "Who uses PottoFlip?",
        a: "Students, teachers and school administrators, each with their own dashboard and permissions. Parents and guardians can also follow a linked child's progress if the school turns that on.",
      },
      {
        q: "Does PottoFlip work on phones?",
        a: "Yes. PottoFlip is built for desktops, laptops, tablets and mobile phones, and the essential learning functions are designed to be comfortable on a small screen.",
      },
    ],
  },
  {
    title: "Teaching and learning",
    items: [
      {
        q: "What can a lesson contain?",
        a: "Rich text, images, video, audio, PDF documents, presentations, downloadable files and links to external learning resources. Teachers can save lessons as drafts, reorder them, and publish or schedule them.",
      },
      {
        q: "Can students pick up where they left off?",
        a: "Yes. PottoFlip keeps each student's progress so they can resume a lesson from where they stopped, and the dashboard always offers the next thing to continue with.",
      },
      {
        q: "What kinds of quiz questions are there?",
        a: "Multiple choice, multiple select, true or false, short answer and fill in the blanks. Objective questions are graded automatically, and anything that needs a teacher's judgement is sent to the teacher to grade.",
      },
      {
        q: "Are PottoFlip quizzes the same as exams?",
        a: "No. PottoFlip's quizzes are low-stakes practice for learning and revision. Formal computer-based examinations stay in Potto CBT, and practice scores do not become official results unless the school has approved a workflow for that.",
      },
      {
        q: "How does PottoFlip measure progress?",
        a: "It records meaningful learning events — lessons completed, assignments submitted, quiz attempts and feedback — and tells opening a lesson apart from completing it. Teachers can then see who is doing well, who has not started and which topics students find hard.",
      },
    ],
  },
  {
    title: "Privacy and the Potto Learning Suite",
    items: [
      {
        q: "Can one school see another school's data?",
        a: "No. Each school's courses, student records and reports are kept separate. Users from one school cannot access another school's private information without explicit authorisation.",
      },
      {
        q: "Who can see a student's grades and work?",
        a: "Only authorised users. Teachers see the classes and students their role allows, parents see only their own linked children, and grades, submissions and feedback are never exposed publicly.",
      },
      {
        q: "Do we have to re-enter our classes and students?",
        a: "PottoFlip is designed to use the school, class, subject, student and teacher records already held in Potto Admin, so your school does not have to recreate them.",
      },
      {
        q: "Will PottoFlip have an AI assistant?",
        a: "An AI learning assistant is on the roadmap for a later phase. Any AI-generated material would be reviewed before it is published as official school content, with safeguards to protect students.",
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
          <SectionCaption lesson={7}>Questions</SectionCaption>
          <h2 className="mt-6 font-display text-4xl leading-[1.02] font-extrabold tracking-[-0.03em] sm:text-5xl lg:text-6xl">
            Questions, <span className="text-brand">answered</span>
          </h2>
          <p className="mt-6 max-w-md text-lg leading-8 text-soft">
            How teaching and learning work on PottoFlip, how student data is kept
            safe, and how your school can get started.
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
                className={`cursor-pointer rounded-full px-4 py-2 text-sm font-semibold transition-colors duration-300 ${
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
            <p className="font-note text-2xl text-accent-foreground">
              still curious?
            </p>
            <p className="mt-2 text-[0.95rem] leading-7 text-ink/80">
              Our support team is happy to help.
            </p>
            <a
              href="mailto:support@potto.ng?subject=Potto%20Flip"
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

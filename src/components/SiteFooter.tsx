"use client";

import Link from "next/link";
import { useSyncExternalStore } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  ArrowUp01Icon,
  Call02Icon,
  Clock01Icon,
  Facebook01Icon,
  InstagramIcon,
  Linkedin01Icon,
  Location05Icon,
  Mail01Icon,
} from "@hugeicons/core-free-icons";
import Wordmark from "@/components/Wordmark";

const EXPLORE = [
  { label: "Why Potto CBT", href: "/#about" },
  { label: "Core features", href: "/#features" },
  { label: "Exam day", href: "/#exam-day" },
  { label: "Who it's for", href: "/#roles" },
  { label: "The exam lifecycle", href: "/#lifecycle" },
  { label: "The Potto Learning Suite", href: "/#ecosystem" },
  { label: "Roadmap", href: "/#roadmap" },
  { label: "Questions", href: "/#faq" },
];

const PHONES = ["+234 808 472 4276", "+234 812 557 8825"];
const EMAILS = ["Info@potto.ng", "support@potto.ng"];

const OFFICE_HOURS = [
  { days: "Monday – Friday", time: "8AM – 4PM" },
  { days: "Saturday", time: "8AM – 12 Noon" },
];

const ADDRESS =
  "House 83 Coal City Gardens, Behind Central Bank of Nigeria, Okpara Avenue, Enugu.";

const SOCIALS = [
  {
    label: "Potto on Facebook",
    icon: Facebook01Icon,
    href: "https://www.facebook.com/potto.ngr",
  },
  {
    label: "Potto on Instagram",
    icon: InstagramIcon,
    href: "https://www.instagram.com/potto.ng",
  },
  {
    label: "Potto on LinkedIn",
    icon: Linkedin01Icon,
    href: "https://www.linkedin.com/company/potto-ng",
  },
];

const BUILD_YEAR = new Date().getFullYear();
const subscribeToNothing = () => () => {};

const heading =
  "text-xs font-semibold tracking-[0.2em] text-brand-yellow-light uppercase";
const link = "text-[0.95rem] text-white/90 transition-colors hover:text-white";

export default function SiteFooter() {
  const year = useSyncExternalStore(
    subscribeToNothing,
    () => new Date().getFullYear(),
    () => BUILD_YEAR,
  );

  return (
    <footer
      id="contact"
      data-nav-tone="dark"
      data-nav-bg="var(--color-brand-teal-dark)"
      className="relative isolate overflow-hidden bg-brand-teal-dark pt-20 text-white md:pt-24"
    >

      <div className="mx-auto w-full max-w-7xl px-5 md:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1.3fr_1fr]">
          <div className="max-w-sm">
            <Link
              href="/"
              aria-label="Potto CBT home"
              className="inline-flex items-center"
            >
              <Wordmark tone="dark" />
            </Link>
            <p className="mt-5 text-[0.95rem] leading-7 text-white/90">
              The computer-based testing platform of the Potto Learning Suite.
              Smarter examinations, reliable assessment, better insights.
            </p>
            <ul className="mt-6 flex gap-2.5">
              {SOCIALS.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white transition hover:-translate-y-0.5 hover:bg-brand-yellow hover:text-ink"
                  >
                    <HugeiconsIcon icon={social.icon} size={18} strokeWidth={2} />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className={heading}>The paper</h2>
            <ol className="mt-5 space-y-3">
              {EXPLORE.map((item, i) => (
                <li key={item.label}>
                  <Link href={item.href} className={`${link} flex gap-3`}>
                    <span className="w-8 font-mono text-sm text-white/60">
                      Q{String(i + 1).padStart(2, "0")}
                    </span>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ol>
          </div>

          <div>
            <h2 className={heading}>Contact</h2>
            <ul className="mt-5 space-y-4 text-[0.95rem] text-white/90">
              <li className="flex items-start gap-3">
                <HugeiconsIcon
                  icon={Location05Icon}
                  size={18}
                  strokeWidth={1.8}
                  className="mt-1 shrink-0 text-brand-yellow-light"
                />
                <span className="leading-7">{ADDRESS}</span>
              </li>
              {EMAILS.map((email) => (
                <li key={email}>
                  <a
                    href={`mailto:${email}?subject=Potto%20CBT`}
                    className={`${link} flex items-start gap-3`}
                  >
                    <HugeiconsIcon
                      icon={Mail01Icon}
                      size={18}
                      strokeWidth={1.8}
                      className="mt-0.5 shrink-0 text-brand-yellow-light"
                    />
                    {email}
                  </a>
                </li>
              ))}
              {PHONES.map((phone) => (
                <li key={phone}>
                  <a
                    href={`tel:${phone.replace(/\s/g, "")}`}
                    className={`${link} flex items-start gap-3`}
                  >
                    <HugeiconsIcon
                      icon={Call02Icon}
                      size={18}
                      strokeWidth={1.8}
                      className="mt-0.5 shrink-0 text-brand-yellow-light"
                    />
                    {phone}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className={heading}>Office hours</h2>
            <ul className="mt-5 space-y-4 text-[0.95rem] text-white/90">
              {OFFICE_HOURS.map((slot) => (
                <li key={slot.days} className="flex items-start gap-3">
                  <HugeiconsIcon
                    icon={Clock01Icon}
                    size={18}
                    strokeWidth={1.8}
                    className="mt-0.5 shrink-0 text-brand-yellow-light"
                  />
                  <span>
                    <span className="block font-semibold text-white">
                      {slot.days}
                    </span>
                    <span className="mt-0.5 block">{slot.time}</span>
                  </span>
                </li>
              ))}
            </ul>
            <a
              href="mailto:support@potto.ng?subject=Potto%20CBT"
              className="mt-7 inline-flex items-center justify-center rounded-xl bg-brand-yellow px-6 py-3 text-sm font-semibold text-ink transition duration-300 hover:-translate-y-0.5 hover:bg-brand-yellow-light"
            >
              Email support
            </a>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center gap-5 border-t border-white/15 pt-8 sm:flex-row sm:justify-between">
          <p className="text-sm text-white/90" suppressHydrationWarning>
            © {year} Potto Technologies Ltd. Potto CBT is part of the Potto Learning Suite.
          </p>
          <a
            href="#"
            aria-label="Back to top"
            className="grid h-10 w-10 place-items-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
          >
            <HugeiconsIcon icon={ArrowUp01Icon} size={16} strokeWidth={2} />
          </a>
        </div>
      </div>

      {/* The name, set huge and cut off by the page edge. */}
      <p
        aria-hidden
        className="pointer-events-none mt-6 text-center font-display text-[17vw] leading-[0.8] font-bold tracking-[-0.05em] whitespace-nowrap text-white/8 select-none"
      >
        Potto CBT
      </p>
    </footer>
  );
}

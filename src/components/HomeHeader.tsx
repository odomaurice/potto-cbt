"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Menu01Icon,
  Cancel01Icon,
  ArrowRight01Icon,
} from "@hugeicons/core-free-icons";
import Wordmark from "@/components/Wordmark";

const navItems = [
  { label: "Why PottoFlip", href: "/#about" },
  { label: "Features", href: "/#features" },
  { label: "Who it's for", href: "/#roles" },
  { label: "How it works", href: "/#how-it-works" },
  { label: "Learning Suite", href: "/#ecosystem" },
  { label: "FAQ", href: "/#faq" },
];

const PROBE_Y = 48;
const DEFAULT_NAV = { tone: "light" as const, bg: "var(--canvas)" };

export default function HomeHeader() {
  const [open, setOpen] = useState(false);
  const [nav, setNav] = useState<{ tone: "light" | "dark"; bg: string }>(
    DEFAULT_NAV,
  );
  const onDark = nav.tone === "dark";

  useEffect(() => {
    let ticking = false;

    const compute = () => {
      ticking = false;
      const sections =
        document.querySelectorAll<HTMLElement>("[data-nav-tone]");
      let next = DEFAULT_NAV as { tone: "light" | "dark"; bg: string };

      sections.forEach((section) => {
        const r = section.getBoundingClientRect();
        if (r.top <= PROBE_Y && r.bottom > PROBE_Y) {
          next = {
            tone: section.dataset.navTone === "dark" ? "dark" : "light",
            bg: section.dataset.navBg ?? "transparent",
          };
        }
      });

      setNav(next);
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

  return (
    <>
      {/* A floating pill rather than a full-width bar. Its fill is the ground
          beneath it, slightly lifted, so it never reads as an outlined box. */}
      <header className="fixed inset-x-3 top-3 z-50 sm:inset-x-5 sm:top-4">
        <div
          style={{
            backgroundColor: `color-mix(in oklab, ${nav.bg} 82%, ${onDark ? "white" : "black"} 4%)`,
          }}
          className="mx-auto flex h-16 max-w-6xl items-center justify-between rounded-full pr-2 pl-5 shadow-[0_10px_40px_-18px_rgb(0_0_0/0.35)] backdrop-blur-xl transition-colors duration-300 sm:pl-6"
        >
          <Link
            href="/"
            aria-label="PottoFlip home"
            className="flex items-center"
          >
            <Wordmark tone={onDark ? "dark" : "light"} priority />
          </Link>

          <nav className="hidden items-center lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`rounded-full px-3.5 py-2 text-sm font-medium transition-colors duration-300 ${
                  onDark
                    ? "text-white/90 hover:bg-white/10 hover:text-white"
                    : "text-ink/70 hover:bg-ink/5 hover:text-ink"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Link
              href="/#contact"
              className="hidden items-center gap-1.5 rounded-full bg-brand-yellow px-5 py-3 text-sm font-semibold text-ink transition duration-300 hover:-translate-y-0.5 hover:bg-brand-yellow-light sm:inline-flex"
            >
              Talk to us
              <HugeiconsIcon
                icon={ArrowRight01Icon}
                size={16}
                strokeWidth={2}
              />
            </Link>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
              aria-expanded={open}
              className={`grid h-12 w-12 cursor-pointer place-items-center rounded-full transition-colors duration-300 lg:hidden ${
                onDark
                  ? "bg-white/10 text-white hover:bg-white/20"
                  : "bg-ink/5 text-ink hover:bg-ink/10"
              }`}
            >
              <HugeiconsIcon
                icon={open ? Cancel01Icon : Menu01Icon}
                size={20}
                strokeWidth={1.8}
              />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-3 top-22 z-40 origin-top rounded-[1.75rem] bg-ink/95 p-3 backdrop-blur-xl sm:inset-x-5 lg:hidden"
          >
            <nav className="flex flex-col">
              {navItems.map((item, i) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-4 rounded-2xl px-4 py-3 font-display text-lg font-bold text-white transition-colors hover:bg-white/10"
                >
                  <span className="w-6 text-sm text-brand-yellow-light">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {item.label}
                </Link>
              ))}
              <Link
                href="/#contact"
                onClick={() => setOpen(false)}
                className="mt-2 rounded-2xl bg-brand-yellow px-4 py-3 text-center text-sm font-semibold text-ink transition hover:bg-brand-yellow-light"
              >
                Talk to us
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

import type { Metadata } from "next";
import { JetBrains_Mono, Poppins } from "next/font/google";
import WhatsAppButton from "@/components/WhatsAppButton";
import "./globals.css";

// Poppins, the Potto house face, for display and body alike. The mono face is
// for numbers only — timers, question numbers, timestamps — and is what makes
// the page read as an exam.
const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  subsets: ["latin"],
});

const mono = JetBrains_Mono({
  variable: "--font-mono-face",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Potto CBT | Computer-based exams for schools, by Potto",
  description:
    "Potto CBT is the computer-based testing platform of the Potto Learning Suite: question banks, exam scheduling, a reliable exam room, automatic marking of objective questions, and results released when the school allows.",
  icons: {
    icon: [{ url: "/potto-mark.webp", type: "image/webp" }],
    shortcut: "/potto-mark.webp",
    apple: "/potto-mark.webp",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${mono.variable} h-full antialiased`}
    >
      <body suppressHydrationWarning className="min-h-full flex flex-col">
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import {
  Bricolage_Grotesque,
  Caveat,
  Geist_Mono,
  Instrument_Sans,
} from "next/font/google";
import WhatsAppButton from "@/components/WhatsAppButton";
import "./globals.css";

// Display, body and the handwritten "teacher's note" face. Pottolite is all
// Poppins; Flip's type is what tells the two sites apart at a glance.
const display = Bricolage_Grotesque({
  variable: "--font-display-face",
  subsets: ["latin"],
});

const body = Instrument_Sans({
  variable: "--font-body-face",
  subsets: ["latin"],
});

const note = Caveat({
  weight: ["600"],
  variable: "--font-note-face",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PottoFlip | Digital learning for schools, by Potto",
  description:
    "PottoFlip is the e-learning platform of the Potto Learning Suite: courses, lessons, assignments, practice quizzes, feedback and learning progress for schools, teachers and students.",
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
      className={`${display.variable} ${body.variable} ${note.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body suppressHydrationWarning className="min-h-full flex flex-col">
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}

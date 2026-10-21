import type { Metadata } from "next";
import { Geist_Mono, Poppins } from "next/font/google";
import WhatsAppButton from "@/components/WhatsAppButton";
import "./globals.css";

const poppins = Poppins({
  weight: ["400", "600", "700"],
  variable: "--font-poppins-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Potto Flip | Digital learning for schools, by Potto",
  description:
    "Potto Flip is the e-learning platform of the Potto ecosystem: courses, lessons, assignments, practice quizzes, feedback and learning progress for schools, teachers and students.",
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
      className={`${poppins.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body suppressHydrationWarning className="min-h-full flex flex-col">
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}

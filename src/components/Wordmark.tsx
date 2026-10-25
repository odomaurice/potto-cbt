import Image from "next/image";

/**
 * The Potto hand plus "Potto CBT" set in type. There is no CBT wordmark
 * artwork, so the name is live text and recolours with the ground for free.
 */
export default function Wordmark({
  tone = "light",
  priority = false,
  className = "",
}: {
  tone?: "light" | "dark";
  priority?: boolean;
  className?: string;
}) {
  const onDark = tone === "dark";

  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <Image
        src="/potto-mark.webp"
        alt=""
        width={93}
        height={160}
        priority={priority}
        className={`h-7 w-auto transition duration-300 ${onDark ? "brightness-0 invert" : ""}`}
      />
      <span
        className={`flex items-center gap-1.5 font-display text-xl font-bold tracking-tight transition-colors duration-300 ${
          onDark ? "text-white" : "text-ink"
        }`}
      >
        Potto
        <span
          className={`rounded-md px-1.5 py-0.5 font-mono text-[0.8rem] font-bold tracking-wider transition-colors duration-300 ${
            onDark ? "bg-brand-yellow text-ink" : "bg-brand text-brand-fg"
          }`}
        >
          CBT
        </span>
      </span>
    </span>
  );
}

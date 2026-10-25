import Image from "next/image";

/**
 * The Potto hand plus "PottoFlip" set in type. There is no Flip wordmark
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
        className={`font-display text-xl font-extrabold tracking-tight transition-colors duration-300 ${
          onDark ? "text-white" : "text-ink"
        }`}
      >
        Potto
        <span
          className={`ml-0.5 inline-block -rotate-3 rounded-md px-1.5 transition-colors duration-300 ${
            onDark ? "bg-brand-yellow text-ink" : "bg-brand text-brand-fg"
          }`}
        >
          Flip
        </span>
      </span>
    </span>
  );
}

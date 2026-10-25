<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

---

# Potto CBT project rules

The block above is managed by `next dev`; everything below it is ours and
survives regeneration. [`README.md`](README.md) explains the reasoning — this is
the short list of things that go wrong when they are not followed.

## Before saying it works

- `npm run build` and `npx eslint src/` must both be clean. The build runs
  TypeScript; lint is not part of it.
- Claims about layout, animation or interaction need a browser, not a
  typecheck. See "Checking it in a browser" in the README.

## Content

- The product is **Potto CBT** — two words, "CBT" in capitals. The sister
  product is **PottoFlip** (one word) even where the CBT PRD writes "Potto
  Flip". The family of products is the **Potto Learning Suite**, not "the
  Potto ecosystem". The `ecosystem` id and `EcosystemSection` name are
  internal and can stay.
- Potto CBT's copy comes from the PRD in [`docs/PRD.md`](docs/PRD.md). Do
  not add capabilities, numbers or claims it does not support.
- The PRD is a *proposed* spec. Phase 2 and 3 items (PRD 9) are "planned" on
  the page, never described as available — that includes every question type
  beyond multiple choice and true or false, manual marking, invigilator
  dashboards, randomisation, exports and offline exams.
- Never claim cheating is impossible, and never advertise offline exams or
  proctoring (PRD 4.11, 4.12).
- There are no CBT screenshots yet. Do not mock up an interface and present
  it as the product; the hero's exam screen is captioned as an illustration
  and must stay captioned. When real screenshots arrive, blur every
  name, face, phone number and school name that is not already public.

## Sections

- Every `<section>` needs `data-nav-tone` and `data-nav-bg`, or the header
  loses its colour over it.
- Open with `SectionCaption`, passing the section's `question` number. Do not
  hand-roll another eyebrow.
- Keep `HomeScrollNav`'s `SECTIONS` list in the same order as `page.tsx`.
- Anchor links must be root-relative (`/#features`, not `#features`), or they
  go nowhere from `/privacy` and `/terms`.

## Design

- **The background is the contour pattern** (`PageBackdrop` + `ContourPattern`,
  near-white lines). Do not swap it for a grid, dots or any other texture, and
  do not add textures to the coloured bands.
- **No decorative gradients or glows** — no blurred colour blobs, gradient
  washes or gradient-filled lines. Flat fills only.
- **No frames.** No boxes, outlines or cards floating on visible panels — the
  page reads as one continuous picture. Use tinted fills instead.
- Gold (`#CA8A04`) is a fill, never text on teal: 1.86:1. Body copy on teal is
  `text-white/90` (4.76:1).
- Light theme only.
- **Poppins** for display and body. JetBrains Mono is for numbers and short
  labels only — timers, question numbers, timestamps.

## Images

- Everything on the page is a cropped, resized WebP. Check the file signature,
  not the extension.
- `sizes` must match the real rendered width, not a guessed `vw`.
- After replacing an image, clear `.next/cache/images` **and**
  `.next/dev/cache/images` — `npm run dev` keeps its own.
- Nothing unreferenced in `public/`, and no source masters beside derivatives.

## React

- No `setState` in an effect body; the lint rule is an error. Use
  `useSyncExternalStore` for a hydration-time value, or let `ResizeObserver`
  fire on `observe`.

## Windows, and this shell

- sharp holds its source file open: read into a Buffer before writing back to
  the same path, or the write fails with `UNKNOWN`/`EPERM`.
- Git Bash heredocs and `node -e` break on the apostrophes in this repo's
  prose. Write the script to a file and run the file.
- Stop `next start` before rebuilding; it holds `.next` open.

## Do not invent commitments

Prices, plan entitlements, billing periods, uptime targets, refunds, liability
caps and legal wording are decisions for the team, not drafting choices. Leave
a marked gap and ask. The open ones are listed under "Known gaps" in the README.

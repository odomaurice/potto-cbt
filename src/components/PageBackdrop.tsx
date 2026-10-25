import ContourPattern from "./ContourPattern";

/**
 * The single page-wide ground: a plain canvas with near-white contour lines.
 * Sections render transparent on top of it, or paint their own ground.
 */
export default function PageBackdrop() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 bg-canvas">
      <ContourPattern className="text-water-mark" />
    </div>
  );
}

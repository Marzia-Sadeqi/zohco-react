// Small helpers shared by the components.

/** Spread onto a motion element to fade it in and move it up when it scrolls into view. */
export const reveal = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.7, ease: [0.2, 0.7, 0.2, 1], delay },
});

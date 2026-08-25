"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

/* ============================================================= */
/* REVEAL                                                         */
/*                                                                 */
/* Generic scroll-driven reveal: fades in and rises into place    */
/* as it crosses into the viewport, using the same "cinematic"    */
/* ease-out curve as the smooth-scroll and nav-link transitions   */
/* (fast start, long soft settle) so every scroll-triggered       */
/* motion on the site feels like one consistent language.         */
/*                                                                 */
/* Deliberately does NOT touch `filter` - the velocity-based      */
/* scroll blur (globals.css .scroll-blur + useScrollBlur) already */
/* owns that property globally, and framer-motion's inline style  */
/* would otherwise fight it for control of the same CSS property. */
/* ============================================================= */

const CINEMATIC_EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function Reveal({
  children,
  delay = 0,
  y = 28,
  className,
  once = false,
  amount = 0.25,
  duration = 0.9,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  once?: boolean;
  amount?: number;
  duration?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount }}
      transition={{ duration, delay, ease: CINEMATIC_EASE }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

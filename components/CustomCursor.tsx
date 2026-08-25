"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springX = useSpring(cursorX, {
    damping: 30,
    stiffness: 420,
    mass: 0.4,
  });
  const springY = useSpring(cursorY, {
    damping: 30,
    stiffness: 420,
    mass: 0.4,
  });

  const [isLink, setIsLink] = useState(false);
  const [visible, setVisible] = useState(false);
  const [isFinePointer, setIsFinePointer] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    setIsFinePointer(mq.matches);
    const update = () => setIsFinePointer(mq.matches);
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (!isFinePointer) return;

    const move = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!visible) setVisible(true);
    };

    const over = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest(
        "a, button, [data-cursor='link'], input, textarea, select"
      );
      setIsLink(Boolean(link));
    };

    const leave = () => setVisible(false);

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    document.addEventListener("mouseleave", leave);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
      document.removeEventListener("mouseleave", leave);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFinePointer, visible]);

  if (!isFinePointer) return null;

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[999] mix-blend-difference"
      style={{
        x: springX,
        y: springY,
        translateX: "-50%",
        translateY: "-50%",
      }}
      animate={{ opacity: visible ? 1 : 0 }}
      transition={{ duration: 0.2 }}
    >
      <motion.div
        animate={{
          width: isLink ? 44 : 16,
          height: isLink ? 44 : 16,
        }}
        transition={{ type: "spring", damping: 26, stiffness: 340 }}
        className="flex items-center justify-center rounded-full border border-white bg-white/0"
      >
        <motion.svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          animate={{
            width: isLink ? 15 : 0,
            height: isLink ? 15 : 0,
            opacity: isLink ? 1 : 0,
          }}
          transition={{ duration: 0.2 }}
        >
          <line x1="7" y1="17" x2="17" y2="7" />
          <polyline points="7 7 17 7 17 17" />
        </motion.svg>
      </motion.div>
    </motion.div>
  );
}

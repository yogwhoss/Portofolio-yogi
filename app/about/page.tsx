"use client";

import {
  animate,
  motion,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { useEffect, useState } from "react";

const navItems = [
  ["HOME", "/#home"],
  ["ABOUT", "/about"],
  ["STACK", "/#stack"],
  ["PROJECTS", "/#projects"],
  ["ROADMAP", "/#roadmap"],
  ["CONTACT", "/#contact"],
];

export default function AboutPage() {
  const [lightMode, setLightMode] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("light", lightMode);

    return () => {
      document.documentElement.classList.remove("light");
    };
  }, [lightMode]);

  useEffect(() => {
    document.body.style.overflow = aboutOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [aboutOpen]);

  return (
    <main
      className={`min-h-screen overflow-x-hidden transition-colors duration-500 ${
        lightMode
          ? "bg-[#f5f5f5] text-black"
          : "bg-black text-white"
      }`}
    >

      <nav
        className={`fixed left-0 right-0 top-0 z-[100] flex h-[90px] items-center justify-between border-b px-8 transition-colors duration-500 md:px-12 xl:px-20 ${
          lightMode
            ? "border-black/[0.06] bg-[#f5f5f5]/90 text-black"
            : "border-white/[0.06] bg-black/90 text-white"
        }`}
      >

        <a
          href="/"
          className="text-xl font-black uppercase tracking-tighter transition-opacity hover:opacity-50 sm:text-2xl"
        >
          YOGI
        </a>

        <div className="flex items-center gap-7 xl:gap-10">
          <ul className="hidden items-center gap-7 xl:flex">
            {navItems.map(([label, href]) => (
              <li key={label}>
                <a
                  href={href}
                  className={`text-xs font-medium uppercase tracking-[0.2em] transition-colors ${
                    lightMode
                      ? "text-black/65 hover:text-black"
                      : "text-white/65 hover:text-white"
                  }`}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">

            <button
              type="button"
              aria-label="Language"
              className={`flex h-11 w-11 items-center justify-center rounded-full border transition-all ${
                lightMode
                  ? "border-black/10 bg-white text-black hover:border-black/25"
                  : "border-white/10 bg-black text-white hover:border-white/30"
              }`}
            >
              <svg
                viewBox="0 0 24 24"
                className="h-[18px] w-[18px]"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.4"
              >
                <circle cx="12" cy="12" r="9" />
                <path d="M3 12h18" />
                <path d="M12 3c2.6 2.6 3.8 5.5 3.8 9s-1.2 6.4-3.8 9" />
                <path d="M12 3c-2.6 2.6-3.8 5.5-3.8 9s1.2 6.4 3.8 9" />
              </svg>
            </button>

            <button
              type="button"
              aria-label="Toggle theme"
              onClick={() => setLightMode((prev) => !prev)}
              className={`flex h-11 w-11 items-center justify-center rounded-full border transition-all ${
                lightMode
                  ? "border-black/10 bg-white text-black hover:border-black/25"
                  : "border-white/10 bg-black text-white hover:border-white/30"
              }`}
            >
              {lightMode ? (
                <svg
                  viewBox="0 0 24 24"
                  className="h-[18px] w-[18px]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.4"
                >
                  <circle cx="12" cy="12" r="4" />
                  <path d="M12 2v2" />
                  <path d="M12 20v2" />
                  <path d="M4.93 4.93l1.41 1.41" />
                  <path d="M17.66 17.66l1.41 1.41" />
                  <path d="M2 12h2" />
                  <path d="M20 12h2" />
                  <path d="M4.93 19.07l1.41-1.41" />
                  <path d="M17.66 6.34l1.41-1.41" />
                </svg>
              ) : (
                <svg
                  viewBox="0 0 24 24"
                  className="h-[18px] w-[18px]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.4"
                >
                  <path d="M20.5 14.5A8.5 8.5 0 0 1 9.5 3.5a8.5 8.5 0 1 0 11 11Z" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      <section
        className={`relative min-h-screen overflow-hidden px-8 pb-24 pt-[150px] md:px-12 xl:px-20 ${
          lightMode ? "bg-[#f5f5f5]" : "bg-black"
        }`}
      >
        <div className="mx-auto grid min-h-[calc(100vh-150px)] max-w-7xl grid-cols-1 gap-16 lg:grid-cols-[360px_1fr]">
        
          <div className="relative">
            <div className="sticky top-[125px]">

              <div
                className={`mb-8 text-xs tracking-[0.3em] ${
                  lightMode
                    ? "text-black/45"
                    : "text-zinc-500"
                }`}
              >
                [001]
              </div>

              <h1
                className={`text-5xl font-black uppercase tracking-tighter md:text-6xl ${
                  lightMode
                    ? "text-black"
                    : "text-white"
                }`}
              >
                ABOUT
              </h1>

              <div className="relative mt-8 h-[520px] w-full overflow-visible">
                <Lanyard lightMode={lightMode} />
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center pt-8 lg:pt-0">
            
            <motion.h2
              initial={{
                opacity: 0,
                y: 35,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
              }}
              className={`max-w-5xl text-4xl font-light leading-[1.1] tracking-tight md:text-6xl xl:text-7xl ${
                lightMode
                  ? "text-black"
                  : "text-white"
              }`}
            >
              I&apos;m a{" "}
              <span className="font-serif italic">
                Frontend Developer
              </span>{" "}
              focused on building{" "}
              <strong className="font-medium">
                clean interfaces, while constantly learning through
                hands-on classes.
              </strong>
            </motion.h2>

            <motion.p
              initial={{
                opacity: 0,
                y: 25,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
                delay: 0.15,
              }}
              className={`mt-14 max-w-3xl text-base leading-8 md:text-lg ${
                lightMode
                  ? "text-black/50"
                  : "text-zinc-500"
              }`}
            >
              I&apos;m someone who loves{" "}
              <strong
                className={
                  lightMode
                    ? "text-black"
                    : "text-white"
                }
              >
                learning new things
              </strong>{" "}
              , and I stay consistent by taking classes on Dicoding.
              Beyond building products, I enjoy being part of a{" "}
              <strong
                className={
                  lightMode
                    ? "text-black"
                    : "text-white"
                }
              >
                learning community
              </strong>
              {" "}and{" "}
              <strong
                className={
                  lightMode
                    ? "text-black"
                    : "text-white"
                }
              >
                sharing
              </strong>{" "}
              what I learn with others.
            </motion.p>


            <motion.button
              type="button"
              onClick={() => setAboutOpen(true)}
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
                delay: 0.3,
              }}
              className={`mt-14 w-fit border-b pb-2 text-2xl font-semibold tracking-tight transition-all hover:pr-3 ${
                lightMode
                  ? "border-black/40 text-black"
                  : "border-white/40 text-white"
              }`}
            >
              Read Full Version
              <span className="ml-2">→</span>
            </motion.button>
          </div>
        </div>

        <div
          className={`absolute bottom-[24%] left-[40%] h-8 w-8 rounded-full border ${
            lightMode
              ? "border-black/20"
              : "border-white/20"
          }`}
        >
          <div
            className={`absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full ${
              lightMode
                ? "bg-black/40"
                : "bg-white/40"
            }`}
          />
        </div>
      </section>

      <footer
        className={`border-t px-8 py-8 md:px-12 xl:px-20 ${
          lightMode
            ? "border-black/10 bg-[#f5f5f5]"
            : "border-zinc-900 bg-black"
        }`}
      >
        <div
          className={`mx-auto flex max-w-7xl flex-col gap-4 text-xs uppercase tracking-[0.15em] md:flex-row md:items-center md:justify-between ${
            lightMode
              ? "text-black/30"
              : "text-zinc-700"
          }`}
        >
          <p>© 2026 Wini Permana</p>

          <p>
            Designed &amp; Built with code.
          </p>
        </div>
      </footer>

      {aboutOpen && (
        <AboutModal
          lightMode={lightMode}
          onClose={() => setAboutOpen(false)}
        />
      )}
    </main>
  );
}


function Lanyard({
  lightMode,
}: {
  lightMode: boolean;
}) {
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const ropePath = useTransform(
    [x, y],
    ([currentX, currentY]) => {
      const offsetX = Number(currentX);
      const offsetY = Number(currentY);

      const anchorX = 180;
      const anchorY = 0;

      const cardX = 180 + offsetX;
      const cardY = 250 + offsetY;
      const dx = cardX - anchorX;
      const dy = cardY - anchorY;

      const distance = Math.sqrt(
        dx * dx + dy * dy
      );

      const bend = Math.min(
        110,
        Math.abs(dx) * 0.32
      );

      const baseControlX =
        anchorX + dx * 0.45;

      const baseControlY =
        anchorY + dy * 0.48;

      const curveDirection =
        dx >= 0 ? -1 : 1;
      const distanceFactor = Math.min(
        1,
        distance / 350
      );

      const controlX =
        baseControlX +
        bend *
          curveDirection *
          distanceFactor;

      const controlY =
        baseControlY;

      return `
        M ${anchorX} ${anchorY}
        Q ${controlX} ${controlY}
          ${cardX} ${cardY}
      `;
    }
  );

  const rotation = useTransform(
    x,
    [-350, -280, -180, -80, 0, 80, 180, 280, 350],
    [-14, -11, -8, -4, 0, 4, 8, 11, 14]
  );

  const snapBack = () => {

    x.stop();
    y.stop();

    animate(x, 0, {
      type: "spring",
      stiffness: 650,
      damping: 38,
      mass: 0.45,
    });

    animate(y, 0, {
      type: "spring",
      stiffness: 650,
      damping: 38,
      mass: 0.45,
    });
  };

  return (
    <div className="absolute inset-0 overflow-visible">
  
      <svg
        className="pointer-events-none absolute left-0 top-0 h-[500px] w-[360px] overflow-visible"
        viewBox="0 0 360 500"
        fill="none"
      >

        <motion.path
          d={ropePath}
          stroke={
            lightMode
              ? "rgba(0,0,0,0.12)"
              : "rgba(255,255,255,0.08)"
          }
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <motion.path
          d={ropePath}
          stroke={
            lightMode
              ? "rgba(0,0,0,0.38)"
              : "rgba(255,255,255,0.28)"
          }
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />


        <motion.path
          d={ropePath}
          stroke={
            lightMode
              ? "rgba(0,0,0,0.13)"
              : "rgba(255,255,255,0.13)"
          }
          strokeWidth="1"
          strokeDasharray="3 5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      {/* ====================================================== */}
      {/* TOP ANCHOR */}
      {/* ====================================================== */}

      <div
        className={`absolute left-[174px] top-[-5px] z-20 h-3 w-3 rounded-full border ${
          lightMode
            ? "border-black/40 bg-[#f5f5f5]"
            : "border-white/40 bg-black"
        }`}
      >
        <div
          className={`absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full ${
            lightMode
              ? "bg-black/45"
              : "bg-white/45"
          }`}
        />
      </div>

      {/* ====================================================== */}
      {/* CARD */}
      {/* ====================================================== */}

      <motion.div
        drag
        dragMomentum={false}
        dragElastic={0.05}
        dragConstraints={{
          left: -350,
          right: 350,
          top: -120,
          bottom: 220,
        }}
        style={{
          x,
          y,
          rotate: rotation,
        }}
        onDragStart={() => {
          /*
           * Kalau user mulai menarik lagi ketika card
           * sedang snap-back, hentikan snap.
           */

          x.stop();
          y.stop();
        }}
        onDragEnd={() => {
          /*
           * Setelah dilepas:
           * SELALU KEMBALI KE TENGAH.
           */

          snapBack();
        }}
        whileHover={{
          scale: 1.025,
        }}
        whileDrag={{
          scale: 1.055,
          cursor: "grabbing",
        }}
        transition={{
          scale: {
            type: "spring",
            stiffness: 450,
            damping: 28,
          },
        }}
        className="absolute left-[105px] top-[250px] z-30 cursor-grab select-none touch-none"
      >
        {/* ==================================================== */}
        {/* CARD BODY */}
        {/* ==================================================== */}

        <div
          className={`relative flex h-[175px] w-[150px] flex-col items-center justify-center rounded-[20px] border shadow-2xl ${
            lightMode
              ? "border-black/10 bg-white"
              : "border-white/10 bg-[#090909]"
          }`}
        >
          {/* CARD GLOW */}

          <div
            className={`pointer-events-none absolute inset-0 rounded-[20px] ${
              lightMode
                ? "bg-gradient-to-b from-black/[0.025] to-transparent"
                : "bg-gradient-to-b from-white/[0.045] to-transparent"
            }`}
          />

          {/* ================================================== */}
          {/* AVATAR */}
          {/* ================================================== */}

          <div
            className={`relative z-10 mb-4 flex h-[76px] w-[76px] items-center justify-center rounded-full border ${
              lightMode
                ? "border-black/20 bg-black/[0.03]"
                : "border-white/20 bg-white/[0.03]"
            }`}
          >
            <svg
              viewBox="0 0 24 24"
              className={`h-10 w-10 ${
                lightMode
                  ? "text-black/35"
                  : "text-white/35"
              }`}
              fill="none"
              stroke="currentColor"
              strokeWidth="1.3"
            >
              <circle
                cx="12"
                cy="8"
                r="3.5"
              />

              <path d="M5 21v-2.5a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5V21" />
            </svg>
          </div>

          {/* ================================================== */}
          {/* NAME */}
          {/* ================================================== */}

          <p
            className={`relative z-10 text-[13px] font-bold tracking-[0.2em] ${
              lightMode
                ? "text-black"
                : "text-white"
            }`}
          >
            YOGI
          </p>

          {/* ================================================== */}
          {/* ROLE */}
          {/* ================================================== */}

          <p
            className={`relative z-10 mt-2 text-[9px] uppercase tracking-[0.15em] ${
              lightMode
                ? "text-black/40"
                : "text-white/40"
            }`}
          >
            Developer
          </p>

          {/* ================================================== */}
          {/* CARD BOTTOM DOT */}
          {/* ================================================== */}

          <div
            className={`absolute -bottom-3 left-1/2 h-6 w-6 -translate-x-1/2 rounded-full border ${
              lightMode
                ? "border-black/20 bg-[#f5f5f5]"
                : "border-white/25 bg-black"
            }`}
          >
            <div
              className={`absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full ${
                lightMode
                  ? "bg-black/40"
                  : "bg-white/40"
              }`}
            />
          </div>
        </div>
      </motion.div>

      <p
        className={`absolute left-[100px] top-[450px] w-[160px] text-center text-[8px] uppercase tracking-[0.18em] ${
          lightMode
            ? "text-black/20"
            : "text-white/20"
        }`}
      >
        Drag me
      </p>
    </div>
  );
}

function AboutModal({
  lightMode,
  onClose,
}: {
  lightMode: boolean;
  onClose: () => void;
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
      }}
      className="fixed inset-0 z-[999] flex items-center justify-center bg-black/75 p-6 backdrop-blur-xl"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <motion.div
        initial={{
          opacity: 0,
          y: 35,
          scale: 0.97,
        }}
        animate={{
          opacity: 1,
          y: 0,
          scale: 1,
        }}
        transition={{
          duration: 0.35,
          ease: "easeOut",
        }}
        className={`relative max-h-[85vh] w-full max-w-[850px] overflow-y-auto rounded-[14px] border p-8 shadow-2xl md:p-10 ${
          lightMode
            ? "border-black/10 bg-white text-black"
            : "border-white/10 bg-[#0a0a0a] text-white"
        }`}
      >

        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className={`absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border text-xl transition-all ${
            lightMode
              ? "border-black/20 hover:bg-black hover:text-white"
              : "border-white/20 hover:bg-white hover:text-black"
          }`}
        >
          ×
        </button>

        <h2 className="pr-14 text-3xl font-bold tracking-tight">
          About
        </h2>

        <div
          className={`mt-8 space-y-7 text-sm leading-7 md:text-base ${
            lightMode
              ? "text-black/65"
              : "text-white/60"
          }`}
        >
          <p>
            Hi, I&apos;m{" "}
            <strong
              className={
                lightMode
                  ? "text-black"
                  : "text-white"
              }
            >
              Yogi
            </strong>
            . I&apos;m a frontend developer who enjoys learning new
            technologies and turning what I learn into real projects and
            experiments.
          </p>

          <p>
            I mainly work on web development using technologies such as{" "}
            <em>
              React, Next.js, Tailwind CSS, TypeScript
            </em>
            , and other modern frontend tools. To keep sharpening those
            skills, I regularly take classes on Dicoding.
          </p>

          <p>
            Whenever I discover a new technology or tool, I usually start
            experimenting with it. I enjoy learning through building things,
            testing ideas, and figuring out how different interfaces work.
          </p>

          <p>
            I pay great attention to making my projects{" "}
            <strong
              className={
                lightMode
                  ? "text-black"
                  : "text-white"
              }
            >
              clean, understandable, and sustainable
            </strong>{" "}
            as much as possible. I prefer simple solutions that are practical
            and easy to maintain.
          </p>

          <p>
            My current goal is to continue growing as a{" "}
            <strong
              className={
                lightMode
                  ? "text-black"
                  : "text-white"
              }
            >
              frontend developer, and to be part of a learning community
              where I can share what I learn
            </strong>
            , while creating projects that are useful and meaningful.
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}
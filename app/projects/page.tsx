"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

/* ============================================================= */
/* NAVIGATION */
/* ============================================================= */

const navItems = [
  ["HOME", "/#home"],
  ["ABOUT", "/about"],
  ["STACK", "/#stack"],
  ["PROJECTS", "/projects"],
  ["ROADMAP", "/#roadmap"],
  ["CONTACT", "/#contact"],
];

/* ============================================================= */
/* PROJECT DATA */
/* ============================================================= */

const projects = [
  {
    number: "01",
    title: "MontirGo",
    category: "Web Development · UI/UX",
    image: "/images/jati.jpg",
  },
  {
    number: "02",
    title: "Portfolio",
    category: "Frontend · Creative Development",
    image: "/images/wini.jpg",
  },
  {
    number: "03",
    title: "Creative Web",
    category: "Experiments · Interaction",
    image: "/images/ganteng.jpg",
  },
  {
    number: "04",
    title: "Aether Media",
    category: "Motion · Tooling",
    image: "/images/permana.jpg",
  },
  {
    number: "05",
    title: "Kintaro Labs",
    category: "Design Systems · Prototyping",
    image: "/images/jati.jpg",
  },
];

/* ============================================================= */
/* PROJECTS PAGE */
/* ============================================================= */

export default function ProjectsPage() {
  const [lightMode, setLightMode] = useState(false);

  /* =========================================================== */
  /* THEME */
  /* =========================================================== */

  useEffect(() => {
    document.documentElement.classList.toggle("light", lightMode);

    return () => {
      document.documentElement.classList.remove("light");
    };
  }, [lightMode]);

  return (
    <main
      className={`min-h-screen overflow-x-hidden transition-colors duration-500 ${
        lightMode ? "bg-[#f5f5f5] text-black" : "bg-black text-white"
      }`}
    >
      {/* ======================================================= */}
      {/* NAVBAR */}
      {/* ======================================================= */}

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
                    label === "PROJECTS"
                      ? lightMode
                        ? "text-black"
                        : "text-white"
                      : lightMode
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
            {/* LANGUAGE */}

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

            {/* THEME */}

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
                  <path d="M17.66 6.34l-1.41-1.41" />
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

      {/* ======================================================= */}
      {/* PROJECTS HERO */}
      {/* ======================================================= */}

      <section
        className={`relative flex min-h-screen flex-col justify-center overflow-hidden px-8 pt-[90px] md:px-12 xl:px-20 ${
          lightMode ? "bg-[#f5f5f5]" : "bg-black"
        }`}
      >
        <div className="mx-auto w-full max-w-7xl">
          {/* NUMBER */}

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={`mb-6 text-xs tracking-[0.3em] ${
              lightMode ? "text-black/45" : "text-zinc-500"
            }`}
          >
            [003]
          </motion.div>

          {/* TITLE */}

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className={`text-6xl font-black uppercase leading-[0.9] tracking-tighter sm:text-7xl md:text-8xl xl:text-9xl ${
              lightMode ? "text-black" : "text-white"
            }`}
          >
            Projects
          </motion.h1>

          {/* DESCRIPTION */}

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            className={`mt-10 max-w-3xl text-2xl font-light leading-[1.35] tracking-tight sm:text-3xl md:text-4xl ${
              lightMode ? "text-black/75" : "text-white/75"
            }`}
          >
            A collection of <em className="not-italic font-serif italic">experiments</em>,{" "}
            <em className="not-italic font-serif italic">products</em>, and digital{" "}
            <em className="not-italic font-serif italic">artifacts</em> forged in the{" "}
            <strong className={lightMode ? "text-black" : "text-white"}>void</strong>.
          </motion.p>

          {/* SCROLL HINT */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-20 flex items-center gap-4"
          >
            <span
              className={`h-px w-16 ${
                lightMode ? "bg-black/25" : "bg-white/25"
              }`}
            />

            <span
              className={`text-[11px] uppercase tracking-[0.3em] ${
                lightMode ? "text-black/45" : "text-white/45"
              }`}
            >
              Scroll to explore
            </span>

            <motion.span
              animate={{ x: [0, 6, 0] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
              className={`text-sm ${lightMode ? "text-black/45" : "text-white/45"}`}
            >
              →
            </motion.span>
          </motion.div>
        </div>
      </section>

      {/* ======================================================= */}
      {/* HORIZONTAL SCROLL GALLERY */}
      {/* ======================================================= */}

      <HorizontalGallery lightMode={lightMode} />

      {/* ======================================================= */}
      {/* FOOTER SPACER / CTA */}
      {/* ======================================================= */}

      <section
        className={`flex flex-col items-center justify-center gap-6 px-8 py-32 text-center md:px-12 xl:px-20 ${
          lightMode ? "bg-[#f5f5f5]" : "bg-black"
        }`}
      >
        <p
          className={`text-xs uppercase tracking-[0.3em] ${
            lightMode ? "text-black/40" : "text-zinc-500"
          }`}
        >
          Got a project in mind?
        </p>

        <a
          href="/#contact"
          className={`text-3xl font-medium tracking-tight underline-offset-8 hover:underline sm:text-5xl ${
            lightMode ? "text-black" : "text-white"
          }`}
        >
          Let&apos;s talk →
        </a>
      </section>
    </main>
  );
}

/* ============================================================= */
/* HORIZONTAL GALLERY                                             */
/* Mouse-wheel vertical scroll is translated into horizontal      */
/* movement of the project track via scroll-linked motion values. */
/* ============================================================= */

function HorizontalGallery({ lightMode }: { lightMode: boolean }) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [distance, setDistance] = useState(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 1], [0, -distance]);

  /* =========================================================== */
  /* MEASURE TRACK / VIEWPORT WIDTH                               */
  /* =========================================================== */

  useEffect(() => {
    const measure = () => {
      if (!trackRef.current) return;

      const trackWidth = trackRef.current.scrollWidth;
      const viewportWidth = window.innerWidth;

      setDistance(Math.max(trackWidth - viewportWidth, 0));
    };

    measure();

    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  /* =========================================================== */
  /* SECTION HEIGHT                                               */
  /* More horizontal distance to cover -> taller section ->       */
  /* more vertical scroll room to drive the horizontal motion.    */
  /* =========================================================== */

  const sectionHeight = `${Math.max(distance * 1.1, 1200)}px`;

  return (
    <section
      ref={sectionRef}
      style={{ height: sectionHeight }}
      className="relative"
    >
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div
          ref={trackRef}
          style={{ x }}
          className="flex items-center gap-8 pl-8 pr-8 md:gap-10 md:pl-12 xl:gap-14 xl:pl-20"
        >
          {/* LEADING LABEL */}

          <div className="flex w-[220px] shrink-0 flex-col justify-center md:w-[280px]">
            <p
              className={`text-xs uppercase tracking-[0.25em] ${
                lightMode ? "text-black/40" : "text-zinc-500"
              }`}
            >
              Selected Work
            </p>

            <p
              className={`mt-4 text-sm leading-6 ${
                lightMode ? "text-black/50" : "text-zinc-500"
              }`}
            >
              Keep scrolling — everything here moves sideways.
            </p>
          </div>

          {projects.map((project) => (
            <ProjectCard
              key={project.number}
              project={project}
              lightMode={lightMode}
            />
          ))}

          {/* TRAILING SPACER so the last card can reach the left edge */}

          <div className="w-8 shrink-0 md:w-12 xl:w-20" />
        </motion.div>
      </div>
    </section>
  );
}

/* ============================================================= */
/* PROJECT CARD */
/* ============================================================= */

function ProjectCard({
  project,
  lightMode,
}: {
  project: (typeof projects)[number];
  lightMode: boolean;
}) {
  return (
    <div className="group relative w-[78vw] shrink-0 sm:w-[60vw] md:w-[42vw] lg:w-[32vw] xl:w-[26vw]">
      <div
        className={`relative aspect-[4/5] w-full overflow-hidden rounded-[18px] border ${
          lightMode ? "border-black/10" : "border-white/10"
        }`}
      >
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover grayscale transition-all duration-700 ease-out group-hover:scale-105 group-hover:grayscale-0"
        />

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

        <span className="absolute left-6 top-6 text-xs tracking-[0.25em] text-white/60">
          {project.number}
        </span>

        <span className="absolute right-6 top-6 text-xl text-white/60 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1">
          ↗
        </span>

        <div className="absolute bottom-6 left-6 right-6">
          <h3 className="text-2xl font-medium tracking-tight text-white md:text-3xl">
            {project.title}
          </h3>

          <p className="mt-2 text-xs uppercase tracking-[0.15em] text-white/60">
            {project.category}
          </p>
        </div>
      </div>
    </div>
  );
}

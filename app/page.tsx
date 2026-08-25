"use client";

import {
  AnimatePresence,
  motion,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import ProjectsGallery from "@/components/ProjectsGallery";
import { useLenis } from "@/components/SmoothScroll";

const navItems = [
  ["HOME", "#home"],
  ["ABOUT", "#about"],
  ["STACK", "#stack"],
  ["PROJECTS", "#projects"],
  ["ROADMAP", "#roadmap"],
  ["CONTACT", "#contact"],
];

const stackGroups = [
  {
    category: "Frontend Technologies",
    items: [
      { name: "React", icon: "/icons/react.svg" },
      { name: "Next.js", icon: "/icons/nextjs.svg" },
      { name: "Tailwind CSS", icon: "/icons/tailwindcss.svg" },
      { name: "Framer Motion", icon: "/icons/framermotion.svg" },
      { name: "TypeScript", icon: "/icons/typescript.svg" },
      { name: "JavaScript", icon: "/icons/javascript.svg" },
      { name: "HTML5", icon: "/icons/html5.svg" },
      { name: "CSS3", icon: "/icons/css3.svg" },
    ],
  },
  {
    category: "Backend Technologies",
    items: [
      { name: "Node.js", icon: "/icons/nodejs.svg" },
      { name: "C#", icon: "/icons/csharp.svg" },
      { name: "Python", icon: "/icons/python.svg" },
    ],
  },
  {
    category: "Databases & ORMs",
    items: [{ name: "MongoDB", icon: "/icons/mongodb.svg" }],
  },
  {
    category: "Tools & Version Control",
    items: [{ name: "Git", icon: "/icons/git.svg" }],
  },
];

const roadmap = [
  {
    number: "01",
    year: "2022",
    text: "Jadi di 2022 ini aku mencoba belajar pertama masuk ke dalam dunia programming, yaitu belajar bahasa python, dan mulai membuat project sederhana memakai bahasa python.",
    tags: ["Python"],
  },
  {
    number: "02",
    year: "2023",
    text: "di 2023 ini aku mulai masuk ke web development, belajar HTML, CSS, dan JavaScript, dan mulai membuat project kecil kecilan memakai bahasa tersebut.",
    tags: ["HTML", "CSS", "JavaScript"],
  },
  {
    number: "03",
    year: "2024",
    text: "Di 2024 ini aku belajar C# karena aku mulai kuliah di Telkom University jurusan Sistem Informasi, dan aku memulai buat belajar bahasa pemrograman C#.",
    tags: ["C#"],
  },
  {
    number: "04",
    year: "2025",
    text: "Di 2025 ini aku ketemu teman teman sekelas yang sefrekuensi sama aku yang bahasa coding, jadi aku diajak project an sama mereka membuat website kelas , dan aku belajar yang namanya React , Tailwind , Github, Node js. ",
    tags: ["React", "Node.js", "Tailwind CSS", "Github"],
  },
  {
    number: "05",
    year: "2026",
    text: "Di 2026 ini aku memulai nya dengan sendiri lagi,karena aku fokus sama karir aku sendiri upgrade diri sendiri, aku banyak belajar tentang front-end di tahun ini karena aku mulai fokus di bidang frontend.",
    tags: ["Next.js", "TypeScript", "Framer Motion","React","Tailwind CSS","MongoDb"],
  },
];

const leftPhotos = [
  "/images/jati.jpg",
  "/images/jadi.jpg",
  "/images/jati.jpg",
  "/images/jadi.jpg",
];

const rightPhotos = [
  "/images/ganteng.jpg",
  "/images/kangkung.jpg",
  "/images/ganteng.jpg",
  "/images/kangkung.jpg",
];


function useScrollBlur() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) return;

    const MAX_BLUR = 7; 
    const SENSITIVITY = 0.16; 
    const SMOOTHING = 0.25; 

    let lastY = window.scrollY;
    let currentBlur = 0;
    let rafId = 0;

    const tick = () => {
      const y = window.scrollY;
      const delta = Math.abs(y - lastY);
      lastY = y;

      const target = Math.min(delta * SENSITIVITY, MAX_BLUR);
      currentBlur += (target - currentBlur) * SMOOTHING;

      if (currentBlur < 0.03) currentBlur = 0;

      document.documentElement.style.setProperty(
        "--scroll-blur",
        `${currentBlur.toFixed(2)}px`
      );

      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafId);
      document.documentElement.style.setProperty("--scroll-blur", "0px");
    };
  }, []);
}

export default function Home() {
  const [lightMode, setLightMode] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const lenis = useLenis();

  useScrollBlur();

  const handleAnchorClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (!href.startsWith("#")) return;

    const target = document.querySelector(href);
    if (!target) return;

    event.preventDefault();

    if (lenis) {
      lenis.scrollTo(target as HTMLElement, {
        offset: -90, 
        duration: 1.4,
        easing: (t: number) => 1 - Math.pow(1 - t, 4),
      });
    } else {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };
  const [hoveredStack, setHoveredStack] = useState<
    (typeof stackGroups)[number]["items"][number] & { category: string }
    | null
  >(null);
  const [stackMousePos, setStackMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    document.documentElement.classList.toggle("light", lightMode);
  }, [lightMode]);

  useEffect(() => {
    document.body.style.overflow = aboutOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [aboutOpen]);

  const leftLoop = [...leftPhotos, ...leftPhotos];
  const rightLoop = [...rightPhotos, ...rightPhotos];

  return (
    <main
      className={`min-h-screen transition-colors duration-500 ${
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
          href="#home"
          onClick={(e) => handleAnchorClick(e, "#home")}
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
                  onClick={(e) => handleAnchorClick(e, href)}
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

      <section
        id="home"
        className={`scroll-blur relative min-h-screen overflow-hidden pt-[90px] ${
          lightMode ? "bg-[#f5f5f5]" : "bg-black"
        }`}
      >

        <div className="pointer-events-none absolute right-0 top-0 h-full w-[30%] overflow-visible opacity-70 sm:right-[3%] sm:w-[36%] sm:opacity-100 lg:w-[43%]">
        

          <div className="absolute left-0 top-[-20%] h-[140%] w-[42%] overflow-hidden">
            <motion.div
              animate={{
                y: ["0%", "-50%"],
              }}
              transition={{
                duration: 22,
                repeat: Infinity,
                ease: "linear",
              }}
              className="flex flex-col gap-8"
            >
              {leftLoop.map((src, index) => (
                <div
                  key={`left-${index}`}
                  className="relative aspect-[4/5] w-full shrink-0 overflow-hidden rounded-[22px]"
                >
                  <img
                    src={src}
                    alt=""
                    className={`h-full w-full object-cover grayscale contrast-[1.1] ${
                      lightMode
                        ? "brightness-[0.85]"
                        : "brightness-[0.55]"
                    }`}
                  />
                </div>
              ))}
            </motion.div>
          </div>


          <div className="absolute right-0 top-[-20%] h-[140%] w-[45%] overflow-hidden">
            <motion.div
              animate={{
                y: ["-50%", "0%"],
              }}
              transition={{
                duration: 22,
                repeat: Infinity,
                ease: "linear",
              }}
              className="flex flex-col gap-8"
            >
              {rightLoop.map((src, index) => (
                <div
                  key={`right-${index}`}
                  className="relative aspect-[4/5] w-full shrink-0 overflow-hidden rounded-[22px]"
                >
                  <img
                    src={src}
                    alt=""
                    className={`h-full w-full object-cover grayscale contrast-[1.1] ${
                      lightMode
                        ? "brightness-[0.85]"
                        : "brightness-[0.55]"
                    }`}
                  />
                </div>
              ))}
            </motion.div>
          </div>


          <div
            className={`absolute inset-x-0 top-0 z-20 h-[25%] bg-gradient-to-b ${
              lightMode
                ? "from-[#f5f5f5] via-[#f5f5f5]/80 to-transparent"
                : "from-black via-black/80 to-transparent"
            }`}
          />

          <div
            className={`absolute inset-x-0 bottom-0 z-20 h-[25%] bg-gradient-to-t ${
              lightMode
                ? "from-[#f5f5f5] via-[#f5f5f5]/80 to-transparent"
                : "from-black via-black/80 to-transparent"
            }`}
          />

          <div
            className={`absolute inset-y-0 left-0 z-20 w-[15%] bg-gradient-to-r ${
              lightMode
                ? "from-[#f5f5f5] to-transparent"
                : "from-black to-transparent"
            }`}
          />
        </div>


        <div className="relative z-40 flex min-h-[calc(100vh-90px)] items-center px-8 md:px-12 xl:px-20">
          <div className="w-full max-w-[760px]">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className={`mb-7 text-xs uppercase tracking-[0.28em] sm:text-sm ${
                lightMode
                  ? "text-black/45"
                  : "text-zinc-500"
              }`}
            >
              Frontend Developer · UI/UX Designer
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.9,
                ease: "easeOut",
              }}
              className={`text-6xl font-black uppercase leading-[0.85] tracking-tighter sm:text-7xl md:text-8xl lg:text-[7.5rem] xl:text-[8rem] ${
                lightMode
                  ? "text-black"
                  : "text-white"
              }`}
            >
              YOGI
              <br />

              <span
                className={
                  lightMode
                    ? "text-black/20"
                    : "text-zinc-700"
                }
              >
                PORTFOLIO
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.25,
              }}
              className={`mt-10 max-w-[620px] text-sm leading-6 md:text-base md:leading-7 ${
                lightMode
                  ? "text-black/55"
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
              and constantly tries to put what I learn
              into practice. I develop <em>web</em> and{" "}
              <em>desktop</em> applications. I enjoy
              working with simple,{" "}
              <strong
                className={
                  lightMode
                    ? "text-black"
                    : "text-white"
                }
              >
                practical
              </strong>
              , and{" "}
              <strong
                className={
                  lightMode
                    ? "text-black"
                    : "text-white"
                }
              >
                sustainable
              </strong>{" "}
              tools.
            </motion.p>

            <motion.div
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
                delay: 0.4,
              }}
              className="mt-12 flex flex-wrap items-center gap-8"
            >
              <a
                href="#contact"
                onClick={(e) => handleAnchorClick(e, "#contact")}
                className={`group flex items-center gap-6 rounded-full px-10 py-6 text-xs font-semibold uppercase tracking-[0.2em] transition-all hover:gap-8 ${
                  lightMode
                    ? "bg-black text-white hover:bg-zinc-800"
                    : "bg-white text-black hover:bg-zinc-600"
                }`}
              >
                Contact Me
                <span className="text-xl">
                  →
                </span>
              </a>

              <a
                href="/cv.pdf"
                download
                className={`flex items-center gap-4 text-xs uppercase tracking-[0.2em] ${
                  lightMode
                    ? "text-black/55 hover:text-black"
                    : "text-zinc-500 hover:text-white"
                }`}
              >
                <span
                  className={`flex h-8 w-5 items-center justify-center rounded-full border text-[10px] ${
                    lightMode
                      ? "border-black/30"
                      : "border-white/30"
                  }`}
                >
                  ↓
                </span>

                Download CV
              </a>
            </motion.div>
          </div>
        </div>
      </section>


      <AboutSection
        lightMode={lightMode}
        onReadMore={() => setAboutOpen(true)}
      />


      <section
        id="stack"
        onMouseMove={(e) =>
          setStackMousePos({ x: e.clientX, y: e.clientY })
        }
        className={`scroll-blur relative px-8 py-32 md:px-12 xl:px-20 ${
          lightMode
            ? "bg-[#eaeaea]"
            : "bg-zinc-950"
        }`}
      >
        <div className="mx-auto max-w-7xl">
          <p
            className={`mb-4 text-xs uppercase tracking-[0.25em] ${
              lightMode
                ? "text-black/40"
                : "text-zinc-500"
            }`}
          >
            What I Use
          </p>

          <h2
            className={`mb-16 text-5xl font-black uppercase tracking-tighter md:text-7xl ${
              lightMode
                ? "text-black"
                : "text-white"
            }`}
          >
            Stack
            <span
              className={
                lightMode
                  ? "text-black/20"
                  : "text-zinc-700"
              }
            >
              .
            </span>
          </h2>

          {stackGroups.map((group, groupIndex) => (
            <div
              key={group.category}
              className={groupIndex > 0 ? "mt-14" : ""}
            >
              <div className="mb-6 flex items-center gap-3">
                <span
                  className={`text-[10px] ${
                    lightMode ? "text-black/30" : "text-zinc-600"
                  }`}
                >
                  {String(groupIndex + 1).padStart(2, "0")}
                </span>
                <h3
                  className={`text-xs font-semibold uppercase tracking-[0.2em] ${
                    lightMode ? "text-black/60" : "text-zinc-400"
                  }`}
                >
                  {group.category}
                </h3>
              </div>

              <div className="flex flex-wrap gap-x-10 gap-y-6">
                {group.items.map((item) => (
                  <div
                    key={item.name}
                    onMouseEnter={() =>
                      setHoveredStack({
                        ...item,
                        category: group.category,
                      })
                    }
                    onMouseLeave={() =>
                      setHoveredStack((prev) =>
                        prev?.name === item.name ? null : prev
                      )
                    }
                    className={`group flex cursor-default items-center gap-2.5 text-base transition-colors md:text-lg ${
                      lightMode
                        ? "text-black/70 hover:text-black"
                        : "text-zinc-300 hover:text-white"
                    }`}
                  >
                    <Image
                      src={item.icon}
                      alt=""
                      width={20}
                      height={20}
                      className={`opacity-70 grayscale transition-all group-hover:opacity-100 group-hover:grayscale-0 ${
                        item.name === "Next.js" && !lightMode
                          ? "invert"
                          : ""
                      }`}
                    />
                    {item.name}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <AnimatePresence>
          {hoveredStack && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              transition={{ duration: 0.18 }}
              style={{
                position: "fixed",
                left: stackMousePos.x,
                top: stackMousePos.y,
                transform: "translate(-50%, -125%)",
                pointerEvents: "none",
                zIndex: 60,
              }}
              className={`flex w-[220px] flex-col items-center gap-4 rounded-2xl border p-6 text-center shadow-2xl ${
                lightMode
                  ? "border-black/10 bg-white"
                  : "border-white/10 bg-zinc-900"
              }`}
            >
              <div
                className={`flex h-16 w-16 items-center justify-center rounded-xl ${
                  lightMode ? "bg-black/5" : "bg-black"
                }`}
              >
                <Image
                  src={hoveredStack.icon}
                  alt=""
                  width={34}
                  height={34}
                  className={
                    hoveredStack.name === "Next.js" && !lightMode
                      ? "invert"
                      : ""
                  }
                />
              </div>
              <div>
                <p className="text-sm font-bold uppercase tracking-wide">
                  {hoveredStack.name}
                </p>
                <p
                  className={`mt-1 text-[10px] uppercase tracking-[0.15em] ${
                    lightMode ? "text-black/40" : "text-zinc-500"
                  }`}
                >
                  {hoveredStack.category}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      <section
        id="projects"
        className={`min-h-screen px-8 py-32 md:px-12 xl:px-20 ${
          lightMode
            ? "bg-[#f5f5f5]"
            : "bg-black"
        }`}
      >
        <div className="scroll-blur mx-auto max-w-7xl">
          <p
            className={`mb-8 text-xs uppercase tracking-[0.25em] ${
              lightMode
                ? "text-black/40"
                : "text-zinc-500"
            }`}
          >
            Selected Work
          </p>

          <h2
            className={`mb-20 text-5xl font-black uppercase tracking-tighter md:text-7xl ${
              lightMode
                ? "text-black"
                : "text-white"
            }`}
          >
            Projects
            <span
              className={
                lightMode
                  ? "text-black/20"
                  : "text-zinc-700"
              }
            >
              .
            </span>
          </h2>

        </div>

        <ProjectsGallery lightMode={lightMode} />
      </section>

      <section
        id="roadmap"
        className={`scroll-blur px-8 py-32 md:px-12 xl:px-20 ${
          lightMode
            ? "bg-[#eaeaea]"
            : "bg-zinc-950"
        }`}
      >
        <div className="mx-auto max-w-4xl text-center">
          <p
            className={`mb-6 font-year text-xs italic tracking-[0.3em] ${
              lightMode
                ? "text-black/45"
                : "text-zinc-500"
            }`}
          >
            [004]
          </p>

          <h2
            className={`text-5xl font-black uppercase leading-[0.9] tracking-tighter md:text-7xl ${
              lightMode
                ? "text-black"
                : "text-white"
            }`}
          >
            Roadmap
          </h2>

          <p
            className={`mx-auto mt-8 max-w-xl font-year text-sm italic leading-7 md:text-base ${
              lightMode
                ? "text-black/50"
                : "text-zinc-500"
            }`}
          >
            A roadmap where I share the experiences I&apos;ve gained
            throughout my software journey and the technologies
            I&apos;ve learned.
          </p>
        </div>

        <RoadmapTimeline lightMode={lightMode} />
      </section>

      <section
        id="contact"
        className={`scroll-blur px-8 py-32 md:px-12 xl:px-20 ${
          lightMode
            ? "bg-[#f5f5f5]"
            : "bg-black"
        }`}
      >
        <div className="mx-auto max-w-4xl text-center">
          <p
            className={`mb-6 font-year text-xs italic tracking-[0.3em] ${
              lightMode
                ? "text-black/45"
                : "text-zinc-500"
            }`}
          >
            [005]
          </p>

          <h2
            className={`text-5xl font-black uppercase leading-[0.9] tracking-tighter md:text-7xl ${
              lightMode
                ? "text-black"
                : "text-white"
            }`}
          >
            Contact
          </h2>

          <p
            className={`mx-auto mt-8 max-w-xl font-year text-sm italic leading-7 md:text-base ${
              lightMode
                ? "text-black/50"
                : "text-zinc-500"
            }`}
          >
            Whether we start fresh to bring a project to life or take an
            existing system further.
          </p>
        </div>

        <div className="mx-auto mt-24 max-w-5xl">
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=yogijati052@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className={`group flex flex-col items-start justify-between gap-3 border-t py-8 md:flex-row md:items-center ${
              lightMode ? "border-black/10" : "border-zinc-800"
            }`}
          >
            <span
              className={`text-xs uppercase tracking-[0.2em] ${
                lightMode ? "text-black/40" : "text-zinc-500"
              }`}
            >
              Send an Email
            </span>

            <span className="flex items-center gap-4">
              <span
                className={`text-2xl tracking-tight transition-colors md:text-4xl ${
                  lightMode
                    ? "text-black group-hover:text-black/50"
                    : "text-white group-hover:text-zinc-400"
                }`}
              >
                yogijati052@gmail.com
              </span>
              <span
                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border text-base transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 ${
                  lightMode
                    ? "border-black/15 text-black/50 group-hover:bg-black group-hover:text-white"
                    : "border-white/15 text-white/60 group-hover:bg-white group-hover:text-black"
                }`}
              >
                ↗
              </span>
            </span>
          </a>

          <a
            href="https://wa.me/6282162656487?text=Halo%2C%20saya%20lihat%20website%20kamu%20dan%20ingin%20ngobrol"
            target="_blank"
            rel="noopener noreferrer"
            className={`group flex flex-col items-start justify-between gap-3 border-t py-8 md:flex-row md:items-center ${
              lightMode ? "border-black/10" : "border-zinc-800"
            }`}
          >
            <span
              className={`text-xs uppercase tracking-[0.2em] ${
                lightMode ? "text-black/40" : "text-zinc-500"
              }`}
            >
              Direct Line
            </span>

            <span className="flex items-center gap-4">
              <span
                className={`text-2xl tracking-tight transition-colors md:text-4xl ${
                  lightMode
                    ? "text-black/40 group-hover:text-black/70"
                    : "text-zinc-600 group-hover:text-zinc-400"
                }`}
              >
                +62 82162656487
              </span>
              <span
                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border text-base transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 ${
                  lightMode
                    ? "border-black/15 text-black/50 group-hover:bg-black group-hover:text-white"
                    : "border-white/15 text-white/60 group-hover:bg-white group-hover:text-black"
                }`}
              >
                ↗
              </span>
            </span>
          </a>

          <div
            className={`border-t ${
              lightMode ? "border-black/10" : "border-zinc-800"
            }`}
          />
        </div>
      </section>


      {/* ========================================================= */}
      {/* FOOTER */}
      {/* ========================================================= */}

      <footer
        className={`scroll-blur border-t px-8 py-8 md:px-12 xl:px-20 ${
          lightMode
            ? "border-black/10 bg-[#f5f5f5]"
            : "border-zinc-900 bg-black"
        }`}
      >
        <div
          className={`mx-auto flex max-w-7xl flex-col gap-6 text-xs uppercase tracking-[0.15em] md:flex-row md:items-center md:justify-between ${
            lightMode
              ? "text-black/40"
              : "text-zinc-500"
          }`}
        >
          <p className="font-mono flex items-center gap-2 text-[11px] tracking-[0.15em]">
            © 2026
            <span className="inline-block h-1 w-1 rounded-full bg-current opacity-60" />
            YOGI PERMANA. ALL RIGHTS RESERVED.
          </p>

          <div className="flex flex-wrap gap-3">
            {[
              { label: "GitHub", href: "https://github.com/yogwhoss" },
              { label: "Discord", href: "https://discord.com/users/851251963735441468" },
              { label: "Instagram", href: "https://www.instagram.com/_boyy.yyy?igsi=NGtxbXMycTgxN2hq" },
              { label: "LinkedIn", href: "https://www.linkedin.com/in/yogi-permana-b86872367/" },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className={`group flex items-center gap-2 rounded-full border px-5 py-2.5 text-[11px] font-semibold tracking-[0.1em] transition-colors ${
                  lightMode
                    ? "border-black/15 text-black hover:bg-black hover:text-white"
                    : "border-white/15 text-white hover:bg-white hover:text-black"
                }`}
              >
                {social.label.toUpperCase()}
                <span className="text-[13px] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  ↗
                </span>
              </a>
            ))}
          </div>
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

function RoadmapTimeline({ lightMode }: { lightMode: boolean }) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.75", "end 0.4"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div
      ref={containerRef}
      className="relative mx-auto mt-24 max-w-5xl px-8 md:px-12 xl:px-0"
    >
      <div
        className={`absolute left-6 top-0 bottom-0 w-px md:left-1/2 md:-translate-x-1/2 ${
          lightMode ? "bg-black/10" : "bg-white/10"
        }`}
      />
      <motion.div
        style={{ height: lineHeight }}
        className={`absolute left-6 top-0 w-px md:left-1/2 md:-translate-x-1/2 ${
          lightMode ? "bg-black/60" : "bg-white/60"
        }`}
      />

      <div className="flex flex-col gap-16 md:gap-24">
        {roadmap.map((entry, i) => (
          <RoadmapEntry
            key={entry.year}
            entry={entry}
            side={i % 2 === 0 ? "right" : "left"}
            lightMode={lightMode}
          />
        ))}
      </div>
    </div>
  );
}

function RoadmapEntry({
  entry,
  side,
  lightMode,
}: {
  entry: (typeof roadmap)[number];
  side: "left" | "right";
  lightMode: boolean;
}) {
  const isRight = side === "right";

  return (
    <div className="relative">
      <motion.div
        initial={{ scale: 0.6, opacity: 0.4 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: false, amount: 0.6 }}
        transition={{ duration: 0.4 }}
        className={`absolute left-6 top-1 z-10 flex h-5 w-5 -translate-x-1/2 items-center justify-center rounded-full border md:left-1/2 ${
          lightMode
            ? "border-black/30 bg-[#eaeaea]"
            : "border-white/30 bg-zinc-950"
        }`}
      >
        <span
          className={`h-2 w-2 rounded-full ${
            lightMode ? "bg-black/70" : "bg-white/70"
          }`}
        />
      </motion.div>

      <div className="hidden md:grid md:grid-cols-2 md:gap-0">
        <div className="pr-14">
          {!isRight && (
            <RoadmapCard entry={entry} lightMode={lightMode} align="right" />
          )}
        </div>
        <div className="pl-14">
          {isRight && (
            <RoadmapCard entry={entry} lightMode={lightMode} align="left" />
          )}
        </div>
      </div>

      <div className="pl-12 md:hidden">
        <RoadmapCard entry={entry} lightMode={lightMode} align="left" />
      </div>
    </div>
  );
}

function RoadmapCard({
  entry,
  lightMode,
  align,
}: {
  entry: (typeof roadmap)[number];
  lightMode: boolean;
  align: "left" | "right";
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: align === "left" ? -30 : 30, y: 20 }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={`rounded-2xl border p-7 md:p-9 ${
        lightMode
          ? "border-black/10 bg-white"
          : "border-white/10 bg-[#0c0c0c]"
      }`}
    >
      <div className="flex items-start justify-between">
        <span
          className={`font-year text-5xl italic md:text-6xl ${
            lightMode ? "text-black" : "text-white"
          }`}
        >
          {entry.year}
        </span>
        <span
          className={`text-xs ${
            lightMode ? "text-black/30" : "text-zinc-600"
          }`}
        >
          {entry.number}
        </span>
      </div>

      <p
        className={`mt-5 text-sm leading-7 ${
          lightMode ? "text-black/55" : "text-zinc-400"
        }`}
      >
        {entry.text}
      </p>

      <div className="mt-6 flex flex-wrap gap-2.5">
        {entry.tags.map((tag) => (
          <span
            key={tag}
            className={`rounded-full border px-3.5 py-1.5 text-[11px] uppercase tracking-[0.1em] ${
              lightMode
                ? "border-black/15 text-black/60"
                : "border-white/15 text-zinc-400"
            }`}
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}


function AboutSection({
  lightMode,
  onReadMore,
}: {
  lightMode: boolean;
  onReadMore: () => void;
}) {
  return (
    <section
      id="about"
      className={`scroll-blur relative min-h-screen overflow-hidden px-8 py-32 md:px-12 xl:px-20 ${
        lightMode
          ? "bg-[#f5f5f5]"
          : "bg-black"
      }`}
    >
      <div className="mx-auto grid min-h-[75vh] max-w-7xl grid-cols-1 gap-16 lg:grid-cols-[360px_1fr]">
        
        <div className="relative">
          <div className="sticky top-32">
            <div
              className={`mb-8 text-xs tracking-[0.3em] ${
                lightMode
                  ? "text-black/45"
                  : "text-zinc-500"
              }`}
            >
              [001]
            </div>

            <h2
              className={`text-5xl font-black uppercase tracking-tighter md:text-6xl ${
                lightMode
                  ? "text-black"
                  : "text-white"
              }`}
            >
              ABOUT
            </h2>


            <div className="relative mt-8 h-[480px] w-full overflow-visible">
              <Lanyard lightMode={lightMode} />
            </div>
          </div>
        </div>


        <div className="flex flex-col justify-center pt-10 lg:pt-0">
          <motion.h2
            initial={{
              opacity: 0,
              y: 35,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: false,
              amount: 0.3,
            }}
            transition={{
              duration: 0.8,
            }}
            className={`max-w-5xl text-4xl font-light leading-[1.15] tracking-tight md:text-6xl xl:text-7xl ${
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

          <p
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
            , and{" "}
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
          </p>

          <button
            type="button"
            onClick={onReadMore}
            className={`mt-14 w-fit border-b pb-2 text-2xl font-semibold tracking-tight transition-all hover:pr-3 ${
              lightMode
                ? "border-black/40 text-black"
                : "border-white/40 text-white"
            }`}
          >
            Read Full Version{" "}
            <span className="ml-2">
              →
            </span>
          </button>
        </div>
      </div>

      <div
        className={`absolute bottom-[30%] left-[40%] h-8 w-8 rounded-full border ${
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
  );
}

function Lanyard({
  lightMode,
}: {
  lightMode: boolean;
}) {
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, {
    stiffness: 300,
    damping: 28,
    mass: 0.45,
  });

  const springY = useSpring(y, {
    stiffness: 300,
    damping: 28,
    mass: 0.45,
  });


  const ropePath = useTransform(
    [springX, springY],
    ([currentX, currentY]) => {
      const startX = 180;
      const startY = 0;

      const offsetX = Number(currentX);
      const offsetY = Number(currentY);

      const endX = startX + offsetX;
      const endY = 250 + offsetY;


      const controlX =
        startX +
        (endX - startX) * 0.45;

      const controlY =
        startY +
        (endY - startY) * 0.5;

      return `
        M ${startX} ${startY}
        Q ${controlX} ${controlY}
          ${endX} ${endY}
      `;
    }
  );


  const rotation = useTransform(
    springX,
    [-350, -250, -150, -75, 0, 75, 150, 250, 350],
    [-14, -10, -6, -3, 0, 3, 6, 10, 14]
  );


  const handleDragEnd = () => {
    x.set(0);
    y.set(0);
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
              ? "rgba(0,0,0,0.10)"
              : "rgba(255,255,255,0.07)"
          }
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />


        <motion.path
          d={ropePath}
          stroke={
            lightMode
              ? "rgba(0,0,0,0.32)"
              : "rgba(255,255,255,0.27)"
          }
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <motion.path
          d={ropePath}
          stroke={
            lightMode
              ? "rgba(0,0,0,0.12)"
              : "rgba(255,255,255,0.12)"
          }
          strokeWidth="1"
          strokeDasharray="3 5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      <div
        className={`absolute left-[174px] top-[-5px] z-20 h-3 w-3 rounded-full border ${
          lightMode
            ? "border-black/30 bg-[#f5f5f5]"
            : "border-white/40 bg-black"
        }`}
      />

      <motion.div
        drag
        dragMomentum={false}
        dragElastic={0}
        onDragEnd={handleDragEnd}
        style={{
          x: springX,
          y: springY,
          rotate: rotation,
        }}
        whileHover={{
          scale: 1.025,
        }}
        whileDrag={{
          scale: 1.05,
          cursor: "grabbing",
        }}
        className="absolute left-[105px] top-[250px] z-30 cursor-grab select-none touch-none"
      >
        <div
          className={`relative flex h-[175px] w-[150px] flex-col items-center justify-center rounded-[20px] border shadow-2xl ${
            lightMode
              ? "border-black/10 bg-white"
              : "border-white/10 bg-[#090909]"
          }`}
        >

          <div
            className={`pointer-events-none absolute inset-0 rounded-[20px] ${
              lightMode
                ? "bg-gradient-to-b from-black/[0.02] to-transparent"
                : "bg-gradient-to-b from-white/[0.04] to-transparent"
            }`}
          />


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

              <path
                d="M5 21v-2.5a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5V21"
              />
            </svg>
          </div>


          <p
            className={`relative z-10 text-[13px] font-bold tracking-[0.2em] ${
              lightMode
                ? "text-black"
                : "text-white"
            }`}
          >
            YOGI
          </p>


          <p
            className={`relative z-10 mt-2 text-[9px] uppercase tracking-[0.15em] ${
              lightMode
                ? "text-black/40"
                : "text-white/40"
            }`}
          >
            Developer
          </p>

          

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
        if (
          event.target ===
          event.currentTarget
        ) {
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
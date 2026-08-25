"use client";

import { useEffect, useRef, useState } from "react";

/* ============================================================= */
/* PROJECT DATA */
/* ============================================================= */

const projects = [
  {
    number: "01",
    title: "Forum",
    category: "Web Development · Fullstack ",
    year: "2026",
    image: "/images/project1.png",
  },
  {
    number: "02",
    title: "Game",
    category: "Frontend · Game Development",
    year: "2025",
    image: "/images/project2.png",
  },
  {
    number: "03",
    title: "Portofolio",
    category: "Experiments · Interaction",
    year: "2025",
    image: "/images/portofolio.png",
  },
  {
    number: "04",
    title: "Finance Web",
    category: "Motion · Tooling",
    year: "2026",
    image: "/images/project3.png",
  },
  {
    number: "05",
    title: "Knitted",
    category: "Design Systems · Prototyping",
    year: "2025",
    image: "/images/project4.png",
  },
];

/* ============================================================= */
/* HORIZONTAL GALLERY                                             */
/*                                                                 */
/* This does NOT use CSS position:sticky - sticky is fragile and  */
/* silently breaks the moment any ancestor sets an "overflow"     */
/* value, which this site relies on elsewhere. Instead the pin is */
/* implemented manually:                                          */
/*                                                                 */
/*  - The outer wrapper is a tall block (viewport height + the    */
/*    total horizontal distance the track needs to travel).       */
/*  - While the wrapper is scrolling past, the visible gallery is */
/*    switched to `position: fixed` (which only cares about       */
/*    transformed ancestors, not overflow), pinning it to the     */
/*    screen while the page's normal scroll position advances     */
/*    the track horizontally 1:1.                                 */
/*  - Once the wrapper has been scrolled past entirely, the       */
/*    gallery parks at the bottom of the wrapper and normal page  */
/*    scrolling continues into the next section - and reverses    */
/*    cleanly on the way back up.                                 */
/* ============================================================= */

export default function ProjectsGallery({
  lightMode,
}: {
  lightMode: boolean;
}) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const currentProgressRef = useRef(0);

  const [distance, setDistance] = useState(0);
  const [viewportHeight, setViewportHeight] = useState(0);
  const [pinMode, setPinMode] = useState<"before" | "pinned" | "after">(
    "before"
  );

  /* =========================================================== */
  /* MEASURE TRACK / VIEWPORT SIZE                                */
  /* =========================================================== */

  useEffect(() => {
    const measure = () => {
      if (!trackRef.current) return;

      const trackWidth = trackRef.current.scrollWidth;

      setDistance(Math.max(trackWidth - window.innerWidth, 0));
      setViewportHeight(window.innerHeight);
    };

    measure();

    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  /* =========================================================== */
  /* DRIVE PIN STATE + PROGRESS FROM NATIVE SCROLL                */
  /* A continuous rAF loop (not just on the scroll event) lerps   */
  /* the displayed position toward the scroll-derived target, so  */
  /* the track eases into place instead of snapping 1:1 with the  */
  /* wheel - a soft, slowed-down "catch up" feel.                 */
  /* =========================================================== */

  useEffect(() => {
    if (viewportHeight === 0) return;

    let rafId = 0;

    const lerp = (start: number, end: number, t: number) =>
      start + (end - start) * t;

    const animate = () => {
      const wrapper = wrapperRef.current;

      if (wrapper) {
        const rect = wrapper.getBoundingClientRect();

        let mode: "before" | "pinned" | "after";
        let target: number;

        if (rect.top > 0) {
          mode = "before";
          target = 0;
        } else if (rect.bottom <= viewportHeight) {
          mode = "after";
          target = 1;
        } else {
          mode = "pinned";
          target = Math.min(
            Math.max(-rect.top / Math.max(distance, 1), 0),
            1
          );
        }

        setPinMode((prev) => (prev === mode ? prev : mode));

        // Ease toward the target instead of snapping to it.
        const smoothing = 0.075;
        let next = lerp(currentProgressRef.current, target, smoothing);

        if (Math.abs(target - next) < 0.0004) {
          next = target;
        }

        currentProgressRef.current = next;

        if (trackRef.current) {
          trackRef.current.style.transform = `translate3d(${
            -next * distance
          }px, 0, 0)`;
        }
      }

      rafId = requestAnimationFrame(animate);
    };

    rafId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(rafId);
  }, [distance, viewportHeight]);

  /* =========================================================== */
  /* WRAPPER HEIGHT = one viewport + the full horizontal travel   */
  /* =========================================================== */

  const wrapperHeight =
    distance > 0 && viewportHeight > 0
      ? distance + viewportHeight
      : viewportHeight || 800;

  return (
    <div
      ref={wrapperRef}
      style={{ height: `${wrapperHeight}px` }}
      className="relative -mx-8 md:-mx-12 xl:-mx-20"
    >
      <div
        className="h-screen w-full overflow-hidden"
        style={
          pinMode === "pinned"
            ? { position: "fixed", top: 0, left: 0, right: 0 }
            : pinMode === "after"
              ? { position: "absolute", bottom: 0, left: 0, right: 0 }
              : { position: "absolute", top: 0, left: 0, right: 0 }
        }
      >
        {/*
          scroll-blur goes on THIS div, not on the fixed-positioned
          parent above or the wrapper below it. `filter` creates a
          new containing block for fixed/absolute descendants, so
          putting it on (or above) the pinned element would trap it
          inside the section instead of the viewport and break the
          horizontal pin. Applying it to a plain descendant instead
          just blurs the pixels, with no positioning side effects.
        */}
        <div className="scroll-blur flex h-full items-center overflow-hidden">
          <div
            ref={trackRef}
            style={{ transform: "translate3d(0, 0, 0)" }}
            className="flex items-center gap-8 pl-8 pr-8 will-change-transform md:gap-10 md:pl-12 xl:gap-14 xl:pl-20"
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

            {/* END CARD */}

            <EndCard lightMode={lightMode} />

            {/* TRAILING SPACER so the last card can reach the left edge */}

            <div className="w-8 shrink-0 md:w-12 xl:w-20" />
          </div>
        </div>
      </div>
    </div>
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
          className="h-full w-full object-cover grayscale transition-all duration-1000 ease-out group-hover:scale-105 group-hover:grayscale-0"
        />

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

        {/* TOP ROW: CATEGORY + YEAR */}

        <div className="absolute left-6 right-6 top-6 flex items-start justify-between">
          <span className="text-[10px] uppercase tracking-[0.25em] text-white/60 md:text-xs">
            {project.category}
          </span>

          <span className="text-[10px] uppercase tracking-[0.25em] text-white/60 md:text-xs">
            {project.year}
          </span>
        </div>

        {/* ARROW */}

        <span className="absolute right-6 top-16 text-xl text-white/60 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1 md:top-20">
          ↗
        </span>

        {/* BIG TITLE */}

        <div className="absolute bottom-6 left-6 right-6">
          <h3 className="whitespace-pre-line break-words text-4xl font-black uppercase leading-[0.85] tracking-tight text-white sm:text-5xl md:text-6xl xl:text-7xl">
            {project.title}
          </h3>

          <p className="mt-3 text-xs tracking-[0.15em] text-white/50">
            {project.number}
          </p>
        </div>
      </div>
    </div>
  );
}

/* ============================================================= */
/* END CARD                                                       */
/* Closes out the horizontal track, mirroring the "END" slide     */
/* used as a sign-off on reference galleries.                     */
/* ============================================================= */

function EndCard({ lightMode }: { lightMode: boolean }) {
  return (
    <div className="flex w-[78vw] shrink-0 items-center justify-center sm:w-[60vw] md:w-[42vw] lg:w-[32vw] xl:w-[26vw]">
      <div
        className={`relative flex aspect-[4/5] w-full items-center justify-center overflow-hidden rounded-[18px] border ${
          lightMode
            ? "border-black/10 bg-black/[0.03]"
            : "border-white/10 bg-white/[0.03]"
        }`}
      >
        <span
          className={`text-6xl font-black uppercase tracking-tight sm:text-7xl md:text-8xl ${
            lightMode ? "text-black/15" : "text-white/15"
          }`}
        >
          End
        </span>
      </div>
    </div>
  );
}

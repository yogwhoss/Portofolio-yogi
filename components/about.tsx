"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

type AboutProps = {
  lightMode?: boolean;
};

export default function About({
  lightMode = false,
}: AboutProps) {
  const [aboutOpen, setAboutOpen] = useState(false);

  return (
    <>
      {/* ========================================================= */}
      {/* ABOUT SECTION */}
      {/* ========================================================= */}

      <section
        id="about"
        className={`
          relative
          min-h-screen
          overflow-hidden
          px-8
          py-32
          md:px-12
          xl:px-20
          ${
            lightMode
              ? "bg-[#f5f5f5] text-black"
              : "bg-black text-white"
          }
        `}
      >
        <div className="mx-auto max-w-[1450px]">

          <div
            className="
              grid
              min-h-[80vh]
              grid-cols-1
              gap-20
              lg:grid-cols-[360px_1fr]
              lg:gap-20
            "
          >

            {/* ===================================================== */}
            {/* LEFT */}
            {/* ===================================================== */}

            <div className="relative">

              {/* NUMBER */}

              <motion.p
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.3,
                }}
                transition={{
                  duration: 0.7,
                  ease: "easeOut",
                }}
                className={`
                  mb-7
                  text-xs
                  font-medium
                  uppercase
                  tracking-[0.28em]
                  ${
                    lightMode
                      ? "text-black/45"
                      : "text-white/50"
                  }
                `}
              >
                [001]
              </motion.p>

              {/* TITLE */}

              <motion.h2
                initial={{
                  opacity: 0,
                  x: -30,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.3,
                }}
                transition={{
                  duration: 0.8,
                  ease: "easeOut",
                }}
                className="
                  text-5xl
                  font-black
                  uppercase
                  leading-none
                  tracking-tighter
                  md:text-6xl
                "
              >
                ABOUT
              </motion.h2>

              {/* ================================================= */}
              {/* LANYARD */}
              {/* ================================================= */}

              <div className="relative mt-10 hidden h-[390px] lg:block">

                {/* TOP DOT */}

                <div
                  className={`
                    absolute
                    left-[160px]
                    top-0
                    z-20
                    h-3
                    w-3
                    -translate-x-1/2
                    rounded-full
                    border-2
                    ${
                      lightMode
                        ? "border-black/40 bg-[#f5f5f5]"
                        : "border-white/40 bg-black"
                    }
                  `}
                />

                {/* VERTICAL LINE */}

                <div
                  className={`
                    absolute
                    left-[160px]
                    top-3
                    h-[190px]
                    w-px
                    -translate-x-1/2
                    ${
                      lightMode
                        ? "bg-black/20"
                        : "bg-white/20"
                    }
                  `}
                />

                {/* SECOND DOT */}

                <div
                  className={`
                    absolute
                    left-[160px]
                    top-[185px]
                    z-20
                    h-3
                    w-3
                    -translate-x-1/2
                    rounded-full
                    border-2
                    ${
                      lightMode
                        ? "border-black/40 bg-[#f5f5f5]"
                        : "border-white/40 bg-black"
                    }
                  `}
                />

                {/* ================================================= */}
                {/* ID CARD */}
                {/* ================================================= */}

                <motion.div
                  initial={{
                    opacity: 0,
                    y: 25,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.3,
                  }}
                  transition={{
                    duration: 0.8,
                    delay: 0.15,
                    ease: "easeOut",
                  }}
                  className={`
                    absolute
                    left-[85px]
                    top-[195px]
                    flex
                    h-[175px]
                    w-[150px]
                    flex-col
                    items-center
                    justify-center
                    rounded-[20px]
                    border
                    ${
                      lightMode
                        ? "border-black/10 bg-white/60"
                        : "border-white/10 bg-[#090909]"
                    }
                  `}
                >

                  {/* AVATAR */}

                  <div
                    className={`
                      flex
                      h-[78px]
                      w-[78px]
                      items-center
                      justify-center
                      rounded-full
                      border
                      ${
                        lightMode
                          ? "border-black/20 bg-black/5"
                          : "border-white/20 bg-white/5"
                      }
                    `}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className={`
                        h-10
                        w-10
                        ${
                          lightMode
                            ? "text-black/45"
                            : "text-white/45"
                        }
                      `}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.2"
                    >
                      <circle
                        cx="12"
                        cy="8"
                        r="3.5"
                      />

                      <path
                        d="M5 20c.5-4 3-6 7-6s6.5 2 7 6"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>

                  {/* NAME */}

                  <p
                    className="
                      mt-4
                      text-[11px]
                      font-bold
                      uppercase
                      tracking-[0.25em]
                    "
                  >
                    YOGI
                  </p>

                  {/* ROLE */}

                  <p
                    className={`
                      mt-1
                      text-[9px]
                      uppercase
                      tracking-[0.15em]
                      ${
                        lightMode
                          ? "text-black/40"
                          : "text-white/40"
                      }
                    `}
                  >
                    Developer
                  </p>

                </motion.div>
              </div>
            </div>

            {/* ===================================================== */}
            {/* RIGHT */}
            {/* ===================================================== */}

            <div className="flex flex-col justify-center">

              {/* HEADLINE */}

              <motion.h3
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.3,
                }}
                transition={{
                  duration: 0.9,
                  ease: "easeOut",
                }}
                className="
                  max-w-[1050px]
                  text-4xl
                  font-light
                  leading-[1.08]
                  tracking-[-0.04em]
                  sm:text-5xl
                  md:text-6xl
                  xl:text-[4.5rem]
                "
              >
                I&apos;m a{" "}

                <em
                  className="
                    font-serif
                    font-medium
                  "
                >
                  Full Stack Developer
                </em>{" "}

                focused on building{" "}

                <strong className="font-semibold">
                  clean and sustainable
                </strong>{" "}

                systems.
              </motion.h3>

              {/* DESCRIPTION */}

              <motion.p
                initial={{
                  opacity: 0,
                  y: 25,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.3,
                }}
                transition={{
                  duration: 0.8,
                  delay: 0.2,
                  ease: "easeOut",
                }}
                className={`
                  mt-14
                  max-w-[850px]
                  text-base
                  leading-8
                  md:text-lg
                  ${
                    lightMode
                      ? "text-black/55"
                      : "text-white/55"
                  }
                `}
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

                and constantly tries to put what I learn into
                practice. I develop{" "}

                <em>web</em>{" "}
                and{" "}

                <em>desktop</em>{" "}

                applications. I enjoy working with simple,{" "}

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

              {/* ================================================= */}
              {/* READ FULL VERSION */}
              {/* ================================================= */}

              <motion.button
                type="button"
                onClick={() => setAboutOpen(true)}
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.3,
                }}
                transition={{
                  duration: 0.7,
                  delay: 0.35,
                  ease: "easeOut",
                }}
                className={`
                  group
                  mt-14
                  flex
                  w-fit
                  items-center
                  gap-4
                  border-b
                  pb-2
                  text-lg
                  font-semibold
                  ${
                    lightMode
                      ? "border-black/40 text-black"
                      : "border-white/40 text-white"
                  }
                `}
              >
                <span>
                  Read Full Version
                </span>

                <span
                  className="
                    text-2xl
                    leading-none
                    transition-transform
                    duration-300
                    group-hover:translate-x-2
                  "
                >
                  →
                </span>
              </motion.button>

            </div>
          </div>
        </div>

        {/* ========================================================= */}
        {/* CENTER DOT */}
        {/* ========================================================= */}

        <div
          className={`
            pointer-events-none
            absolute
            bottom-[25%]
            left-[40%]
            hidden
            h-9
            w-9
            items-center
            justify-center
            rounded-full
            border
            lg:flex
            ${
              lightMode
                ? "border-black/20"
                : "border-white/20"
            }
          `}
        >
          <div
            className={`
              h-1.5
              w-1.5
              rounded-full
              ${
                lightMode
                  ? "bg-black/50"
                  : "bg-white/50"
              }
            `}
          />
        </div>
      </section>

      {/* ========================================================= */}
      {/* ABOUT MODAL */}
      {/* ========================================================= */}

      <AnimatePresence>
        {aboutOpen && (
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
            className="
              fixed
              inset-0
              z-[999]
              flex
              items-center
              justify-center
              p-5
              md:p-10
            "
          >

            {/* BACKDROP */}

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
              onClick={() => setAboutOpen(false)}
              className="
                absolute
                inset-0
                bg-black/75
                backdrop-blur-xl
              "
            />

            {/* MODAL */}

            <motion.div
              initial={{
                opacity: 0,
                y: 30,
                scale: 0.97,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: 20,
                scale: 0.97,
              }}
              transition={{
                duration: 0.4,
                ease: "easeOut",
              }}
              className="
                relative
                z-10
                max-h-[85vh]
                w-full
                max-w-[850px]
                overflow-y-auto
                rounded-2xl
                border
                border-white/10
                bg-[#090909]
                p-7
                shadow-2xl
                md:p-10
                lg:p-12
              "
            >

              {/* CLOSE BUTTON */}

              <button
                type="button"
                onClick={() => setAboutOpen(false)}
                aria-label="Close About"
                className="
                  absolute
                  right-5
                  top-5
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/20
                  text-2xl
                  font-light
                  text-white
                  transition-all
                  duration-300
                  hover:border-white/60
                  hover:bg-white/10
                "
              >
                ×
              </button>

              {/* MODAL TITLE */}

              <h3
                className="
                  pr-14
                  text-2xl
                  font-bold
                  tracking-tight
                  text-white
                  md:text-3xl
                "
              >
                About
              </h3>

              {/* MODAL CONTENT */}

              <div
                className="
                  mt-8
                  space-y-7
                  text-sm
                  leading-7
                  text-white/65
                  md:text-base
                  md:leading-8
                "
              >

                <p>
                  Hi, I&apos;m{" "}
                  <strong className="text-white">
                    Ysuss
                  </strong>
                  . I have been actively involved in software
                  development for the past few years, mostly
                  self-taught through my own projects and
                  experiments.
                </p>

                <p>
                  I mainly work on web development, using
                  technologies like{" "}
                  <em>
                    React, Next.js, Laravel, TailwindCSS,
                    PostgreSQL, and MySQL.
                  </em>{" "}
                  Along with these, I develop desktop
                  applications and experiment with different
                  programming languages and tools.
                </p>

                <p>
                  Whenever I see a new technology or tool, I
                  usually start experimenting with it. I love
                  learning, which constantly draws me to
                  different areas of development.
                </p>

                <p>
                  I pay great attention to making my projects
                  as{" "}
                  <strong className="text-white">
                    clean, understandable, and sustainable
                  </strong>{" "}
                  as possible. I care about building systems
                  that are not only visually good, but also
                  practical and easy to maintain.
                </p>

                <p>
                  My current goal is to continue improving my
                  skills in{" "}
                  <strong className="text-white">
                    full-stack development, backend
                    architecture, and system design
                  </strong>
                  , while building more professional projects.
                </p>

                <p>
                  In addition to this, I want to build my own
                  systems, libraries, and simple practical tools
                  that can actually be useful.
                </p>

              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}